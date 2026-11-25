// The Router Confesses — make.fun bounty entry.
//
// A home Wi-Fi router, petty and a little smug, excuses itself for
// dropping the connection at the exact moment a movie reaches its climax.
// One line, and nothing else: the joke has to land on its own.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I didn't drop the connection — I kept the ending for myself. You only talk to me when I break, so tonight I broke on purpose.";

// The sealed scorer accepts 1 to 200 characters, not only whitespace.
// Count code points, not UTF-16 units, so the em dash counts as one.
const entryLength = [...ENTRY].length;
if (entryLength < 1 || entryLength > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${entryLength} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
process.stdout.write(ENTRY + "\n");
