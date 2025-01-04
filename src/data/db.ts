import Dexie, { type EntityTable } from 'dexie';

interface DeclassifiedUserPreferences {
	username: string; // TODO - Use this as a feature to allow multiple users to have their own preferences
	challengeTrackerState: string;
	darkMode: boolean;
	hideBugRepButton: boolean;
	hideIntel: boolean;
	hideMisc: boolean;
	useSystemTheme: boolean;
}

interface DeclassifiedIntelCollected {
	intelId: string;
	dateCollected: Date;
}

interface DeclassifiedChallenges {
	challengeId: string;
	isCompleted: boolean;
	isPinned: boolean;
	dateCompleted: Date | null;
	datePinned: Date | null;
}

const db = new Dexie('DeclassifiedV1') as Dexie & {
	userPrefs: EntityTable<DeclassifiedUserPreferences, 'username'>;
	intelCollected: EntityTable<DeclassifiedIntelCollected, 'intelId'>;
	challenges: EntityTable<DeclassifiedChallenges, 'challengeId'>;
};

// Schema declaration:
db.version(1).stores({
	userPrefs:
		'&username, challengeTrackerState, darkMode, hideBugRepButton, hideIntel, hideMisc, useSystemTheme',
	intelCollected: '&intelId, dateCollected',
	challenges: '&challengeId, isCompleted, isPinned, dateCompleted, datePinned',
});

export { db };
export type {
	DeclassifiedChallenges, DeclassifiedIntelCollected, DeclassifiedUserPreferences
};

