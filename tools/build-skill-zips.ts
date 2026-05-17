import { mkdirSync, readdirSync, rmSync, statSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join } from "node:path";

const root = process.cwd();
const skillsDir = join(root, "skills");
const outDir = join(root, "dist", "skills");

function skillDirectories(): string[] {
  return readdirSync(skillsDir)
    .filter((entry) => statSync(join(skillsDir, entry)).isDirectory())
    .sort();
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

const skills = skillDirectories();

for (const skillName of skills) {
  const skillPath = join(skillsDir, skillName);
  const zipPath = join(outDir, `${skillName}.zip`);

  const res = spawnSync("zip", ["-rq", zipPath, "."], {
    cwd: skillPath,
    encoding: "utf8",
  });

  if (res.status !== 0) {
    console.error(`✗ ${skillName}: ${res.stderr || `exit ${res.status}`}`);
    process.exit(1);
  }

  console.log(`✓ ${skillName}.zip`);
}

console.log(`\nBuilt ${skills.length} skill zip(s) → dist/skills/`);
