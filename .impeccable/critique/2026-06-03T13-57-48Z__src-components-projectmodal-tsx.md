---
target: the Learn More modal detail panels
total_score: 32
p0_count: 0
p1_count: 3
timestamp: 2026-06-03T13-57-48Z
slug: src-components-projectmodal-tsx
---
# Design Critique: ProjectModal & Learn More Detail Panels

Detailed visual, UX, and heuristic review of the modal detail panel displayed when users click "Learn More" on a project card.

## Heuristics Scoring

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Background scale-down backdrop of the parent app (`scale(0.96)`) and backdrop blur provide clear system state. |
| 2 | Match System / Real World | 3 | 3D holographic parallax panel reactiveness feels tactile, but the static content layout is flat. |
| 3 | User Control and Freedom | 4 | Easy close via X, click-away, or ESC key. |
| 4 | Consistency and Standards | 2 | Metrics blocks and standard bullet points feel like generic browser defaults rather than premium custom designs. |
| 5 | Error Prevention | 4 | Safe, single-focused modal viewport prevents user errors. |
| 6 | Recognition Rather Than Recall | 3 | Section numbers (`[01] // Executive Summary`) are clear anchors, but important data is lost in the walls of text. |
| 7 | Flexibility and Efficiency | 3 | Primary and secondary CTA buttons are clear, but layout is heavy for skimmers. |
| 8 | Aesthetic and Minimalist Design | 2 | Cluttered layout, walls of unstyled copy, standard browser bullet styles, and plain metrics boxes violate the "premium workshop" aesthetic. |
| 9 | Error Recovery | 4 | n/a |
| 10 | Help and Documentation | 4 | n/a |
| **Total** | | **32/40** | **Good** |

## Anti-Patterns Verdict

- **LLM Design Assessment**: The modal details currently look like a boilerplate template containing copy-pasted portfolio text. The left-side parallax/gallery is a highlights visual, but the right-side details panel lacks strategic breathing room, custom layout modules, and premium typography hierarchy.
  1. **Resume-style Bullet Points**: Standard browser `list-disc` elements are used for role and impact. This breaks the high-end custom look.
  2. **Unstructured Copy Walls**: The executive summary `intro` contains long block paragraphs (~150 to ~250 words) with no formatting, bold lead-ins, or semantic hierarchy.
  3. **Basic Stat Cards**: The metrics blocks use low-opacity gray borders and simple background boxes. They lack visual punch and high-performance laboratory feel.

## Overall Impression

While the outer 3D card layout and entry transition feel highly advanced, opening the modal exposes a layout that looks too much like a standard text document. To 100x the experience, we need to convert the text walls into structured visual modules, replace list bullets with custom-designed highlights, and style the metrics grid to feel like high-precision metrics.

## What's Working

1. **Depth Cue Transition**: The parent scaling to `scale(0.96)` and blurring creates a strong sense of portal depth.
2. **3D Cursor Parallax**: Interactive hover movement in the left graphic portal gives the visual showcase a tactile quality.
3. **Structured CTAs**: Action buttons are separated and weighted correctly at the bottom of the column.

## Priority Issues

### [P1] wall of prose in Executive Summary
- **Why it matters**: A recruiter or VC spends under 20 seconds skimming a project modal. Facing a 200-word paragraph of light-weight gray text guarantees they will skip it.
- **Fix**: Redesign the summary layout: use a bold, larger lead-in phrase (editorial style), and break prose into structured mini-columns or short, punchy paragraphs with highlighted keywords.

### [P2] Generic List Bullet Styling
- **Why it matters**: Standard browser list discs (`list-disc`) look generic and unstyled. It dilutes the premium builder persona.
- **Fix**: Replace standard `ul`/`li` list styling with custom grid/flex rows featuring thin divider lines, custom marker shapes (e.g. minimal horizontal dashes or micro Active Ice Blue dots), and bold lead-in phrases.

### [P3] basic metrics containers
- **Why it matters**: The key outcomes (metrics) are the most important evidence of Robin's strategy/AI capability. Rendering them in simple gray boxes with plain labels makes them look like secondary metadata.
- **Fix**: Elevate the numbers to high-weight, large Display sizes, use fine vertical borders, and add technical labels to make them look like high-precision instruments.

### [P4] Nav and Tag Styling Lack Spacing Scale
- **Why it matters**: The skills and tags badge list is stacked tightly with low-contrast borders, making it hard to visually segment each item.
- **Fix**: Style tags as clean borderless badges or with 1px outline borders, generous tracking, uppercase font, and slight background tints, arranging them in a clean grid.

## Persona Red Flags

- **Alex (Power User)**: Skimming through project outcomes is frustrating due to the long blocks of plain text and default list formatting. Needs instant visual indicators of key metrics and structured takeaways.
- **Jordan (First-Timer)**: The wall of copy feels intimidating. Without an editorial lead-in or hierarchy shifts, they may close the modal without digesting the details.
- **Project-Specific (Robin, AI Strategist)**: The lack of high-craft styling details on bullet points and metrics contradicts the "Detail defines the premium" strategic principle defined in PRODUCT.md.
