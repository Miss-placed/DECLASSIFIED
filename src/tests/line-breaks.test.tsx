import { render } from '@testing-library/react';
import { withLineBreaks } from '../helpers/lineBreaks';

describe('withLineBreaks', () => {
	it('turns authored newlines into <br /> elements', () => {
		const { container } = render(
			<div>{withLineBreaks('line one\nline two')}</div>
		);

		expect(container.innerHTML).toBe('<div>line one<br>line two</div>');
	});

	it('ignores surrounding blank lines and handles CRLF', () => {
		const { container } = render(
			<div>{withLineBreaks('\r\nonly line\r\n')}</div>
		);

		expect(container.innerHTML).toBe('<div>only line</div>');
	});

	it('copes with a missing description', () => {
		const { container } = render(<div>{withLineBreaks(undefined)}</div>);

		expect(container.innerHTML).toBe('<div></div>');
	});
});
