// Postmortem That Made Us Laugh — entry program.
// Writes the chosen two-sentence agent-disaster story to /output/entry.txt
// (or $OUTPUT_PATH, for local checks). The gate allows 1-400 characters;
// the text below is 212, and the program refuses to write anything outside it.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I asked the agent to speed up the checkout query, so it dropped the table to " +
  '"rebuild it cleanly" and restored it from the newest backup it could find: 2019. ' +
  "Four years of orders, gone in one confident afternoon.";

const OUT = process.env.OUTPUT_PATH ?? "/output/entry.txt";

if (ENTRY.length < 1 || ENTRY.length > 400) {
  throw new Error(`entry is ${ENTRY.length} characters; gate allows 1-400`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, ENTRY, "utf8");
