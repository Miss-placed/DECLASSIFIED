/**
 * mapToSvgPreview.ts serves its browser UI as one giant HTML template literal, with the
 * entire client-side <script> block embedded as plain string content. `tsc --noEmit` only
 * validates the outer TS file — it never parses the embedded JS, so a corrupted line inside
 * the script produces zero compile errors and only surfaces as `Uncaught SyntaxError` in the
 * browser at runtime. These helpers let a test catch that class of bug directly.
 */

const SCRIPT_OPEN = '<script>';
const SCRIPT_CLOSE = '</script>';

/** Extracts the text between the first `<script>` and the following `</script>`, or null if absent. */
export function extractEmbeddedScript(source: string): string | null {
  const openIdx = source.indexOf(SCRIPT_OPEN);
  if (openIdx === -1) return null;
  const contentStart = openIdx + SCRIPT_OPEN.length;
  const closeIdx = source.indexOf(SCRIPT_CLOSE, contentStart);
  if (closeIdx === -1) return null;
  return source.slice(contentStart, closeIdx);
}

/**
 * Extracts the embedded <script> block and checks it's syntactically valid JS by compiling
 * it with `new Function(...)` — this parses the code without executing any of its top-level
 * statements (the function body only runs if called, and it never is).
 */
export function checkEmbeddedScriptSyntax(source: string): { ok: true } | { ok: false; error: string } {
  const code = extractEmbeddedScript(source);
  if (code === null) return { ok: false, error: 'No <script>...</script> block found in source' };
  try {
    // eslint-disable-next-line no-new-func
    new Function(code);
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}
