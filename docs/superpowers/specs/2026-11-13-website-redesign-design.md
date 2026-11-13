# Kun Yang Personal Website Redesign — Design Specification

- **Date:** 2026-11-13
- **Repository:** `kuny1240.github.io` (Jekyll `al-folio` deployed via GitHub Actions)
- **Status:** Reviewed (Builder Check Complete — Pending Partner Approval)

---

## 1. Intent & Why

Kun Yang's personal website (`https://kuny1240.github.io`) currently runs an older academic `al-folio` setup whose content stops around mid-2024. Since then, Kun completed his Ph.D. at UVA, worked at Juniper Networks, and joined Google as a Machine Learning Engineer working on LLM inference efficiency, multi-agent code optimization, and RL post-training environments.

Most visitors are **recruiters, hiring managers, and research collaborators**, so the primary professional pages (`about`, `publications`, `cv`) must stay fast, credible, scannable, and strictly compliant with Google confidentiality policies. At the same time, Kun wants the `Misc` page (`/misc/`) to break away from cookie-cutter academic templates and reflect his personality through an all-English interactive homage to **Danganronpa's Nonstop Debate (Class Trial)** UI—loading his real hobbies into a 6-chamber revolver cylinder and firing "Truth Bullets" (`KOTODAMA`) that shatter the courtroom glass to reveal his personal archive.

---

## 2. Goals, Non-Goals, and Anti-Goals

### Goals
1. **Recruiter-Ready Professional Core (`About`, `Publications`, `CV`)**:
   - Update contact email (`kuny1240@gmail.com`) and wire up **Google Scholar** (`scholar_userid: -BzQrlgAAAAJ`) alongside GitHub (`kuny1240`), LinkedIn (`kunyang1240`), and DBLP (`https://dblp.org/pid/63/1587-11.html`).
   - Add a **Selected Projects & Focus** highlight section near the top of `About` (`/`) featuring cherry-picked, compliance-safe work (Recursive Self-Improvement for LLM Inference, RL Environments for Gemini Training, Multi-Agent Code & Prompt Optimization).
   - Update `_news/` announcements through March 2025 (joining Google, NeurIPS 2024 acceptances, Asilomar 2024 Best Student Paper Finalist, Ph.D. graduation & Juniper) and fix typos in older entries.
   - Update `_bibliography/papers.bib` so all **14 publications & manuscripts** from Kun's latest CV render cleanly on `/publications/`, with 5 flagship papers marked `selected={true}` on `/`, deduplicated BibTeX keys, fixed syntax bugs, venue `abbr` badges, `bibtex_show={true}`, and working `arxiv` / `html` / `doi` links.
   - Update `_data/cv.yml` to match Kun's 2026 CV (compliance-scrubbed Google experience, synced Juniper/UVA/Intel/Xsense/Kneron/Insight entries, corrected dates such as Intel May–Aug 2022 and TAMU 2017–2019, plus Technical Skills, Awards, and Reviewer Experience).
2. **All-English Danganronpa "Nonstop Debate" `Misc` Page (`/misc/`)**:
   - Full-bleed 16:9 interactive courtroom stage featuring a custom-generated IP-free Dutch-angle Neo-Gothic underground trial courtroom background (`assets/img/misc/trial_courtroom_bg.jpg`).
   - Authentic Class Trial HUD elements:
     - Top-left skewed investigation topic banner (`What keeps Kun busy outside of LLM research & code?`).
     - Top-right distressed crimson live 60fps digital countdown timer (`▶ | 00:02:59:xx`).
     - Bottom-left ornate crimson-metallic 6-chamber SVG revolver cylinder + angled `KOTODAMA` slash banner with hazard stripes and up/down controls.
     - Center floating 3D kinetic English statement typography with highlighted golden weak-spots (no enclosing card box).
     - Cursor-tracking glowing orange-gold concentric target reticle (`⊕`) + subtle 2.5D mouse-parallax camera movement on the courtroom background.
     - Bottom-right skewed parallelogram topic/speaker plate + accessible `DOUBLE-CLICK TO BREAK!!` trigger button (for mobile/touch users who cannot easily double-click).
   - **Controls & Physics Glass Shatter**:
     - Scrolling the mouse wheel over the stage, pressing `↑`/`↓` (`W`/`S`), clicking cylinder chambers, or clicking the `▲`/`▼` buttons rotates the revolver cylinder smoothly (with optional zero-copyright Web Audio synthesized mechanical click SFX).
     - Double-clicking anywhere on the courtroom stage (or pressing `Enter` / clicking the trigger button) fires a Kotodama Truth Bullet from the bottom-left cylinder to the impact point, captures an offscreen canvas snapshot of the tilted courtroom + statement text, flashes a `BREAK!!` cut-in with spiderweb fracture lines, and shatters the actual textured courtroom snapshot into ~90 3D-tumbling polygonal glass shards under gravity to reveal the **E-Handbook** real hobby content underneath.
   - **Updated All-English Hobby Content & Custom Generated IP-Free Illustrations**:
     - Generate two new IP-free stylized illustrations via `image-generator` and store them under `assets/img/misc/`:
       1. **Basketball Duo / Tribute Art (`assets/img/misc/hoops_tribute.jpg`)**: Original stylized basketball court illustration honoring a 7'1" #16 red-and-black center (Hansen Yang homage) and a veteran #3 floor-general point guard (CP3 homage), with no NBA/team trademarked logos.
       2. **Starry Teal Festival Mask Spirit Art (`assets/img/misc/ogerpon_mask_homage.jpg`)**: Original stylized anime/game-art homage of a joyful forest spirit wearing an ornate starry teal wooden festival mask with leafy accents (evoking Ogerpon's vibe without copying Nintendo/Pokémon copyrighted character designs).
     - Populate the 6 revolver chambers:
       1. **`Hearthstone & Spire 2`**: Veteran Arena specialist—perennial Top 100 on the Americas (NA) Underground Arena leaderboard and recently broke into **Top 50 NA**; currently climbing **Slay the Spire 2** in co-op with friends after clearing all characters & high Ascensions in the first game.
       2. **`Phantom Blade Zero & RPGs`**: Freshly achieved **100% completion** in **Phantom Blade Zero** (celebrating its kungfupunk blade combat and wuxia atmosphere; **no copyrighted OST audio hosted**), plus **Black Myth: Wukong** and **Baldur's Gate 3**.
       3. **`Hoops · Hansen & CP3`**: Combined basketball showcase featuring `hoops_tribute.jpg`:
          - *Hansen Yang*: Celebrating his first career NBA double-double ("My big buddy just notched his first double-double in his NBA career! Congrats!").
          - *Chris Paul*: Heartfelt tribute ("Did not expect the sudden end of his career to come so abruptly and disrespectfully from the LA Clippers—supporting him all the way, and thank you for guiding me to play smart and play tough in my life.").
       4. **`Pokémon · Ogerpon`**: Longtime Pokémon fan, recently obsessed with **Ogerpon** (*Teal Mask*), paired with `ogerpon_mask_homage.jpg`.
       5. **`Detective & Trial VNs`**: Completed the entire **Danganronpa** and **Ace Attorney** series—the direct inspiration behind this interactive trial page.
       6. **`Full Off-Duty Archive`**: Shatters directly into a single-page scrollable view of all 5 personal sections.

### Non-Goals
- Migrating away from Jekyll / `al-folio` or altering the GitHub Actions deployment target (`gh-pages` via `.github/workflows/deploy.yml`).
- Hosting commercial game soundtracks (`.mp3`/`.ogg`) or copyrighted NBA/Nintendo official imagery.
- Publishing an unredacted downloadable PDF resume (`cv_pdf` remains unset in `_pages/cv.md`).

### Anti-Goals (Must Never Happen)
- **Zero Confidential/Internal Leaks**: Never include unannounced/internal Google model version numbers or codenames (`Gemini 3.8`, `Gemini 3.5 Flash-Lite`, `Gemini 4 Argon`, `AlphaEvolve`), internal TPU architecture generations, production launch counts (`5+ configs`), or internal fleet metrics (`4–5% latency`, `million-scale CPU CU`, `PB-scale daily memory`) anywhere in the repo.
- **Zero Uglifier / Jekyll Build Breakage**: `al-folio` enables `jekyll-minifier` with Ruby `uglifier` (`harmony: true`, which supports ES2015 but fails on ES2020+ syntax like optional chaining `?.` or nullish coalescing `??`). Custom JS must either use clean ES2015 syntax AND/OR be added to `jekyll-minifier.exclude` in `_config.yml`.
- **Zero Accidental Spec/Binary Publishing**: Exclude `docs/` and `*.exe` from Jekyll build output (`_config.yml` `exclude`) and `.gitignore` (`ruby-installer.exe` stays untracked/ignored).

---

## 3. Constraints & Existing Architecture

- **Build & Deploy Pipeline**: `.github/workflows/deploy.yml` runs `bundle exec jekyll build` on Ubuntu with Ruby `3.2.2` and deploys `_site` to GitHub Pages.
- **Image Processing (`jekyll-imagemagick`)**: `_config.yml` runs ImageMagick WebP generation on `assets/img/`. Standard `<img src="/assets/img/misc/...">` works directly because Jekyll copies original files in `assets/img/` to `_site/assets/img/` alongside generated WebP variants. Same-origin hosting under `/assets/img/misc/` also ensures HTML5 `<canvas>` `drawImage()` never hits CORS tainting during the glass-shatter snapshot!
- **Theme Compatibility**: `al-folio` uses Bootstrap 4.6 + custom CSS variables (`--global-bg-color`, `--global-text-color`, `--global-card-bg-color`, `--global-theme-color`, `--global-divider-color`) supporting light and dark mode (`html[data-theme='dark']`). Main-site custom components (such as the Selected Projects cards on `About`) must use these `al-folio` theme variables so light/dark mode toggling works seamlessly, while the `Misc` courtroom stage uses its dedicated dark theatrical palette inside its self-contained stage container.

---

## 4. Approaches Considered

### Approach A: Enhance Existing Jekyll `al-folio` Architecture (Selected)
- **Description**: Keep the existing Jekyll `al-folio` build pipeline, `jekyll-scholar` bibliography engine (`_bibliography/papers.bib`), and layout system. Upgrade `_config.yml`, `_pages/about.md`, `_data/cv.yml`, `_news/`, and `_sass/` for modern professional presentation, and build the Nonstop Debate `Misc` experience via dedicated static assets (`assets/css/dangan_misc.css`, `assets/js/dangan_misc.js`, `assets/img/misc/*`) embedded in `_pages/misc.md` (with wider container styling on `/misc/` so the 16:9 courtroom has room to breathe).
- **Trade-offs**: Preserves effortless `.bib`-driven publication management and existing GitHub Actions deployment with minimal structural risk; requires respecting Jekyll/Bootstrap CSS scoping and `jekyll-minifier` rules.
- **Why Chosen**: Explicitly selected by Kun—keeps academic publication maintenance effortless while delivering 100% of the custom interactive experience on `/misc/` and clean project highlights on `/`.

### Approach B: Replace Jekyll with a Standalone Static Frontend
- **Description**: Replace Ruby/Jekyll with a custom static HTML/JS/CSS or Vite/Astro build.
- **Trade-offs**: Complete freedom from Bootstrap/Ruby, but sacrifices native `jekyll-scholar` `.bib` rendering and requires replacing the working deployment workflow. Rejected in favor of Approach A.

---

## 5. Detailed Component Design (Decided vs. Builder's Call)

### 5.1 Site Configuration & Hygiene (`_config.yml`, `.gitignore`) — *Decided + Builder's Call*
- **Decided by Kun**:
  - `email`: `kuny1240@gmail.com` (replacing `ky9tc@virginia.edu`).
  - `scholar_userid`: `-BzQrlgAAAAJ` (enables the Google Scholar icon in `social.html`).
  - Keep `github_username: kuny1240`, `linkedin_username: kunyang1240`, `dblp_url: https://dblp.org/pid/63/1587-11.html`.
- **Builder's Call**:
  - Enable `enable_navbar_social: false` as currently set, and keep social icons visible on `About` (plus add a clean inline quick-links bar at the top of `About` so recruiters don't have to scroll to the page footer to find Email / Google Scholar / GitHub / LinkedIn / DBLP!).
  - Update `description` and `keywords` in `_config.yml` to reflect Machine Learning Engineer at Google, LLM inference optimization, multi-agent systems, reinforcement learning.
  - Set `max_width: 860px` (slight bump from `800px` for cleaner 3-column project cards on `About`, while `/misc/` overrides its own container max-width to `1040px` via page-scoped CSS).
  - Add `docs/`, `ruby-installer.exe`, `.superpowers/` to `_config.yml` `exclude` and `.gitignore`, and add `assets/js/dangan_misc.js` to `jekyll-minifier.exclude` as a safeguard.

### 5.2 `About` Page (`_pages/about.md` & `_sass/_base.scss`) — *Decided*
- **Bio**: Concise two-paragraph introduction positioning Kun as a Machine Learning Engineer at Google (Sunnyvale, CA) with a Ph.D. in EE from UVA (Prof. Cong Shen), M.S. from Texas A&M (Prof. Tie Liu), and B.E. from Tsinghua University, removing the outdated *"invite you to visit my website"* filler.
- **Top Quick-Links Strip**: Direct clickable pills right under the bio for `Email`, `Google Scholar`, `GitHub`, `LinkedIn`, and `DBLP` (all external links `target="_blank" rel="noopener noreferrer"`).
- **Selected Projects & Focus (3 Cherry-Picked Cards above `news`)**:
  1. **Recursive Self-Improvement (RSI) for Inference** *(Google · LLM Systems)* — Designing autonomous iterative search and self-improving optimization loops to improve LLM decoding and serving efficiency at scale.
  2. **RL Environments for Gemini Training** *(Google · Post-Training)* — Building scalable reinforcement learning environments and challenging coding-efficiency evaluation suites to support Gemini evaluation and post-training.
  3. **Multi-Agent Code & Prompt Optimization** *(Google & NeurIPS 2024)* — Developing self-evolving multi-agent code optimization harnesses with persistent memory, alongside bandit-based prompt optimization (*TRIPLE*).
- **News (`_news/`)**:
  - Add `_news/google_2025.md` (`2025-03-10`: Joined Google in Sunnyvale, CA as a Machine Learning Engineer) and `_news/uva_grad_2024.md` (`2024-08-01`: Defended Ph.D. dissertation at UVA and joined Juniper Networks).
  - Fix spelling typos in existing `_news/announcement_1.md` (`resent` -> `recent`), `_news/twc.md` (`manuscipt` -> `manuscript`), and `_news/asilomar.md` (`have joined` -> `was selected as a`).
- **Selected Publications**: Rendered automatically from `papers.bib` entries with `selected={true}`.

### 5.3 `Publications` (`_bibliography/papers.bib` & `_data/venues.yml`) — *Decided*
- Include all **14** publications & manuscripts from Kun's latest CV with unique BibTeX keys:
  1. `shi2024efficient` — NeurIPS 2024 (*Efficient Prompt Optimization Through the Lens of Best Arm Identification*), `selected={true}`, `abbr={NeurIPS}`, `arxiv={2402.09723}`, `bibtex_show={true}`. (Co-first author `Shi*, Chengshuai and Yang*, Kun...`)
  2. `shi2024transformers` — NeurIPS 2024 (*Transformers as Game Players...*), `selected={true}`, `abbr={NeurIPS}`, `arxiv={2410.09701}`, `bibtex_show={true}`.
  3. `yang2024offline_twc` — IEEE TWC 2024 (*Offline Reinforcement Learning for Wireless Network Optimization with Mixture Datasets*), `selected={true}`, `abbr={IEEE TWC}`, `doi={10.1109/TWC.2024.3395624}`, `html={https://ieeexplore.ieee.org/document/10529190}`, `bibtex_show={true}` (fixing the broken `}},` syntax in current `papers.bib`).
  4. `bian2024accelerating` — IEEE TSP 2024 (*Accelerating Hybrid Federated Learning Convergence Under Partial Participation*), `abbr={IEEE TSP}`, `doi={10.1109/TSP.2024.3408631}`, `bibtex_show={true}`.
  5. `shi2024harnessing` — TMLR 2024 (*Harnessing the Power of Federated Learning in Federated Contextual Bandits*), `selected={true}`, `abbr={TMLR}`, `html={https://openreview.net/forum?id=Z8wcREe9qV}`, `bibtex_show={true}`.
  6. `yang2024average_asilomar` — IEEE Asilomar 2024 (*Average Reward Reinforcement Learning for Wireless Radio Resource Management*), `abbr={Asilomar}`, `note={🏆 Best Student Paper Finalist}`, `bibtex_show={true}`.
  7. `yang2024advancing_dyspan` — IEEE DySPAN 2024 (*Advancing RAN Slicing with Offline Reinforcement Learning*), `abbr={DySPAN}`, `arxiv={2312.10547}`, `bibtex_show={true}` (upgraded from 2023 arXiv `@misc`).
  8. `yang2023convergence_jsac` — IEEE JSAC 2023 (*On the Convergence of Hybrid Server-Clients Collaborative Training*), `selected={true}`, `abbr={IEEE JSAC}`, `year={2023}`, `bibtex_show={true}`.
  9. `yang2023offline_asilomar` — IEEE Asilomar 2023 (*Offline Reinforcement Learning for Wireless Network Optimization with Mixture Datasets*), authors `Yang, Kun and Shen, Cong and Yang, Jing and Yeh, Shu-Ping and Sydir, Jerry`, `abbr={Asilomar}`, `bibtex_show={true}`.
  10. `yang2023teaching_ciss` — IEEE CISS 2023 (*Teaching Reinforcement Learning Agents via Reinforcement Learning*), `abbr={CISS}`, `bibtex_show={true}`.
  11. `yang2024teaching_jstsp` — Manuscript submitted to IEEE JSTSP (*Teaching Reinforcement Learning Agents via Reinforcement Learning*), authors `Yang, Kun and Shi, Chengshuai and Shen, Cong` (no public preprint URL), `abbr={Preprint}`, `year={2024}`, `note={Submitted to IEEE Journal on Special Topics in Signal Processing (JSTSP)}`.
  12. `yang2022multi_asilomar` — IEEE Asilomar 2022 (*Multi-Agent Reinforcement Learning for Wireless User Scheduling...*), `abbr={Asilomar}`, `bibtex_show={true}`.
  13. `yang2022convergence_ciss` — IEEE CISS 2022 (*On the Convergence of Hybrid Federated Learning with Server-Clients Collaborative Training*), `abbr={CISS}`, `bibtex_show={true}`.
  14. `yang2020deep_infocom` — IEEE INFOCOM WKSHPS 2020 (*Deep Reinforcement Learning Based Wireless Network Optimization: A Comparative Study*), `abbr={INFOCOM}`, `bibtex_show={true}`.

### 5.4 `CV` Page (`_pages/cv.md` & `_data/cv.yml`) — *Decided*
- `_pages/cv.md` keeps `cv_pdf` unset (no raw unredacted resume PDF hosted).
- `_data/cv.yml` sections updated with the following exact source content (compliance-scrubbed for Google):
  1. **General Information**:
     - Name: `Kun Yang`
     - Role: `Machine Learning Engineer, Google`
     - Location: `Cupertino / Sunnyvale, CA`
     - Email: `kuny1240@gmail.com`
  2. **Professional & Research Experience** (`time_table`):
     - **Google** (`Mar. 2025 – Present`, Machine Learning Engineer, Sunnyvale, CA):
       - *Recursive Self-Improvement (RSI) for Inference*: Designed and architected autonomous iterative search and hill-climbing workflows to optimize LLM decoding and serving efficiency at scale.
       - *RL Environments & Coding-Efficiency Post-Training*: Built scalable reinforcement learning environments and microbenchmark generation systems producing challenging, efficiency-oriented coding tasks for Gemini evaluation and post-training.
       - *Self-Evolving Multi-Agent Code Optimization*: Built multi-agent search, review, and debate workflows with persistent cross-agent harness memory and fine-tuned code-similarity retrieval embeddings for automated code efficiency optimization.
     - **Juniper Networks** (`Jul. 2024 – Mar. 2025`, Sr. Data Science Engineer, Cupertino, CA):
       - *Automated Frequency Coordination (AFC) & Radio Resource Management*: Led architecture and full-stack development of the RRM system supporting AFC for 6GHz Wi-Fi devices; built the cloud-to-device data channel for automatic frequency requests, allocation, and adjustment; analyzed anomalous network behavior and validated automated local RRM responses.
     - **University of Virginia** (`Aug. 2020 – Aug. 2024`, Graduate Research Assistant, Charlottesville, VA):
       - *Efficient Prompt Optimization for LLMs (NeurIPS 2024, co-first author)*: Formulated prompt selection as a fixed-budget best-arm identification problem and developed query-efficient clustering and function-approximation algorithms, improving selection efficiency by 25% and overall budget efficiency by over 50%.
       - *Reinforcement Learning for Wireless Resource Scheduling (with Intel)*: Designed dataset-mixture and ensemble offline RL methods to learn from suboptimal logged data and extended the framework to network slicing (~30% fewer SLA violations with ~5% additional bandwidth on Intel's simulator; published in IEEE TWC, DySPAN, and Asilomar 2024 Best Student Paper Finalist).
       - *Server-Client Collaborative Training in Federated Learning (IEEE JSAC, first author)*: Developed a hybrid server-client collaborative training algorithm, proved faster convergence, and validated on real-world datasets and NVIDIA Jetson edge devices.
     - **Earlier Industry Experience**:
       - **Intel Corporation** (`May 2022 – Aug. 2022`, Research Intern, Portland, OR): Enabled RL training and algorithm evaluation for network slicing in NetworkGym; built an NS-3 vehicular wireless simulator to study federated learning convergence with mobile clients.
       - **Xsense.ai** (`Jun. 2021 – Aug. 2021`, Research Intern, San Diego, CA): Designed a VectorNet + residual network behavior predictor achieving comparable performance with fewer parameters; reimplemented TNT and VectorNet in PyTorch and delivered a live demo.
       - **Kneron** (`Aug. 2020 – Dec. 2020`, Research Scientist Intern, San Diego, CA): Built an adaptive quantization toolbox selecting per-layer precision, reducing model computational cost by ~50% with <2% accuracy loss.
       - **Insight Data Science** (`Jan. 2020 – Mar. 2020`, Fellow, San Francisco, CA): Built and deployed an AWS/Terraform/Prometheus/Grafana production database monitoring stack for gaming analytics company Mayhem.
       - **Xsense.ai** (`Jun. 2019 – Aug. 2019`, Software Engineer Intern, San Diego, CA): Designed a safety-aware reward function and DDPG ramp-merging agent achieving a 0.24% collision rate comparable to the S-T optimizer.
  3. **Education** (`time_table`):
     - **University of Virginia** (`Aug. 2020 – Aug. 2024`, Charlottesville, VA): Ph.D. in Electrical Engineering (Advisor: Prof. Cong Shen).
     - **Texas A&M University** (`Aug. 2017 – Dec. 2019`, College Station, TX): M.S. in Electrical Engineering (Advisor: Prof. Tie Liu).
     - **Tsinghua University** (`Aug. 2013 – Jul. 2017`, Beijing, China): B.E. in Electrical and Information Science.
  4. **Technical Skills** (`nested_list`):
     - *LLM Systems*: Multi-agent systems, recursive self-improvement (RSI), decoding & serving optimization, RL environments & microbenchmark generation, LLM evaluation & post-training benchmarks, prompt optimization.
     - *Machine Learning*: Offline & multi-agent reinforcement learning, federated learning, model optimization & quantization.
     - *Languages & Tools*: Python, C++, MATLAB, PyTorch, TensorFlow, Keras, Scikit-learn, Pandas, NumPy, NS-3.
  5. **Awards & Academic Service** (`nested_list`):
     - *Awards*: IEEE Asilomar 2024 Best Student Paper Finalist; IEEE DySPAN 2024 Student Travel Grant; NSF Spectrum Week 2023 Student Travel Award.
     - *Journal Reviewer*: IEEE JSAC (Special Issue on Distributed Learning over Wireless Edge Networks), IEEE TWC, IEEE TCCN, IEEE TGCN, IEEE TMLCN, IEEE TNSE, IEEE WCL.
     - *Conference Reviewer*: IEEE Asilomar (2022, 2023), IEEE ICC 2023, IEEE CISS 2023, IEEE Milcom 2022, WiOpt 2022.

### 5.5 `Misc` Interactive Class Trial Page (`_pages/misc.md`, `assets/css/dangan_misc.css`, `assets/js/dangan_misc.js`, `assets/img/misc/*`) — *Decided + Builder's Call*
- **Pre-Existing Prototype & Assets**:
  - Approved interactive prototype code & English chamber copy live in `C:\Users\kuny1\.gemini\antigravity\brain\85d1c332-1d2a-430d-96c3-32f866b859b8\scratch\preview_v4_template.html` (adapt from Tailwind classes to standalone scoped CSS in `assets/css/dangan_misc.css` and clean ES2015 JS in `assets/js/dangan_misc.js` so `al-folio` needs zero Tailwind CDN).
  - `assets/img/misc/trial_courtroom_bg.jpg`: Already generated at `C:\Users\kuny1\.gemini\antigravity\brain\85d1c332-1d2a-430d-96c3-32f866b859b8\mystery_trial_courtroom_bg_1794560352200.jpg`—copy and optimize (~1280px JPEG) into `assets/img/misc/trial_courtroom_bg.jpg`.
- **Two New Illustrations to Generate via `image-generator`**:
  - `assets/img/misc/hoops_tribute.jpg`: Generated IP-free stylized anime/visual-novel illustration of a 7'1" #16 center & veteran #3 floor general on a dramatic spotlighted court (no NBA/team trademarked logos).
  - `assets/img/misc/ogerpon_mask_homage.jpg`: Generated IP-free stylized illustration of a cheerful forest spirit holding/wearing a starry teal festival mask surrounded by emerald leaves.
- **Page Layout & Responsiveness (Builder's Call)**:
  - Scoped `.dangan-misc-page` wrapper widens `.container` on `/misc/` up to `1040px` on desktop while gracefully adapting on mobile/tablet (stacking/scaling the revolver HUD and allowing single-tap on the `BREAK!!` trigger button on touchscreens where `dblclick` may zoom or lag).
  - Includes procedural Web Audio API sound effects (cylinder click + crystalline shatter chord) defaulting to `ON` (activated cleanly upon first user gesture per browser autoplay policy) with an explicit `🔊 SFX: ON / OFF` toggle.

---

## 6. Left to the Builder

- Exact SCSS/CSS styling values for the 3-card project grid on `About` so it harmonizes with both light and dark modes in `al-folio`.
- Exact prompt tuning for `image-generator` on `hoops_tribute.jpg` and `ogerpon_mask_homage.jpg` (ensuring crisp, cohesive visual-novel / pop-art quality with zero trademarked logos or Nintendo character rips).
- Mobile/touch fallback ergonomics on `/misc/` (e.g., swipe/arrow buttons + tap-to-fire button alongside desktop wheel + double-click).
- Local verification script/checks (validating YAML syntax, BibTeX key uniqueness & syntax, HTML/JS syntax, zero confidential strings via regex audit, and browser visual check).
