importScripts(
	'https://storage.googleapis.com/workbox-cdn/releases/6.5.0/workbox-sw.js'
);

if (workbox) {
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
			cacheName: 'api-cache',
			networkTimeoutSeconds: 10, // Optional timeout to fallback to cache
			plugins: [],
		})
	);

	// Cache-first strategy for app routes
	workbox.routing.registerRoute(
		({ request }) =>
			request.mode === 'navigate' || request.destination === 'document',
		new workbox.strategies.CacheFirst({
			cacheName: 'app-cache',
			plugins: [
				new workbox.expiration.ExpirationPlugin({
					maxEntries: 50, // Max number of entries to cache
					maxAgeSeconds: 24 * 60 * 60, // Cache for 1 day
				}),
			],
		})
	);

	// Stale-while-revalidate strategy for static resources (scripts, styles, images)
	workbox.routing.registerRoute(
		({ request }) =>
			request.destination === 'script' ||
			request.destination === 'style' ||
			request.destination === 'image',
		new workbox.strategies.StaleWhileRevalidate({
			cacheName: 'static-resources',
		})
	);
} else {
	console.error('Workbox failed to load.');
}
