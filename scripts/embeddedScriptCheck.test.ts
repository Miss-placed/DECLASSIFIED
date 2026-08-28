import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { extractEmbeddedScript, checkEmbeddedScriptSyntax } from './embeddedScriptCheck.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SOURCE_PATH = path.join(__dirname, 'mapToSvgPreview.ts');

test('extractEmbeddedScript finds the <script> block in a minimal template', () => {
  const src = 'const html = `<div>x</div>\n<script>\nconst a = 1;\n</script>\n</html>`;';
  const code = extractEmbeddedScript(src);
  assert.equal(code, '\nconst a = 1;\n');
});

test('extractEmbeddedScript returns null when there is no <script> block', () => {
  assert.equal(extractEmbeddedScript('no script here'), null);
});

test('checkEmbeddedScriptSyntax passes for valid JS', () => {
  const src = '`<script>\nconst a = 1;\n</script>`';
  const result = checkEmbeddedScriptSyntax(src);
  assert.equal(result.ok, true);
});

test('checkEmbeddedScriptSyntax fails for corrupted JS — this is the regression guard', () => {
  // Simulates the exact class of bug that slipped through tsc: a syntactically broken
  // line inside the string-typed <script> block, which TypeScript never parses because
  // the whole block is just a string literal from its point of view.
  const src = '`<script>\nfunction clearFillShapeFix() {\n  const x = ;\n}\n</script>`';
  const result = checkEmbeddedScriptSyntax(src);
  assert.equal(result.ok, false);
  assert.match(result.ok ? '' : result.error, /Unexpected token|SyntaxError/i);
});

test('checkEmbeddedScriptSyntax passes for the real mapToSvgPreview.ts embedded script', () => {
  const source = fs.readFileSync(SOURCE_PATH, 'utf8');
  const result = checkEmbeddedScriptSyntax(source);
  assert.equal(result.ok, true, result.ok ? undefined : result.error);
});

test('the quick-fix shape UI ids referenced by the embedded script exist in the HTML template', () => {
  const source = fs.readFileSync(SOURCE_PATH, 'utf8');
  const requiredIds = [
    'fp-fill-shape-row',
    'fp-shape-original',
    'fp-shape-rectangle',
    'fp-shape-square',
    'fp-fill-shape-hint',
  ];
  for (const id of requiredIds) {
    assert.ok(source.includes(`id="${id}"`), `missing id="${id}" in the HTML template`);
  }
});
