import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Button, Tooltip } from '@mui/material';
import { useNotification } from '../../contexts/NotificationContext/notificationContext';

export const ShareButton = ({ id }) => {
	const { triggerNotification } = useNotification();
	return (
		<Tooltip title="Copy Link">
			<Button>
				<ContentCopyIcon
					htmlColor="var(--clr-blue)"
					onClick={() => {
						navigator.clipboard.writeText(`${window.location.origin}/${id}`);
						triggerNotification(`Copied Link To Clipboard`);
					}}
				/>
			</Button>
		</Tooltip>
	);
};
