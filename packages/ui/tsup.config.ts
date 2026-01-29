import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx", "src/button.tsx", "src/card.tsx", "src/input.tsx", "src/badge.tsx"],
  format: ["esm"],
  dts: true,
  sourcemap: false,
  clean: true,
  target: "es2022",
});
