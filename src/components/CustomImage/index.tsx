import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import { Box, CircularProgress, IconButton, Modal } from '@mui/material';
import { useState } from 'react';

const StyledImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

const previewBoxStyle = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	// as large as the screen allows without ever being smaller than the popup image
	// that was clicked. Sized to the image itself so portrait shots do not sit in a
	// wide, mostly empty box. The image uses vw/vh max constraints so the sizing has
	// no circular percentage dependency on this box.
	width: 'fit-content',
	maxWidth: '96vw',
	maxHeight: '96vh',
	bgcolor: 'var(--clr-bg-inverted)',
	border: '2px solid #000',
	boxShadow: 24,
	padding: '6px',
	outline: 'none',
};

const closeButtonStyle = {
	position: 'absolute',
	top: 6,
	right: 6,
	zIndex: 1,
	backgroundColor: 'rgba(0, 0, 0, 0.55)',
	color: 'var(--clr-white)',
	'&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.78)' },
};

export const CustomImage = ({ src: imageId, altText = 'Placeholder' }) => { // TODO: replace "Placeholder" with a more descriptive alt text from the image metadata
	const placeholderSrc = './assets/img/intelScreenshot/placeholder.png';
	const hasImage = imageId !== '' && imageId !== null && imageId !== undefined;
	const thumbnailSrc = imageId === 'placeholder'
		? placeholderSrc
		: `https://declassified-cdn.sol3.me/${imageId}.jpg?t=${new Date().getTime()}`;
	const fullSizeSrc = imageId === 'placeholder'
		? placeholderSrc
		: `https://declassified-cdn.sol3.me/${imageId}.jpg?t=${new Date().getTime()}`;
	const [imgLoaded, setImageLoaded] = useState(false);
	const [modalImageLoaded, setModalImageLoaded] = useState(false);
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setModalImageLoaded(false);
		setOpen(true);
	};

	const handleClose = () => setOpen(false);

	return (
		<>
			<StyledImageContainer>
				{hasImage ? (
					<>
						{!imgLoaded && <CircularProgress />}
						<img
							src={thumbnailSrc}
							onClick={handleOpen}
							alt={""}
							loading="lazy"
							style={{
								width: '100%',
								maxWidth: '100%',
								height: 'auto',
								display: 'block',
								cursor: 'pointer',
							}}
							onLoad={() => setImageLoaded(true)}
						/>
					</>
				) : (
					<></>
				)}
			</StyledImageContainer>

			{hasImage && (
				<Modal
					open={open}
					onClose={handleClose}
					aria-label="Image preview"
				>
					<Box sx={previewBoxStyle}>
						<IconButton
							aria-label="Close image preview"
							onClick={handleClose}
							sx={closeButtonStyle}
						>
							<CloseIcon />
						</IconButton>
						{!modalImageLoaded && (
							<CircularProgress style={{ display: 'block', margin: 'auto' }} />
						)}
						<img
							src={fullSizeSrc}
							onLoad={() => setModalImageLoaded(true)}
							alt={altText}
							style={{
								width: 'auto',
								height: 'auto',
								maxWidth: 'calc(96vw - 16px)',
								maxHeight: 'calc(96vh - 16px)',
								display: modalImageLoaded ? 'block' : 'none',
							}}
						/>
					</Box>
				</Modal>
			)}
		</>
	);
};
