// tests/publications.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();

function parseBibEntries(bibContent) {
  const body = bibContent.replace(/^---[\s\S]*?---/, '');
  const entryStarts = [...body.matchAll(/@(?!string\b)(\w+)\s*\{\s*([^,\s]+)\s*,/gi)];
  return entryStarts.map((m, idx) => {
    const start = m.index;
    const end = idx + 1 < entryStarts.length ? entryStarts[idx + 1].index : body.length;
    const raw = body.slice(start, end).trim();
    let depth = 0;
    for (const ch of raw) {
      if (ch === '{') depth++;
      else if (ch === '}') depth--;
    }
    return { type: m[1].toLowerCase(), key: m[2], raw, braceDelta: depth };
  });
}

test('papers.bib contains all 14 unique entries with balanced braces and 5 selected papers', () => {
  const bib = fs.readFileSync(path.join(ROOT, '_bibliography/papers.bib'), 'utf8');
  const entries = parseBibEntries(bib);
  assert.equal(entries.length, 14, `Expected 14 entries, got ${entries.length}`);

  const keys = entries.map((e) => e.key);
  assert.equal(new Set(keys).size, 14, 'Duplicate BibTeX keys found');

  for (const e of entries) {
    assert.equal(e.braceDelta, 0, `Unbalanced braces in ${e.key} (delta=${e.braceDelta})`);
    assert.match(e.raw, /\btitle\s*=/i, `Missing title in ${e.key}`);
    assert.match(e.raw, /\bauthor\s*=/i, `Missing author in ${e.key}`);
    assert.match(e.raw, /\byear\s*=/i, `Missing year in ${e.key}`);
    assert.match(e.raw, /\babbr\s*=/i, `Missing abbr badge in ${e.key}`);
  }

  const selected = entries.filter((e) => /selected\s*=\s*\{?true\}?/i.test(e.raw));
  assert.equal(selected.length, 5, `Expected 5 selected papers, got ${selected.length}`);
  assert.ok(bib.includes('DySPAN'), 'Missing IEEE DySPAN 2024 update');
  assert.ok(bib.includes('Best Student Paper Finalist'), 'Missing Asilomar 2024 award note');
  assert.ok(!bib.includes('et al.'), 'BibTeX author lists must not contain literal et al.');
});
