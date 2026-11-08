import { Fragment, ReactNode } from 'react';

/**
 * Renders authored line breaks in a description as <br /> elements instead of
 * relying on `white-space: pre-wrap`. Leaflet measures popup widths by setting
 * `white-space: nowrap` on the content node, and a pre-wrap child ignores that,
 * which made every popup measure as if it were already wrapped.
 */
export const withLineBreaks = (text: string | undefined): ReactNode =>
	(text ?? '')
		.trim()
		.split(/\r?\n/)
		.map((line, index) => (
			<Fragment key={index}>
				{index > 0 ? <br /> : null}
				{line}
			</Fragment>
		));
