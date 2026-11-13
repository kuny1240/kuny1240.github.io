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
