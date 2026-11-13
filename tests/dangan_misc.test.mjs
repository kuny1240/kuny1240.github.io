// tests/dangan_misc.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
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

test('dossier-stage restores text selection inside revealed E-Handbook', () => {
  const cssSrc = fs.readFileSync(path.join(ROOT, 'assets/css/dangan_misc.css'), 'utf8');
  const dossierBlock = cssSrc.match(/\.dossier-stage\s*\{[^}]*\}/);
  assert.ok(dossierBlock, 'Missing .dossier-stage rule');
  assert.match(dossierBlock[0], /user-select:\s*text/, '.dossier-stage must override parent user-select: none with user-select: text');
});

test('narrow mobile breakpoint (<480px) prevents bottom HUD collision', () => {
  const cssSrc = fs.readFileSync(path.join(ROOT, 'assets/css/dangan_misc.css'), 'utf8');
  const narrowMedia = cssSrc.match(/@media\s*\(\s*max-width:\s*480px\s*\)\s*\{[\s\S]*?\n\}/);
  assert.ok(narrowMedia, 'Missing @media (max-width: 480px) rule for narrow phones');
  assert.match(narrowMedia[0], /\.speaker-parallelogram\s*\{[^}]*display:\s*none/, 'Must hide decorative .speaker-parallelogram on <=480px screens to prevent HUD collision');
});

test('dangan_misc.css includes -webkit-backdrop-filter prefixes for Safari compatibility', () => {
  const cssSrc = fs.readFileSync(path.join(ROOT, 'assets/css/dangan_misc.css'), 'utf8');
  assert.match(cssSrc, /-webkit-backdrop-filter:\s*blur\(4px\)/);
  assert.match(cssSrc, /-webkit-backdrop-filter:\s*blur\(8px\)/);
});

test('dangan_misc.js DOM lifecycle wires chamber switching, reduced-motion break, and reload transitions', () => {
  const jsSrc = fs.readFileSync(path.join(ROOT, 'assets/js/dangan_misc.js'), 'utf8');

  function makeEl(id, attrs = {}) {
    const listeners = {};
    const classes = new Set((attrs.className || '').split(/\s+/).filter(Boolean));
    return {
      id,
      tagName: 'DIV',
      style: {},
      textContent: '',
      innerHTML: '',
      parentElement: null,
      parentNode: null,
      classList: {
        add: (c) => classes.add(c),
        remove: (c) => classes.delete(c),
        contains: (c) => classes.has(c)
      },
      getAttribute: (k) => (k in attrs ? attrs[k] : null),
      addEventListener: (type, fn) => {
        listeners[type] = listeners[type] || [];
        listeners[type].push(fn);
      },
      dispatch: (type, evt = {}) => {
        for (const fn of listeners[type] || []) {
          fn({ stopPropagation() {}, preventDefault() {}, target: null, ...evt });
        }
      },
      getBoundingClientRect: () => ({ left: 0, top: 0, width: 960, height: 560 })
    };
  }

  const containerEl = makeEl('main-container', { className: 'container' });
  const elements = {
    'dangan-misc-root': makeEl('dangan-misc-root', {
      'data-baseurl': '',
      'data-courtroom-bg': '/assets/img/misc/trial_courtroom_bg.jpg'
    }),
    'dangan-stage-wrap': makeEl('dangan-stage-wrap'),
    'shatter-canvas': makeEl('shatter-canvas', { className: 'dangan-hidden' }),
    'revolver-stage': makeEl('revolver-stage'),
    'real-content-stage': makeEl('real-content-stage', { className: 'dangan-hidden' }),
    'courtroom-bg-img': makeEl('courtroom-bg-img'),
    'courtroom-bg-layer': makeEl('courtroom-bg-layer'),
    'dossier-bg-img': makeEl('dossier-bg-img'),
    'svg-revolver-drum': makeEl('svg-revolver-drum'),
    'svg-revolver-bores': makeEl('svg-revolver-bores'),
    'kotodama-bullet-name': makeEl('kotodama-bullet-name'),
    'speaker-plate-text': makeEl('speaker-plate-text'),
    'target-statement': makeEl('target-statement'),
    'chamberPrevBtn': makeEl('chamberPrevBtn'),
    'chamberNextBtn': makeEl('chamberNextBtn'),
    'manualBreakBtn': makeEl('manualBreakBtn'),
    'sfxToggleBtn': makeEl('sfxToggleBtn'),
    'showAllArchiveBtn': makeEl('showAllArchiveBtn'),
    'reloadCylinderBtn': makeEl('reloadCylinderBtn'),
    'topReturnTrialBtn': makeEl('topReturnTrialBtn', { className: 'dangan-hidden' }),
    'revealed-mini-chambers': makeEl('revealed-mini-chambers'),
    'real-content-body': makeEl('real-content-body'),
    'trial-timer': makeEl('trial-timer'),
    'aim-reticle': makeEl('aim-reticle')
  };
  elements['dangan-misc-root'].parentElement = containerEl;

  const mockDoc = {
    readyState: 'complete',
    hidden: false,
    body: makeEl('body'),
    activeElement: { tagName: 'BODY' },
    getElementById: (id) => elements[id] || null,
    createElement: (tag) => makeEl(tag),
    addEventListener: () => {}
  };

  const mockWin = {
    document: mockDoc,
    matchMedia: () => ({ matches: true }), // prefers-reduced-motion: true for deterministic synchronous reveal
    addEventListener: () => {},
    setInterval: () => 1,
    requestAnimationFrame: () => 1
  };

  vm.runInNewContext(jsSrc, {
    window: mockWin,
    document: mockDoc,
    Image: function () { this.complete = false; this.naturalWidth = 0; },
    Date,
    Math,
    parseInt,
    String
  });

  assert.ok(containerEl.classList.contains('dangan-misc-wide-container'));
  assert.equal(elements['kotodama-bullet-name'].textContent, 'Hearthstone & Spire 2');

  // Switch to next chamber (#02 Phantom Blade Zero)
  elements['chamberNextBtn'].dispatch('click');
  assert.equal(elements['kotodama-bullet-name'].textContent, 'Phantom Blade Zero & RPGs');

  // Trigger BREAK!! -> reveals E-Handbook stage with Phantom Blade Zero content
  elements['manualBreakBtn'].dispatch('click');
  assert.equal(elements['revolver-stage'].classList.contains('dangan-hidden'), true);
  assert.equal(elements['real-content-stage'].classList.contains('dangan-hidden'), false);
  assert.ok(elements['real-content-body'].innerHTML.includes('Phantom Blade Zero'));

  // Reload cylinder -> returns to courtroom stage
  elements['reloadCylinderBtn'].dispatch('click');
  assert.equal(elements['revolver-stage'].classList.contains('dangan-hidden'), false);
  assert.equal(elements['real-content-stage'].classList.contains('dangan-hidden'), true);
});

test('entire repository passes final compliance leak scan', () => {
  assert.deepEqual(scanRepoForLeaks(ROOT), []);
});
