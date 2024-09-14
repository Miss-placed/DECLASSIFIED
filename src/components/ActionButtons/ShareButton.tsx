import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Button } from '@mui/material';
import { useNotification } from '../../contexts/NotificationContext/notificationContext';

export const ShareButton = ({ id }) => {
	const { triggerNotification } = useNotification();
	return (
		<Button>
			<ContentCopyIcon
				htmlColor="var(--clr-blue)"
				onClick={() => {
					navigator.clipboard.writeText(`${window.location.origin}/${id}`);
					triggerNotification(`Copied Link To Clipboard`);
				}}
			/>
		</Button>
	);
};
