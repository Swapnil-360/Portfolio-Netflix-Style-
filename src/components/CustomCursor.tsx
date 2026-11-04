import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValue } from 'framer-motion';
import { useFinePointer, useReducedMotionPref } from '../hooks/useMedia';

const LABELS: Record<string, string> = { view: 'VIEW', play: '▶', link: '↗', drag: '↔', close: '✕' };

/**
 * High-performance streaming cursor with instant 1:1 hardware mouse tracking (zero lag)
 * and responsive shape morphing on interactive targets.
 */
export default function CustomCursor() {
  const fine = useFinePointer();
  const reduced = useReducedMotionPref();
  const enabled = fine && !reduced;

  // Direct motion values for 0-latency hardware tracking (no heavy spring lag)
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const [mode, setMode] = useState<string | null>(null);
  const [hoverLink, setHoverLink] = useState(false);
  const [visible, setVisible] = useState(false);
  const [down, setDown] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add('has-custom-cursor');

    const move = (e: PointerEvent) => {
      // Direct instant hardware update — eliminates all cursor lag
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);

      const t = e.target as HTMLElement | null;
      const tagged = t?.closest<HTMLElement>('[data-cursor]');
      setMode(tagged?.dataset.cursor ?? null);
      setHoverLink(!tagged && !!t?.closest('a, button, [role="button"], input, textarea, select'));
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);
    const press = () => setDown(true);
    const release = () => setDown(false);

    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', leave);
    document.addEventListener('pointerenter', enter);
    window.addEventListener('pointerdown', press);
    window.addEventListener('pointerup', release);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', leave);
      document.removeEventListener('pointerenter', enter);
      window.removeEventListener('pointerdown', press);
      window.removeEventListener('pointerup', release);
    };
  }, [enabled, x, y, visible]);

  if (!enabled) return null;

  const label = mode ? LABELS[mode] : null;
  const size = label ? (mode === 'view' ? 70 : 50) : hoverLink ? 36 : 10;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[200] flex items-center justify-center rounded-full will-change-transform"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        width: size,
        height: size,
        opacity: visible ? 1 : 0,
        scale: down ? 0.82 : 1,
        backgroundColor: label
          ? 'rgba(229,19,43,0.95)'
          : hoverLink
          ? 'rgba(255,42,68,0.15)'
          : 'rgba(244,241,236,1)',
        borderColor: hoverLink && !label ? 'rgba(255,42,68,0.75)' : 'rgba(244,241,236,0)',
      }}
      transition={{
        width: { duration: 0.18, ease: 'easeOut' },
        height: { duration: 0.18, ease: 'easeOut' },
        backgroundColor: { duration: 0.15 },
        borderColor: { duration: 0.15 },
        scale: { duration: 0.12 },
      }}
    >
      <span className="absolute inset-0 rounded-full border" style={{ borderColor: 'inherit' }} />
      <AnimatePresence>
        {label && (
          <motion.span
            key={label}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="font-sans text-[11px] font-bold tracking-[0.18em] text-white"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
