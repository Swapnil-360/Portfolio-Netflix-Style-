import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { sectionMeta, viewerProfiles, type ProfileId, type SectionId } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE } from './fx';
import { SeriesMark } from './Poster';
import { ProfileAvatar } from './ProfileSelector';

export default function Navbar({
  order,
  profileId,
  onSwitch,
}: {
  order: SectionId[];
  profileId: ProfileId;
  onSwitch: (id: ProfileId) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('top');
  const [menu, setMenu] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { scrollTo } = useSmoothScroll();

  const current = viewerProfiles.find((p) => p.id === profileId)!;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = ['top', ...order, 'contact'];
      const hit = ids
        .map((id) => ({ id, el: document.getElementById(id) }))
        .filter((x): x is { id: string; el: HTMLElement } => Boolean(x.el))
        .find(({ el }) => {
          const r = el.getBoundingClientRect();
          return r.top <= 140 && r.bottom > 140;
        });
      if (hit) setActive(hit.id);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [order]);

  useEffect(() => {
    const clickOut = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenu(false);
    };
    window.addEventListener('pointerdown', clickOut);
    return () => window.removeEventListener('pointerdown', clickOut);
  }, []);

  const go = (id: string) => {
    setMobileNav(false);
    scrollTo(id === 'top' ? 0 : `#${id}`);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-[100] transition-colors duration-500 ${
        scrolled ? 'bg-ink/80 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="gutter flex h-16 items-center justify-between gap-4 pt-[env(safe-area-inset-top)] sm:h-20">
        <button
          type="button"
          onClick={() => go('top')}
          className="flex items-center gap-2 focus:outline-none"
          aria-label="Home"
        >
          <SeriesMark />
        </button>

        {/* Desktop Navigation */}
        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          <NavLink label="Home" active={active === 'top'} onClick={() => go('top')} />
          {order.map((id) => (
            <NavLink key={id} label={sectionMeta[id].nav} active={active === id} onClick={() => go(id)} />
          ))}
        </nav>

        {/* Right Action & Profile Switcher */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => go('contact')}
            className="hidden rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-bone transition hover:border-crimson-2 hover:text-crimson-2 hover:bg-white/5 sm:block"
          >
            LET&apos;S BUILD
          </button>

          {/* Profile Switcher Menu */}
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setMenu((m) => !m)}
              aria-haspopup="menu"
              aria-expanded={menu}
              aria-label={`Viewing as ${current.name}. Switch profile`}
              className="group flex items-center gap-2 rounded-full border border-white/20 bg-[#0e0e14]/95 p-1 pr-2.5 shadow-[0_4px_16px_rgba(0,0,0,0.7),0_0_12px_rgba(255,42,68,0.25)] backdrop-blur-xl transition-all duration-300 hover:border-crimson-2 hover:bg-[#14141e] hover:shadow-[0_0_20px_rgba(255,42,68,0.45)] focus:outline-none"
            >
              <div className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-white/25 shadow-md group-hover:ring-crimson-2/70 transition-all">
                <ProfileAvatar id={profileId} size="sm" circular />
              </div>
              <motion.span
                animate={{ rotate: menu ? 180 : 0 }}
                className="text-[9px] font-bold text-mist transition-colors group-hover:text-bone"
              >
                ▼
              </motion.span>
            </button>

            <AnimatePresence>
              {menu && (
                <motion.div
                  role="menu"
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="absolute right-0 top-12 w-64 origin-top-right rounded-xl border border-white/10 bg-ink-2/95 p-2 shadow-2xl backdrop-blur-xl"
                >
                  <p className="px-3 pb-2 pt-1 text-[10px] font-semibold tracking-[0.24em] text-smoke">
                    WHO&apos;S WATCHING?
                  </p>
                  {viewerProfiles.map((p) => (
                    <button
                      key={p.id}
                      role="menuitem"
                      type="button"
                      onClick={() => {
                        onSwitch(p.id);
                        setMenu(false);
                      }}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition hover:bg-white/5 ${
                        p.id === profileId ? 'bg-white/[0.08]' : ''
                      }`}
                    >
                      <ProfileAvatar id={p.id} size="sm" circular />
                      <span>
                        <span className="block text-sm font-medium text-bone">{p.name}</span>
                        <span className="block text-[11px] text-smoke leading-tight">{p.blurb}</span>
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden focus:outline-none"
            aria-label={mobileNav ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileNav}
            onClick={() => setMobileNav((v) => !v)}
          >
            <motion.span
              className="block h-0.5 w-5 bg-bone"
              animate={{ rotate: mobileNav ? 45 : 0, y: mobileNav ? 4 : 0 }}
            />
            <motion.span
              className="block h-0.5 w-5 bg-bone"
              animate={{ rotate: mobileNav ? -45 : 0, y: mobileNav ? -4 : 0 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Navigation */}
      <AnimatePresence>
        {mobileNav && (
          <motion.nav
            aria-label="Sections"
            className="gutter border-b border-white/10 bg-ink/95 pb-6 pt-2 backdrop-blur-xl lg:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            {[
              { id: 'top', label: 'Home' },
              ...order.map((id) => ({ id, label: sectionMeta[id].nav })),
              { id: 'contact', label: "Let's Build" },
            ].map((l, i) => (
              <motion.button
                key={l.id}
                type="button"
                onClick={() => go(l.id)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i }}
                className={`block w-full py-3 text-left font-display text-3xl tracking-wide ${
                  active === l.id ? 'text-crimson-2' : 'text-bone'
                }`}
              >
                {l.label}
              </motion.button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavLink({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative text-[13px] font-medium transition ${
        active ? 'text-bone' : 'text-mist hover:text-bone'
      }`}
    >
      {label}
      {active && (
        <motion.span
          layoutId="nav-underline"
          className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded bg-crimson"
        />
      )}
    </button>
  );
}

