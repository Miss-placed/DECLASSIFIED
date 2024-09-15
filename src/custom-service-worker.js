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
			url.origin === 'https://declassified.netlify.app', // Adjust this to your API domain
		new workbox.strategies.NetworkFirst({
			cacheName: 'api-cache',
			networkTimeoutSeconds: 10, // Optional timeout to fallback to cache
			plugins: [],
		})
	);

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
