import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join, resolve } from "node:path";

const root = process.cwd();

const LIVE_SITE_SKILLS = [
  "audit-site-overview",
  "audit-crawlability",
  "audit-http-and-directives",
  "audit-js-rendering",
  "audit-canonicalization",
  "audit-indexability",
  "audit-information-architecture",
  "audit-on-page-signals",
  "audit-helpful-content",
  "audit-spam-policy-risk",
  "audit-media-seo",
  "audit-structured-data",
  "audit-business-presence",
  "audit-ecommerce-readiness",
  "map-search-intent",
  "shape-comparison-pages",
  "review-seo-myths",
];

const DATA_DEPENDENT_SKILLS = [
  "audit-search-performance",
  "diagnose-search-traffic-drop",
  "analyze-query-performance",
  "analyze-search-demand-trends",
  "map-search-opportunities",
];

const SYNTHESIS_SKILLS = [
  "merge-audit-findings",
  "suggest-next-seo-actions",
  "prepare-predeploy-seo-audit",
];

interface Options {
  domain: string;
  concurrency: number;
  model: string;
  budgetUsd: number;
  skills: string[];
  includeData: boolean;
  maxFetches: number;
}

function printHelp(): void {
  console.log(
    `Usage: bun run eval:skills [options]

Runs each in-scope skill against a live domain via 'claude -p' and writes the
agent's output to evals/<date>/<skill>.md, plus a SUMMARY.md index.

Options:
  --domain <d>          Target domain (default: example.com)
  --skill <name>        Run only this skill (repeatable). Overrides default scope.
  --include-data        Include data-dependent skills (Search Console/Analytics).
                        Without real inputs they will report the data is missing.
  --concurrency <n>     Parallel skill runs (default: 3)
  --model <alias>       Model alias (default: sonnet)
  --budget-usd <n>      Per-skill API spend cap (default: 3)
  --max-fetches <n>     Soft cap on URL fetches against the target domain per skill
                        (default: 25). Surfaced in the prompt so the agent samples
                        rather than crawling. Smaller values for large or sensitive sites.
  -h, --help            Show this help.

Default scope (${LIVE_SITE_SKILLS.length}): live-site audit/recommendation skills.
Skipped without --include-data (${DATA_DEPENDENT_SKILLS.length}): ${DATA_DEPENDENT_SKILLS.join(", ")}
Synthesis (always skipped, run manually after audits): ${SYNTHESIS_SKILLS.join(", ")}
`,
  );
}

function parseArgs(): Options {
  const argv = process.argv.slice(2);
  const opts: Options = {
    domain: "example.com",
    concurrency: 3,
    model: "sonnet",
    budgetUsd: 3,
    skills: [],
    includeData: false,
    maxFetches: 25,
  };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    const next = (): string => {
      const value = argv[++i];
      if (value === undefined) {
        console.error(`error: ${arg} requires a value`);
        process.exit(2);
      }
      return value;
    };
    if (arg === "--domain") opts.domain = next();
    else if (arg === "--concurrency") opts.concurrency = Number(next());
    else if (arg === "--model") opts.model = next();
    else if (arg === "--budget-usd") opts.budgetUsd = Number(next());
    else if (arg === "--max-fetches") opts.maxFetches = Number(next());
    else if (arg === "--skill") opts.skills.push(next());
    else if (arg === "--include-data") opts.includeData = true;
    else if (arg === "--help" || arg === "-h") {
      printHelp();
      process.exit(0);
    } else {
      console.error(`error: unknown argument '${arg}'`);
      printHelp();
      process.exit(2);
    }
  }
  return opts;
}

function buildPrompt(skillName: string, domain: string, maxFetches: number): string {
  const skillDir = resolve(root, "skills", skillName);
  return [
    `You are evaluating the SEO skill at ${skillDir} against the live domain https://${domain}.`,
    ``,
    `Fetch budget: do not exceed ${maxFetches} URL fetches against https://${domain} during this evaluation. The skill is meant to sample, not crawl. Pick representative templates per the skill's sampling rules; stop when you have enough evidence to write the required output. Fetches to other origins (for example external documentation) do not count against this cap.`,
    ``,
    `Procedure:`,
    `1. Read ${skillDir}/SKILL.md.`,
    `2. Read every reference file the skill instructs you to read (relative paths like references/*.md and assets/*.json under the skill directory).`,
    `3. Execute the skill's workflow against https://${domain}. Use WebFetch and curl for evidence. Do not invent data; if a piece of evidence is unavailable, say so. Respect the fetch budget above.`,
    `4. Produce the output the skill specifies (its "Output" or "Minimum output" section). Format the entire response as markdown.`,
    `5. After the audit output, append a final section verbatim titled "Evaluator notes" with these bullets:`,
    `   - Was SKILL.md clear and sufficient, or were there gaps?`,
    `   - Were the reference files coherent with the workflow?`,
    `   - Any unstated assumptions, missing decision rules, or contradictions?`,
    `   - Usefulness for a real SEO decision on a 1-5 scale, with one sentence of justification.`,
    ``,
    `Do not add sections the skill did not ask for. Stay within the skill's instructions.`,
  ].join("\n");
}

interface RunResult {
  skill: string;
  status: "ok" | "error";
  durationMs?: number;
  costUsd?: number;
  numTurns?: number;
  reason?: string;
}

function runSkill(skillName: string, opts: Options, outDir: string): RunResult {
  const skillPath = resolve(root, "skills", skillName, "SKILL.md");
  if (!existsSync(skillPath)) {
    return { skill: skillName, status: "error", reason: `SKILL.md not found` };
  }
  const prompt = buildPrompt(skillName, opts.domain, opts.maxFetches);
  const args = [
    "-p",
    prompt,
    "--model",
    opts.model,
    "--output-format",
    "json",
    "--permission-mode",
    "bypassPermissions",
    "--disallowed-tools",
    "Edit Write NotebookEdit",
    "--max-budget-usd",
    String(opts.budgetUsd),
    "--no-session-persistence",
  ];

  const startedAt = Date.now();
  const res = spawnSync("claude", args, {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  const elapsed = Date.now() - startedAt;

  if (res.error) {
    return { skill: skillName, status: "error", reason: `spawn failed: ${res.error.message}`, durationMs: elapsed };
  }
  if (res.status !== 0) {
    writeFileSync(join(outDir, `${skillName}.error.log`), `stdout:\n${res.stdout}\n\nstderr:\n${res.stderr}`);
    return { skill: skillName, status: "error", reason: `exit ${res.status}; see ${skillName}.error.log`, durationMs: elapsed };
  }

  let json: { is_error?: boolean; result?: string; total_cost_usd?: number; num_turns?: number };
  try {
    json = JSON.parse(res.stdout);
  } catch {
    writeFileSync(join(outDir, `${skillName}.error.log`), res.stdout);
    return { skill: skillName, status: "error", reason: `non-JSON stdout; see ${skillName}.error.log`, durationMs: elapsed };
  }

  if (json.is_error) {
    return { skill: skillName, status: "error", reason: json.result ?? "is_error", durationMs: elapsed, costUsd: json.total_cost_usd };
  }

  writeFileSync(join(outDir, `${skillName}.md`), json.result ?? "");
  return {
    skill: skillName,
    status: "ok",
    durationMs: elapsed,
    costUsd: json.total_cost_usd,
    numTurns: json.num_turns,
  };
}

async function runAll(skills: string[], opts: Options, outDir: string): Promise<RunResult[]> {
  const results: RunResult[] = [];
  let cursor = 0;
  const workers = Array.from({ length: Math.max(1, opts.concurrency) }, async () => {
    while (cursor < skills.length) {
      const skill = skills[cursor++];
      console.log(`▶ ${skill}`);
      const result = runSkill(skill, opts, outDir);
      results.push(result);
      const icon = result.status === "ok" ? "✓" : "✗";
      const stats =
        result.status === "ok"
          ? ` (${((result.durationMs ?? 0) / 1000).toFixed(1)}s, $${result.costUsd?.toFixed(3) ?? "?"}, ${result.numTurns ?? "?"} turns)`
          : ` — ${result.reason}`;
      console.log(`${icon} ${skill}${stats}`);
    }
  });
  await Promise.all(workers);
  results.sort((a, b) => a.skill.localeCompare(b.skill));
  return results;
}

function writeSummary(results: RunResult[], opts: Options, outDir: string): void {
  const totalCost = results.reduce((acc, r) => acc + (r.costUsd ?? 0), 0);
  const lines = [
    `# Skill eval summary`,
    ``,
    `- Domain: https://${opts.domain}`,
    `- Model: ${opts.model}`,
    `- Run at: ${new Date().toISOString()}`,
    `- Total cost: $${totalCost.toFixed(2)}`,
    ``,
    `| Skill | Status | Time | Cost | Turns |`,
    `|---|---|---|---|---|`,
  ];
  for (const r of results) {
    const status = r.status === "ok" ? "✓" : `✗ ${r.reason ?? ""}`;
    const time = r.durationMs ? `${(r.durationMs / 1000).toFixed(1)}s` : "—";
    const cost = r.costUsd != null ? `$${r.costUsd.toFixed(3)}` : "—";
    const turns = r.numTurns ?? "—";
    const link = r.status === "ok" ? `[${r.skill}](${r.skill}.md)` : r.skill;
    lines.push(`| ${link} | ${status} | ${time} | ${cost} | ${turns} |`);
  }
  writeFileSync(join(outDir, "SUMMARY.md"), lines.join("\n") + "\n");
}

const opts = parseArgs();

const claudeCheck = spawnSync("which", ["claude"], { encoding: "utf8" });
if (claudeCheck.status !== 0) {
  console.error("error: 'claude' CLI not found on PATH. Install Claude Code before running eval:skills.");
  process.exit(1);
}

const scope = opts.skills.length > 0
  ? opts.skills
  : opts.includeData
    ? [...LIVE_SITE_SKILLS, ...DATA_DEPENDENT_SKILLS]
    : [...LIVE_SITE_SKILLS];

const date = new Date().toISOString().slice(0, 10);
const outDir = resolve(root, "evals", date);
mkdirSync(outDir, { recursive: true });

console.log(`Evaluating ${scope.length} skill(s) against https://${opts.domain}`);
console.log(`Output dir: ${outDir}`);
console.log(`Concurrency: ${opts.concurrency}, model: ${opts.model}, per-skill cap: $${opts.budgetUsd}`);
console.log();

const results = await runAll(scope, opts, outDir);
writeSummary(results, opts, outDir);

const failed = results.filter((r) => r.status !== "ok").length;
console.log();
console.log(`Done. ${results.length - failed}/${results.length} succeeded. Summary: ${join(outDir, "SUMMARY.md")}`);
if (failed > 0) process.exit(1);
