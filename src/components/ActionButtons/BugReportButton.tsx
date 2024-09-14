import BugReportIcon from '@mui/icons-material/BugReport';
import { Button } from '@mui/material';
import { redirectBugReportToGithub } from '../../helpers/github';

export const BugReportButton = ({ id, typeDesc, mapItem }) => {
	return (
		<Button onClick={() => redirectBugReportToGithub(id, typeDesc, mapItem)}>
			<BugReportIcon htmlColor="var(--clr-red)" />
		</Button>
	);
};
