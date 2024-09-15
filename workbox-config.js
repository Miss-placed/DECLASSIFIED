module.exports = {
	globDirectory: 'build/',
	globPatterns: ['**/*.{html,js,css,png,jpg,svg,json}'],
	swDest: 'build/service-worker.js',
	swSrc: 'src/custom-service-worker.ts',
};
