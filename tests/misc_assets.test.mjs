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
