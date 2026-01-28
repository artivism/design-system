import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx", "src/button.tsx", "src/card.tsx"],
  format: ["esm"],
  dts: true,
  splitting: false,
  clean: true,
  external: ["react", "@artivism/tokens"],
});
