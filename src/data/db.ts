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

// Request persistent storage to prevent data from being cleared
export async function requestPersistentStorage(): Promise<boolean> {
	try {
		if ('storage' in navigator && 'persist' in navigator.storage) {
			const isPersistent = await navigator.storage.persist();
			if (isPersistent) {
				console.info('✅ Storage will persist and won\'t be cleared except by explicit user action');
			} else {
				console.info('⚠️ Storage may be cleared by the browser under storage pressure');
			}
			return isPersistent;
		} else {
			console.info('⚠️ Persistent storage is not supported in this browser');
			return false;
		}
	} catch (error) {
		console.error('❌ Error requesting persistent storage:', error);
		return false;
	}
}

// Check if storage is already persistent
export async function isStoragePersistent(): Promise<boolean> {
	try {
		if ('storage' in navigator && 'persisted' in navigator.storage) {
			return await navigator.storage.persisted();
		}
		return false;
	} catch (error) {
		console.error('❌ Error checking storage persistence:', error);
		return false;
	}
}

// Get storage usage estimate (useful for monitoring)
export async function getStorageEstimate(): Promise<StorageEstimate | null> {
	try {
		if ('storage' in navigator && 'estimate' in navigator.storage) {
			return await navigator.storage.estimate();
		}
		return null;
	} catch (error) {
		console.error('❌ Error getting storage estimate:', error);
		return null;
	}
}

export { db };
export type {
	DeclassifiedChallenges, DeclassifiedIntelCollected, DeclassifiedUserPreferences
};

