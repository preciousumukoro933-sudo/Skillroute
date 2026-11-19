(function () {
  "use strict";
  const SKILLS = window.SKILLS || [];
  const SITE = window.SITE || { name: "SkillRoute", apiPath: "/api/vet" };
  const app = document.getElementById("app");
  const KEY = "skillroute-progress-v1";

  document.getElementById("brand-name").textContent = SITE.name;

  // ---------- helpers ----------
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } };
  const save = (p) => { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) { /* storage blocked */ } };
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const findSkill = (id) => SKILLS.find((s) => s.id === id);
  const doneCount = (skill, p) => skill.modules.filter((_, i) => p[skill.id + ":" + i] && p[skill.id + ":" + i].passed).length;
  const list = (items) => "<ul>" + items.map((x) => "<li>" + esc(x) + "</li>").join("") + "</ul>";
  const rail = (s, done) => '<div class="rail" style="--c:' + s.color + '" aria-hidden="true">' +
    s.modules.map((_, i) => '<span class="stop' + (i < done ? " done" : "") + '"></span>').join("") + "</div>";

  function setTitle(t) { document.title = t ? t + " | " + SITE.name : SITE.name + ": learn a digital skill from zero"; }

  // ---------- router ----------
  function route() {
    const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    if (parts[0] === "skill" && parts[1]) {
      const sk = findSkill(parts[1]);
      if (!sk) return notFound();
      if (parts[2] === "lesson") {
        const i = Number(parts[3]);
        if (!(Number.isInteger(i) && i >= 0 && i < sk.modules.length)) return notFound();
        renderLesson(sk, i);
      } else {
        renderSkill(sk);
      }
    } else if (parts[0] === "progress") {
      renderProgress();
    } else {
      renderHome();
    }
    window.scrollTo(0, 0);
    app.focus({ preventScroll: true });
  }

  // ---------- pages ----------
  function renderHome() {
    setTitle("");
    const p = load();
    app.innerHTML =
      '<section class="hero">' +
        "<h1>Pick one skill. Ride it from zero to building real things.</h1>" +
        '<p class="lede">Each skill is a route with four stops. At every stop you read a short lesson, watch a video, then build something. Upload what you built and the AI reviewer tells you if you’re ready for the next stop.</p>' +
      "</section>" +
      '<h2 class="section-h">Choose your route</h2>' +
      '<ul class="lines">' +
      SKILLS.map((s) => {
        const d = doneCount(s, p);
        return '<li><a class="line-row" href="#/skill/' + s.id + '" style="--c:' + s.color + '">' +
          '<span class="line-name">' + esc(s.title) + "</span>" +
          '<span class="line-tag">' + esc(s.tagline) + "</span>" +
          rail(s, d) +
          '<span class="line-meta">' + (d ? d + " of " + s.modules.length + " stops passed" : s.modules.length + " stops, about " + esc(s.duration)) + "</span>" +
        "</a></li>";
      }).join("") +
      "</ul>";
  }

  function renderSkill(s) {
    setTitle(s.title);
    const p = load();
    const d = doneCount(s, p);
    app.innerHTML =
      '<nav class="crumbs"><a href="#/">All skills</a></nav>' +
      '<section class="skill-head" style="--c:' + s.color + '">' +
        "<h1>" + esc(s.title) + "</h1>" +
        '<p class="lede">' + esc(s.intro) + "</p>" +
        '<dl class="facts">' +
          "<div><dt>Starting point</dt><dd>Complete beginner</dd></div>" +
          "<div><dt>Time</dt><dd>" + esc(s.duration) + "</dd></div>" +
          "<div><dt>You’ll finish with</dt><dd>" + esc(s.outcome) + "</dd></div>" +
        "</dl>" +
      "</section>" +
      '<h2 class="section-h">Course outline</h2>' +
      '<ol class="route" style="--c:' + s.color + '">' +
      s.modules.map((m, i) => {
        const r = p[s.id + ":" + i];
        const status = r && r.passed ? "Passed with " + r.score + "/100" : r ? "Reviewed: needs another try" : "Not started";
        return '<li class="station' + (r && r.passed ? " is-done" : "") + '"><a href="#/skill/' + s.id + "/lesson/" + i + '">' +
          '<span class="station-num">Stop ' + (i + 1) + "</span>" +
          '<span class="station-title">' + esc(m.title) + "</span>" +
          '<span class="station-sum">' + esc(m.summary) + "</span>" +
          '<span class="station-status">' + status + "</span>" +
        "</a></li>";
      }).join("") +
      "</ol>" +
      '<p class="progress-line">' + d + " of " + s.modules.length + " stops passed." + (d === s.modules.length ? " You’ve finished this route. Keep building." : "") + "</p>";
  }

  function renderLesson(s, i) {
    const m = s.modules[i];
    setTitle(m.title + " (" + s.title + ")");
    const r = load()[s.id + ":" + i];
    const v = m.video;
    const embed = v.videoId
      ? '<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/' + esc(v.videoId) + '" title="' + esc(m.title) + ' video" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>'
      : "";
    const last = i === s.modules.length - 1;

    app.innerHTML =
      '<nav class="crumbs"><a href="#/">All skills</a> / <a href="#/skill/' + s.id + '">' + esc(s.title) + "</a></nav>" +
      '<article class="lesson" style="--c:' + s.color + '">' +
        '<p class="stop-label">Stop ' + (i + 1) + " of " + s.modules.length + "</p>" +
        "<h1>" + esc(m.title) + "</h1>" +
        '<div class="prose">' + m.lesson.map((x) => "<p>" + esc(x) + "</p>").join("") + "</div>" +
        '<aside class="keypoints"><h2>Remember this</h2>' + list(m.keyPoints) + "</aside>" +
        '<section class="watch"><h2>Watch</h2><p>' + esc(v.note) + "</p>" + embed +
          '<a class="btn ghost" href="https://www.youtube.com/results?search_query=' + encodeURIComponent(v.query) + '" target="_blank" rel="noopener">Find “' + esc(v.query) + "” on YouTube</a>" +
        "</section>" +
        '<section class="task" id="task">' +
          "<h2>Your assignment</h2>" +
          '<p class="task-text">' + esc(m.assignment.task) + "</p>" +
          "<h3>What to submit</h3>" + list(m.assignment.deliverables) +
          "<h3>What the reviewer checks</h3>" + list(m.assignment.criteria) +
          '<form id="submit-form" novalidate>' +
            '<label>Link to your work <span class="hint">GitHub repo, live site, Google Drive, Canva or Notion share link</span><input type="url" name="link" placeholder="https://"></label>' +
            '<label>Upload a file <span class="hint">Screenshot, PDF, or a code/text file. Images and PDFs up to 3 MB.</span><input type="file" name="file" accept="image/png,image/jpeg,image/webp,image/gif,application/pdf,.txt,.md,.html,.css,.js,.ts,.py,.sql,.json,.csv,.java,.php"></label>' +
            '<label>Explain what you built <span class="hint">What you made, how you made it, and anything you got stuck on</span><textarea name="notes"></textarea></label>' +
            '<div><button class="btn" type="submit">Send for review</button></div>' +
          "</form>" +
          '<div id="result" aria-live="polite">' + (r ? resultHTML(r) : "") + "</div>" +
        "</section>" +
        '<nav class="pager">' +
          (i > 0 ? '<a href="#/skill/' + s.id + "/lesson/" + (i - 1) + '">Previous stop</a>' : "<span></span>") +
          (last ? '<a href="#/skill/' + s.id + '">Back to the route</a>' : '<a href="#/skill/' + s.id + "/lesson/" + (i + 1) + '">Next stop</a>') +
        "</nav>" +
      "</article>";
    bindForm(s, i);
  }

  function renderProgress() {
    setTitle("My progress");
    const p = load();
    app.innerHTML =
      "<h1>My progress</h1>" +
      '<p class="lede">Your progress is saved in this browser. If you switch phones or clear your browser data, it starts fresh.</p>' +
      '<ul class="prog-list">' +
      SKILLS.map((s) => {
        const d = doneCount(s, p);
        return '<li><a href="#/skill/' + s.id + '"><strong>' + esc(s.title) + "</strong></a>" + rail(s, d) + "<span>" + d + " of " + s.modules.length + " stops passed</span></li>";
      }).join("") +
      "</ul>" +
      '<p><button class="btn ghost" id="reset" type="button">Clear my progress</button></p>';
    document.getElementById("reset").addEventListener("click", () => {
      if (confirm("Clear all your progress and review results?")) { save({}); renderProgress(); }
    });
  }

  function notFound() {
    setTitle("Page not found");
    app.innerHTML = "<h1>That page doesn’t exist.</h1><p><a href=\"#/\">Go back to all skills</a></p>";
  }

  // ---------- submissions ----------
  function resultHTML(r) {
    return '<div class="result ' + (r.passed ? "pass" : "retry") + '">' +
      '<p class="verdict"><span>' + (r.passed ? "Passed. On to the next stop." : "Not yet. Improve it and resubmit.") + '</span><span class="score">' + r.score + "/100</span></p>" +
      "<p>" + esc(r.feedback) + "</p>" +
      (r.strengths && r.strengths.length ? "<h3>What you did well</h3>" + list(r.strengths) : "") +
      (r.improvements && r.improvements.length ? "<h3>What to improve</h3>" + list(r.improvements) : "") +
    "</div>";
  }

  function readFile(file) {
    const isImg = /^image\/(png|jpeg|gif|webp)$/.test(file.type);
    const isPdf = file.type === "application/pdf";
    return new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onerror = () => reject(new Error("That file couldn’t be read. Try another one."));
      if (isImg || isPdf) {
        if (file.size > 3 * 1024 * 1024) return reject(new Error("That file is over 3 MB. Upload a smaller screenshot, or share a link instead."));
        fr.onload = () => resolve({ name: file.name, type: file.type, kind: isImg ? "image" : "pdf", data: String(fr.result).split(",")[1] });
        fr.readAsDataURL(file);
      } else if (file.size <= 400 * 1024) {
        fr.onload = () => {
          const t = String(fr.result);
          if (t.indexOf("\u0000") !== -1) reject(new Error("That file type can’t be read. Upload an image, a PDF, or a code/text file, or share a GitHub link."));
          else resolve({ name: file.name, type: file.type || "text/plain", kind: "text", data: t });
        };
        fr.readAsText(file);
      } else {
        reject(new Error("Code and text files must be under 400 KB. For bigger projects, share a GitHub link instead."));
      }
    });
  }

  function bindForm(s, i) {
    const m = s.modules[i];
    const form = document.getElementById("submit-form");
    const out = document.getElementById("result");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const link = form.link.value.trim();
      const notes = form.notes.value.trim();
      const file = form.file.files[0];
      if (!link && !file && notes.length < 40) {
        out.innerHTML = '<p class="msg warn">Add a link, upload a file, or describe what you built in at least a few sentences.</p>';
        return;
      }
      if (link && !/^https?:\/\//i.test(link)) {
        out.innerHTML = '<p class="msg warn">Links must start with http:// or https://</p>';
        return;
      }
      let filePayload = null;
      if (file) {
        try { filePayload = await readFile(file); }
        catch (err) { out.innerHTML = '<p class="msg warn">' + esc(err.message) + "</p>"; return; }
      }
      const btn = form.querySelector("button[type=submit]");
      btn.disabled = true;
      btn.textContent = "Reviewing your work…";
      out.innerHTML = '<p class="msg">The reviewer is checking your work. This usually takes 15 to 30 seconds.</p>';
      try {
        const res = await fetch(SITE.apiPath, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            skill: s.title, module: m.title, task: m.assignment.task,
            deliverables: m.assignment.deliverables, criteria: m.assignment.criteria,
            link: link, notes: notes, file: filePayload
          })
        });
        const data = await res.json().catch(() => ({ error: "The review service sent back something unexpected (status " + res.status + ")." }));
        if (!res.ok || data.error) throw new Error(data.error || "Review failed with status " + res.status + ".");
        const rec = {
          passed: !!data.passed, score: Math.round(Number(data.score) || 0), feedback: data.feedback || "",
          strengths: data.strengths || [], improvements: data.improvements || [], at: new Date().toISOString()
        };
        const p = load();
        p[s.id + ":" + i] = rec;
        save(p);
        out.innerHTML = resultHTML(rec);
      } catch (err) {
        const local = location.protocol === "file:" ? " The reviewer only works once the site is deployed online." : "";
        out.innerHTML = '<p class="msg warn">' + esc(err.message) + local + "</p>";
      } finally {
        btn.disabled = false;
        btn.textContent = "Send for review";
      }
    });
  }

  window.addEventListener("hashchange", route);
  route();
})();
