(function () {
  const $app = document.getElementById("app");
  const EX = window.EXERCISES, WO = window.WORKOUTS, INTRO = window.INTRO;
  const exById = Object.fromEntries(EX.map(e => [e.id, e]));
  const CAT = { lower: "Lower body", upper: "Upper body", full: "Full body", core: "Core" };
  const TIER = { "bw": "Bodyweight", "tougher-bw": "Tougher bodyweight", "weighted": "Weighted" };
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function youtubeId(url) {
    const m = (url || "").match(/(?:youtu\.be\/|v=|\/shorts\/|\/embed\/)([A-Za-z0-9_-]{11})/);
    return m ? m[1] : null;
  }
  function videoBlock(ex) {
    const id = youtubeId(ex.video);
    if (id) return `<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${id}?rel=0" title="${esc(ex.name)}" allow="encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>
      <a class="yt" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener">Watch on YouTube</a>`;
    if (ex.video) return `<a class="btn" href="${esc(ex.video)}" target="_blank" rel="noopener">Watch</a>`;
    const q = encodeURIComponent(ex.name + " exercise form");
    return `<div class="video-missing"><a class="btn ghost sm" href="https://www.youtube.com/results?search_query=${q}" target="_blank" rel="noopener">Find on YouTube</a></div>`;
  }

  function howToHtml(ex) {
    const harder = ex.harder && exById[ex.harder], easier = ex.easier && exById[ex.easier];
    return `<div class="two-col">
      <div>
        <ol class="steps">${ex.steps.map(s => `<li>${esc(s)}</li>`).join("")}</ol>
        <ul class="cues">${ex.cues.map(c => `<li>${esc(c)}</li>`).join("")}</ul>
      </div>
      <div>
        ${videoBlock(ex)}
        ${(harder || easier) ? `<div class="swap">
          ${harder ? `<a class="btn ghost sm" href="#/exercise/${harder.id}">Harder: ${esc(harder.name)}</a>` : ""}
          ${easier ? `<a class="btn ghost sm" href="#/exercise/${easier.id}">Easier: ${esc(easier.name)}</a>` : ""}
        </div>` : ""}
      </div>
    </div>`;
  }

  const workoutRow = w => `<li><a class="row" href="#/workout/${w.id}">
    <div><div class="t">${esc(w.name)}</div><div class="s">${esc(w.structure)}</div></div>
    <span class="arrow">→</span></a></li>`;

  function renderHome() {
    const groups = [...new Set(WO.map(w => w.group))];
    $app.innerHTML = `
      <h1>Workouts</h1>
      <p class="lede">${esc(INTRO.lede)}</p>
      <ul class="notes">${INTRO.notes.map(n => `<li>${esc(n)}</li>`).join("")}</ul>
      ${groups.map(g => `
        <div class="eyebrow">${esc(g)}</div>
        ${g === "Sore legs days" ? `<p class="lede">${esc(INTRO.soreLegs)}</p>` : ""}
        <ul class="rows">${WO.filter(w => w.group === g).map(workoutRow).join("")}</ul>`).join("")}`;
  }

  function renderWorkout(id) {
    const w = WO.find(x => x.id === id);
    if (!w) return renderNotFound();
    $app.innerHTML = `
      <a class="back" href="#/">← Workouts</a>
      <h1>${esc(w.name)}</h1>
      <p class="format">${esc(w.format)}</p>
      <ol class="rows">
        ${w.exercises.map((item, i) => {
          const ex = exById[item.id];
          const reps = item.reps || ex.reps;
          if (ex.category === "rest") return `<li class="ex rest"><div class="head"><div><span class="n">${i + 1}</span><span class="t">${esc(ex.name)}</span></div><div class="reps">${esc(reps)}</div></div></li>`;
          const key = ex.id + "-" + i;
          const sub = [ex.tier === "weighted" ? `<b>${esc(ex.startWeight)}</b>` : "", item.note ? esc(item.note) : ""].filter(Boolean).join(" · ");
          return `<li class="ex">
            <div class="head">
              <div><span class="n">${i + 1}</span><a class="t" href="#/exercise/${ex.id}">${esc(ex.name)}</a></div>
              <div class="reps">${esc(reps)}</div>
            </div>
            ${sub ? `<div class="s">${sub}</div>` : ""}
            <div class="actions"><button class="btn ghost sm" data-toggle="${key}" aria-expanded="false">How to</button></div>
            <div class="howto" id="howto-${key}" hidden>${howToHtml(ex)}</div>
          </li>`;
        }).join("")}
      </ol>`;
    $app.querySelectorAll("[data-toggle]").forEach(b => b.addEventListener("click", () => {
      const panel = document.getElementById("howto-" + b.dataset.toggle);
      const open = panel.hidden;
      panel.hidden = !open;
      b.setAttribute("aria-expanded", String(open));
      b.textContent = open ? "Close" : "How to";
    }));
  }

  function renderExercises() {
    const list = EX.filter(e => e.category !== "rest");
    $app.innerHTML = `
      <h1>Exercises</h1>
      ${["bw", "tougher-bw", "weighted"].map(tier => `
        <div class="eyebrow">${TIER[tier]}</div>
        <ul class="rows">${list.filter(e => e.tier === tier).map(e => `<li><a class="row" href="#/exercise/${e.id}">
          <div><div class="t">${esc(e.name)}</div><div class="s">${CAT[e.category]}${e.tier === "weighted" ? " · " + esc(e.startWeight) : ""} · ${esc(e.reps)}</div></div>
          <span class="arrow">→</span></a></li>`).join("")}</ul>`).join("")}`;
  }

  function renderExercise(id) {
    const ex = exById[id];
    if (!ex) return renderNotFound();
    const usedIn = WO.filter(w => w.exercises.some(x => x.id === ex.id));
    $app.innerHTML = `
      <a class="back" href="#/exercises">← Exercises</a>
      <h1>${esc(ex.name)}</h1>
      <p class="detail">${CAT[ex.category]}${ex.tier === "weighted" ? ` · <b>${esc(ex.startWeight)}</b>` : ""} · ${esc(ex.reps)} · ${esc(ex.equipment)}</p>
      ${howToHtml(ex)}
      ${usedIn.length ? `<div class="eyebrow">Used in</div><ul class="rows">${usedIn.map(workoutRow).join("")}</ul>` : ""}`;
  }

  function renderNotFound() {
    $app.innerHTML = `<a class="back" href="#/">← Workouts</a><p class="empty">Not found.</p>`;
  }

  function route() {
    const [page, id] = location.hash.replace(/^#\/?/, "").split("/");
    window.scrollTo(0, 0);
    if (!page) return renderHome();
    if (page === "workout" && id) return renderWorkout(id);
    if (page === "exercises") return renderExercises();
    if (page === "exercise" && id) return renderExercise(id);
    renderNotFound();
  }
  window.addEventListener("hashchange", route);
  route();
})();
