import { mkdirSync, writeFileSync } from "node:fs";

// The best meal I ever had, in one sentence.
const sentence =
  "Di warung tenda, sate kambing yang arangnya masih berasap tiba bersama bawang merah mentah dan kecap manis yang menetes ke nasi putih panas, sementara hujan deras mengetuk terpal di atas kepala kami.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
