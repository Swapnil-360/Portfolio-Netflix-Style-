import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValue } from 'framer-motion';
import { introSlides, profile } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { useReducedMotionPref } from '../hooks/useMedia';
import { EASE } from './fx';
import { PosterBackdrop } from './Poster';

const SLIDE_MS = 3800;

/**
 * "▶ Preview Reel": darken → zoom into the portrait → cinematic slides highlighting key facts → fade back.
 */
export default function PlayIntro({ onClose }: { onClose: () => void }) {
  useScrollLock(true);
  const reduced = useReducedMotionPref();
  const [phase, setPhase] = useState<'zoom' | 'reel' | 'end'>(reduced ? 'reel' : 'zoom');
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const progress = useMotionValue(0);

  useEffect(() => {
    if (phase !== 'zoom') return;
    const t = window.setTimeout(() => setPhase('reel'), 1600);
    return () => clearTimeout(t);
  }, [phase]);

  const next = useCallback(() => {
    setIndex((i) => {
      if (i >= introSlides.length - 1) {
        setPhase('end');
        return i;
      }
      return i + 1;
    });
    progress.set(0);
  }, [progress]);

  const prev = useCallback(() => {
    setIndex((i) => Math.max(0, i - 1));
    progress.set(0);
  }, [progress]);

  useEffect(() => {
    if (phase !== 'reel' || paused) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const v = progress.get() + (now - last) / SLIDE_MS;
      last = now;
      if (v >= 1) {
        next();
        return;
      }
      progress.set(v);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [phase, paused, index, next, progress]);

  useEffect(() => {
    if (phase !== 'end') return;
    const t = window.setTimeout(onClose, 600);
    return () => clearTimeout(t);
  }, [phase, onClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' || e.key === ' ') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, next, prev]);

  const slide = introSlides[index];

  return (
    <motion.div
      className="fixed inset-0 z-[150] overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      role="dialog"
      aria-label="Preview Reel"
    >
      {/* Zoom in Phase */}
      <AnimatePresence>
        {phase === 'zoom' && (
          <motion.div
            key="zoom"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 1.35, opacity: 0 }}
            transition={{ duration: 1.6, ease: EASE }}
          >
            <img
              src={profile.portrait.src}
              alt=""
              className="h-[75vh] w-auto max-w-none object-contain drop-shadow-[0_0_80px_rgba(255,42,68,0.5)]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reel Slides Phase */}
      {phase === 'reel' && (
        <div
          className="relative flex h-full flex-col justify-between p-6 sm:p-12"
          onPointerDown={() => setPaused(true)}
          onPointerUp={() => setPaused(false)}
        >
          {/* Background Poster for slide */}
          <div className="absolute inset-0 -z-10">
            <PosterBackdrop palette={slide.palette} />
          </div>

          {/* Top Progress Segmented Bar */}
          <div className="relative z-10 flex gap-2">
            {introSlides.map((s, i) => (
              <div key={s.title} className="h-1 flex-1 overflow-hidden rounded bg-white/20">
                <div
                  className="h-full bg-bone transition-all"
                  style={{
                    width: i < index ? '100%' : i === index ? `${progress.get() * 100}%` : '0%',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Slide Content */}
          <div className="relative z-10 mx-auto my-auto max-w-3xl text-center">
            <motion.p
              key={`sub-${index}`}
              className="text-xs font-bold uppercase tracking-[0.34em] text-crimson-2"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              {slide.subtitle}
            </motion.p>
            <motion.h2
              key={`title-${index}`}
              className="mt-3 font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.88] text-bone"
              initial={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              {slide.title}
            </motion.h2>
            <motion.p
              key={`detail-${index}`}
              className="mt-6 text-base sm:text-xl leading-relaxed text-bone/85 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            >
              {slide.detail}
            </motion.p>
          </div>

          {/* Controls Bottom Row */}
          <div className="relative z-10 flex items-center justify-between text-xs font-semibold text-mist">
            <button type="button" onClick={prev} className="hover:text-bone transition">
              ← PREVIOUS
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/20 px-4 py-1.5 text-bone hover:border-white/50 transition"
            >
              CLOSE REEL (ESC)
            </button>
            <button type="button" onClick={next} className="hover:text-bone transition">
              NEXT →
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}

