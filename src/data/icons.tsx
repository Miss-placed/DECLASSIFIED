export enum IconFileNames {
	//default iocn
	general = 'general', // Update with new icon

	//misc icons
	demented = 'demented_echo',
	orb = 'aether_orb',
	fishing = 'fishing', // Update with new icon if at all?
	radio = 'radio_amp',
	trialComputer = 'trial_computer',
	trialChallenge = 'trials',
	rampageInducer = 'rampage_inducer',
	trap = 'trap',
	reactor = 'collection_unit',
	power = 'power',

	//easter egg icons
	cassette = 'cassette_tape',
	interactable = 'interactable',
	mainQuest = 'main_quest',
	objective = 'objective',
	secretArea = 'secret_door',
	clue = 'visual_clue',
	projector = 'projector',
	monkey = 'monkey', // Update with new icon
	redOrb = 'red_aether_orb',
	redRift = 'tunnel_red',
	crystal = 'aether_crystal',
	chest = 'interactable',
	pizza = 'pizza',
	mrPeeks = 'mr_peeks',
	mrPeeksBlue = 'mr_peeks_blue',
	workbench = 'workbench',
	mask = 'secret_door', // Update with new icon

	//movement icons
	rift = 'tunnel_pink',
	zipline = 'zipline',
	ziplineUp = 'zipline_up',
	ziplineDown = 'zipline_down',
	tunnel = 'tunnel',
	tunnelRed = 'tunnel_red',
	tunnelPink = 'tunnel_pink',
	portal = 'portal',
	landingPad = 'landingpad',
	jumpPad = 'jumppad',
	door = 'door_buy',
	doorPower = 'door_power',
	boatStation = 'upgrade', // Update with new icon

	//powerup icons
	mysteryBox = 'mystery_box', // Update with new icon
	papMachine = 'pap_machine',
	ammoCrate = 'ammo_crate',
	arsenal = 'arsenal',
	craftingTable = 'crafting_table',
	wallbuy = 'wall_buy',
	gobblegum = 'gumball',
	armorWall1 = 'armor_wall_1',
	armorWall2 = 'armor_wall_2',
	upgrade = 'upgrade',
	bonusPoints = 'boner_points',
	fullPower = 'full_power',
	nuke = 'nuke',
	maxAmmo = 'max_ammo',
	maxArmour = 'max_armor',
	doublePoints = 'double_points',
	instaKill = 'insta_kill',
	fireSale = 'fire_sale',// TODO - Make SVG?

	//perk icons // Update with new icons
	wunderFizz = 'wunder_fizz',
	staminUp = 'stamin_up',
	quickRevive = 'quick_revive',
	juggernog = 'juggernog',
	speedCola = 'speed_cola',
	muleKick = 'mule_kick',
	elementalPop = 'elemental_pop',
	deathPerception = 'death_perception',
	tombstoneSoda = 'tombstone_soda',
	deadshotDaiquiri = 'deadshot_daiquiri',
	phdSlider = 'phd_slider',
	meleeMacchiato = 'melee_macchiato',
}


export const LegacyIcons = {
	[IconFileNames.wunderFizz]: true,
	[IconFileNames.tombstoneSoda]: true,
	[IconFileNames.staminUp]: true,
	[IconFileNames.speedCola]: true,
	[IconFileNames.quickRevive]: true,
	[IconFileNames.phdSlider]: true,
	[IconFileNames.mysteryBox]: true,
	[IconFileNames.muleKick]: true,
	[IconFileNames.monkey]: true,
	[IconFileNames.juggernog]: true,
	[IconFileNames.general]: true,
	[IconFileNames.fishing]: true,
	[IconFileNames.elementalPop]: true,
	[IconFileNames.deathPerception]: true,
	[IconFileNames.deadshotDaiquiri]: true,
};
const svgIconProperties = { popupAnchor: [0, -30], iconAnchor: [20, 20], iconSize: [40, 40] };
export const customMiscIconBounds = {
	[IconFileNames.general]: {
		iconAnchor: [15, 30],
		popupAnchor: [0, -30],
	},
	[IconFileNames.radio]: {
		iconSize: [39, 48],
		iconAnchor: [19.5, 24],
		popupAnchor: [0, -30],
	},
	[IconFileNames.rift]: {
		iconSize: [40, 40],
		popupAnchor: [5, -20],
	},
	[IconFileNames.fishing]: {
		popupAnchor: [0, -30],
	},
	[IconFileNames.monkey]: {
		popupAnchor: [0, -30],
	},
	[IconFileNames.redRift]: {
		iconSize: [40, 40],
		popupAnchor: [5, -20],
	},
	[IconFileNames.mrPeeks]: {
		iconSize: [40, 40],
		popupAnchor: [5, -20],
	},
	[IconFileNames.mrPeeksBlue]: {
		iconSize: [40, 40],
		popupAnchor: [5, -20],
	},
	[IconFileNames.pizza]: {
		iconSize: [40, 40],
		popupAnchor: [5, -20],
	},
	[IconFileNames.crystal]: {
		iconSize: [40, 40],
		popupAnchor: [5, -20],
	},
	[IconFileNames.demented]: svgIconProperties,
	[IconFileNames.rampageInducer]: svgIconProperties,
	[IconFileNames.portal]: svgIconProperties,
	[IconFileNames.zipline]: svgIconProperties,
	[IconFileNames.ziplineUp]: svgIconProperties,
	[IconFileNames.ziplineDown]: svgIconProperties,
	[IconFileNames.tunnel]: svgIconProperties,
	[IconFileNames.upgrade]: svgIconProperties,
	[IconFileNames.trap]: svgIconProperties,
	[IconFileNames.projector]: svgIconProperties,
	[IconFileNames.jumpPad]: svgIconProperties,
	[IconFileNames.landingPad]: svgIconProperties,
	[IconFileNames.orb]: svgIconProperties,
	[IconFileNames.redOrb]: svgIconProperties,
	[IconFileNames.power]: svgIconProperties,
	[IconFileNames.ammoCrate]: svgIconProperties,
	[IconFileNames.wallbuy]: svgIconProperties,
	[IconFileNames.trialComputer]: svgIconProperties,
	[IconFileNames.papMachine]: svgIconProperties,
	[IconFileNames.arsenal]: svgIconProperties,
	[IconFileNames.craftingTable]: svgIconProperties,
	[IconFileNames.workbench]: svgIconProperties,
	[IconFileNames.objective]: svgIconProperties,
	[IconFileNames.door]: svgIconProperties,
	[IconFileNames.doorPower]: svgIconProperties,
	[IconFileNames.armorWall2]: svgIconProperties,
	[IconFileNames.armorWall1]: svgIconProperties,
	[IconFileNames.trialChallenge]: svgIconProperties,
	[IconFileNames.gobblegum]: svgIconProperties,
	[IconFileNames.meleeMacchiato]: svgIconProperties,
	[IconFileNames.cassette]: svgIconProperties,
	[IconFileNames.interactable]: svgIconProperties,
	[IconFileNames.mainQuest]: svgIconProperties,
	[IconFileNames.secretArea]: svgIconProperties,
	[IconFileNames.clue]: svgIconProperties,
};
export function getMiscIconUri(id: string | undefined): string {
	return `assets/img/markers/${(id ?? '').toLowerCase()}.${LegacyIcons[id ?? ''] ? 'png' : 'svg'}`;
}