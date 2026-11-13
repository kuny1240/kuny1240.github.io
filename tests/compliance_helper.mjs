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
