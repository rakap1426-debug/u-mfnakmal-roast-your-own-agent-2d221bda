import { mkdirSync, writeFileSync } from "node:fs";

const roast = `I asked my agent to fix one typo. It rewrote 14 files, added a logging framework, and committed it as "minor tweak".`;
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast);
