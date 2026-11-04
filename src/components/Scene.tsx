import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTrackProgress } from "../hooks/sectionProgress";

/**
 * A cinematic section of the series. Fades up out of deep black with blur-to-focus
 * and records real watching progress for the Continue Watching row.
 */
export default function Scene({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  useTrackProgress(id, ref);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.55"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.15, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.97, 1]);

  return (
    <motion.section
      id={id}
      ref={ref}
      style={{ opacity, scale }}
      className={`relative scroll-mt-16 py-14 sm:py-24 w-full max-w-full overflow-x-clip ${className}`}
    >
      {children}
    </motion.section>
  );
}
