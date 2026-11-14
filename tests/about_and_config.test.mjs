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

test('deploy.yml uses floating ruby-version 3.2, checkout v4, and ensures imagemagick is installed for ubuntu-26.04', () => {
  const wf = fs.readFileSync(path.join(ROOT, '.github/workflows/deploy.yml'), 'utf8');
  assert.doesNotMatch(wf, /ruby-version:\s*['"]?3\.2\.2['"]?/);
  assert.match(wf, /ruby-version:\s*['"]3\.2['"]/);
  assert.match(wf, /actions\/checkout@v4/);
  assert.match(wf, /imagemagick/);
});

test('zero confidential leaks across site files', () => {
  assert.deepEqual(scanRepoForLeaks(ROOT), []);
});
