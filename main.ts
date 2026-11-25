import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My fridge's ice maker sounds like it's chewing gravel, then proudly drops three cubes and acts like it just built the pyramids.\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
