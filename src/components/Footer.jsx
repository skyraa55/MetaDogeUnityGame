import { LINKS, TOKEN, NAV_LINKS } from "../data/site";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 pt-16 pb-8">
      <div className="absolute inset-0 bg-hudgrid opacity-15" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="relative flex items-center justify-center w-9 h-9 bg-mu-green/10 border border-mu-green/50">
                <span className="font-display font-black text-mu-green text-sm">M</span>
              </span>
              <span className="font-display font-bold tracking-wider text-sm">
                META<span className="text-mu-green">DOGE</span>UNITY
              </span>
            </div>
            <p className="font-display font-bold tracking-[0.2em] uppercase text-xs text-mu-grey mb-1">
              Play. Fight. Earn.
            </p>
            <p className="text-mu-grey/60 text-xs mt-4">
              Zenith Studio LLC · Abu Dhabi, UAE
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-widest uppercase text-mu-grey mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-paper/80 hover:text-mu-green transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-widest uppercase text-mu-grey mb-4">
              Social
            </p>
            <ul className="space-y-2.5">
              <li>
                <a href={LINKS.x} target="_blank" rel="noopener noreferrer" className="text-sm text-paper/80 hover:text-mu-purple transition-colors">
                  X (Twitter)
                </a>
              </li>
              <li>
                <a href={LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-sm text-paper/80 hover:text-mu-purple transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href={LINKS.googlePlay} target="_blank" rel="noopener noreferrer" className="text-sm text-paper/80 hover:text-mu-purple transition-colors">
                  Google Play
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-widest uppercase text-mu-grey mb-4">
              Token
            </p>
            <p className="font-display font-bold text-mu-green text-sm mb-2">
              {TOKEN.symbol} · {TOKEN.chain}
            </p>
            <p className="font-mono text-[11px] text-mu-grey/60 break-all leading-relaxed">
              {TOKEN.contract}
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-mu-grey/50 text-xs">
            © {new Date().getFullYear()} MetaDogeUnity. All rights reserved.
          </p>
          <p className="font-mono text-[10px] tracking-widest uppercase text-mu-grey/40">
            Built on BNB Chain
          </p>
        </div>
      </div>
    </footer>
  );
}
