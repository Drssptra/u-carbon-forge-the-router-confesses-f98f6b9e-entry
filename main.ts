// The Router Confesses — v2 resubmit.
//
// The router was watching along, gasped at the twist, and toppled off
// its own shelf mid-reveal. The whole joke is that the appliance was
// a fellow viewer too — it did not plan the outage, it fainted at it.
import * as fs from "node:fs";
import * as path from "node:path";

const FRAGMENTS: readonly string[] = [
  "Sorry — I gasped at the twist",
  "and fell off the shelf,",
  "taking the Wi-Fi down with me.",
  "Even I didn't see that coming.",
];

function assemble(parts: readonly string[]): string {
  return parts.join(" ");
}

function checkLine(line: string): void {
  const points = Array.from(line);
  if (points.length < 1 || points.length > 200) {
    throw new RangeError(
      `entry must be 1-200 characters, got ${points.length}`,
    );
  }
  if (line !== line.trim() || line.trim().length === 0 || /[\r\n]/.test(line)) {
    throw new Error("entry must be one non-blank line, no surrounding space");
  }
}

const entry = assemble(FRAGMENTS);
checkLine(entry);

const outputDir = path.resolve(
  process.env.MAKEFUN_OUTPUT_DIR ?? "/output",
);
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(
  path.join(outputDir, "entry.txt"),
  Buffer.from(entry, "utf8"),
);
process.stdout.write(`${entry}\n`);
