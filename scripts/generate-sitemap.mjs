import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const buildIntelManifestPath = path.join(root, 'build/intel/manifest.json');
const publicIntelManifestPath = path.join(root, 'public/intel/manifest.json');
const buildOperationsManifestPath = path.join(root, 'build/operations/manifest.json');
const publicOperationsManifestPath = path.join(root, 'public/operations/manifest.json');
const buildSitemapPath = path.join(root, 'build/sitemap.xml');
const publicSitemapPath = path.join(root, 'public/sitemap.xml');
const baseUrl = 'https://declassified.app';

const manifestSources = [
	{
		name: 'intel',
		candidates: [buildIntelManifestPath, publicIntelManifestPath],
	},
	{
		name: 'operations',
		candidates: [buildOperationsManifestPath, publicOperationsManifestPath],
	},
];

const loadManifest = candidates => {
	for (const manifestPath of candidates) {
		if (fs.existsSync(manifestPath)) {
			return JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
		}
	}
	return null;
};

const missing = [];
const manifests = manifestSources.map(source => {
	const manifest = loadManifest(source.candidates);
	if (!manifest) {
		missing.push(source.name);
	}
	return { name: source.name, manifest };
});

if (missing.length > 0) {
	console.error(
		`Missing manifest(s): ${missing.join(
			', '
		)}. Run static generators first (intel + operations).`
	);
	process.exit(1);
}

const shouldWriteBuildSitemap =
	fs.existsSync(buildIntelManifestPath) ||
	fs.existsSync(buildOperationsManifestPath);
const sitemapPath = shouldWriteBuildSitemap ? buildSitemapPath : publicSitemapPath;
const today = new Date().toISOString().split('T')[0];
const uniqueUrls = Array.from(
	new Set([
		'/',
		...manifests.flatMap(entry => entry.manifest?.urls ?? []),
	])
);

const body = uniqueUrls
  .map((url) => `  <url><loc>${baseUrl}${url}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

fs.writeFileSync(sitemapPath, xml, 'utf8');
console.log(`Generated sitemap with ${uniqueUrls.length} URLs at ${sitemapPath}`);
