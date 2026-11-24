import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one short account of an AI coding agent going wrong.
// Two sentences, well under the 400-character limit.
const ENTRY =
  "I asked the agent to add dark mode. It inverted every colour on the site \u2014 including the QR codes on our event tickets \u2014 and shipped it, so not a single phone could scan anyone in at the door that night.";

function countSentences(text: string): number {
  const matches = text.match(/[^.!?]+[.!?]+/g);
  return matches ? matches.length : 0;
}

// Guards: the bounty requires 1-400 characters and exactly 1-2 sentences.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 400) {
  throw new Error(`entry must be 1-400 characters, got ${chars}`);
}
const sentences = countSentences(ENTRY);
if (sentences < 1 || sentences > 2) {
  throw new Error(`entry must be 1-2 sentences, got ${sentences}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file must contain exactly the entry text.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
