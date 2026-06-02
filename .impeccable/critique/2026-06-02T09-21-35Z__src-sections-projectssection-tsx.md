---
target: the design of the Work cards
total_score: 35
p0_count: 0
p1_count: 4
timestamp: 2026-06-02T09-21-35Z
slug: src-sections-projectssection-tsx
---
# Design Critique: ProjectsSection & Work Cards

Detailed visual, heuristic, and anti-pattern design review of the portfolio portfolio Work cards stack.

## Heuristics Scoring

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4 | Solid interactive sticky card scaling indicator during scroll. |
| 2 | Match System / Real World | 3 | Stacking cards simulate a real deck, but action button boundaries had prior inconsistency. |
| 3 | User Control and Freedom | 4 | Modals close easily with close triggers, ESC, or clicking backdrop. |
| 4 | Consistency and Standards | 2 | Card sizing is asymmetrical on desktop (Cards 1-2 are h-auto, Cards 3-6 are h-[55vh]). Hover border dims instead of brightens. |
| 5 | Error Prevention | 4 | Deterministic viewport boundaries. |
| 6 | Recognition Rather Than Recall | 3 | Clear numerical indicator labels, though category text hierarchy could be stronger. |
| 7 | Flexibility and Efficiency | 4 | Great primary (Launch) and secondary (Learn More) paths. |
| 8 | Aesthetic and Minimalist Design | 3 | Premium dark mode and Kanit font, but cluttered by gradient text and em-dashes. |
| 9 | Error Recovery | 4 | n/a |
| 10 | Help and Documentation | 4 | n/a |
| **Total** | | **35/40** | **Very Good** |

## Anti-Patterns Verdict

- **LLM Design Assessment**: Genuinely high craft and premium volumetric feel. The sticky stack interaction is excellent. However, there are two cross-register infractions of the Impeccable shared design laws:
  1. **Gradient text** (`background-clip: text` combined with a gradient background) on category labels for Cards 1 & 2.
  2. **Em-dashes** (`—`) in descriptions which clutter the typography.
  3. **Backward border hover transitions** (hovering dims the border outline from solid to transparent).
- **Deterministic Scan**: CLI detector was unavailable during this run (missing entrypoint script).
- **Visual Overlays**: Live browser overlay is unavailable.

## Overall Impression

The Work cards stack is the visual crown jewel of the website. It is immersive, responsive, and tactile. However, subtle layout inconsistencies (card height discrepancies) and violations of typographic and background clipping rules hold it back from feeling absolutely impeccable.

## What's Working

1. **Cinematic Sticky Stack**: The stacked sticky card transformation (`targetScale` and `scrollYProgress` scaling) is a breathtakingly premium desktop experience.
2. **Distinct Action Hierarchy**: Swapping the primary action (filled slate `Launch Live App`) first, followed by the secondary outline (`Learn more`) creates a perfect, clear cognitive decision path.
3. **Immersive Depth**: The pitch-black `bg-[#000000]` cards layered with fine borders create outstanding volumetric separation on the dark layout.

## Priority Issues

### [P1] Card Sizing Asymmetry on Desktop
- **Why it matters**: Cards 1 & 2 have a dynamic `h-auto` height, while Cards 3-6 have a fixed `md:h-[55vh]` height. As they stack sticky, the cards have different dimensions, breaking the uniform "deck of cards" alignment and causing visual distraction.
- **Fix**: Apply the same `md:h-[55vh] md:min-h-[460px] md:max-h-[500px]` classes to Cards 1 & 2 so the entire deck has identical desktop heights.

### [P2] Category Gradient Text Violation
- **Why it matters**: Using a gradient text background clip (`background-clip: text`) on Cards 1 & 2 is a decorative design anti-pattern that reduces readability.
- **Fix**: Replace the gradient with a clean, solid, high-contrast Slate-white or high-end solid color accent, and emphasize it using tracking and text weight.

### [P3] Backward Border Hover State
- **Why it matters**: The card border is currently configured as `border-[#D7E2EA]` (solid) and `hover:border-[#D7E2EA]/60` (semi-transparent). This causes the border to *dim* on hover, which is a backward interactive transition.
- **Fix**: Change it so the border starts as semi-transparent (e.g. `border-[#D7E2EA]/20` or `border-[#D7E2EA]/30`) and brightens to solid `border-[#D7E2EA]/70` or `border-[#D7E2EA]` when hovered.

### [P4] Typographic Em-Dash Violations
- **Why it matters**: Using em-dashes (`—`) inside project description strings clutters the Kanit typography.
- **Fix**: Remove all em-dashes and replace them with standard commas, colons, or parentheses.

## Persona Red Flags

- **Alex (Power User)**: The backward border transition feels unresponsive. The visual sizing mismatch makes the deck feel unpolished.
- **Jordan (First-Timer)**: The gradient text on the category label is hard to read against the pure black backdrop.
- **Project-Specific (Robin, AI Strategist)**: A premium portfolio must reflect perfect, flawless frontend implementation. Dynamic height shifts and color clipping breaks the Strategic Designer illusion.

## Minor Observations

- The tag badges (`project.tags`) could have a subtle hover scale or hover border brightening to feel as alive as the cards themselves.
- The `isConsultingCard` check relies on checking if `parseInt(project.number) >= 3` which is a hardcoded magic number. It works but could be structured as an explicit boolean property in the type definition.

## Questions to Consider

- What if all cards had a uniform, highly responsive 3D card tilt effect similar to the modal left panel viewport?
- Does the category label really need a gradient to feel "AI-related," or would a razor-sharp, track-spaced solid Slate font look even more premium?
