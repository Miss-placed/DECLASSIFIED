import { SVGOverlay } from "react-leaflet";
import { ImageBounds, globalStyle } from './sharedSVGProperties';

// SVG overlays for Black Ops 7 maps.
// TBA: Replace each placeholder with the real map SVG when available.

const TBAOverlay = (label: string) => (
    <SVGOverlay attributes={{ viewBox: '0 0 512 512' }} bounds={ImageBounds}>
        <defs>
            <style>{globalStyle}</style>
        </defs>
        <rect className="background-fill" x="0" y="0" width="512" height="512" />
        <text
            x="256"
            y="256"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="var(--svg-features)"
            fontSize="32"
            fontFamily="system-ui, sans-serif"
        >
            {label}
        </text>
        <text
            x="256"
            y="300"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="var(--svg-features)"
            fontSize="18"
            fontFamily="system-ui, sans-serif"
        >
            Map SVG — TBA
        </text>
    </SVGOverlay>
);

export const blackOps7Maps = {
    ashesOfTheDamned: TBAOverlay('Ashes of the Damned'),
    astraMalorum: TBAOverlay('Astra Malorum'),
    paradoxJunction: TBAOverlay('Paradox Junction'),
    totenreich: TBAOverlay('Totenreich'),
    kowakujo: TBAOverlay('Kowakujō'),
};
