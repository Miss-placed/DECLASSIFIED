import styled from '@emotion/styled';
import { Box, CircularProgress, Modal } from '@mui/material';
import { useState } from 'react';

const StyledImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '80vw',
	bgcolor: 'var(--clr-bg-inverted)',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
	padding: '14px',
};

export const CustomImage = ({ src: imageId, altText = 'Placeholder' }) => { // TODO: replace "Placeholder" with a more descriptive alt text from the image metadata
	const placeholderSrc = './assets/img/intelScreenshot/placeholder.png';
	const hasImage = imageId !== '' && imageId !== null && imageId !== undefined;
	const thumbnailSrc = imageId === 'placeholder'
		? placeholderSrc
		: `https://i.imgur.com/${imageId}l.jpg?t=${new Date().getTime()}`; // the "l" is used for imgur api to scale the image
	const fullSizeSrc = imageId === 'placeholder'
		? placeholderSrc
		: `https://i.imgur.com/${imageId}.jpg?t=${new Date().getTime()}`;
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
								height: 'auto',
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
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						{!modalImageLoaded && (
							<CircularProgress style={{ display: 'block', margin: 'auto' }} />
						)}
						<img
							src={fullSizeSrc}
							onLoad={() => setModalImageLoaded(true)}
							alt={altText}
							style={{
								width: '100%',
								display: modalImageLoaded ? 'block' : 'none',
							}}
						/>
					</Box>
				</Modal>
			)}
		</>
	);
};
