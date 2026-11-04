import { useRef } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { achievements, education, profile, projects, researchPapers, type ProfileId } from '../data/portfolio';
import { useFinePointer } from '../hooks/useMedia';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, Magnetic, Particles } from './fx';
import { SeriesMark } from './Poster';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } } };
const item = {
  hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: EASE } },
};

export default function Hero({ onPlay, onResume, profileId }: { onPlay: () => void; onResume: () => void; profileId: ProfileId }) {
  const ref = useRef<HTMLElement>(null);
  const fine = useFinePointer();
  const { scrollTo } = useSmoothScroll();

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const blackout = useTransform(scrollYProgress, [0.35, 1], [0, 1]);

  // pointer parallax (desktop)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 18 });
  const py = useSpring(my, { stiffness: 60, damping: 18 });
  const imgRotY = useTransform(px, [-1, 1], [-4, 4]);
  const imgRotX = useTransform(py, [-1, 1], [3, -3]);
  const imgShiftX = useTransform(px, [-1, 1], [-10, 10]);
  const chipX = useTransform(px, [-1, 1], [18, -18]);
  const chipY = useTransform(py, [-1, 1], [12, -12]);
  const glowX = useTransform(px, [-1, 1], ['-6%', '6%']);

  const meta = [
    '2022 – Present',
    'B.Sc in CSE',
    `${projects.length} Originals`,
    `${researchPapers.length} IEEE Papers`,
  ];

  const floating = [
    {
      text: 'Final Year CSE',
      sub: 'BUBT · 2022–2026',
      pos: 'left-[-4%] lg:left-[-8%] xl:left-[-10%] top-[28%]',
      depth: 0.8,
    },
    {
      text: `${researchPapers.length} Research Papers`,
      sub: 'Peer-Reviewed IEEE',
      pos: 'right-[-4%] lg:right-[-8%] xl:right-[-10%] top-[14%]',
      depth: -0.8,
    },
    {
      text: `${projects.length} Shipped Projects`,
      sub: 'Web · Mobile · AI',
      pos: 'right-[-2%] lg:right-[-5%] bottom-[22%]',
      depth: 0.6,
    },
  ];

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden"
      onPointerMove={(e) => {
        if (!fine) return;
        mx.set((e.clientX / window.innerWidth) * 2 - 1);
        my.set((e.clientY / window.innerHeight) * 2 - 1);
      }}
    >
      {/* atmosphere */}
      <motion.div aria-hidden className="absolute inset-0" style={{ x: glowX }}>
        <div className="absolute right-[-10%] top-[-10%] h-[90vh] w-[80vw] rounded-full bg-[radial-gradient(closest-side,rgba(229,19,43,0.38),rgba(229,19,43,0.08)_55%,transparent)] blur-2xl lg:right-[-4%] lg:w-[60vw]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[70vh] w-[60vw] rounded-full bg-[radial-gradient(closest-side,rgba(90,20,120,0.25),transparent)] blur-2xl" />
      </motion.div>
      <Particles count={36} color="229,19,43" className="z-[1]" />
      <div aria-hidden className="absolute inset-0 z-[1] overflow-hidden">
        <span className="light-streak left-[40%] top-[22%] w-[50vw]" style={{ animationDelay: '1.2s' }} />
        <span className="light-streak left-[30%] top-[64%] w-[40vw]" style={{ animationDelay: '3.6s' }} />
        <span className="light-streak left-[55%] top-[44%] w-[30vw]" style={{ animationDelay: '5.2s' }} />
      </div>

      {/* portrait */}
      <motion.div
        className="absolute inset-x-0 top-8 z-[2] flex h-[50svh] items-end justify-center sm:top-12 sm:h-[70svh] lg:bottom-0 lg:left-auto lg:right-[3vw] lg:top-20 lg:h-auto lg:w-[54vw] xl:right-[6vw] xl:w-[48vw]"
        style={{ y: imgY, scale: imgScale, opacity: fade }}
      >
        <motion.div
          className="relative h-full w-full lg:h-[86vh]"
          style={{ rotateY: imgRotY, rotateX: imgRotX, x: imgShiftX, transformPerspective: 1200 }}
          initial={{ clipPath: 'inset(100% -30% -10% -30%)', opacity: 0 }}
          animate={{ clipPath: 'inset(-30% -30% -10% -30%)', opacity: 1 }}
          transition={{ duration: 1.6, ease: EASE, delay: 0.1 }}
        >
          {/* rim light ring — positioned around head and upper shoulders, with bottom faded out so it never crosses the suit */}
          <div
            aria-hidden
            className="absolute top-[8%] left-1/2 h-[72%] w-[72%] -translate-x-1/2 rounded-full border border-crimson-2/20 shadow-[0_0_120px_rgba(229,19,43,0.35),inset_0_0_80px_rgba(229,19,43,0.18)] z-0 [mask-image:linear-gradient(to_bottom,black_40%,transparent_78%)]"
          />
          <img
            src={profile.portrait.src}
            srcSet={profile.portrait.srcSet}
            sizes="(max-width: 1024px) 100vw, 54vw"
            alt={profile.portrait.alt}
            className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative z-10 [mask-image:linear-gradient(to_bottom,black_86%,transparent_100%)]"
          />
          {/* crimson rim light on the image edge */}
          <div aria-hidden className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(60%_50%_at_80%_30%,rgba(255,61,90,0.16),transparent_70%)] mix-blend-screen" />

          {/* floating UI chips */}
          {floating.map((f, i) => (
            <FloatChip key={f.text} {...f} index={i} mx={chipX} my={chipY} />
          ))}
        </motion.div>
      </motion.div>

      {/* readability gradients */}
      <div aria-hidden className="absolute inset-x-0 top-[36svh] z-[3] h-[36svh] bg-gradient-to-b from-transparent via-ink/80 to-ink lg:hidden" />
      <div aria-hidden className="absolute inset-0 z-[3] hidden bg-[linear-gradient(90deg,var(--color-ink)_0%,rgba(7,7,10,0.7)_32%,transparent_58%)] lg:block" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 z-[3] h-48 bg-gradient-to-t from-ink to-transparent" />

      {/* copy */}
      <motion.div
        className="gutter relative z-[4] flex min-h-[100svh] flex-col justify-end pb-12 pt-[44svh] sm:pb-24 sm:pt-[56svh] lg:max-w-[54vw] lg:justify-center lg:pb-0 lg:pt-28"
        style={{ y: textY, opacity: fade }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="mb-3 text-lg">
          <SeriesMark />
        </motion.div>
        <motion.h1
          variants={item}
          className="font-display leading-[0.82] tracking-[0.02em] text-bone"
          style={{ fontSize: 'clamp(4.5rem, 12vw, 11rem)' }}
        >
          <span className="shimmer-text">{profile.firstName}</span>
        </motion.h1>

        {/* THE SERIES in Netflix style vibrant red font matching reference */}
        <motion.p
          variants={item}
          className="mt-1.5 font-display text-2xl sm:text-3xl lg:text-4xl tracking-[0.24em] text-[#ff2a44] font-bold uppercase [text-shadow:0_0_28px_rgba(255,42,68,0.5)]"
        >
          THE SERIES
        </motion.p>

        <motion.div variants={item} className="mt-3 sm:mt-5 flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-1.5 text-xs sm:text-[13px] font-medium text-mist">
          <span className="rounded border border-white/25 px-1.5 py-px text-[10px] font-bold tracking-wider text-bone">AI·ML</span>
          {meta.map((m, i) => (
            <span key={m} className="flex items-center gap-2.5 sm:gap-3">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-smoke" />}
              {m}
            </span>
          ))}
        </motion.div>

        {/* Roles in professional, larger, high-visibility styled typography */}
        <motion.p
          variants={item}
          className="mt-3 sm:mt-4 text-[13px] sm:text-[15px] md:text-base lg:text-[17px] font-bold tracking-[0.10em] sm:tracking-[0.14em] uppercase text-crimson-2 leading-relaxed flex flex-wrap items-center gap-x-2 gap-y-1 drop-shadow-[0_2px_10px_rgba(255,42,68,0.25)]"
        >
          <span>PRODUCT DESIGNER &amp; BUILDER</span>
          <span className="text-white/30 font-normal">•</span>
          <span>CO-FOUNDER &amp; CTO @ OPUSGEN AI</span>
          <span className="text-white/30 font-normal">•</span>
          <span>AI, FRONTEND &amp; AUTOMATION</span>
        </motion.p>

        {/* Bio Copy matching Image 3 */}
        <motion.div variants={item} className="mt-4 max-w-2xl text-[14px] sm:text-[15px] md:text-base leading-relaxed text-bone/85 space-y-2">
          <p>
            I am <strong className="text-crimson-2 font-semibold">Md. Miftahur Rahman Swapnil</strong>, a developer studying Computer Science &amp; Engineering at BUBT (Dhaka, Bangladesh).
          </p>
          <p className="text-bone/75 text-[13.5px] sm:text-[14.5px]">
            Product Designer &amp; Builder with an innovative and curious mindset, always exploring new ideas, technologies, and ways to turn them into working products. I specialize in building high-performance web applications and autonomous AI agents (Mikasa, n8n, Supabase pgvector) using modern AI-assisted engineering. Creator of Edu51Portal, final year CSE at BUBT.
          </p>
        </motion.div>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
          <Magnetic>
            <button
              type="button"
              data-cursor="play"
              onClick={onPlay}
              className="flex min-h-12 items-center gap-3 rounded-md bg-bone px-6 py-3 text-[15px] font-bold text-ink transition hover:bg-white sm:px-8"
            >
              <span className="text-lg">▶</span> Play Intro
            </button>
          </Magnetic>
          <Magnetic>
            {profileId === 'recruiter' ? (
              <button
                type="button"
                onClick={onResume}
                className="glass flex min-h-12 items-center gap-3 rounded-md px-6 py-3 text-[15px] font-semibold text-bone transition hover:bg-white/15 sm:px-8"
              >
                <span className="text-lg">⤓</span> View Resume
              </button>
            ) : (
              <button
                type="button"
                onClick={onResume}
                className="glass flex min-h-12 items-center gap-3 rounded-md px-6 py-3 text-[15px] font-semibold text-bone transition hover:bg-white/15 sm:px-8"
              >
                <span className="text-lg">⤓</span> View Resume
              </button>
            )}
          </Magnetic>
          <button
            type="button"
            onClick={() => scrollTo('#about')}
            aria-label="More info"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-lg text-bone transition hover:border-bone hover:bg-white/10"
          >
            ⓘ
          </button>
        </motion.div>
      </motion.div>

      <motion.div aria-hidden className="pointer-events-none absolute inset-0 z-[5] bg-ink" style={{ opacity: blackout }} />
    </section>
  );
}

type MV = ReturnType<typeof useTransform<number, number>>;

function FloatChip({ text, sub, pos, depth, index, mx, my }: { text: string; sub: string; pos: string; depth: number; index: number; mx: MV; my: MV }) {
  const x = useTransform(mx, (n: number) => n * depth);
  const y = useTransform(my, (n: number) => n * depth);
  return (
    <motion.div
      className={`glass absolute hidden rounded-xl px-4 py-2.5 md:block z-20 whitespace-nowrap shadow-xl border border-white/10 ${pos}`}
      style={{ x, y }}
      initial={{ opacity: 0, filter: 'blur(6px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.9, delay: 1.2 + index * 0.18, ease: EASE }}
    >
      <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}>
        <p className="text-sm font-semibold text-bone">{text}</p>
        <p className="text-[10px] uppercase tracking-[0.2em] text-mist">{sub}</p>
      </motion.div>
    </motion.div>
  );
}
