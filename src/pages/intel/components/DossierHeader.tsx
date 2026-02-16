import { ReactNode } from 'react';
import './dossier-header.css';

interface DossierHeaderProps {
	title: string;
	subtitle?: ReactNode;
	actions?: ReactNode;
}

export default function DossierHeader({ title, subtitle, actions }: DossierHeaderProps) {
	return (
		<header className="dossier-header rounded-box filled">
			<div className="dossier-header-content">
				<div className="dossier-header-copy">
					<p className="dossier-kicker">DECLASSIFIED INTEL DOSSIER</p>
					<h1>{title}</h1>
					{subtitle ? <p className="dossier-subtitle">{subtitle}</p> : null}
				</div>
				{actions ? <div className="dossier-header-actions">{actions}</div> : null}
			</div>
		</header>
	);
}
