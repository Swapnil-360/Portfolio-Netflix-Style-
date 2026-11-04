# Automated QA & Audit Workflow Runbook

This runbook defines the standard quality assurance and verification procedure executed before shipping any feature or milestone.

---

## 1. Quality Assurance Matrix

### A. Functional Testing
- [ ] **Interactive Controls:** All buttons, toggles, profile switchers, and dropdowns trigger expected actions.
- [ ] **Links & Routing:** Internal section jumps (`#about`, `#moments`, etc.) scroll smoothly; external links open in new tabs with `rel="noreferrer"`.
- [ ] **Modals & Drawers:** Open smoothly, trap focus, and close reliably via Escape key, close buttons, and backdrop click.
- [ ] **Forms & Validation:** Contact forms validate required fields and email patterns before submission; provide clear success/error toasts.

### B. Visual & Responsive Testing
- [ ] **Desktop (1440px - 1920px):** Balanced typography, majestic hero scaling, 4-column awards grid, and side-by-side paper abstracts.
- [ ] **Tablet (768px - 1024px):** 2-column grids, smooth scroll snapping, and readable cards without awkward line wraps.
- [ ] **Mobile (360px - 414px):**
  - Zero body-level horizontal overflow.
  - Horizontal swipe rails with active dot indicators.
  - Compact portrait cards and collapsible long abstracts.
  - Back to Top button floating fixed at bottom-right (`z-[999]`).

### C. Technical & Build Verification
- [ ] **Zero TypeScript Errors:** `npx tsc -b` passes with 0 diagnostics.
- [ ] **Production Compilation:** `npm run build` compiles Vite bundle in < 2.5 seconds with optimal chunk sizes.
- [ ] **Zero Console Errors:** No React hydration mismatches, missing key warnings, or uncaught promise rejections.

### D. Security & Vulnerability Testing
- [ ] **Secrets Check:** No API tokens, private keys, or passwords embedded in code.
- [ ] **Tab-Nabbing Protection:** All `target="_blank"` links declare `rel="noreferrer"`.
- [ ] **Dependency Audit:** Run `npm audit --omit=dev` and confirm 0 high/critical issues.

---

## 2. Standard Audit Report Format

When conducting an audit, compile findings into this structured table:

| # | Issue Description | Severity | Affected File / Component | Recommended Fix | Status | Remaining Risk |
|---|-------------------|----------|---------------------------|-----------------|--------|----------------|
| 1 | Sample issue | Low / Med / High / Critical | `src/components/...` | Concrete patch | Fixed / Open | Analysis |

