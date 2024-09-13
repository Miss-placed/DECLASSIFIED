import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import React, { ReactNode, useRef, useState } from 'react';
import NotificationBanner from '../../components/NotificationBanner/NotificationBanner';
import { NotificationContext } from './notificationContext';

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const snackbarRef = useRef<{ handleClick: (msg: string) => void }>(null);

	const [dialogOpen, setDialogOpen] = useState(false);
	const [dialogMessage, setDialogMessage] = useState('');
	const [dialogButtonText, setDialogButtonText] = useState({ trueText: 'Okay', falseText: 'Cancel' });
	const [dialogCallback, setDialogCallback] = useState<(result: boolean, formData?: any) => void>(() => { });
	const [formFields, setFormFields] = useState<{ [key: string]: string }>({});

	const triggerNotification = (notificationMessage: string) => {
		if (snackbarRef.current) {
			snackbarRef.current.handleClick(notificationMessage);
		}
	};

	const triggerDialog = (
		message: string,
		buttonText = { trueText: 'Okay', falseText: 'Cancel' },
		callback: (result: boolean, formData?: any) => void,
		formFields?: { [key: string]: string }
	) => {
		setDialogMessage(message);
		setDialogButtonText(buttonText);
		setDialogCallback(() => callback);
		setFormFields(formFields || {});
		setDialogOpen(true);
	};

	const handleDialogClose = (result: boolean) => {
		setDialogOpen(false);
		if (result && formFields) {
			const formData = Object.keys(formFields).reduce((acc, key) => {
				const value = document.querySelector<HTMLInputElement>(`[name=${key}]`)?.value;
				if (value !== undefined) acc[key] = value;
				return acc;
			}, {} as { [key: string]: string });
			dialogCallback(result, formData);
		} else {
			dialogCallback(result);
		}
	};

	return (
		<NotificationContext.Provider value={{ triggerNotification, triggerDialog }}>
			{children}
			<NotificationBanner ref={snackbarRef} />
			<Dialog
				open={dialogOpen}
				onClose={() => handleDialogClose(false)}>
				<DialogTitle>Notification</DialogTitle>
				<form
					onSubmit={formFields ? (event: React.FormEvent<HTMLFormElement>) => {
						event.preventDefault();
						handleDialogClose(true);
					} : undefined}
				>
					<DialogContent>
						<DialogContentText>
							{dialogMessage}
						</DialogContentText>
						{Object.keys(formFields).length > 0 && (
							<>
								{Object.entries(formFields).map(([key, label]) => (
									<TextField
										key={key}
										autoFocus
										margin="dense"
										id={key}
										name={key}
										label={label}
										type="text"
										fullWidth
										variant="standard"
									/>
								))}
							</>
						)}
					</DialogContent>
					<DialogActions>
						<Button onClick={() => handleDialogClose(false)}>{dialogButtonText.falseText}</Button>
						<Button type="submit" variant="contained">{dialogButtonText.trueText}</Button>
					</DialogActions>
				</form>
			</Dialog>
		</NotificationContext.Provider>
	);
};
