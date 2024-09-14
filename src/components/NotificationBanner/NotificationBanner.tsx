import React, { useState, forwardRef, useImperativeHandle } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import styled from '@emotion/styled';

const Alert = forwardRef<HTMLDivElement, AlertProps>(
	function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
	}
);

const Notification = styled(Snackbar)`
	.MuiPaper-root {
		background-color: var(--clr-blue) !important;
	}
`;

const NotificationBanner = forwardRef((props, ref) => {
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState('');

	const handleClick = (msg: string) => {
		// Delay state update to avoid issues with updating during render phase
		setTimeout(() => {
			setMessage(msg);
			setOpen(true);
		}, 0);
	};

	const handleClose = (
		event: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	useImperativeHandle(ref, () => ({
		handleClick,
	}));

	return (
		<div>
			<Notification
				open={open}
				autoHideDuration={4000}
				onClose={handleClose}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
			>
				<Alert onClose={handleClose} severity="info">
					{message}
				</Alert>
			</Notification>
		</div>
	);
});

export default NotificationBanner;
