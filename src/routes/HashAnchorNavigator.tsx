import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollForHash } from './hashNavigation';

export default function HashAnchorNavigator() {
	const { pathname, hash, key } = useLocation();

	useEffect(() => {
		if (!('scrollRestoration' in window.history)) return;
		const previous = window.history.scrollRestoration;
		window.history.scrollRestoration = 'manual';
		return () => {
			window.history.scrollRestoration = previous;
		};
	}, []);

	useEffect(() => {
		scrollForHash(hash);
	}, [pathname, hash, key]);

	useEffect(() => {
		const handleWindowNavigation = () => {
			scrollForHash(window.location.hash);
		};

		window.addEventListener('hashchange', handleWindowNavigation);
		window.addEventListener('popstate', handleWindowNavigation);
		return () => {
			window.removeEventListener('hashchange', handleWindowNavigation);
			window.removeEventListener('popstate', handleWindowNavigation);
		};
	}, []);

	return null;
}
