export enum IconFileNames {
	//default iocn
	general = 'general',

	//misc icons
	demented = 'demented_echo',
	orb = 'aether_orb',
	fishing = 'fishing',
	radio = 'radio',
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
	monkey = 'monkey',
	redOrb = 'red_aether_orb',
	redRift = 'tunnel_red',
	crystal = 'main_quest',
	chest = 'interactable',
	pizza = 'interactable',
	mrPeeks = 'mr_peeks',
	mrPeeksBlue = 'mr_peeks_blue',

	//movement icons
	rift = 'tunnel_pink',
	wunderFizz = 'wunder_fizz',
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

	//powerup icons
	mysteryBox = 'mystery_box',
	papMachine = 'pap_machine',
	ammoCrate = 'ammo_crate',
	arsenal = 'arsenal',
	craftingTable = 'crafting_table',
	wallbuy = 'wall_buy',
	gobblegum = 'gumball',
	armourWall = 'armor_wall',
	workbench = 'workbench',
	upgrade = 'upgrade',

	//perk icons
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


export const SvgIcons = {
	[IconFileNames.rampageInducer]: true,
	[IconFileNames.portal]: true,
	[IconFileNames.zipline]: true,
	[IconFileNames.ziplineUp]: true,
	[IconFileNames.ziplineDown]: true,
	[IconFileNames.redRift]: true,
	[IconFileNames.rift]: true,
	[IconFileNames.tunnel]: true,
	[IconFileNames.upgrade]: true,
	[IconFileNames.trap]: true,
	[IconFileNames.projector]: true,
	[IconFileNames.jumpPad]: true,
	[IconFileNames.landingPad]: true,
	[IconFileNames.demented]: true,
	[IconFileNames.orb]: true,
	[IconFileNames.redOrb]: true,
	[IconFileNames.reactor]: true,
	[IconFileNames.power]: true,
	[IconFileNames.ammoCrate]: true,
	[IconFileNames.wallbuy]: true,
	[IconFileNames.trialComputer]: true,
	[IconFileNames.papMachine]: true,
	[IconFileNames.arsenal]: true,
	[IconFileNames.craftingTable]: true,
	[IconFileNames.workbench]: true,
	[IconFileNames.objective]: true,
	[IconFileNames.door]: true,
	[IconFileNames.doorPower]: true,
	[IconFileNames.armourWall]: true,
	[IconFileNames.trialChallenge]: true,
	[IconFileNames.gobblegum]: true,
	[IconFileNames.meleeMacchiato]: true,
	[IconFileNames.cassette]: true,
	[IconFileNames.interactable]: true,
	[IconFileNames.mainQuest]: true,
	[IconFileNames.secretArea]: true,
	[IconFileNames.clue]: true,
	[IconFileNames.mrPeeks]: true,
	[IconFileNames.mrPeeksBlue]: true,
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
	[IconFileNames.armourWall]: svgIconProperties,
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
	return `assets/img/markers/${(id ?? '').toLowerCase()}.${SvgIcons[id ?? ''] ? 'svg' : 'png'}`;
}