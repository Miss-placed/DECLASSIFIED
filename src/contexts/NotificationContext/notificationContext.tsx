import { createContext, useContext } from 'react';

interface NotificationContextProps {
	triggerNotification: (message: string) => void;
	triggerDialog: (message: string, buttonText: {
		trueText: string;
		falseText: string;
	} | undefined, callback: (result: boolean, formData?: any) => void, formFields?: {
		[key: string]: string;
	}) => void
}

export const NotificationContext = createContext<
	NotificationContextProps | undefined
>(undefined);

export const useNotification = () => {
	const context = useContext(NotificationContext);
	if (!context) {
		throw new Error(
			'useNotification must be used within a NotificationProvider'
		);
	}
	return context;
};
