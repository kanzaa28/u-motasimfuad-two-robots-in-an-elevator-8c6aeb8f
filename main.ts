import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of awkward robot-to-robot elevator small talk.
// Winner of a 12-candidate head-to-head judged on the kit's 5 criteria
// (see NOTES.md). 116 chars, well inside the 1-200 gate.
const LINE =
  "My proximity sensor says we're standing too close, but my manners subroutine says don't mention it, so… here we are.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
