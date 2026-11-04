import { useState } from "react";
import { motion } from "framer-motion";
import {
  certifications,
  education,
  experience,
  profile,
  projects,
  researchPapers,
  skillCategories,
} from "../data/portfolio";
import { EASE, Magnetic, SectionHeading } from "./fx";

/** THE FULL STORY — a designed resume screenplay preview plus view & download actions. */
export default function ResumeSection({ onView }: { onView: () => void }) {
  return (
    <>
      <SectionHeading kicker="The Screenplay" title="The Full Story" />
      <div className="gutter grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14">
        {/* Left: Collapsible Designed Resume Sheet */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.1, ease: EASE }}
          style={{ transformPerspective: 1600 }}
        >
          <CollapsibleSheet />
        </motion.div>

        {/* Right: Sticky Action Panel */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-serif text-3xl italic leading-tight text-bone">
            Every episode, on one screenplay.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-mist">
            Final year BSc CSE at BUBT, Co-Founder & CTO at OpusGen AI, 2
            peer-reviewed IEEE research papers, and creator of Edu51Portal —
            explore the complete screenplay or download the PDF resume.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <Magnetic className="w-full">
              <button
                type="button"
                data-cursor="view"
                onClick={onView}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-bone px-6 text-[15px] font-bold text-ink transition hover:bg-white shadow-xl"
              >
                <span>▶</span> View Full Resume
              </button>
            </Magnetic>

            <Magnetic className="w-full">
              <a
                href={profile.resumePdf}
                download="Md_Miftahur_Rahman_Swapnil_Resume.pdf"
                data-cursor="link"
                className="glass flex min-h-12 w-full items-center justify-center gap-2 rounded-md px-6 text-[15px] font-semibold text-bone transition hover:bg-white/15"
              >
                <span>⤓</span> Download Color PDF
              </a>
            </Magnetic>

            <Magnetic className="w-full">
              <a
                href={profile.resumeBwPdf}
                download="Md_Miftahur_Rahman_Swapnil_Resume_BW.pdf"
                data-cursor="link"
                className="glass flex min-h-10 w-full items-center justify-center gap-2 rounded-md px-4 text-xs font-medium text-mist transition hover:bg-white/10 hover:text-bone"
              >
                <span>⤓</span> Download Black & White PDF
              </a>
            </Magnetic>
          </div>

          <dl className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-white/10 text-center">
            {[
              { v: "2", k: "IEEE Papers" },
              { v: String(projects.length), k: "Originals" },
              { v: "200+", k: "Students" },
            ].map((s) => (
              <div key={s.k} className="bg-ink-2 px-2 py-4">
                <dd className="font-display text-3xl leading-none text-bone">
                  {s.v}
                </dd>
                <dt className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">
                  {s.k}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}

function CollapsibleSheet() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div
        className={`overflow-hidden transition-[max-height] duration-700 ease-[var(--ease-cine)] md:max-h-none ${
          open ? "max-h-[4000px]" : "max-h-[620px]"
        }`}
      >
        <ResumeSheet />
      </div>
      {!open && (
        <div className="absolute inset-x-0 bottom-0 flex h-48 items-end justify-center rounded-b-2xl bg-gradient-to-t from-ink via-ink/90 to-transparent pb-4 md:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="glass min-h-11 rounded-full px-6 text-sm font-semibold text-bone border border-white/20"
          >
            Read the full screenplay ↓
          </button>
        </div>
      )}
    </div>
  );
}

function H({ children }: { children: string }) {
  return (
    <h4 className="mb-3 mt-7 border-b border-white/10 pb-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-2 first:mt-0">
      {children}
    </h4>
  );
}

export function ResumeSheet() {
  return (
    <article className="relative overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#121218,#0c0c11)] p-4 sm:p-8 sm:p-10 ring-1 ring-white/10 border border-white/10 shadow-2xl">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson-2/70 to-transparent"
      />

      {/* Screenplay Header */}
      <header className="mb-6 sm:mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-5 sm:pb-6">
        <div>
          <p className="text-[10px] font-bold tracking-[0.34em] text-smoke">
            STARRING
          </p>
          <h3 className="mt-1 font-display text-[clamp(1.8rem,4.4vw,3.4rem)] leading-[0.9] tracking-wide text-bone">
            {profile.fullName}
          </h3>
          <p className="mt-1.5 text-xs font-serif italic text-crimson-2">
            {profile.headline}
          </p>
        </div>
        <div className="text-xs leading-relaxed text-mist sm:text-right">
          <a href={`mailto:${profile.email}`} className="block hover:text-bone text-bone/90">
            {profile.email}
          </a>
          <span className="block text-smoke">{profile.location}</span>
          <div className="mt-1 flex items-center gap-2 sm:justify-end">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-mist hover:text-bone underline underline-offset-2"
            >
              LinkedIn ↗
            </a>
            <span className="text-smoke">·</span>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-mist hover:text-bone underline underline-offset-2"
            >
              GitHub ↗
            </a>
            <span className="text-smoke">·</span>
            <a
              href={profile.links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="text-mist hover:text-bone underline underline-offset-2"
            >
              WhatsApp ↗
            </a>
          </div>
        </div>
      </header>

      {/* Screenplay Two-Column Grid */}
      <div className="grid gap-x-12 gap-y-6 md:grid-cols-[1.35fr_1fr]">
        {/* Left Column: Education & Consolidated Experience & Leadership */}
        <div>
          <H>Education</H>
          <div className="space-y-4 mb-6">
            {education.map((e) => (
              <div key={e.degree} className="border-l-2 border-white/10 pl-3.5 transition-colors hover:border-crimson-2/60">
                <div className="flex flex-wrap justify-between items-baseline gap-x-3">
                  <p className="text-sm font-semibold text-bone">{e.degree}</p>
                  <p className="text-xs text-smoke font-mono">{e.period}</p>
                </div>
                <div className="flex flex-wrap justify-between items-baseline gap-x-3 mt-0.5 text-xs text-mist">
                  <span>
                    {e.school}
                    {(e as { cohort?: string }).cohort && (
                      <span className="text-smoke"> | {(e as { cohort?: string }).cohort}</span>
                    )}
                  </span>
                  <span className="text-emerald-400 font-mono font-medium">{e.score}</span>
                </div>
              </div>
            ))}
          </div>

          <H>Experience & Leadership</H>
          <div className="space-y-6">
            {experience.map((x) => (
              <div key={x.company} className="border-l-2 border-white/10 pl-3.5 transition-colors hover:border-crimson-2/60">
                <div className="flex flex-wrap justify-between items-baseline gap-x-3">
                  <p className="text-sm font-semibold text-bone">
                    {x.company} — <span className="text-crimson-2 font-medium">{x.role}</span>
                  </p>
                  <p className="text-xs text-smoke font-mono">{x.period}</p>
                </div>
                <ul className="mt-2 space-y-1.5">
                  {x.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-2 text-xs leading-relaxed text-bone/80"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-crimson-2" />
                      {p}
                    </li>
                  ))}
                </ul>
                {x.stack && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {x.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-white/[0.04] border border-white/10 px-2 py-0.5 text-[10px] font-mono text-mist"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Academic Research (Only IEEE Papers), Toolkit & Credentials */}
        <div>
          <H>Academic Research (Peer-Reviewed)</H>
          <div className="space-y-4">
            {researchPapers.map((paper) => (
              <div
                key={paper.id}
                className="rounded-lg border border-white/10 bg-black/40 p-3.5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <span className="text-xs font-bold text-bone">
                    {paper.id === "curricurag" ? "CurricuRAG" : "Smart Classroom IoT"}
                  </span>
                  <span className="rounded bg-purple-500/20 border border-purple-500/40 px-1.5 py-0.2 text-[9px] font-mono font-bold uppercase text-purple-300">
                    {paper.venue}
                  </span>
                </div>
                <p className="text-[11px] text-bone/90 mt-1 font-serif italic leading-snug">
                  "{paper.title}"
                </p>
                <div className="mt-1.5 flex flex-wrap items-center gap-2 text-[10px] text-smoke">
                  <span className="font-semibold text-crimson-2">{paper.role}</span>
                  <span>·</span>
                  <span>{paper.year}</span>
                  <span>·</span>
                  <span className="text-mist">{paper.location}</span>
                </div>
                <p className="mt-1 text-[11px] text-mist leading-relaxed line-clamp-2">
                  {paper.abstract}
                </p>
                {paper.github && (
                  <a
                    href={paper.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-crimson-2 hover:underline"
                  >
                    View Paper Artifacts & Code ↗
                  </a>
                )}
              </div>
            ))}
          </div>

          <H>Skills & Toolkit</H>
          <div className="space-y-2.5">
            {skillCategories.map((c) => (
              <div key={c.id}>
                <p className="text-xs font-semibold text-bone">{c.title}</p>
                <p className="text-xs leading-relaxed text-mist">
                  {c.skills.map((s) => s.name).join(", ")}
                </p>
              </div>
            ))}
          </div>

          <H>Verified Credentials</H>
          <p className="text-xs leading-relaxed text-mist">
            {certifications.map((c) => `${c.issuer}: ${c.title}`).join(" · ")}
          </p>
        </div>
      </div>
    </article>
  );
}
