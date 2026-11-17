---
layout: about
title: about
permalink: /
subtitle: Machine Learning Engineer @ Google · Ph.D. in Electrical Engineering

profile:
  align: right
  image: kun_photo.png
  image_circular: false

news: true
selected_papers: true
social: true
---

I am a **Machine Learning Engineer at Google** in Sunnyvale, CA, focusing on <span class="inline-tech">LLM inference efficiency</span>, <span class="inline-tech">self-improving multi-agent code optimization</span>, and <span class="inline-tech">RL environments for post-training</span>.

Previously, I served as a Senior Data Science Engineer at **Juniper Networks** and earned my Ph.D. in Electrical Engineering from the **University of Virginia (UVA)** advised by Prof. [Cong Shen](https://engineering.virginia.edu/faculty/cong-shen). Prior to UVA, I received my M.S. in Electrical Engineering from **Texas A&M University** (advised by Prof. Tie Liu) and my B.E. in Electrical and Information Science from **Tsinghua University**. My research spans multi-agent systems, bandit & prompt optimization, offline reinforcement learning, and federated learning.

<div class="about-quick-links">
  <button type="button" class="quick-link-pill" id="copyEmailPill" title="Click to copy kuny1240@gmail.com">
    <i class="fas fa-copy"></i> kuny1240@gmail.com
  </button>
  <a class="quick-link-pill" href="mailto:kuny1240@gmail.com">
    <i class="fas fa-envelope"></i> Email
  </a>
  <a class="quick-link-pill" href="https://scholar.google.com/citations?user=-BzQrlgAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer">
    <i class="ai ai-google-scholar"></i> Google Scholar
  </a>
  <a class="quick-link-pill" href="https://github.com/kuny1240" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-github"></i> GitHub
  </a>
  <a class="quick-link-pill" href="https://www.linkedin.com/in/kunyang1240/" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-linkedin"></i> LinkedIn
  </a>
  <a class="quick-link-pill" href="https://dblp.org/pid/63/1587-11.html" target="_blank" rel="noopener noreferrer">
    <i class="ai ai-dblp"></i> DBLP
  </a>
</div>

<div class="selected-projects-section">
  <div class="geek-sec-header" style="margin-top: 1.5rem;">
    <div class="geek-sec-left">
      <span class="geek-sec-index">01 //</span>
      <h2 class="geek-sec-title">Selected Systems &amp; Research Focus</h2>
    </div>
    <span class="geek-sec-meta">hover cards for specular telemetry</span>
  </div>

  <div class="selected-projects-grid">
    <div class="project-focus-card spotlight-card">
      <div>
        <div class="sys-card-top">
          <span class="project-focus-tag mono">Google · LLM Systems</span>
          <span class="sys-badge">SYS_01</span>
        </div>
        <h3>Recursive Self-Improvement (RSI) for Inference</h3>
        <p>Designing autonomous iterative search and self-improving optimization loops to improve LLM decoding and serving efficiency at scale.</p>
      </div>
      <div class="micro-viz">
        <div class="micro-viz-label">
          <span>search_trajectory(iter)</span>
          <span style="color: var(--accent-emerald);">pareto ↑</span>
        </div>
        <svg viewBox="0 0 220 26" aria-hidden="true">
          <path d="M4 22 L38 22 L38 17 L78 17 L78 12 L126 12 L126 7 L174 7 L174 3 L214 3" fill="none" stroke="rgba(148,163,184,0.25)" stroke-width="1.5"/>
          <path class="rsi-line" d="M4 22 L38 22 L38 17 L78 17 L78 12 L126 12 L126 7 L174 7 L174 3 L214 3" fill="none" stroke="var(--accent-cyan)" stroke-width="2"/>
          <circle cx="214" cy="3" r="3.2" fill="var(--accent-emerald)"/>
        </svg>
      </div>
    </div>

    <div class="project-focus-card spotlight-card">
      <div>
        <div class="sys-card-top">
          <span class="project-focus-tag mono">Google · Post-Training</span>
          <span class="sys-badge">SYS_02</span>
        </div>
        <h3>RL Environments for Gemini Training</h3>
        <p>Building scalable reinforcement learning environments and challenging coding-efficiency evaluation suites to support Gemini evaluation and post-training.</p>
      </div>
      <div class="micro-viz">
        <div class="micro-viz-label">
          <span>env.step() // verifier</span>
          <span style="color: var(--accent-cyan);">reward +R</span>
        </div>
        <svg viewBox="0 0 220 26" aria-hidden="true">
          <rect x="6" y="17" width="16" height="7" rx="2" fill="rgba(56,189,248,0.3)"/>
          <rect x="30" y="14" width="16" height="10" rx="2" fill="rgba(56,189,248,0.4)"/>
          <rect x="54" y="15" width="16" height="9" rx="2" fill="rgba(56,189,248,0.4)"/>
          <rect x="78" y="11" width="16" height="13" rx="2" fill="rgba(56,189,248,0.55)"/>
          <rect x="102" y="9" width="16" height="15" rx="2" fill="rgba(56,189,248,0.68)"/>
          <rect x="126" y="7" width="16" height="17" rx="2" fill="rgba(52,211,153,0.72)"/>
          <rect x="150" y="5" width="16" height="19" rx="2" fill="rgba(52,211,153,0.85)"/>
          <rect class="agent-pulse" x="174" y="2" width="16" height="22" rx="2" fill="var(--accent-emerald)"/>
          <text x="197" y="16" font-size="9" fill="var(--accent-emerald)">PASS</text>
        </svg>
      </div>
    </div>

    <div class="project-focus-card spotlight-card">
      <div>
        <div class="sys-card-top">
          <span class="project-focus-tag mono">Google &amp; NeurIPS 2024</span>
          <span class="sys-badge">SYS_03</span>
        </div>
        <h3>Multi-Agent Code & Prompt Optimization</h3>
        <p>Developing self-evolving multi-agent code optimization harnesses with persistent memory, alongside bandit-based prompt optimization (<em>TRIPLE</em>).</p>
      </div>
      <div class="micro-viz">
        <div class="micro-viz-label">
          <span>proposer ⇄ critic ⇄ verifier</span>
          <span style="color: var(--accent-indigo);">arm*</span>
        </div>
        <svg viewBox="0 0 220 26" aria-hidden="true">
          <line x1="28" y1="13" x2="106" y2="13" stroke="rgba(129,140,248,0.5)" stroke-width="1.5" stroke-dasharray="4 3"/>
          <line x1="106" y1="13" x2="188" y2="13" stroke="rgba(52,211,153,0.55)" stroke-width="1.5" stroke-dasharray="4 3"/>
          <circle class="agent-pulse" cx="28" cy="13" r="5" fill="var(--accent-cyan)"/>
          <circle class="agent-pulse d2" cx="106" cy="13" r="5" fill="var(--accent-indigo)"/>
          <circle class="agent-pulse d3" cx="188" cy="13" r="5.5" fill="var(--accent-emerald)"/>
        </svg>
      </div>
    </div>
  </div>
</div>

<div id="terminalSection">
  <div class="geek-sec-header">
    <div class="geek-sec-left">
      <span class="geek-sec-index">02 //</span>
      <h2 class="geek-sec-title">Interactive Systems Shell</h2>
    </div>
    <span class="geek-sec-meta">click a preset chip or type &lsquo;help&rsquo;</span>
  </div>

  <div class="terminal-shell">
    <div class="terminal-topbar">
      <div class="term-dots">
        <span class="term-dot r"></span>
        <span class="term-dot y"></span>
        <span class="term-dot g"></span>
        <span class="term-title mono">kun@sunnyvale-ml-sys: ~ (zsh)</span>
      </div>
      <div class="term-quick-chips">
        <button type="button" class="term-chip" data-cmd="neofetch">neofetch</button>
        <button type="button" class="term-chip" data-cmd="bench --rsi">bench --rsi</button>
        <button type="button" class="term-chip" data-cmd="papers --selected">papers --selected</button>
        <button type="button" class="term-chip" data-cmd="stack">stack</button>
        <button type="button" class="term-chip" data-cmd="trial">trial 💥</button>
        <button type="button" class="term-chip" data-cmd="clear">clear</button>
      </div>
    </div>
    <div class="terminal-body" id="termOutput"></div>
    <form class="terminal-input-row" id="termForm" autocomplete="off">
      <span class="term-prompt mono">kun@ml-sys</span><span class="term-path mono">:~$</span>
      <input type="text" class="terminal-input" id="termInput" placeholder="Type a command (neofetch, bench --rsi, stack, papers, trial, help)..." spellcheck="false" />
    </form>
  </div>
</div>
