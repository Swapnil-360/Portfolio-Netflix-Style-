import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { seasons } from "../data/portfolio";
import { EASE, SectionHeading } from "./fx";
import EpisodeCard from "./EpisodeCard";
import { RailButtons } from "./Rail";

export default function Seasons() {
  const [active, setActive] = useState(seasons[0].number);
  const season = seasons.find((s) => s.number === active) ?? seasons[0];
  const railRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <SectionHeading
        kicker={`${seasons.length} Seasons`}
        title="My Journey"
        aside={
          <div className="flex flex-wrap items-center gap-2">
            {seasons.map((s) => (
              <button
                key={s.number}
                type="button"
                onClick={() => setActive(s.number)}
                className={`rounded-full px-4 py-1.5 font-sans text-xs font-bold tracking-wider transition ${
                  s.number === active
                    ? "bg-crimson text-white shadow-[0_0_24px_rgba(255,42,68,0.45)]"
                    : "bg-white/[0.06] text-mist hover:bg-white/10 hover:text-bone"
                }`}
              >
                SEASON {s.number}
              </button>
            ))}
          </div>
        }
      />

      <div className="gutter mb-6 flex flex-wrap items-baseline justify-between gap-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={season.number}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="flex flex-col gap-1"
          >
            <h3 className="font-display text-2xl tracking-wide text-bone sm:text-3xl">
              Season {season.number}: {season.title}
            </h3>
            <p className="max-w-xl text-sm text-mist">{season.synopsis}</p>
          </motion.div>
        </AnimatePresence>
        <span className="font-sans text-xs font-bold tracking-[0.2em] text-smoke">
          {season.period} · {season.episodes.length} EPISODES
        </span>
      </div>

      <div className="group/rail relative">
        <RailButtons rail={railRef} />
        <div
          ref={railRef}
          className="rail gutter flex gap-5 overflow-x-auto pb-6 pt-2"
        >
          <AnimatePresence mode="wait">
            {season.episodes.map((ep, i) => (
              <EpisodeCard
                key={`${season.number}-${ep.code}`}
                episode={ep}
                index={i}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
