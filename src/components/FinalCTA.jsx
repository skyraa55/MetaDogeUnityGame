import { LINKS } from "../data/site";

// Sleek metallic / premium treatment — matches Characters.jsx, Token.jsx, Ambassador.jsx.
// Dark charcoal canvas, chrome ambient glow, hairline dividers, mono labels.
// No red slab, no red buttons, no bold display stroke type — reads like a clean spec panel.

const CHECKER = (
  <svg width="14" height="14" viewBox="0 0 14 14" className="opacity-40">
    <rect x="0" y="0" width="7" height="7" fill="currentColor" />
    <rect x="7" y="7" width="7" height="7" fill="currentColor" />
  </svg>
);

export default function FinalCTA() {
  return (
    <section className="relative bg-[#0a0a0a] overflow-hidden">
      {/* faint metallic ambient glow, echoes the liquid-chrome hero mark */}
      <div
        className="pointer-events-none absolute -top-52 left-1/2 -translate-x-1/2 h-[560px] w-[560px] rounded-full blur-[140px] opacity-[0.18]"
        style={{
          background:
            "conic-gradient(from 180deg, #ffffff, #6b6b6b, #101010, #ffffff)",
        }}
      />
      <div className="absolute inset-0 bg-hudgrid opacity-[0.05]" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 py-24 sm:py-32">
        {/* top meta row, mirrors the MEASURE / ANALYZE / IMPLEMENT / MORE strip */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-20">
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40">
              Recruitment
            </span>
            <span className="hidden sm:inline font-mono text-[10px] tracking-[0.2em] uppercase text-white/25">
              Now Open
            </span>
          </div>
          <div className="flex items-center gap-2 text-white/30">
            {CHECKER}
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
              Dossier No. 001
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_auto] gap-16 items-center">
          <div className="relative">
            <h2 className="font-sans font-medium text-white text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight mb-6">
              Ready to enter
              <br />
              the Unity?
            </h2>

            <p className="text-white/45 text-base sm:text-lg max-w-md mb-10 leading-relaxed">
              No sidelines here. Pick a class, take your position, and hold
              the line.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href={LINKS.googlePlay}
                className="inline-flex items-center gap-3 border border-white/20 bg-white text-black px-8 py-4 text-xs font-mono font-medium uppercase tracking-[0.15em] hover:bg-white/90 transition-colors duration-200"
              >
                <span>Play Now</span>
                <span>&rarr;</span>
              </a>
              <a
                href="#ambassador"
                className="inline-flex items-center gap-2 text-white/70 text-xs font-mono uppercase tracking-[0.15em] border-b border-white/20 pb-1 hover:border-white hover:text-white transition-colors duration-200"
              >
                Become an Ambassador
              </a>
            </div>
          </div>

          {/* dossier panel — hairline card, matches Reward Dashboard / Token panel construction */}
          <div className="w-full max-w-xs mx-auto lg:mx-0 border border-white/10 bg-white/[0.02]">
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40">
                Dossier
              </span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40">
                No. 001
              </span>
            </div>

            <div className="px-5 py-2 divide-y divide-white/10">
              <div className="flex items-center justify-between py-3.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">
                  Unit
                </span>
                <span className="text-sm font-medium text-white">
                  MetaDogeUnity
                </span>
              </div>
              <div className="flex items-center justify-between py-3.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">
                  Class
                </span>
                <span className="text-sm font-medium text-white">
                  Vanguard
                </span>
              </div>
              <div className="flex items-center justify-between py-3.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">
                  Status
                </span>
                <span className="flex items-center gap-1.5 text-sm font-medium text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                  Recruiting
                </span>
              </div>
              <div className="flex items-center justify-between py-3.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">
                  Clearance
                </span>
                <span className="text-sm font-medium text-white">Open</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}