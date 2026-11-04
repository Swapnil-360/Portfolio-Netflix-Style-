import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { education, experience, profile } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';

export default function About() {
  const eduRail = useRef<HTMLDivElement>(null);
  const expRail = useRef<HTMLDivElement>(null);
  const [eduIdx, setEduIdx] = useState(0);
  const [expIdx, setExpIdx] = useState(0);

  const handleEduScroll = () => {
    if (!eduRail.current) return;
    const { scrollLeft, clientWidth } = eduRail.current;
    setEduIdx(Math.round(scrollLeft / (clientWidth * 0.78)));
  };

  const handleExpScroll = () => {
    if (!expRail.current) return;
    const { scrollLeft, clientWidth } = expRail.current;
    setExpIdx(Math.round(scrollLeft / (clientWidth * 0.78)));
  };

  return (
    <>
      <SectionHeading kicker="The Pilot" title="About Me" />
      <div className="gutter grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 items-start">
        {/* Left Column: Cinematic Portrait Card & Identity Dossier */}
        <div className="mx-auto w-full max-w-[340px] sm:max-w-md lg:max-w-none space-y-4 sm:space-y-5 lg:sticky lg:top-24">
          <Tilt max={5} className="rounded-2xl">
            <div className="relative aspect-[4/5] max-h-[340px] sm:max-h-[460px] lg:max-h-none overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl bg-ink-2">
              <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_30%,#4a0812,#14060a_60%,#07070a)]" />
              <div className="absolute inset-0 opacity-40 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_28px)]" />
              <img
                src={profile.portrait.src}
                srcSet={profile.portrait.srcSet}
                alt={profile.portrait.alt}
                loading="eager"
                className="absolute bottom-0 left-1/2 h-[94%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 flex items-end justify-between">
                <div>
                  <p className="text-[9px] sm:text-[10px] font-bold tracking-[0.3em] text-crimson-2">STARRING</p>
                  <p className="font-display text-lg sm:text-2xl lg:text-3xl leading-none text-bone">{profile.fullName}</p>
                  <p className="text-[10.5px] sm:text-xs text-mist mt-0.5 sm:mt-1 font-serif italic">
                    Known as {profile.displayName} · {profile.role}
                  </p>
                </div>
                <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-mono font-bold tracking-wider text-emerald-400">
                  CGPA 3.60
                </span>
              </div>
            </div>
          </Tilt>

          {/* Identity Dossier Quick Specs */}
          <div className="rounded-2xl border border-white/10 bg-ink-2/90 p-4 sm:p-5 space-y-2.5 sm:space-y-3.5 shadow-xl">
            <p className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-2">Pilot Dossier</p>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-xs">
              <div>
                <span className="text-smoke block text-[9.5px] sm:text-[10px] uppercase font-mono">Full Name</span>
                <span className="text-bone font-medium">{profile.fullName}</span>
              </div>
              <div>
                <span className="text-smoke block text-[9.5px] sm:text-[10px] uppercase font-mono">Location</span>
                <span className="text-bone font-medium">{profile.location}</span>
              </div>
              <div>
                <span className="text-smoke block text-[9.5px] sm:text-[10px] uppercase font-mono">Degree &amp; Intake</span>
                <span className="text-bone font-medium">BUBT CSE · Intake 51</span>
              </div>
              <div>
                <span className="text-smoke block text-[9.5px] sm:text-[10px] uppercase font-mono">Academic Result</span>
                <span className="text-emerald-400 font-mono font-semibold">CGPA: 3.60 / 4.00</span>
              </div>
              <div>
                <span className="text-smoke block text-[9.5px] sm:text-[10px] uppercase font-mono">HSC Result</span>
                <span className="text-emerald-400 font-mono font-semibold">GPA: 5.00 / 5.00</span>
              </div>
              <div>
                <span className="text-smoke block text-[9.5px] sm:text-[10px] uppercase font-mono">SSC Result</span>
                <span className="text-emerald-400 font-mono font-semibold">GPA: 5.00 / 5.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Story, Education Timeline, Experience, and Focus */}
        <div className="min-w-0 w-full max-w-full space-y-6 sm:space-y-8">
          <div>
            <p className="font-serif text-[clamp(1.3rem,4.5vw,2.3rem)] italic leading-[1.25] text-bone">
              “I don't just write code — I look for things that are broken, fragmented, or tedious in daily life and build software that fixes them.”
            </p>
            <p className="mt-2 text-xs sm:text-sm text-mist">— {profile.fullName} · {profile.headline}</p>

            <p className="mt-4 sm:mt-5 text-[14px] sm:text-base leading-relaxed text-bone/85">
              I am a final-year Computer Science &amp; Engineering student at Bangladesh University of Business and Technology (BUBT). My journey is rooted in building hands-on software — developing high-performance web systems, native and cross-platform mobile apps (Kotlin &amp; Jetpack Compose, React Native, Flutter), and IoT sensor automation.
            </p>

            <p className="mt-3 text-[14px] sm:text-base leading-relaxed text-bone/85">
              As <span className="text-bone font-semibold">Co-Founder &amp; CTO of OpusGen AI</span>, I architect generative visual pipelines and collaborate closely with creative teams. To eliminate academic chaos for 200+ classmates, I founded <span className="text-bone font-semibold">Edu51Portal</span>. In Web3, I bring 3+ years of operational experience scaling communities and serving as a <span className="text-bone font-semibold">Biconomy listing partner</span>. In AI, I engineered <span className="text-bone font-semibold">Mikasa</span> on Telegram with n8n, and authored <span className="text-bone font-semibold">CurricuRAG</span>, accepted at IEEE OMLET 2026.
            </p>
          </div>

          {/* Academic Journey (Education Breakdown) — Swipeable rail on mobile */}
          <div className="min-w-0 w-full max-w-full">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.28em] text-crimson-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-crimson animate-pulse" />
                Complete Academic Journey
              </h3>
              <span className="text-[10px] text-smoke sm:hidden">Swipe →</span>
            </div>
            <div
              ref={eduRail}
              onScroll={handleEduScroll}
              className="rail flex w-full max-w-full gap-3 overflow-x-auto snap-x snap-mandatory pb-2 pt-0.5 sm:flex-col sm:space-y-3 sm:overflow-visible"
            >
              {education.map((e) => (
                <div
                  key={e.degree}
                  className="w-[78vw] sm:w-auto shrink-0 snap-start rounded-xl border border-white/10 bg-ink-2/80 p-3.5 sm:p-4 transition duration-300 hover:border-white/25 shadow-lg"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                    <p className="text-sm font-semibold text-bone">{e.degree}</p>
                    <span className="text-xs font-mono text-smoke">{e.period}</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-x-2 mt-1.5 text-xs text-mist">
                    <span>
                      {e.school}
                      {(e as { cohort?: string }).cohort && (
                        <span className="text-smoke font-mono"> | {(e as { cohort?: string }).cohort}</span>
                      )}
                    </span>
                    <span className="text-emerald-400 font-mono font-semibold">{e.score}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Mobile swipe dots for education */}
            <div className="mt-2 flex items-center justify-center gap-1.5 sm:hidden">
              {education.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === eduIdx ? 'w-5 bg-crimson' : 'w-1.5 bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Experience & Leadership Highlights — Swipeable rail on mobile */}
          <div className="min-w-0 w-full max-w-full">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.28em] text-crimson-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-crimson animate-pulse" />
                Shipped Experience &amp; Leadership
              </h3>
              <span className="text-[10px] text-smoke sm:hidden">Swipe →</span>
            </div>
            <div
              ref={expRail}
              onScroll={handleExpScroll}
              className="rail flex w-full max-w-full gap-3 overflow-x-auto snap-x snap-mandatory pb-3 pt-0.5 sm:grid sm:grid-cols-2 sm:overflow-visible"
            >
              {experience.map((x) => (
                <div
                  key={x.company}
                  className="w-[78vw] sm:w-auto shrink-0 snap-start rounded-xl border border-white/10 bg-ink-2/80 p-3.5 sm:p-4 space-y-1.5 transition duration-300 hover:border-white/25 shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-crimson-2 font-mono">
                        {x.period}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-bone mt-1">{x.company}</p>
                    <p className="text-xs text-mist font-medium">{x.role}</p>
                    <p className="text-xs text-bone/70 line-clamp-3 pt-1.5 leading-relaxed">
                      {x.points[0]}
                    </p>
                  </div>
                  {x.stack && (
                    <div className="flex flex-wrap gap-1 pt-2">
                      {x.stack.slice(0, 3).map((st) => (
                        <span key={st} className="rounded bg-white/5 border border-white/10 px-1.5 py-0.5 text-[9.5px] font-mono text-mist">
                          {st}
                        </span>
                      ))}
                      {x.stack.length > 3 && (
                        <span className="rounded bg-white/5 px-1 py-0.5 text-[9.5px] font-mono text-smoke">
                          +{x.stack.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Mobile swipe dots for experience */}
            <div className="mt-2 flex items-center justify-center gap-1.5 sm:hidden">
              {experience.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === expIdx ? 'w-5 bg-crimson' : 'w-1.5 bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Interests Pill Tags */}
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">
              Areas of Exploration &amp; Core Focus
            </p>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((i) => (
                <span
                  key={i}
                  className="glass rounded-full px-3.5 py-1.5 text-xs font-medium text-bone border border-white/10"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
