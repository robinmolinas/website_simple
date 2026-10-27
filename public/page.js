/* ============================================================================
   page.js: the bespoke behaviour for robin-companion.

   The engine (scrollcraft.js) is untouched. Everything here reads the act
   progress the engine publishes (act.p, --sc-p) and the pointer, and drives
   markup of this page's own naming:

     the companion   one character with a life across the page: wakes in the
                     hero, travels to the corner, is the menu, steps into the
                     Work stage to deal the cards, arrives beside the ask
     the deal        seven cards dealt from behind his head into a stack
     the deep dives  one <dialog> per project

   Every movement has a cause the visitor can see: scroll, pointer, or him.
   ========================================================================== */
(function () {
  'use strict';

  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };

  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = matchMedia('(hover: hover) and (pointer: fine)');
  var small = matchMedia('(max-width: 860px)');
  var clamp = function (x, a, b) { return x < a ? a : x > b ? b : x; };
  var clamp01 = function (x) { return clamp(x, 0, 1); };
  var smooth = function (x) { x = clamp01(x); return x * x * (3 - 2 * x); };
  var lerp = function (a, b, t) { return a + (b - a) * t; };
  var q = function (s, r) { return (r || document).querySelector(s); };
  var qa = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  q('#year').textContent = String(new Date().getFullYear());

  // ---- engine --------------------------------------------------------------
  // Under reduced motion the deck is a static column, so a scroll-driven count
  // would sit on an arbitrary number. Show the real figure and let the engine
  // ignore it.
  if (reduce) qa('[data-sc-count]').forEach(function (el) {
    el.textContent = el.getAttribute('data-sc-count').split(/\s+/)[1] || el.textContent;
    el.removeAttribute('data-sc-count');
  });
  var sc = ScrollCraft.mount(document.body);
  var actById = {};
  sc.acts.forEach(function (a) { actById[a.el.id] = a; });
  var heroAct = actById.top, manAct = actById.manifesto, workAct = actById.work, closeAct = actById.contact;
  var heroStage = q('#top .hero'), manStage = q('#manifesto .mf'), dealStage = q('#work .deal');

  requestAnimationFrame(function () { document.documentElement.classList.add('is-loaded'); });

  // ---- videos: a loop only plays while it is on screen --------------------
  function ensureSrc(v) { if (!v.src && v.dataset.src) v.src = v.dataset.src; }
  function play(v) {
    if (reduce) return;
    ensureSrc(v);
    if (v.paused) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
  }
  function pause(v) { if (!v.paused) v.pause(); }
  if ('IntersectionObserver' in window && !reduce) {
    var vio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) play(e.target); else pause(e.target); });
    }, { rootMargin: '12% 0px' });
    qa('video[data-src]').forEach(function (v) {
      if (v.closest('dialog') || v.closest('.card')) return;   // dialogs and cards drive their own
      vio.observe(v);
    });
  }

  // ---- figures --------------------------------------------------------------
  var fixedEl = q('#companion');
  var disc = q('.companion__disc', fixedEl);
  var fixedFig = q('.figure', fixedEl);
  var figs = { hero: q('[data-figure="hero"]'), manifesto: q('[data-figure="manifesto"]'), deal: q('[data-figure="deal"]'), close: q('[data-figure="close"]') };
  var allFigs = [figs.hero, figs.manifesto, figs.deal, figs.close, fixedFig];
  var CW = 360;   // the fixed companion's base box, matches --cw

  var poses = allFigs.map(function (f) {
    return { fig: f, el: q('.figure__pose', f), canvas: q('canvas', f), rx: 0, ry: 0, drawn: -1, dw: 0 };
  });

  function cornerRect() {
    var s = small.matches ? 56 : 72, pad = small.matches ? 14 : 28;
    return { x: innerWidth - pad - s, y: innerHeight - pad - s, s: s };
  }
  // A stage figure's rect as it will be once its act's pin has begun. Before
  // the pin the sticky stage sits (act.top - scrollY) lower than that.
  function seatOf(fig, act) {
    var r = rectOf(fig);
    if (scrollY < act.top) r.y -= act.top - scrollY;
    return r;
  }
  function rectOf(fig) { var r = fig.getBoundingClientRect(); return { x: r.left, y: r.top, s: r.width }; }

  var mode = 'hero', modeT = 0, lastStage = '';
  function setStage(name) {
    if (lastStage !== name) {
      for (var k in figs) figs[k].classList.toggle('is-on', k === name);
      lastStage = name;
    }
    fixedEl.classList.remove('is-on');
  }
  function setFixed(x, y, s, r) {
    if (lastStage !== '') { for (var k in figs) figs[k].classList.remove('is-on'); lastStage = ''; }
    fixedEl.classList.add('is-on');
    fixedEl.style.transform = 'translate3d(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px,0) scale(' + (s / CW).toFixed(4) + ')';
    fixedFig.style.borderRadius = (r * 50).toFixed(1) + '%';
    disc.style.opacity = r.toFixed(2);
    fixedState = Math.round(x) + ',' + Math.round(y) + ',' + Math.round(s) + ',' + Math.round(r * 10);
  }
  var fixedState = '';
  function travel(a, b, t, ra, rb) {
    var e = smooth(t);
    setFixed(lerp(a.x, b.x, e), lerp(a.y, b.y, e), lerp(a.s, b.s, e), lerp(ra, rb, e));
  }

  // ---- the manifesto: told once on arrival, on its own clock ----------------
  // The wheel only decides WHEN. The strike, his doubt, the answer and the
  // smile play at their own pace, so a fast scroll still sees all of it.
  var told = false, doubtT = [], html = document.documentElement;
  function heroEnd0() { return heroAct.top + heroAct.height - innerHeight; }
  function tell() {
    if (told) return;
    told = true; manStage.classList.add('is-told');
    if (reduce) return;
    doubtT.push(setTimeout(function () { html.classList.add('is-doubt'); }, 300));
    doubtT.push(setTimeout(function () { html.classList.remove('is-doubt'); }, 2300));
  }
  function untell() {
    if (!told) return;
    told = false; manStage.classList.remove('is-told', 'is-quick');
    doubtT.forEach(clearTimeout); doubtT = [];
    html.classList.remove('is-doubt');
  }
  function updateTelling(y, heroEnd, vh) {
    if (reduce) { tell(); return; }
    if (y >= manAct.top - vh * 0.2) tell();
    else if (y < heroEnd + vh * 0.05) untell();
  }

  function updateCompanion() {
    var y = scrollY, vh = innerHeight;
    var pH = heroAct.p, pW = workAct.p, pC = closeAct.p;
    var corner = cornerRect();
    fixedState = '';

    if (reduce) {
      // No travel. The stage figures are always visible (CSS); the badge sits
      // in the corner between the hero and the close so the menu is reachable.
      var between = y > heroAct.height - vh * 0.5 && y < closeAct.top - vh * 0.6;
      if (between) setFixed(corner.x, corner.y, corner.s, 1);
      else fixedEl.classList.remove('is-on');
      mode = between ? 'corner' : 'stage';
    } else {
      var heroEnd = heroAct.top + heroAct.height - vh;
      var manEnd = manAct.top + manAct.height - vh;
      var dealIn = workAct.top + 0.08 * (workAct.height - vh);
      var workEnd = workAct.top + workAct.height - vh;
      if (y <= heroEnd) {
        setStage('hero'); mode = 'hero'; modeT = clamp01(pH / 0.75);
      } else if (y < manAct.top) {
        // Aim at where his seat will be once the stage locks, not where it is
        // mid-slide, so he glides across while the page moves under him.
        var a0 = rectOf(figs.hero); a0.y += y - heroEnd;
        travel(a0, seatOf(figs.manifesto, manAct), (y - heroEnd) / Math.max(manAct.top - heroEnd, 1), 0, 0); mode = 'handoff';
      } else if (y <= manEnd) {
        setStage('manifesto'); mode = 'manifesto';
      } else if (y < dealIn) {
        var b0 = rectOf(figs.manifesto); b0.y += y - manEnd;
        travel(b0, seatOf(figs.deal, workAct), (y - manEnd) / Math.max(dealIn - manEnd, 1), 0, 0); mode = 'handoff';
      } else if (y < workEnd) {
        setStage('deal'); mode = 'deal';
      } else {
        var pinEnd = workEnd;
        if (pC < 0.48) {
          var from = rectOf(figs.deal); from.y += y - pinEnd;
          travel(from, rectOf(figs.close), pC / 0.48, 0, 0); mode = 'handoff';
        } else { setStage('close'); mode = 'close'; }
      }
    }
    fixedEl.setAttribute('data-sc-verify-state', mode + '|' + fixedState);
    updateTelling(y, heroEnd0(), vh);
    if (mode === 'hero') heroStage.setAttribute('data-sc-verify-state', 'wake:' + Math.round(modeT * 40));
    manStage.setAttribute('data-sc-verify-state', 'p:' + Math.round(manAct.p * 100) + '|' + mode + '|' + (told ? 'told' : 'rest'));
  }

  // ---- pose: he turns toward the pointer; on touch he leans with the scroll --
  var px = 0.5, py = 0.5, hasPointer = false;
  addEventListener('pointermove', function (e) {
    if (e.pointerType !== 'mouse') return;
    px = e.clientX / innerWidth; py = e.clientY / innerHeight; hasPointer = true;
  }, { passive: true });
  var lastY = scrollY, vel = 0;
  function updatePose() {
    vel += ((scrollY - lastY) - vel) * 0.15; lastY = scrollY;
    // Fallback wake, until the frames exist: he starts turned away and comes
    // round to face the visitor across the first part of the hero.
    var lean = mode === 'hero' ? (1 - smooth(modeT)) : 0;
    if (hasFrames) return;   // the frames are the motion; no tilt on top of them
    var tiltMax = 12, pitchMax = 8;
    for (var i = 0; i < poses.length; i++) {
      var P = poses[i];
      if (!P.fig.classList.contains('is-on') && P.fig !== fixedFig) continue;
      if (P.fig === fixedFig && !fixedEl.classList.contains('is-on')) continue;
      var ry, rx;
      if (fine.matches && hasPointer) {
        var r = P.el.getBoundingClientRect();
        var cx = (r.left + r.width / 2) / innerWidth, cy = (r.top + r.height / 2) / innerHeight;
        ry = clamp((px - cx) * 2, -1, 1) * tiltMax;
        rx = -clamp((py - cy) * 2, -1, 1) * pitchMax;
      } else {
        ry = 0; rx = clamp(-vel / 40, -1, 1) * 6;
      }
      if (!hasFrames) { ry = ry * (1 - lean) + (-18) * lean; rx = rx * (1 - lean) + 6 * lean; }
      P.rx += (rx - P.rx) * 0.08; P.ry += (ry - P.ry) * 0.08;
      P.el.style.transform = 'perspective(900px) rotateX(' + P.rx.toFixed(2) + 'deg) rotateY(' + P.ry.toFixed(2) + 'deg)';
    }
  }

  // ---- frames: the two clips Robin generates, as image sequences ------------
  // assets/companion/manifest.json: { "wake": { "count": N }, "gaze": { "count": M }, "ext": "jpg" }
  // Absent manifest = static render, which is a complete state of the page.
  var frames = { wake: null, gaze: null }, hasFrames = false;
  fetch('assets/companion/manifest.json').then(function (r) { return r.ok ? r.json() : null; }).then(function (m) {
    if (!m || reduce) return;
    ['wake', 'gaze'].forEach(function (k) {
      if (!m[k] || !m[k].count) return;
      var list = [];
      for (var i = 0; i < m[k].count; i++) {
        var im = new Image(); im.decoding = 'async';
        im.src = 'assets/companion/' + k + '/' + String(i).padStart(3, '0') + '.' + (m.ext || 'jpg');
        list.push(im);
      }
      frames[k] = list;
    });
    if (frames.wake || frames.gaze) {
      hasFrames = true;
      allFigs.forEach(function (f) { f.classList.add('has-frames'); });
      // drop any fallback tilt that was written before the frames arrived
      poses.forEach(function (P) { P.drawn = -1; P.rx = 0; P.ry = 0; P.el.style.transform = 'none'; });
    }
  }).catch(function () {});

  // The wake plays under the wheel in the hero. From then on he holds the last
  // smile everywhere small (the travel, the corner badge). Only the two big
  // appearances, the deal and the close, turn to follow the pointer.
  function pickFrame() {
    var smile = frames.wake ? frames.wake[frames.wake.length - 1] : null;
    if (mode === 'hero' && frames.wake) return frames.wake[Math.round(modeT * (frames.wake.length - 1))];
    if ((mode === 'manifesto' || mode === 'deal' || mode === 'handoff' || mode === 'close') && frames.gaze && fine.matches && hasPointer) {
      // The generated sweep runs from the viewer's right to the viewer's left,
      // so the pointer maps onto it mirrored.
      return frames.gaze[Math.round((1 - px) * (frames.gaze.length - 1))];
    }
    return smile || (frames.gaze ? frames.gaze[Math.round(0.5 * (frames.gaze.length - 1))] : null);
  }
  function drawFrames() {
    if (!hasFrames) return;
    var img = pickFrame();
    if (!img || !img.complete || !img.naturalWidth) return;
    for (var i = 0; i < poses.length; i++) {
      var P = poses[i];
      var on = P.fig === fixedFig ? fixedEl.classList.contains('is-on') : P.fig.classList.contains('is-on');
      if (!on) continue;
      var box = P.fig.getBoundingClientRect().width || CW;
      if (P.fig === fixedFig) box = CW;
      var dpr = Math.min(devicePixelRatio || 1, 2);
      var size = Math.round(box * dpr);
      if (P.canvas.width !== size) { P.canvas.width = size; P.canvas.height = size; P.drawn = -1; }
      if (P.drawn === img) continue;
      var ctx = P.canvas.getContext('2d');
      // The frames are already square. Their backdrop is a touch darker than
      // the page ground, so paint the ground first and composite with
      // 'lighten': every backdrop pixel lands exactly on the ground colour and
      // nothing brighter is touched.
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#0C0C0C';
      ctx.fillRect(0, 0, size, size);
      ctx.globalCompositeOperation = 'lighten';
      ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, size, size);
      P.drawn = img;
    }
  }

  // ---- the deal --------------------------------------------------------------
  var deck = q('.deck'), cards = qa('.card', deck), N = cards.length;
  var S0 = 0.0881, STEP = 0.1189, LAND = 0.0793;
  var ty0 = 0;
  function layoutDeal() {
    var d = deck.getBoundingClientRect(), f = figs.deal.getBoundingClientRect();
    // the card starts centred on his head, half size, and grows as it rises
    var headY = (f.top + f.height * 0.38) - d.top;
    ty0 = headY - d.height * 0.25;
  }
  var cardVideos = cards.map(function (c) { return q('video', c); });
  function updateDeal() {
    if (reduce) return;
    if (!workAct.live) return;
    var p = workAct.p, top = -1, landT = 0;
    for (var i = 0; i < N; i++) {
      var s = S0 + i * STEP, t = clamp01((p - s) / LAND), el = cards[i];
      if (p < s) {
        if (el.style.visibility !== 'hidden') { el.style.opacity = '0'; el.style.visibility = 'hidden'; el.inert = true; }
        if (cardVideos[i]) pause(cardVideos[i]);
        continue;
      }
      var depth = 0;
      for (var j = i + 1; j < N; j++) depth += clamp01((p - (S0 + j * STEP)) / LAND);
      var e = smooth(t);
      var ty = lerp(ty0, 0, e) - depth * 18;
      var scale = lerp(0.5, 1, e) * (1 - depth * 0.035);
      var rot = lerp(i % 2 ? 6 : -6, 0, e);
      el.style.transform = 'translate3d(0,' + ty.toFixed(1) + 'px,0) scale(' + scale.toFixed(4) + ') rotate(' + rot.toFixed(2) + 'deg)';
      el.style.opacity = clamp01(t / 0.3).toFixed(3);
      el.style.visibility = 'visible';
      var isTop = depth < 1;
      el.inert = !(isTop && t >= 1);
      if (cardVideos[i]) { if (depth < 1.5) play(cardVideos[i]); else pause(cardVideos[i]); }
      if (isTop) { top = i; landT = t; }
    }
    dealStage.setAttribute('data-sc-verify-state', 'top:' + top + '|t:' + Math.round(landT * 20) + '|' + mode);
  }

  // Keyboard path through the deal. Undealt cards are inert, so Tab would jump
  // from About straight to the close. Instead, Tab out of the last control
  // before the deck (or Shift+Tab out of the first control after it) parks the
  // page where the next card has landed and focuses its first control.
  function focusables(root) {
    return qa('a[href], button:not([disabled])', root).filter(function (el) { return !el.closest('[inert]'); });
  }
  function landedY(i) {
    var travel = Math.max(workAct.height - innerHeight, 1);
    return workAct.top + (S0 + i * STEP + LAND + 0.01) * travel;
  }
  function parkOnCard(i, last) {
    scrollTo({ top: landedY(i), behavior: 'instant' });
    sc.read(); updateCompanion(); updateDeal();
    var f = focusables(cards[i]);
    var target = last ? f[f.length - 1] : f[0];
    if (target) target.focus({ preventScroll: true });
  }
  var aboutCta = q('#manifesto .mf__cta .btn');
  var closeFirst = q('#contact .figure__btn');
  addEventListener('keydown', function (e) {
    if (e.key !== 'Tab' || reduce) return;
    var el = document.activeElement;
    if (!el) return;
    var card = el.closest('.card');
    if (!e.shiftKey && el === aboutCta) { e.preventDefault(); parkOnCard(0, false); return; }
    if (e.shiftKey && el === closeFirst) { e.preventDefault(); parkOnCard(N - 1, true); return; }
    if (!card) return;
    var i = +card.getAttribute('data-card'), f = focusables(card);
    if (!e.shiftKey && el === f[f.length - 1] && i < N - 1) { e.preventDefault(); parkOnCard(i + 1, false); }
    else if (e.shiftKey && el === f[0] && i > 0) { e.preventDefault(); parkOnCard(i - 1, true); }
  });

  addEventListener('focusin', function (e) {
    if (!e.target.closest || !e.target.closest('#manifesto')) return;
    if (!reduce && (scrollY < manAct.top || scrollY > manAct.top + manAct.height - innerHeight)) scrollTo({ top: holdY(), behavior: 'instant' });
    // a keyboard arrival skips the performance: the control must be visible now
    if (!told) { manStage.classList.add('is-quick'); tell(); }
  });

  // ---- navigation: hash links (About and Work) -----------------------------
  function holdY() { return reduce ? manAct.top : manAct.top + 0.3 * (manAct.height - innerHeight); }
  function targetY(hash) {
    if (hash === '#work') return reduce ? workAct.top : landedY(0);
    if (hash === '#manifesto' || hash === '#about') return holdY();
    return null;
  }
  function navTo(hash, smooth) {
    var y = targetY(hash);
    if (y === null) return false;
    scrollTo({ top: y, behavior: smooth && !reduce ? 'smooth' : 'instant' });
    if (history.pushState) history.pushState(null, '', hash);
    return true;
  }
  addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var hash = a.getAttribute('href');
    if (hash === '#work' || hash === '#manifesto' || hash === '#about') {
      e.preventDefault();
      closeMenu(false);
      navTo(hash, true);
    }
  });
  if (['#work', '#manifesto', '#about'].indexOf(location.hash) > -1) {
    setTimeout(function () { navTo(location.hash, false); }, 60);
  }

  // ---- the menu: he is the nav ---------------------------------------------
  var menu = q('#menu'), menuAnchor = null, menuScrollY = 0;
  function openMenu(btn) {
    var r = btn.getBoundingClientRect();
    menu.hidden = false;
    var w = menu.offsetWidth, h = menu.offsetHeight;
    var cx = r.left + r.width / 2;
    var left = clamp(cx - w / 2, 12, innerWidth - w - 12);
    var top = r.top - h - 16;
    var below = top < 12;
    if (below) top = r.bottom + 16;
    menu.classList.toggle('bubble--below', below);
    menu.style.left = left + 'px'; menu.style.top = top + 'px';
    menu.style.setProperty('--ax', clamp(cx - left, 18, w - 18) + 'px');
    menuAnchor = btn; menuScrollY = scrollY;
    qa('.figure__btn').forEach(function (b) { b.setAttribute('aria-expanded', String(b === btn)); });
    q('a', menu).focus({ preventScroll: true });
  }
  function closeMenu(refocus) {
    if (menu.hidden) return;
    menu.hidden = true;
    qa('.figure__btn').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
    if (refocus && menuAnchor) menuAnchor.focus({ preventScroll: true });
    menuAnchor = null;
  }
  qa('.figure__btn').forEach(function (b) {
    b.setAttribute('aria-expanded', 'false');
    b.addEventListener('click', function (e) { e.stopPropagation(); if (menu.hidden || menuAnchor !== b) openMenu(b); else closeMenu(true); });
  });
  qa('a', menu).forEach(function (a) { a.addEventListener('click', function () { closeMenu(false); }); });
  addEventListener('click', function (e) { if (!menu.hidden && !menu.contains(e.target)) closeMenu(false); });
  addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    closeMenu(true);
    var open = q('dialog.detail[open]');
    if (open) open.close();
  });
  addEventListener('scroll', function () { if (!menu.hidden && Math.abs(scrollY - menuScrollY) > 80) closeMenu(false); }, { passive: true });

  // ---- the deep dives ---------------------------------------------------------
  qa('dialog.detail').forEach(function (d) {
    var vids = qa('video[data-src]', d);
    d.addEventListener('close', function () {
      html.classList.remove('has-dialog');
      vids.forEach(pause);
      if (d.__opener) d.__opener.focus({ preventScroll: true });
    });
    d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
    q('.detail__close', d).addEventListener('click', function () { d.close(); });
  });
  qa('[data-open]').forEach(function (b) {
    b.addEventListener('click', function () {
      var d = document.getElementById(b.getAttribute('data-open'));
      if (!d) return;
      closeMenu(false);
      d.__opener = b;
      html.classList.add('has-dialog');
      d.showModal();
      d.scrollTop = 0;
      qa('video[data-src]', d).forEach(play);
    });
  });

  // ---- wiring -----------------------------------------------------------------
  function relayout() { layoutDeal(); }
  addEventListener('resize', relayout, { passive: true });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(relayout);
  addEventListener('load', relayout);
  relayout();

  // read-only debug hook for the verification pass
  window.__companion = { get px() { return px; }, get mode() { return mode; }, get pointer() { return hasPointer; }, get frames() { return { wake: frames.wake && frames.wake.length, gaze: frames.gaze && frames.gaze.length }; } };

  (function loop() {
    updateCompanion();
    if (!reduce) updatePose();
    updateDeal();
    drawFrames();
    requestAnimationFrame(loop);
  })();
})();
