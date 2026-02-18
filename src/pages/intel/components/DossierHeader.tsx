import { ReactNode } from 'react';
import './dossier-header.css';

interface DossierHeaderProps {
	title: string;
	subtitle?: ReactNode;
	actions?: ReactNode;
	kicker?: string;
}

export default function DossierHeader({
	title,
	subtitle,
	actions,
	kicker = 'DECLASSIFIED INTEL DOSSIER',
}: DossierHeaderProps) {
	return (
		<header className="dossier-header rounded-box filled">
			<div className="dossier-header-content">
				<div className="dossier-header-copy">
					<p className="dossier-kicker">{kicker}</p>
					<h1>{title}</h1>
					{subtitle ? <p className="dossier-subtitle">{subtitle}</p> : null}
				</div>
				{actions ? <div className="dossier-header-actions">{actions}</div> : null}
			</div>
		</header>
	);
}
