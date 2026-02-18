const topPassDelays = [0, 50, 150, 300, 600];

export const scrollToPageTop = () => {
	window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
	document.documentElement.scrollTop = 0;
	document.body.scrollTop = 0;

	const root = document.getElementById('root');
	if (root) {
		root.scrollTop = 0;
	}

	const main = document.querySelector('main');
	if (main instanceof HTMLElement) {
		main.scrollTop = 0;
	}

	const dossierPage = document.querySelector('.intel-dossier-page');
	if (dossierPage instanceof HTMLElement) {
		dossierPage.scrollTop = 0;
	}
};

export const scrollForHash = (hash: string) => {
	if (!hash) {
		topPassDelays.forEach(delay => {
			window.setTimeout(() => {
				if (window.location.hash) return;
				scrollToPageTop();
			}, delay);
		});
		return;
	}

	const hashTarget = hash.replace(/^#/, '');
	let targetId = '';
	try {
		targetId = decodeURIComponent(hashTarget);
	} catch {
		scrollToPageTop();
		return;
	}

	if (!targetId) {
		scrollToPageTop();
		return;
	}

	let attempts = 0;
	const maxAttempts = 20;
	const scrollToTarget = () => {
		const target = document.getElementById(targetId);
		if (target) {
			target.scrollIntoView({ block: 'start' });
			return;
		}
		if (attempts >= maxAttempts) {
			scrollToPageTop();
			return;
		}
		attempts += 1;
		window.setTimeout(scrollToTarget, 50);
	};

	window.requestAnimationFrame(scrollToTarget);
};
