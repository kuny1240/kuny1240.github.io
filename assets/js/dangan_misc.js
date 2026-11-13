/* Nonstop Debate (Class Trial) Interactive Misc Controller — Pure ES2015 */
(function () {
  'use strict';

  var TRUTH_BULLETS = [
    {
      code: '01',
      kotodamaTitle: 'Hearthstone & Spire 2',
      speakerTag: 'CARD SHARK · 01/06',
      icon: '🃏',
      statementLines: [
        'Top 50 NA in Underground Arena,',
        'and climbing Slay the Spire 2 co-op!'
      ],
      statementHtml:
        'Top 50 NA in Underground Arena,<br>and climbing <span class="weak-spot">Slay the Spire 2 co-op!</span>',
      realTitle: 'Card & Deck-Building Games',
      realSubtitle: 'Hearthstone (Top 50 NA Underground Arena) & Slay the Spire 2',
      realBodyHtml:
        '<div class="dossier-grid-2">' +
          '<div class="dossier-card">' +
            '<div class="dossier-card-header">' +
              '<h3 class="dossier-card-title">🔥 Hearthstone</h3>' +
              '<span class="dossier-badge dossier-badge-amber">Top 50 NA Arena</span>' +
            '</div>' +
            '<p>Dedicated <strong>Arena</strong> specialist! I am a perennial <strong>Top 100 player on the Americas (NA) Underground Arena leaderboard</strong>, and recently broke into the <strong>Top 50 NA</strong>. Drafting synergies on the fly and squeezing out every last bit of tempo is where Hearthstone shines brightest.</p>' +
          '</div>' +
          '<div class="dossier-card">' +
            '<div class="dossier-card-header">' +
              '<h3 class="dossier-card-title">🗡️ Slay the Spire 2</h3>' +
              '<span class="dossier-badge">Co-op Climbing</span>' +
            '</div>' +
            '<p>After clearing every character and high Ascension runs in the original, <strong>Slay the Spire 2</strong> is finally here—currently having a blast theorycrafting decks and climbing the Spire in co-op with friends!</p>' +
          '</div>' +
        '</div>'
    },
    {
      code: '02',
      kotodamaTitle: 'Phantom Blade Zero & RPGs',
      speakerTag: 'BLADE MASTER · 02/06',
      icon: '⚔️',
      statementLines: [
        'Lightning parries and dark wuxia steel—',
        'just 100% completed Phantom Blade Zero!'
      ],
      statementHtml:
        'Lightning parries and dark wuxia steel—<br>just <span class="weak-spot">100% completed Phantom Blade Zero!</span>',
      realTitle: 'Action & Large-Scale RPGs',
      realSubtitle: 'Phantom Blade Zero (100% Completed!) · Black Myth: Wukong · Baldur\'s Gate 3',
      realBodyHtml:
        '<div class="dossier-stack">' +
          '<div class="dossier-card dossier-card-gold">' +
            '<div class="dossier-card-header">' +
              '<h3 class="dossier-card-title">⚔️ Phantom Blade Zero</h3>' +
              '<span class="dossier-badge dossier-badge-gold">🏆 100% COMPLETED</span>' +
            '</div>' +
            '<p>Freshly achieved <strong>100% completion</strong>! The razor-sharp kungfupunk blade choreography, relentless parries, and dark wuxia atmosphere made every duel unforgettable from start to platinum finish.</p>' +
          '</div>' +
          '<div class="dossier-grid-2">' +
            '<div class="dossier-card">' +
              '<div class="dossier-card-header">' +
                '<h3 class="dossier-card-title">🐒 Black Myth: Wukong</h3>' +
                '<span class="dossier-badge">Action RPG</span>' +
              '</div>' +
              '<p>Spectacular boss encounters and classic Journey to the West mythology brought to life with fluid staff combat and breathtaking art direction.</p>' +
            '</div>' +
            '<div class="dossier-card">' +
              '<div class="dossier-card-header">' +
                '<h3 class="dossier-card-title">🎲 Baldur\'s Gate 3</h3>' +
                '<span class="dossier-badge">CRPG</span>' +
              '</div>' +
              '<p>Larian\'s modern CRPG masterpiece—unmatched tabletop freedom, tactical depth, and unforgettable companion storytelling.</p>' +
            '</div>' +
          '</div>' +
        '</div>'
    },
    {
      code: '03',
      kotodamaTitle: 'Hoops · Hansen & CP3',
      speakerTag: 'COURTSIDE · 03/06',
      icon: '🏀',
      imagePath: '/assets/img/misc/hoops_tribute.jpg',
      statementLines: [
        'First NBA double-double for Hansen,',
        'and eternal respect for Point God CP3!'
      ],
      statementHtml:
        'First NBA double-double for Hansen,<br>and eternal respect <span class="weak-spot">for Point God CP3!</span>',
      realTitle: 'Favorite Basketball Players',
      realSubtitle: 'Hansen Yang (#16) & Chris Paul (#3)',
      realBodyHtml:
        '<div class="dossier-stack">' +
          '<div class="dossier-art-frame">' +
            '<img src="__BASEURL__/assets/img/misc/hoops_tribute.jpg" alt="Stylized basketball tribute illustration of #16 center and #3 point guard" loading="lazy" />' +
            '<div class="dossier-art-caption">Original stylized court illustration — #16 High-Post Big &amp; #3 Floor General</div>' +
          '</div>' +
          '<div class="dossier-grid-2">' +
            '<div class="dossier-card">' +
              '<div class="dossier-card-header">' +
                '<h3 class="dossier-card-title">🏀 Hansen Yang · #16</h3>' +
                '<span class="dossier-badge">First Double-Double!</span>' +
              '</div>' +
              '<p>My big buddy just notched his <strong>first double-double in his NBA career</strong>! Congrats! Thrilled to watch the 7-foot-1 center showcase his rim protection, footwork, and high-post passing vision on the NBA stage.</p>' +
            '</div>' +
            '<div class="dossier-card">' +
              '<div class="dossier-card-header">' +
                '<h3 class="dossier-card-title">🏀 Chris Paul · #3</h3>' +
                '<span class="dossier-badge dossier-badge-amber">Point God</span>' +
              '</div>' +
              '<p>Did not expect the sudden end of his career to come so abruptly and disrespectfully from the <strong>LA Clippers</strong>—supporting him all the way, and thank you for guiding me to <strong>play smart and play tough</strong> in my life.</p>' +
            '</div>' +
          '</div>' +
        '</div>'
    },
    {
      code: '04',
      kotodamaTitle: 'Pokémon · Ogerpon',
      speakerTag: 'KITAKAMI TRAINER · 04/06',
      icon: '🌿',
      imagePath: '/assets/img/misc/ogerpon_mask_homage.jpg',
      statementLines: [
        'A longtime Pokémon fan—lately',
        'completely charmed by Ogerpon!'
      ],
      statementHtml:
        'A longtime Pokémon fan—lately<br>completely charmed by <span class="weak-spot">Ogerpon!</span>',
      realTitle: 'Pokémon · Favorite Partner',
      realSubtitle: 'Ogerpon — The Teal Mask',
      realBodyHtml:
        '<div class="dossier-stack">' +
          '<div class="dossier-art-frame">' +
            '<img src="__BASEURL__/assets/img/misc/ogerpon_mask_homage.jpg" alt="Original starry teal wooden festival mask woodland spirit illustration" loading="lazy" />' +
            '<div class="dossier-art-caption">Original starry teal festival mask homage illustration</div>' +
          '</div>' +
          '<div class="dossier-card dossier-card-teal">' +
            '<div class="dossier-card-header">' +
              '<h3 class="dossier-card-title">🌿 Pokémon — Ogerpon</h3>' +
              '<span class="dossier-badge dossier-badge-teal">Teal · Hearthflame · Wellspring · Cornerstone</span>' +
            '</div>' +
            '<p>I have loved <strong>Pokémon</strong> for years, and my recent favorite by far is <strong>Ogerpon</strong>! Between her heartwarming story in Kitakami, her expressive animations behind the starry Teal Mask, and the tactical fun of switching masks and Tera forms with Ivy Cudgel, she is an instant classic.</p>' +
          '</div>' +
        '</div>'
    },
    {
      code: '05',
      kotodamaTitle: 'Detective & Trial VNs',
      speakerTag: 'CLASS TRIAL · 05/06',
      icon: '🔫',
      statementLines: [
        'Every testimony hides a contradiction—',
        'fire a Truth Bullet to expose it!'
      ],
      statementHtml:
        'Every testimony hides a contradiction—<br>fire a <span class="weak-spot">Truth Bullet to expose it!</span>',
      realTitle: 'Detective & Mystery Visual Novels',
      realSubtitle: 'Danganronpa & Ace Attorney',
      realBodyHtml:
        '<div class="dossier-grid-2">' +
          '<div class="dossier-card">' +
            '<div class="dossier-card-header">' +
              '<h3 class="dossier-card-title">🔫 Danganronpa Series</h3>' +
              '<span class="dossier-badge">No, That\'s Wrong!</span>' +
            '</div>' +
            '<p>Cleared every title in the <strong>Danganronpa</strong> series—whose high-energy Class Trials, Kotodama revolver cylinder, and glass-shattering refutations directly inspired the interactive design of this page!</p>' +
          '</div>' +
          '<div class="dossier-card">' +
            '<div class="dossier-card-header">' +
              '<h3 class="dossier-card-title">⚖️ Ace Attorney Series</h3>' +
              '<span class="dossier-badge dossier-badge-amber">Objection!</span>' +
            '</div>' +
            '<p>Played through the entire <strong>Ace Attorney</strong> saga. Uncovering subtle logical contradictions under pressure and pulling off last-second courtroom turnabouts never gets old.</p>' +
          '</div>' +
        '</div>'
    },
    {
      code: '06',
      kotodamaTitle: 'Full Off-Duty Archive',
      speakerTag: 'COMPLETE FILE · 06/06',
      icon: '📂',
      statementLines: [
        'Want the complete off-duty file at once?',
        'Shatter the entire courtroom archive!'
      ],
      statementHtml:
        'Want the complete off-duty file at once?<br>Shatter the <span class="weak-spot">entire courtroom archive!</span>',
      isAllArchive: true
    }
  ];

  function computeActiveIndex(step, total) {
    return ((step % total) + total) % total;
  }

  function computeShortestDiff(curIdx, targetIdx, total) {
    var diff = targetIdx - curIdx;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  }

  var exportedApi = {
    TRUTH_BULLETS: TRUTH_BULLETS,
    computeActiveIndex: computeActiveIndex,
    computeShortestDiff: computeShortestDiff
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exportedApi;
  }

  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  function initDanganMisc() {
    var rootEl = document.getElementById('dangan-misc-root');
    if (!rootEl) return;

    // Widen parent Bootstrap .container even on browsers without :has()
    var parentContainer = rootEl.parentElement;
    while (parentContainer && parentContainer !== document.body) {
      if (parentContainer.classList && parentContainer.classList.contains('container')) {
        parentContainer.classList.add('dangan-misc-wide-container');
        break;
      }
      parentContainer = parentContainer.parentElement;
    }

    var siteBaseUrl = rootEl.getAttribute('data-baseurl') || '';
    var courtroomBgUrl = rootEl.getAttribute('data-courtroom-bg') || (siteBaseUrl + '/assets/img/misc/trial_courtroom_bg.jpg');

    var chamberStep = 0;
    var isShattering = false;
    var inRealView = false;
    var sfxEnabled = true;
    var audioCtx = null;

    var preloadCourtroomImg = new Image();
    preloadCourtroomImg.src = courtroomBgUrl;

    var courtroomImgEl = document.getElementById('courtroom-bg-img');
    var dossierImgEl = document.getElementById('dossier-bg-img');
    if (courtroomImgEl) courtroomImgEl.src = courtroomBgUrl;
    if (dossierImgEl) dossierImgEl.src = courtroomBgUrl;

    function withBaseUrl(html) {
      return String(html || '').replace(/__BASEURL__/g, siteBaseUrl);
    }

    function ensureAudio() {
      if (!sfxEnabled) return null;
      if (!audioCtx) {
        var AC = window.AudioContext || window.webkitAudioContext;
        if (AC) {
          try {
            audioCtx = new AC();
          } catch (err) {
            audioCtx = null;
          }
        }
      }
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      return audioCtx;
    }

    function playCylinderClickSfx() {
      var ctx = ensureAudio();
      if (!ctx) return;
      try {
        var osc = ctx.createOscillator();
        var gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(520, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.045);
        gain.gain.setValueAtTime(0.11, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.045);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
      } catch (err) {
        // Ignore audio errors when autoplay is restricted
      }
    }

    function playGlassBreakSfx() {
      var ctx = ensureAudio();
      if (!ctx) return;
      try {
        var now = ctx.currentTime;
        var bufferSize = Math.floor(ctx.sampleRate * 0.35);
        var noiseBuf = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        var data = noiseBuf.getChannelData(0);
        var i;
        for (i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.09));
        }
        var noise = ctx.createBufferSource();
        noise.buffer = noiseBuf;
        var filter = ctx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(1800, now);
        var nGain = ctx.createGain();
        nGain.gain.setValueAtTime(0.2, now);
        noise.connect(filter);
        filter.connect(nGain);
        nGain.connect(ctx.destination);
        noise.start(now + 0.11);

        var freqs = [1320, 1980, 2640];
        for (i = 0; i < freqs.length; i++) {
          var o = ctx.createOscillator();
          var g = ctx.createGain();
          o.type = 'sine';
          o.frequency.setValueAtTime(freqs[i], now + 0.12 + i * 0.03);
          g.gain.setValueAtTime(0.055, now + 0.12 + i * 0.03);
          g.gain.exponentialRampToValueAtTime(0.001, now + 0.48);
          o.connect(g);
          g.connect(ctx.destination);
          o.start(now + 0.12 + i * 0.03);
          o.stop(now + 0.5);
        }
      } catch (err) {
        // Ignore audio errors
      }
    }

    function activeBulletIndex() {
      return computeActiveIndex(chamberStep, TRUTH_BULLETS.length);
    }

    function renderSvgRevolver() {
      var n = TRUTH_BULLETS.length;
      var activeIdx = activeBulletIndex();
      var targetDeg = -30;
      var drumRot = targetDeg - chamberStep * (360 / n);

      var drumEl = document.getElementById('svg-revolver-drum');
      if (drumEl) {
        drumEl.style.transform = 'rotate(' + drumRot + 'deg)';
      }

      var boresGroup = document.getElementById('svg-revolver-bores');
      if (boresGroup) {
        var html = '';
        for (var i = 0; i < n; i++) {
          var deg = i * (360 / n);
          var rad = (deg * Math.PI) / 180;
          var cx = (110 + Math.cos(rad) * 54).toFixed(1);
          var cy = (110 + Math.sin(rad) * 54).toFixed(1);
          var isCurrent = i === activeIdx;
          html +=
            '<g data-bore-idx="' + i + '" class="revolver-bore-group">' +
              '<circle cx="' + cx + '" cy="' + cy + '" r="19" ' +
                'fill="' + (isCurrent ? 'url(#activeBulletGlow)' : '#18181b') + '" ' +
                'stroke="' + (isCurrent ? '#ffffff' : '#f87171') + '" ' +
                'stroke-width="' + (isCurrent ? '2.5' : '1.4') + '" />' +
              '<circle cx="' + cx + '" cy="' + cy + '" r="8" ' +
                'fill="' + (isCurrent ? '#fef9c3' : '#7f1d1d') + '" ' +
                'stroke="rgba(255,255,255,0.6)" stroke-width="1" />' +
            '</g>';
        }
        boresGroup.innerHTML = html;
      }

      var cur = TRUTH_BULLETS[activeIdx];
      var nameEl = document.getElementById('kotodama-bullet-name');
      var plateEl = document.getElementById('speaker-plate-text');
      var stmtEl = document.getElementById('target-statement');
      if (nameEl) nameEl.textContent = cur.kotodamaTitle;
      if (plateEl) plateEl.textContent = cur.speakerTag;
      if (stmtEl) stmtEl.innerHTML = cur.statementHtml;
    }

    function rotateChamber(delta) {
      if (isShattering) return;
      chamberStep += delta;
      playCylinderClickSfx();
      renderSvgRevolver();
      if (inRealView) renderMiniChambers();
    }

    function jumpToBullet(targetIdx) {
      if (isShattering) return;
      var cur = activeBulletIndex();
      var diff = computeShortestDiff(cur, targetIdx, TRUTH_BULLETS.length);
      if (diff !== 0) playCylinderClickSfx();
      chamberStep += diff;
      renderSvgRevolver();
    }

    function buildSnapshotCanvas(W, H) {
      var snap = document.createElement('canvas');
      snap.width = W;
      snap.height = H;
      var sctx = snap.getContext('2d');

      sctx.fillStyle = '#09090f';
      sctx.fillRect(0, 0, W, H);

      if (preloadCourtroomImg && preloadCourtroomImg.complete && preloadCourtroomImg.naturalWidth > 0) {
        sctx.save();
        sctx.translate(W / 2, H / 2);
        sctx.rotate((-8.5 * Math.PI) / 180);
        sctx.scale(1.24, 1.24);
        var imgRatio = preloadCourtroomImg.naturalWidth / preloadCourtroomImg.naturalHeight;
        var boxRatio = W / H;
        var dw = W;
        var dh = H;
        if (boxRatio > imgRatio) dh = W / imgRatio;
        else dw = H * imgRatio;
        sctx.drawImage(preloadCourtroomImg, -dw / 2, -dh / 2, dw, dh);
        sctx.restore();
      } else {
        // Rich dark-crimson courtroom fallback when fired before image load finishes
        var bgGrad = sctx.createLinearGradient(0, 0, W, H);
        bgGrad.addColorStop(0, '#2a0612');
        bgGrad.addColorStop(0.5, '#120817');
        bgGrad.addColorStop(1, '#3b0718');
        sctx.fillStyle = bgGrad;
        sctx.fillRect(0, 0, W, H);

        sctx.save();
        sctx.translate(W / 2, H / 2);
        sctx.rotate((-8.5 * Math.PI) / 180);
        sctx.strokeStyle = 'rgba(244, 63, 94, 0.28)';
        sctx.lineWidth = 2;
        for (var gx = -W; gx < W; gx += 72) {
          sctx.beginPath();
          sctx.moveTo(gx, -H);
          sctx.lineTo(gx, H);
          sctx.stroke();
        }
        sctx.restore();
      }

      var vig = sctx.createRadialGradient(W * 0.52, H * 0.46, 40, W * 0.5, H * 0.5, W * 0.72);
      vig.addColorStop(0, 'rgba(251, 191, 36, 0.08)');
      vig.addColorStop(0.65, 'rgba(9, 9, 15, 0.42)');
      vig.addColorStop(1, 'rgba(5, 5, 10, 0.88)');
      sctx.fillStyle = vig;
      sctx.fillRect(0, 0, W, H);

      var cur = TRUTH_BULLETS[activeBulletIndex()];
      var fontPx = Math.max(18, Math.min(34, Math.round(W * 0.036)));
      sctx.save();
      sctx.translate(W * 0.5, H * 0.47);
      sctx.rotate((-10 * Math.PI) / 180);
      sctx.font = '900 ' + fontPx + 'px system-ui, -apple-system, sans-serif';
      sctx.textAlign = 'center';
      sctx.shadowColor = 'rgba(0,0,0,0.95)';
      sctx.shadowBlur = 16;
      sctx.fillStyle = '#ffffff';
      sctx.fillText(cur.statementLines[0], 0, -Math.round(fontPx * 0.55));
      sctx.fillStyle = '#fde047';
      sctx.fillText(cur.statementLines[1], 0, Math.round(fontPx * 0.85));
      sctx.restore();

      return snap;
    }

    function renderMiniChambers() {
      var container = document.getElementById('revealed-mini-chambers');
      if (!container) return;
      var cur = activeBulletIndex();
      var html = '';
      for (var i = 0; i < TRUTH_BULLETS.length; i++) {
        var b = TRUTH_BULLETS[i];
        if (b.isAllArchive) continue;
        var active = i === cur;
        html +=
          '<button type="button" data-mini-idx="' + i + '" ' +
            'title="Click to view · Double-click to shatter!" ' +
            'class="dossier-chamber-tab' + (active ? ' is-active' : '') + '">' +
            '<span>' + b.icon + '</span>' +
            '<span>' + b.kotodamaTitle + '</span>' +
          '</button>';
      }
      container.innerHTML = html;
    }

    function showAllHobbiesReal() {
      var bodyEl = document.getElementById('real-content-body');
      if (!bodyEl) return;
      var sections = '';
      for (var i = 0; i < TRUTH_BULLETS.length; i++) {
        var b = TRUTH_BULLETS[i];
        if (b.isAllArchive) continue;
        sections +=
          '<div class="dossier-archive-section">' +
            '<h3 class="dossier-archive-section-title">[' + b.code + '] ' + b.realTitle + '</h3>' +
            withBaseUrl(b.realBodyHtml) +
          '</div>';
      }
      bodyEl.innerHTML =
        '<div>' +
          '<div class="dossier-kicker">COMPLETE CASE FILE // ALL HOBBIES</div>' +
          '<h2 class="dossier-heading">Personal Interests &amp; Off-Duty Archive</h2>' +
          '<p class="dossier-subheading">Cards, wuxia action RPGs, hoops, Pokémon, and detective visual novels</p>' +
          sections +
        '</div>';
    }

    function mountRealContent(idx) {
      inRealView = true;
      var revStage = document.getElementById('revolver-stage');
      var realStage = document.getElementById('real-content-stage');
      var topReturnBtn = document.getElementById('topReturnTrialBtn');
      if (revStage) revStage.classList.add('dangan-hidden');
      if (realStage) realStage.classList.remove('dangan-hidden');
      if (topReturnBtn) topReturnBtn.classList.remove('dangan-hidden');

      renderMiniChambers();
      var b = TRUTH_BULLETS[idx];
      if (!b || b.isAllArchive) {
        showAllHobbiesReal();
        return;
      }

      var bodyEl = document.getElementById('real-content-body');
      if (bodyEl) {
        bodyEl.innerHTML =
          '<div>' +
            '<div class="dossier-kicker">KOTODAMA #' + b.code + ' // TRUTH REVEALED</div>' +
            '<h2 class="dossier-heading">' + b.realTitle + '</h2>' +
            '<p class="dossier-subheading">' + b.realSubtitle + '</p>' +
            withBaseUrl(b.realBodyHtml) +
          '</div>';
      }
    }

    function returnToRevolverStage() {
      if (isShattering) return;
      inRealView = false;
      var revStage = document.getElementById('revolver-stage');
      var realStage = document.getElementById('real-content-stage');
      var topReturnBtn = document.getElementById('topReturnTrialBtn');
      if (realStage) realStage.classList.add('dangan-hidden');
      if (revStage) revStage.classList.remove('dangan-hidden');
      if (topReturnBtn) topReturnBtn.classList.add('dangan-hidden');
      renderSvgRevolver();
    }

    function fireTruthBullet(evt, forcedIndex) {
      if (isShattering) return;
      if (typeof forcedIndex === 'number') {
        jumpToBullet(forcedIndex);
      }

      var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      playGlassBreakSfx();
      if (prefersReduced) {
        mountRealContent(activeBulletIndex());
        return;
      }

      isShattering = true;
      var stageWrap = document.getElementById('dangan-stage-wrap');
      var rect = stageWrap.getBoundingClientRect();
      var W = Math.max(320, Math.round(rect.width || 800));
      var H = Math.max(500, Math.round(rect.height || 555));

      var impX = W * 0.56;
      var impY = H * 0.47;
      if (evt && typeof evt.clientX === 'number') {
        impX = Math.max(70, Math.min(W - 70, evt.clientX - rect.left));
        impY = Math.max(70, Math.min(H - 70, evt.clientY - rect.top));
      }

      var snapCanvas = buildSnapshotCanvas(W, H);
      var canvas = document.getElementById('shatter-canvas');
      canvas.width = W;
      canvas.height = H;
      canvas.classList.remove('dangan-hidden');
      var ctx = canvas.getContext('2d');

      var rings = [0, 38, 88, 160, 260, 410, 680, 980];
      var rays = 16;
      var gridPts = [];
      var rIdx, aIdx;

      for (rIdx = 0; rIdx < rings.length; rIdx++) {
        var ringArr = [];
        for (aIdx = 0; aIdx < rays; aIdx++) {
          if (rIdx === 0) {
            ringArr.push({ x: impX, y: impY });
          } else {
            var baseAng = (aIdx / rays) * Math.PI * 2;
            var jitterAng = baseAng + (Math.random() - 0.5) * (Math.PI / rays) * 0.76;
            var jitterRad = rings[rIdx] * (0.85 + Math.random() * 0.3);
            ringArr.push({
              x: impX + Math.cos(jitterAng) * jitterRad,
              y: impY + Math.sin(jitterAng) * jitterRad
            });
          }
        }
        gridPts.push(ringArr);
      }

      function makeShard(pts) {
        var sumX = 0;
        var sumY = 0;
        var k;
        for (k = 0; k < pts.length; k++) {
          sumX += pts[k].x;
          sumY += pts[k].y;
        }
        var origCx = sumX / pts.length;
        var origCy = sumY / pts.length;
        var dx = origCx - impX;
        var dy = origCy - impY;
        var dist = Math.sqrt(dx * dx + dy * dy) + 1;
        var speed = (7 + Math.random() * 9.5) * (1 + 100 / (dist + 65));
        var relPts = [];
        for (k = 0; k < pts.length; k++) {
          relPts.push({ x: pts[k].x - origCx, y: pts[k].y - origCy });
        }
        return {
          origCx: origCx,
          origCy: origCy,
          cx: origCx,
          cy: origCy,
          relPts: relPts,
          vx: (dx / dist) * speed + (Math.random() - 0.5) * 3.2,
          vy: (dy / dist) * speed - (2.8 + Math.random() * 4.2),
          rot: 0,
          vRot: (Math.random() - 0.5) * 0.24,
          flip: 0,
          vFlip: 0.09 + Math.random() * 0.16,
          edgeColor: Math.random() > 0.45 ? 'rgba(255, 255, 255, 0.9)' : 'rgba(251, 113, 133, 0.9)'
        };
      }

      var shards = [];
      for (var r = 0; r < rings.length - 1; r++) {
        for (var a = 0; a < rays; a++) {
          var nextA = (a + 1) % rays;
          var p1 = gridPts[r][a];
          var p2 = gridPts[r + 1][a];
          var p3 = gridPts[r + 1][nextA];
          var p4 = gridPts[r][nextA];
          if (r === 0) {
            shards.push(makeShard([p1, p2, p3]));
          } else {
            shards.push(makeShard([p1, p2, p3]));
            shards.push(makeShard([p1, p3, p4]));
          }
        }
      }

      var startTime = performance.now();
      var mountedUnderneath = false;

      function animate(now) {
        var elapsed = now - startTime;
        ctx.clearRect(0, 0, W, H);
        var i, j, s;

        if (elapsed < 125) {
          var t = elapsed / 125;
          var sx = 95;
          var sy = H - 85;
          var curX = sx + (impX - sx) * t;
          var curY = sy + (impY - sy) * t;

          ctx.save();
          var grad = ctx.createLinearGradient(sx, sy, curX, curY);
          grad.addColorStop(0, 'rgba(244, 63, 94, 0)');
          grad.addColorStop(0.55, 'rgba(244, 63, 94, 0.95)');
          grad.addColorStop(1, '#fef08a');
          ctx.strokeStyle = grad;
          ctx.lineWidth = 10;
          ctx.beginPath();
          ctx.moveTo(sx, sy);
          ctx.lineTo(curX, curY);
          ctx.stroke();

          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.arc(curX, curY, 14, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();

          window.requestAnimationFrame(animate);
          return;
        }

        if (!mountedUnderneath) {
          mountedUnderneath = true;
          mountRealContent(activeBulletIndex());
        }

        if (elapsed < 300) {
          ctx.drawImage(snapCanvas, 0, 0, W, H);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.92)';
          ctx.lineWidth = 1.5;
          for (i = 0; i < shards.length; i++) {
            s = shards[i];
            ctx.beginPath();
            for (j = 0; j < s.relPts.length; j++) {
              var px = s.origCx + s.relPts[j].x;
              var py = s.origCy + s.relPts[j].y;
              if (j === 0) ctx.moveTo(px, py);
              else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.stroke();
          }

          var burst = ctx.createRadialGradient(impX, impY, 5, impX, impY, 250);
          burst.addColorStop(0, 'rgba(255, 255, 255, 0.96)');
          burst.addColorStop(0.35, 'rgba(244, 63, 94, 0.82)');
          burst.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = burst;
          ctx.fillRect(0, 0, W, H);

          var boxW = Math.min(420, W - 40);
          ctx.save();
          ctx.translate(impX, impY);
          ctx.rotate(-0.16);
          ctx.fillStyle = 'rgba(9, 9, 11, 0.92)';
          ctx.fillRect(-boxW / 2, -32, boxW, 60);
          ctx.strokeStyle = '#f43f5e';
          ctx.lineWidth = 3;
          ctx.strokeRect(-boxW / 2, -32, boxW, 60);

          ctx.font = '900 34px system-ui, -apple-system, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillStyle = '#fde047';
          ctx.fillText('B R E A K ! !', 0, 12);
          ctx.restore();

          window.requestAnimationFrame(animate);
          return;
        }

        if (elapsed < 1180) {
          var fadeAlpha = Math.max(0, 1 - Math.max(0, elapsed - 820) / 360);
          for (i = 0; i < shards.length; i++) {
            s = shards[i];
            s.cx += s.vx;
            s.cy += s.vy;
            s.vy += 0.58;
            s.rot += s.vRot;
            s.flip += s.vFlip;

            ctx.save();
            ctx.globalAlpha = fadeAlpha;
            ctx.translate(s.cx, s.cy);
            ctx.rotate(s.rot);
            ctx.scale(Math.cos(s.flip), 1);

            ctx.beginPath();
            for (j = 0; j < s.relPts.length; j++) {
              if (j === 0) ctx.moveTo(s.relPts[j].x, s.relPts[j].y);
              else ctx.lineTo(s.relPts[j].x, s.relPts[j].y);
            }
            ctx.closePath();

            ctx.save();
            ctx.clip();
            ctx.drawImage(snapCanvas, -s.origCx, -s.origCy, W, H);
            var glint = Math.abs(Math.sin(s.flip * 2.2));
            if (glint > 0.76) {
              ctx.fillStyle = 'rgba(255, 255, 255, ' + ((glint - 0.76) * 2.8).toFixed(2) + ')';
              ctx.fillRect(-260, -260, 520, 520);
            }
            ctx.restore();

            ctx.strokeStyle = s.edgeColor;
            ctx.lineWidth = 1.4;
            ctx.stroke();
            ctx.restore();
          }

          window.requestAnimationFrame(animate);
          return;
        }

        ctx.clearRect(0, 0, W, H);
        canvas.classList.add('dangan-hidden');
        isShattering = false;
      }

      window.requestAnimationFrame(animate);
    }

    // Event Wiring
    var revStageEl = document.getElementById('revolver-stage');
    if (revStageEl) {
      revStageEl.addEventListener('dblclick', function (evt) {
        fireTruthBullet(evt);
      });
      revStageEl.addEventListener('mousemove', function (evt) {
        var rect = revStageEl.getBoundingClientRect();
        var x = evt.clientX - rect.left;
        var y = evt.clientY - rect.top;
        var ret = document.getElementById('aim-reticle');
        if (ret) {
          ret.style.left = x + 'px';
          ret.style.top = y + 'px';
        }
        var bgLayer = document.getElementById('courtroom-bg-layer');
        if (bgLayer && rect.width > 0 && rect.height > 0) {
          var nx = (x / rect.width - 0.5) * -18;
          var ny = (y / rect.height - 0.5) * -12;
          bgLayer.style.transform =
            'translate3d(' + nx.toFixed(1) + 'px, ' + ny.toFixed(1) + 'px, 0) scale(1.24) rotate(-8.5deg)';
        }
      });
    }

    var stageWrapEl = document.getElementById('dangan-stage-wrap');
    var wheelLock = 0;
    if (stageWrapEl) {
      stageWrapEl.addEventListener(
        'wheel',
        function (evt) {
          if (inRealView) return;
          evt.preventDefault();
          var now = Date.now();
          if (now - wheelLock < 130) return;
          wheelLock = now;
          rotateChamber(evt.deltaY > 0 ? 1 : -1);
        },
        { passive: false }
      );
    }

    var boresEl = document.getElementById('svg-revolver-bores');
    if (boresEl) {
      boresEl.addEventListener('click', function (evt) {
        var target = evt.target;
        while (target && target !== boresEl) {
          var attr = target.getAttribute && target.getAttribute('data-bore-idx');
          if (attr !== null && attr !== undefined) {
            evt.stopPropagation();
            jumpToBullet(parseInt(attr, 10));
            return;
          }
          target = target.parentNode;
        }
      });
      boresEl.addEventListener('dblclick', function (evt) {
        evt.stopPropagation();
      });
    }

    var miniChambersEl = document.getElementById('revealed-mini-chambers');
    if (miniChambersEl) {
      miniChambersEl.addEventListener('click', function (evt) {
        var target = evt.target;
        while (target && target !== miniChambersEl) {
          var attr = target.getAttribute && target.getAttribute('data-mini-idx');
          if (attr !== null && attr !== undefined) {
            var idx = parseInt(attr, 10);
            jumpToBullet(idx);
            mountRealContent(idx);
            return;
          }
          target = target.parentNode;
        }
      });
      miniChambersEl.addEventListener('dblclick', function (evt) {
        var target = evt.target;
        while (target && target !== miniChambersEl) {
          var attr = target.getAttribute && target.getAttribute('data-mini-idx');
          if (attr !== null && attr !== undefined) {
            fireTruthBullet(evt, parseInt(attr, 10));
            return;
          }
          target = target.parentNode;
        }
      });
    }

    var prevBtn = document.getElementById('chamberPrevBtn');
    var nextBtn = document.getElementById('chamberNextBtn');
    if (prevBtn) {
      prevBtn.addEventListener('click', function (evt) {
        evt.stopPropagation();
        rotateChamber(-1);
      });
      prevBtn.addEventListener('dblclick', function (evt) {
        evt.stopPropagation();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function (evt) {
        evt.stopPropagation();
        rotateChamber(1);
      });
      nextBtn.addEventListener('dblclick', function (evt) {
        evt.stopPropagation();
      });
    }

    var fireBtn = document.getElementById('manualBreakBtn');
    if (fireBtn) {
      fireBtn.addEventListener('click', function (evt) {
        evt.stopPropagation();
        fireTruthBullet(null);
      });
    }

    var sfxBtn = document.getElementById('sfxToggleBtn');
    if (sfxBtn) {
      sfxBtn.addEventListener('click', function () {
        sfxEnabled = !sfxEnabled;
        sfxBtn.textContent = sfxEnabled ? '🔊 SFX: ON' : '🔇 SFX: OFF';
      });
    }

    var showAllBtn = document.getElementById('showAllArchiveBtn');
    if (showAllBtn) {
      showAllBtn.addEventListener('click', function () {
        showAllHobbiesReal();
      });
    }

    var reloadBtn = document.getElementById('reloadCylinderBtn');
    var topReturnBtnEl = document.getElementById('topReturnTrialBtn');
    if (reloadBtn) reloadBtn.addEventListener('click', returnToRevolverStage);
    if (topReturnBtnEl) topReturnBtnEl.addEventListener('click', returnToRevolverStage);

    window.addEventListener('keydown', function (evt) {
      if (isShattering || inRealView) return;
      if (evt.ctrlKey || evt.metaKey || evt.altKey) return;
      var activeTag = document.activeElement && document.activeElement.tagName;
      if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || activeTag === 'SELECT') return;

      if (evt.key === 'ArrowDown' || evt.key === 's' || evt.key === 'S') {
        evt.preventDefault();
        rotateChamber(1);
      } else if (evt.key === 'ArrowUp' || evt.key === 'w' || evt.key === 'W') {
        evt.preventDefault();
        rotateChamber(-1);
      } else if (evt.key === 'Enter') {
        evt.preventDefault();
        fireTruthBullet(null);
      }
    });

    // Live 60fps Danganronpa Countdown Timer
    var timerCentis = 3 * 60 * 100 - 1;
    function pad2(v) {
      return v < 10 ? '0' + v : String(v);
    }
    window.setInterval(function () {
      if (inRealView || document.hidden) return;
      timerCentis = timerCentis > 0 ? timerCentis - 3 : 3 * 60 * 100 - 1;
      var mins = Math.floor(timerCentis / 6000);
      var secs = Math.floor((timerCentis % 6000) / 100);
      var cs = timerCentis % 100;
      var el = document.getElementById('trial-timer');
      if (el) {
        el.textContent = '00:' + pad2(mins) + ':' + pad2(secs) + ':' + pad2(cs);
      }
    }, 30);

    renderSvgRevolver();
  }

  window.DanganMisc = exportedApi;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDanganMisc);
  } else {
    initDanganMisc();
  }
})();
