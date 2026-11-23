// One-line office joke for make.fun's "Make the AI Judge Laugh: Office Jokes".
// Writes exactly one joke to /output/entry.txt — nothing else, no trailing
// newline. The joke is 90 characters, inside the gate's 1–199 range, and the
// output is a constant, so both grader runs write byte-identical files.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Someone keeps stealing my lunch, so I labelled it 'meeting notes' \u2014 now nobody touches it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
