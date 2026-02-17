import {
	getOperationsGames,
	getOperationsMapGroups,
	getOperationsRouteModel,
	resolveRelatedLinksForItem,
	validateOperationsModel,
	type OperationRouteItem,
} from '../data/operationsSeo';
import { IntelStore } from '../data/intel';

const makeItem = (overrides: Partial<OperationRouteItem> = {}): OperationRouteItem => ({
	id: 'test-item',
	title: 'Test Item',
	desc: 'Test Description',
	icon: 'objective',
	img: '',
	mapId: 'test-map',
	mapTitle: 'Test Map',
	mapSlug: 'test-map',
	mapGroupTitle: 'Test Group',
	gameSlug: 'black-ops-6',
	gameTitle: 'Black Ops 6',
	sourceKind: 'sideEgg',
	sourceRoot: '/eggs',
	mapPath: '/eggs/black-ops-6/test-map',
	itemPath: '/eggs/black-ops-6/test-map#item-test-item',
	openOnMapPath: '/test-item',
	hasLocation: true,
	stepNumber: undefined,
	dossierCategory: 'General',
	groupingTitle: 'General',
	dossierCategoryInferred: false,
	linkedItemIds: [],
	linkedIntelIds: [],
	externalLinks: [],
	helpLinks: [],
	spoilerTags: [],
	anchorLabel: undefined,
	crossLinks: [],
	anchorId: 'item-test-item',
	stepAnchorId: undefined,
	urlValidationErrors: [],
	...overrides,
});

describe('operations seo model', () => {
	it('builds routes for side eggs and main quest', () => {
		const items = getOperationsRouteModel();
		expect(items.length).toBeGreaterThan(0);
		expect(items.some(item => item.sourceKind === 'sideEgg')).toBe(true);
		expect(items.some(item => item.sourceKind === 'mainQuest')).toBe(true);
	});

	it('builds game hubs and map groups', () => {
		const games = getOperationsGames('sideEgg');
		expect(games.length).toBeGreaterThan(0);
		const firstGame = games[0];
		const groups = getOperationsMapGroups('sideEgg', firstGame.slug);
		expect(groups.length).toBeGreaterThan(0);
		expect(groups.every(group => group.maps.length > 0)).toBe(true);
	});

	it('creates stable step anchors for ordered quest items', () => {
		const items = getOperationsRouteModel();
		const stepItem = items.find(
			item => item.sourceKind === 'mainQuest' && typeof item.stepNumber === 'number'
		);
		expect(stepItem).toBeTruthy();
		expect(stepItem?.stepAnchorId).toMatch(/^step-/);
		expect(stepItem?.itemPath).toContain(`#${stepItem?.stepAnchorId}`);
	});

	it('resolves related links for linked items/intel/help links where available', () => {
		const items = getOperationsRouteModel();
		const itemWithLinks = items.find(item => resolveRelatedLinksForItem(item).length > 0);
		expect(itemWithLinks).toBeTruthy();
		expect(resolveRelatedLinksForItem(itemWithLinks!)).not.toHaveLength(0);
	});

	it('produces map-level route paths for both eggs and quests', () => {
		const items = getOperationsRouteModel();
		const mapPaths = items.map(item => item.mapPath);
		expect(mapPaths.some(path => path.startsWith('/eggs/'))).toBe(true);
		expect(mapPaths.some(path => path.startsWith('/quests/'))).toBe(true);
	});
});

describe('operations seo validation', () => {
	it('fails for broken linkedItems references', () => {
		const result = validateOperationsModel([
			makeItem({ id: 'item-a', linkedItemIds: ['missing-id'] }),
		]);
		expect(
			result.errors.some(error => error.includes('linkedItems contains unknown id'))
		).toBe(true);
	});

	it('fails for broken linkedIntelIds references', () => {
		const result = validateOperationsModel([
			makeItem({ id: 'item-a', linkedIntelIds: ['BAD_INTEL_ID'] }),
		]);
		expect(
			result.errors.some(error => error.includes('linkedIntelIds contains unknown intel'))
		).toBe(true);
	});

	it('warns when linkedItems references intel ids directly', () => {
		const intelId = IntelStore[0]?.id;
		expect(intelId).toBeTruthy();
		const result = validateOperationsModel([
			makeItem({ id: 'item-a', linkedItemIds: [intelId!] }),
		]);
		expect(result.errors).toHaveLength(0);
		expect(
			result.warnings.some(warning =>
				warning.includes('Prefer linkedIntelIds for dossier links')
			)
		).toBe(true);
	});

	it('fails for malformed external/help links', () => {
		const result = validateOperationsModel([
			makeItem({
				id: 'item-a',
				urlValidationErrors: ['item-a: Malformed URL: this-is-not-a-url'],
			}),
		]);
		expect(result.errors).toContain('item-a: Malformed URL: this-is-not-a-url');
	});

	it('fails for malformed explicit crossLinks route+anchor values', () => {
		const result = validateOperationsModel([
			makeItem({
				id: 'item-a',
				crossLinks: ['/eggs/black-ops-6/liberty-falls'],
			}),
		]);
		expect(
			result.errors.some(error => error.includes('invalid crossLinks route+anchor'))
		).toBe(true);
	});
});
