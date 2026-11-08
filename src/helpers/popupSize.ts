/**
 * Marker popups used to be clamped to Leaflet's 300px default, so a marker with a
 * long description grew very tall instead of getting wider. Leaflet measures the
 * content width itself and clamps it between minWidth and maxWidth, so raising the
 * maximum is all that is needed: short popups stay compact, long ones go wider
 * before they wrap.
 */
export const POPUP_MIN_WIDTH = 180;
export const POPUP_MAX_WIDTH = 560;
const VIEWPORT_MARGIN = 48;

export const getPopupWidths = (
	viewportWidth: number
): { minWidth: number; maxWidth: number } => ({
	minWidth: POPUP_MIN_WIDTH,
	maxWidth: Math.max(
		POPUP_MIN_WIDTH,
		Math.min(POPUP_MAX_WIDTH, viewportWidth - VIEWPORT_MARGIN)
	),
});
