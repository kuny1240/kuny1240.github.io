# Personal Website Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refresh Kun Yang's Jekyll `al-folio` website (`kuny1240.github.io`) with compliance-safe 2026 Google MLE highlights, updated CV/News, all 14 publications, and an all-English interactive *Danganronpa* "Nonstop Debate" `Misc` page with custom-generated IP-free illustrations and real-texture glass-shatter physics.

**Architecture:** Preserve the existing Jekyll `al-folio` layout and GitHub Actions deployment pipeline (`.github/workflows/deploy.yml`) while updating YAML/Markdown/BibTeX data sources (`_config.yml`, `_pages/about.md`, `_data/cv.yml`, `_bibliography/papers.bib`, `_news/`). Implement the interactive Class Trial experience on `/misc/` via dedicated, root-relative static assets (`assets/css/dangan_misc.css`, `assets/js/dangan_misc.js`, `assets/img/misc/*.jpg`) scoped cleanly inside `_pages/misc.md` without external CDNs.

**Tech Stack:** Jekyll (`al-folio`), Liquid, SCSS/CSS3, Vanilla ES2015 JavaScript (HTML5 Canvas 2D + Web Audio API), BibTeX, Node.js (`node:test` v24) for automated verification.

**Spec:** `docs/superpowers/specs/2026-11-13-website-redesign-design.md`

## Global Constraints

- Zero confidential/internal Google leaks anywhere in repo files: never include `Gemini 3.8`, `Gemini 3.5`, `Flash-Lite`, `Gemini 4`, `Argon`, `AlphaEvolve`, `previous-generation TPU`, `4–5%`, `4-5%`, `million-scale CPU`, `PB-scale`, or `5+ production`.
- Contact email is `kuny1240@gmail.com`; Google Scholar ID is `-BzQrlgAAAAJ`; `cv_pdf` in `_pages/cv.md` remains unset/commented out.
- Exclude `docs`, `tests`, `ruby-installer.exe`, and `.superpowers` from Jekyll `_site` builds (`_config.yml` `exclude`) and `.gitignore`.
- No copyrighted OST audio files (`.mp3`/`.ogg`/`.wav`) and no ripped Nintendo/NBA official imagery; use `image-generator` illustrations stored in `assets/img/misc/`.
- Custom JavaScript must remain ES2015-compatible (no `?.` optional chaining or `??` nullish coalescing) and be listed in `jekyll-minifier.exclude` so Ruby `uglifier` never fails in CI.

## Review Focus

1. **Subpath asset resolution on `/misc/`:** Relative `assets/img/...` breaks on `/misc/` by resolving to `/misc/assets/img/...`; every image, CSS, and JS reference on `/misc/` must use root-relative `/assets/...` (or Liquid `relative_url`).
2. **Touchscreen / mobile devices without hover or reliable double-click:** Devices matching `(hover: none)` or `max-width: 768px` must keep the standard system cursor, hide the mouse-tracking hover reticle, avoid HUD text overlap, and expose a single-tap `BREAK!!` fire button plus `▲`/`▼` cylinder buttons.
3. **Immediate double-click before courtroom image finishes loading:** Firing a Truth Bullet before `preloadCourtroomImg.complete && preloadCourtroomImg.naturalWidth > 0` must render a dark crimson fallback backdrop + statement text onto the snapshot canvas instead of throwing or drawing invisible shards.
4. **BibTeX brace imbalance or duplicate keys in `papers.bib`:** Unbalanced `{`/`}` (such as the legacy `}},` bug) or duplicate keys silently drop `selected={true}` or break `jekyll-scholar`; every entry must have balanced braces and a unique key.
5. **Ruby `uglifier` syntax crash during GitHub Actions build:** `assets/js/dangan_misc.js` must contain zero ES2020 `?.` or `??` tokens in addition to being excluded in `_config.yml`.

---

### Task 1: Site Config, Hygiene, Compliance Gate & `About` + `News` Refresh

**Files:**
- Modify: `.gitignore`
- Modify: `_config.yml`
- Modify: `_sass/_base.scss`
- Modify: `_pages/about.md`
- Create: `_news/google_2025.md`
- Create: `_news/uva_grad_2024.md`
- Modify: `_news/announcement_1.md`
- Modify: `_news/asilomar.md`
- Modify: `_news/twc.md`
- Create: `tests/compliance_helper.mjs`
- Test: `tests/about_and_config.test.mjs`

**Interfaces:**
- Consumes: Spec Sections 5.1 & 5.2
- Produces:
  - `scanRepoForLeaks(rootDir: string) -> string[]` in `tests/compliance_helper.mjs` (reused by Tasks 3 and 5)
  - Theme-compatible `.about-quick-links` and `.selected-projects-grid` / `.project-focus-card` classes in `_sass/_base.scss`

- [ ] **Step 1: Write `tests/compliance_helper.mjs` and failing `tests/about_and_config.test.mjs`**

```javascript
// tests/compliance_helper.mjs
import fs from 'node:fs';
import path from 'node:path';

export const FORBIDDEN_PATTERNS = [
  /Gemini\s*3\.8/i,
  /Gemini\s*3\.5/i,
  /Flash-Lite/i,
  /Gemini\s*4/i,
  /\bArgon\b/,
  /AlphaEvolve/i,
  /previous-generation\s+TPU/i,
  /4[–-]5%/,
  /million-scale\s+CPU/i,
  /PB-scale/i,
  /5\+\s+production/i
];

const SCAN_DIRS = ['_pages', '_data', '_news', '_bibliography', 'assets'];
const TEXT_EXTS = new Set(['.md', '.yml', '.yaml', '.bib', '.html', '.scss', '.css', '.js']);

export function scanRepoForLeaks(rootDir) {
  const hits = [];
  const filesToCheck = [path.join(rootDir, '_config.yml')];
  for (const dir of SCAN_DIRS) {
    const full = path.join(rootDir, dir);
    if (!fs.existsSync(full)) continue;
    const walk = (d) => {
      for (const ent of fs.readdirSync(d, { withFileTypes: true })) {
        const p = path.join(d, ent.name);
        if (ent.isDirectory()) walk(p);
        else if (TEXT_EXTS.has(path.extname(ent.name))) filesToCheck.push(p);
      }
    };
    walk(full);
  }
  for (const file of filesToCheck) {
    if (!fs.existsSync(file)) continue;
    const text = fs.readFileSync(file, 'utf8');
    for (const rx of FORBIDDEN_PATTERNS) {
      if (rx.test(text)) hits.push(`${path.relative(rootDir, file)} matched ${rx}`);
    }
  }
  return hits;
}
```

```javascript
// tests/about_and_config.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { scanRepoForLeaks } from './compliance_helper.mjs';

const ROOT = process.cwd();

test('config sets updated email, Google Scholar ID, excludes docs/tests/exe, and minifier exclude', () => {
  const cfg = fs.readFileSync(path.join(ROOT, '_config.yml'), 'utf8');
  assert.match(cfg, /^email:\s*kuny1240@gmail\.com/m);
  assert.match(cfg, /^scholar_userid:\s*-BzQrlgAAAAJ/m);
  assert.match(cfg, /^max_width:\s*860px/m);
  for (const item of ['docs', 'tests', 'ruby-installer.exe', '.superpowers']) {
    assert.ok(cfg.includes(item), `_config.yml exclude missing ${item}`);
  }
  assert.ok(cfg.includes('dangan_misc.js'), '_config.yml jekyll-minifier.exclude missing dangan_misc.js');
});

test('gitignore ignores local installer binary and docs/superpowers scratch', () => {
  const gi = fs.readFileSync(path.join(ROOT, '.gitignore'), 'utf8');
  assert.match(gi, /ruby-installer\.exe/);
  assert.match(gi, /\.superpowers/);
});

test('about.md includes quick external links and 3 cherry-picked compliance-safe projects', () => {
  const about = fs.readFileSync(path.join(ROOT, '_pages/about.md'), 'utf8');
  assert.ok(!about.includes('invite you to visit my website'), 'stale template filler still present');
  assert.ok(about.includes('scholar.google.com/citations?user=-BzQrlgAAAAJ'));
  assert.ok(about.includes('github.com/kuny1240'));
  assert.ok(about.includes('linkedin.com/in/kunyang1240'));
  assert.ok(about.includes('Recursive Self-Improvement (RSI)'));
  assert.ok(about.includes('RL Environments for Gemini Training'));
  assert.ok(about.includes('Multi-Agent Code & Prompt Optimization'));
});

test('news includes Google 2025 and UVA graduation 2024 and fixes legacy typos', () => {
  assert.ok(fs.existsSync(path.join(ROOT, '_news/google_2025.md')));
  assert.ok(fs.existsSync(path.join(ROOT, '_news/uva_grad_2024.md')));
  const a1 = fs.readFileSync(path.join(ROOT, '_news/announcement_1.md'), 'utf8');
  const twc = fs.readFileSync(path.join(ROOT, '_news/twc.md'), 'utf8');
  assert.ok(!a1.includes('resent work'));
  assert.ok(!twc.includes('manuscipt'));
});

test('zero confidential leaks across site files', () => {
  assert.deepEqual(scanRepoForLeaks(ROOT), []);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/about_and_config.test.mjs`
Expected: FAIL (`email: ky9tc@virginia.edu` does not match `kuny1240@gmail.com`).

- [ ] **Step 3: Update `.gitignore`, `_config.yml`, `_sass/_base.scss`, `_pages/about.md`, and `_news/*`**

- In `.gitignore`: append `ruby-installer.exe` and `.superpowers/`.
- In `_config.yml`:
  - Set `email: kuny1240@gmail.com`, `scholar_userid: -BzQrlgAAAAJ`, `max_width: 860px`.
  - Update `description` and `keywords` (`Kun Yang, Google, Machine Learning Engineer, LLM inference optimization, multi-agent systems, reinforcement learning, prompt optimization, UVA`).
  - Add `docs`, `tests`, `ruby-installer.exe`, `.superpowers` under `exclude:`.
  - Update `jekyll-minifier: exclude: ['robots.txt', 'assets/js/dangan_misc.js']`.
- In `_sass/_base.scss`: append theme-variable-backed styles for `.about-quick-links` (flex pill links) and `.selected-projects-grid` / `.project-focus-card` (3-column responsive CSS grid using `var(--global-card-bg-color)`, `var(--global-divider-color)`, `var(--global-text-color)`, `var(--global-theme-color)`).
- In `_pages/about.md`: write the two-paragraph Google MLE + UVA/TAMU/Tsinghua bio, `.about-quick-links` bar (`mailto:kuny1240@gmail.com`, Google Scholar `-BzQrlgAAAAJ`, GitHub, LinkedIn, DBLP all with `target="_blank" rel="noopener noreferrer"`), and the 3 `.project-focus-card` blocks specified in Spec Section 5.2.
- Create `_news/google_2025.md` (`date: 2025-03-10`) and `_news/uva_grad_2024.md` (`date: 2024-08-01`); fix `resent` -> `recent` in `_news/announcement_1.md`, `manuscipt` -> `manuscript` in `_news/twc.md`, and grammar in `_news/asilomar.md`.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/about_and_config.test.mjs`
Expected: PASS (5/5 tests pass).

- [ ] **Step 5: Commit**

```bash
git add .gitignore _config.yml _sass/_base.scss _pages/about.md _news/ tests/compliance_helper.mjs tests/about_and_config.test.mjs
git commit -m "feat: refresh site config, compliance-safe about highlights, and news"
```

---

### Task 2: Full 14-Paper Bibliography & Venue Badges (`Publications`)

**Files:**
- Modify: `_bibliography/papers.bib`
- Modify: `_data/venues.yml`
- Test: `tests/publications.test.mjs`

**Interfaces:**
- Consumes: Spec Section 5.3 (exact list of 14 publications, BibTeX keys, authors, `selected`, `abbr`, `note`, links)
- Produces: Validated `_bibliography/papers.bib` consumed by `jekyll-scholar` on `/` and `/publications/`

- [ ] **Step 1: Write the failing `tests/publications.test.mjs`**

```javascript
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/publications.test.mjs`
Expected: FAIL (existing `papers.bib` has 11 entries, duplicate keys `yang2022convergence`/`yang2022multi`, and `braceDelta = -1` on `10529190`).

- [ ] **Step 3: Update `_bibliography/papers.bib` and `_data/venues.yml`**

- Rewrite `_bibliography/papers.bib` with all 14 entries and exact keys from Spec Section 5.3 (`shi2024efficient`, `shi2024transformers`, `yang2024offline_twc`, `bian2024accelerating`, `shi2024harnessing`, `yang2024average_asilomar`, `yang2024advancing_dyspan`, `yang2023convergence_jsac`, `yang2023offline_asilomar`, `yang2023teaching_ciss`, `yang2024teaching_jstsp`, `yang2022multi_asilomar`, `yang2022convergence_ciss`, `yang2020deep_infocom`), setting `selected={true}` on the 5 flagship papers and `bibtex_show={true}` on published papers.
- Add venue badge color definitions in `_data/venues.yml` for `NeurIPS`, `IEEE TWC`, `IEEE JSAC`, `IEEE TSP`, `TMLR`, `DySPAN`, `Asilomar`, `CISS`, `INFOCOM`, `Preprint`.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/publications.test.mjs`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add _bibliography/papers.bib _data/venues.yml tests/publications.test.mjs
git commit -m "feat: update bibliography to all 14 papers with venue badges and fixed syntax"
```

---

### Task 3: 2026 Compliance-Safe `CV` Data Sync (`CV`)

**Files:**
- Modify: `_data/cv.yml`
- Modify: `_pages/cv.md`
- Test: `tests/cv.test.mjs`

**Interfaces:**
- Consumes: Spec Section 5.4, `scanRepoForLeaks` from `tests/compliance_helper.mjs`
- Produces: Synced `_data/cv.yml` rendered by `_layouts/cv.html`

- [ ] **Step 1: Write the failing `tests/cv.test.mjs`**

```javascript
// tests/cv.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { scanRepoForLeaks } from './compliance_helper.mjs';

const ROOT = process.cwd();

test('cv.yml includes synced 2026 sections, corrected dates, and compliance-safe Google bullets', () => {
  const cv = fs.readFileSync(path.join(ROOT, '_data/cv.yml'), 'utf8');
  assert.ok(cv.includes('kuny1240@gmail.com'));
  assert.ok(cv.includes('Recursive Self-Improvement (RSI) for Inference'));
  assert.ok(cv.includes('RL Environments & Coding-Efficiency Post-Training'));
  assert.ok(cv.includes('Self-Evolving Multi-Agent Code Optimization'));
  assert.ok(cv.includes('Sr. Data Science Engineer'));
  assert.ok(cv.includes('May 2022 – Aug. 2022')); // Intel corrected year
  assert.ok(cv.includes('Aug. 2017 – Dec. 2019')); // TAMU corrected year
  assert.ok(cv.includes('Technical Skills'));
  assert.ok(cv.includes('Awards & Academic Service'));
  assert.ok(cv.includes('Best Student Paper Finalist'));
  assert.ok(!cv.includes('Academic Interests')); // legacy section replaced
});

test('cv.md does not expose an unredacted cv_pdf', () => {
  const cvPage = fs.readFileSync(path.join(ROOT, '_pages/cv.md'), 'utf8');
  assert.ok(!/^cv_pdf:\s*\S+/m.test(cvPage), 'cv_pdf must remain unset/commented');
});

test('cv.yml passes global confidentiality leak check', () => {
  assert.deepEqual(scanRepoForLeaks(ROOT), []);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/cv.test.mjs`
Expected: FAIL (`cv.yml` missing `Recursive Self-Improvement`, `Technical Skills`, and corrected `May 2022` Intel date).

- [ ] **Step 3: Update `_data/cv.yml` and `_pages/cv.md`**

- Rewrite `_data/cv.yml` using `al-folio`'s supported `map`, `time_table`, and `nested_list` entry schemas (`_includes/cv/*.html`) with the exact sections and copy from Spec Section 5.4 (`General Information`, `Experience`, `Education`, `Technical Skills`, `Awards & Academic Service`).
- Update `_pages/cv.md` description (`Curriculum Vitae — Machine Learning Engineer at Google, Ph.D. in Electrical Engineering`) while keeping `# cv_pdf:` commented out.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/cv.test.mjs`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add _data/cv.yml _pages/cv.md tests/cv.test.mjs
git commit -m "feat: sync CV page with compliance-safe 2026 experience, skills, and awards"
```

---

### Task 4: `Misc` Custom IP-Free Illustrations & Courtroom Assets

**Files:**
- Create: `assets/img/misc/trial_courtroom_bg.jpg`
- Create: `assets/img/misc/hoops_tribute.jpg`
- Create: `assets/img/misc/ogerpon_mask_homage.jpg`
- Test: `tests/misc_assets.test.mjs`

**Interfaces:**
- Consumes: Pre-generated courtroom art at `C:\Users\kuny1\.gemini\antigravity\brain\85d1c332-1d2a-430d-96c3-32f866b859b8\mystery_trial_courtroom_bg_1794560352200.jpg` + `image-generator` subagent for the 2 new illustrations (Spec Section 5.5)
- Produces:
  - `/assets/img/misc/trial_courtroom_bg.jpg`
  - `/assets/img/misc/hoops_tribute.jpg`
  - `/assets/img/misc/ogerpon_mask_homage.jpg`

- [ ] **Step 1: Write the failing `tests/misc_assets.test.mjs`**

```javascript
// tests/misc_assets.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const ASSETS = [
  'assets/img/misc/trial_courtroom_bg.jpg',
  'assets/img/misc/hoops_tribute.jpg',
  'assets/img/misc/ogerpon_mask_homage.jpg'
];

test('all three Misc IP-free JPEG illustrations exist with valid JPEG magic bytes and web-friendly sizes', () => {
  for (const rel of ASSETS) {
    const full = path.join(ROOT, rel);
    assert.ok(fs.existsSync(full), `Missing asset: ${rel}`);
    const buf = fs.readFileSync(full);
    assert.equal(buf[0], 0xff, `${rel} missing JPEG SOI 0xFF`);
    assert.equal(buf[1], 0xd8, `${rel} missing JPEG SOI 0xD8`);
    assert.ok(buf.length > 20_000, `${rel} unexpectedly tiny (${buf.length} bytes)`);
    assert.ok(buf.length < 450_000, `${rel} exceeds 450KB web budget (${buf.length} bytes)`);
  }
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/misc_assets.test.mjs`
Expected: FAIL (`Missing asset: assets/img/misc/trial_courtroom_bg.jpg`).

- [ ] **Step 3: Generate `hoops_tribute.jpg` and `ogerpon_mask_homage.jpg` via `image-generator`, inspect all 3 images, and optimize into `assets/img/misc/`**

- Dispatch `image-generator` for `hoops_tribute.jpg`: stylized dramatic anime/visual-novel basketball illustration showing two players side-by-side under arena spotlights—a towering 7'1" Asian center wearing generic red-and-black jersey `#16` executing a crisp high-post pass/block, and a poised veteran point guard wearing generic jersey `#3` orchestrating the floor; strictly NO NBA/Blazers/Clippers logos, NO real celebrity likenesses, NO text/watermarks.
- Dispatch `image-generator` for `ogerpon_mask_homage.jpg`: original vibrant anime/game-art illustration of a cheerful, whimsical woodland spirit holding/wearing an ornate hand-carved starry teal-green festival wooden mask accented with golden crystal eyes and autumn/emerald leaves under lantern light; strictly original IP-free design (not copying official Pokémon/Nintendo character anatomy or sprites), NO text/watermarks.
- Inspect generated images with `read_file` to verify quality and IP safety, then optimize all 3 images (`trial_courtroom_bg.jpg` at ~1280px width, `hoops_tribute.jpg` and `ogerpon_mask_homage.jpg` at ~960px width, JPEG quality 82) into `assets/img/misc/`.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/misc_assets.test.mjs`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add assets/img/misc/ tests/misc_assets.test.mjs
git commit -m "feat: add generated IP-free courtroom, basketball, and teal-mask illustrations"
```

---

### Task 5: All-English Danganronpa "Nonstop Debate" Interactive `Misc` Page

**Files:**
- Create: `assets/css/dangan_misc.css`
- Create: `assets/js/dangan_misc.js`
- Modify: `_pages/misc.md`
- Test: `tests/dangan_misc.test.mjs`

**Interfaces:**
- Consumes: `/assets/img/misc/*.jpg` from Task 4, approved prototype copy & interactions from `C:\Users\kuny1\.gemini\antigravity\brain\85d1c332-1d2a-430d-96c3-32f866b859b8\scratch\preview_v4_template.html` and Spec Section 5.5
- Produces:
  - `assets/js/dangan_misc.js` exposing `window.DanganMisc` in browser and `module.exports` when `typeof module !== 'undefined'` with `{ TRUTH_BULLETS, computeActiveIndex(step, total), computeShortestDiff(curIdx, targetIdx, total) }`
  - Scoped `.dangan-misc-root` layout in `assets/css/dangan_misc.css` and `_pages/misc.md`

- [ ] **Step 1: Write the failing `tests/dangan_misc.test.mjs`**

```javascript
// tests/dangan_misc.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { scanRepoForLeaks } from './compliance_helper.mjs';

const ROOT = process.cwd();
const require = createRequire(import.meta.url);

test('dangan_misc.js uses pure ES2015 syntax (no ?. or ??) and exports 6 all-English chambers with root-relative image paths', () => {
  const jsPath = path.join(ROOT, 'assets/js/dangan_misc.js');
  const src = fs.readFileSync(jsPath, 'utf8');
  assert.ok(!src.includes('?.'), 'Forbidden ES2020 optional chaining (?.) found');
  assert.ok(!src.includes('??'), 'Forbidden ES2020 nullish coalescing (??) found');

  const api = require(jsPath);
  assert.equal(api.TRUTH_BULLETS.length, 6);

  // Cyclic modulo & shortest-arc rotation math
  assert.equal(api.computeActiveIndex(-1, 6), 5);
  assert.equal(api.computeActiveIndex(6, 6), 0);
  assert.equal(api.computeShortestDiff(0, 5, 6), -1);
  assert.equal(api.computeShortestDiff(5, 0, 6), 1);

  const combinedCopy = JSON.stringify(api.TRUTH_BULLETS);
  assert.ok(combinedCopy.includes('Top 50 NA'), 'Missing Hearthstone Top 50 NA');
  assert.ok(combinedCopy.includes('Slay the Spire 2'), 'Missing Slay the Spire 2');
  assert.ok(combinedCopy.includes('Phantom Blade Zero'), 'Missing Phantom Blade Zero');
  assert.ok(combinedCopy.includes('100%'), 'Missing 100% completion');
  assert.ok(combinedCopy.includes('first double-double'), 'Missing Hansen Yang double-double');
  assert.ok(combinedCopy.includes('LA Clippers'), 'Missing CP3 Clippers note');
  assert.ok(combinedCopy.includes('play smart and play tough'), 'Missing CP3 tribute');
  assert.ok(combinedCopy.includes('Ogerpon'), 'Missing Ogerpon');
  assert.ok(combinedCopy.includes('/assets/img/misc/hoops_tribute.jpg'), 'Missing root-relative hoops image');
  assert.ok(combinedCopy.includes('/assets/img/misc/ogerpon_mask_homage.jpg'), 'Missing root-relative Ogerpon image');
  assert.ok(!/[\u4e00-\u9fff]/.test(combinedCopy), 'Misc chamber copy must be 100% English (no Chinese characters)');
});

test('dangan_misc.js guards unloaded background image during snapshot and misc.css handles mobile touch fallbacks', () => {
  const jsSrc = fs.readFileSync(path.join(ROOT, 'assets/js/dangan_misc.js'), 'utf8');
  assert.match(jsSrc, /naturalWidth\s*>\s*0/, 'Must guard preloadCourtroomImg.naturalWidth > 0 before drawImage');

  const cssSrc = fs.readFileSync(path.join(ROOT, 'assets/css/dangan_misc.css'), 'utf8');
  assert.match(cssSrc, /@media[^{]*(hover:\s*none|max-width:\s*768px)/, 'Missing mobile/touch media query');

  const miscMd = fs.readFileSync(path.join(ROOT, '_pages/misc.md'), 'utf8');
  assert.ok(!miscMd.includes('Golden State Warriors'), 'Legacy Warriors text still in misc.md');
  assert.ok(!miscMd.includes('upcoming action RPG'), 'Legacy Wukong text still in misc.md');
  assert.ok(miscMd.includes('/assets/css/dangan_misc.css'));
  assert.ok(miscMd.includes('/assets/js/dangan_misc.js'));
  assert.ok(miscMd.includes('/assets/img/misc/trial_courtroom_bg.jpg'));
});

test('entire repository passes final compliance leak scan', () => {
  assert.deepEqual(scanRepoForLeaks(ROOT), []);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/dangan_misc.test.mjs`
Expected: FAIL (`Cannot find module '.../assets/js/dangan_misc.js'`).

- [ ] **Step 3: Implement `assets/css/dangan_misc.css`, `assets/js/dangan_misc.js`, and `_pages/misc.md`**

- Create `assets/css/dangan_misc.css`: standalone scoped styles (no Tailwind needed) for `.dangan-misc-root` (widening parent container on `/misc/` up to `1040px`), 16:9 `.dangan-stage-wrap`, Dutch-angle `.courtroom-cam`, skewed top-left question banner, top-right `.timer-slash` HUD, bottom-left revolver SVG `.revolver-drum-spin` + `.kotodama-slash-bar` + `.hazard-stripes`, center `.kinetic-statement` & `.weak-spot` 3D floating typography, `.aim-reticle`, bottom-right `.speaker-parallelogram`, E-Handbook `.dossier-stage` cards/illustrations, and `@media (hover: none), (max-width: 768px)` touch ergonomics (restoring normal cursor, hiding `.aim-reticle`, scaling typography & revolver cleanly).
- Create `assets/js/dangan_misc.js` in clean ES2015:
  - Define all 6 all-English `TRUTH_BULLETS` (`Hearthstone & Spire 2`, `Phantom Blade Zero & RPGs`, `Hoops · Hansen & CP3` with `/assets/img/misc/hoops_tribute.jpg`, `Pokémon · Ogerpon` with `/assets/img/misc/ogerpon_mask_homage.jpg`, `Detective & Trial VNs`, `Full Off-Duty Archive`).
  - Implement `computeActiveIndex`, `computeShortestDiff`, SVG 6-chamber drum rendering, wheel/keyboard/button rotation, Web Audio procedural cylinder click + glass-shatter chord with mute button, `buildSnapshotCanvas` (guarding `preloadCourtroomImg.complete && preloadCourtroomImg.naturalWidth > 0` with crimson fallback gradient), 3-phase `fireTruthBullet` real-texture polygonal shard shatter animation, and E-Handbook dossier switcher.
  - Export `{ TRUTH_BULLETS, computeActiveIndex, computeShortestDiff }` when `typeof module !== 'undefined' && module.exports`, and auto-initialize on `DOMContentLoaded` when `typeof document !== 'undefined'`.
- Rewrite `_pages/misc.md` (`layout: page`, `permalink: /misc/`, `title: Misc`, `nav: true`, `nav_order: 6`) loading `{{ '/assets/css/dangan_misc.css' | relative_url }}` and `{{ '/assets/js/dangan_misc.js' | relative_url }}`, mounting the full courtroom DOM with `data-courtroom-bg="{{ '/assets/img/misc/trial_courtroom_bg.jpg' | relative_url }}"` plus a clean `<noscript>` static summary fallback.

- [ ] **Step 4: Run full test suite to verify all tasks pass**

Run: `node --test tests/*.test.mjs`
Expected: PASS (all test files and assertions pass with 0 failures).

- [ ] **Step 5: Commit**

```bash
git add assets/css/dangan_misc.css assets/js/dangan_misc.js _pages/misc.md tests/dangan_misc.test.mjs
git commit -m "feat: build all-English Danganronpa Nonstop Debate Misc page with glass shatter"
```
