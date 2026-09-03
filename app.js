/* Tiny hash router + renderers. No build step, no dependencies. */
(function () {
  const $app = document.getElementById("app");
  const EX = window.EXERCISES;
  const WO = window.WORKOUTS;
  const exById = Object.fromEntries(EX.map(e => [e.id, e]));

  const CAT = { lower: "Lower body", upper: "Upper body", full: "Full body", core: "Core / abs", rest: "Rest" };
  const TIER = { "bw": "Bodyweight", "tougher-bw": "Tougher bodyweight", "weighted": "Weighted" };

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // ---------- video helpers ----------
  function youtubeId(url) {
    if (!url) return null;
    const m = url.match(/(?:youtu\.be\/|v=|\/shorts\/|\/embed\/)([A-Za-z0-9_-]{11})/);
    return m ? m[1] : null;
  }
  function videoBlock(ex) {
    const id = youtubeId(ex.video);
    if (id) {
      return `<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${id}?rel=0" title="${esc(ex.name)} demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`;
    }
    if (ex.video) {
      return `<a class="btn primary" href="${esc(ex.video)}" target="_blank" rel="noopener">▶ Watch demo</a>`;
    }
    const q = encodeURIComponent(ex.name + " exercise form");
    return `<div class="video-missing">
      <div>No demo video added yet.</div>
      <a class="btn" href="https://www.youtube.com/results?search_query=${q}" target="_blank" rel="noopener">Search for a demo ↗</a>
    </div>`;
  }

  // ---------- shared how-to content ----------
  function howToHtml(ex, opts = {}) {
    const harder = ex.harder && exById[ex.harder];
    const easier = ex.easier && exById[ex.easier];
    return `
      <div class="two-col">
        <div>
          <div class="panel">
            <h3>How to do it</h3>
            <ol class="steps">${ex.steps.map(s => `<li>${esc(s)}</li>`).join("")}</ol>
          </div>
          <div class="panel" style="margin-top:12px">
            <h3>Keep in mind</h3>
            <ul class="cues">${ex.cues.map(c => `<li>${esc(c)}</li>`).join("")}</ul>
          </div>
        </div>
        <div>
          ${videoBlock(ex)}
          <div class="facts">
            <div class="fact"><div class="k">Starting weight</div><div class="v">${esc(ex.startWeight)}</div></div>
            <div class="fact"><div class="k">Usual reps</div><div class="v">${esc(ex.reps)}</div></div>
            <div class="fact" style="grid-column:1/-1"><div class="k">You need</div><div class="v">${esc(ex.equipment)}</div></div>
          </div>
          ${(harder || easier) ? `<div class="swap">
            ${harder ? `<a class="btn" href="#/exercise/${harder.id}">Make it harder → ${esc(harder.name)}</a>` : ""}
            ${easier ? `<a class="btn" href="#/exercise/${easier.id}">Too hard? → ${esc(easier.name)}</a>` : ""}
          </div>` : ""}
          ${opts.showFullLink ? `<p style="margin:12px 0 0"><a href="#/exercise/${ex.id}">Open full exercise page →</a></p>` : ""}
        </div>
      </div>`;
  }

  // ---------- pages ----------
  function renderHome() {
    const groups = [...new Set(WO.map(w => w.group))];
    const card = w => `
      <a class="card" href="#/workout/${w.id}">
        <h3>${esc(w.name)}</h3>
        <p>${esc(w.format)}</p>
        <div class="meta">
          <span class="tag">${esc(w.structure)}</span>
          <span class="tag">${esc(w.equipment)}</span>
        </div>
      </a>`;
    $app.innerHTML = `
      <h1>Workouts</h1>
      <p class="lede">${esc(INTRO.lede)}</p>
      <ul class="cues intro">${INTRO.notes.map(n => `<li>${esc(n)}</li>`).join("")}</ul>
      ${groups.map(g => `
        <h2>${esc(g)}</h2>
        ${g === "Sore legs days" ? `<p class="lede">${esc(INTRO.soreLegs)}</p>` : ""}
        <div class="grid">${WO.filter(w => w.group === g).map(card).join("")}</div>
      `).join("")}
    `;
  }

  function renderWorkout(id) {
    const w = WO.find(x => x.id === id);
    if (!w) return renderNotFound("That workout doesn't exist.");
    $app.innerHTML = `
      <a class="back" href="#/">← All workouts</a>
      <h1>${esc(w.name)}</h1>
      <div class="meta" style="display:flex;gap:6px;flex-wrap:wrap">
        <span class="tag">${esc(w.structure)}</span><span class="tag">${esc(w.equipment)}</span>
      </div>
      <div class="format">${esc(w.format)}<small>Tap "How to" on any exercise to see the steps and demo without leaving this page.</small></div>
      <ol class="ex-list">
        ${w.exercises.map((item, i) => {
          const ex = exById[item.id];
          if (!ex) return `<li class="ex-row">Unknown exercise "${esc(item.id)}"</li>`;
          const reps = item.reps || ex.reps;
          if (ex.category === "rest") {
            return `<li class="ex-row rest"><div class="head"><div><span class="num">${i + 1}</span><span class="name">${esc(ex.name)}</span></div><div class="reps">${esc(reps)}</div></div>${item.note ? `<div class="note">${esc(item.note)}</div>` : ""}</li>`;
          }
          const same = w.exercises.findIndex(x => x.id === item.id) !== i; // exercise repeated in this workout
          const key = same ? `${ex.id}-${i}` : ex.id;
          return `<li class="ex-row" id="row-${key}">
            <div class="head">
              <div><span class="num">${i + 1}</span><a class="name" href="#/exercise/${ex.id}">${esc(ex.name)}</a></div>
              <div class="reps">${esc(reps)}</div>
            </div>
            <div class="sub">
              <span class="tag ${ex.category}">${CAT[ex.category]}</span>
              ${ex.tier === "weighted" ? `<span>Weight: <strong>${esc(ex.startWeight)}</strong></span>` : ""}
              <span>${esc(ex.equipment)}</span>
            </div>
            ${item.note ? `<div class="note">${esc(item.note)}</div>` : ""}
            <div class="actions">
              <button class="btn" data-toggle="${key}" aria-expanded="false">How to ▾</button>
            </div>
            <div class="howto" id="howto-${key}" hidden>${howToHtml(ex, { showFullLink: true })}</div>
          </li>`;
        }).join("")}
      </ol>
      <h2>Mixing it up</h2>
      <p class="lede">Feel free to mix it up with different exercises following the same format. Each exercise page shows a harder and an easier swap. Keep the reps the same. Text me if you're not sure whether an exercise would work.</p>
    `;
    $app.querySelectorAll("[data-toggle]").forEach(b => b.addEventListener("click", () => {
      const panel = document.getElementById("howto-" + b.dataset.toggle);
      const open = panel.hidden;
      panel.hidden = !open;
      b.setAttribute("aria-expanded", String(open));
      b.textContent = open ? "Hide ▴" : "How to ▾";
    }));
  }

  function renderExercises() {
    const cat = state.cat || "all";
    const list = EX.filter(e => e.category !== "rest" && (cat === "all" || e.category === cat));
    $app.innerHTML = `
      <h1>Exercise library</h1>
      <p class="lede">Everything the workouts use, plus the list from the email for mixing and matching. Weighted moves show a starting weight. Adjust up or down as needed, but keep the reps.</p>
      <div class="filters" role="group" aria-label="Filter by body area">
        ${["all", "lower", "upper", "full", "core"].map(k => `<button class="chip" data-cat="${k}" aria-pressed="${cat === k}">${k === "all" ? "All" : CAT[k]}</button>`).join("")}
      </div>
      ${["bw", "tougher-bw", "weighted"].map(tier => {
        const items = list.filter(e => e.tier === tier);
        if (!items.length) return "";
        return `<h2>${TIER[tier]}</h2><div class="grid">
          ${items.map(e => `
            <a class="card" href="#/exercise/${e.id}">
              <h3>${esc(e.name)}</h3>
              <p>${esc(e.startWeight)} · ${esc(e.reps)}</p>
              <div class="meta"><span class="tag ${e.category}">${CAT[e.category]}</span>${e.video ? `<span class="tag">▶ video</span>` : ""}</div>
            </a>`).join("")}
        </div>`;
      }).join("")}
    `;
    $app.querySelectorAll("[data-cat]").forEach(b => b.addEventListener("click", () => { state.cat = b.dataset.cat; renderExercises(); }));
  }

  function renderExercise(id) {
    const ex = exById[id];
    if (!ex) return renderNotFound("That exercise doesn't exist.");
    const usedIn = WO.filter(w => w.exercises.some(x => x.id === ex.id));
    $app.innerHTML = `
      <a class="back" href="#/exercises">← Exercise library</a>
      <h1>${esc(ex.name)}</h1>
      <div class="meta" style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px">
        <span class="tag ${ex.category}">${CAT[ex.category]}</span><span class="tag ${ex.tier}">${TIER[ex.tier]}</span>
      </div>
      ${howToHtml(ex)}
      ${usedIn.length ? `<h2>Used in</h2><div class="grid">${usedIn.map(w => `<a class="card" href="#/workout/${w.id}"><h3>${esc(w.name)}</h3><p>${esc(w.format)}</p></a>`).join("")}</div>` : ""}
    `;
  }

  function renderNotFound(msg) {
    $app.innerHTML = `<a class="back" href="#/">← All workouts</a><p class="empty">${esc(msg)}</p>`;
  }

  // ---------- router ----------
  const state = {};
  const INTRO = window.INTRO;
  function route() {
    const hash = location.hash.replace(/^#\/?/, "");
    const [page, id] = hash.split("/");
    window.scrollTo(0, 0);
    if (!page) return renderHome();
    if (page === "workout" && id) return renderWorkout(id);
    if (page === "exercises") return renderExercises();
    if (page === "exercise" && id) return renderExercise(id);
    renderNotFound("Page not found.");
  }
  window.addEventListener("hashchange", route);
  route();
})();
