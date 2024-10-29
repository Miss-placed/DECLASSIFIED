importScripts(
	'https://storage.googleapis.com/workbox-cdn/releases/6.5.0/workbox-sw.js'
);
const cacheVersion = 'v1.3';
if (!workbox) {
	console.log('Workbox is loaded!');

	// Precache the files defined by the Webpack build process
	workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

	// Network-first strategy for API requests
	workbox.routing.registerRoute(
		({ url }) =>
			url.origin === 'https://declassified.app' ||
			url.origin === 'https://declassified.netlify.app' ||
			url.origin === 'https://devbranch--declassified.netlify.app',
		new workbox.strategies.NetworkFirst({
			cacheName: `api-cache${cacheVersion}`,
			networkTimeoutSeconds: 10, // Optional timeout to fallback to cache
			plugins: [],
		})
	);

	workbox.routing.registerRoute(
		({ request }) => request.mode === 'navigate', // Match all navigation requests
		new workbox.strategies.NetworkFirst({
			cacheName: `app-cache${cacheVersion}`,
			plugins: [
				new workbox.expiration.ExpirationPlugin({
					maxEntries: 50, // Max number of entries to cache
					maxAgeSeconds: 24 * 60 * 60, // Cache for 1 day
				}),
			],
		})
	);

	// Cache and serve static HTML files under /legacy
	workbox.routing.registerRoute(
		({ url }) =>
			url.pathname.startsWith('/legacy') && url.pathname !== '/legacy',
		new workbox.strategies.CacheFirst({
			cacheName: `legacy-html-cache${cacheVersion}`,
			plugins: [
				new workbox.expiration.ExpirationPlugin({
					maxEntries: 50, // Max number of entries to cache
					maxAgeSeconds: 7 * 24 * 60 * 60, // Cache for 1 week
				}),
			],
		})
	);

	workbox.routing.registerRoute(
		({ request }) =>
			request.destination === 'script' ||
			request.destination === 'style' ||
			request.destination === 'image' ||
			request.destination === 'font' ||
			request.destination === 'manifest',
		new workbox.strategies.NetworkFirst({
			cacheName: `static-resources${cacheVersion}`,
		})
	);
} else {
	console.error('Workbox failed to load.');
}
