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
	hideTitle?: boolean;
}

export default function DossierCard({
	title,
	subtitle,
	href,
	actionHref,
	actionLabel,
	openInNewTab = false,
	isCollected = false,
	hideTitle = false,
}: DossierCardProps) {
	const actionProps = openInNewTab
		? { target: '_blank', rel: 'noreferrer' }
		: {};

	return (
		<Box className={`dossier-card ${isCollected ? 'is-collected' : ''}`}>
			<Link className="dossier-grid-item-link" to={href}>
				<Box className="homepage-box" p={2}>
					{!hideTitle ? <Typography variant="h6">{title}</Typography> : null}
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
