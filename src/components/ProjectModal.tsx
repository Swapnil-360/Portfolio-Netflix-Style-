import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { projects, type Project } from "../data/portfolio";
import { useScrollLock } from "../hooks/smoothScroll";
import { EASE, Magnetic } from "./fx";
import { ProjectArt } from "./Poster";

const block = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE },
  },
};

export default function ProjectModal({
  project,
  onClose,
  onSwitch,
}: {
  project: Project;
  onClose: () => void;
  onSwitch: (p: Project) => void;
}) {
  useScrollLock(true);
  const scroller = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    closeBtn.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      prevFocus?.focus?.({ preventScroll: true });
    };
  }, [onClose]);

  useEffect(() => {
    scroller.current?.scrollTo({ top: 0 });
  }, [project.id]);

  const more = projects.filter((p) => p.id !== project.id);

  return (
    <motion.div
      className="fixed inset-0 z-[140]"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`title-${project.id}-modal`}
    >
      <motion.div
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <div
        ref={scroller}
        data-lenis-prevent
        className="absolute inset-0 overflow-y-auto overscroll-contain"
        onClick={onClose}
      >
        <motion.div
          className="relative mx-auto min-h-full max-w-5xl bg-ink-2 shadow-2xl sm:my-10 sm:min-h-0 sm:rounded-2xl border border-white/10"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: 30, transition: { duration: 0.3 } }}
        >
          {/* Billboard Banner */}
          <div className="relative h-[52vh] min-h-[350px] overflow-hidden sm:rounded-t-2xl">
            <motion.div
              layoutId={`art-${project.id}`}
              className="absolute inset-0"
              transition={{ duration: 0.7, ease: EASE }}
            >
              <ProjectArt project={project} />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-ink-2/60 via-35% to-transparent pointer-events-none" />

            <button
              ref={closeBtn}
              type="button"
              onClick={onClose}
              data-cursor="close"
              aria-label="Close project"
              className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-lg text-bone backdrop-blur border border-white/20 transition hover:bg-black"
            >
              ✕
            </button>

            <div className="absolute inset-x-0 bottom-0 px-6 pb-6 sm:px-10 z-10">
              <motion.p
                className="mb-2 flex items-center gap-2 text-[11px] font-bold tracking-[0.34em] text-bone/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="font-display text-xl tracking-normal text-crimson-2">
                  S
                </span>{" "}
                ORIGINAL
                {project.status === "Live" && (
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/30">
                    LIVE SYSTEM
                  </span>
                )}
                {project.status === "Research" && (
                  <span className="rounded-full bg-purple-500/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-purple-400 border border-purple-500/30">
                    PEER-REVIEWED RESEARCH
                  </span>
                )}
              </motion.p>
              <motion.h2
                id={`title-${project.id}-modal`}
                layoutId={`title-${project.id}`}
                className="font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.88] tracking-wide text-bone"
                transition={{ duration: 0.7, ease: EASE }}
              >
                {project.title}
              </motion.h2>
              <p className="text-sm sm:text-base text-mist mt-1 font-serif italic">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Modal Body */}
          <motion.div
            className="px-6 pb-12 sm:px-10"
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.08, delayChildren: 0.25 }}
          >
            <motion.div
              variants={block}
              className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-mist pt-4"
            >
              <span className="font-semibold text-crimson-2">
                {project.year}
              </span>
              <span className="h-1 w-1 rounded-full bg-smoke" />
              <span>{project.categoryLabel}</span>
              <span className="h-1 w-1 rounded-full bg-smoke" />
              <span>{project.genre}</span>
            </motion.div>

            <motion.p
              variants={block}
              className="mt-4 max-w-3xl text-lg leading-relaxed text-bone sm:text-xl font-sans"
            >
              {project.description}
            </motion.p>

            {/* CTAs: Live Demo & GitHub */}
            <motion.div variants={block} className="mt-6 flex flex-wrap items-center gap-3">
              {project.video && (
                <div className="flex min-h-12 items-center gap-2 rounded-md bg-crimson/15 border border-crimson/35 px-4 text-xs font-mono font-bold text-crimson-2">
                  <span className="h-2 w-2 rounded-full bg-crimson animate-pulse" />
                  HD VIDEO PREVIEW
                </div>
              )}
              {project.liveUrl && (
                <Magnetic>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="flex min-h-12 items-center gap-2 rounded-md bg-bone px-6 text-[15px] font-bold text-ink transition hover:bg-white shadow-xl"
                  >
                    <span>▶</span> Open Live Application ↗
                  </a>
                </Magnetic>
              )}
              {project.github && (
                <Magnetic>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="flex min-h-12 items-center gap-2 rounded-md border border-white/20 bg-white/[0.06] px-6 text-[15px] font-semibold text-bone backdrop-blur transition hover:border-white/50 hover:bg-white/10"
                  >
                    View Source on GitHub ↗
                  </a>
                </Magnetic>
              )}
            </motion.div>

            {/* Impact Metrics */}
            <motion.section variants={block} className="mt-12">
              <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">
                Performance & Impact
              </h3>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-3">
                {project.metrics.map((m, i) => (
                  <motion.div
                    key={m.label}
                    className="bg-ink p-5"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.5 + i * 0.07,
                      duration: 0.5,
                      ease: EASE,
                    }}
                  >
                    <p
                      className="font-display text-4xl leading-none text-bone sm:text-5xl"
                      style={{
                        color: i === 0 ? project.palette.accent : undefined,
                      }}
                    >
                      {m.value}
                    </p>
                    <p className="mt-2 text-xs leading-snug text-mist">
                      {m.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Tech Stack & Key Features */}
            <div className="mt-12 grid gap-10 lg:grid-cols-[3fr_2fr]">
              <motion.section variants={block}>
                <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">
                  Key Highlights
                </h3>
                <ul className="space-y-3.5">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-[15px] leading-relaxed text-bone/85"
                    >
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-crimson/20 text-xs text-crimson-2 font-bold">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.section>

              <div className="space-y-8">
                <motion.section variants={block}>
                  <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="glass rounded-full px-3.5 py-1.5 text-xs font-medium text-bone border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.section>

                {project.gallery && project.gallery.length > 0 && (
                  <motion.section variants={block}>
                    <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">
                      Production Stills
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {project.gallery.map((img, i) => (
                        <div
                          key={i}
                          className="aspect-video overflow-hidden rounded-lg border border-white/10 bg-black/60 flex items-center justify-center p-1"
                        >
                          <img
                            src={img}
                            alt={`${project.title} screenshot ${i + 1}`}
                            className="h-full w-full object-contain sm:object-cover object-center rounded"
                          />
                        </div>
                      ))}
                    </div>
                  </motion.section>
                )}
              </div>
            </div>

            {/* More Originals Carousel */}
            <motion.section
              variants={block}
              className="mt-14 border-t border-white/10 pt-8"
            >
              <h3 className="mb-4 font-sans text-lg font-semibold text-bone">
                More Productions in the Series
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {more.slice(0, 3).map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    data-cursor="view"
                    onClick={() => onSwitch(p)}
                    className="group relative aspect-video overflow-hidden rounded-xl text-left ring-1 ring-white/10 transition hover:ring-white/30"
                  >
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                      <ProjectArt project={p} />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-mist">
                        {p.genre}
                      </p>
                      <p className="font-display text-2xl leading-none tracking-wide text-bone">
                        {p.title}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.section>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
