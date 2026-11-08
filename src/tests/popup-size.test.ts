import { getPopupWidths, POPUP_MIN_WIDTH } from '../helpers/popupSize';

describe('getPopupWidths', () => {
	it('keeps a narrow floor so sparse popups are not padded out', () => {
		expect(getPopupWidths(1440)).toEqual({
			minWidth: POPUP_MIN_WIDTH,
			maxWidth: 560,
		});
	});

	it('caps the width to the viewport on narrow screens', () => {
		expect(getPopupWidths(390)).toEqual({
			minWidth: POPUP_MIN_WIDTH,
			maxWidth: 342,
		});
	});

	it('never returns a maximum below the minimum', () => {
		const { minWidth, maxWidth } = getPopupWidths(200);

		expect(maxWidth).toBe(minWidth);
	});
});
