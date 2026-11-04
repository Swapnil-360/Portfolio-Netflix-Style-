import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useReducedMotionPref } from '../hooks/useMedia';
import { EASE, Magnetic } from './fx';

/**
 * Cinematic Opening Sequence:
 * black → studio card → SWAPNIL → THE BUILDER → portrait reveal → tagline → ▶ EXPLORE SERIES
 */
const TIMELINE = [
  { at: 300, beat: 1 },  // Studio Card
  { at: 1800, beat: 2 }, // Name: SWAPNIL
  { at: 2600, beat: 3 }, // THE BUILDER
  { at: 3300, beat: 4 }, // Portrait with cinematic light
  { at: 4200, beat: 5 }, // Role / Tagline
  { at: 4900, beat: 6 }, // Interactive Play / Enter Button
];

export default function OpeningSequence({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotionPref();
  const [beat, setBeat] = useState(reduced ? 6 : 0);

  useEffect(() => {
    if (reduced) return;
    const timers = TIMELINE.map(({ at, beat }) => window.setTimeout(() => setBeat(beat), at));
    return () => timers.forEach(clearTimeout);
  }, [reduced]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') onDone();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[120] overflow-hidden bg-black"
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(12px)' }}
      transition={{ duration: 0.9, ease: EASE }}
      role="dialog"
      aria-label="Opening titles"
    >
      {/* Cinematic Letterbox Bars */}
      <motion.div
        className="absolute inset-x-0 top-0 z-30 h-[7vh] bg-black"
        initial={{ y: 0 }}
        animate={{ y: beat >= 6 ? '-100%' : 0 }}
        transition={{ duration: 1.2, ease: EASE }}
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 z-30 h-[7vh] bg-black"
        initial={{ y: 0 }}
        animate={{ y: beat >= 6 ? '100%' : 0 }}
        transition={{ duration: 1.2, ease: EASE }}
      />

      {/* Atmospheric Projector & Crimson Flare */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{ background: 'radial-gradient(60% 50% at 50% 55%, rgba(229,19,43,0.22), transparent 70%)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: beat >= 2 ? [0, 0.9, 0.5, 1] : 0 }}
        transition={{ duration: 1.4 }}
      />

      {/* Studio Card */}
      <AnimatePresence>
        {beat === 1 && (
          <motion.div
            key="studio"
            className="absolute inset-0 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'blur(6px)' }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="font-sans text-xs font-semibold text-mist sm:text-sm tracking-[0.5em] text-center"
              initial={{ letterSpacing: '0.2em', opacity: 0 }}
              animate={{ letterSpacing: '0.5em', opacity: 1 }}
              transition={{ duration: 1.5, ease: EASE }}
            >
              {profile.originalLabel}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Portrait Reveal with Clean Cinematic Backlighting */}
      <motion.div
        className="absolute inset-x-0 bottom-0 z-0 mx-auto flex h-[68vh] max-w-[850px] items-end justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 1.12, filter: 'blur(18px) brightness(0.25)' }}
        animate={beat >= 4 ? { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)' } : {}}
        transition={{ duration: 1.6, ease: EASE }}
      >
        <img
          src={profile.portrait.src}
          srcSet={profile.portrait.srcSet}
          alt={profile.portrait.alt}
          className="h-full w-auto max-w-none object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_75%,transparent_98%)]"
        />
      </motion.div>
      <div aria-hidden className="absolute inset-0 z-[1] bg-[radial-gradient(70%_60%_at_50%_40%,transparent_30%,rgba(0,0,0,0.85)_100%)] pointer-events-none" />

      {/* Title & Subtitle — Animated up to frame the head from above */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center pointer-events-none">
        <motion.h1
          className="font-display leading-[0.82] text-bone drop-shadow-[0_8px_40px_rgba(0,0,0,0.85)] tracking-wide"
          style={{ fontSize: 'clamp(4.2rem, 19vw, 14rem)' }}
          initial={{ opacity: 0, scale: 1.3, filter: 'blur(20px)', letterSpacing: '0.4em' }}
          animate={beat >= 2 ? { opacity: 1, scale: 1, filter: 'blur(0px)', letterSpacing: '0.04em', y: beat >= 4 ? '-30vh' : 0 } : {}}
          transition={{ duration: 1.3, ease: EASE }}
        >
          {profile.firstName}
        </motion.h1>

        <motion.p
          className="font-sans text-xs sm:text-sm font-bold text-crimson-2 [text-shadow:0_2px_20px_rgba(255,42,68,0.7)]"
          initial={{ opacity: 0, y: 16 }}
          animate={beat >= 3 ? { opacity: 1, y: beat >= 4 ? '-30vh' : 0, letterSpacing: '0.5em' } : {}}
          transition={{ duration: 0.9, ease: EASE }}
        >
          {profile.seriesTag}
        </motion.p>
      </div>

      {/* Role + Play Button — Anchored at the bottom, safely below the chest & neck */}
      <div className="absolute inset-x-0 bottom-[9vh] z-20 flex flex-col items-center gap-4 sm:gap-6 px-4 text-center">
        <motion.p
          className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-bone/90 sm:text-xs sm:tracking-[0.38em]"
          initial={{ opacity: 0, y: 14 }}
          animate={beat >= 5 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {profile.tagline.join('  •  ')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={beat >= 6 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col items-center gap-2"
        >
          <Magnetic strength={0.35}>
            <button
              type="button"
              data-cursor="play"
              onClick={onDone}
              tabIndex={beat >= 6 ? 0 : -1}
              className="group flex items-center gap-3 rounded-full bg-bone px-9 py-3.5 sm:py-4 font-sans text-sm sm:text-base font-bold tracking-wider text-ink shadow-[0_0_60px_rgba(229,19,43,0.45)] transition hover:bg-white hover:scale-105 active:scale-95"
            >
              <span className="text-lg transition-transform group-hover:scale-125 text-crimson">▶</span> EXPLORE SERIES
            </button>
          </Magnetic>
          <p className="text-[10px] sm:text-[11px] text-smoke tracking-wider">Press ENTER or ESC to begin</p>
        </motion.div>
      </div>

      {/* Skip Intro */}
      <button
        type="button"
        onClick={onDone}
        className="absolute right-6 top-[calc(7vh+14px)] z-40 rounded-full border border-white/20 px-4 py-1.5 font-sans text-[11px] font-semibold tracking-[0.2em] text-mist transition hover:border-white/60 hover:text-bone hover:bg-white/5"
      >
        SKIP INTRO
      </button>
    </motion.div>
  );
}
