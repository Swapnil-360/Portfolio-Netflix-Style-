---
name: human-design-review
description: Human Design Review & Quality Gatekeeper. Use this skill to prevent generic AI-generated interfaces, review visual hierarchy, typography, color palettes, motion taste, and enforce manual/browser-based multi-viewport verification before declaring any frontend task complete.
---

# Human Design Review: The Anti-Generic UI Gatekeeper

This skill exists to ensure that interfaces built with Antigravity and GSD look, feel, and function like they were designed and polished by an elite human design team — not assembled from predictable AI templates.

## Core Philosophy: Avoiding the "AI Cliché" Trap

AI-generated interfaces share recognizable flaws that instantly telegraph "machine-made":
- **The Cookie-Cutter SaaS Grid:** Uniform 3-column cards with identical pill tags and centered text.
- **Gradient & Glow Overdose:** Neon glow behind every card, heavy glassmorphism on elements that don't need elevation.
- **Bland Neutrality:** Lack of point of view, generic sans-serif fonts (plain Arial/system-ui), zero typographic hierarchy.
- **Excessive Containers:** Nesting boxes inside boxes inside boxes with identical rounded corners.
- **Unmotivated Movement:** Elements flying in from 5 directions with bouncy easing that causes cognitive fatigue.

---

## 1. Visual Design Standards

When evaluating or designing any UI component:

### Typography & Hierarchy
- **Intentional Font Pairings:** Pair expressive display typefaces with workhorse body fonts.
  - *Editorial / Cinematic:* Bebas Neue / Oswald + Instrument Serif + Inter.
  - *Modern Tech:* Space Grotesk / Geist + Inter.
  - *Classic Craft:* Newsreader / Playfair + SF Pro / Inter.
- **Proportional Scale:** Establish a strict type scale (`text-xs`, `text-sm`, `text-base`, `text-xl`, `text-3xl`, `text-5xl`). Never let titles blend into subheadings.
- **Tracking & Leading:** Tighten tracking on display headings (`tracking-[-0.02em]` to `tracking-[0.02em]`); open tracking on small caps / kickers (`tracking-[0.2em]` to `tracking-[0.35em]`).

### Color & Elevation
- **Deliberate Palette:** Pick 1 dominant tone, 1 secondary supporting tone, and 1 intentional accent color.
- **Tonal Contrast:** Dark themes should use deep ink hues (`#07070a`, `#0e0e13`, `#14141c`) rather than flat `#000000` or washed-out gray `#222222`.
- **Grounded Elevation:** Use layered borders (`border-white/[0.08]` to `border-white/20`) and subtle directional drop shadows rather than loud diffuse glows.

### Composition & Layout
- **Rhythm & Asymmetry:** Break monotonous grids with hero highlights, wide feature banners, horizontal rails, and side-by-side split layouts.
- **Whitespace with Purpose:** Generous gutters on desktop (`clamp(16px, 4vw, 64px)`); tight, compact padding on mobile so content isn't stranded across miles of empty scrolling.

---

## 2. Animation & Motion Design Standards

- **Purposeful Motion:** Every animation must guide user attention, indicate state change, or provide spatial grounding. If an animation is purely decorative and distracts from content, remove it.
- **Natural Physics:** Use smooth cubic-bezier curves (e.g. `[0.22, 1, 0.36, 1]`) or damp springs (`stiffness: 180, damping: 20`). Never use linear easing for UI transitions.
- **No Layout Shifts:** Animating properties MUST be limited to `transform` (translate, scale, rotate) and `opacity`. Never animate `width`, `height`, `margin`, or `padding` during scroll or interactive events.
- **Accessibility (`prefers-reduced-motion`):** Always wrap animations in a reduced-motion hook or query. When motion is reduced, render static `opacity: 1` states immediately.

---

## 3. The 8-Step Human Design Review Gate

Before any frontend feature, bugfix, or page design is marked complete, execute this review loop:

```
[1. Build Cleanly] ➔ [2. Start Local Server] ➔ [3. Desktop Audit] ➔ [4. Tablet Audit]
        ↑                                                                    ↓
[8. Quality Pass]  ←  [7. Implement Fixes]   ←  [6. Log Discrepancies] ← [5. Mobile 360-414px Audit]
```

### Review Checklist:
1. **Desktop Check (1440px - 1920px):**
   - Does the screen feel full, balanced, and intentional?
   - Is horizontal alignment crisp with consistent container bounds?
   - Are hover states smooth and non-jarring?
2. **Mobile Check (360px - 414px):**
   - Is there any horizontal document blowout (`overflow-x` causing unwanted page scrolling)?
   - Are touch targets at least 44x44px?
   - Are cards compactly proportioned (using swipe rails or compact stacks rather than 900px tall vertical blocks)?
   - Are font sizes legible and free from awkward word wrapping?
3. **Typography & Contrast:**
   - Run a quick contrast check: is text readable against dark/light backgrounds?
   - Are muted texts (`text-mist`, `text-smoke`) high enough contrast for accessibility?
4. **State Coverage:**
   - Does the component have explicit loading, empty, and error fallback states?

> **Rule of Completion:** Never declare a UI task complete simply because the TypeScript code compiled. It must pass this visual audit.

