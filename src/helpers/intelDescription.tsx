import { Fragment, ReactNode } from 'react';

const ITALIC_SEGMENT = /\*([^*]+)\*/g;

const italiciseLine = (line: string, keyPrefix: string): ReactNode[] => {
	const nodes: ReactNode[] = [];
	let cursor = 0;
	let match: RegExpExecArray | null;

	ITALIC_SEGMENT.lastIndex = 0;
	while ((match = ITALIC_SEGMENT.exec(line)) !== null) {
		if (match.index > cursor) nodes.push(line.slice(cursor, match.index));
		nodes.push(<em key={`${keyPrefix}-${match.index}`}>{match[1]}</em>);
		cursor = match.index + match[0].length;
	}

	if (cursor < line.length) nodes.push(line.slice(cursor));

	return nodes;
};

/**
 * Renders an intel description where the location guidance comes first and any
 * `*starred*` text is shown in italics (used for the in-game description).
 * Authored line breaks become <br /> for the same reason as `withLineBreaks`.
 */
export const withIntelDescription = (text: string | undefined): ReactNode =>
	(text ?? '')
		.trim()
		.split(/\r?\n/)
		.map((line, index) => (
			<Fragment key={index}>
				{index > 0 ? <br /> : null}
				{italiciseLine(line, `${index}`)}
			</Fragment>
		));
