import { Link } from 'react-router-dom';
import DossierHeader from './components/DossierHeader';
import '../../styles/intel-dossier.css';

const games = [
	{ slug: 'black-ops-6', title: 'Black Ops 6' },
	{ slug: 'black-ops-cold-war', title: 'Black Ops Cold War' }
];

export default function IntelHomePage() {
	return (
		<section className="intel-dossier-page">
			<DossierHeader
				title="Intel Dossier Archive"
				subtitle="Static SEO pages are generated under /public/intel for crawler-friendly previews."
			/>
			<ul>
				{games.map(game => (
					<li key={game.slug}>
						<Link to={`/intel/${game.slug}`}>{game.title}</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
