import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { CustomImage } from '../components/CustomImage';

describe('CustomImage preview', () => {
	it('opens a preview with an obvious close button', async () => {
		const { container } = render(
			<CustomImage src="abc123" altText="Intel screenshot" />
		);

		fireEvent.click(container.querySelector('img')!);

		expect(await screen.findByLabelText('Close image preview')).toBeInTheDocument();
	});

	it('closes the preview from that button', async () => {
		const { container } = render(
			<CustomImage src="abc123" altText="Intel screenshot" />
		);

		fireEvent.click(container.querySelector('img')!);
		fireEvent.click(await screen.findByLabelText('Close image preview'));

		await waitFor(() =>
			expect(screen.queryByLabelText('Close image preview')).toBeNull()
		);
	});

	it('closes the preview when the backdrop is clicked', async () => {
		const { container } = render(
			<CustomImage src="abc123" altText="Intel screenshot" />
		);

		fireEvent.click(container.querySelector('img')!);
		await screen.findByLabelText('Close image preview');

		const backdrop = document.querySelector('.MuiBackdrop-root');
		expect(backdrop).not.toBeNull();
		fireEvent.click(backdrop!);

		await waitFor(() =>
			expect(screen.queryByLabelText('Close image preview')).toBeNull()
		);
	});

	it('renders nothing when the item has no image', () => {
		const { container } = render(<CustomImage src="" />);

		expect(container.querySelector('img')).toBeNull();
	});
});
