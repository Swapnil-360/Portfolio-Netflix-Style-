import { useState, useRef, type FormEvent } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profile } from '../data/portfolio';
import { EASE, Magnetic, Particles } from './fx';
import { SeriesMark } from './Poster';

export default function FinalCTA({ onReplay }: { onReplay: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.2'] });
  const spacing = useTransform(scrollYProgress, [0, 1], ['0.18em', '0.03em']);
  const blur = useTransform(scrollYProgress, [0, 1], ['blur(16px)', 'blur(0px)']);
  const opacity = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [dispatchMethod, setDispatchMethod] = useState<'api' | 'gmail' | 'mail'>('gmail');
  const [error, setError] = useState('');

  const buildInquiryData = () => {
    const subject = `Project Inquiry from ${form.name.trim()}`;
    const body = `Hi Swapnil,\n\n${form.message.trim()}\n\n----------------------------------------\nClient Name: ${form.name.trim()}\nClient Email: ${form.email.trim()}\nSent via Swapnil Portfolio Deck\n----------------------------------------`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const whatsappUrl = `https://wa.me/${profile.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi Swapnil, this is ${form.name.trim()} (${form.email.trim()}):\n${form.message.trim()}`)}`;

    return { subject, body, gmailUrl, mailtoUrl, whatsappUrl };
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all fields before sending.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setLoading(true);

    const { gmailUrl, mailtoUrl } = buildInquiryData();
    const customEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

    if (customEndpoint) {
      try {
        const response = await fetch(customEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            message: form.message.trim(),
            _subject: `New Project Inquiry from ${form.name.trim()} (Swapnil Portfolio)`,
            _replyto: form.email.trim(),
          }),
        });

        if (response.ok) {
          setDispatchMethod('api');
          setSubmitted(true);
          setLoading(false);
          return;
        }
      } catch (err) {
        console.warn('Custom endpoint failed, switching to direct Gmail launch:', err);
      }
    }

    // Direct, 100% reliable Gmail / Mail client dispatch
    setDispatchMethod('gmail');
    setSubmitted(true);
    setLoading(false);

    // Try opening Gmail Web Compose directly; fallback to mailto if popups are restricted
    try {
      const win = window.open(gmailUrl, '_blank');
      if (!win || win.closed || typeof win.closed === 'undefined') {
        window.location.href = mailtoUrl;
      }
    } catch {
      window.location.href = mailtoUrl;
    }
  };

  const channels = [
    { label: 'LinkedIn', href: profile.links.linkedin },
    { label: 'GitHub', href: profile.links.github },
    { label: 'WhatsApp', href: profile.links.whatsapp },
    { label: 'Telegram', href: profile.links.telegram },
    { label: 'Email', href: `mailto:${profile.email}` },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative flex min-h-[105svh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_55%,rgba(255,42,68,0.18),transparent_70%)] pointer-events-none"
      />
      <Particles count={38} color="255,42,68" />

      <motion.p
        className="relative mb-4 text-[11px] font-bold uppercase tracking-[0.45em] text-crimson-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        The Next Episode
      </motion.p>

      <motion.h2
        className="relative font-display leading-[0.85] text-bone max-w-full"
        style={{ fontSize: 'clamp(3.6rem, 13vw, 11rem)', letterSpacing: spacing, filter: blur, opacity }}
      >
        TO BE CONTINUED…
      </motion.h2>

      <motion.p
        className="relative mt-6 max-w-xl text-lg font-serif italic text-bone/90 sm:text-2xl"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
      >
        “Have an idea worth building? Let's turn it into something real.”
      </motion.p>

      {/* Interactive Contact Card & Form */}
      <motion.div
        className="relative mt-10 w-full max-w-xl text-left"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8, ease: EASE }}
      >
        <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl backdrop-blur-xl">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-2xl font-bold border border-emerald-500/30 shadow-[0_0_24px_rgba(16,185,129,0.3)]">
                ✓
              </div>
              <h3 className="mt-4 font-display text-2xl sm:text-3xl text-bone">
                {dispatchMethod === 'api' ? 'Inquiry Sent Directly!' : 'Inquiry Ready to Send!'}
              </h3>
              <p className="mt-2 text-sm text-mist max-w-md mx-auto leading-relaxed">
                {dispatchMethod === 'api'
                  ? `Thank you! Your message was delivered to Swapnil's inbox (${profile.email}). Expect a reply within 24 hours.`
                  : `Your message has been prepared for Swapnil's Gmail (${profile.email}). If your email tab didn't open automatically, pick an option below:`}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href={buildInquiryData().gmailUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-crimson px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(229,9,20,0.4)] transition hover:bg-crimson/80"
                >
                  Open in Gmail Web ↗
                </a>
                <a
                  href={buildInquiryData().mailtoUrl}
                  className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-bone transition hover:bg-white/10 hover:border-white/40"
                >
                  Open in Mail App ↗
                </a>
                <a
                  href={buildInquiryData().whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-300 transition hover:bg-emerald-500/30"
                >
                  Chat on WhatsApp ↗
                </a>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: '', email: '', message: '' });
                }}
                className="mt-6 text-xs text-smoke hover:text-mist tracking-wider uppercase font-semibold transition"
              >
                Send Another Inquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-mist mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 text-sm text-bone placeholder:text-smoke focus:border-crimson-2 focus:outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-mist mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 text-sm text-bone placeholder:text-smoke focus:border-crimson-2 focus:outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-mist mb-1.5">
                  Message / Project Idea
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell me about what you'd like to build, timeline, or scope..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 text-sm text-bone placeholder:text-smoke focus:border-crimson-2 focus:outline-none transition resize-none"
                />
              </div>

              {error && (
                <div className="rounded-lg bg-crimson/15 border border-crimson/30 p-3 text-xs text-crimson-2 flex flex-col gap-1.5">
                  <p>{error}</p>
                  <a
                    href={`mailto:${profile.email}?subject=${encodeURIComponent(`Project Inquiry from ${form.name}`)}&body=${encodeURIComponent(form.message)}`}
                    className="inline-flex items-center gap-1 font-bold underline text-bone hover:text-white"
                  >
                    Open Mail Directly ({profile.email}) →
                  </a>
                </div>
              )}

              <Magnetic className="w-full">
                <button
                  type="submit"
                  disabled={loading}
                  data-cursor="play"
                  className="w-full rounded-lg bg-bone py-3.5 text-sm font-bold text-ink shadow-[0_0_30px_rgba(255,42,68,0.4)] transition hover:bg-white active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink border-t-transparent" />
                      <span>SENDING INQUIRY...</span>
                    </>
                  ) : (
                    <span>SEND INQUIRY →</span>
                  )}
                </button>
              </Magnetic>
            </form>
          )}
        </div>
      </motion.div>

      {/* Quick Direct Links */}
      <motion.div
        className="relative mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 text-xs font-semibold tracking-wider text-bone"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {channels.map((c) => (
          <Magnetic key={c.label}>
            <a
              href={c.href}
              target={c.href.startsWith('mailto:') ? '_self' : '_blank'}
              rel="noreferrer"
              className="glass rounded-full px-5 py-2.5 text-mist transition hover:text-bone hover:border-white/40"
            >
              {c.label} ↗
            </a>
          </Magnetic>
        ))}
      </motion.div>

      {/* Replay Series & Footer */}
      <div className="relative mt-16 flex flex-col items-center gap-4 text-xs text-smoke">
        <button
          type="button"
          onClick={onReplay}
          className="group flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-mist hover:text-bone hover:border-white/40 transition"
        >
          <span className="transition-transform group-hover:rotate-180">↻</span> REPLAY INTRO SEQUENCE
        </button>

        <div className="flex items-center gap-2 pt-2">
          <SeriesMark />
          <span>© 2026 {profile.fullName}. Crafted with passion.</span>
        </div>
      </div>
    </section>
  );
}

