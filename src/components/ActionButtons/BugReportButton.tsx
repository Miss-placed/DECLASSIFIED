import { Button } from '@mui/material';
import { redirectToGithub } from '../../helpers/github';
import BugReportIcon from '@mui/icons-material/BugReport';

export const BugReportButton = ({ id, typeDesc, mapItem }) => {
	return (
		<Button onClick={() => redirectToGithub(id, typeDesc, 'Fix', mapItem)}>
			<BugReportIcon htmlColor="var(--clr-red)" />
		</Button>
	);
};
