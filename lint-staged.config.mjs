import path from "node:path";
function eslintPerWorkspace(files) {
  const groups = new Map();

  for (const file of files) {
    const rel = path.relative(process.cwd(), file).split(path.sep);
    const dir =
      rel.length > 1 && (rel[0] === "apps" || rel[0] === "packages")
        ? path.join(rel[0], rel[1])
        : ".";

    const relToDir = path.relative(path.resolve(dir), file);
    const list = groups.get(dir) ?? [];
    list.push(relToDir);
    groups.set(dir, list);
  }

  return [...groups.entries()].map(
    ([dir, relFiles]) =>
      `pnpm --dir ${dir} exec eslint --fix -- ${relFiles.map((f) => JSON.stringify(f)).join(" ")}`,
  );
}

export default {
  "*.{ts,tsx,js,jsx,mjs,cjs}": [eslintPerWorkspace, "prettier --write"],
  "*.{json,css,scss,md}": ["prettier --write"],
};
