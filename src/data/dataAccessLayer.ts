import { db, DeclassifiedUserPreferences } from './db';

const defaultUsername = 'defaultUser';
const defaultUserPrefs: DeclassifiedUserPreferences = {
	username: defaultUsername,
	challengeTrackerState: '',
	darkMode: true,
	hideBugRepButton: false,
	hideIntel: false,
	hideMisc: false,
	useSystemTheme: true,
};

export async function getSetUserPreferences(
	username: string = defaultUsername
) {
	try {
		const userExists = (await db.userPrefs.get(username)) !== undefined;
		if (!userExists) {
			await db.userPrefs.add(defaultUserPrefs, username);
			return defaultUserPrefs;
		} else {
			return db.userPrefs.get(username);
		}
	} catch (error) {
		console.error('ERROR - getSetUserPreferences: ', error);
	}
}

export async function updateUserPreferences(
	updates: Partial<Omit<DeclassifiedUserPreferences, 'username'>>
): Promise<DeclassifiedUserPreferences | undefined> {
	try {
		// Retrieve the current user preferences or set the default if none exist
		const currentUserPrefs = await getSetUserPreferences(defaultUsername);

		if (!currentUserPrefs) {
			console.error(
				'ERROR - updateUserPreferences: Could not retrieve or set user preferences.'
			);
			return undefined;
		}

		// Merge the updates with the current preferences, excluding 'username'
		const updatedPrefs = { ...currentUserPrefs, ...updates };

		// Update the preferences in the database
		await db.userPrefs.put(updatedPrefs, defaultUsername);

		// Return the updated preferences
		return updatedPrefs;
	} catch (error) {
		console.error('ERROR - updateUserPreferences: ', error);
		return undefined;
	}
}

export async function addCollectedIntel(intelIds: string[]) {
	try {
		await Promise.all(
			intelIds.map((intelId) => {
				if (intelId) {
					return db.intelCollected.put({
						intelId: intelId,
						dateCollected: new Date(),
					});
				}
			})
		);
	} catch (error) {
		console.error('ERROR - addCollectedIntel: ', error);
	}
}

export async function deleteCollectedIntel(intelIds: string[]) {
	try {
		await Promise.all(
			intelIds.map((intelId) => {
				if (intelId) {
					return db.intelCollected.delete(intelId);
				}
			})
		);
	} catch (error) {
		console.error('ERROR - deleteCollectedIntel: ', error);
	}
}

export async function addCompletedChallenges(challengeIds: string[]) {
	try {
		for (const challengeId of challengeIds) {
			if (challengeId) {
				var existingChallenge = await db.challenges.get(challengeId);
				if (existingChallenge) {
					await db.challenges.put({
						challengeId: challengeId,
						isCompleted: true,
						isPinned: false,
						dateCompleted: new Date(),
						datePinned: existingChallenge?.datePinned ?? null,
					});
				} else {
					await db.challenges.put({
						challengeId: challengeId,
						isCompleted: true,
						isPinned: false,
						dateCompleted: new Date(),
						datePinned: null,
					});
				}
			}
		}
	} catch (error) {
		console.error('ERROR - addCompletedChallenges: ', error);
	}
}

export async function addPinnedChallenges(challengeIds: string[]) {
	try {
		for (const challengeId of challengeIds) {
			if (challengeId) {
				var existingChallenge = await db.challenges.get(challengeId);
				if (existingChallenge) {
					await db.challenges.put({
						challengeId: challengeId,
						isCompleted: false,
						isPinned: true,
						dateCompleted: existingChallenge.dateCompleted ?? null,
						datePinned: new Date(),
					});
				} else {
					await db.challenges.put({
						challengeId: challengeId,
						isCompleted: false,
						isPinned: true,
						dateCompleted: null,
						datePinned: new Date(),
					});
				}
			}
		}
	} catch (error) {
		console.error('ERROR - addPinnedChallenges: ', error);
	}
}
