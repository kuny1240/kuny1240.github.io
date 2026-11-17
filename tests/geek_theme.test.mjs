// tests/geek_theme.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { scanRepoForLeaks } from './compliance_helper.mjs';

const ROOT = process.cwd();

test('config excludes geek_shell.js from jekyll-minifier and theme.js defaults to dark Obsidian mode', () => {
  const cfg = fs.readFileSync(path.join(ROOT, '_config.yml'), 'utf8');
  assert.ok(cfg.includes('assets/js/geek_shell.js'), '_config.yml jekyll-minifier.exclude must include assets/js/geek_shell.js');

  const themeJs = fs.readFileSync(path.join(ROOT, 'assets/js/theme.js'), 'utf8');
  assert.match(themeJs, /theme\s*=\s*["']dark["']/, 'theme.js should default unset theme to dark');
});

test('geek_theme.css provides Obsidian dark & Blueprint light tokens, spotlight cards, terminal, cmdk, and Safari prefixes', () => {
  const cssPath = path.join(ROOT, 'assets/css/geek_theme.css');
  assert.ok(fs.existsSync(cssPath), 'assets/css/geek_theme.css must exist');
  const css = fs.readFileSync(cssPath, 'utf8');

  assert.match(css, /html\[data-theme=['"]dark['"]\]/);
  assert.match(css, /html\[data-theme=['"]light['"]\]/);
  assert.match(css, /\.spotlight-card/);
  assert.match(css, /\.terminal-shell/);
  assert.match(css, /\.cmdk-backdrop/);

  const backdropMatches = css.match(/(?:^|[;\s{])backdrop-filter\s*:/gm) || [];
  const webkitMatches = css.match(/-webkit-backdrop-filter\s*:/g) || [];
  assert.ok(backdropMatches.length > 0, 'geek_theme.css should use backdrop-filter');
  assert.equal(webkitMatches.length, backdropMatches.length, 'every backdrop-filter must have a matching -webkit-backdrop-filter');
});

test('layouts and pages wire geek_theme.css, geek_shell.js, portrait reticle, SVG micro-telemetry, shell, and pub filters', () => {
  const head = fs.readFileSync(path.join(ROOT, '_includes/head.html'), 'utf8');
  assert.ok(head.includes('geek_theme.css'), 'head.html must link geek_theme.css');
  assert.ok(head.includes('JetBrains+Mono'), 'head.html must load JetBrains Mono font');

  const def = fs.readFileSync(path.join(ROOT, '_layouts/default.html'), 'utf8');
  assert.ok(def.includes('ambient-backdrop'), 'default.html must include ambient-backdrop');
  assert.ok(def.includes('geek_shell.html'), 'default.html must include geek_shell.html');

  const header = fs.readFileSync(path.join(ROOT, '_includes/header.html'), 'utf8');
  assert.ok(header.includes('openCmdkBtn'), 'header.html must include Cmd+K button');
  assert.ok(header.includes('~/'), 'header.html must include geek ~/ brand prompt');

  const aboutLayout = fs.readFileSync(path.join(ROOT, '_layouts/about.html'), 'utf8');
  assert.ok(aboutLayout.includes('reticle-corner'), 'about.html must include engineered portrait reticle corners');
  assert.ok(aboutLayout.includes('livePstClock'), 'about.html must include live PST telemetry strip');

  const aboutPage = fs.readFileSync(path.join(ROOT, '_pages/about.md'), 'utf8');
  assert.ok(aboutPage.includes('micro-viz'), 'about.md must include live SVG micro-telemetry visualizers');
  assert.ok(aboutPage.includes('termOutput'), 'about.md must include interactive systems terminal');

  const pubsPage = fs.readFileSync(path.join(ROOT, '_pages/publications.md'), 'utf8');
  assert.ok(pubsPage.includes('pubFilterPills'), 'publications.md must include instant category filter pills');
  assert.ok(pubsPage.includes('pubSearchInput'), 'publications.md must include live grep search input');
});

test('geek_shell.js uses pure ES2015 syntax and drives terminal, cmdk palette, and publication filtering in mock DOM', () => {
  const jsPath = path.join(ROOT, 'assets/js/geek_shell.js');
  assert.ok(fs.existsSync(jsPath), 'assets/js/geek_shell.js must exist');
  const code = fs.readFileSync(jsPath, 'utf8');

  assert.doesNotMatch(code, /\?\./, 'must not contain optional chaining (?.)');
  assert.doesNotMatch(code, /\?\?/, 'must not contain nullish coalescing (??)');
  assert.doesNotThrow(() => new Function(code));

  // Build lightweight mock DOM to verify terminal, cmdk, and publication filtering
  const elements = {};
  function makeClassList(initial = []) {
    const set = new Set(initial);
    return {
      add: (...cls) => cls.forEach((c) => set.add(c)),
      remove: (...cls) => cls.forEach((c) => set.delete(c)),
      contains: (c) => set.has(c),
      toggle: (c, force) => {
        if (force === undefined) {
          if (set.has(c)) { set.delete(c); return false; }
          set.add(c); return true;
        }
        if (force) set.add(c); else set.delete(c);
        return force;
      }
    };
  }

  function makeEl(id, extra = {}) {
    const listeners = {};
    const children = [];
    const el = {
      id,
      tagName: extra.tagName || 'DIV',
      value: '',
      textContent: extra.textContent || '',
      innerHTML: '',
      style: { setProperty: () => {} },
      dataset: {},
      classList: makeClassList(extra.classes || []),
      children,
      appendChild: (child) => { children.push(child); return child; },
      addEventListener: (ev, fn) => { (listeners[ev] = listeners[ev] || []).push(fn); },
      trigger: (ev, eventObj = {}) => {
        (listeners[ev] || []).forEach((fn) => fn.call(el, Object.assign({ preventDefault: () => {}, target: el }, eventObj)));
      },
      focus: () => {},
      scrollIntoView: () => {},
      getAttribute: (k) => extra.attrs ? extra.attrs[k] : null,
      querySelectorAll: () => []
    };
    if (id) elements[id] = el;
    return el;
  }

  makeEl('livePstClock');
  makeEl('decodeSubtitle', { textContent: 'Machine Learning Engineer at Google' });
  makeEl('termOutput');
  makeEl('termInput', { tagName: 'INPUT' });
  makeEl('termForm', { tagName: 'FORM' });
  makeEl('openCmdkBtn', { tagName: 'BUTTON' });
  makeEl('cmdkBackdrop');
  makeEl('cmdkInput', { tagName: 'INPUT' });
  makeEl('cmdkList');
  makeEl('geekToast');
  makeEl('pubFilterPills');
  makeEl('pubSearchInput', { tagName: 'INPUT' });

  const bibItem1 = makeEl('', {
    textContent: 'NeurIPS Efficient Prompt Optimization 2024',
    attrs: { 'data-selected': 'true', 'data-abbr': 'NeurIPS' }
  });
  const bibItem2 = makeEl('', {
    textContent: 'INFOCOM Deep Reinforcement Learning Wireless 2020',
    attrs: { 'data-selected': '', 'data-abbr': 'INFOCOM' }
  });

  const docListeners = {};
  const sandbox = {
    window: {
      location: { href: '/', pathname: '/' },
      matchMedia: () => ({ matches: true }),
      addEventListener: () => {},
      open: () => {},
      GEEK_BASEURL: ''
    },
    document: {
      readyState: 'complete',
      activeElement: { tagName: 'BODY' },
      documentElement: {
        getAttribute: () => 'dark',
        setAttribute: () => {}
      },
      getElementById: (id) => elements[id] || null,
      createElement: (tag) => makeEl('', { tagName: tag.toUpperCase() }),
      querySelector: () => null,
      querySelectorAll: (sel) => {
        if (sel === '.publications ol.bibliography > li') return [bibItem1, bibItem2];
        return [];
      },
      addEventListener: (ev, fn) => { (docListeners[ev] = docListeners[ev] || []).push(fn); }
    },
    navigator: { clipboard: { writeText: () => Promise.resolve() } },
    localStorage: { getItem: () => 'dark', setItem: () => {} },
    setTimeout: (fn) => { fn(); return 1; },
    clearTimeout: () => {},
    setInterval: () => 1,
    clearInterval: () => {},
    Date
  };

  vm.runInNewContext(code, sandbox);

  // 1. Bootstraps terminal with neofetch output
  assert.ok(elements.termOutput.children.length >= 2, 'terminal should boot with initial neofetch output');

  // 2. Submitting 'stack' appends stack details; 'clear' empties output
  elements.termInput.value = 'stack';
  elements.termForm.trigger('submit');
  const prevCount = elements.termOutput.children.length;
  assert.ok(prevCount >= 4, 'stack command should append output');

  elements.termInput.value = 'clear';
  elements.termForm.trigger('submit');
  assert.equal(elements.termOutput.innerHTML, '', 'clear command should clear terminal output');

  // 3. Cmd+K opens and Escape closes modal
  elements.openCmdkBtn.trigger('click');
  assert.ok(elements.cmdkBackdrop.classList.contains('open'), 'clicking openCmdkBtn should open palette');
  (docListeners.keydown || []).forEach((fn) => fn({ key: 'Escape', metaKey: false, ctrlKey: false, preventDefault: () => {} }));
  assert.ok(!elements.cmdkBackdrop.classList.contains('open'), 'Escape should close palette');

  // 4. Live grep search filters bibliography items
  elements.pubSearchInput.value = 'prompt optimization';
  elements.pubSearchInput.trigger('input');
  assert.ok(!bibItem1.classList.contains('geek-pub-hidden'), 'matching paper remains visible');
  assert.ok(bibItem2.classList.contains('geek-pub-hidden'), 'non-matching paper is hidden');
});

test('repository remains 100% free of confidential terms after Geek upgrade', () => {
  assert.deepEqual(scanRepoForLeaks(ROOT), []);
});
