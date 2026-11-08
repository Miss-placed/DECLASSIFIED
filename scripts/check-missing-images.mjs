import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

// Extract all img IDs from data files
const dataDir = path.join(root, 'src/data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));
const dataIds = new Set();
for (const f of files) {
  const content = fs.readFileSync(path.join(dataDir, f), 'utf8');
  const rx = /img:\s*[`']([^`']+)[`']/g;
  let m;
  while ((m = rx.exec(content)) !== null) {
    const id = m[1].trim();
    if (id) dataIds.add(id);
  }
}

// Get downloaded files
const dlDir = path.join(root, 'scripts/imgur-downloads');
const dlFiles = fs.readdirSync(dlDir).filter(f => /\.(jpg|png|gif)$/i.test(f));
const downloaded = new Set(dlFiles.map(f => path.parse(f).name));

// Compare
const missing = [...dataIds].filter(id => !downloaded.has(id)).sort();
const extra = [...downloaded].filter(id => !dataIds.has(id)).sort();

console.log(`Data IDs: ${dataIds.size}`);
console.log(`Downloaded: ${downloaded.size}`);
console.log(`\n=== MISSING (in data, NOT downloaded) [${missing.length}] ===`);
missing.forEach(id => console.log(id));
console.log(`\n=== EXTRA (downloaded, NOT in data) [${extra.length}] ===`);
extra.forEach(id => console.log(id));
