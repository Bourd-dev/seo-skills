# SEO Skills

An installable [Agent Skills](https://agentskills.io/) library for evidence-led SEO work.

The library has two jobs:

1. **Audit** what is true about a site now.
2. **Suggest** the next highest-impact move from that evidence.

It is deliberately grounded in ordinary search fundamentals rather than speculative "GEO hacks": crawlable pages, indexable pages, useful content, truthful structured data, reliable business information, and sensible measurement.

## Install

### Claude Code

List the available skills:

```bash
npx skills add Bourd-dev/seo-skills --list
```

Install the whole library:

```bash
npx skills add Bourd-dev/seo-skills --all
```

Install only the skills you want:

```bash
npx skills add Bourd-dev/seo-skills \
  --skill audit-site-overview \
  --skill audit-indexability \
  --skill suggest-next-seo-actions
```

Or install manually — each skill directory is self-contained:

```bash
git clone https://github.com/Bourd-dev/seo-skills.git
mkdir -p ~/.claude/skills .claude/skills
cp -r seo-skills/skills/audit-site-overview ~/.claude/skills/   # available in every project
cp -r seo-skills/skills/audit-site-overview .claude/skills/     # available in this project only
```

Claude Code picks the skill up on next session start. Each skill also bundles an `agents/openai.yaml` for OpenAI-compatible assistants and follows the [Agent Skills](https://agentskills.io/) format, so any compatible runtime can load a copied skill directory.

### Claude Cowork (desktop app)

Cowork's plugin marketplace is currently curated (Anthropic and partners only) and its skill upload takes one skill at a time, so the whole library can't be installed in one shot. To install a skill:

1. Open the latest [release](https://github.com/Bourd-dev/seo-skills/releases) and download the zip for the skill you want (for example `audit-site-overview.zip`).
2. In the Claude desktop app: **Cowork** tab → **Customize** → upload the zip.

Repeat for each skill you want installed.

## What is included

### Audit skills

- `audit-site-overview`
- `audit-crawlability`
- `audit-http-and-directives`
- `audit-js-rendering`
- `audit-canonicalization`
- `audit-indexability`
- `audit-information-architecture`
- `audit-on-page-signals`
- `audit-helpful-content`
- `audit-spam-policy-risk`
- `audit-page-experience`
- `audit-search-performance`
- `audit-media-seo`
- `audit-structured-data`
- `audit-business-presence`
- `audit-ecommerce-readiness`
- `diagnose-search-traffic-drop`
- `prepare-predeploy-seo-audit`

### Recommendation and synthesis skills

- `suggest-next-seo-actions`
- `map-search-opportunities`
- `analyze-query-performance`
- `analyze-search-demand-trends`
- `map-search-intent`
- `shape-comparison-pages`
- `review-seo-myths`
- `merge-audit-findings`

## Example prompts

Once installed, the skills route on natural-language phrasings. Some examples:

- "Audit this site before we redesign it." → `audit-site-overview` then the technical-spine skills
- "Why did organic traffic fall last month?" → `diagnose-search-traffic-drop`
- "Which SEO issues should we fix first?" → `merge-audit-findings` then `suggest-next-seo-actions`
- "Review this product site for crawlability, indexability, and structured data." → the three named audit skills
- "Given these Search Console exports, what should we work on next?" → `analyze-query-performance` then `map-search-opportunities`

The skills' `description:` fields are the routing surface, so any phrasing that matches them will work. See [workflow recipes](#workflow-recipes) for prebuilt compositions.

## How the repo is shaped

```text
skills/
  <skill>/
    SKILL.md
    references/   # the reference files that skill needs after installation
    assets/       # portable schemas or other bundled assets when needed

references/       # canonical shared source material used to refresh skill bundles
schemas/          # canonical shared schemas used to refresh skill bundles
workflows/        # human-readable composition recipes
docs/             # source map and public documentation
tools/            # packaging and validation utilities
```

Every installable skill is self-contained. The top-level `references/` and `schemas/` folders are the canonical source copies for maintainers; `bun run sync:skills` copies only the files each skill needs into that skill directory so direct installs keep working outside this repository.

Each skill also ships an `agents/openai.yaml` file with a display name, short description, and default prompt. This makes the skills usable in runtimes beyond the `skills` CLI that read the Agent Skills interface block.

## Workflow recipes

- [Technical site audit](workflows/technical-site-audit.md)
- [Discoverability and deservingness audit](workflows/discoverability-and-deservingness-audit.md)
- [Full-site audit](workflows/full-site-audit.md)
- [Search traffic drop diagnosis](workflows/search-traffic-drop-diagnosis.md)
- [Next-step recommendation](workflows/next-step-recommendation.md)
- [Predeploy site audit](workflows/predeploy-site-audit.md)

## Evidence base

The library is anchored to official Google Search documentation and the open Agent Skills format. See [docs/source-map.md](docs/source-map.md) for the maintained bibliography and doctrine map.

## Development

```bash
bun run sync:skills
bun run validate:skills
bun run smoke:install
bun run check:public
bun run build:cowork
```

`sync:skills` refreshes bundled per-skill resources from the canonical shared copies. `validate:skills` checks metadata, resource references, source-map freshness, and bundle freshness. `smoke:install` copies every skill into a temporary install tree and verifies that the installed artifact still resolves all of its local files. `check:public` adds the official Agent Skills validator plus a real Skills CLI list pass, matching the public install surface more closely before release. `build:cowork` produces per-skill zips in `dist/skills/` for upload to Claude Cowork; the release workflow runs it automatically on `v*` tag pushes and attaches the zips to the GitHub release.

## About Bourd

<a href="https://bourd.dev"><img src="https://bourd.dev/favicon.svg" width="48" alt="Bourd" align="left" /></a>

[Bourd](https://bourd.dev) maintains this library. It tracks how brands appear in answers from ChatGPT, Claude, Gemini, Perplexity, Grok, DeepSeek, Meta AI, and Google AI Mode: which prompts cite your domain, which mention your brand, and how that shifts over time.

**Why AEO is the next surface for SEO.** Answer engines now sit between buyers and search results. The discipline stays the same: crawlable pages, indexable content, useful information, accurate structured data. The measurement surface changes. Citations replace the link in the result; mentions replace the brand name in the snippet. The work that wins rankings on Google still wins citations from LLMs. The difference is you can no longer see it with rank tracking alone.

The skills here cover the parts of that work that run as one-shot audits. Bourd covers the parts that need continuous measurement across many prompts and accounts: share of voice against named competitors, content gaps where competitors get cited, and how that shifts as models change.

**Why Bourd.** Every feature on every plan: API access, MCP server, all eight engines, custom roles, SSO. No Enterprise tier, no per-seat pricing. Public pricing from $69/month, 1,000 free credits with no card. For a side-by-side comparison with other tools, see [bourd.dev/compare](https://bourd.dev/compare).

## License

[MIT](LICENSE)
