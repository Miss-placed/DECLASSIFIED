import styled from '@emotion/styled';
import React, { useContext, useEffect, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { DeclassifiedContext } from '../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { IntelType } from '../../data/IntelTypes';
import { IntelStore } from '../../data/intel';

export const CustomIntelFilterCheckbox = ({ name, defaultChecked }) => {
	const { register, getValues, setValue } = useFormContext();
	const { collectedIntel } = useContext(DeclassifiedContext);
	const imgSrc = name.toLowerCase();
	const checkboxValue = IntelType[name];
	let [checked, setChecked] = React.useState(defaultChecked || false);
	const checkbox = useRef<HTMLInputElement | null>(null);
	const { ref, ...rest } = register('intelTypes');
	const totalIntelOfType = IntelStore.filter(
		intel => intel.typeDesc === checkboxValue
	).length;
	const totalIntelCollectedOfType = IntelStore.filter(
		intel =>
			intel.typeDesc === checkboxValue &&
			collectedIntel &&
			collectedIntel.find(({ intelId }) => intelId === intel.id)
	).length;

	useEffect(() => {
		const nextChecked = defaultChecked || false;
		setChecked(nextChecked);
		if (checkbox.current) {
			checkbox.current.checked = nextChecked;
		}
	}, [defaultChecked]);

	return (
		<>
			<input
				style={{ display: 'none' }}
				key={checkboxValue}
				type="checkbox"
				value={checkboxValue}
				{...rest}
				ref={e => {
					ref(e);
					checkbox.current = e;
				}}
				name={'intelTypes'}
			/>
			<StyledCustomIntelFilterCheckbox
				onClick={() => {
					const isChecked = !checkbox.current!.checked;
					checkbox.current!.checked = isChecked;
					setChecked(isChecked);
					const currentArray = getValues('intelTypes');

					if (isChecked) {
						currentArray.push(checkboxValue);
						setValue('intelTypes', currentArray);
					} else {
						const index = currentArray.indexOf(checkboxValue);
						if (index > -1) {
							currentArray.splice(index, 1);
						}
						setValue('intelTypes', currentArray);
					}
				}}
				style={{ cursor: 'pointer' }}
			>
				<div className={`container ${checked ? 'checked' : ''}`}>
					<label>{name}</label>
					<img
						src={require(`../../../src/assets/img/intelTypes/${imgSrc}.png`)}
						alt="Placeholder"
						loading="lazy"
					/>
					<div className="intel-count">
						{totalIntelCollectedOfType} /{totalIntelOfType}
					</div>
				</div>
			</StyledCustomIntelFilterCheckbox>
		</>
	);
};

const StyledCustomIntelFilterCheckbox = styled.div`
	/* fill the grid cell so every filter button is the same width instead of
	   shrinking to its own content */
	width: 100%;

	.container {
		position: relative;
		width: 100%;
		background-color: var(--clr-white-d);
		display: grid;
		/* keep the label's square corners inside the rounded button */
		overflow: hidden;
		/* the label carries the longest text ("Artifacts"), so it gets the flexible
		   column and the count sizes to its own content */
		grid-template-columns: minmax(0, 2.2fr) minmax(0, 1.4fr) auto;
		border-radius: 5px;
		justify-items: center;
		align-items: center;
		/* the row is one big click target, so dragging across it should not select
		   the label or the count as text */
		user-select: none;
	}
	/* grid items default to min-width: auto, so the icon images (much wider than
	   the cell) would blow the column out and squash the label */
	.container > * {
		min-width: 0;
	}
	label {
		background-color: var(--clr-grey-d);
		color: var(--clr-white-d);
		padding: 0.2rem 0.25rem;
		/* the root font size is x-large, so the label needs its own scale to fit
		   "Artifact(s)" in the label column without breaking mid-word */
		font-size: 0.7rem;
		width: 100%;
		height: 100%;
		line-height: 1.15;
		/* last resort on very narrow screens: wrap instead of spilling under the icon */
		overflow-wrap: anywhere;
		hyphens: auto;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	img {
		width: 100%;
		height: 2.6rem;
		object-fit: contain;
		padding: 0.2rem;
	}
	.intel-count {
		font-size: 0.7rem;
		background-color: var(--clr-white);
		text-align: center;
		height: 100%;
		display: flex;
		align-items: center;
		padding: 0.2rem 0.35rem;
		border-top-right-radius: var(--radius);
		border-bottom-right-radius: var(--radius);
	}
	/* an outline is painted outside the border box, so it spilled into the 10px
	   grid gap and got clipped by the panel edge on the first row. Drawing the
	   highlight as an overlay inside the button keeps the shape intact and does not
	   shift any layout. */
	.checked::after {
		content: '';
		position: absolute;
		inset: 0;
		border: 3px solid var(--clr-yellow);
		border-radius: inherit;
		pointer-events: none;
	}
`;
