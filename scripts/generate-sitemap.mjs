import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const buildManifestPath = path.join(root, 'build/intel/manifest.json');
const publicManifestPath = path.join(root, 'public/intel/manifest.json');
const buildSitemapPath = path.join(root, 'build/sitemap.xml');
const publicSitemapPath = path.join(root, 'public/sitemap.xml');
const manifestPath = fs.existsSync(buildManifestPath)
  ? buildManifestPath
  : publicManifestPath;
const sitemapPath = fs.existsSync(buildManifestPath)
  ? buildSitemapPath
  : publicSitemapPath;
const baseUrl = 'https://declassified.app';

if (!fs.existsSync(manifestPath)) {
  console.error('Intel manifest missing. Run generate-intel-static first.');
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const today = new Date().toISOString().split('T')[0];
const uniqueUrls = [...new Set(['/', ...(manifest.urls ?? [])])];

const body = uniqueUrls
  .map((url) => `  <url><loc>${baseUrl}${url}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

fs.writeFileSync(sitemapPath, xml, 'utf8');
console.log(`Generated sitemap with ${uniqueUrls.length} URLs at ${sitemapPath}`);
