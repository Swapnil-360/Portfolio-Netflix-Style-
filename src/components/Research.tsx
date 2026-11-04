import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { researchPapers, type ResearchPaper } from "../data/portfolio";
import { EASE, SectionHeading } from "./fx";

export default function Research() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activePaperIdx, setActivePaperIdx] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);

  const copyBibtex = (paper: ResearchPaper) => {
    const bibtex = `@inproceedings{swapnil${paper.year}${paper.id},
  title={${paper.title}},
  author={${paper.authors.join(" and ")}},
  booktitle={${paper.venue}},
  year={${paper.year}},
  note={${paper.status}}
}`;
    navigator.clipboard.writeText(bibtex);
    setCopiedId(paper.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleScroll = () => {
    if (!railRef.current) return;
    const { scrollLeft, clientWidth } = railRef.current;
    setActivePaperIdx(Math.round(scrollLeft / (clientWidth * 0.84)));
  };

  const scrollToPaper = (idx: number) => {
    if (!railRef.current) return;
    const cardWidth = railRef.current.clientWidth * 0.86;
    railRef.current.scrollTo({ left: idx * cardWidth, behavior: "smooth" });
  };

  return (
    <>
      <SectionHeading
        kicker="Peer-Reviewed Science"
        title="Research Field"
        aside={
          <div className="flex flex-col gap-1">
            <p className="max-w-md text-xs sm:text-sm text-mist">
              First-author academic research specializing in Relational Graph
              Convolutional Networks (R-GCN), Knowledge Representation, and
              Edge-Cloud IoT Automation.
            </p>
            <p className="text-xs text-smoke sm:hidden pt-1">
              Swipe sideways for next paper →
            </p>
          </div>
        }
      />

      <div className="relative">
        <div
          ref={railRef}
          onScroll={handleScroll}
          className="rail gutter flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 pt-1 sm:flex-col sm:gap-10 sm:overflow-visible"
        >
          {researchPapers.map((paper, idx) => {
            const isExpanded = expandedId === paper.id;
            return (
              <motion.article
                key={paper.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-4% 0px" }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: EASE }}
                className="group relative w-[84vw] sm:w-auto shrink-0 snap-start overflow-hidden rounded-2xl bg-gradient-to-br from-ink-2 via-ink to-black p-4 sm:p-8 lg:p-9 ring-1 ring-white/10 transition-all duration-500 hover:ring-crimson/50 shadow-2xl"
              >
                {/* Ambient Background Gradient Accent */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-crimson/10 blur-3xl transition duration-700 group-hover:bg-crimson/20"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl"
                />

                <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  {/* Left Column: Details, Authors, Abstract */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className="rounded-full bg-crimson/20 border border-crimson/40 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-crimson-2">
                        {paper.badge}
                      </span>
                      <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] font-mono text-mist">
                        {paper.paperId}
                      </span>
                      <span className="text-xs text-smoke font-mono">
                        {paper.location} · {paper.year}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-bone leading-tight">
                      {paper.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-semibold tracking-wide text-crimson-2">
                      {paper.domain}
                    </p>

                    {/* Authors block */}
                    <div className="rounded-xl bg-white/[0.03] border border-white/5 p-4 space-y-1.5">
                      <p className="text-xs font-semibold text-mist uppercase tracking-wider">
                        Authors &amp; Supervision:
                      </p>
                      <p className="text-sm text-bone/90 leading-relaxed">
                        <strong className="text-bone underline decoration-crimson decoration-2 underline-offset-4">
                          Md. Miftahur Rahman Swapnil
                        </strong>{" "}
                        (First Author),{" "}
                        {paper.authors
                          .filter((a) => !a.includes("First Author"))
                          .join(", ")}
                      </p>
                      {paper.supervisor && (
                        <p className="text-xs text-smoke pt-1">
                          <span className="text-mist font-medium">
                            Supervised by:
                          </span>{" "}
                          {paper.supervisor}
                        </p>
                      )}
                    </div>

                    {/* Abstract with compact mobile toggle */}
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-mist mb-1.5">
                        Abstract:
                      </p>
                      <p
                        className={`text-[13px] sm:text-sm leading-relaxed text-bone/80 ${
                          !isExpanded ? "line-clamp-3 sm:line-clamp-none" : ""
                        }`}
                      >
                        {paper.abstract}
                      </p>
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedId(isExpanded ? null : paper.id)
                        }
                        className="mt-1 text-[11px] font-semibold text-crimson-2 underline underline-offset-2 sm:hidden"
                      >
                        {isExpanded ? "Collapse abstract ↑" : "Read full abstract ↓"}
                      </button>
                    </div>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      {paper.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded bg-white/[0.05] border border-white/10 px-2 py-0.5 text-[11px] font-medium text-bone/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Key Architecture Metrics & Actions */}
                  <div className="flex flex-col gap-3.5 lg:w-72 lg:shrink-0 lg:border-l lg:border-white/10 lg:pl-8">
                    <div className="rounded-xl border border-white/10 bg-black/40 p-3.5 sm:p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-crimson-2 mb-2 sm:mb-3">
                        Architecture Metrics
                      </p>
                      <dl className="space-y-2 text-xs">
                        {paper.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="flex items-center justify-between"
                          >
                            <dt className="text-mist">{m.label}</dt>
                            <dd className="font-mono font-bold text-bone">
                              {m.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        PEER-REVIEW STATUS
                      </div>
                      <p className="mt-1 text-[11px] leading-snug text-bone/80">
                        {paper.status}
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col gap-2 pt-0.5">
                      {paper.github && (
                        <a
                          href={paper.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2 rounded-lg bg-bone px-3.5 py-2.5 text-xs font-bold text-ink transition hover:bg-white"
                        >
                          <span>⌥</span> View Research Code (GitHub) ↗
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => copyBibtex(paper)}
                        className="flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-3.5 py-2.5 text-xs font-semibold text-bone transition hover:bg-white/10 hover:border-white/30"
                      >
                        <span>{copiedId === paper.id ? "✓" : "❝"}</span>
                        {copiedId === paper.id
                          ? "Citation Copied!"
                          : "Copy BibTeX Citation"}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Mobile Swipe Indicators with tap to jump */}
        <div className="mt-3 flex items-center justify-center gap-1.5 sm:hidden">
          {researchPapers.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToPaper(i)}
              aria-label={`Jump to paper ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activePaperIdx ? "w-6 bg-crimson" : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
