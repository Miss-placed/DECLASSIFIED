import { useEffect, useMemo, useState } from 'react';
import { Container, Switch, TextField, Typography } from '@mui/material';
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';
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

type QuestViewMode = 'all' | 'guided';
type StepRailToken =
	| { type: 'step'; displayStep: number; actualStep: number }
	| { type: 'ellipsis'; key: string };

export default function QuestsMapPage() {
	const { gameSlug, mapSlug } = useParams();
	const location = useLocation();
	const [searchParams, setSearchParams] = useSearchParams();
	const locationState = location.state as { questViewMode?: QuestViewMode } | null;
	const locationViewMode = locationState?.questViewMode;
	const [query, setQuery] = useState('');
	const [showSpoilers, setShowSpoilers] = useState(false);
	const [viewMode, setViewMode] = useState<QuestViewMode>(() =>
		searchParams.get('step')
			? 'guided'
			: locationViewMode === 'all'
				? 'all'
				: 'guided'
	);
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
	const orderedSteps = useMemo(
		() =>
			Array.from(
				new Set(
					items
						.filter(item => typeof item.stepNumber === 'number')
						.map(item => item.stepNumber as number)
				)
			).sort((a, b) => a - b),
		[items]
	);
	const stepDisplayByActual = useMemo(
		() => new Map(orderedSteps.map((step, index) => [step, index + 1])),
		[orderedSteps]
	);
	const actualStepByDisplay = useMemo(
		() => new Map(orderedSteps.map((step, index) => [index + 1, step])),
		[orderedSteps]
	);
	const hasNumberedSteps = orderedSteps.length > 0;

	const activeStep = useMemo(() => {
		if (!hasNumberedSteps) return null;
		const rawStep = searchParams.get('step');
		const parsedStep = rawStep ? Number.parseInt(rawStep, 10) : Number.NaN;
		if (actualStepByDisplay.has(parsedStep)) {
			return actualStepByDisplay.get(parsedStep) ?? orderedSteps[0];
		}
		return orderedSteps[0];
	}, [actualStepByDisplay, hasNumberedSteps, orderedSteps, searchParams]);

	const activeStepIndex = useMemo(
		() => (activeStep === null ? -1 : orderedSteps.indexOf(activeStep)),
		[activeStep, orderedSteps]
	);
	const activeDisplayStep = useMemo(
		() =>
			activeStep === null
				? null
				: (stepDisplayByActual.get(activeStep) ?? activeStepIndex + 1),
		[activeStep, activeStepIndex, stepDisplayByActual]
	);
	const stepRailTokens = useMemo(() => {
		if (!hasNumberedSteps || activeDisplayStep === null) return [];
		const totalSteps = orderedSteps.length;
		const windowRadius = 3;
		const firstDisplayStep = 1;
		const lastDisplayStep = totalSteps;
		const windowStart = Math.max(firstDisplayStep, activeDisplayStep - windowRadius);
		const windowEnd = Math.min(lastDisplayStep, activeDisplayStep + windowRadius);

		const includedDisplaySteps = new Set<number>([
			firstDisplayStep,
			lastDisplayStep,
		]);
		for (let currentStep = windowStart; currentStep <= windowEnd; currentStep += 1) {
			includedDisplaySteps.add(currentStep);
		}

		const orderedDisplaySteps = Array.from(includedDisplaySteps).sort((a, b) => a - b);
		const railTokens: StepRailToken[] = [];
		let previousDisplayStep: number | null = null;

		orderedDisplaySteps.forEach(displayStep => {
			if (previousDisplayStep !== null && displayStep - previousDisplayStep > 1) {
				railTokens.push({
					type: 'ellipsis',
					key: `ellipsis-${previousDisplayStep}-${displayStep}`,
				});
			}
			const actualStepForDisplay = actualStepByDisplay.get(displayStep);
			if (typeof actualStepForDisplay === 'number') {
				railTokens.push({
					type: 'step',
					displayStep,
					actualStep: actualStepForDisplay,
				});
			}
			previousDisplayStep = displayStep;
		});

		return railTokens;
	}, [activeDisplayStep, actualStepByDisplay, hasNumberedSteps, orderedSteps.length]);
	const previousStep =
		activeStepIndex > 0 ? orderedSteps[activeStepIndex - 1] : null;
	const nextStep =
		activeStepIndex >= 0 && activeStepIndex < orderedSteps.length - 1
			? orderedSteps[activeStepIndex + 1]
			: null;

	const shouldShowGuided =
		viewMode === 'guided' && hasNumberedSteps && activeStep !== null;

	useEffect(() => {
		if (!hasNumberedSteps) {
			if (viewMode !== 'all') {
				setViewMode('all');
			}
			if (searchParams.get('step')) {
				const nextParams = new URLSearchParams(searchParams);
				nextParams.delete('step');
				setSearchParams(nextParams, {
					replace: true,
					state: { questViewMode: 'all' },
				});
			}
			return;
		}
		const hasStepParam = Boolean(searchParams.get('step'));
		if (hasStepParam) {
			setViewMode('guided');
			return;
		}
		if (locationViewMode === 'all') {
			setViewMode('all');
			return;
		}
		setViewMode('guided');
	}, [
		hasNumberedSteps,
		locationViewMode,
		searchParams,
		setSearchParams,
		viewMode,
	]);

	useEffect(() => {
		if (!shouldShowGuided || activeStep === null || activeDisplayStep === null) return;
		const currentStepParam = searchParams.get('step');
		if (!currentStepParam && locationViewMode === 'all') return;
		if (currentStepParam === String(activeDisplayStep)) return;
		const nextParams = new URLSearchParams(searchParams);
		nextParams.set('step', String(activeDisplayStep));
		setSearchParams(nextParams, {
			replace: true,
			state: { questViewMode: 'guided' },
		});
	}, [
		activeDisplayStep,
		activeStep,
		locationViewMode,
		searchParams,
		setSearchParams,
		shouldShowGuided,
	]);

	const setStepParam = (stepActual: number | null) => {
		const nextParams = new URLSearchParams(searchParams);
		if (stepActual === null) {
			nextParams.delete('step');
		} else {
			const displayStep = stepDisplayByActual.get(stepActual);
			if (!displayStep) return;
			nextParams.set('step', String(displayStep));
		}
		setSearchParams(nextParams, {
			replace: true,
			state: { questViewMode: stepActual === null ? 'all' : 'guided' },
		});
	};

	const switchToAllItems = () => {
		setViewMode('all');
		setStepParam(null);
	};

	const switchToGuided = () => {
		if (!hasNumberedSteps) return;
		setViewMode('guided');
		setStepParam(activeStep ?? orderedSteps[0]);
	};

	const filteredItems = useMemo(
		() => items.filter(item => matchesOperationQuery(item, query)),
		[items, query]
	);
	const guidedStepItems = useMemo(() => {
		if (activeStep === null) return [];
		return items
			.filter(item => item.stepNumber === activeStep)
			.sort((a, b) => a.title.localeCompare(b.title));
	}, [activeStep, items]);
	const supportingItems = useMemo(
		() =>
			items
				.filter(item => typeof item.stepNumber !== 'number')
				.sort(
					(a, b) =>
						(a.groupingTitle || 'General').localeCompare(
							b.groupingTitle || 'General'
						) || a.title.localeCompare(b.title)
				),
		[items]
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
				<div className="operation-mode-toggle" role="group" aria-label="Quest view mode">
					<button
						type="button"
						onClick={switchToGuided}
						className={viewMode === 'guided' ? 'active' : ''}
						aria-pressed={viewMode === 'guided'}
						disabled={!hasNumberedSteps}
					>
						Step-by-Step
					</button>
					<button
						type="button"
						onClick={switchToAllItems}
						className={viewMode === 'all' ? 'active' : ''}
						aria-pressed={viewMode === 'all'}
					>
						All Items
					</button>
				</div>
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

			{shouldShowGuided ? (
				<>
					<div className="operation-step-rail rounded-box filled">
						{stepRailTokens.map(token =>
							token.type === 'ellipsis' ? (
								<span
									key={token.key}
									className="operation-step-ellipsis"
									aria-hidden="true"
								>
									...
								</span>
							) : (
								<button
									type="button"
									key={`step-rail-${token.displayStep}`}
									className={activeDisplayStep === token.displayStep ? 'active' : ''}
									onClick={() => setStepParam(token.actualStep)}
									aria-current={
										activeDisplayStep === token.displayStep ? 'step' : undefined
									}
									aria-label={`Go to step ${token.displayStep}`}
								>
									{token.displayStep}
								</button>
							)
						)}
					</div>
					<div className="operation-step-nav rounded-box filled">
						<button
							type="button"
							onClick={() => setStepParam(previousStep)}
							disabled={previousStep === null}
							aria-label="Previous step"
							title="Previous step"
						>
							&lt;
						</button>
						<span className="operation-step-status">
							Step {activeDisplayStep} of {orderedSteps.length}
						</span>
						<button
							type="button"
							onClick={() => setStepParam(nextStep)}
							disabled={nextStep === null}
							aria-label="Next step"
							title="Next step"
						>
							&gt;
						</button>
					</div>
					<div className="intel-group">
						<div className="intel-type-header rounded-box filled map-group-header">
							<Typography className="title text-md" variant="h5">
								Step {activeDisplayStep}
							</Typography>
							<span className="intel-group-count">{guidedStepItems.length} Items</span>
						</div>
						{guidedStepItems.length > 0 ? (
							<div className="operation-map-grid map-group-grid">
								{guidedStepItems.map(item => (
									<OperationItemCard
										key={item.id}
										item={item}
										showSpoilers={showSpoilers}
										links={resolveRelatedLinksForItem(item)}
										showMapLayer={hasMultipleMapLayers}
										groupTitle={`Step ${activeDisplayStep}`}
										stepLabel={activeDisplayStep ?? undefined}
										showStepChip={false}
									/>
								))}
							</div>
						) : (
							<Typography className="rounded-box filled text-sm operation-guided-empty">
								No items were found for this step.
							</Typography>
						)}
					</div>
					{supportingItems.length > 0 ? (
						<div className="intel-group">
							<div className="intel-type-header rounded-box filled map-group-header">
								<Typography className="title text-md" variant="h5">
									Supporting Info
								</Typography>
								<span className="intel-group-count">{supportingItems.length} Items</span>
							</div>
							<Typography className="rounded-box filled text-sm operation-guided-support-note">
								Supplemental markers that are not part of the numbered quest flow.
							</Typography>
							<div className="operation-map-grid map-group-grid">
								{supportingItems.map(item => (
									<OperationItemCard
										key={item.id}
										item={item}
										showSpoilers={showSpoilers}
										links={resolveRelatedLinksForItem(item)}
										showMapLayer={hasMultipleMapLayers}
										groupTitle="Supporting Info"
									/>
								))}
							</div>
						</div>
					) : null}
				</>
			) : (
				<>
					{viewMode === 'guided' && !hasNumberedSteps ? (
						<Typography className="rounded-box filled text-sm operation-guided-empty">
							This map does not currently have numbered steps. Showing all items.
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
										stepLabel={
											typeof item.stepNumber === 'number'
												? stepDisplayByActual.get(item.stepNumber)
												: undefined
										}
										stepChipTo={
											typeof item.stepNumber === 'number' &&
											stepDisplayByActual.has(item.stepNumber)
												? `?step=${stepDisplayByActual.get(item.stepNumber)}`
												: undefined
										}
									/>
								))}
							</div>
						</div>
					))}
				</>
			)}
		</Container>
	);
}
