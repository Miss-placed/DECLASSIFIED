import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button, Tooltip, Typography } from '@mui/material';
import { OperationRouteItem, ParsedLink } from '../../../data/operationsSeo';
import { getMiscIconUri } from '../../../data/icons';
import { CustomImage } from '../../../components/CustomImage';
import { ShareButton } from '../../../components/ActionButtons/ShareButton';
import { BugReportButton } from '../../../components/ActionButtons/BugReportButton';
import { GetMapById } from '../../../data/maps/mapDetails';

interface OperationItemCardProps {
	item: OperationRouteItem;
	links: ParsedLink[];
	showSpoilers: boolean;
	showMapLayer?: boolean;
	groupTitle?: string;
}

const renderLink = (link: ParsedLink, key: string) => {
	if (link.href.startsWith('http')) {
		return (
			<a key={key} href={link.href} target="_blank" rel="noreferrer">
				{link.label}
			</a>
		);
	}
	return (
		<Link key={key} to={link.href}>
			{link.label}
		</Link>
	);
};

export default function OperationItemCard({
	item,
	links,
	showSpoilers,
	showMapLayer = false,
	groupTitle,
}: OperationItemCardProps) {
	const mapItem = GetMapById(item.mapId);
	const iconSrc = `/${getMiscIconUri(item.icon)}`;
	const operationLinks = links.filter(link => link.type === 'operation');
	const intelLinks = links.filter(link => link.type === 'intel');
	const helpLinks = links.filter(link => link.type === 'help');
	const hasSpoiler = item.spoilerTags.length > 0;

	return (
		<article className="operation-item-card rounded-box" id={item.anchorId}>
			{item.stepAnchorId ? (
				<span id={item.stepAnchorId} className="operation-step-anchor" aria-hidden />
			) : null}
			<header className="operation-item-header">
				<img src={iconSrc} alt={`${item.icon} icon`} loading="lazy" />
				<Typography className="title text-sm operation-item-title" variant="h5">
					{item.title}
				</Typography>
			</header>
			<div className="operation-item-meta">
				{showMapLayer ? (
					<span className="operation-chip">{item.mapTitle}</span>
				) : null}
				{typeof item.stepNumber === 'number' ? (
					<span className="operation-chip">Step {item.stepNumber}</span>
				) : null}
				{item.groupingTitle && item.groupingTitle !== groupTitle ? (
					<span className="operation-chip">{item.groupingTitle}</span>
				) : null}
				{hasSpoiler ? (
					<span className="operation-chip spoiler-chip">
						{item.spoilerTags.join(', ')}
					</span>
				) : null}
			</div>
			<div className="operation-item-body">
				{hasSpoiler && !showSpoilers ? (
					<details className="operations-spoiler">
						<summary>Classified content (click to reveal)</summary>
						<p>{item.desc}</p>
					</details>
				) : (
					<Typography className="text-sm">{item.desc}</Typography>
				)}
				<CustomImage src={item.img} altText={item.title} />
				{operationLinks.length > 0 ? (
					<div className="operation-links">
						<strong>Related Markers</strong>
						<div className="operation-link-list">
							{operationLinks.map((link, idx) => renderLink(link, `op-${idx}`))}
						</div>
					</div>
				) : null}
				{intelLinks.length > 0 ? (
					<div className="operation-links">
						<strong>Linked Intel</strong>
						<div className="operation-link-list">
							{intelLinks.map((link, idx) => renderLink(link, `intel-${idx}`))}
						</div>
					</div>
				) : null}
				{helpLinks.length > 0 ? (
					<div className="operation-links">
						<strong>Helpful Links</strong>
						<div className="operation-link-list">
							{helpLinks.map((link, idx) => renderLink(link, `help-${idx}`))}
						</div>
					</div>
				) : null}
				<div className="intel-dossier-actions operation-item-actions">
					{item.hasLocation ? (
						<Tooltip title="Locate on Map">
							<Button component={Link} to={item.openOnMapPath} target="_blank" rel="noreferrer">
								<LocationOnIcon htmlColor="var(--clr-blue)" />
							</Button>
						</Tooltip>
					) : (
						<Button disabled>
							<LocationOnIcon htmlColor="var(--clr-grey)" />
						</Button>
					)}
					<ShareButton id={item.id} />
					<BugReportButton id={item.id} typeDesc={item.icon} mapItem={mapItem} />
				</div>
			</div>
		</article>
	);
}
