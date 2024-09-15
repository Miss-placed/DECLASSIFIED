/// <reference lib="webworker" />
import { clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies';

declare const self: ServiceWorkerGlobalScope;

clientsClaim();

// Precache the files defined by the Webpack build process
precacheAndRoute(self.__WB_MANIFEST);

// Network-first strategy for API requests
registerRoute(
    ({ url }) => url.origin === 'https://declassified.app' || url.origin === 'https://declassified.netlify.app',  // Adjust this to your API domain
    new NetworkFirst({
        cacheName: 'api-cache',
        networkTimeoutSeconds: 10,  // Optional timeout to fallback to cache
        plugins: [
        ],
    })
);

registerRoute(
    ({ request }) => request.destination === 'script' || request.destination === 'style' || request.destination === 'image',
    new StaleWhileRevalidate({
        cacheName: 'static-resources',
    })
);

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
