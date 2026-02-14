import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface DossierCardProps {
	title: string;
	subtitle?: string;
	href: string;
	actionHref?: string;
	actionLabel?: string;
	openInNewTab?: boolean;
	isCollected?: boolean;
}

export default function DossierCard({
	title,
	subtitle,
	href,
	actionHref,
	actionLabel,
	openInNewTab = false,
	isCollected = false,
}: DossierCardProps) {
	const actionProps = openInNewTab
		? { target: '_blank', rel: 'noreferrer' }
		: {};

	return (
		<Box className={`dossier-card ${isCollected ? 'is-collected' : ''}`}>
			<Link className="dossier-card-link" to={href}>
				<Box className="homepage-box" p={2}>
					<Typography variant="h6">{title}</Typography>
					{subtitle ? <Typography>{subtitle}</Typography> : null}
				</Box>
			</Link>
			{actionHref && actionLabel ? (
				<div className="intel-dossier-actions">
					<Link to={actionHref} {...actionProps}>
						{actionLabel}
					</Link>
				</div>
			) : null}
		</Box>
	);
}
