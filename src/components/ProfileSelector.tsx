import { useEffect } from "react";
import { motion } from "framer-motion";
import { profile, viewerProfiles, type ProfileId } from "../data/portfolio";
import { EASE } from "./fx";

export function ProfileAvatar({
  id,
  size = "lg",
  circular = false,
}: {
  id: ProfileId;
  size?: "sm" | "lg";
  circular?: boolean;
}) {
  const p = viewerProfiles.find((v) => v.id === id)!;
  const isCircle = circular || size === "sm";
  const box =
    size === "lg"
      ? isCircle
        ? "h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 rounded-full"
        : "h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 rounded-xl"
      : "h-8 w-8 rounded-full";

  if (id === "swapnil") {
    return (
      <span
        className={`relative block overflow-hidden ${box} ring-1.5 ring-white/30 shadow-[0_2px_8px_rgba(0,0,0,0.8)]`}
        style={{
          background: "radial-gradient(circle at 50% 30%, #540b15, #0d0407)",
        }}
      >
        <img
          src="/images/pfp-b&g.png"
          alt="Swapnil"
          className="absolute bottom-0 left-1/2 -translate-x-[51.5%] h-[115%] w-auto max-w-none object-cover object-top select-none pointer-events-none"
        />
      </span>
    );
  }

  const glyph = { recruiter: "💼", founder: "⚡", engineer: "</>" }[id];
  return (
    <span
      className={`relative flex items-center justify-center overflow-hidden font-display text-bone ${box} ring-1.5 ring-white/30 shadow-[0_2px_8px_rgba(0,0,0,0.8)]`}
      style={{
        background: `linear-gradient(145deg, ${p.color}44, #101016 120%)`,
        border: `1px solid ${p.color}66`,
      }}
    >
      <span className={size === "lg" ? "text-3xl sm:text-4xl" : "text-xs"}>
        {glyph}
      </span>
    </span>
  );
}

export default function ProfileSelector({
  onPick,
}: {
  onPick: (id: ProfileId) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onPick("swapnil");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onPick]);

  return (
    <motion.div
      className="fixed inset-0 z-[110] flex flex-col items-center justify-center overflow-y-auto bg-ink px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.08, filter: "blur(10px)" }}
      transition={{ duration: 0.7, ease: EASE }}
      role="dialog"
      aria-label="Who's watching?"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,42,68,0.14),transparent_70%)] pointer-events-none"
      />

      <motion.p
        className="relative mb-3 text-center text-xs font-semibold uppercase tracking-[0.34em] text-crimson-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        SELECT YOUR EXPERIENCE
      </motion.p>

      <motion.h2
        className="relative mb-10 text-center font-sans text-3xl font-medium tracking-tight text-bone sm:text-5xl"
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        Who&apos;s watching?
      </motion.h2>

      <motion.ul
        className="relative grid grid-cols-2 gap-6 sm:flex sm:gap-8"
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
      >
        {viewerProfiles.map((p) => (
          <motion.li
            key={p.id}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: EASE },
              },
            }}
          >
            <button
              type="button"
              onClick={() => onPick(p.id)}
              data-cursor="play"
              className="group flex flex-col items-center gap-3 text-center transition"
            >
              <span className="relative rounded-xl ring-2 ring-transparent transition duration-300 group-hover:scale-105 group-hover:ring-bone group-focus-visible:ring-bone">
                <ProfileAvatar id={p.id} />
                {p.id === "swapnil" && (
                  <span className="absolute -right-2 -top-2 rounded-full bg-crimson px-2 py-0.5 text-[9px] font-bold tracking-[0.18em] text-white shadow-lg">
                    MAIN
                  </span>
                )}
              </span>
              <span className="font-sans text-sm font-medium text-mist transition group-hover:text-bone sm:text-base">
                {p.name}
              </span>
              <span className="max-w-[9.5rem] text-[11px] leading-snug text-smoke">
                {p.blurb}
              </span>
            </button>
          </motion.li>
        ))}
      </motion.ul>

      <p className="relative mt-12 max-w-md text-center text-xs leading-relaxed text-smoke">
        Every profile explores the verified body of work of{" "}
        {profile.displayName} — tailored to your priorities.
      </p>
    </motion.div>
  );
}
