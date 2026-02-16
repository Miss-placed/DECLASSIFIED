import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export const HomeIcon = (props: IconProps) => (
	<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
		<path d="M12 3 2 12h3v8h6v-5h2v5h6v-8h3L12 3z" />
	</svg>
);

export const DiscordIcon = (props: IconProps) => (
	<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
		<path d="M4 4h16v11H8l-4 4V4z" />
		<circle cx="9" cy="10" r="1.2" />
		<circle cx="12" cy="10" r="1.2" />
		<circle cx="15" cy="10" r="1.2" />
	</svg>
);

export const GithubIcon = (props: IconProps) => (
	<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
		<path d="M8 7 3 12l5 5 1.4-1.4L5.8 12l3.6-3.6L8 7zm8 0-1.4 1.4 3.6 3.6-3.6 3.6L16 17l5-5-5-5zM13.7 4 9.3 20h2l4.4-16h-2z" />
	</svg>
);

export const CoffeeIcon = (props: IconProps) => (
	<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
		<path d="M4 7h12v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V7zm12 2h2a2 2 0 1 1 0 4h-2V9zM7 4h2v2H7V4zm3 0h2v2h-2V4z" />
	</svg>
);

export const ExternalLinkIcon = (props: IconProps) => (
	<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
		<path d="M14 3h7v7h-2V6.41l-8.29 8.3-1.42-1.42 8.3-8.29H14V3z" />
		<path d="M5 5h6v2H7v10h10v-4h2v6H5V5z" />
	</svg>
);
