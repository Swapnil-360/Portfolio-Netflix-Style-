# Frontend Engineering Rules

- Maintain design token consistency (`#07070a`, `#ff2a44`, Bebas Neue, Instrument Serif, Inter).
- Every interactive element must have a visible focus-visible ring and keyboard accessibility (`Enter`, `Space`).
- Never cause horizontal page overflow (`overflow-x: clip; max-width: 100vw;`).
- Mobile layouts must use compact touch rails (`overflow-x-auto snap-x snap-mandatory`) with indicator dots.
- Animations must respect `prefers-reduced-motion` and only animate `transform` or `opacity`.

