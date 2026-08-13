import { useEffect, useState } from "react";
import { LINKS, NAV_LINKS } from "../data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-surface border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-[72px] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <span className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/50 glow-ring">
            <span className="font-display font-black text-red-500 text-sm relative z-10">M</span>
          </span>
          <span className="font-display font-bold tracking-wider text-sm sm:text-base">
            META<span className="text-red-500">DOGE</span>UNITY
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body font-semibold text-sm tracking-wide uppercase text-white hover:text-red-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={LINKS.x}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-white/15 text-white hover:text-white hover:border-white transition-colors"
            aria-label="MetaDogeUnity on X"
          >
            <XIcon />
          </a>
          <a
  href={LINKS.googlePlay}
  target="_blank"
  rel="noopener noreferrer"
  className="font-display font-bold text-xs tracking-widest px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white shadow-[0_8px_24px_-6px_rgba(249,115,22,0.55)] hover:-translate-y-0.5 transition-transform"
>
  Play Now
</a>
        </div>

        <button
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`block w-6 h-0.5 bg-paper transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-0.5 bg-paper transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-paper transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass-surface border-t border-white/10 px-5 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-body font-semibold text-base uppercase tracking-wide text-paper"
            >
              {l.label}
            </a>
          ))}
          <a
            href={LINKS.googlePlay}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display font-bold text-xs tracking-widest uppercase px-5 py-3 rounded-full gradient-cta text-ink text-center"
          >
            Play Now
          </a>
        </div>
      )}
    </header>
  );
}

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
