import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  findPathTagByD,
  applyTransformToPathByD,
  replacePathDByD,
  removeAllPathTagsByD,
} from './mapSvgPathMatch';

test('findPathTagByD locates a simple path tag by its exact d value', () => {
  const svg = '<svg><g id="walls">\n    <path class="ann-fill" d="M 0 0 L 10 10"/>\n  </g></svg>';
  const m = findPathTagByD(svg, 'M 0 0 L 10 10');
  assert.ok(m);
  assert.equal(svg.slice(m.tagStart, m.tagEnd), '<path class="ann-fill" d="M 0 0 L 10 10"/>');
});

test('findPathTagByD returns null when the d value is not present', () => {
  const svg = '<svg><path d="M 0 0 L 1 1"/></svg>';
  assert.equal(findPathTagByD(svg, 'M 9 9 L 8 8'), null);
});

test("findPathTagByD doesn't confuse a path whose d is a prefix of another path's d", () => {
  const svg = '<svg><path d="M 0 0 L 1 1"/><path d="M 0 0 L 1 1 L 2 2"/></svg>';
  const m = findPathTagByD(svg, 'M 0 0 L 1 1 L 2 2');
  assert.ok(m);
  assert.equal(svg.slice(m.tagStart, m.tagEnd), '<path d="M 0 0 L 1 1 L 2 2"/>');
});

test('applyTransformToPathByD injects a transform on a path with none', () => {
  const svg = '<svg>\n    <path class="ann-fill" d="M 0 0 L 10 10"/>\n</svg>';
  const { svg: out, matchCount } = applyTransformToPathByD(svg, 'M 0 0 L 10 10', existing => {
    assert.equal(existing, null);
    return 'translate(5,5)';
  });
  assert.equal(matchCount, 1);
  // Matches the pre-existing convention (from the old 'move'/'rotate' code): a freshly
  // injected transform is prepended before whatever attributes were already there.
  assert.match(out, /<path transform="translate\(5,5\)" class="ann-fill" d="M 0 0 L 10 10"\/>/);
});

test('applyTransformToPathByD sees and can combine with an existing transform', () => {
  const svg = '<path transform="translate(1,1)" d="M 0 0 L 10 10"/>';
  const { svg: out } = applyTransformToPathByD(svg, 'M 0 0 L 10 10', existing => {
    assert.equal(existing, 'translate(1,1)');
    return 'rotate(90,5,5) translate(1,1)';
  });
  assert.match(out, /transform="rotate\(90,5,5\) translate\(1,1\)"/);
});

test('removeAllPathTagsByD deletes the matching tag with its leading indentation and trailing line break', () => {
  const svg = '<svg>\n    <path d="M 0 0 L 1 1"/>\n    <path d="M 9 9 L 8 8"/>\n</svg>';
  const { svg: out, matchCount } = removeAllPathTagsByD(svg, 'M 0 0 L 1 1');
  assert.equal(matchCount, 1);
  assert.equal(out, '<svg>\n    <path d="M 9 9 L 8 8"/>\n</svg>');
});

test('replacePathDByD swaps only the d attribute value, preserving other attributes', () => {
  const svg = '<path class="ann-fill" data-ann-id="ann-1" d="M 0 0 L 1 1"/>';
  const { svg: out, matchCount } = replacePathDByD(svg, 'M 0 0 L 1 1', 'M 2 2 L 3 3');
  assert.equal(matchCount, 1);
  assert.equal(out, '<path class="ann-fill" data-ann-id="ann-1" d="M 2 2 L 3 3"/>');
});

// Regression test: the old implementation embedded the (multi-KB) `d` value inside a
// `new RegExp(...)`, and V8 throws "Regular expression too large" once that literal crosses
// its internal compiled-size limit — reproduced against the real map builder on a session
// with a large traced outline path.
test('handles a very large d value without throwing (regression for the regex-size crash)', () => {
  const hugeD = 'M ' + Array.from({ length: 20000 }, (_, i) => `${i}.${i % 10} ${i}.${i % 10}`).join(' L ');
  const svg = `<svg><path class="ann-fill" d="${hugeD}"/></svg>`;
  const { svg: out, matchCount } = applyTransformToPathByD(svg, hugeD, () => 'translate(1,1)');
  assert.equal(matchCount, 1);
  assert.match(out, /transform="translate\(1,1\)"/);
  assert.ok(out.includes(`d="${hugeD}"`));
});
