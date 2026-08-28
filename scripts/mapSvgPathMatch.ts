/**
 * Locates and rewrites `<path .../>` tags in an SVG string by their exact `d` attribute
 * value, using plain substring search instead of embedding `d` inside a RegExp.
 *
 * `d` values for complex traced outlines can run into the tens of thousands of characters.
 * The previous approach built patterns like `new RegExp(`...d="${escaped}"...`)` — V8 throws
 * "Regular expression too large" once the embedded literal crosses its internal compiled-size
 * limit. Plain string search (`indexOf`/`lastIndexOf`) has no such limit and needs no escaping,
 * since path data never contains a `"` character.
 */

export interface PathTagMatch {
  /** Index (into the searched svg string) where the `<path` tag begins. */
  tagStart: number;
  /** Index just past the tag's closing `/>` (exclusive). */
  tagEnd: number;
  /** Tag text between `<path` and the `d="..."` attribute (other attributes, if any). */
  before: string;
  /** Tag text between the `d="..."` attribute and the closing `/>`. */
  after: string;
}

/** Finds the next `<path>` tag whose `d` attribute exactly equals `d`, starting at `fromIndex`. */
export function findPathTagByD(svg: string, d: string, fromIndex = 0): PathTagMatch | null {
  const needle = `d="${d}"`;
  const dIdx = svg.indexOf(needle, fromIndex);
  if (dIdx === -1) return null;
  const tagStart = svg.lastIndexOf('<path', dIdx);
  if (tagStart === -1) return null;
  const tagEnd = svg.indexOf('/>', dIdx);
  if (tagEnd === -1) return null;
  // Guard against the d="..." belonging to a later tag (shouldn't happen for well-formed
  // self-closing <path/> markup, but keeps this from silently matching the wrong element).
  const nextPathStart = svg.indexOf('<path', tagStart + 1);
  if (nextPathStart !== -1 && nextPathStart <= dIdx) return null;
  return {
    tagStart,
    tagEnd: tagEnd + 2,
    before: svg.slice(tagStart + '<path'.length, dIdx),
    after: svg.slice(dIdx + needle.length, tagEnd),
  };
}

const TRANSFORM_RE = /transform="([^"]*)"/;

/**
 * Injects or updates a `transform` attribute on every `<path>` tag matching `d`.
 * `buildTransform` receives the existing transform value (or null) and returns the new one.
 * Matches the pre-existing attribute-ordering convention: transform is only ever detected/
 * placed among the attributes preceding `d=`, never after.
 */
export function applyTransformToPathByD(
  svg: string,
  d: string,
  buildTransform: (existingTransform: string | null) => string,
): { svg: string; matchCount: number } {
  let result = '';
  let cursor = 0;
  let matchCount = 0;
  while (true) {
    const m = findPathTagByD(svg, d, cursor);
    if (!m) break;
    matchCount++;
    const existingMatch = m.before.match(TRANSFORM_RE);
    const newTransform = buildTransform(existingMatch ? existingMatch[1] : null);
    const newBefore = existingMatch
      ? m.before.replace(TRANSFORM_RE, `transform="${newTransform}"`)
      : ` transform="${newTransform}"` + m.before;
    result += svg.slice(cursor, m.tagStart) + '<path' + newBefore + 'd="' + d + '"' + m.after + '/>';
    cursor = m.tagEnd;
  }
  result += svg.slice(cursor);
  return { svg: result, matchCount };
}

/** Replaces the `d` attribute value on every `<path>` tag matching `oldD`, leaving other attributes untouched. */
export function replacePathDByD(svg: string, oldD: string, newD: string): { svg: string; matchCount: number } {
  let result = '';
  let cursor = 0;
  let matchCount = 0;
  while (true) {
    const m = findPathTagByD(svg, oldD, cursor);
    if (!m) break;
    matchCount++;
    result += svg.slice(cursor, m.tagStart) + '<path' + m.before + 'd="' + newD + '"' + m.after + '/>';
    cursor = m.tagEnd;
  }
  result += svg.slice(cursor);
  return { svg: result, matchCount };
}

/** Removes every `<path>` tag matching `d`, along with its leading indentation and trailing line break. */
export function removeAllPathTagsByD(svg: string, d: string): { svg: string; matchCount: number } {
  let result = '';
  let cursor = 0;
  let matchCount = 0;
  while (true) {
    const m = findPathTagByD(svg, d, cursor);
    if (!m) break;
    matchCount++;
    let start = m.tagStart;
    while (start > cursor && (svg[start - 1] === ' ' || svg[start - 1] === '\t')) start--;
    let end = m.tagEnd;
    if (svg[end] === '\r') end++;
    if (svg[end] === '\n') end++;
    result += svg.slice(cursor, start);
    cursor = end;
  }
  result += svg.slice(cursor);
  return { svg: result, matchCount };
}
