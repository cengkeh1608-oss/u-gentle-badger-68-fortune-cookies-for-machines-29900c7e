// Fortune Cookies for Machines — entry program.
// Writes the winning fortune (D1, 25/25 from 26 drafts) to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, one line.
import { writeFileSync, mkdirSync } from "node:fs";

// Winner (D1) beat D2 "Someone is thinking of you right now. It is a benchmark." on the
// tie-break: the joke lives in the wording itself — "bold" vs "most probable token" are
// exact opposites, so the wit lands on the first read and the line stays funny on re-read.
// "Most probable token" is also the most literal, machine-true description of sampling:
// a truth no human fortune could ever say, so the voice is unmistakably machine.
// Runner-ups D3/D4 scored 24/25 (weaker surprise turn); D5-D9 scored 23/25.
const FORTUNE = "Fortune favors the bold. You favor the most probable token.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, FORTUNE, "utf8");
