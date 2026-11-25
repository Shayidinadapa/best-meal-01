import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The best meal I ever had, in one sentence.
const sentence =
  "Di warung tenda, sate kambing yang arangnya masih berasap tiba bersama bawang merah mentah dan kecap manis yang menetes ke nasi putih panas, sementara hujan deras mengetuk terpal di atas kepala kami.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");

// Read-back verification: the file must round-trip byte-for-byte.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== sentence) {
  throw new Error("entry.txt does not match the entry text after write");
}
