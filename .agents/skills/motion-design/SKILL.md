---
name: motion-design
description: Animation, Physics & Motion Engineering. Use this skill when implementing Framer Motion springs, GSAP ScrollTrigger timelines, 3D WebGL / Canvas effects, micro-interactions, page transitions, and accessible motion performance.
---

# Animation & Motion Design Engineering

This skill defines the technical standards, easing curves, and architecture for fluid, cinematic motion in web applications.

## 1. Physics & Easing Standards

Never use CSS default `ease` or linear transitions for UI elements. Use intentional curves:

```ts
// Cinematic Ease (Smooth entry, lingering deceleration)
export const CINE_EASE = [0.22, 1, 0.36, 1] as const;

// Snappy Micro-interaction Spring (Buttons, toggles, badges)
export const SNAPPY_SPRING = { stiffness: 320, damping: 24, mass: 0.5 };

// Gentle Layout Spring (Cards, modal entrances, rails)
export const GENTLE_SPRING = { stiffness: 180, damping: 22, mass: 0.8 };

// Parallax Drift Spring (Pointer following, ambient orbs)
export const PARALLAX_SPRING = { stiffness: 60, damping: 18 };
```

---

## 2. Framer Motion Implementation Rules

### Staggered Reveals
Always use `staggerChildren` and `delayChildren` on parent motion containers rather than manual delays on every child:

```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: CINE_EASE },
  },
};
```

### Layout Transitions (`layout` and `layoutId`)
- Use `layoutId` for shared element transitions (e.g. tabs, active indicator pills, modal expansions).
- Always wrap shared element trees in `<LayoutGroup>`.

### IntersectionObserver Safety
- When animating elements inside transformed or scaled parent scenes, use safe viewport amounts:
  `viewport={{ once: true, amount: 0.05 }}`
- **Never** leave elements stuck at `opacity: 0` if `whileInView` fails on mobile browsers. Use defensive initial values or smooth entry fallbacks.

---

## 3. Scroll-Based Storytelling & Performance

- **Use Virtual Scroll (Lenis):** Pair Framer Motion's `useScroll` with a smooth virtual scroll provider (e.g. `Lenis`) for jitter-free scroll velocity tracking.
- **Offload to GPU:** Ensure animated transforms use `transform: translate3d(...)` or `will-change: transform`.
- **Pause When Off-Screen:** Canvas particles, 3D WebGL shaders, and video backgrounds must pause processing when not in the active viewport using `IntersectionObserver`.

---

## 4. Accessibility & Reduced Motion

Always honor the user's OS-level motion preference:

```tsx
export function useReducedMotionPref(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
}
```
When `reduced === true`:
- Disable all parallax shifts and auto-scrolling tickers.
- Substitute opacity fades for spring translations.
- Disable 3D tilt effects (`Tilt`).

