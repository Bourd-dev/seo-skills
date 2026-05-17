import {
  cpSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const root = process.cwd();
const sourceSkillsDir = join(root, "skills");
const localResourcePattern = /\b(?:references|assets)\/[A-Za-z0-9._-]+\b/g;
const tempRoot = mkdtempSync(join(tmpdir(), "seo-skills-install-"));
const installedSkillsDir = join(tempRoot, ".agents", "skills");

try {
  const skillNames = readdirSync(sourceSkillsDir)
    .filter((entry) => statSync(join(sourceSkillsDir, entry)).isDirectory())
    .sort();

  for (const skillName of skillNames) {
    const sourceDir = join(sourceSkillsDir, skillName);
    const installedDir = join(installedSkillsDir, skillName);
    cpSync(sourceDir, installedDir, { recursive: true });

    const skillBody = readFileSync(join(installedDir, "SKILL.md"), "utf8");
    const resources = [...new Set(skillBody.match(localResourcePattern) ?? [])];

    for (const resourcePath of resources) {
      const installedPath = join(installedDir, resourcePath);
      statSync(installedPath);
    }

    console.log(`✓ ${skillName}: install artifact resolves ${resources.length} resource(s)`);
  }

  console.log(`Smoke-installed ${skillNames.length} skill(s).`);
} finally {
  rmSync(tempRoot, { recursive: true, force: true });
}
