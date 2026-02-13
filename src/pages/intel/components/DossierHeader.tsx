import './dossier-header.css';

interface DossierHeaderProps {
	title: string;
	subtitle?: string;
}

export default function DossierHeader({ title, subtitle }: DossierHeaderProps) {
	return (
		<header className="dossier-header rounded-box filled">
			<p className="dossier-kicker">DECLASSIFIED INTEL DOSSIER</p>
			<h1>{title}</h1>
			{subtitle ? <p>{subtitle}</p> : null}
		</header>
	);
}
