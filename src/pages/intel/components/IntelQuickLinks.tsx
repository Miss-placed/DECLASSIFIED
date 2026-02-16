import {
	CoffeeIcon,
	DiscordIcon,
	GithubIcon,
} from '../../../components/SocialIcons';

export default function IntelQuickLinks() {
	return (
		<div className="intel-header-links" aria-label="Quick links">
			<a
				id="discord"
				className="intel-header-link social-link"
				href="https://discord.gg/4Xqj8XntFe"
				target="_blank"
				rel="noreferrer"
				title="Discord"
				aria-label="Discord"
			>
				<DiscordIcon />
			</a>
			<a
				id="github"
				className="intel-header-link social-link"
				href="https://github.com/Miss-placed/DECLASSIFIED"
				target="_blank"
				rel="noreferrer"
				title="GitHub"
				aria-label="GitHub"
			>
				<GithubIcon />
			</a>
			<a
				id="coffee"
				className="intel-header-link social-link"
				href="https://buymeacoffee.com/declassified.map"
				target="_blank"
				rel="noreferrer"
				title="Buy me a coffee"
				aria-label="Buy me a coffee"
			>
				<CoffeeIcon />
			</a>
		</div>
	);
}
