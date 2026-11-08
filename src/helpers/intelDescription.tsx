import { Fragment, ReactNode, isValidElement } from 'react';

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

const isEmphasis = (node: ReactNode) => isValidElement(node) && node.type === 'em';

/**
 * Renders an intel description where the in-game hint is shown in italics on its
 * own line, with the guide's location text underneath. Authored line breaks
 * become <br /> for the same reason as `withLineBreaks`.
 */
export const withIntelDescription = (text: string | undefined): ReactNode =>
	(text ?? '')
		.trim()
		.split(/\r?\n/)
		.map((line, index) => {
			const nodes = italiciseLine(line, `${index}`);
			const [first, ...restNodes] = nodes;
			const rest = restNodes.filter(node => node !== '');

			if (typeof rest[0] === 'string') {
				rest[0] = rest[0].trimStart();
			}

			return (
				<Fragment key={index}>
					{index > 0 ? <br /> : null}
					{isEmphasis(first) && rest.length > 0 ? (
						<>
							{first}
							<br />
						</>
					) : (
						first
					)}
					{rest}
				</Fragment>
			);
		});
