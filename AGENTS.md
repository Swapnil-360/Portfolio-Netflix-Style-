# Antigravity & GSD Development Rules: Swapnil Portfolio & Product Suite

This project operates as a professional software development environment with strict quality, design, and security engineering gates.

---

## 1. Frontend & Visual Engineering Rules

- **Respect Stack & Ecosystem:** This codebase uses **React 18 + TypeScript + Vite 6 + Tailwind CSS v4 + Framer Motion + Lenis**. Do not inject competing UI or animation frameworks (e.g., do not add Bootstrap or conflicting CSS runtimes).
- **Design Tokens & Theme Consistency:**
  - Dark cinematic aesthetic: canvas `#07070a`, secondary `#0e0e13`, elevated `#16161d`.
  - Brand accents: Crimson `#e50914` / `#ff2a44`, Gold laurel `#d9b46a`, Emerald badge `#10b981`.
  - Typography: Display in `font-display` (Bebas Neue / Oswald), quotes in `font-serif` (Instrument Serif), UI in `font-sans` (Inter).
- **Semantic & Accessible Markup:**
  - Interactive elements MUST use `<button>` or `<a>`. Never use plain `<div>` with click handlers without `role="button"`, `tabIndex={0}`, and keyboard listeners (`Enter`, `Space`).
  - All form controls require explicit labels (`htmlFor` or `aria-label`).
  - Image assets must declare descriptive `alt` tags and high-DPI `srcSet` where available.
- **Strict Responsiveness & Overflow:**
  - Zero body-level horizontal scrolling. Containers must employ `overflow-x: clip; max-width: 100vw;`.
  - Horizontal swipe rails on mobile must use `rail flex overflow-x-auto snap-x snap-mandatory` with scroll indicator dots.
  - Test all components across `375px` (mobile), `768px` (tablet), and `1440px` (desktop).

---

## 2. Core Development & Architecture Rules

- **Inspect Before Editing:** Always read and comprehend existing files, state hooks, and component lifecycles before modifying code.
- **Preserve Documentation & Comments:** Maintain code documentation integrity and existing comments.
- **Defensive State Handling:** Always support loading, error, empty, and populated states.
- **Strict TypeScript:**
  - Zero tolerance for untyped `any`.
  - Strict null and undefined checks on props and API results.
  - Ensure `npm run build` (`tsc -b && vite build`) passes with 0 errors after every change.
- **Verification Guarantee:** Never declare a feature or bugfix complete simply because code compiled. Visually and functionally verify it.

---

## 3. Security & Access Control Rules

- **Credential & Secret Protection:**
  - Never commit API keys, private tokens, or connection strings into version control.
  - Client-side code may only consume public variables (`VITE_*`).
  - External links must declare `rel="noreferrer"` with `target="_blank"`.
- **Input Validation & Sanitization:**
  - Validate all user inputs against strict regular expressions and bounds before processing.
  - Ban unescaped HTML injections (`dangerouslySetInnerHTML`).
- **Dependency Hygiene:**
  - Audit third-party packages before installation. Keep dependencies lean and secure.

---

## 4. Independent Code Review Rules (CodeRabbit Quality Gate)

- **Independent Adversary:** CodeRabbit is treated as an independent reviewer. Never automatically or blindly accept AI review suggestions without verifying against actual codebase logic.
- **Strict Scope Boundaries:** When addressing review findings, apply fixes exclusively to the affected lines. Never modify unrelated files or refactor stable features.
- **Zero Unauthorized Commits:** Never run `git commit`, `git push`, or merge operations without explicit user consent.
- **Verification Loop:** Every CodeRabbit fix must be verified with `npm run build` to ensure no regressions are introduced.
