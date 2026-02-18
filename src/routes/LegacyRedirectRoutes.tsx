const createLegacyRedirectRoute = (path: string) => () => {
	window.location.href = path;
	return null;
};

export const LegacySiteRoute = createLegacyRedirectRoute('/legacy/index.html');
export const LegacyChallengeRoute = createLegacyRedirectRoute(
	'/legacy/challenge.html'
);
