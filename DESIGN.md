---
name: Robin Molinas Portfolio
description: Strategic and high-performance AI builder portfolio design system.
colors:
  primary: "#D7E2EA"
  neutral-bg: "#0C0C0C"
  accent-blue: "#3B82F6"
  accent-purple: "#6C5CE7"
  accent-amber: "#F59E0B"
typography:
  display:
    fontFamily: "Kanit, sans-serif"
    fontSize: "clamp(3rem, 12vw, 160px)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Kanit, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 300
    lineHeight: 1.6
    letterSpacing: "normal"
rounded:
  sm: "12px"
  md: "24px"
  lg: "50px"
spacing:
  sm: "12px"
  md: "24px"
  lg: "48px"
components:
  card:
    backgroundColor: "{colors.neutral-bg}"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: "40px"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "9999px"
    padding: "14px 40px"
---

# Design System: Robin Molinas Portfolio

## 1. Overview

**Creative North Star: "The High-Performance Workshop"**

This system represents a sophisticated workspace for an AI builder who bridges high-level executive strategy with physical technical execution. The interface must feel like a live, high-precision laboratory: deep dark backgrounds, fine border separations, solid and sharp typographic contrasts, and calculated motion physics. 

We explicitly reject low-craft templates, SaaS-cliché grids, decorative text gradients, lazy card margins, and gimmicky glassmorphism. Spacing is mathematically balanced, hierarchy is stark, and interactions are immediate and responsive.

**Key Characteristics:**
- **Volumetric Depth**: Pitch-black surfaces set against deep neutral-tinted backgrounds using extremely thin, sharp borders.
- **Strategic Typographic Contrast**: High-weight display headings paired with ultra-light, generous body copy.
- **Fluid Physics**: Transitions modeled on clean physical inertia with exponential ease-out curves.

## 2. Colors

A highly restrained and committed dark mode palette where the background uses a cool neutral tint and accents are used strategically.

### Primary
- **Active Ice Blue** (#D7E2EA / `oklch(89% 0.015 220)`): The primary text and active brand element color, providing a crisp, high-contrast read against the background.

### Secondary
- **Trends Blue** (#3B82F6 / `oklch(60% 0.18 250)`): Used as a functional active color for building products and interactive states.
- **Claims Purple** (#6C5CE7 / `oklch(55% 0.22 280)`): Secondary brand accent representing core platform design and architecture.
- **Leopard Amber** (#F59E0B / `oklch(75% 0.18 80)`): High-visibility tertiary accent used for immersive campaign interfaces.

### Neutral
- **Deep Obsidian** (#0C0C0C / `oklch(14% 0.005 240)`): The solid, deep base canvas for the page, preventing harsh pure black strain while maintaining absolute depth.
- **Pure Laboratory Black** (#000000 / `oklch(0% 0 0)`): Surface container color for cards, creating pure light contrast against the obsidian base.

### Named Rules
**The Rarity Rule.** Accents are used on less than 10% of any viewport. Accent colors denote active interactive focus and system pathways, never simple decoration.
**The Tinted Neutral Rule.** Never use pure black (#000) or pure white (#fff) for base typography or background surfaces. Neutral colors are always tinted with a tiny hint of blue/cool chroma.

## 3. Typography

**Display Font:** Kanit (with sans-serif fallbacks)
**Body Font:** Kanit (with sans-serif fallbacks)

### Hierarchy
- **Display** (Weight 900, `clamp(3rem, 12vw, 160px)`, Line-height 1): Extreme scale for primary visual anchors and hero layout names.
- **Headline** (Weight 700, `clamp(1.5rem, 4vw, 3rem)`, Line-height 1.1): Core block titles and modal headlines.
- **Body** (Weight 300, `1.125rem`, Line-height 1.6): Clean, ultra-readable descriptions. Restricted to a maximum width of 65ch to maintain line length comfort.
- **Label** (Weight 600, `0.75rem`, Letter-spacing `0.2em`, Uppercase): Strict category tags, badge metrics, and action subtext.

### Named Rules
**The Stark Hierarchy Rule.** Displays are always at least 4x the size of the accompanying body copy. High size differential creates immediate focal anchors and reduces cognitive reading load.
**The No-Em-Dash Rule.** Do not use em-dashes (`—` or `--`) in copy or headers. Hierarchy and clauses are separated by commas, colons, or standard periods.

## 4. Elevation

The system is built on flat, sharp physical layering. We do not use blurry shadows or volumetric lighting. Depth is conveyed purely through fine border outlines, relative scaling, and z-index offsets.

### Named Rules
**The Boundary Outline Rule.** Container elements separate themselves from the deep backdrop using thin (1px to 2px) borders rather than drop shadows.
**The Scale-on-Active Rule.** Inactive surfaces scale down (e.g. to `scale(0.96)`) when overlays or modals are triggered, providing a tactile, layered focus shift.

## 5. Components

Components are styled with exact, calculated shapes and clean transitions.

### Buttons
- **Shape:** Pill-shaped (rounded `9999px`)
- **Primary:** Crisp Active Ice Blue background with Obsidian text. Padding `14px 40px`.
- **Secondary:** Transparent background with Active Ice Blue border (1px) and text.
- **Hover Treatment:** Secondary borders transition from transparent/low opacity to solid with a smooth transition (`transition: border 0.3s cubic-bezier(0.16, 1, 0.3, 1)`).

### Cards
- **Shape:** Generously rounded corners (rounded `50px` to `60px` on desktop).
- **Background:** Pure Laboratory Black (#000000).
- **Borders:** Thin (2px) Active Ice Blue border with 20% opacity at rest, shifting to 75% opacity on hover.
- **Transition:** Hover borders transition immediately on enter and ease-out on leave.

### Navigation
- **Style:** Centered, sparse, uppercase text links with generous track spacing. Hover transitions opacity from 100% to 70% instantly.

## 6. Do's and Don'ts

### Do:
- **Do** use uniform height definitions for sticky desktop cards (`md:h-[55vh] md:min-h-[460px] md:max-h-[500px]`) to maintain deck symmetry.
- **Do** transition hover states from low opacity to high opacity (e.g., `border-[#D7E2EA]/20` to `border-[#D7E2EA]/75`).
- **Do** wrap large text blocks in strict layout boundaries that cap line lengths to 65ch.
- **Do** use OKLCH tints for accent colors to keep a consistent, harmonized color spectrum.

### Don't:
- **Don't** use colored stripe borders (`border-left`/`border-right`) on cards, tags, or modals.
- **Don't** use gradient text (`background-clip: text`) on any label, subtitle, or card header. Text is always solid.
- **Don't** use em-dashes (`—`) in project descriptions or brand copy. Use colons or commas instead.
- **Don't** use decorative glassmorphic backdrops unless it serves to mask layout depth during modal activation.
