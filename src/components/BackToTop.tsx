import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE } from './fx';

export default function BackToTop() {
  const [isPastHero, setIsPastHero] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [mounted, setMounted] = useState(false);
  const scrollTimeout = useRef<number | null>(null);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    setMounted(true);

    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      const past = y > 320;
      setIsPastHero(past);

      if (past) {
        // Hide immediately while scrolling
        setIsScrolling(true);

        // Clear existing debounce timer
        if (scrollTimeout.current !== null) {
          window.clearTimeout(scrollTimeout.current);
        }

        // Show button when user stops scrolling
        scrollTimeout.current = window.setTimeout(() => {
          setIsScrolling(false);
        }, 260);
      } else {
        setIsScrolling(false);
        if (scrollTimeout.current !== null) {
          window.clearTimeout(scrollTimeout.current);
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (scrollTimeout.current !== null) {
        window.clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  const handleTop = () => {
    scrollTo(0);
  };

  const shouldShow = isPastHero && !isScrolling;

  if (!mounted || typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {shouldShow && (
        <motion.button
          type="button"
          onClick={handleTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          transition={{ duration: 0.24, ease: EASE }}
          whileHover={{ scale: 1.12, y: -3 }}
          whileTap={{ scale: 0.92 }}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[999] flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#b80610] via-[#e50914] to-[#ff2a44] text-white shadow-[0_8px_24px_rgba(229,9,20,0.65),0_0_14px_rgba(255,42,68,0.5)] hover:shadow-[0_12px_36px_rgba(229,9,20,0.9),0_0_24px_rgba(255,42,68,0.75)] border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#ff2a44] focus:ring-offset-2 focus:ring-offset-black transition-shadow duration-300 group cursor-pointer"
        >
          {/* Ambient red flare */}
          <span
            aria-hidden
            className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          {/* Up arrow icon */}
          <svg
            className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:-translate-y-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>,
    document.body
  );
}
