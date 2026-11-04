import { useState, useRef, useEffect, type ReactNode } from "react";
import type { Palette, Project } from "../data/portfolio";

/**
 * Cinematic key art backdrop — layered gradients, light falloff and subtle grain lines.
 */
export function PosterBackdrop({
  palette,
  children,
  className = "",
}: {
  palette: Palette;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{
          background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)`,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.14] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]"
      />
      {children}
    </div>
  );
}

/**
 * Project Media Stage — Renders real recorded videos or high-resolution screenshots
 * with strict aspect-ratio fidelity, browser/device chrome, and ambient glow.
 */
export function ProjectMedia({
  project,
  className = "",
  showChrome = true,
  autoPlayVideo = true,
  variant = "card",
}: {
  project: Project;
  className?: string;
  showChrome?: boolean;
  autoPlayVideo?: boolean;
  variant?: "card" | "banner" | "compact";
}) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const a = project.palette.accent;

  // Auto-play control
  useEffect(() => {
    if (project.video && videoRef.current && autoPlayVideo && !videoFailed) {
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted by browser until user gesture
      });
    }
  }, [project.video, autoPlayVideo, videoFailed]);

  const hasVideo = Boolean(project.video && !videoFailed);
  const ratioClass =
    project.aspectRatio === "16/10"
      ? "aspect-[16/10]"
      : project.aspectRatio === "9/16"
      ? "aspect-[9/16]"
      : "aspect-[16/9]";

  return (
    <div
      className={`relative w-full overflow-hidden bg-black/90 ${className}`}
      style={{
        boxShadow: `0 20px 50px -15px ${a}25`,
      }}
    >
      {/* Ambient OLED back-glow using the artwork itself */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-2 opacity-35 blur-2xl transition-opacity duration-700 group-hover:opacity-60"
        style={{
          background: `radial-gradient(ellipse at center, ${a}80 0%, transparent 70%)`,
        }}
      />

      {/* Browser / Device Chrome Header (when enabled) */}
      {showChrome && (
        <div className="relative z-20 flex h-7 sm:h-8 w-full items-center justify-between border-b border-white/10 bg-ink/90 px-3 backdrop-blur-md">
          {/* Traffic light window controls */}
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/90 shadow-[0_0_6px_rgba(255,95,86,0.6)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/90" />
          </div>

          {/* Centered Domain / System Pill */}
          <div className="flex items-center gap-1.5 rounded-md border border-white/10 bg-black/40 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-mono text-mist">
            <span className="text-emerald-400 text-[9px]">🔒</span>
            <span className="truncate max-w-[140px] sm:max-w-[220px]">
              {project.domain || project.categoryLabel}
            </span>
          </div>

          {/* Right badge: Video / Live Status */}
          <div className="flex items-center gap-2">
            {hasVideo && (
              <span className="inline-flex items-center gap-1 rounded bg-crimson/20 border border-crimson/40 px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider text-crimson-2">
                <span className="h-1.5 w-1.5 rounded-full bg-crimson animate-pulse" />
                4K VIDEO
              </span>
            )}
            {!hasVideo && project.status === "Live" && (
              <span className="inline-flex items-center gap-1 rounded bg-emerald-500/20 border border-emerald-500/40 px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                <span className="h-1 w-1 rounded-full bg-emerald-400" />
                LIVE
              </span>
            )}
          </div>
        </div>
      )}

      {/* Media Viewport Container strictly respecting the aspect ratio */}
      <div className={`relative w-full overflow-hidden ${variant === "banner" ? "h-full" : ratioClass}`}>
        {/* Recorded Video Layer */}
        {hasVideo ? (
          <video
            ref={videoRef}
            src={project.video}
            poster={project.image}
            autoPlay={autoPlayVideo}
            loop
            muted
            playsInline
            onLoadedData={() => setIsVideoLoaded(true)}
            onError={() => setVideoFailed(true)}
            className={`h-full w-full object-cover transition-all duration-700 ${
              isVideoLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        ) : null}

        {/* High-Resolution Screenshot Layer */}
        {(!hasVideo || !isVideoLoaded) && project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : null}

        {/* Subtle cinematic edge vignette - does NOT mask out content */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
        />

        {/* Subtle bottom shadow vignette for smooth transition to footer */}
        {variant === "card" && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/60 to-transparent"
          />
        )}
      </div>
    </div>
  );
}

/** Project poster artwork incorporating genuine project screenshots with atmospheric lighting. */
export function ProjectArt({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  return (
    <ProjectMedia
      project={project}
      className={className}
      showChrome={false}
      variant="banner"
    />
  );
}

/** The signature Series brand mark (Netflix ribbon mark + PORTFOLIO in authentic Netflix condensed typography). */
export function SeriesMark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 sm:gap-2 select-none ${className}`}>
      <svg
        viewBox="0 0 24 32"
        className="h-5 sm:h-[22px] w-auto shrink-0 drop-shadow-[0_0_12px_rgba(229,9,20,0.8)]"
        aria-hidden
      >
        <path d="M0 0 H7 V32 H0 Z" fill="#E50914" />
        <path d="M17 0 H24 V32 H17 Z" fill="#E50914" />
        <path d="M0 0 L24 32 H17 L0 9.3 Z" fill="#B81D24" />
      </svg>
      <span className="font-display text-[18px] sm:text-[20px] font-bold tracking-[0.14em] text-[#E50914] leading-none uppercase [text-shadow:0_0_14px_rgba(229,9,20,0.45)] translate-y-[1px]">
        PORTFOLIO
      </span>
    </span>
  );
}
