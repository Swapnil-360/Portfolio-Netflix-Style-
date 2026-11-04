---
name: production-audit
description: Production Readiness, Security, Accessibility & Code Quality Audit. Use this skill to perform pre-deployment audits, TypeScript strictness checks, bundle size analysis, WCAG 2.1 accessibility audits, and vulnerability scans.
---

# Production Readiness & Code Quality Audit Runbook

This skill establishes the production gate for web applications, ensuring high performance, accessibility compliance, strict type safety, and security best practices.

## 1. Static Quality & Type Correctness

Execute the primary typecheck and build pipeline:
```bash
# TypeScript strict verification
npx tsc -b --noEmit

# Production bundle compilation
npm run build
```

### Type Quality Rules:
- **Zero `any`:** Ban untyped `any` in production code paths. Use strict union types, generics, or `unknown` with type guards.
- **Strict Null Checks:** Always verify nullable properties before property access (`user?.email ?? 'Fallback'`).
- **Exhaustive Dependencies:** Verify `useEffect` and `useCallback` dependency arrays reflect all closed-over state and props.

---

## 2. Accessibility (a11y) & WCAG 2.1 AA Audit

Every production view must satisfy these criteria:
1. **Interactive Semantics:** Any clickable element that triggers an action MUST be a `<button>` or `<a>` tag, never a plain `<div>` without `role="button"` and `tabIndex={0}`.
2. **Keyboard Traps & Shortcuts:**
   - Interactive components must respond to `Enter` and `Space`.
   - Modals and drawers must trap focus and close on `Escape`.
3. **Contrast Ratios:**
   - Normal text: >= 4.5:1 contrast against background.
   - Large text (>= 24px or bold 18px): >= 3:1 contrast.
4. **Form Labels:** Every `<input>`, `<textarea>`, and `<select>` MUST have an associated `<label>` via `htmlFor` or `aria-label`.
5. **Alt Text:** Every meaningful `<img>` must supply descriptive `alt` text; decorative graphics must have `aria-hidden="true"`.

---

## 3. Security & Vulnerability Audits

### Client-Side Security:
- **No Hardcoded Secrets:** Never embed API keys, service role keys, or database connection strings in client-side code (`VITE_`, `NEXT_PUBLIC_` should only contain publishable keys).
- **Target Blank Sanitization:** Any external link with `target="_blank"` MUST declare `rel="noreferrer"` or `rel="noopener noreferrer"` to prevent tab-nabbing vulnerabilities.
- **XSS Prevention:** Avoid `dangerouslySetInnerHTML`. Sanitize any user-generated markdown or HTML before rendering.

### Dependency Audit:
```bash
npm audit --omit=dev
```
Audit output must be reviewed: fix any high or critical severity vulnerabilities before shipping to production.

---

## 4. Performance & Bundle Budgets

- **Code Splitting:** Modals, heavy visual backdrops, and third-party libraries must be lazy-loaded using `React.lazy()` and `<Suspense>`.
- **Image Optimization:** Use modern image formats (WebP/AVIF), provide `srcSet` for high-DPI displays, and add `loading="lazy"` on below-the-fold media.
- **Gzip Bundle Limit:** Individual JavaScript chunks should not exceed 150 kB gzipped without justification.

