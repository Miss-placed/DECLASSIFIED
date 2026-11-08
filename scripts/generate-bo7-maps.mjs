// Generates src/data/maps/blackOps7Maps.tsx from Figma SVG exports.
// The exports are plain SVG with named layer groups and hardcoded fills, so this
// script:
//   - drops the flat #D9D9D9 backdrop rect: the app already paints its own map
//     background. The `background` layer is kept, it is the wall mass for the map
//     (a multi-subpath evenodd ring), not canvas furniture.
//   - flattens the <g id="BO7"> / <g id="Map name"> wrapper groups
//   - swaps `id` attributes for local camelCase className values (ids collide
//     globally, and the shared stylesheet must not be touched)
//   - camelCases the hyphenated SVG attributes React expects
//   - marks any element without a fill as `noFill` (the export relies on the root
//     <svg fill="none">, which is dropped when the file becomes an overlay child)
// Painting order is left exactly as exported: SVG paints in document order, and
// the Figma export already lists layers back-to-front.
import { readFileSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';

const SVG_DIR = process.argv[2];
const OUT_FILE = process.argv[3];
if (!SVG_DIR || !OUT_FILE) {
    console.error('usage: node generate-bo7-maps.mjs <svgDir> <outFile>');
    process.exit(1);
}

// key in blackOps7Maps -> source file
const MAPS = [
    ['ashesOfTheDamned', 'Ashes Of The Damned.svg'],
    ['astraMalorum', 'Astra Malorum.svg'],
    ['paradoxJunction', 'Paradox Junction - Nuked.svg'],
    ['paradoxJunctionPast', 'Paradox Junction - Past.svg'],
    ['totenreich', 'Totenreich.svg'],
    ['totenreichBoss', 'Totenreich - Boss.svg'],
    ['kowakujo', 'Kowakujō.svg'],
    ['rexInfernus', 'Rex Infernus.svg'],
];

// Colours come from the same --svg-* theme variables the Cold War / Black Ops 6
// overlays use, declared locally so the shared stylesheet stays untouched.
// Class names are local to the Black Ops 7 maps and mirror the semantics the Cold
// War / Black Ops 6 overlays use (landmass, features, borders). They resolve against
// the same --svg-* theme variables, so the shared stylesheet stays untouched and
// the older maps render exactly as they do on master.
const MAP_STYLE = `const mapStyle = \`
.noFill{fill:none;}
.noStroke{stroke:none;}

.borderFill{fill:var(--svg-border);}
.fieldFill{fill:var(--svg-field);}
.featureFill{fill:var(--svg-features);}

.borderStroke{stroke:var(--svg-border);}
.featureStroke{stroke:var(--svg-features);}
\`;

`;

const FILL_CLASS = {
    // the `background` layer is the map landmass, not canvas furniture
    '#555555': 'fieldFill',
    '#6b6b6b': 'featureFill',
    '#7c2728': 'borderFill',
};

const STROKE_CLASS = {
    '#6b6b6b': 'featureStroke',
    '#7c2728': 'borderStroke',
    none: 'noStroke',
};

const ATTR_MAP = {
    'stroke-width': 'strokeWidth',
    'fill-rule': 'fillRule',
    'clip-rule': 'clipRule',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'stroke-dasharray': 'strokeDasharray',
    'clip-path': 'clipPath',
};

const DROP_ATTRS = new Set(['id', 'xmlns', 'data-name']);
const INDENT = '    ';

const decodeEntities = (value = '') =>
    value
        .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"');

function parseAttrs(raw) {
    const attrs = [];
    const re = /([a-zA-Z:-]+)(?:="([^"]*)")?/g;
    let match;
    while ((match = re.exec(raw))) attrs.push([match[1], match[2]]);
    return attrs;
}

const TAG_RE = /<(\/?)([a-zA-Z]+)((?:[^<>"']|"[^"]*"|'[^']*')*?)(\/?)>/g;

// Removes the flat #D9D9D9 backdrop rect. It is Figma canvas furniture: the app
// supplies the map background globally.
function stripFigmaBackdrop(source) {
    return source.replace(/<rect[^>]*fill="#D9D9D9"[^>]*\/>/gi, '');
}

function toJsx(svgSource, fileStem) {
    const lines = [];
    const tagRe = /<(\/?)([a-zA-Z]+)((?:[^<>"']|"[^"]*"|'[^']*')*?)(\/?)>/g;
    const wrapperIds = new Set(['BO7', fileStem]);
    const stack = []; // { skipped } per open tag so closing tags stay in sync
    let depth = 0;
    let match;

    while ((match = tagRe.exec(svgSource))) {
        const [, closing, tag, rawAttrs, selfClose] = match;
        const attrs = parseAttrs(rawAttrs);
        const attrMap = Object.fromEntries(attrs);
        const id = decodeEntities(attrMap.id);

        // the root <svg> is replaced by the SVGOverlay attributes, and the
        // BO7 / map-name groups are pure organisation, so both are skipped
        if (tag === 'svg' || (tag === 'g' && id && wrapperIds.has(id))) {
            if (!selfClose) {
                if (closing) stack.pop();
                else stack.push({ skipped: true });
            }
            continue;
        }

        if (closing) {
            const open = stack.pop();
            if (open?.skipped) continue;
            depth = Math.max(0, depth - 1);
            lines.push(`${INDENT.repeat(depth)}</${tag}>`);
            continue;
        }

        const classes = [];
        const fill = attrMap.fill?.toLowerCase();
        const stroke = attrMap.stroke?.toLowerCase();

        if (fill !== undefined) {
            if (!FILL_CLASS[fill]) throw new Error(`${fileStem}: unmapped fill ${fill}`);
            classes.push(FILL_CLASS[fill]);
        }
        // the export relies on the root <svg fill="none"> for line work
        else if (tag !== 'g') classes.push('noFill');

        if (stroke !== undefined) {
            if (!STROKE_CLASS[stroke]) {
                throw new Error(`${fileStem}: unmapped stroke ${stroke}`);
            }
            classes.push(STROKE_CLASS[stroke]);
        }

        const kept = [];
        const classList = classes.filter(Boolean);
        if (classList.length) kept.push(`className="${classList.join(' ')}"`);

        for (const [name, value] of attrs) {
            if (DROP_ATTRS.has(name)) continue;
            if (name === 'fill' || name === 'stroke') continue; // now class driven
            const jsxName = ATTR_MAP[name] ?? name;
            kept.push(value === undefined ? jsxName : `${jsxName}="${value}"`);
        }

        const attrString = kept.length ? ` ${kept.join(' ')}` : '';
        const pad = INDENT.repeat(depth);

        if (selfClose) {
            lines.push(`${pad}<${tag}${attrString} />`);
        } else {
            lines.push(`${pad}<${tag}${attrString}>`);
            stack.push({ skipped: false });
            depth += 1;
        }
    }

    if (depth !== 0 || stack.length !== 0) {
        throw new Error(`${fileStem}: unbalanced tags (depth ${depth}, stack ${stack.length})`);
    }

    return lines.map((line) => `            ${line}`).join('\n');
}

const entries = MAPS.map(([key, file]) => {
    if (!file) return `    ${key}: TBAOverlay('${TITLES[key]}'),\n`;

    const source = readFileSync(join(SVG_DIR, file), 'utf8');
    const stem = basename(file, '.svg');
    const body = toJsx(stripFigmaBackdrop(source), stem);

    return `    ${key}: (
        <SVGOverlay attributes={{ viewBox: '0 0 512 512' }} bounds={ImageBounds}>
            <defs>
                <style>{mapStyle}</style>
            </defs>
${body}
        </SVGOverlay>
    ),
`;
});

const out = `import { SVGOverlay } from "react-leaflet";
import { ImageBounds } from './sharedSVGProperties';

// SVG overlays for Black Ops 7 maps.
// Generated from the map SVG exports — do not hand edit, re-run
// scripts/generate-bo7-maps.mjs instead.

${MAP_STYLE}export const blackOps7Maps = {
${entries.join('')}};
`;

writeFileSync(OUT_FILE, out);
console.log(`wrote ${OUT_FILE}`);
