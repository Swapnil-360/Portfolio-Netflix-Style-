import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { achievements, certifications } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';
import { RailButtons } from './Rail';

function Laurel({ side }: { side: 'l' | 'r' }) {
  return (
    <svg viewBox="0 0 30 64" className={`h-10 sm:h-14 w-auto text-[#d9b46a] ${side === 'r' ? '-scale-x-100' : ''}`} aria-hidden>
      <path d="M26 62C10 52 4 36 8 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      {[10, 18, 26, 34, 42, 50].map((y, i) => (
        <ellipse
          key={y}
          cx={i < 2 ? 9 : 8 + i * 1.6}
          cy={y}
          rx="5"
          ry="2.2"
          fill="currentColor"
          opacity="0.85"
          transform={`rotate(-40 ${8 + i * 1.6} ${y})`}
        />
      ))}
    </svg>
  );
}

export default function Achievements() {
  const certRail = useRef<HTMLDivElement>(null);
  const awardRail = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleAwardScroll = () => {
    if (!awardRail.current) return;
    const { scrollLeft, clientWidth } = awardRail.current;
    setActiveIdx(Math.round(scrollLeft / (clientWidth * 0.82)));
  };

  const scrollToAward = (idx: number) => {
    if (!awardRail.current) return;
    const cardWidth = awardRail.current.clientWidth * 0.84;
    awardRail.current.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
  };

  return (
    <>
      <SectionHeading
        kicker="Awards Season"
        title="Top Moments"
        aside={
          <p className="text-xs text-smoke sm:hidden">
            Swipe sideways to view all moments →
          </p>
        }
      />

      {/* Film Festival Laurel Wreath Cards — Side-by-side swipe on mobile, 4-col grid on desktop */}
      <div className="relative">
        <div
          ref={awardRail}
          onScroll={handleAwardScroll}
          className="rail gutter flex gap-3.5 overflow-x-auto snap-x snap-mandatory pb-4 pt-1 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible [perspective:1400px]"
        >
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-4% 0px' }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: EASE }}
              className="w-[82vw] sm:w-auto shrink-0 snap-start"
            >
              <Tilt max={6} className="group h-full rounded-2xl">
                <article className="relative flex h-full min-h-[300px] sm:min-h-[360px] flex-col items-center overflow-hidden rounded-2xl bg-[radial-gradient(120%_80%_at_50%_0%,#2a1f10,#0d0b08_60%,#07070a)] p-5 sm:px-6 sm:pb-6 sm:pt-8 text-center ring-1 ring-[#d9b46a]/20 transition duration-500 group-hover:ring-[#d9b46a]/60 shadow-xl">
                  <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9b46a]/70 to-transparent" />
                  <div
                    aria-hidden
                    className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#d9b46a]/10 blur-3xl transition duration-700 group-hover:bg-[#d9b46a]/25"
                  />

                  <div className="relative flex items-center gap-1">
                    <Laurel side="l" />
                    <div className="px-2">
                      <p className="text-[9.5px] sm:text-[10px] font-bold uppercase leading-tight tracking-[0.22em] text-[#d9b46a]">
                        {a.badge}
                      </p>
                    </div>
                    <Laurel side="r" />
                  </div>

                  <h3 className="relative mt-4 sm:mt-6 font-display text-[1.65rem] sm:text-[2rem] leading-[0.94] tracking-wide text-bone">
                    {a.title}
                  </h3>
                  <p className="relative mt-1 sm:mt-1.5 text-[10.5px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#d9b46a]">
                    {a.venue} · {a.year}
                  </p>
                  <p className="relative mt-2.5 sm:mt-3 text-[12px] sm:text-[13px] leading-relaxed text-bone/75">
                    {a.blurb}
                  </p>
                  {(a as { link?: string }).link && (
                    <a
                      href={(a as { link?: string }).link}
                      target="_blank"
                      rel="noreferrer"
                      className="relative mt-auto pt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#d9b46a] underline underline-offset-4 hover:text-white transition"
                    >
                      <span>Explore Details ↗</span>
                    </a>
                  )}
                </article>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Indicators (dots) with tap to jump */}
        <div className="mt-2.5 flex items-center justify-center gap-1.5 sm:hidden">
          {achievements.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToAward(i)}
              aria-label={`Jump to award ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIdx ? 'w-6 bg-[#d9b46a]' : 'w-2 bg-[#d9b46a]/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Verified Credentials Rail */}
      <div className="mt-12 sm:mt-16">
        <div className="gutter mb-2 flex flex-wrap items-end justify-between gap-2">
          <h3 className="font-sans text-base sm:text-2xl font-semibold text-bone">
            Verified Milestones <span className="text-mist">· {certifications.length} credentials</span>
          </h3>
          <p className="text-xs text-smoke">BUBT · IEEE · Production Systems</p>
        </div>

        <div className="group/rail relative">
          <div ref={certRail} className="rail gutter flex snap-x gap-3 overflow-x-auto py-4 sm:py-5">
            {certifications.map((c, i) => (
              <motion.div
                key={c.title}
                className="group relative flex w-[240px] sm:w-[260px] shrink-0 snap-start flex-col justify-between rounded-xl bg-ink-2/90 p-4 sm:p-5 ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-white/30"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(i, 6) * 0.04, ease: EASE }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-crimson-2">
                    {c.issuer}
                  </span>
                  <span className="text-xs font-mono text-smoke">{c.year}</span>
                </div>
                <p className="mt-3 sm:mt-5 text-[13px] sm:text-sm font-semibold leading-snug text-bone">
                  {c.title}
                </p>
              </motion.div>
            ))}
          </div>
          <RailButtons rail={certRail} />
        </div>
      </div>
    </>
  );
}
