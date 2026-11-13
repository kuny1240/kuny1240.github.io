---
layout: page
permalink: /misc/
title: Misc
description: Nonstop Debate — Load a Truth Bullet into the cylinder and double-click to shatter into my off-duty archive.
nav: true
nav_order: 6
---

<link rel="stylesheet" href="{{ '/assets/css/dangan_misc.css' | relative_url }}">

<div
  id="dangan-misc-root"
  class="dangan-misc-root"
  data-baseurl="{{ site.baseurl }}"
  data-courtroom-bg="{{ '/assets/img/misc/trial_courtroom_bg.jpg' | relative_url }}"
>
  <div class="dangan-controls-bar">
    <span>🎯 <strong>Scroll / ↑↓ Keys / Cylinder Arrows</strong> to switch Truth Bullets · <strong>Double-Click stage (or tap BREAK!!)</strong> to fire &amp; shatter!</span>
    <div class="dangan-controls-actions">
      <button type="button" id="sfxToggleBtn" class="dangan-ctrl-btn">🔊 SFX: ON</button>
      <button type="button" id="topReturnTrialBtn" class="dangan-ctrl-btn dangan-ctrl-btn-danger dangan-hidden">🔫 Back to Trial Courtroom</button>
    </div>
  </div>

  <div id="dangan-stage-wrap" class="dangan-stage-wrap">
    <canvas id="shatter-canvas" class="dangan-shatter-canvas dangan-hidden"></canvas>

    <!-- Layer 1: Nonstop Debate Courtroom -->
    <div id="revolver-stage" class="dangan-revolver-stage">
      <div id="courtroom-bg-layer" class="courtroom-cam">
        <img
          id="courtroom-bg-img"
          src="{{ '/assets/img/misc/trial_courtroom_bg.jpg' | relative_url }}"
          alt="Class Trial Courtroom"
        />
      </div>

      <div class="courtroom-vignette"></div>

      <!-- Top-Left Skewed Investigation Topic Banner -->
      <div class="dangan-topic-banner-wrap">
        <div class="dangan-topic-banner">
          <div class="dangan-topic-banner-text">What keeps Kun busy outside of LLM research &amp; code?</div>
          <div class="dangan-topic-banner-line"></div>
        </div>
      </div>

      <!-- Top-Right Live Digital Timer -->
      <div class="dangan-timer-wrap">
        <div class="timer-slash">
          <div class="timer-slash-row">
            <span class="timer-play-icon">▶</span>
            <span class="timer-sep">|</span>
            <span id="trial-timer" class="timer-digits">00:02:59:86</span>
          </div>
          <div class="timer-underline"></div>
        </div>
      </div>

      <!-- Center Floating 3D Kinetic Statement Typography -->
      <div class="dangan-kinetic-center">
        <div id="kinetic-text-wrap" class="kinetic-statement">
          <div id="target-statement" class="kinetic-statement-inner">
            Top 50 NA in Underground Arena,<br>and climbing <span class="weak-spot">Slay the Spire 2 co-op!</span>
          </div>
        </div>
      </div>

      <!-- Cursor-Tracking Target Reticle -->
      <div id="aim-reticle" class="aim-reticle">
        <svg viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="24" fill="rgba(245, 158, 11, 0.08)" stroke="#f59e0b" stroke-width="2.2" />
          <circle cx="40" cy="40" r="16" fill="none" stroke="#fde047" stroke-width="1.4" />
          <line x1="40" y1="7" x2="40" y2="21" stroke="#fbbf24" stroke-width="2.2" />
          <line x1="40" y1="59" x2="40" y2="73" stroke="#fbbf24" stroke-width="2.2" />
          <line x1="7" y1="40" x2="21" y2="40" stroke="#fbbf24" stroke-width="2.2" />
          <line x1="59" y1="40" x2="73" y2="40" stroke="#fbbf24" stroke-width="2.2" />
          <circle cx="40" cy="40" r="3" fill="#fef08a" />
        </svg>
      </div>

      <!-- Bottom-Left Crimson Revolver Cylinder + KOTODAMA Slash Bar -->
      <div class="dangan-revolver-hud">
        <div class="dangan-revolver-svg-box" title="Scroll wheel or click chambers to switch Truth Bullets">
          <svg viewBox="0 0 220 220">
            <defs>
              <radialGradient id="crimsonMetal" cx="45%" cy="45%" r="58%">
                <stop offset="0%" stop-color="#ef4444" />
                <stop offset="52%" stop-color="#991b1b" />
                <stop offset="88%" stop-color="#450a0a" />
                <stop offset="100%" stop-color="#1f0303" />
              </radialGradient>
              <radialGradient id="activeBulletGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#fef08a" />
                <stop offset="60%" stop-color="#f97316" />
                <stop offset="100%" stop-color="#dc2626" />
              </radialGradient>
            </defs>

            <circle cx="110" cy="110" r="98" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="1.5" stroke-dasharray="28 10 6 10" />
            <circle cx="110" cy="110" r="91" fill="none" stroke="rgba(244,63,94,0.85)" stroke-width="2" />

            <g id="svg-revolver-drum" class="revolver-drum-spin">
              <circle cx="110" cy="110" r="82" fill="url(#crimsonMetal)" stroke="#fca5a5" stroke-width="2.2" />
              <g fill="#09090b" stroke="#f87171" stroke-width="1.2">
                <circle cx="183" cy="152" r="13" />
                <circle cx="110" cy="194" r="13" />
                <circle cx="37" cy="152" r="13" />
                <circle cx="37" cy="68" r="13" />
                <circle cx="110" cy="26" r="13" />
                <circle cx="183" cy="68" r="13" />
              </g>
              <circle cx="110" cy="110" r="21" fill="#18181b" stroke="#f87171" stroke-width="2" />
              <circle cx="110" cy="110" r="8" fill="#ef4444" />
              <g id="svg-revolver-bores"></g>
            </g>

            <circle cx="157" cy="83" r="24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-dasharray="12 5" />
          </svg>
        </div>

        <div class="kotodama-slash-wrap">
          <div class="kotodama-slash-bar">
            <div class="kotodama-top-row">
              <div id="kotodama-bullet-name" class="kotodama-bullet-name">Hearthstone &amp; Spire 2</div>
              <div class="kotodama-step-btns">
                <button type="button" id="chamberPrevBtn" class="kotodama-step-btn" aria-label="Previous Truth Bullet" title="Previous Truth Bullet">▲</button>
                <button type="button" id="chamberNextBtn" class="kotodama-step-btn" aria-label="Next Truth Bullet" title="Next Truth Bullet">▼</button>
              </div>
            </div>
            <div class="kotodama-divider"></div>
            <div class="kotodama-bottom-row">
              <div class="hazard-stripes"></div>
              <span class="kotodama-label">KOTODAMA</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom-Right Speaker Parallelogram & Accessible Break Button -->
      <div class="dangan-speaker-hud">
        <button type="button" id="manualBreakBtn" class="dangan-fire-btn" title="Tap or Double-Click anywhere on the courtroom to fire!">
          💥 BREAK!!
        </button>
        <div class="speaker-parallelogram">
          <div class="speaker-plate-row">
            <span id="speaker-plate-text" class="speaker-plate-text">CARD SHARK · 01/06</span>
            <span class="speaker-live-dot"></span>
          </div>
          <div class="speaker-underline"></div>
        </div>
      </div>
    </div>

    <!-- Layer 2: Revealed E-Handbook Real Content -->
    <div id="real-content-stage" class="dossier-stage dangan-hidden">
      <div class="dossier-banner-blur">
        <img id="dossier-bg-img" src="{{ '/assets/img/misc/trial_courtroom_bg.jpg' | relative_url }}" alt="" />
        <div class="dossier-banner-fade"></div>
      </div>

      <div>
        <div class="dossier-top-nav">
          <div id="revealed-mini-chambers" class="dossier-mini-chambers"></div>
          <div class="dossier-nav-actions">
            <button type="button" id="showAllArchiveBtn" class="dossier-action-secondary">📂 View All Sections</button>
            <button type="button" id="reloadCylinderBtn" class="dossier-action-primary">🔫 Reload Cylinder</button>
          </div>
        </div>

        <div id="real-content-body" class="dossier-body"></div>
      </div>

      <div class="dossier-footer">
        <span>E-HANDBOOK // KUN YANG PERSONAL ARCHIVE</span>
        <span>💡 Tip: Double-click any bullet tab above to shatter into the next file</span>
      </div>
    </div>
  </div>

  <noscript>
    <div class="mt-4">
      <h3>Personal Interests &amp; Off-Duty Archive</h3>
      <ul>
        <li><strong>Card &amp; Deck-Building Games:</strong> Perennial Top 100 and recent Top 50 NA Underground Arena player in Hearthstone; climbing Slay the Spire 2 in co-op with friends.</li>
        <li><strong>Action &amp; RPGs:</strong> 100% completed Phantom Blade Zero, alongside Black Myth: Wukong and Baldur's Gate 3.</li>
        <li><strong>Basketball:</strong> Celebrating Hansen Yang's first NBA double-double and honoring Chris Paul's legendary career and "play smart, play tough" mentality.</li>
        <li><strong>Pokémon:</strong> Longtime fan, recently charmed by Ogerpon (The Teal Mask).</li>
        <li><strong>Mystery &amp; Trial Visual Novels:</strong> Completed the entire Danganronpa and Ace Attorney series.</li>
      </ul>
    </div>
  </noscript>
</div>

<script defer src="{{ '/assets/js/dangan_misc.js' | relative_url }}"></script>
