/* directory.js - ALL data access + rendering. Never hardcode tools here;
   everything comes from window.DIRECTORY_DATA (data/directory-data.js). */
(function () {
  const D = window.DIRECTORY_DATA;
  const ENTRIES = D.entries;
  const REQUIRED = ["id","name","category","subcategory","description","helpfulness","officialUrl","pricing","pricingType","accessType","tags","notes","verificationStatus","source","metadata"];

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
  const isUrl = (u) => { try { return /^https?:$/.test(new URL(u).protocol); } catch { return false; } };

  /* ---------- data access ---------- */
  const getCategoryBySlug = (slug) => D.categories.find((c) => c.slug === slug);
  const getCategoryByName = (name) => D.categories.find((c) => c.name === name);
  const getEntriesByCategory = (name) => ENTRIES.filter((e) => e.category === name);
  const getEntryById = (id) => ENTRIES.find((e) => e.id === id);
  function searchEntries(query, list = ENTRIES) {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return list;
    return list.filter((e) => {
      const hay = [e.name, e.description, e.helpfulness, e.subcategory, e.notes, e.tags.join(" ")].join(" ").toLowerCase();
      return words.every((w) => hay.includes(w));
    });
  }
  function getRelated(entry, max = 4) {
    return ENTRIES.filter((e) => e.id !== entry.id && e.category === entry.category && e.subcategory === entry.subcategory).slice(0, max);
  }

  /* ---------- validation (warns in console + banner) ---------- */
  function validateEntries() {
    const problems = [], ids = new Set(), catNames = D.categories.map((c) => c.name);
    ENTRIES.forEach((e, i) => {
      const label = `#${i + 1} ${e.name || "(no name)"}`;
      REQUIRED.forEach((k) => { if (!(k in e)) problems.push(`${label}: missing field "${k}"`); });
      if (ids.has(e.id)) problems.push(`${label}: duplicate id "${e.id}"`);
      ids.add(e.id);
      if (!catNames.includes(e.category)) problems.push(`${label}: unknown category "${e.category}"`);
      if (e.officialUrl && !isUrl(e.officialUrl)) problems.push(`${label}: invalid URL "${e.officialUrl}"`);
      if (!D.pricingTypes.includes(e.pricingType)) problems.push(`${label}: invalid pricingType "${e.pricingType}"`);
      if (!D.verificationStatuses.includes(e.verificationStatus)) problems.push(`${label}: invalid verificationStatus "${e.verificationStatus}"`);
      if (!Array.isArray(e.tags)) problems.push(`${label}: tags must be an array`);
    });
    problems.forEach((p) => console.warn("[Directory data]", p));
    return problems;
  }

  /* ---------- rendering ---------- */
  const statusBadge = (s) => `<span class="badge ${s === "Needs Verification" ? "text-bg-warning" : s === "Verified" ? "text-bg-success" : "text-bg-secondary"}">${esc(s)}</span>`;
  const openBtn = (e, cls = "btn-sm") => isUrl(e.officialUrl)
    ? `<a class="btn btn-primary ${cls}" href="${esc(e.officialUrl)}" target="_blank" rel="noopener noreferrer">Open Website</a>`
    : `<button class="btn btn-outline-secondary ${cls}" disabled title="No official URL provided yet">No URL yet</button>`;

  function renderDirectory(entries, container) {
    if (!entries.length) { container.innerHTML = `<div class="text-center text-secondary py-5">No entries match your search or filters.</div>`; return; }
    container.innerHTML = `<div class="table-responsive"><table class="table table-dark table-hover align-middle dir-table">
      <thead><tr><th>Name</th><th class="col-desc">Description</th><th>Type</th><th class="col-pricing">Pricing</th><th>Status</th><th class="text-end">Actions</th></tr></thead>
      <tbody>${entries.map((e) => `<tr>
        <td data-label="Name"><strong>${esc(e.name)}</strong>${e.tags.includes("Cross-Listed") ? ' <span class="badge text-bg-dark border">cross-listed</span>' : ""}</td>
        <td data-label="Description" class="col-desc text-secondary small">${esc(e.description)}</td>
        <td data-label="Type" class="small">${esc(e.subcategory)}</td>
        <td data-label="Pricing" class="col-pricing small">${esc(e.pricingType)}</td>
        <td data-label="Status">${statusBadge(e.verificationStatus)}</td>
        <td class="actions text-end text-nowrap">${openBtn(e)} <button type="button" class="btn btn-outline-light btn-sm" data-detail="${esc(e.id)}">View Details</button></td>
      </tr>`).join("")}</tbody></table></div>`;
  }

  function renderEntryDetails(e) {
    const row = (k, v) => `<dt class="col-sm-4">${k}</dt><dd class="col-sm-8">${v ? esc(v) : '<span class="text-secondary">Not provided</span>'}</dd>`;
    const related = getRelated(e);
    return `<div class="mb-3">${statusBadge(e.verificationStatus)} <span class="badge text-bg-dark border">${esc(e.category)}</span></div>
      <dl class="row small">
        ${row("Purpose", e.description)}${row("How it helps", e.helpfulness)}${row("Subcategory", e.subcategory)}
        ${row("Pricing / access", e.pricing)}${row("Pricing type", e.pricingType)}${row("Platform", e.accessType)}
        <dt class="col-sm-4">Official link</dt><dd class="col-sm-8">${isUrl(e.officialUrl) ? `<a href="${esc(e.officialUrl)}" target="_blank" rel="noopener noreferrer">${esc(e.officialUrl)}</a>` : '<span class="text-secondary">No URL provided yet</span>'}</dd>
        ${row("Notes", e.notes)}${row("Workbook status", e.metadata.workbookStatus)}
        <dt class="col-sm-4">Tags</dt><dd class="col-sm-8">${e.tags.length ? e.tags.map((t) => `<span class="badge text-bg-secondary me-1">${esc(t)}</span>`).join("") : '<span class="text-secondary">None</span>'}</dd>
        ${row("Source", e.source)}${row("ID", e.id)}
      </dl>
      <div class="mb-4">${openBtn(e, "")}</div>
      ${related.length ? `<h6>Related</h6><div class="list-group">${related.map((r) => `<button type="button" class="list-group-item list-group-item-action bg-transparent text-light" data-detail="${esc(r.id)}">${esc(r.name)}</button>`).join("")}</div>` : ""}`;
  }

  /* ---------- pages ---------- */
  function initHome() {
    const grid = document.getElementById("categoryCards");
    grid.innerHTML = D.categories.map((c) => `<div class="col-6 col-lg-4 col-xl-3"><a class="card cat-card h-100 text-decoration-none" href="category.html?cat=${c.slug}">
      <div class="card-body"><div class="display-6">${getEntriesByCategory(c.name).length}</div><h2 class="h5 mb-1">${esc(c.name)}</h2><p class="small text-secondary mb-0">${esc(c.description)}</p></div></a></div>`).join("");
    document.getElementById("globalSearch").addEventListener("submit", (ev) => {
      ev.preventDefault();
      location.href = "category.html?cat=all&q=" + encodeURIComponent(document.getElementById("globalQ").value.trim());
    });
    if (window.anime) anime({ targets: ".cat-card", opacity: [0, 1], translateY: [24, 0], delay: anime.stagger(70), duration: 600, easing: "easeOutCubic" });
    if (window.initSphere) window.initSphere(D.categories.map((c) => ({ ...c, count: getEntriesByCategory(c.name).length })));
  }

  function initCategory() {
    const params = new URLSearchParams(location.search);
    const slug = params.get("cat") || "all";
    const cat = slug === "all" ? null : getCategoryBySlug(slug);
    const base = cat ? getEntriesByCategory(cat.name) : ENTRIES;
    document.getElementById("catTitle").textContent = cat ? cat.name : "All Entries";
    document.getElementById("catDesc").textContent = cat ? cat.description : "Search across every category.";
    document.title = (cat ? cat.name : "All Entries") + " — AI Tools Directory";
    const $ = (id) => document.getElementById(id);
    const fill = (sel, values) => { sel.innerHTML = `<option value="">All</option>` + [...new Set(values)].filter(Boolean).sort().map((v) => `<option>${esc(v)}</option>`).join(""); };
    fill($("fSub"), base.map((e) => e.subcategory));
    fill($("fPrice"), base.map((e) => e.pricingType));
    fill($("fStatus"), base.map((e) => e.verificationStatus));
    $("q").value = params.get("q") || "";
    const oc = new bootstrap.Offcanvas($("detailPanel"));
    const sorters = { name: (a, b) => a.name.localeCompare(b.name), "name-desc": (a, b) => b.name.localeCompare(a.name),
      sub: (a, b) => a.subcategory.localeCompare(b.subcategory) || a.name.localeCompare(b.name),
      price: (a, b) => a.pricingType.localeCompare(b.pricingType) || a.name.localeCompare(b.name),
      status: (a, b) => a.verificationStatus.localeCompare(b.verificationStatus) || a.name.localeCompare(b.name) };
    function update() {
      let list = searchEntries($("q").value, base);
      if ($("fSub").value) list = list.filter((e) => e.subcategory === $("fSub").value);
      if ($("fPrice").value) list = list.filter((e) => e.pricingType === $("fPrice").value);
      if ($("fStatus").value) list = list.filter((e) => e.verificationStatus === $("fStatus").value);
      list = [...list].sort(sorters[$("sort").value]);
      $("count").textContent = `${list.length} of ${base.length} entries`;
      renderDirectory(list, $("results"));
    }
    ["q", "fSub", "fPrice", "fStatus", "sort"].forEach((id) => $(id).addEventListener("input", update));
    $("reset").addEventListener("click", () => { ["q", "fSub", "fPrice", "fStatus"].forEach((id) => ($(id).value = "")); update(); });
    function showDetails(id, push = true) {
      const e = getEntryById(id); if (!e) return;
      $("detailTitle").textContent = e.name;
      $("detailBody").innerHTML = renderEntryDetails(e);
      if (push) { const u = new URL(location); u.searchParams.set("id", id); history.replaceState(null, "", u); }
      oc.show();
    }
    document.addEventListener("click", (ev) => { const b = ev.target.closest("[data-detail]"); if (b) showDetails(b.dataset.detail); });
    $("detailPanel").addEventListener("hidden.bs.offcanvas", () => { const u = new URL(location); u.searchParams.delete("id"); history.replaceState(null, "", u); });
    update();
    if (params.get("id")) showDetails(params.get("id"), false);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const problems = validateEntries();
    const banner = document.getElementById("dataWarning");
    if (banner && problems.length) { banner.hidden = false; banner.textContent = `Data check found ${problems.length} problem(s). Open the browser console (F12) for details.`; }
    const page = document.body.dataset.page;
    if (page === "home") initHome(); else if (page === "category") initCategory();
  });

  window.Directory = { getEntriesByCategory, searchEntries, renderDirectory, renderEntryDetails, getEntryById, validateEntries };
})();
