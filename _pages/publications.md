---
layout: page
permalink: /publications/
title: publications
description: Full publication list sorted in reverse chronological order (* denotes equal contribution)
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="pub-filter-bar">
  <div class="pub-pills" id="pubFilterPills">
    <button type="button" class="pub-filter-btn active" data-filter="all">All [14]</button>
    <button type="button" class="pub-filter-btn" data-filter="selected">Selected [5]</button>
    <button type="button" class="pub-filter-btn" data-filter="llm">LLM &amp; Bandits</button>
    <button type="button" class="pub-filter-btn" data-filter="rl">RL &amp; Wireless</button>
    <button type="button" class="pub-filter-btn" data-filter="fl">Federated Learning</button>
  </div>
  <input type="search" id="pubSearchInput" class="pub-search" placeholder="grep title / venue / year..." aria-label="Filter publications" />
</div>

<div class="publications">

{% bibliography -f {{ site.scholar.bibliography }} %}

</div>
