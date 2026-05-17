import {
  existsSync,
  readFileSync,
  readdirSync,
  statSync,
} from "node:fs";
import { basename, join } from "node:path";

const root = process.cwd();
const skillsDir = join(root, "skills");
const canonicalReferencesDir = join(root, "references");
const canonicalSchemasDir = join(root, "schemas");
const sourceMapPath = join(root, "docs", "source-map.md");
const namePattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const localResourcePattern = /\b(?:references|assets)\/[A-Za-z0-9._-]+\b/g;
const legacyResourcePattern = /\.\.\/\.\.\/(?:references|schemas)\//;

function parseFrontmatter(markdown: string): Record<string, string> {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) throw new Error("missing YAML frontmatter");

  const fields: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();
    fields[key] = value;
  }
  return fields;
}

function canonicalSourceFor(resourcePath: string): string {
  const fileName = basename(resourcePath);
  if (resourcePath.startsWith("references/")) {
    return join(canonicalReferencesDir, fileName);
  }
  if (resourcePath.startsWith("assets/")) {
    return join(canonicalSchemasDir, fileName);
  }
  throw new Error(`unsupported bundled resource path '${resourcePath}'`);
}

function validateSkill(skillName: string): string[] {
  const errors: string[] = [];
  const skillDir = join(skillsDir, skillName);
  const skillPath = join(skillDir, "SKILL.md");
  const body = readFileSync(skillPath, "utf8");
  const frontmatter = parseFrontmatter(body);

  if (!frontmatter.name) errors.push("missing frontmatter name");
  if (!frontmatter.description) errors.push("missing frontmatter description");
  if (frontmatter.name && frontmatter.name !== skillName) {
    errors.push(`frontmatter name '${frontmatter.name}' does not match folder '${skillName}'`);
  }
  if (frontmatter.name && !namePattern.test(frontmatter.name)) {
    errors.push("name must use lowercase letters, digits, and hyphens only");
  }
  if (frontmatter.name && frontmatter.name.length > 64) {
    errors.push("name exceeds 64 characters");
  }
  if (frontmatter.description && frontmatter.description.length > 1024) {
    errors.push("description exceeds 1024 characters");
  }
  if (body.includes("[TODO:")) {
    errors.push("contains unresolved TODO placeholders");
  }
  if (legacyResourcePattern.test(body)) {
    errors.push("uses non-portable references outside the skill directory");
  }

  const resources = [...new Set(body.match(localResourcePattern) ?? [])].sort();
  for (const resourcePath of resources) {
    const bundledPath = join(skillDir, resourcePath);
    const canonicalPath = canonicalSourceFor(resourcePath);

    if (!existsSync(bundledPath)) {
      errors.push(`missing bundled resource '${resourcePath}'`);
      continue;
    }
    if (!existsSync(canonicalPath)) {
      errors.push(`missing canonical source for '${resourcePath}'`);
      continue;
    }
    if (readFileSync(bundledPath, "utf8") !== readFileSync(canonicalPath, "utf8")) {
      errors.push(`bundled resource '${resourcePath}' is stale; run bun run sync:skills`);
    }
  }

  return errors;
}

function validateSourceMap(): string[] {
  const errors: string[] = [];
  const sourceMap = readFileSync(sourceMapPath, "utf8");
  const listedReferences = new Set(
    [...sourceMap.matchAll(/^- `([A-Za-z0-9._-]+)`$/gm)].map((match) => match[1]),
  );
  const canonicalReferences = new Set(
    readdirSync(canonicalReferencesDir)
      .filter((entry) => entry.endsWith(".md"))
      .map((entry) => basename(entry, ".md")),
  );

  for (const referenceName of [...canonicalReferences].sort()) {
    if (!listedReferences.has(referenceName)) {
      errors.push(`docs/source-map.md is missing shared reference '${referenceName}'`);
    }
  }

  for (const referenceName of [...listedReferences].sort()) {
    if (!canonicalReferences.has(referenceName)) {
      errors.push(`docs/source-map.md lists unknown shared reference '${referenceName}'`);
    }
  }

  return errors;
}

const skillNames = readdirSync(skillsDir)
  .filter((entry) => statSync(join(skillsDir, entry)).isDirectory())
  .sort();

let failed = false;
const sourceMapErrors = validateSourceMap();
if (sourceMapErrors.length === 0) {
  console.log("✓ docs/source-map.md");
} else {
  failed = true;
  console.error("✗ docs/source-map.md");
  for (const error of sourceMapErrors) console.error(`  - ${error}`);
}

for (const skillName of skillNames) {
  try {
    const errors = validateSkill(skillName);
    if (errors.length === 0) {
      console.log(`✓ ${skillName}`);
      continue;
    }

    failed = true;
    console.error(`✗ ${skillName}`);
    for (const error of errors) console.error(`  - ${error}`);
  } catch (error) {
    failed = true;
    console.error(`✗ ${skillName}`);
    console.error(`  - ${error instanceof Error ? error.message : String(error)}`);
  }
}

if (failed) process.exit(1);
console.log(`Validated ${skillNames.length} skill(s).`);
