(function () {
  'use strict';

  function initGeekShell() {
    var baseurl = (typeof window !== 'undefined' && window.GEEK_BASEURL) ? window.GEEK_BASEURL : '';

    /* 1. Toast & Clipboard Helper */
    var toastTimer = null;
    function showToast(msg) {
      var t = document.getElementById('geekToast');
      if (!t) return;
      t.textContent = msg;
      t.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(function () {
        t.classList.remove('show');
      }, 2200);
    }

    function copyText(str, toastMsg) {
      if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(str).then(function () {
          showToast(toastMsg);
        }).catch(function () {
          showToast(toastMsg);
        });
      } else {
        showToast(toastMsg);
      }
    }

    /* 2. Mouse-Tracking Specular Spotlight Binding */
    function bindSpotlightCards() {
      var cards = document.querySelectorAll('.spotlight-card, .publications ol.bibliography > li, .cv .card');
      for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        if (card.dataset && card.dataset.spotBound) continue;
        if (card.dataset) card.dataset.spotBound = '1';
        card.addEventListener('mousemove', function (e) {
          if (!this.getBoundingClientRect) return;
          var rect = this.getBoundingClientRect();
          this.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
          this.style.setProperty('--my', (e.clientY - rect.top) + 'px');
        });
      }
    }
    bindSpotlightCards();

    /* 3. Inject 1-Click "Copy Bib" Button Next to Bibliography BibTeX Blocks */
    var bibItems = document.querySelectorAll('.publications ol.bibliography > li');
    for (var b = 0; b < bibItems.length; b++) {
      (function (li) {
        if (!li.querySelector) return;
        var linksDiv = li.querySelector('.links');
        var bibPre = li.querySelector('.bibtex.hidden pre, .bibtex.hidden code');
        if (linksDiv && bibPre && !li.querySelector('.geek-copy-bib-btn')) {
          var copyBtn = document.createElement('a');
          copyBtn.className = 'btn btn-sm z-depth-0 geek-copy-bib-btn';
          copyBtn.setAttribute('role', 'button');
          copyBtn.textContent = 'Copy Bib';
          copyBtn.addEventListener('click', function (ev) {
            ev.preventDefault();
            copyText(bibPre.textContent.trim(), '✓ Copied BibTeX entry to clipboard');
          });
          linksDiv.appendChild(copyBtn);
        }
      })(bibItems[b]);
    }

    /* 4. Live PST Clock & Subtle Scramble-Decode Subtitle */
    var clockEl = document.getElementById('livePstClock');
    if (clockEl) {
      var updateClock = function () {
        try {
          var now = new Date();
          var pst = now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour12: false });
          clockEl.textContent = 'PST ' + pst;
        } catch (err) {
          clockEl.textContent = 'PST LIVE';
        }
      };
      updateClock();
      setInterval(updateClock, 1000);
    }

    var subEl = document.getElementById('decodeSubtitle');
    if (subEl) {
      var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!reduced) {
        var targetText = subEl.textContent;
        var glyphs = '01/_#<>[]=*+';
        var step = 0;
        var decTimer = setInterval(function () {
          step += 3;
          if (step >= targetText.length) {
            subEl.textContent = targetText;
            clearInterval(decTimer);
            return;
          }
          var out = targetText.slice(0, step);
          var lim = Math.min(targetText.length, step + 10);
          for (var k = step; k < lim; k++) {
            out += targetText.charAt(k) === ' ' ? ' ' : glyphs.charAt(Math.floor(Math.random() * glyphs.length));
          }
          out += targetText.slice(lim);
          subEl.textContent = out;
        }, 22);
      }
    }

    var copyEmailBtn = document.getElementById('copyEmailPill');
    if (copyEmailBtn) {
      copyEmailBtn.addEventListener('click', function (e) {
        e.preventDefault();
        copyText('kuny1240@gmail.com', '✓ Copied kuny1240@gmail.com to clipboard');
      });
    }

    /* 5. Interactive Systems Shell (kun@ml-sys:~) */
    var termOut = document.getElementById('termOutput');
    var termInput = document.getElementById('termInput');
    var termForm = document.getElementById('termForm');

    function appendTermLine(html) {
      if (!termOut) return;
      var div = document.createElement('div');
      div.className = 'term-line';
      div.innerHTML = html;
      termOut.appendChild(div);
      termOut.scrollTop = termOut.scrollHeight;
    }

    function runTermCommand(rawCmd) {
      if (!termOut) return;
      var cmd = String(rawCmd || '').trim();
      if (!cmd) return;
      appendTermLine(
        '<span class="term-prompt">kun@ml-sys</span><span class="term-path">:~$</span> <span class="term-cmd-echo">' +
        cmd.replace(/</g, '&lt;') +
        '</span>'
      );

      var lower = cmd.toLowerCase();
      if (lower === 'clear') {
        termOut.innerHTML = '';
        return;
      }
      if (lower === 'help') {
        appendTermLine(
          '<span class="term-accent">Available commands:</span>\n' +
          '  <span class="term-ok">neofetch</span>          System profile &amp; research summary\n' +
          '  <span class="term-ok">bench --rsi</span>       Run synthetic RSI inference search demo\n' +
          '  <span class="term-ok">stack</span>             Core ML systems &amp; engineering stack\n' +
          '  <span class="term-ok">papers --selected</span> List flagship NeurIPS / IEEE journal papers\n' +
          '  <span class="term-ok">trial</span>             Launch Danganronpa Class Trial (/misc/)\n' +
          '  <span class="term-ok">clear</span>             Clear terminal buffer'
        );
        return;
      }
      if (lower === 'neofetch' || lower === 'whoami') {
        appendTermLine(
          '<span class="term-accent">   ╭──────────────╮</span>   <span class="term-ok">kun@google-ml-systems</span>\n' +
          '<span class="term-accent">   │  ◈  RSI // RL │</span>   ──────────────────────────────\n' +
          '<span class="term-accent">   │  ⇄  AGENTS   │</span>   <span class="term-accent">Role:</span>      Machine Learning Engineer @ Google\n' +
          '<span class="term-accent">   ╰──────────────╯</span>   <span class="term-accent">Education:</span> Ph.D. UVA · M.S. TAMU · B.E. Tsinghua\n' +
          '                      <span class="term-accent">Focus:</span>     LLM Serving Efficiency, RL Post-Training, Multi-Agent\n' +
          '                      <span class="term-accent">Pubs:</span>      14 papers (NeurIPS ×2, IEEE TWC, JSAC, TSP, TMLR)\n' +
          '                      <span class="term-accent">Off-Duty:</span>  HS Underground Arena Top 50 NA · Spire 2 · Ogerpon'
        );
        return;
      }
      if (lower === 'stack') {
        appendTermLine(
          '<span class="term-ok">[LLM_SYSTEMS]</span>  Recursive Self-Improvement (RSI) · Multi-Agent Harnesses · Decoding Efficiency\n' +
          '<span class="term-ok">[RL_TRAINING]</span>  Coding-Efficiency RL Environments · Bandit Prompt Opt (TRIPLE) · Offline RL\n' +
          '<span class="term-ok">[INFRA_CODE]</span>   Python · C++ · JAX / PyTorch · Code Retrieval Embeddings · Distributed Eval'
        );
        return;
      }
      if (lower.indexOf('papers') === 0) {
        appendTermLine(
          '<span class="term-warn">★ Selected Flagship Papers:</span>\n' +
          '  [NeurIPS 24] Efficient Prompt Optimization Through the Lens of Best Arm Identification\n' +
          '  [NeurIPS 24] Transformers as Game Players: Provable In-context Game-playing Capabilities\n' +
          '  [IEEE TWC]   Offline RL for Wireless Network Optimization with Mixture Datasets\n' +
          '  [TMLR 2024]  Harnessing the Power of Federated Learning in Federated Contextual Bandits\n' +
          '  [IEEE JSAC]  On the Convergence of Hybrid Server-Clients Collaborative Training'
        );
        return;
      }
      if (lower.indexOf('bench') === 0) {
        appendTermLine('<span class="term-dim">[synthetic-demo] Initializing autonomous RSI search loop...</span>');
        var steps = [
          '  iter 01 │ baseline candidate verified       │ rel_throughput: 1.00x',
          '  iter 02 │ proposer+critic patch accepted    │ rel_throughput: 1.14x  ▲',
          '  iter 03 │ verifier rejected regression      │ rolled back cleanly',
          '  iter 04 │ pareto frontier candidate found   │ rel_throughput: 1.31x  ▲ ★'
        ];
        for (var s = 0; s < steps.length; s++) {
          (function (line, delay) {
            setTimeout(function () {
              appendTermLine('<span class="term-ok">' + line + '</span>');
            }, delay);
          })(steps[s], (s + 1) * 210);
        }
        return;
      }
      if (lower === 'trial') {
        appendTermLine('<span class="term-warn">⚡ Entering Class Trial Courtroom (/misc/)...</span>');
        setTimeout(function () {
          window.location.href = baseurl + '/misc/';
        }, 250);
        return;
      }
      appendTermLine('<span class="term-dim">zsh: command not found: ' + cmd.replace(/</g, '&lt;') + ' (try "help")</span>');
    }

    if (termOut && termForm && termInput) {
      runTermCommand('neofetch');
      termForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var v = termInput.value;
        termInput.value = '';
        runTermCommand(v);
      });
    }

    var chipContainer = document.querySelector('.term-quick-chips');
    if (chipContainer) {
      chipContainer.addEventListener('click', function (e) {
        var target = e.target;
        while (target && target !== chipContainer) {
          if (target.getAttribute && target.getAttribute('data-cmd')) {
            runTermCommand(target.getAttribute('data-cmd'));
            return;
          }
          target = target.parentNode;
        }
      });
    }

    var jumpTermBtn = document.getElementById('jumpTermBtn');
    if (jumpTermBtn) {
      jumpTermBtn.addEventListener('click', function () {
        var sec = document.getElementById('terminalSection');
        if (sec) {
          sec.scrollIntoView({ behavior: 'smooth', block: 'center' });
          if (termInput) termInput.focus();
        } else {
          window.location.href = baseurl + '/#terminalSection';
        }
      });
    }

    /* 6. Publications Instant Category Filter & Live grep Search */
    var pubFilterPills = document.getElementById('pubFilterPills');
    var pubSearchInput = document.getElementById('pubSearchInput');
    var activePubFilter = 'all';
    var activePubQuery = '';

    function classifyBibEntry(text, abbr) {
      var t = (text + ' ' + abbr).toLowerCase();
      if (t.indexOf('prompt') !== -1 || t.indexOf('transformer') !== -1 || t.indexOf('bandit') !== -1) {
        return 'llm';
      }
      if (t.indexOf('federated') !== -1 || t.indexOf('server-client') !== -1) {
        return 'fl';
      }
      return 'rl';
    }

    function refreshPublicationsFilter() {
      var allEntries = document.querySelectorAll('.publications ol.bibliography > li');
      if (!allEntries || !allEntries.length) return;

      for (var i = 0; i < allEntries.length; i++) {
        var item = allEntries[i];
        var txt = (item.textContent || '').toLowerCase();
        var innerMeta = item.querySelector ? item.querySelector('[data-abbr], [data-selected]') : null;
        var rawSel = item.getAttribute('data-selected') || (innerMeta && innerMeta.getAttribute('data-selected')) || '';
        var isSel = String(rawSel).toLowerCase() === 'true';
        var abbr = item.getAttribute('data-abbr') || (innerMeta && innerMeta.getAttribute('data-abbr')) || '';
        var cat = classifyBibEntry(txt, abbr);

        var matchFilter =
          activePubFilter === 'all' ||
          (activePubFilter === 'selected' && isSel) ||
          cat === activePubFilter;

        var matchSearch = !activePubQuery || txt.indexOf(activePubQuery) !== -1;
        item.classList.toggle('geek-pub-hidden', !(matchFilter && matchSearch));
      }

      // Hide year headings whose following bibliography list has 0 visible items
      var yearHeadings = document.querySelectorAll('.publications h2.year');
      for (var y = 0; y < yearHeadings.length; y++) {
        var h2 = yearHeadings[y];
        var nextOl = h2.nextElementSibling;
        if (nextOl && nextOl.tagName === 'OL') {
          var lis = nextOl.querySelectorAll('li');
          var anyVisible = false;
          for (var j = 0; j < lis.length; j++) {
            if (!lis[j].classList.contains('geek-pub-hidden')) {
              anyVisible = true;
              break;
            }
          }
          h2.classList.toggle('geek-pub-hidden', !anyVisible);
          nextOl.classList.toggle('geek-pub-hidden', !anyVisible);
        }
      }
    }

    if (pubFilterPills) {
      pubFilterPills.addEventListener('click', function (e) {
        var target = e.target;
        while (target && target !== pubFilterPills) {
          if (target.getAttribute && target.getAttribute('data-filter')) {
            activePubFilter = target.getAttribute('data-filter');
            var btns = pubFilterPills.querySelectorAll('.pub-filter-btn');
            for (var i = 0; i < btns.length; i++) btns[i].classList.remove('active');
            target.classList.add('active');
            refreshPublicationsFilter();
            return;
          }
          target = target.parentNode;
        }
      });
    }

    if (pubSearchInput) {
      pubSearchInput.addEventListener('input', function () {
        activePubQuery = String(this.value || '').trim().toLowerCase();
        refreshPublicationsFilter();
      });
    }

    /* 7. Raycast-Style Command Palette (Cmd+K / Ctrl+K) */
    function switchSiteTheme() {
      var cur = (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) ||
        document.documentElement.getAttribute('data-theme') || 'dark';
      if (typeof toggleTheme === 'function') {
        toggleTheme(cur);
      } else {
        var next = cur === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        if (typeof localStorage !== 'undefined') localStorage.setItem('theme', next);
      }
      var updated = document.documentElement.getAttribute('data-theme') || 'dark';
      showToast(updated === 'dark' ? '🌙 Switched to Obsidian Dark' : '☀️ Switched to Blueprint Light');
    }

    var COMMANDS = [
      { label: '01. Go to About (Homepage)', hint: 'Shortcut: 1', run: function () { window.location.href = baseurl + '/'; } },
      { label: '02. Go to Publications (All 14 Papers)', hint: 'Shortcut: 2', run: function () { window.location.href = baseurl + '/publications/'; } },
      { label: '03. Go to CV // Systems Timeline', hint: 'Shortcut: 3', run: function () { window.location.href = baseurl + '/cv/'; } },
      { label: '04. Launch Misc // Danganronpa Class Trial 💥', hint: 'Shortcut: 4', run: function () { window.location.href = baseurl + '/misc/'; } },
      { label: 'Toggle Theme (Obsidian Dark ⇄ Blueprint Light)', hint: 'Appearance', run: switchSiteTheme },
      {
        label: 'Run RSI Search Benchmark Demo in Shell',
        hint: 'Shell',
        run: function () {
          if (termOut) {
            var sec = document.getElementById('terminalSection');
            if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'center' });
            runTermCommand('bench --rsi');
          } else {
            window.location.href = baseurl + '/#terminalSection';
          }
        }
      },
      { label: 'Copy Email (kuny1240@gmail.com)', hint: 'Clipboard', run: function () { copyText('kuny1240@gmail.com', '✓ Copied kuny1240@gmail.com to clipboard'); } },
      { label: 'Open Google Scholar Profile', hint: 'External', run: function () { window.open('https://scholar.google.com/citations?user=-BzQrlgAAAAJ&hl=en&oi=ao', '_blank'); } },
      { label: 'Open GitHub (@kuny1240)', hint: 'External', run: function () { window.open('https://github.com/kuny1240', '_blank'); } },
      { label: 'Open LinkedIn', hint: 'External', run: function () { window.open('https://www.linkedin.com/in/kunyang1240/', '_blank'); } }
    ];

    var cmdkBackdrop = document.getElementById('cmdkBackdrop');
    var cmdkInput = document.getElementById('cmdkInput');
    var cmdkList = document.getElementById('cmdkList');
    var openCmdkBtn = document.getElementById('openCmdkBtn');
    var cmdkIdx = 0;
    var filteredCmds = COMMANDS.slice();

    function renderCmdk() {
      if (!cmdkList || !cmdkInput) return;
      var q = String(cmdkInput.value || '').trim().toLowerCase();
      filteredCmds = COMMANDS.filter(function (c) {
        return !q || c.label.toLowerCase().indexOf(q) !== -1 || c.hint.toLowerCase().indexOf(q) !== -1;
      });
      if (cmdkIdx >= filteredCmds.length) cmdkIdx = 0;
      var html = '';
      for (var i = 0; i < filteredCmds.length; i++) {
        html +=
          '<div class="cmdk-item' + (i === cmdkIdx ? ' selected' : '') + '" data-cmdk-i="' + i + '">' +
            '<span>' + filteredCmds[i].label + '</span>' +
            '<span class="cmdk-item-hint">' + filteredCmds[i].hint + '</span>' +
          '</div>';
      }
      cmdkList.innerHTML = html;
    }

    function openCmdk() {
      if (!cmdkBackdrop) return;
      cmdkBackdrop.classList.add('open');
      if (cmdkInput) cmdkInput.value = '';
      cmdkIdx = 0;
      renderCmdk();
      setTimeout(function () {
        if (cmdkInput) cmdkInput.focus();
      }, 30);
    }

    function closeCmdk() {
      if (cmdkBackdrop) cmdkBackdrop.classList.remove('open');
    }

    if (openCmdkBtn) {
      openCmdkBtn.addEventListener('click', openCmdk);
    }
    if (cmdkBackdrop) {
      cmdkBackdrop.addEventListener('click', function (e) {
        if (e.target === cmdkBackdrop) closeCmdk();
      });
    }
    if (cmdkInput) {
      cmdkInput.addEventListener('input', function () {
        cmdkIdx = 0;
        renderCmdk();
      });
    }
    if (cmdkList) {
      cmdkList.addEventListener('click', function (e) {
        var target = e.target;
        while (target && target !== cmdkList) {
          if (target.getAttribute && target.getAttribute('data-cmdk-i') !== null) {
            var chosen = filteredCmds[Number(target.getAttribute('data-cmdk-i'))];
            closeCmdk();
            if (chosen) chosen.run();
            return;
          }
          target = target.parentNode;
        }
      });
    }

    document.addEventListener('keydown', function (e) {
      var key = String(e.key || '');
      if ((e.metaKey || e.ctrlKey) && key.toLowerCase() === 'k') {
        e.preventDefault();
        if (cmdkBackdrop && cmdkBackdrop.classList.contains('open')) closeCmdk();
        else openCmdk();
        return;
      }

      if (cmdkBackdrop && cmdkBackdrop.classList.contains('open')) {
        if (key === 'Escape') {
          closeCmdk();
          return;
        }
        if (key === 'ArrowDown') {
          e.preventDefault();
          cmdkIdx = (cmdkIdx + 1) % Math.max(1, filteredCmds.length);
          renderCmdk();
        } else if (key === 'ArrowUp') {
          e.preventDefault();
          cmdkIdx = (cmdkIdx - 1 + Math.max(1, filteredCmds.length)) % Math.max(1, filteredCmds.length);
          renderCmdk();
        } else if (key === 'Enter' && filteredCmds[cmdkIdx]) {
          e.preventDefault();
          var picked = filteredCmds[cmdkIdx];
          closeCmdk();
          picked.run();
        }
        return;
      }

      var activeTag = document.activeElement && document.activeElement.tagName;
      if (activeTag !== 'INPUT' && activeTag !== 'TEXTAREA' && !e.metaKey && !e.ctrlKey && !e.altKey) {
        if (key === '1') window.location.href = baseurl + '/';
        if (key === '2') window.location.href = baseurl + '/publications/';
        if (key === '3') window.location.href = baseurl + '/cv/';
        if (key === '4') window.location.href = baseurl + '/misc/';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGeekShell);
  } else {
    initGeekShell();
  }
})();
