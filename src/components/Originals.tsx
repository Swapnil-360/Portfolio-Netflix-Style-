import { useLayoutEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { profile, projects, type Project } from '../data/portfolio';
import { useDesktop, useReducedMotionPref } from '../hooks/useMedia';
import { EASE, RevealText } from './fx';
import ProjectCard from './ProjectCard';

/**
 * ORIGINALS — On desktop the section pins and scrolls sideways like a cinematic title reel.
 * On mobile / touch / reduced motion it switches to an intuitive horizontal swipe rail.
 */
export default function Originals({ onOpen }: { onOpen: (p: Project) => void }) {
  const desktop = useDesktop();
  const reduced = useReducedMotionPref();
  return desktop && !reduced ? <PinnedOriginals onOpen={onOpen} /> : <RailOriginals onOpen={onOpen} />;
}

function Intro() {
  return (
    <div className="flex w-full shrink-0 flex-col justify-center lg:w-[34vw]">
      <p className="mb-2 sm:mb-3 flex items-center gap-3 text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.32em] text-crimson-2">
        <span className="h-px w-8 bg-crimson-2" /> {projects.length} Productions · 2024–2026
      </p>
      <RevealText as="h2" text="ORIGINALS" className="font-display text-[clamp(2.8rem,8vw,8rem)] leading-[0.88] text-bone" />
      <p className="mt-3 sm:mt-4 max-w-sm text-xs sm:text-[15px] leading-relaxed text-mist">
        Every project is an Original production. From autonomous AI companions (Mikasa) and university platforms (Edu51Portal) to peer-reviewed IEEE research (CurricuRAG).
      </p>
      <p className="mt-6 hidden text-xs tracking-[0.24em] text-smoke lg:block">SCROLL TO BROWSE →</p>
    </div>
  );
}

function Outro() {
  return (
    <a
      href={profile.links.github}
      target="_blank"
      rel="noreferrer"
      data-cursor="link"
      className="group flex aspect-[3/4] w-[75vw] shrink-0 snap-start flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-white/20 text-center transition hover:border-crimson-2/60 bg-ink-2/40 sm:w-[44vw] lg:aspect-auto lg:h-[66vh] lg:w-[24vw]"
    >
      <span className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-white/25 text-xl sm:text-2xl text-bone transition group-hover:scale-110 group-hover:border-crimson-2 group-hover:text-crimson-2 shadow-xl">
        ↗
      </span>
      <span className="font-display text-2xl sm:text-3xl tracking-wide text-bone">More on GitHub</span>
      <span className="text-xs text-mist">github.com/Swapnil-360</span>
      <span className="text-[10px] sm:text-[11px] text-smoke tracking-wider uppercase">Open Repositories & Tools</span>
    </a>
  );
}

function PinnedOriginals({ onOpen }: { onOpen: (p: Project) => void }) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);
  const distMV = useMotionValue(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (!track.current) return;
      const d = Math.max(0, track.current.scrollWidth - window.innerWidth);
      setDist(d);
      distMV.set(d);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [distMV]);

  const { scrollYProgress } = useScroll({ target: wrap, offset: ['start start', 'end end'] });
  const raw = useTransform([scrollYProgress, distMV], ([p, d]: number[]) => -p * d);
  const x = useSpring(raw, { stiffness: 120, damping: 30, mass: 0.4 });
  const bar = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={wrap} style={{ height: `calc(100vh + ${dist}px)` }} className="relative">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(50%_60%_at_70%_50%,rgba(255,42,68,0.10),transparent_70%)] pointer-events-none" />
        <motion.div ref={track} style={{ x }} className="gutter relative flex items-center gap-8 pr-[12vw]" data-cursor="drag">
          <Intro />
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={() => onOpen(p)} />
          ))}
          <Outro />
        </motion.div>
        <div className="gutter absolute inset-x-0 bottom-8 flex items-center gap-4">
          <span className="text-[10px] font-bold tracking-[0.3em] text-smoke">ORIGINALS</span>
          <div className="h-[2px] flex-1 overflow-hidden rounded bg-white/10">
            <motion.div className="h-full origin-left bg-crimson" style={{ scaleX: bar }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function RailOriginals({ onOpen }: { onOpen: (p: Project) => void }) {
  const railRef = useRef<HTMLDivElement>(null);
  const [activeProjIdx, setActiveProjIdx] = useState(0);

  const handleScroll = () => {
    if (!railRef.current) return;
    const { scrollLeft, clientWidth } = railRef.current;
    setActiveProjIdx(Math.round(scrollLeft / (clientWidth * 0.82)));
  };

  const scrollToProj = (idx: number) => {
    if (!railRef.current) return;
    const cardWidth = railRef.current.clientWidth * 0.84;
    railRef.current.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
  };

  return (
    <div className="py-4 sm:py-6">
      <div className="gutter mb-4 sm:mb-6">
        <Intro />
      </div>
      <div
        ref={railRef}
        onScroll={handleScroll}
        className="rail gutter flex snap-x snap-mandatory gap-3.5 overflow-x-auto pb-4"
      >
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} onOpen={() => onOpen(p)} />
        ))}
        <Outro />
      </div>

      {/* Mobile Swipe Indicators with tap to jump */}
      <div className="mt-2 flex items-center justify-center gap-1.5 sm:hidden">
        {projects.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollToProj(i)}
            aria-label={`Jump to project ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeProjIdx ? 'w-5 bg-crimson' : 'w-1.5 bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
