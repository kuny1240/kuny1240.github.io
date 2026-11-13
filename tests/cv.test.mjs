// tests/cv.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { scanRepoForLeaks } from './compliance_helper.mjs';

const ROOT = process.cwd();

test('cv.yml includes synced 2026 sections, corrected dates, and compliance-safe Google bullets', () => {
  const cv = fs.readFileSync(path.join(ROOT, '_data/cv.yml'), 'utf8');
  assert.ok(cv.includes('href="mailto:kuny1240@gmail.com"'));
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
