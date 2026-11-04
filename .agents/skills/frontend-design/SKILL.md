---
name: frontend-design
description: Premium Frontend Design & UI/UX Engineering. Use this skill when building or refining high-end web applications, SaaS dashboards, editorial portfolios, design systems, and responsive layouts with modern component architecture.
---

# Premium Frontend Design & UI/UX Engineering

This skill provides design engineering runbooks, tokens, and component architecture patterns inspired by Emil Kowalski, Linear, Apple, and modern design systems.

## 1. Design Token Architecture

All components must rely on a cohesive design token system rather than ad-hoc arbitrary values:

```css
/* Color Palette System */
--color-surface-base: #07070a;      /* Deep primary canvas */
--color-surface-subtle: #0e0e13;    /* Cards, elevated decks */
--color-surface-elevated: #16161d;  /* Popovers, modals, dropdowns */
--color-surface-active: #22222c;    /* Hover & active fills */

/* Border & Separation Hierarchy */
--border-subtle: rgba(255, 255, 255, 0.08);
--border-default: rgba(255, 255, 255, 0.14);
--border-strong: rgba(255, 255, 255, 0.28);

/* Typography Tokens */
--font-display: "Bebas Neue", "Oswald", sans-serif;
--font-serif: "Instrument Serif", Georgia, serif;
--font-sans: "Inter", system-ui, sans-serif;
```

---

## 2. Component Design Patterns

### A. High-Density SaaS Deck & Cards
- Use subtle inset ring borders (`ring-1 ring-white/10`) instead of heavy outward shadows.
- Ensure all interactive elements have high-visibility focus states (`focus-ring:focus-visible`).
- Use responsive aspect ratios (`aspect-video`, `aspect-[16/10]`, `aspect-[4/5]`) with `object-cover` or `object-contain` to prevent layout jumps during image loading.

### B. Adaptive Navigation Bars
- Transparent on top of page; transforms smoothly into a blurred backdrop (`bg-ink/85 backdrop-blur-xl border-b border-white/10`) on scroll (`scrollY > 40px`).
- Always support mobile hamburger or bottom sheets when viewport width drops below 768px (`md:`).

### C. State Handling Matrix
Every data-driven view MUST implement four standard states:
1. **Loading State:** Skeleton shimmer that matches the exact layout shape of the final card.
2. **Error State:** Human-readable error message with an actionable retry button (`Try Again`).
3. **Empty State:** Contextual icon, motivating header, clear explanation, and primary call-to-action (`Create First Project`).
4. **Populated State:** Crisp data render with progressive disclosure for deep details.

---

## 3. Responsive Layout Strategy

- **Desktop (>= 1280px):** Multi-column grid, persistent sidebars, rich hover-based micro-interactions.
- **Tablet (768px - 1024px):** 2-column grids, collapsible sidebars, magnetic snapping.
- **Mobile (< 768px):**
  - Grid items collapse to 1 column or transform into **horizontal touch rails** (`overflow-x-auto snap-x snap-mandatory`).
  - Active swipe indicators (dots or progress line) communicate list length.
  - Sticky bottom action bars for high-priority CTA buttons.
  - Zero horizontal overflow (`overflow-x: clip; max-width: 100vw;`).

