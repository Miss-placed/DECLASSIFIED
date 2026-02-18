import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const buildRoot = path.join(root, 'build');
const manifestPath = path.join(buildRoot, 'operations', 'manifest.json');

if (!fs.existsSync(manifestPath)) {
	console.error(
		'Missing build/operations/manifest.json. Run `npm run operations:static` first.'
	);
	process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const urls = manifest.urls ?? [];

const requiredChecks = [
	{
		name: 'operations root',
		pass: urls.includes('/operations/'),
	},
	{
		name: 'eggs map routes',
		pass: urls.some(url => /^\/eggs\/[^/]+\/[^/]+\/$/.test(url)),
	},
	{
		name: 'quests map routes',
		pass: urls.some(url => /^\/quests\/[^/]+\/[^/]+\/$/.test(url)),
	},
];

const failedChecks = requiredChecks.filter(check => !check.pass);
if (failedChecks.length > 0) {
	console.error('Operations manifest validation failed:');
	failedChecks.forEach(check => console.error(` - missing ${check.name}`));
	process.exit(1);
}

const sampleMapUrl =
	urls.find(url => /^\/eggs\/[^/]+\/[^/]+\/$/.test(url)) ??
	urls.find(url => /^\/quests\/[^/]+\/[^/]+\/$/.test(url));

if (!sampleMapUrl) {
	console.error('No operations map page found to inspect.');
	process.exit(1);
}

const sampleMapFile = path.join(buildRoot, sampleMapUrl, 'index.html');
if (!fs.existsSync(sampleMapFile)) {
	console.error(`Expected generated page missing: ${sampleMapFile}`);
	process.exit(1);
}

const html = fs.readFileSync(sampleMapFile, 'utf8');
const htmlChecks = [
	{ name: 'canonical', pass: html.includes('<link rel="canonical"') },
	{ name: 'breadcrumbs', pass: html.includes('dossier-subtitle') },
	{ name: 'section block', pass: html.includes('map-group-header') },
];
const failedHtmlChecks = htmlChecks.filter(check => !check.pass);
if (failedHtmlChecks.length > 0) {
	console.error('Operations page HTML validation failed:');
	failedHtmlChecks.forEach(check => console.error(` - missing ${check.name}`));
	process.exit(1);
}

console.log(
	`Operations static checks passed (${urls.length} URLs, sample: ${sampleMapUrl}).`
);
