import { LINKS, TOKEN, NAV_LINKS } from "../data/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black pt-20 pb-8">
      {/* Top accent line + glow, matching the section above */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-red-700/10 blur-[160px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Brand strip */}
        <div className="mb-14 flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-14 lg:flex-row lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="relative flex h-10 w-10 items-center justify-center border border-red-600/50 bg-red-600/10">
                <span className="font-display text-base font-black text-red-500">M</span>
                <span className="absolute -inset-px border border-red-600/30" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }} />
              </span>
              <span className="font-display text-base font-bold tracking-wider text-white">
                META<span className="text-red-600">DOGE</span>UNITY
              </span>
            </div>
            <p className="mb-1 font-display text-xs font-bold uppercase tracking-[0.25em] text-white/50">
              Play. Fight. Earn.
            </p>
            <p className="mt-4 text-xs text-white/30">
              Zenith Studio LLC — Abu Dhabi, UAE
            </p>
          </div>

          {/* Token callout, pulled up front instead of buried in the grid */}
          <div
            className="relative w-full max-w-sm border border-red-600/30 bg-gradient-to-b from-white/[0.04] to-white/[0.01] px-5 py-4"
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

        {/* Link columns */}
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:grid-cols-3">
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
              Social
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "X (Twitter)", href: LINKS.x },
                { label: "YouTube", href: LINKS.youtube },
                { label: "Google Play", href: LINKS.googlePlay },
              ].map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-red-500"
                  >
                    <span className="h-px w-0 bg-red-500 transition-all duration-300 group-hover:w-3" />
                    {s.label}
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
            <ul className="space-y-2.5 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                Presale live
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                Audit pending
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                CEX listing Q1
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 pt-8 sm:flex-row">
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