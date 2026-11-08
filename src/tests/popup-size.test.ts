import { getPopupWidths, POPUP_MIN_WIDTH } from '../helpers/popupSize';

describe('getPopupWidths', () => {
	it('keeps the current width as the minimum on wide screens', () => {
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
		const { minWidth, maxWidth } = getPopupWidths(280);

		expect(maxWidth).toBe(minWidth);
	});
});
