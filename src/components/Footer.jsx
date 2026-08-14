import { LINKS, TOKEN, NAV_LINKS } from "../data/site";

const SOCIALS = [
  {
    label: "X",
    href: LINKS.x,
    icon: (
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.6l8.1-9.3L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 4h-2l12.3 16Z" />
    ),
  },
  {
    label: "YouTube",
    href: LINKS.youtube,
    icon: (
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    ),
  },
  {
    label: "Google Play",
    href: LINKS.googlePlay,
    icon: (
      <path d="M3 2.5v19a1 1 0 0 0 1.5.87l16-9.5a1 1 0 0 0 0-1.74l-16-9.5A1 1 0 0 0 3 2.5Zm12.5 9.5-3.6-3.6L15 4.9l4.9 3.4-4.4 3.7Zm-3.6 1.6 3.6-3.6 4.4 3.7L15 17.1l-3.1-3.5Z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black pt-8">
      {/* Animated glowing top border */}
      <div className="absolute inset-x-0 top-0 h-px overflow-hidden">
        <div className="h-full w-1/3 animate-[shimmer_4s_linear_infinite] bg-gradient-to-r from-transparent via-red-500 to-transparent" />
      </div>
      <style>{`
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(400%); } }
      `}</style>

      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[900px] -translate-x-1/2 rounded-full bg-red-700/15 blur-[180px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* CTA strip */}
        <div
          className="relative mb-16 flex flex-col items-center gap-6 border border-red-600/30 bg-gradient-to-br from-red-950/40 via-black to-black px-8 py-12 text-center sm:px-16"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 96% 100%, 0 100%)" }}
        >
         
          <h3 className="font-display text-3xl font-extrabold uppercase italic tracking-tight text-white sm:text-4xl">
            Don't Miss <span className="text-red-500">The Drop</span>
          </h3>
          <p className="max-w-md text-sm text-white/50">
            Grab early access to the token, get whitelisted for the next mint,
            and stay ahead of the pack.
          </p>
          <a
            href={LINKS.googlePlay}
            className="group relative overflow-hidden bg-red-600 px-8 py-3 font-display text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-red-500"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 88% 100%, 0 100%)" }}
          >
            <span className="relative z-10">Join Now →</span>
          </a>
        </div>

        {/* Brand + columns */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="relative flex h-11 w-11 items-center justify-center border border-red-600/50 bg-red-600/10 shadow-[0_0_20px_-6px_rgba(220,38,38,0.7)]">
                <span className="font-display text-lg font-black text-red-500">M</span>
              </span>
              <span className="font-display text-lg font-bold tracking-wider text-white">
                META<span className="text-red-600">DOGE</span>UNITY
              </span>
            </div>
            <p className="mb-1 font-display text-xs font-bold uppercase tracking-[0.25em] text-white/50">
              Play. Fight. Earn.
            </p>
            <p className="mb-6 mt-4 max-w-xs text-xs leading-relaxed text-white/30">
              Zenith Studio LLC Abu Dhabi, UAE. Building the next generation
              of Web3 gaming, one drop at a time.
            </p>
            <div className="flex gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.03] text-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-red-600/60 hover:bg-red-600 hover:text-white hover:shadow-[0_0_20px_-4px_rgba(220,38,38,0.8)]"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/40">
              <span className="h-1.5 w-1.5 bg-red-600" />
              Navigation
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-red-500"
                  >
                    <span className="h-px w-0 bg-red-500 transition-all duration-300 group-hover:w-3" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/40">
              <span className="h-1.5 w-1.5 bg-red-600" />
              Status
            </p>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Presale live
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                Audit pending
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                CEX listing Q1
              </li>
            </ul>
          </div>

          <div
            className="relative border border-red-600/30 bg-gradient-to-b from-white/[0.04] to-white/[0.01] px-5 py-4"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 92% 100%, 0 100%)" }}
          >
            <p className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/40">
              <span className="h-1.5 w-1.5 bg-red-600" />
              Contract Address
            </p>
            <p className="mb-2 font-display text-sm font-bold text-red-500">
              {TOKEN.symbol} · {TOKEN.chain}
            </p>
            <p className="break-all border border-white/10 bg-black/40 px-2.5 py-2 font-mono text-[11px] leading-relaxed text-white/50">
              {TOKEN.contract}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 py-8 sm:flex-row">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} MetaDogeUnity. All rights reserved.
          </p>
          <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/30">
            <span className="h-1.5 w-1.5 bg-red-600" />
            Built on BNB Chain
          </p>
        </div>
      </div>
    </footer>
  );
}