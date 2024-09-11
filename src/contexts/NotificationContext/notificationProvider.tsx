import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import React, { ReactNode, useRef, useState } from 'react';
import NotificationBanner from '../../components/NotificationBanner/NotificationBanner';
import { NotificationContext } from './notificationContext';

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const snackbarRef = useRef<{ handleClick: (msg: string) => void }>(null);

	const [dialogOpen, setDialogOpen] = useState(false);
	const [dialogMessage, setDialogMessage] = useState('');
	const [dialogButtonText, setDialogButtonText] = useState({ trueText: 'Okay', falseText: 'Cancel' });
	const [dialogCallback, setDialogCallback] = useState<(result: boolean) => void>(() => { });

	const triggerNotification = (notificationMessage: string) => {
		if (snackbarRef.current) {
			snackbarRef.current.handleClick(notificationMessage);
		}
	};

	const triggerDialog = (message: string, buttonText = { trueText: 'Okay', falseText: 'Cancel' }, callback: (result: boolean) => void) => {
		setDialogMessage(message);
		setDialogButtonText(buttonText);
		setDialogCallback(() => callback);
		setDialogOpen(true);
	};

	const handleDialogClose = (result: boolean) => {
		setDialogOpen(false);
		dialogCallback(result);
	};

	return (
		<NotificationContext.Provider value={{ triggerNotification, triggerDialog }}>
			{children}
			<NotificationBanner ref={snackbarRef} />
			<Dialog open={dialogOpen} onClose={() => handleDialogClose(false)}>
				{/* <DialogTitle>Notification</DialogTitle> */}
				<DialogContent>
					<p>{dialogMessage}</p>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => handleDialogClose(true)}>{dialogButtonText.trueText}</Button>
					<Button onClick={() => handleDialogClose(false)}>{dialogButtonText.falseText}</Button>
				</DialogActions>
			</Dialog>
		</NotificationContext.Provider>
	);
};
