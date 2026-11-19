(function () {
  "use strict";
  var SKILLS = window.SKILLS || [];
  var FREELANCE = window.FREELANCE || [];
  var SITE = window.SITE || { name: "SkillRoute", apiPath: "/api/vet" };
  var app = document.getElementById("app");
  var KEY = "skillroute-v2";

  // Points rules
  var FIRST_TRY = 10, SECOND_TRY = 5, PASS_BONUS = 50;
  function multiplier(streak) { return streak >= 5 ? 2 : streak >= 3 ? 1.5 : streak >= 2 ? 1.2 : 1; }

  // ---------- storage ----------
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(d) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {} }
  function cls(sid, i) { var d = load(); return d[sid + ":" + i] || { step: 0, answers: {}, points: 0, streak: 0, best: 0, done: false }; }
  function saveCls(sid, i, c) { var d = load(); d[sid + ":" + i] = c; save(d); }

  // ---------- helpers ----------
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function find(id) { for (var i = 0; i < SKILLS.length; i++) if (SKILLS[i].id === id) return SKILLS[i]; return null; }
  function totalPts(c) { return Math.round(c.points + (c.review && c.review.passed ? PASS_BONUS : 0)); }
  function skillStats(s) {
    var pts = 0, done = 0;
    s.modules.forEach(function (_, i) { var c = cls(s.id, i); pts += totalPts(c); if (c.done) done++; });
    return { pts: pts, done: done, pct: Math.round(done / s.modules.length * 100) };
  }
  function allStats() {
    var pts = 0, done = 0, best = 0;
    SKILLS.forEach(function (s) { s.modules.forEach(function (_, i) { var c = cls(s.id, i); pts += totalPts(c); if (c.done) done++; best = Math.max(best, c.best || 0); }); });
    return { pts: pts, done: done, best: best };
  }
  function toast(t) { var el = document.getElementById("toast"); el.textContent = t; el.classList.add("show"); clearTimeout(toast.t); toast.t = setTimeout(function () { el.classList.remove("show"); }, 1800); }
  function popAt(el, text) {
    var r = el.getBoundingClientRect(); var p = document.createElement("div");
    p.className = "pop"; p.textContent = text; p.style.left = (r.right - 64) + "px"; p.style.top = (r.top + r.height / 2 - 16) + "px";
    document.body.appendChild(p); setTimeout(function () { p.remove(); }, 900);
  }
  function setTitle(t) { document.title = t ? t + " | " + SITE.name : SITE.name + ": learn a digital skill from zero"; }
  function nav() {
    return '<header class="nav"><div class="wrap"><a class="logo" href="#/"><span class="logo-mark">S</span>' + esc(SITE.name) + "</a>" +
      '<span class="pts-pill" title="Total points"><span class="coin"></span>' + allStats().pts + "</span></div></header>";
  }

  // ---------- router ----------
  function route() {
    var p = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    var s = p[0] === "skill" ? find(p[1]) : null;
    if (s && p[2] === "class") {
      var i = Number(p[3]);
      if (Number.isInteger(i) && i >= 0 && i < s.modules.length) return player(s, i);
    }
    if (s) return skillPage(s, p[2] === "resources" ? "res" : "classes");
    home();
  }

  // ---------- home ----------
  var MATCH = [
    ["I like building things that work on screens", "frontend"],
    ["I want to know how apps work behind the scenes", "backend"],
    ["I care about how apps feel to use", "uiux"],
    ["I love making things look beautiful", "graphic-design"],
    ["I want to help businesses sell more", "digital-marketing"],
    ["I enjoy writing and explaining things", "content-writing"],
    ["I like numbers and finding patterns", "data-analysis"],
    ["I want AI to do boring work for me", "ai-automation"]
  ];
  function home() {
    setTitle("");
    var st = allStats();
    app.innerHTML = nav() +
      '<main class="wrap">' +
        '<section class="hero">' +
          "<div><h1>Learn a digital skill by doing it, not just reading about it.</h1>" +
          "<p>Pick a skill and go class by class. Every class teaches you step by step, asks you questions as you go, and ends with a real project that AI reviews for you.</p>" +
          '<div class="hero-steps"><span>📖 Learn in short steps</span><span>❓ Answer as you go</span><span>🔥 Build a score</span><span>🛠️ Ship a project</span></div></div>' +
          '<div class="matcher"><h2>Not sure where to start?</h2><p style="margin:0 0 .8rem;color:var(--muted)">Pick the one that sounds most like you.</p>' +
          '<div class="matcher-opts">' + MATCH.map(function (m, k) { return '<button type="button" data-match="' + k + '" aria-pressed="false">' + esc(m[0]) + "</button>"; }).join("") + "</div>" +
          '<div id="match-out"></div></div>' +
        "</section>" +
        '<section class="stats">' +
          '<div class="stat"><b>' + st.pts + "</b><span>Total points</span></div>" +
          '<div class="stat"><b>' + st.done + "</b><span>Classes finished</span></div>" +
          '<div class="stat"><b>' + st.best + "</b><span>Best streak</span></div>" +
        "</section>" +
        '<div class="sec-head"><h2>All skills</h2></div>' +
        '<section class="grid">' + SKILLS.map(function (s) {
          var k = skillStats(s);
          return '<a class="skill-card" id="card-' + s.id + '" href="#/skill/' + s.id + '" style="--c:' + s.color + '">' +
            '<span class="ico">' + s.icon + "</span><h3>" + esc(s.title) + "</h3><p>" + esc(s.tagline) + "</p>" +
            '<div class="meter"><i style="width:' + k.pct + '%"></i></div>' +
            '<div class="card-foot"><span>' + k.done + " of " + s.modules.length + " classes</span><span>" + k.pts + " pts</span></div></a>";
        }).join("") + "</section>" +
        '<footer class="foot">Your progress is saved in this browser.</footer>' +
      "</main>";

    app.querySelectorAll("[data-match]").forEach(function (b) {
      b.addEventListener("click", function () {
        app.querySelectorAll("[data-match]").forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
        b.setAttribute("aria-pressed", "true");
        var s = find(MATCH[+b.dataset.match][1]);
        app.querySelectorAll(".skill-card").forEach(function (c) { c.classList.remove("is-match"); });
        document.getElementById("card-" + s.id).classList.add("is-match");
        document.getElementById("match-out").innerHTML =
          '<div class="match-result" style="--c:' + s.color + '"><span class="ico">' + s.icon + "</span><div>Try <strong>" + esc(s.title) + "</strong>.<br>" +
          '<a href="#/skill/' + s.id + '">See the classes</a></div></div>';
      });
    });
  }

  // ---------- skill page ----------
  function skillPage(s, tab) {
    setTitle(s.title);
    var k = skillStats(s);
    var resCount = (s.resources || []).length;
    var classesHTML = '<div class="classes">' + s.modules.map(function (m, i) {
      var c = cls(s.id, i);
      var answered = Object.keys(c.answers).length, total = m.questions.length;
      var status = c.done ? '<span class="ok">✓ Finished</span>' : answered ? "In progress" : "Not started";
      var review = c.review ? (c.review.passed ? '<span class="ok">Project passed</span>' : "Project: try again") : "";
      var label = c.done ? "Review" : c.step > 0 ? "Continue" : "Start";
      return '<article class="class-card' + (c.done ? " done" : "") + '" style="--c:' + s.color + '">' +
        '<div class="class-num">' + (c.done ? "✓" : i + 1) + "</div>" +
        "<div><h3>Class " + (i + 1) + ": " + esc(m.title) + "</h3><p>" + esc(m.summary) + "</p>" +
        '<div class="class-meta"><span>' + status + "</span><span>" + total + " questions</span><span>" + totalPts(c) + " pts</span>" + (review ? "<span>" + review + "</span>" : "") + "</div></div>" +
        '<a class="btn" href="#/skill/' + s.id + "/class/" + i + '">' + label + "</a></article>";
    }).join("") + "</div>";

    function resRow(r) {
      var host = /mega\.nz/.test(r.url) ? "MEGA" : /docs\.google/.test(r.url) ? "Google Doc" : /drive\.google/.test(r.url) ? "Google Drive" : "Link";
      return '<a class="res" href="' + esc(r.url) + '" target="_blank" rel="noopener"><span class="ri">📁</span><span>' + esc(r.title) + "</span><small>" + host + " ↗</small></a>";
    }
    var resHTML = '<div class="res-list">' + (resCount ? s.resources.map(resRow).join("") : '<p class="empty-note">No extra resources yet.</p>') + "</div>" +
      '<h2 class="res-h">Start earning with your skill</h2><div class="res-list">' + FREELANCE.map(resRow).join("") + "</div>";

    app.innerHTML = nav() + '<main class="wrap" style="--c:' + s.color + '">' +
      '<a class="back" href="#/">← All skills</a>' +
      '<section class="skill-hero"><div class="ico">' + s.icon + "</div><h1>" + esc(s.title) + "</h1><p>" + esc(s.intro) + "</p>" +
        '<div class="chips"><span class="chip">' + s.modules.length + " classes</span><span class=\"chip\">" + esc(s.duration) + '</span><span class="chip">' + k.pts + ' pts earned</span><span class="chip">' + resCount + " resources</span></div></section>" +
      '<div class="tabs" role="tablist">' +
        '<button role="tab" aria-selected="' + (tab === "classes") + '" data-tab="classes">Classes</button>' +
        '<button role="tab" aria-selected="' + (tab === "res") + '" data-tab="res">Resource library</button></div>' +
      '<div id="tabpanel">' + (tab === "res" ? resHTML : classesHTML) + "</div>" +
      '<div style="height:3rem"></div></main>';

    app.querySelectorAll("[data-tab]").forEach(function (b) {
      b.addEventListener("click", function () {
        app.querySelectorAll("[data-tab]").forEach(function (x) { x.setAttribute("aria-selected", "false"); });
        b.setAttribute("aria-selected", "true");
        document.getElementById("tabpanel").innerHTML = b.dataset.tab === "res" ? resHTML : classesHTML;
      });
    });
  }

  // ---------- diagrams ----------
  function diagramHTML(d) {
    var h = '<div class="diagram"><h2>' + esc(d.title) + "</h2>";
    if (d.type === "flow") {
      h += '<div class="d-flow">' + d.nodes.map(function (n, i) { return (i ? '<span class="arr" aria-hidden="true">→</span>' : "") + '<button type="button" class="dnode">' + esc(n) + "</button>"; }).join("") + "</div>";
    } else if (d.type === "stack") {
      h += '<div class="d-stack">' + d.items.map(function (it, i) { return '<button type="button" class="dnode" style="--i:' + i + '"><b>' + esc(it[0]) + "</b><span>" + esc(it[1]) + "</span></button>"; }).join("") + "</div>";
    } else if (d.type === "nested") {
      var inner = "";
      for (var i = d.layers.length - 1; i >= 0; i--) {
        inner = i === d.layers.length - 1
          ? '<div class="dnode core"><b>' + esc(d.layers[i]) + "</b></div>"
          : '<div class="dnode"><b>' + esc(d.layers[i]) + "</b>" + inner + "</div>";
      }
      h += '<div class="d-nested">' + inner + "</div>";
    } else if (d.type === "compare") {
      h += '<div class="d-compare">' + [d.left, d.right].map(function (side) { return '<button type="button" class="dnode"><h3>' + esc(side.h) + "</h3><ul>" + side.items.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></button>"; }).join("") + "</div>";
    } else if (d.type === "funnel") {
      var n = d.items.length;
      h += '<div class="d-funnel">' + d.items.map(function (it, i) { return '<button type="button" class="dnode" style="--i:' + i + ";width:" + (100 - i * (50 / Math.max(1, n - 1))) + '%">' + esc(it) + "</button>"; }).join("") + "</div>";
    } else if (d.type === "cycle") {
      var cnt = d.nodes.length, R = 120, cx = 210, cy = 160;
      var svg = '<svg viewBox="0 0 420 320" role="img" aria-label="' + esc(d.title) + '"><circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="none" stroke="var(--c)" stroke-width="3" stroke-dasharray="8 8"/>';
      d.nodes.forEach(function (nd, i) {
        var a = -Math.PI / 2 + i * 2 * Math.PI / cnt, x = cx + R * Math.cos(a), y = cy + R * Math.sin(a), w = Math.max(90, nd.length * 9 + 24);
        svg += '<g class="dnode" tabindex="0" role="button"><rect x="' + (x - w / 2) + '" y="' + (y - 20) + '" width="' + w + '" height="40" rx="12"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle">' + esc(nd) + "</text></g>";
      });
      h += '<div class="d-cycle">' + svg + '</svg><p style="text-align:center;color:var(--muted);margin:.4rem 0 0">↻ It keeps going round</p></div>';
    }
    h += '<div class="d-hint"><span>Tap any part to highlight it.</span><button type="button" class="btn soft" data-walk>▶ Walk me through it</button></div></div>';
    return h;
  }
  function bindDiagram(root) {
    var nodes = Array.prototype.slice.call(root.querySelectorAll(".dnode"));
    if (root.querySelector(".d-nested")) nodes = Array.prototype.slice.call(root.querySelectorAll(".d-nested .dnode"));
    function act(n) { nodes.forEach(function (x) { x.classList.remove("active"); }); if (n) n.classList.add("active"); }
    nodes.forEach(function (n) {
      n.addEventListener("click", function (e) { e.stopPropagation(); act(n); });
      n.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); act(n); } });
    });
    var walk = root.querySelector("[data-walk]");
    if (walk) walk.addEventListener("click", function () {
      var k = 0; walk.disabled = true;
      (function next() { if (k < nodes.length) { act(nodes[k++]); setTimeout(next, 900); } else { act(null); walk.disabled = false; } })();
    });
  }

  // ---------- class player ----------
  function buildSteps(m) {
    var steps = [{ t: "intro" }], L = m.lesson, qs = m.questions.map(function (_, i) { return { t: "q", i: i }; });
    L.forEach(function (p, i) {
      steps.push({ t: "text", i: i });
      if (i === 1) { steps.push({ t: "diagram" }); if (qs.length) steps.push(qs.shift()); }
      else if (i >= 2 && qs.length) steps.push(qs.shift());
    });
    while (qs.length) steps.push(qs.shift());
    steps.push({ t: "recap" }, { t: "finish" });
    return steps;
  }

  function player(s, ci) {
    var m = s.modules[ci];
    setTitle("Class " + (ci + 1) + ": " + m.title);
    var steps = buildSteps(m);
    var c = cls(s.id, ci);
    if (c.step >= steps.length) c.step = steps.length - 1;

    app.innerHTML =
      '<div class="player" style="--c:' + s.color + '">' +
        '<div class="p-top"><div class="p-top-in">' +
          '<a class="x" href="#/skill/' + s.id + '" aria-label="Leave class">✕</a>' +
          '<div class="p-bar" role="progressbar" aria-label="Class progress"><i id="bar"></i></div>' +
          '<div class="score"><span class="streak" id="streak" title="Answer streak"></span><span class="pts-pill" id="score"><span class="coin"></span><span id="score-n">0</span></span></div>' +
        "</div></div>" +
        '<div class="p-body"><div class="stage" id="stage"></div></div>' +
        '<div class="p-foot"><div class="p-foot-in"><button class="btn soft" id="prev" type="button">Back</button><button class="btn big" id="next" type="button">Continue</button></div></div>' +
      "</div>";

    var stage = document.getElementById("stage"), nextBtn = document.getElementById("next"), prevBtn = document.getElementById("prev");
    var shownScore = totalPts(c);

    function updateTop() {
      document.getElementById("bar").style.width = Math.round(c.step / (steps.length - 1) * 100) + "%";
      var target = totalPts(c), el = document.getElementById("score-n");
      var start = shownScore, t0 = performance.now();
      (function tick(now) {
        var k = Math.min(1, (now - t0) / 500); el.textContent = Math.round(start + (target - start) * k);
        if (k < 1) requestAnimationFrame(tick); else shownScore = target;
      })(t0);
      var sEl = document.getElementById("streak"); var mul = multiplier(c.streak);
      sEl.dataset.on = c.streak >= 2 ? "1" : "0";
      sEl.textContent = "🔥 " + c.streak + (mul > 1 ? " ×" + mul : "");
    }

    function persist() { saveCls(s.id, ci, c); }

    function render() {
      var st = steps[c.step];
      prevBtn.style.visibility = c.step === 0 ? "hidden" : "visible";
      document.querySelector(".p-foot").style.display = st.t === "finish" ? "none" : "";
      nextBtn.style.display = st.t === "finish" ? "none" : "";
      nextBtn.disabled = false;
      nextBtn.textContent = st.t === "intro" ? "Start class" : "Continue";
      var h = "";
      if (st.t === "intro") {
        h = '<p class="kicker">' + s.icon + " " + esc(s.title) + " · Class " + (ci + 1) + " of " + s.modules.length + "</p>" +
          "<h1>" + esc(m.title) + '</h1><p class="lead">' + esc(m.summary) + "</p>" +
          '<div class="intro-card"><strong>By the end of this class you’ll know:</strong><ul>' + m.keyPoints.map(function (k) { return "<li>" + esc(k) + "</li>"; }).join("") + "</ul></div>" +
          '<div class="scoring"><div><b>+' + FIRST_TRY + "</b>first try</div><div><b>×2</b>streak bonus</div><div><b>+" + PASS_BONUS + "</b>project passed</div></div>";
      } else if (st.t === "text") {
        h = '<p class="kicker">📖 Lesson · part ' + (st.i + 1) + " of " + m.lesson.length + '</p><p class="lead">' + esc(m.lesson[st.i]) + "</p>";
      } else if (st.t === "diagram") {
        h = '<p class="kicker">🧭 See it</p>' + diagramHTML(m.diagram);
      } else if (st.t === "q") {
        h = questionHTML(st.i);
      } else if (st.t === "recap") {
        h = '<p class="kicker">✅ Recap</p><h1>Remember this</h1><div class="recap">' + m.keyPoints.map(function (k) { return '<div><span class="tick">✓</span><span>' + esc(k) + "</span></div>"; }).join("") + "</div>";
      } else if (st.t === "finish") {
        if (!c.done) { c.done = true; persist(); }
        h = finishHTML();
      }
      stage.innerHTML = '<div class="step">' + h + "</div>";
      if (st.t === "diagram") bindDiagram(stage);
      if (st.t === "q") bindQuestion(st.i);
      if (st.t === "finish") bindFinish();
      updateTop();
      window.scrollTo(0, 0);
    }

    function questionHTML(qi) {
      var q = m.questions[qi], a = c.answers[qi];
      var h = '<p class="kicker">❓ Question ' + (qi + 1) + " of " + m.questions.length + '</p><h2 class="q-prompt">' + esc(q.q) + '</h2><div class="opts">' +
        q.options.map(function (o, k) {
          var cl = "";
          if (a) { if (k === q.answer && (a.correct || a.tries >= 2)) cl = " right"; else if (a.picked && a.picked.indexOf(k) !== -1) cl = " wrong"; }
          var locked = a && (a.correct || a.tries >= 2);
          return '<button type="button" class="opt' + cl + '" data-k="' + k + '"' + (locked || (a && a.picked && a.picked.indexOf(k) !== -1) ? " disabled" : "") + '><span class="key">' + "ABCD"[k] + "</span>" + esc(o) + "</button>";
        }).join("") + '</div><div id="fb" aria-live="polite">' + (a ? feedbackHTML(q, a) : "") + "</div>";
      return h;
    }
    function feedbackHTML(q, a) {
      if (a.correct) return '<div class="feedback good"><b>' + (a.tries === 1 ? "Correct! +" + a.pts + " pts" : "Got it on the second try. +" + a.pts + " pts") + "</b>" + esc(q.explain) + "</div>";
      if (a.tries >= 2) return '<div class="feedback bad"><b>The answer is ' + "ABCD"[q.answer] + ".</b>" + esc(q.explain) + "</div>";
      return '<div class="feedback bad"><b>Not quite. Try once more for ' + SECOND_TRY + " pts.</b>Think about what the lesson said.</div>";
    }
    function bindQuestion(qi) {
      var q = m.questions[qi];
      var a = c.answers[qi];
      nextBtn.disabled = !(a && (a.correct || a.tries >= 2));
      stage.querySelectorAll(".opt").forEach(function (b) {
        b.addEventListener("click", function () {
          var k = +b.dataset.k;
          a = c.answers[qi] || { tries: 0, picked: [], correct: false, pts: 0 };
          if (a.correct || a.tries >= 2) return;
          a.tries++; a.picked.push(k);
          if (k === q.answer) {
            a.correct = true;
            c.streak++; c.best = Math.max(c.best || 0, c.streak);
            a.pts = Math.round((a.tries === 1 ? FIRST_TRY : SECOND_TRY) * multiplier(c.streak));
            c.points += a.pts;
            popAt(b, "+" + a.pts);
            if (c.streak === 3 || c.streak === 5) toast("🔥 " + c.streak + " in a row! Points ×" + multiplier(c.streak));
          } else {
            c.streak = 0;
          }
          c.answers[qi] = a; persist();
          var fresh = document.createElement("div"); fresh.innerHTML = questionHTML(qi);
          stage.querySelector(".step").innerHTML = fresh.innerHTML;
          bindQuestion(qi); updateTop();
          if (a.correct || a.tries >= 2) nextBtn.focus();
        });
      });
    }

    function finishHTML() {
      var total = m.questions.length, correct = 0, firstTry = 0;
      for (var k = 0; k < total; k++) { var a = c.answers[k]; if (a && a.correct) { correct++; if (a.tries === 1) firstTry++; } }
      var acc = total ? Math.round(correct / total * 100) : 0;
      var stars = firstTry === total ? 3 : correct === total ? 2 : correct > 0 ? 1 : 0;
      var a = m.assignment;
      var last = ci === s.modules.length - 1;
      return '<div class="result-hero"><div class="stars">' + [0, 1, 2].map(function (x) { return '<span class="' + (x < stars ? "" : "off") + '">⭐</span>'; }).join("") + "</div>" +
        '<div class="big-score">' + totalPts(c) + "</div><div>class points</div>" +
        '<div class="result-grid"><div><b>' + correct + "/" + total + "</b><span>correct</span></div><div><b>" + acc + "%</b><span>accuracy</span></div><div><b>" + (c.best || 0) + "</b><span>best streak</span></div></div></div>" +
        '<section class="task"><span class="bonus">🪙 +' + PASS_BONUS + " pts when it passes</span><h2>Your project</h2><p>" + esc(a.task) + "</p>" +
        "<h3>What to submit</h3><ul>" + a.deliverables.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" +
        "<h3>What the AI reviewer checks</h3><ul>" + a.criteria.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" +
        '<form class="form" id="form" novalidate>' +
          '<label>Link to your work <span class="hint">GitHub, live site, Google Drive, Canva or Notion link</span><input type="url" name="link" placeholder="https://"></label>' +
          '<label class="drop" id="drop"><input type="file" name="file" accept="image/png,image/jpeg,image/webp,image/gif,application/pdf,.txt,.md,.html,.css,.js,.ts,.py,.sql,.json,.csv"><span id="drop-t">📎 Tap to upload a screenshot, PDF or code file (max 3 MB)</span></label>' +
          '<label>Explain what you built <span class="hint">What you made, how you made it, and what you got stuck on</span><textarea name="notes"></textarea></label>' +
          '<div><button class="btn big" type="submit">Send for AI review</button></div>' +
        '</form><div id="out" aria-live="polite">' + (c.review ? reviewHTML(c.review) : "") + "</div></section>" +
        '<div style="display:flex;gap:.8rem;flex-wrap:wrap;margin-top:1.4rem">' +
          (last ? '<a class="btn soft big" href="#/skill/' + s.id + '">Back to all classes</a>' : '<a class="btn big" href="#/skill/' + s.id + "/class/" + (ci + 1) + '">Next class →</a><a class="btn soft big" href="#/skill/' + s.id + '">All classes</a>') +
        "</div>";
    }
    function reviewHTML(r) {
      return '<div class="review' + (r.passed ? " pass" : "") + '"><p class="verdict"><span>' + (r.passed ? "✅ Passed! +" + PASS_BONUS + " pts" : "🔁 Not yet. Improve it and resubmit.") + "</span><span>" + r.score + "/100</span></p><p>" + esc(r.feedback) + "</p>" +
        (r.strengths && r.strengths.length ? "<h4>What you did well</h4><ul>" + r.strengths.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : "") +
        (r.improvements && r.improvements.length ? "<h4>What to improve</h4><ul>" + r.improvements.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : "") + "</div>";
    }
    function bindFinish() {
      var form = document.getElementById("form"), out = document.getElementById("out"), fileIn = form.file, dropT = document.getElementById("drop-t"), drop = document.getElementById("drop");
      fileIn.addEventListener("change", function () { dropT.textContent = fileIn.files[0] ? "📎 " + fileIn.files[0].name : "📎 Tap to upload a screenshot, PDF or code file (max 3 MB)"; });
      ["dragover", "dragenter"].forEach(function (ev) { drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.add("over"); }); });
      ["dragleave", "drop"].forEach(function (ev) { drop.addEventListener(ev, function () { drop.classList.remove("over"); }); });
      drop.addEventListener("drop", function (e) { e.preventDefault(); if (e.dataTransfer.files[0]) { fileIn.files = e.dataTransfer.files; fileIn.dispatchEvent(new Event("change")); } });

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var link = form.link.value.trim(), notes = form.notes.value.trim(), file = fileIn.files[0];
        if (!link && !file && notes.length < 40) { out.innerHTML = '<p class="msg warn">Add a link, upload a file, or describe what you built in a few sentences.</p>'; return; }
        if (link && !/^https?:\/\//i.test(link)) { out.innerHTML = '<p class="msg warn">Links must start with http:// or https://</p>'; return; }
        var btn = form.querySelector("button[type=submit]");
        (file ? readFile(file) : Promise.resolve(null)).then(function (fp) {
          btn.disabled = true; btn.innerHTML = '<span class="loader"></span> Reviewing…';
          out.innerHTML = '<p class="msg">The AI reviewer is checking your work. This takes about 15 to 30 seconds.</p>';
          return fetch(SITE.apiPath, { method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ skill: s.title, module: m.title, task: m.assignment.task, deliverables: m.assignment.deliverables, criteria: m.assignment.criteria, link: link, notes: notes, file: fp }) })
            .then(function (res) { return res.json().catch(function () { return { error: "The review service sent back something unexpected (status " + res.status + ")." }; }).then(function (d) { if (!res.ok || d.error) throw new Error(d.error || "Review failed (" + res.status + ")."); return d; }); })
            .then(function (d) {
              var wasPassed = c.review && c.review.passed;
              c.review = { passed: !!d.passed || !!wasPassed, score: Math.round(+d.score || 0), feedback: d.feedback || "", strengths: d.strengths || [], improvements: d.improvements || [] };
              if (!d.passed && wasPassed) c.review.feedback = "Your earlier submission already passed, so your bonus is safe. " + c.review.feedback;
              persist(); out.innerHTML = reviewHTML(c.review); updateTop();
              if (d.passed && !wasPassed) toast("🎉 Project passed! +" + PASS_BONUS + " pts");
            });
        }).catch(function (err) {
          out.innerHTML = '<p class="msg warn">' + esc(err.message) + (location.protocol === "file:" ? " The reviewer only works once the site is online." : "") + "</p>";
        }).then(function () { btn.disabled = false; btn.textContent = "Send for AI review"; });
      });
    }

    nextBtn.addEventListener("click", function () { if (c.step < steps.length - 1) { c.step++; persist(); render(); } });
    prevBtn.addEventListener("click", function () { if (c.step > 0) { c.step--; persist(); render(); } });
    document.onkeydown = function (e) {
      if (!document.getElementById("next")) { document.onkeydown = null; return; }
      if (e.target.closest && e.target.closest("input,textarea")) return;
      var st = steps[c.step];
      if (st.t === "q" && /^[1-4a-d]$/i.test(e.key)) {
        var idx = isNaN(+e.key) ? "abcd".indexOf(e.key.toLowerCase()) : +e.key - 1;
        var b = stage.querySelector('.opt[data-k="' + idx + '"]'); if (b && !b.disabled) b.click();
      } else if (e.key === "Enter" && !nextBtn.disabled && nextBtn.style.display !== "none" && !(e.target.closest && e.target.closest("button,a"))) {
        nextBtn.click();
      }
    };
    render();
  }

  // ---------- file reading ----------
  function readFile(file) {
    var isImg = /^image\/(png|jpeg|gif|webp)$/.test(file.type), isPdf = file.type === "application/pdf";
    return new Promise(function (resolve, reject) {
      var fr = new FileReader();
      fr.onerror = function () { reject(new Error("That file couldn’t be read. Try another one.")); };
      if (isImg || isPdf) {
        if (file.size > 3 * 1024 * 1024) return reject(new Error("That file is over 3 MB. Upload a smaller screenshot, or share a link instead."));
        fr.onload = function () { resolve({ name: file.name, type: file.type, kind: isImg ? "image" : "pdf", data: String(fr.result).split(",")[1] }); };
        fr.readAsDataURL(file);
      } else if (file.size <= 400 * 1024) {
        fr.onload = function () { var t = String(fr.result); if (t.indexOf("\u0000") !== -1) reject(new Error("That file type can’t be read. Upload an image, PDF or code file, or share a link.")); else resolve({ name: file.name, type: file.type || "text/plain", kind: "text", data: t }); };
        fr.readAsText(file);
      } else reject(new Error("Code and text files must be under 400 KB. For bigger projects, share a GitHub link."));
    });
  }

  window.addEventListener("hashchange", route);
  route();
})();
