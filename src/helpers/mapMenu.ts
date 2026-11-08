import type { MapGroupItem } from '../components/MapControls/types';

export interface GameMenuSection {
	title: string;
	maps: [string, MapGroupItem][];
}

// Preferred order of the game sections in the map menu.
const GAME_ORDER = ['Black Ops 7', 'Black Ops 6', 'Black Ops: Cold War'];

/**
 * Splits the map groupings into one accordion section per game so only the
 * selected game's maps are listed at a time.
 */
export const getGameMenuSections = (
	mapGroupings: Record<string, MapGroupItem>
): GameMenuSection[] => {
	const byGame = new Map<string, [string, MapGroupItem][]>();

	Object.entries(mapGroupings).forEach(entry => {
		const game = entry[1].game as string;
		const maps = byGame.get(game) ?? [];
		maps.push(entry);
		byGame.set(game, maps);
	});

	const orderedGames = [
		...GAME_ORDER.filter(game => byGame.has(game)),
		...Array.from(byGame.keys()).filter(game => !GAME_ORDER.includes(game)),
	];

	return orderedGames.map(game => ({
		title: game,
		maps: byGame.get(game) ?? [],
	}));
};
