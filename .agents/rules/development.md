# Development & Architecture Rules

- Inspect existing codebase patterns before making edits.
- Never rewrite working features unnecessarily.
- Maintain TypeScript strictness (0 `any`, full null safety).
- Verify every build passes cleanly with `npm run build` (`tsc -b && vite build`) with zero errors.
- Never declare a UI feature complete without visual and responsive verification.

