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
	shovel = 'shovel',
	boss = 'boss',
	sword = 'sword',
	swordUpgrade = 'sword_upgrade',
	goldenArmour = 'golden_armour',
	digSite = 'dig_site',

	//movement icons
	rift = 'tunnel_pink',
	zipline = 'zipline',
	ziplineUp = 'zipline_up',
	ziplineDown = 'zipline_down',
	tunnel = 'tunnel',
	tunnelRed = 'tunnel_red',
	tunnelPink = 'tunnel_pink',
	portal = 'portal',
	portalYellow = 'portal_yellow',
	portalRed = 'portal_red',
	portalGreen = 'portal_green',
	portalBlue = 'portal_blue',
	landingPad = 'landingpad',
	jumpPad = 'jumppad',
	door = 'door_buy',
	doorPower = 'door_power',
	boatStation = 'upgrade', // Update with new icon

	//powerup icons
	mysteryBox = 'mystery_box',
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
	fireSale = 'fire_sale',
	randomPerk = 'random_perk',

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
	vulture = 'vulture_aid',
}


export const LegacyIcons = {
	[IconFileNames.tombstoneSoda]: true,
	[IconFileNames.staminUp]: true,
	[IconFileNames.speedCola]: true,
	[IconFileNames.quickRevive]: true,
	[IconFileNames.phdSlider]: true,
	[IconFileNames.muleKick]: true,
	[IconFileNames.monkey]: true,
	[IconFileNames.juggernog]: true,
	[IconFileNames.general]: true,
	[IconFileNames.fishing]: true,
	[IconFileNames.elementalPop]: true,
	[IconFileNames.deathPerception]: true,
};
export const customMiscIconBounds = {
	[IconFileNames.general]: {
		iconAnchor: [15, 30],
		popupAnchor: [0, -30],
	},
	[IconFileNames.fishing]: {
		popupAnchor: [0, -30],
	},
	[IconFileNames.monkey]: {
		popupAnchor: [0, -30],
	},
};
export function getMiscIconUri(id: string | undefined): string {
	return `assets/img/markers/${(id ?? '').toLowerCase()}.${LegacyIcons[id ?? ''] ? 'png' : 'svg'}`;
}