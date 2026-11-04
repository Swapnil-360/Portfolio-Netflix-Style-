import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { sectionMeta, type SectionId } from '../data/portfolio';
import { useWatchProgress } from '../hooks/sectionProgress';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { useFinePointer } from '../hooks/useMedia';
import { EASE, RevealText } from './fx';
import { PosterBackdrop } from './Poster';
import { RailButtons } from './Rail';

const GLYPHS: Record<SectionId, string> = {
  story: 'CV',
  moments: '★',
  skills: '{ }',
  originals: '04',
  research: '05',
  about: '06',
  journey: '07',
  picks: '08',
};

export default function ContinueWatching({ order }: { order: SectionId[] }) {
  const progress = useWatchProgress();
  const { scrollTo } = useSmoothScroll();
  const fine = useFinePointer();
  const [hovered, setHovered] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const rail = useRef<HTMLDivElement>(null);

  // Seamless duplicated items for infinite auto-moving ticker
  const displayItems = [...order, ...order];

  // Auto-move smooth ticker loop (News headline / stream rail style)
  useEffect(() => {
    const el = rail.current;
    if (!el) return;

    let rafId: number;
    const speed = 0.65; // pixels per frame

    const step = () => {
      if (!isPaused && hovered === null) {
        el.scrollLeft += speed;
        // Loop seamlessly when the first full set has scrolled
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2;
        }
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused, hovered]);

  // Horizontal mouse-wheel redirection
  useEffect(() => {
    const el = rail.current;
    if (!el) return;

    let pauseTimer: number;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 0.85;
        setIsPaused(true);
        window.clearTimeout(pauseTimer);
        pauseTimer = window.setTimeout(() => setIsPaused(false), 2400);
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheel);
      window.clearTimeout(pauseTimer);
    };
  }, []);

  return (
    <section aria-labelledby="continue-title" className="relative z-10 -mt-10 pb-10 sm:-mt-16">
      <div className="gutter mb-4 flex flex-wrap items-end justify-between gap-2">
        <div className="flex items-center gap-3">
          <RevealText as="h2" text="Continue Exploring" className="font-sans text-lg font-semibold tracking-tight text-bone sm:text-2xl" />
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-crimson/10 border border-crimson/25 px-2.5 py-0.5 text-[10px] font-mono font-bold tracking-wider text-crimson-2">
            <span className="h-1.5 w-1.5 rounded-full bg-crimson animate-pulse" />
            {isPaused || hovered !== null ? 'PAUSED' : 'AUTO-GLIDING'}
          </span>
        </div>
        <span className="text-xs text-smoke">Scroll horizontally or hover to pause</span>
      </div>

      <div
        className="group/rail relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div
          ref={rail}
          className="rail gutter flex gap-3 overflow-x-auto py-8 sm:gap-4 no-scrollbar scroll-smooth"
          data-cursor={fine ? undefined : 'drag'}
        >
          {displayItems.map((id, i) => {
            const meta = sectionMeta[id];
            if (!meta) return null;
            const episodeNum = (i % order.length) + 1;
            const p = progress[id] ?? 0;
            const isCardHovered = hovered === i;
            const shift = fine && hovered !== null && !isCardHovered ? (i < hovered ? -10 : 10) : 0;

            return (
              <motion.button
                key={`${id}-${i}`}
                type="button"
                data-cursor="play"
                onClick={() => scrollTo(`#${id}`)}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                onFocus={() => setHovered(i)}
                onBlur={() => setHovered(null)}
                className="group relative aspect-video w-[72vw] shrink-0 snap-start overflow-visible text-left sm:w-[42vw] md:w-[30vw] lg:w-[22vw]"
                animate={{ x: shift, scale: fine && isCardHovered ? 1.07 : 1, zIndex: isCardHovered ? 10 : 1 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-lg ring-1 ring-white/10 transition duration-500 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,61,90,0.6)]">
                  <motion.div className="absolute inset-0" animate={{ scale: isCardHovered ? 1.12 : 1 }} transition={{ duration: 0.8, ease: EASE }}>
                    <PosterBackdrop palette={meta.palette}>
                      <span className="absolute -right-2 -top-6 font-display text-[8rem] leading-none text-white/[0.07] sm:text-[9rem]">
                        {GLYPHS[id] ?? '▶'}
                      </span>
                    </PosterBackdrop>
                  </motion.div>
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <span className="mb-1 text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-2">
                      Episode {String(episodeNum).padStart(2, '0')}
                    </span>
                    <span className="font-display text-2xl leading-none tracking-wide text-bone transition-transform duration-500 group-hover:-translate-y-1 sm:text-3xl">
                      {meta.card}
                    </span>
                    <span className="mt-1 text-xs text-mist opacity-100 transition duration-500 lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                      {meta.meta}
                    </span>
                  </div>

                  {/* Play circle badge */}
                  <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/40 text-xs text-bone backdrop-blur transition duration-500 group-hover:scale-110 group-hover:border-bone group-hover:bg-bone group-hover:text-ink">
                    ▶
                  </span>

                  {/* Center glowing red play button */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-crimson text-bone shadow-[0_0_30px_rgba(229,19,43,0.85)] scale-95 group-hover:scale-110 transition-transform duration-300">
                      ▶
                    </span>
                  </div>
                </div>
                <div className="mt-2 h-[3px] w-full overflow-hidden rounded bg-white/15">
                  <motion.div
                    className="h-full origin-left bg-crimson"
                    animate={{ scaleX: Math.max(0.04, p) }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </motion.button>
            );
          })}
        </div>
        <RailButtons rail={rail} />
      </div>
    </section>
  );
}
