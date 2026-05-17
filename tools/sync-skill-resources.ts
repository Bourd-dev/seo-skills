import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
} from "node:fs";
import { basename, join } from "node:path";

const root = process.cwd();
const skillsDir = join(root, "skills");
const canonicalReferencesDir = join(root, "references");
const canonicalSchemasDir = join(root, "schemas");
const localResourcePattern = /\b(?:references|assets)\/[A-Za-z0-9._-]+\b/g;

function skillDirectories(): string[] {
  return readdirSync(skillsDir)
    .filter((entry) => statSync(join(skillsDir, entry)).isDirectory())
    .sort();
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

for (const skillName of skillDirectories()) {
  const skillDir = join(skillsDir, skillName);
  const skillPath = join(skillDir, "SKILL.md");
  const body = readFileSync(skillPath, "utf8");
  const resources = [...new Set(body.match(localResourcePattern) ?? [])].sort();

  for (const generatedDirName of ["references", "assets"]) {
    rmSync(join(skillDir, generatedDirName), { recursive: true, force: true });
  }

  for (const resourcePath of resources) {
    const sourcePath = canonicalSourceFor(resourcePath);
    if (!existsSync(sourcePath)) {
      throw new Error(
        `${skillName} references '${resourcePath}', but '${sourcePath}' does not exist`,
      );
    }

    const destinationPath = join(skillDir, resourcePath);
    mkdirSync(join(destinationPath, ".."), { recursive: true });
    copyFileSync(sourcePath, destinationPath);
  }

  console.log(`✓ ${skillName}: synced ${resources.length} resource(s)`);
}
