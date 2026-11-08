import { fireEvent, render, screen } from '@testing-library/react';
import {
	FilterToggle,
	shouldToggleFromSummary,
} from '../components/FilterChrome';

describe('FilterToggle', () => {
	it('shows the count, the expanded state and what it controls', () => {
		render(
			<FilterToggle
				count="12/40"
				expanded
				label="Toggle intel filters"
				panelId="intel-filter-panel"
				onToggle={jest.fn()}
			/>
		);

		const button = screen.getByRole('button', {
			name: 'Toggle intel filters',
		});
		expect(button).toHaveTextContent('12/40');
		expect(button).toHaveAttribute('aria-expanded', 'true');
		expect(button).toHaveAttribute('aria-controls', 'intel-filter-panel');
	});

	it('toggles once, without also toggling the summary it sits inside', () => {
		const onToggle = jest.fn();
		const onSummaryClick = jest.fn();

		render(
			<div onClick={onSummaryClick}>
				<FilterToggle
					count="1/2"
					expanded={false}
					label="Toggle filters"
					panelId="panel"
					onToggle={onToggle}
				/>
			</div>
		);

		fireEvent.click(screen.getByRole('button', { name: 'Toggle filters' }));

		expect(onToggle).toHaveBeenCalledTimes(1);
		expect(onSummaryClick).not.toHaveBeenCalled();
	});
});

describe('shouldToggleFromSummary', () => {
	it('ignores clicks that start inside the search box', () => {
		const { container } = render(
			<div className="MuiTextField-root">
				<input aria-label="search" />
			</div>
		);

		expect(shouldToggleFromSummary(container.querySelector('input'))).toBe(
			false
		);
	});

	it('toggles from anywhere else in the summary', () => {
		const { container } = render(<span>search intel</span>);

		expect(shouldToggleFromSummary(container.querySelector('span'))).toBe(
			true
		);
	});
});
