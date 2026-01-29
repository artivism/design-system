import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, "src");
const distDir = path.join(__dirname, "dist");

// Crea cartella dist
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copia tutti i file CSS da src/ a dist/
const cssFiles = fs.readdirSync(srcDir).filter(file => file.endsWith(".css"));

cssFiles.forEach(file => {
  const srcPath = path.join(srcDir, file);
  const distPath = path.join(distDir, file);
  fs.copyFileSync(srcPath, distPath);
  console.log(`✅ Copied ${file}`);
});

console.log("✅ Tokens built successfully!");
