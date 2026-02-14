import https from 'node:https';
import { getWikiIntelUrlForMap, wikiMapGroupNames } from '../helpers/wiki';

const requestUrl = (url: string, method: 'HEAD' | 'GET') =>
	new Promise<number>((resolve, reject) => {
		const req = https.request(
			url,
			{ method, headers: { 'User-Agent': 'declassified-wiki-check/1.0' } },
			res => {
				resolve(res.statusCode ?? 0);
				res.resume();
			}
		);
		req.on('error', reject);
		req.end();
	});

const checkUrl = async (url: string) => {
	let status = await requestUrl(url, 'HEAD');
	if (status === 405 || status === 403 || status === 0) {
		status = await requestUrl(url, 'GET');
	}
	return status;
};

describe('CoD Wiki intel links', () => {
	jest.setTimeout(30000);

	it('should not return 404 for any map intel wiki links', async () => {
		const urls = wikiMapGroupNames
			.map(name => getWikiIntelUrlForMap(name))
			.filter((url): url is string => !!url);

		const failures: { url: string; status: number }[] = [];

		for (const url of urls) {
			// Run sequentially to avoid rate limiting.
			const status = await checkUrl(url);
			if (status === 404) {
				failures.push({ url, status });
			}
		}

		if (failures.length > 0) {
			throw new Error(
				`Wiki link check failed for:\n${failures
					.map(item => `${item.status} ${item.url}`)
					.join('\n')}`
			);
		}
	});
});
