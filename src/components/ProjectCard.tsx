import { motion } from "framer-motion";
import type { Project } from "../data/portfolio";
import { EASE, Tilt } from "./fx";
import { ProjectMedia } from "./Poster";

export default function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.article
      className="w-[82vw] shrink-0 snap-start sm:w-[500px] lg:w-[540px] xl:w-[580px]"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px -5% 0px 0px" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: EASE }}
    >
      <Tilt max={4} className="group rounded-2xl">
        <div
          role="button"
          tabIndex={0}
          data-cursor="view"
          onClick={onOpen}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onOpen();
            }
          }}
          aria-label={`Open ${project.title}`}
          className="focus-ring relative flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-ink-2/95 shadow-2xl transition duration-500 group-hover:border-white/30 group-hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9)] text-left"
        >
          {/* Top Stage: Media Showcase */}
          <div className="relative w-full overflow-hidden bg-black">
            <ProjectMedia
              project={project}
              showChrome={true}
              autoPlayVideo={true}
              variant="card"
            />

            {/* Subtle corner badge for S ORIGINAL */}
            <div className="absolute left-3 top-9 sm:top-11 z-30 flex items-center gap-2 pointer-events-none">
              <span className="flex items-center gap-1.5 rounded-full bg-black/70 px-2 py-0.5 text-[8.5px] sm:text-[9px] font-bold tracking-[0.25em] text-bone/90 backdrop-blur-md border border-white/15 shadow-lg">
                <span className="font-display text-xs sm:text-sm text-crimson-2 leading-none">S</span>
                ORIGINAL
              </span>
            </div>

            {/* Year Tag */}
            <div className="absolute right-3 top-9 sm:top-11 z-30 pointer-events-none">
              <span className="rounded-md border border-white/20 bg-black/70 px-2 py-0.5 text-[9.5px] sm:text-[10px] font-bold text-bone/90 backdrop-blur-md">
                {project.year}
              </span>
            </div>
          </div>

          {/* Bottom Stage: Metadata & Control Deck */}
          <div className="flex flex-col p-4 sm:p-6 bg-gradient-to-b from-ink-2 to-ink border-t border-white/[0.08]">
            <div className="flex items-center justify-between gap-2">
              <p className="text-[9.5px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-crimson-2">
                {project.genre}
              </p>
              <span className="text-[10.5px] sm:text-[11px] text-smoke font-mono">
                {project.categoryLabel}
              </span>
            </div>

            <motion.h3
              layoutId={`title-${project.id}`}
              className="mt-1.5 sm:mt-2 font-display text-[1.45rem] sm:text-[2.2rem] lg:text-[2.6rem] leading-[0.94] tracking-wide text-bone group-hover:text-white transition-colors"
            >
              {project.title}
            </motion.h3>

            <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-bone/75 line-clamp-2">
              {project.logline}
            </p>

            {/* Tech Stack Chips */}
            <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5">
              {project.stack.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-white/[0.06] px-2 py-0.5 text-[9.5px] sm:text-[11px] font-medium text-bone/90 border border-white/10"
                >
                  {t}
                </span>
              ))}
              {project.stack.length > 3 && (
                <span className="rounded-md bg-white/[0.03] px-1.5 py-0.5 text-[9.5px] text-mist">
                  +{project.stack.length - 3}
                </span>
              )}
            </div>

            {/* Action Bar */}
            <div className="mt-4 flex flex-wrap items-center gap-2 pt-2 border-t border-white/[0.06]">
              <span className="flex min-h-8 sm:min-h-9 items-center gap-1.5 rounded-md bg-bone px-3 sm:px-4 text-[11px] sm:text-xs font-bold text-ink transition group-hover:bg-white shadow-md">
                ▶ View Project
              </span>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                  onClick={(e) => e.stopPropagation()}
                  className="flex min-h-8 sm:min-h-9 items-center gap-1 rounded-md border border-white/20 bg-black/40 px-3 text-[11px] sm:text-xs font-semibold text-bone backdrop-blur transition hover:border-white/50 hover:bg-black/70"
                >
                  Live Demo ↗
                </a>
              )}
              {project.github && !project.liveUrl && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                  onClick={(e) => e.stopPropagation()}
                  className="flex min-h-8 sm:min-h-9 items-center gap-1 rounded-md border border-white/20 bg-black/40 px-3 text-[11px] sm:text-xs font-semibold text-bone backdrop-blur transition hover:border-white/50 hover:bg-black/70"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.article>
  );
}
