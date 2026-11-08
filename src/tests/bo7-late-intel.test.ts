import { MapIds } from '../components/MapControls/MapIds';
import { blackOps7Intel } from '../data/blackOps7Intel';
import { IntelType } from '../data/IntelTypes';

const titlesFor = (map: string, typeDesc: IntelType) =>
	blackOps7Intel
		.filter(item => item.map === map && item.typeDesc === typeDesc)
		.map(item => item.title);

describe('Black Ops 7 intel - Kowakujo', () => {
	it('has every audio log', () => {
		expect(titlesFor(MapIds.kowakujo, IntelType.Audio)).toEqual([
			`Takeo's Resolve`,
			`Takeo's Devotion`,
			`Takeshi's Dread`,
			`Takeshi's Perception`,
			`Mitsuhime's Trepidation`,
			`Mitsuhime's Reverence`,
			`Katanas Out`,
			`Two Brothers`,
			`Paydirt`,
			`Subverting Control`,
			`Extra Crispy`,
			`What About The Cat`,
		]);
	});

	it('has every document', () => {
		expect(titlesFor(MapIds.kowakujo, IntelType.Docs)).toEqual([
			`PSSPSSPSS`,
			`Hair Rising`,
		]);
	});

	it('has every artifact', () => {
		expect(titlesFor(MapIds.kowakujo, IntelType.Artifact)).toEqual([
			`Ninja Kite`,
			`Maneki-Neko`,
			`Nekomancer`,
			`Kitsune Mask`,
			`Lantern Clock`,
			`Path of Sorrows`,
		]);
	});
});

describe('Black Ops 7 intel - Rex Infernus', () => {
	it('has every audio log', () => {
		expect(titlesFor(MapIds.rexInfernus, IntelType.Audio)).toEqual([
			`The Long Game`,
			`Pecking Order`,
			`A Game of Cat and Strauss`,
			`The Mark`,
			`Spa Day`,
		]);
	});

	it('has every document', () => {
		expect(titlesFor(MapIds.rexInfernus, IntelType.Docs)).toEqual([
			`The First to Fall`,
			`The Others That Followed`,
			`The Inevitable End`,
			`Longterm Goals`,
			`Blurprint`,
			`Squish`,
		]);
	});

	it('has every artifact', () => {
		expect(titlesFor(MapIds.rexInfernus, IntelType.Artifact)).toEqual([
			`World Seed`,
			`Void Claw`,
			`Warden's Blight`,
		]);
	});
});

describe('Black Ops 7 intel ids', () => {
	it('are unique across every map', () => {
		const ids = blackOps7Intel.map(item => item.id);
		expect(ids).toHaveLength(new Set(ids).size);
	});
});
