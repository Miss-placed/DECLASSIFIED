import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import { DeclassifiedContext } from '../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { EggList } from '../EasterEggs/List';
import { EggListMenu } from '../EasterEggs/ListMenu';
import { IntelList } from '../Intel/IntelList';
import { IntelListMenu } from '../Intel/IntelListMenu';
import { MultiSelectMenu } from './MultiSelectMenu';

interface TabPanelProps {
	children?: React.ReactNode;
	dir?: string;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && <Box>{children}</Box>}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}

export const IntelAndEasterEggDrawerContent = () => {
	const theme = useTheme();
	const { filteredIntelStore } = useContext(DeclassifiedContext);
	const [tabSelectedState, setSelectedTab] = React.useState(0);
	const [intelMultiSelectState, setIntelMultiSelectState] = useState<string[]>(
		[]
	);

	const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setSelectedTab(newValue);
	};

	const addRemoveItemMultiSelect = (value: string) => {
		setIntelMultiSelectState(prevState => {
			const currentSet = new Set(prevState);
			if (currentSet.has(value)) {
				currentSet.delete(value);
			} else {
				currentSet.add(value);
			}
			return Array.from(currentSet);
		});
	};

	const handleSetIntelMultiSelectState = (intelToSelect: string[]) => {
		setIntelMultiSelectState(intelToSelect);
	};

	useEffect(() => {
		const filteredIntelIds = new Set(filteredIntelStore.map(intel => intel.id));
		const filteredSelection = intelMultiSelectState.filter(id => 
			filteredIntelIds.has(id)
		);
		
		if (filteredSelection.length !== intelMultiSelectState.length) {
			setIntelMultiSelectState(filteredSelection);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filteredIntelStore]);

	return (
		<>
			<Box sx={{ bgcolor: 'background.paper', height: 'inherit' }}>
				<StyledAppBar position="sticky">
					<Tabs
						value={tabSelectedState}
						onChange={handleTabChange}
						indicatorColor="secondary"
						textColor="inherit"
						variant="fullWidth"
					>
						<Tab label="Intel" {...a11yProps(0)} />
						<Tab label="Easter Eggs" {...a11yProps(1)} />
					</Tabs>
				</StyledAppBar>
				<StyledTabPanel
					value={tabSelectedState}
					index={0}
					dir={theme.direction}
				>
					<TabContentContainer id="intel-filter">
						<MultiSelectMenu
							multiSelectState={intelMultiSelectState}
							setMultiSelectState={handleSetIntelMultiSelectState}
						/>
						<IntelList
							multiSelectState={intelMultiSelectState}
							addRemoveItemMultiSelect={addRemoveItemMultiSelect}
						/>
						<IntelListMenu />
					</TabContentContainer>
				</StyledTabPanel>
				<StyledTabPanel
					value={tabSelectedState}
					index={1}
					dir={theme.direction}
				>
					<TabContentContainer id="eggs-filter">
						<EggList />
						<EggListMenu />
					</TabContentContainer>
				</StyledTabPanel>
			</Box>
		</>
	);
};

const TabContentContainer = styled.div`
	background-color: var(--clr-grey-d);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
`;

const StyledAppBar = styled(AppBar)`
	background-color: var(--clr-bg);
`;

const StyledTabPanel = styled(TabPanel)`
	height: inherit;
	.MuiBox-root {
		padding: unset;
		height: inherit;
	}
`;
