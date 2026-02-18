import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const targets = [
  path.join(root, 'public', 'intel'),
  path.join(root, 'public', 'operations'),
  path.join(root, 'public', 'eggs'),
  path.join(root, 'public', 'quests'),
  path.join(root, 'public', 'sitemap.xml'),
];

for (const target of targets) {
  if (fs.existsSync(target)) {
    fs.rmSync(target, { recursive: true, force: true });
  }
}

console.log('Cleaned public static dossier outputs.');
