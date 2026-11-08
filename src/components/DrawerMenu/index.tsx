import styled from '@emotion/styled';
import { SwipeableDrawer } from '@mui/material';
import { useContext } from 'react';
import { DeclassifiedContext } from '../../contexts/DeclassifiedContext/declassifiedContextProvider';

const StyledSwipeableDrawer = styled(SwipeableDrawer)`
	.MuiDrawer-paper {
		/* the paper itself must not scroll: the tabs and the filter panel stay put and
		   only the list between them scrolls, so no scrollbar runs past the header or
		   the filters */
		overflow: hidden;

		@media (max-width: 900px) {
			height: 75%;
			max-height: 75%;
		}
		@media (min-width: 900px) {
			height: 100%;
			width: 500px;
		}
	}
`;
export interface BaseLayoutProps {
	children: React.ReactNode;
}

export const DrawerMenu = ({ children }: BaseLayoutProps) => {
	const { drawerState, toggleDrawer } = useContext(DeclassifiedContext);
	let width = window.innerWidth;
	return (
		<StyledSwipeableDrawer
			anchor={width > 900 ? 'left' : 'bottom'}
			open={drawerState.isOpen}
			onClose={(event) => toggleDrawer({ isOpen: false, clickEvent: event })}
			onOpen={(event) => toggleDrawer({ isOpen: true, clickEvent: event })}
		>
			{children}
		</StyledSwipeableDrawer>
	);
};
