import { useMemo, useState } from 'react';
import { Container, Switch, TextField, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { HomeIcon } from '../../components/SocialIcons';
import {
	getOperationsMapItems,
	matchesOperationQuery,
	resolveRelatedLinksForItem,
} from '../../data/operationsSeo';
import '../../styles/intel-dossier.css';
import DossierHeader from '../intel/components/DossierHeader';
import IntelQuickLinks from '../intel/components/IntelQuickLinks';
import OperationItemCard from '../operations/components/OperationItemCard';

export default function QuestsMapPage() {
	const { gameSlug, mapSlug } = useParams();
	const [query, setQuery] = useState('');
	const [showSpoilers, setShowSpoilers] = useState(false);
	const items = useMemo(
		() =>
			gameSlug && mapSlug
				? getOperationsMapItems('mainQuest', gameSlug, mapSlug)
				: [],
		[gameSlug, mapSlug]
	);
	const gameTitle = items[0]?.gameTitle ?? gameSlug ?? 'Unknown Game';
	const mapTitle = items[0]?.mapGroupTitle ?? mapSlug ?? 'Unknown Map';
	const mapIds = Array.from(new Set(items.map(item => item.mapId)));
	const hasMultipleMapLayers = mapIds.length > 1;
	const mapAreas = Array.from(
		new Map(items.map(item => [item.mapId, item.mapTitle])).entries()
	);

	const filteredItems = useMemo(
		() => items.filter(item => matchesOperationQuery(item, query)),
		[items, query]
	);
	const grouped = useMemo(() => {
		const groups = new Map<string, typeof filteredItems>();
		filteredItems.forEach(item => {
			const key = item.groupingTitle || 'General';
			const current = groups.get(key) ?? [];
			current.push(item);
			groups.set(key, current);
		});
		return Array.from(groups.entries())
			.map(([category, categoryItems]) => ({
				category,
				items: categoryItems.sort(
					(a, b) =>
						(a.stepNumber ?? Number.MAX_SAFE_INTEGER) -
							(b.stepNumber ?? Number.MAX_SAFE_INTEGER) ||
						a.title.localeCompare(b.title)
				),
			}))
			.sort((a, b) => a.category.localeCompare(b.category));
	}, [filteredItems]);

	return (
		<Container className="intel-dossier-page link-reset">
			<DossierHeader
				title="Main Quest Steps"
				kicker="DECLASSIFIED OPERATIONS DOSSIER"
				subtitle={
					<>
						<Link
							to="/"
							className="dossier-breadcrumb-home"
							aria-label="Home"
							title="Home"
						>
							<HomeIcon />
						</Link>
						{' / '}
						<Link to={`/operations/${gameSlug}`}>{gameTitle}</Link>
						{' / '}
						Main Quest
						{' / '}
						{mapTitle}
					</>
				}
				actions={<IntelQuickLinks />}
			/>
			<div className="intel-dossier-actions">
				{mapIds.length === 1 ? (
					<Link to={`/${mapIds[0]}`} target="_blank" rel="noreferrer">
						Open map
					</Link>
				) : null}
				{gameSlug && mapSlug ? (
					<Link to={`/eggs/${gameSlug}/${mapSlug}`}>Open Side Eggs Dossier</Link>
				) : null}
				<label className="operation-toggle">
					<Switch
						size="small"
						checked={showSpoilers}
						onChange={event => setShowSpoilers(event.target.checked)}
					/>
					Show Spoilers
				</label>
			</div>
			{hasMultipleMapLayers ? (
				<Typography className="rounded-box filled text-sm operation-map-areas">
					Map areas in this dossier:{' '}
					{mapAreas.map(([areaMapId, areaMapTitle], index) => (
						<span key={areaMapId}>
							{index > 0 ? ' · ' : ''}
							<Link to={`/${areaMapId}`} target="_blank" rel="noreferrer">
								{areaMapTitle}
							</Link>
						</span>
					))}
				</Typography>
			) : null}
			<div className="operation-search-row rounded-box filled">
				<TextField
					size="small"
					fullWidth
					label="Search main quest steps"
					value={query}
					onChange={event => setQuery(event.target.value)}
				/>
				<span className="operation-search-count">{filteredItems.length} results</span>
			</div>
			{grouped.map(group => (
				<div key={group.category} className="intel-group">
					<div className="intel-type-header rounded-box filled map-group-header">
						<Typography className="title text-md" variant="h5">
							{group.category}
						</Typography>
						<span className="intel-group-count">{group.items.length} Steps</span>
					</div>
					<div className="operation-map-grid map-group-grid">
						{group.items.map(item => (
							<OperationItemCard
								key={item.id}
								item={item}
								showSpoilers={showSpoilers}
								links={resolveRelatedLinksForItem(item)}
								showMapLayer={hasMultipleMapLayers}
								groupTitle={group.category}
							/>
						))}
					</div>
				</div>
			))}
		</Container>
	);
}
