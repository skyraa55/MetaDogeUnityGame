import { LINKS, TOKEN, NAV_LINKS } from "../data/site";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-red-600/30 pt-16 pb-8">
      <div className="absolute top-0 left-0 right-0 h-px bg-red-600"></div>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="relative flex items-center justify-center w-9 h-9 bg-red-600/10 border border-red-600/50">
                <span className="font-display font-black text-red-500 text-sm">M</span>
              </span>
              <span className="font-display font-bold tracking-wider text-sm text-white">
                META<span className="text-red-600">DOGE</span>UNITY
              </span>
            </div>
            <p className="font-display font-bold tracking-[0.2em] uppercase text-xs text-white/50 mb-1">
              Play. Fight. Earn.
            </p>
            <p className="text-white/30 text-xs mt-4">
              Zenith Studio LLC - Abu Dhabi, UAE
            </p>
          </div>

          <div>
            <p className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-white/40 mb-4">
              <span className="h-1.5 w-1.5 bg-red-600"></span>
              Navigation
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-white/70 hover:text-red-500 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-white/40 mb-4">
              <span className="h-1.5 w-1.5 bg-red-600"></span>
              Social
            </p>
            <ul className="space-y-2.5">
              <li>
                <a href={LINKS.x} target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-red-500 transition-colors">
                  X (Twitter)
                </a>
              </li>
              <li>
                <a href={LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-red-500 transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href={LINKS.googlePlay} target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-red-500 transition-colors">
                  Google Play
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-white/40 mb-4">
              <span className="h-1.5 w-1.5 bg-red-600"></span>
              Token
            </p>
            <p className="font-display font-bold text-red-500 text-sm mb-2">
              {TOKEN.symbol} - {TOKEN.chain}
            </p>
            <p className="font-mono text-[11px] text-white/40 break-all leading-relaxed border border-white/10 bg-white/[0.03] px-2.5 py-2">
              {TOKEN.contract}
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            (c) {new Date().getFullYear()} MetaDogeUnity. All rights reserved.
          </p>
          <p className="font-mono text-[10px] tracking-widest uppercase text-white/30">
            Built on BNB Chain
          </p>
        </div>
      </div>
    </footer>
  );
}