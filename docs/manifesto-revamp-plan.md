# Manifesto revamp: build plan

**Written:** 2026-10-27 (planned by Opus, to be built by a Sonnet session).
**Project:** `Website_simple/` (robinmolinas.com). Start the build session **in this folder**.
**Copy of record:** [worth-building.md](worth-building.md), Robin's manifesto, word for word. Never reword it.
**Reference:** simonberg.ai, where the hero leads straight into "01 / The Manifesto": a portrait, one headline, a short paragraph, an action line, then "Read Creativity Matters →".

---

## 0. Read this first (build session)

1. Read, in this order: this plan, `docs/worth-building.md`, `DESIGN.md`, `PRODUCT.md`, `index.html`, `page.css`, `public/page.js`, and the header comment of `public/scrollcraft.js` (lines 1–120, which document the `data-sc-*` API).
2. The live site is **static HTML on the scrollcraft engine**: `index.html` + `scrollcraft.css` + `page.css` at the root, and `public/scrollcraft.js` + `public/page.js`. Vite bundles the root CSS and copies `public/` as is.
3. **Never edit `public/scrollcraft.js`** (the engine). All the custom behaviour goes in `public/page.js`.
4. **Ignore `scrollcraft/builds/*` and `legacy_react_src/`.** They are history and are not deployed.
5. Work on a branch: `git checkout -b feat/manifesto`. Commit at the end of each phase with a conventional message. **Never push, deploy or run `vercel`.** Robin reviews it locally.
6. **Don't delete asset files.** Removing markup is fine, but the videos and images stay in `public/`.
7. Use the proposed copy in §9 as written. Robin approves the wording at review.

### Hard constraints (Robin's own rejections and DESIGN.md)

- Every movement needs a visible cause (scroll, pointer, or the companion). No "movement for the sake of movement".
- No orange. The accent is Claims Purple `#6C5CE7`, used on less than 10% of any viewport.
- No em dashes anywhere in the copy. Use commas, colons and full stops.
- No gradient text, no glassmorphism, no coloured side-stripe borders, no dashboard chrome, no card grids of icon + heading + paragraph.
- Kanit is the only typeface. Display: 900, uppercase. Body: 300 or 400.
- Keep the project deep dives (`<dialog>`) and the real counted figure on every card.
- Respect reduced motion and WCAG AA (4.5:1 text contrast).

---

## 1. The idea

The site becomes a four-beat story told by the one character it already has:

> **Hi** (hero) → **What I believe** (manifesto) → **The proof** (work) → **The ask** (let's build)

Today the companion wakes in the hero, shrinks to a corner badge, deals the project cards, and arrives beside Contact me. In the new version he **steps aside to make room for what he believes**:

1. He wakes under the wordmark (unchanged).
2. As the hero scrolls away, he travels down and to the left and lands beside a giant question: **CAN WE BUILD IT?**
3. Scroll draws a purple line through the question, one line at a time. His face turns **skeptical**, using the unused render `public/assets/avatar.png`, which has a raised brow and a side-eye. **SHOULD WE?** rises underneath. That one gesture *is* the manifesto's core idea, "The bottleneck moved.", acted out rather than explained.
4. The question clears, and the manifesto settles into one composed screen: title, tagline, the thesis line, the four habits, an action line and **Read the manifesto**. His smile comes back when the invitation appears.
5. He travels straight into the Work stage and deals the cards, as he does today. A small kicker, "Built to prove it.", ties the work to the manifesto's last line ("…and then build it to prove it").
6. The close keeps "Let's build" and gains the manifesto's real last line as its lede: "If you're building something and you're not sure it's worth it, let's find out. Fast."

The full essay lives on its own page, **`/worth-building`**, laid out as a quiet long-form article.

### What goes

- **The glimpse reel (two-row video carousel): removed.** Every clip in it already appears on a card or in a deep dive, so it costs 1.7 screens of scroll and 16 video loads and says nothing new.
- **About me: removed.** Its one useful fact (seven years, L'Oréal, Forvia) moves to an author byline under the portrait in the manifesto section, the editorial convention for "who is talking".
- **The four throwable chrome objects: removed** along with About, together with their drag physics (`initDrag`). The image files stay on disk.

---

## 2. New page order and scroll budget

| # | Section | id | Act | Span | Notes |
|---|---|---|---|---|---|
| 1 | Hero | `top` | pin | **1.5** (was 2) | The wake now runs over pH 0 → 0.75, then holds. He no longer goes to the corner. |
| 2 | Manifesto | `manifesto` | pin | **3.4** | New. Beats A and B, see §3. |
| 3 | Work | `work` | pin | 6.675 | Unchanged apart from the kicker line. |
| 4 | Let's build | `contact` | flow | — | Gains the lede line. |

The total is about 12.6vh against about 11.7 today, and almost all of it is now content.

Nav labels change everywhere from **About** to **Manifesto** (`#manifesto`): in the hero nav, in the bubble menu, and in `navTo`. Keep `#about` as an alias that resolves to `#manifesto`, so old links still work.

---

## 3. The manifesto section (home page)

### 3.1 Markup skeleton (adapt the class names, keep the structure)

```html
<!-- 2 · WORTH BUILDING: pin. He steps aside and says what he believes. -->
<section id="manifesto" data-sc-act="pin" data-sc-span="3.4" aria-labelledby="manifesto-title">
  <div data-sc-stage class="mf" data-sc-verify-state="">

    <div class="mf__portrait">
      <div class="figure figure--stage figure--manifesto" data-figure="manifesto">
        <button class="figure__btn" type="button" aria-haspopup="menu" aria-controls="menu" aria-label="Open the menu">
          <div class="figure__pose">
            <img src="assets/companion/poster-end.jpg" width="720" height="720" alt="" decoding="async">
            <canvas aria-hidden="true"></canvas>
            <img class="figure__skeptic" src="assets/avatar.png" width="820" height="978" alt="" decoding="async">
          </div>
        </button>
      </div>
      <p class="mf__byline"><b>Robin Molinas</b> <span>Seven years building AI platforms and growth strategies for L'Oréal, Forvia and others.</span></p>
    </div>

    <!-- Beat A: the bottleneck moved -->
    <div class="mf__beat mf__beat--a" data-sc-cue="…">
      <p class="label">The bottleneck moved.</p>
      <p class="display mf__q"><s><span class="mf__line mf__line--1">Can we</span><span class="mf__line mf__line--2">build it?</span></s></p>
      <p class="display mf__a" data-sc-cue="…">Should we?</p>
      <p class="mf__aside" data-sc-cue="…" data-sc-kinetic="lines">Nothing says no anymore, not the budget and not the tech, so every no has to come from us.</p>
    </div>

    <!-- Beat B: the manifesto, composed -->
    <div class="mf__beat mf__beat--b">
      <p class="label" data-sc-cue="…">Manifesto · 4 min read</p>
      <h2 id="manifesto-title" class="display mf__title" data-sc-cue="…">Worth building.</h2>
      <p class="mf__tag" data-sc-cue="…" data-sc-kinetic="lines">Anyone can build now. Almost no one asks if they should.</p>
      <p class="mf__thesis" data-sc-cue="…">Building got cheap, so the expensive mistake is now building the wrong thing beautifully, at speed, for people who never asked.</p>
      <ol class="mf__habits">
        <li data-sc-cue="…"><span class="mf__num" aria-hidden="true">01</span><b>Hack first.</b> <span>The best signal is someone already hacking it.</span></li>
        <li data-sc-cue="…"><span class="mf__num" aria-hidden="true">02</span><b>Money, magic, machines.</b> <span>It pays, it feels different, it's built for what's next.</span></li>
        <li data-sc-cue="…"><span class="mf__num" aria-hidden="true">03</span><b>Fail fast.</b> <span>In people's hands while it's still cheap to fix.</span></li>
        <li data-sc-cue="…"><span class="mf__num" aria-hidden="true">04</span><b>Lead with a vision.</b> <span>Show people what's worth wanting.</span></li>
      </ol>
      <div class="mf__cta" data-sc-cue="…">
        <p class="mf__action">Before you build the next thing, read this.</p>
        <a class="btn btn--primary" href="/worth-building">Read the manifesto <svg …arrow…/></a>
      </div>
    </div>

  </div>
</section>
```

Notes:
- The `<s>` keeps the semantics of a struck-out question. Set `text-decoration: none` on it, because the line is drawn by CSS (see 3.3).
- `mf__line` spans are `display:block`, so the two lines break the same way at every width and each gets its own strike.
- Both beats sit in the same grid cell (`grid-row:1; grid-column:2`) and cross-fade through their cues.

### 3.2 Timeline (manifesto act progress `p`, pinned travel = 2.4vh)

The engine's cue syntax, from `scrollcraft.js` around line 360, is `data-sc-cue="from to rampIn rampOut"`. The ramps are **fractions of the window** (default 0.3 each). `rampIn 0` means fully visible from `from`, and `rampOut 0` means it holds until `to`. With a single value it fades in over 0.18 and holds. Nested cues multiply. `data-sc-kinetic="lines"` staggers lines across the cue's reveal.

| p | What happens |
|---|---|
| 0 | The stage locks. "The bottleneck moved." and **CAN WE / BUILD IT?** are already visible (they slid in with the stage). He has just landed, smiling. |
| .06 → .13 | Strike 1 draws left to right through "Can we". |
| .11 → .19 | Strike 2 draws through "build it?". The struck text dims to about 40%. |
| .10 → .20 | His face cross-fades from smile to **skeptical**. |
| .16 → .24 | **SHOULD WE?** rises in, full ink. |
| .22 → .28 | The aside line reveals line by line. |
| .30 → .36 | Beat A leaves (cue fade + rise). |
| .36 → .42 | Label and **WORTH BUILDING.** come in. |
| .42 → .48 | Tagline (kinetic lines). |
| .47 → .52 | Thesis. |
| .52 → .62 | Habits 01–04, staggered about .03 apart. |
| .58 → .66 | His face returns from skeptical to smile. |
| .62 → .68 | Action line and CTA. |
| .68 → 1 | **Hold.** Everything is on screen, readable and clickable. |

Beat B cues all use the form `"<from> 1 <small rampIn> 0"`, so they enter and then hold until the pin ends. Beat A's container uses `"0 0.36 0 0.17"`.

### 3.3 The strike and the face: pure CSS from `--sc-p`

The engine writes `--sc-p` on `section#manifesto`. Derive everything from it on that element. These are unregistered custom properties, so they substitute at use and children inherit the resolved calc.

```css
#manifesto {
  --k1: clamp(0, calc((var(--sc-p, 0) - 0.06) / 0.07), 1);
  --k2: clamp(0, calc((var(--sc-p, 0) - 0.11) / 0.08), 1);
  --skeptic: min(clamp(0, calc((var(--sc-p, 0) - 0.10) / 0.10), 1),
                 clamp(0, calc((0.66 - var(--sc-p, 0)) / 0.08), 1));
}
.mf__q s { text-decoration: none; }
.mf__line { display: block; position: relative; width: fit-content; }
.mf__line::after {
  content: ""; position: absolute; left: -0.04em; right: -0.04em; top: 50%;
  height: 0.075em; background: var(--sc-accent); transform-origin: 0 50%;
}
.mf__line--1::after { transform: scaleX(var(--k1)); }
.mf__line--2::after { transform: scaleX(var(--k2)); }
.mf__line--1 { opacity: calc(1 - 0.6 * var(--k1)); }   /* dims as it is struck */
.mf__line--2 { opacity: calc(1 - 0.6 * var(--k2)); }
```

**The skeptical face overlay.** Watch for these existing rules:
- `.figure img, .figure canvas { width:100%; height:100%; object-fit:cover; mask… }` also hits `.figure__skeptic`, so override the size, position and fit for it.
- `.figure.has-frames img { visibility:hidden; }` **will hide the skeptic image** once the frames load. Add `.figure.has-frames img.figure__skeptic { visibility: visible; }`.
- Cross-fade: `.figure--manifesto .figure__skeptic { opacity: var(--skeptic); }` and `.figure--manifesto canvas, .figure--manifesto img:not(.figure__skeptic) { opacity: calc(1 - var(--skeptic)); }`.
- **Alignment matters.** `avatar.png` (820×978, transparent) is a tighter head crop than the 720² smile frames. Start from `position:absolute; left:15%; top:5%; width:70%; height:auto; object-fit:contain`, then tune it: screenshot the figure at p≈.15 (both layers at about 50%), and adjust left/top/width until the eye line, the hairline and the head width coincide. The cross-fade must read as *his expression changing*, not as a different picture. Keep the same radial mask feather on it so the cut-out edges melt into the ground.
- The fixed companion that travels in the handoffs only ever shows the smile, which is correct: `--skeptic` is 0 for p < .10 and p > .66.

### 3.4 Layout

**Desktop (> 860px):** `.mf` is a grid with `minmax(0,5fr) minmax(0,7fr)`, a column gap of `clamp(2rem,5vw,6rem)`, and padding of `clamp(1.5rem,5vh,4rem) var(--sc-gutter)`.
- **Left:** the portrait stands on the bottom edge. `.figure--manifesto` is `width: min(100%, 70vh)` with `margin-bottom: -6vh`, so his shoulders are cropped by the viewport, like a studio portrait. The byline sits above him at the top left of the column: label scale, ink-soft, max 26ch, with the name in ink at weight 700.
- **Right:** text column, `max-width: 40rem`, vertically centred.
- Beat A sizes: `.mf__q` and `.mf__a` at `clamp(3rem, 7.4vw, 8.5rem)`, line-height .92. `.mf__a` uses `--display-ink` at full opacity. The aside is body copy, max 34ch.
- Beat B sizes: `.mf__title` at `clamp(3rem, 6.6vw, 7.5rem)` on two lines. `.mf__tag` at `clamp(1.25rem, 1.9vw, 1.75rem)`, weight 300, in ink. The thesis is body copy in ink-soft, max 44ch. The habits form a 2×2 grid with a 1px `--line` hairline on top of each item: `.mf__num` is Kanit 900 at about 2rem in display-ink, the name is 700 uppercase at .95rem, and the gloss is 300 ink-soft. Below a hairline, `.mf__cta` puts the action line on the left and the button on the right, wrapping as needed.
- **Short laptops (`max-height: 820px`):** hide `.mf__thesis` and the habit glosses (`.mf__habits li > span`). Beat B must fit in 100vh at 1280×720 with nothing clipped.

**Phones (≤ 860px):** single column. `.mf` is `grid-template-rows: auto 1fr`, with padding-top of about 6svh.
- **Row 1:** the portrait is a small figure, `width: min(36vw, 22svh)`, sitting left with the byline beside it (flex, `align-items: end`).
- **Row 2:** the beats. `.mf__q` and `.mf__a` at about 14vw. `.mf__title` at 13vw.
- Beat B on phones always hides the thesis and the glosses. The habits become a 2×2 grid of numerals and names. The CTA becomes a full-width button.
- Must fit at **390×844** and **375×667**. At `max-height: 700px`, shrink the portrait further or hide the byline span.

**Reduced motion:** no pin. Mirror the `#work` overrides already in `page.css`:
- `#manifesto { height:auto !important }`, and make the stage static.
- Stack beat A above beat B, both fully visible. Force `--k1: 1; --k2: 1; --skeptic: 0`, so the strike is drawn and he is smiling.
- The figure is static. Override every cue in the section to opacity 1.

### 3.5 Bridges in and out

- **Work kicker:** in `.deal`, add `<p class="label deal__kicker" data-sc-cue="0 0.123 0 0.396">Built to prove it.</p>` (the same cue as the title), placed just above the WORK title. Check it doesn't collide with the title or with the first dealt card at desktop and phone sizes. If it crowds, put it under the title instead. If it still crowds, drop it and say so in your report.
- **Close lede:** add `<p class="close__lede">If you're building something and you're not sure it's worth it, let's find out. Fast.</p>` between the "Let's build" heading and `.close__row`: `max-width: 30ch`, `clamp(1.1rem, 1.6vw, 1.4rem)`, weight 300, in ink, centred.

---

## 4. Companion choreography (`public/page.js`)

### 4.1 Remove
- The reel: `rowB`, `layoutReel`, and its call in `relayout`.
- The objects: `initDrag` and its call.
- `aboutAct`. Change `aboutCta` to `q('#manifesto .mf__cta .btn')`. That is now the last control before the deck, so the existing Tab-into-the-deal path keeps working.

### 4.2 Add
- `figs.manifesto = q('[data-figure="manifesto"]')`. Add it to `allFigs` so the frames get drawn into it.
- `var manAct = actById.manifesto, manStage = q('#manifesto .mf');`

### 4.3 Rewrite `updateCompanion` (motion branch)

The pattern is the one already proven for deal → close: freeze the source figure's rect at the moment its pin releases, then travel to the live rect of the target.

```js
var vh = innerHeight;
var heroEnd = heroAct.top + heroAct.height - vh;           // hero pin releases
var manEnd  = manAct.top  + manAct.height  - vh;           // manifesto pin releases
var dealIn  = workAct.top + 0.08 * (workAct.height - vh);  // he has arrived under the deck
var workEnd = workAct.top + workAct.height - vh;

if (y <= heroEnd) {
  setStage('hero'); mode = 'hero'; modeT = clamp01(heroAct.p / 0.75);
} else if (y < manAct.top) {                                // handoff 1: hero to manifesto
  var a = rectOf(figs.hero); a.y += y - heroEnd;            // frozen where the pin released it
  travel(a, rectOf(figs.manifesto), (y - heroEnd) / (manAct.top - heroEnd), 0, 0); mode = 'handoff';
} else if (y <= manEnd) {
  setStage('manifesto'); mode = 'manifesto'; modeT = manAct.p;
} else if (y < dealIn) {                                    // handoff 2: manifesto to deal
  var b = rectOf(figs.manifesto); b.y += y - manEnd;
  travel(b, rectOf(figs.deal), (y - manEnd) / (dealIn - manEnd), 0, 0); mode = 'handoff';
} else if (y < workEnd) {
  setStage('deal'); mode = 'deal';
} else {
  /* existing deal to close handoff, unchanged */
}
```

- The corner badge is no longer used in the motion branch. **Keep the reduced-motion branch** (badge in the corner between hero and close), so the menu stays reachable there.
- `pickFrame`: add `'manifesto'` to the modes that follow the pointer through the gaze frames on fine-pointer devices. With no pointer, show the smile (last wake frame).
- Write `manStage.setAttribute('data-sc-verify-state', 'p:' + Math.round(manAct.p*100) + '|' + mode)` for the verification pass.
- **Seam check:** at the instant `setStage` swaps from the travelling fixed companion to the stage figure, both must render the same pixels in the same place. Verify the companion rect just before and just after each swap (within 2px). The existing code does this for deal → close, so copy its approach.

### 4.4 Navigation and focus
- `targetY('#manifesto')` returns `reduce ? manAct.top : manAct.top + 0.72 * (manAct.height - innerHeight)`, which lands on the composed hold. Treat `'#about'` the same way. Extend the hash-click handler and the initial `location.hash` check to `#manifesto` and `#about`.
- Update the bubble menu items to Manifesto, Work and Contact me.
- **Focus:** add a `focusin` listener in page.js. If the target is inside `.mf__beat--b` and `manAct.p < 0.68`, `scrollTo({ top: <hold y>, behavior: 'instant' })`. The engine's own centring runs first and lands on the wrong moment of a pinned stage, so this one overrides it.

---

## 5. The article page: `/worth-building`

### 5.1 Plumbing
- **New root file `worth-building.html`.** No scrollcraft.js on this page: it needs no scroll engine.
- **Shared CSS:** move the `:root` tokens, `.display`, `.label`, `.btn*` and `.links` out of `page.css` into a new root `base.css`. Link `scrollcraft.css` → `base.css` → `page.css` on the home page, and `scrollcraft.css` → `base.css` → `article.css` on the article. Diff-check that the home page looks identical after the extraction.
- **`vite.config.ts`:**
  ```ts
  import { resolve } from 'node:path';
  build: { rollupOptions: { input: { main: resolve(__dirname, 'index.html'), manifesto: resolve(__dirname, 'worth-building.html') } } }
  ```
- **`vercel.json`:** add `"cleanUrls": true` (so `/worth-building` serves `worth-building.html`), and add a 301 redirect from `/manifesto` to `/worth-building`.
- **Fonts on both pages:** `family=Kanit:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400` (adds italics for the standfirst and pull quotes). The CSP already allows Google Fonts.
- **Tiny `public/article.js`:** sets the footer year and adds `.is-in` to the strike figure when it enters view (IntersectionObserver). Nothing else.

### 5.2 Design: a quiet long read, the same world
- **Reading progress:** a 2px accent bar fixed at the top, driven by pure CSS `animation-timeline: scroll(root)` inside `@supports`, so no bar appears in browsers without it. It is the only accent on screen while reading.
- **Top line:** not sticky. "Robin Molinas" on the left (home link, `.links` style), "See the work →" on the right (`/#work`).
- **Masthead:**
  - Label: "Manifesto · October 2026 · 4 min read".
  - H1 "Worth building." at poster scale (`clamp(3rem, 12vw, 160px)`), left-aligned, two lines.
  - Standfirst in Kanit 300 italic at `clamp(1.35rem, 2.6vw, 2.1rem)`, max 24ch, in ink: "Anyone can build now. Almost no one asks if they should."
  - Byline: a 44px round crop of `assets/companion/poster-end.jpg`, then "Robin Molinas, strategist and AI builder".
- **Body column:** max 36rem (under 65ch). Kanit 300, `1.1875rem/1.75`, ink at about 88%, paragraph spacing 1.2em. The first paragraph is the lede at `1.4rem` in full ink.
- **Section heads (h2):** a small numeric label above each ("01" to "04"). The heading itself is Kanit 900 uppercase at `clamp(1.8rem, 4vw, 3rem)` in display-ink, with generous space above (about 2.5em).
- **"The bottleneck moved." reprise:** directly under that h2, a figure that echoes the home page: "Can we build it?" struck through in purple (drawn once on `.is-in`, already drawn under reduced motion), and "Should we?" beneath, both at about `clamp(2rem, 5vw, 4rem)` display. Mark the figure `aria-hidden="true"`; the essay text already says it.
- **Pull quotes:** the two italic lines that stand as their own paragraphs, "Building got cheap…" and "Make all the noodle necklaces…", become `<blockquote class="pull">`. On desktop they break wider than the column (max 48rem). They are Kanit 300 italic at `clamp(1.5rem, 3vw, 2.4rem)`, line-height 1.25, in display-ink, with a short 40px accent rule *above* (not a side stripe).
- **Inline italics:** the two italic sentences inside paragraphs ("The faster AI moves…" and "Shadow AI is unpaid product research…") stay inline as `<em>` in full ink. No duplication.
- **The four habits:** an `<ol class="habits">`. Each item is a two-column grid: a big numeral (Kanit 900, about 3.5rem, display-ink) in a 4.5rem gutter, then the bolded name as an h3 (700, uppercase) followed by the text. Items are divided by a 1px `--line` hairline. No cards.
- **Sign-off:** "Robin" in Kanit 300 italic at about 2rem.
- **The ask block:** after the sign-off, a hairline, then:
  - "Contact me", primary, `mailto:robin.molinas@outlook.com?subject=Worth%20building`
  - "LinkedIn", ghost
  - a text link "Share on LinkedIn" (`https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.robinmolinas.com%2Fworth-building`)
  - a text link "← Back to the work" (`/#work`)
- **Footer:** the same as the home page.
- **Phones:** body `1.0625rem/1.7`, gutter `var(--sc-gutter)`, pull quotes at column width, habit numerals at 2.4rem.
- **Grain:** keep `<div class="sc-grain">` for continuity with the home page.

### 5.3 SEO and sharing (Robin will post this on LinkedIn, so it matters)
- `<title>`: "Worth building. A manifesto by Robin Molinas".
- Description: "Anyone can build now. Almost no one asks if they should. Robin Molinas on slop, discipline, and four habits for deciding what's worth building."
- Canonical: `https://www.robinmolinas.com/worth-building`. Set `og:type` to `article`, plus `article:author` and Twitter card tags.
- JSON-LD `Article`: headline, author Person (same `sameAs` as the home page), datePublished `2026-10-27`, url, image.
- **OG image `public/og-worth-building.jpg` (1200×630):** write a throwaway HTML in the scratchpad (obsidian ground, "WORTH BUILDING." in Kanit 900, the standfirst, and the skeptical `avatar.png` on the right, bottom-cropped) and screenshot it with Playwright. Keep the text at least 64px from every edge.
- Add the URL to `public/sitemap.xml`. Add a "Manifesto" section to `public/llms.txt` (title, one-paragraph summary, the four habits, link).

---

## 6. Phases

| Phase | Work | Done when |
|---|---|---|
| **0. Baseline** | Branch. `npm install`, then `npm i --no-save playwright-core`. Run `npm run dev`. Shoot a baseline (§7). | Baseline contact sheets saved. |
| **1. Clear the ground** | Extract `base.css`. Remove the reel, About, the objects (HTML, CSS, JS). Add Kanit italics. Change the nav labels. Temporarily point the companion straight from hero to corner to deal, so the page still works. | The page runs with no console errors; hero → work → close look right. |
| **2. Manifesto, static first** | Markup and CSS for §3.1/3.4 with the **reduced-motion layout first**. Then the pin, cues and timeline (§3.2), and the strike (§3.3). | Beats A and B at the p checkpoints look right at all four viewports. |
| **3. The companion** | §4 choreography, the skeptic overlay and its alignment, nav, focus. | Seams within 2px, face cross-fade reads as an expression change, Tab path works. |
| **4. The article** | §5 page, plumbing, OG image, SEO. | `npm run build` produces `dist/worth-building.html`. The page passes at 1440 and 390. |
| **5. Tie-ins and sweep** | Work kicker, close lede, full verification (§7), FINGERPRINTS note (§8). | Everything in §7 checked; report written. |

Commit after each phase.

---

## 7. Verification

The harness is the scrollcraft skill's shoot script. It uses installed Chrome and needs `playwright-core` in this project. Save shots to `scrollcraft/builds/robin-companion/lab/r2/`.

```bash
S=~/.claude/skills/scrollcraft/scripts/shoot.mjs; L=scrollcraft/builds/robin-companion/lab/r2
node $S --url http://localhost:5173 --out $L/desktop --steps 16
node $S --url http://localhost:5173 --out $L/mobile  --width 390 --height 844 --steps 16
node $S --url http://localhost:5173 --out $L/short   --width 1280 --height 720 --steps 16
node $S --url http://localhost:5173 --out $L/reduced --reduced-motion
```

Also write one small Playwright script (in the scratchpad, not the repo) that checks:

1. **Manifesto checkpoints.** Scroll to p = .00, .12, .20, .30, .40, .55, .70 and 1.0 of `#manifesto` at 1440×900, 1280×720, 390×844 and 375×667, and screenshot each. Nothing clipped, nothing overlapping, the strike draws line by line, the face changes, and the beat B hold is complete at p ≥ .68.
2. **Seams.** Read the companion's `getBoundingClientRect()` one scroll pixel before and after each stage swap (hero→handoff, handoff→manifesto, manifesto→handoff, handoff→deal). The delta must be ≤ 2px.
3. **Keyboard.** Tab from the top: hero links, then the manifesto CTA (visible, opacity > .85, at the hold), then card 0's first control, through all the cards, then the close. Escape closes the menu and dialogs.
4. **Nav.** The hero "Manifesto" link and the bubble menu "Manifesto" land on the hold. `/#about` and `/#manifesto` deep links land on the hold.
5. **Reduced motion.** Everything is static and stacked, the strike is drawn, the smile is shown, and nothing is invisible.
6. **Article.** `/worth-building.html` at 1440 and 390: the masthead, the strike figure drawing on view, pull quotes, habits, sign-off, ask block. Text contrast ≥ 4.5:1. The text matches `docs/worth-building.md` exactly (diff the visible text against the md body, ignoring markup).
7. **Build.** `npm run build` succeeds; `npm run preview` serves both pages; no console errors on either. (Clean URLs only work on Vercel, so tell Robin to check `/worth-building` and `/manifesto` on the preview deployment.)
8. **Copy lint.** `grep -n "—" index.html worth-building.html` returns nothing.

**Look at the contact sheets yourself.** A check that passes on opacity numbers alone has not been verified. Report exactly what you checked, and anything you couldn't.

---

## 8. Bookkeeping

- In `scrollcraft/FINGERPRINTS.md`, append a dated **revision note** under the robin-companion row. This is a revision of the same build, not a new build, so the uniqueness gate doesn't apply. Write: "r2 2026-10-27: reel and About removed; manifesto pin added (strike-through question, skeptical face); companion hero → manifesto → deal → close; 4 acts, about 12.6vh." **Do not edit the row itself.**
- Leave `scrollcraft/builds/robin-companion/` untouched apart from `lab/r2/`.

---

## 9. Proposed copy (in use until Robin changes it)

| Where | Copy | Source |
|---|---|---|
| Nav label | Manifesto | new |
| Byline | **Robin Molinas** Seven years building AI platforms and growth strategies for L'Oréal, Forvia and others. | old About text, condensed |
| Beat A label | The bottleneck moved. | manifesto h2 |
| Beat A question → answer | Can we build it? → Should we? | manifesto |
| Beat A aside | Nothing says no anymore, not the budget and not the tech, so every no has to come from us. | verbatim |
| Beat B label | Manifesto · 4 min read | 875 words |
| Title / tagline | Worth building. / Anyone can build now. Almost no one asks if they should. | verbatim |
| Thesis | Building got cheap, so the expensive mistake is now building the wrong thing beautifully, at speed, for people who never asked. | verbatim |
| Habit glosses | The best signal is someone already hacking it. / It pays, it feels different, it's built for what's next. / In people's hands while it's still cheap to fix. / Show people what's worth wanting. | condensed from the habits |
| Action line + CTA | Before you build the next thing, read this. → **Read the manifesto** | new |
| Work kicker | Built to prove it. | from the last paragraph |
| Close lede | If you're building something and you're not sure it's worth it, let's find out. Fast. | verbatim |

---

## 10. Later (not in this build)

- **A real expression clip.** Generate a 2–3 s Veo clip from `poster-end.jpg` (first frame) to a skeptical side-eye (last frame, styled on `avatar.png`), on the same near-black ground. Extract it as `assets/companion/doubt/NNN.jpg`, add `"doubt": {count}` to `manifest.json`, and in `pickFrame` scrub it by `--skeptic` in manifesto mode instead of the cross-fade. The cross-fade ships first, and this would make it seamless.
- **Habits on the cards:** tag each project card with the habit it best shows (for example "Hack first" on Sigma). Robin would need to choose the mapping.
- Update the home page meta description so it mentions the manifesto once the article is live.
