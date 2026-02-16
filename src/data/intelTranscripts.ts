export const intelTranscriptsById: Record<string, string> = {};

export const getIntelTranscript = (intelId: string) =>
	intelTranscriptsById[intelId] ?? 'DATA REDACTED - PENDING DECLASSIFICATION';
