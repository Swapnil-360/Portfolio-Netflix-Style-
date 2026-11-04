import { useRef } from "react";
import { motion } from "framer-motion";
import {
  topPicks,
  crimson,
  violet,
  amber,
  jade,
  ocean,
  cobalt,
  type Palette,
} from "../data/portfolio";
import { EASE, SectionHeading } from "./fx";
import { PosterBackdrop } from "./Poster";
import { RailButtons } from "./Rail";

const palettes: Palette[] = [
  crimson,
  jade,
  violet,
  amber,
  ocean,
  cobalt,
  crimson,
  amber,
];

export default function TopPicks() {
  const rail = useRef<HTMLDivElement>(null);

  return (
    <>
      <SectionHeading
        kicker="Critics' Choice"
        title="Top Picks"
      />
      <div className="group/rail relative">
        <div
          ref={rail}
          className="rail gutter flex snap-x snap-mandatory gap-2 overflow-x-auto py-6"
        >
          {topPicks.map((pick, i) => {
            const pal = palettes[i % palettes.length];
            return (
              <motion.div
                key={pick.title}
                className="group relative flex h-[270px] shrink-0 snap-start items-end sm:h-[310px]"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px -5% 0px 0px" }}
                transition={{
                  duration: 0.7,
                  delay: Math.min(i, 5) * 0.06,
                  ease: EASE,
                }}
              >
                {/* Netflix-style giant stroke outline rank number */}
                <span
                  aria-hidden
                  className="text-outline -mr-6 select-none font-display leading-[0.78] transition duration-500 group-hover:[-webkit-text-stroke-color:rgba(255,42,68,0.9)] sm:-mr-8"
                  style={{ fontSize: "clamp(10rem, 24vw, 17rem)" }}
                >
                  {i + 1}
                </span>

                <div className="relative z-10 h-[85%] w-[160px] overflow-hidden rounded-xl shadow-[-12px_0_30px_rgba(0,0,0,0.8)] ring-1 ring-white/10 transition duration-500 group-hover:-translate-y-2 group-hover:ring-white/30 sm:w-[190px]">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                    <PosterBackdrop palette={pal} />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-between p-4 z-10">
                    <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-crimson-2">
                      {pick.genre}
                    </span>
                    <div>
                      <p className="font-display text-[1.8rem] leading-[0.92] tracking-wide text-bone">
                        {pick.title}
                      </p>
                      <p className="mt-1.5 text-[11px] leading-snug text-mist">
                        {pick.note}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <RailButtons rail={rail} />
      </div>
    </>
  );
}
