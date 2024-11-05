import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../../../styles/buttons.css';
import '../../../styles/challenge/cards-alt.css';
import '../../../styles/challenge/cards.css';
import '../../../styles/challenge/mobilefirst.css';
import '../../../styles/global.css';
import '../../../styles/leaflet-override.css';
import '../../../styles/normalize.css';
import '../../../styles/style.css';

export interface BaseLayoutProps {
	children: React.ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
	// TODO: Apply and use this properly throughout the app so we can have theme switching
	const defaultTheme = createTheme({
		palette: {
			background: {
				default: 'var(--clr-bg)'
			},
			text: {
				primary: 'var(--clr-white-d)'
			},
			primary: {
				// main: '#3c3c3b'
				main: '#b33536'
			},
			secondary: {
				main: '#b33536'
			},
		},
		components: {
			MuiButton: {
				styleOverrides: {
					root: {
						backgroundColor: 'var(--clr-white-d)', // Set your custom background color for all buttons
						color: 'var(--clr-grey-d)', // Text color
						'&:hover': {
							backgroundColor: 'var(--clr-bg)', // Hover state color
							color: 'var(--clr-white-d)', // Hover state text color
						},
					},
				},
			},
		}
	});
	// TODO : make light theme
	return (
		<>
			<ThemeProvider theme={defaultTheme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</>
	);
};
