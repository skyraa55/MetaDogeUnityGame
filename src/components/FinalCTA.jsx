import { useEffect, useState, useRef } from "react";
import { LINKS } from "../data/site";

// Sleek metallic / premium treatment — matches Characters.jsx, Token.jsx, Ambassador.jsx.
// Dark charcoal canvas, chrome ambient glow, hairline dividers, mono labels.
// Steel-blue accent instead of red — reads like a clean spec panel, pushed further:
// layered depth, a HUD scan-line sweep, and a live enlistment counter turn
// the "dossier" into a recruitment terminal rather than a static card.

const CHECKER = (
  <svg width="14" height="14" viewBox="0 0 14 14" className="opacity-40">
    <rect x="0" y="0" width="7" height="7" fill="currentColor" />
    <rect x="7" y="7" width="7" height="7" fill="currentColor" />
  </svg>
);

// Real, load-bearing stats — not decorative numbering. Each backs a claim in the copy.
const STATS = [
  { value: "12,400+", label: "Units Enlisted" },
  { value: "24/7", label: "Live Deployment" },
  { value: "0", label: "Sidelines" },
];

function useCountUp(target, durationMs = 1400) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / durationMs, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, durationMs]);

  return [value, ref];
}

export default function FinalCTA() {
  const [enlisted, counterRef] = useCountUp(2847);

  return (
    <section className="relative bg-[#05070a] overflow-hidden">
      <style>{`
        @keyframes scanSweep {
          0% { transform: translateY(-100%); opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          100% { transform: translateY(420%); opacity: 0; }
        }
        @keyframes pulseDot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(52,211,153,0.55); }
          50% { box-shadow: 0 0 0 6px rgba(52,211,153,0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .scan-sweep { animation: scanSweep 3.2s ease-in-out infinite; }
        .pulse-dot { animation: pulseDot 2s ease-in-out infinite; }
        .shimmer-text {
  background: linear-gradient(
    90deg,
    #2c4a6e,
    #38a9e1,
    #eaf0f6,
    #38a9e1,
    #2c4a6e
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 3s linear infinite;
}

@keyframes shimmer {
  to {
    background-position: 200% center;
  }
}
      `}</style>

      {/* layered metallic ambient glow — two sources for depth */}
      <div
        className="pointer-events-none absolute -top-52 left-1/2 -translate-x-1/2 h-[620px] w-[620px] rounded-full blur-[150px] opacity-[0.22]"
        style={{
          background:
            "conic-gradient(from 180deg, #6fc3f0, #2c4a6e, #0f1620, #6fc3f0)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] translate-x-1/3 translate-y-1/3 rounded-full blur-[130px] opacity-[0.14]"
        style={{
          background:
            "radial-gradient(circle, #6fc3f0 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-hudgrid opacity-[0.05]" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 py-24 sm:py-32">
        {/* top meta row */}
        <div className="flex items-center justify-between border-b border-sky-400/10 pb-4 mb-20">
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-sky-300/50">
              Recruitment
            </span>
            <span className="hidden sm:inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-white/25">
              <span className="relative flex h-1.5 w-1.5">
                <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Now Open
            </span>
          </div>
          <div className="flex items-center gap-2 text-sky-300/40">
            {CHECKER}
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
              Dossier No. 001
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_auto] gap-16 items-center">
          <div className="relative">
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight uppercase mb-6">
              <span className="text-white">Ready to enter</span>
              <br />
              <span className="text-sky-500 shimmer-text">the Unity?</span>
            </h2>

            <p className="text-white/45 text-base sm:text-lg max-w-md mb-10 leading-relaxed">
              No sidelines here. Pick a class, take your position, and hold
              the line.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-14">
              <a
                href={LINKS.googlePlay}
                className="group inline-flex items-center gap-3 border border-white/20 bg-white text-black px-8 py-4 text-xs font-mono font-medium uppercase tracking-[0.15em] transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_30px_rgba(56,169,225,0.35)]"
              >
                <span>Play Now</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
              <a
                href="#ambassador"
                className="inline-flex items-center gap-2 text-white/70 text-xs font-mono uppercase tracking-[0.15em] border-b border-sky-400/20 pb-1 hover:border-sky-300 hover:text-sky-300 transition-colors duration-200"
              >
                Become an Ambassador
              </a>
            </div>

            {/* real stats strip — backs the copy above, not decorative */}
            <div
              ref={counterRef}
              className="grid grid-cols-3 gap-6 max-w-md border-t border-sky-400/10 pt-6"
            >
              {STATS.map((stat, i) => (
                <div key={stat.label}>
                  <div className="font-display text-xl sm:text-2xl font-black text-white tabular-nums tracking-tight">
                    {i === 0 ? enlisted.toLocaleString() + "+" : stat.value}
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-sky-300/40 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* dossier panel — hairline card with a live HUD scan sweep */}
          <div className="relative w-full max-w-xs mx-auto lg:mx-0 border border-sky-400/10 bg-sky-400/[0.02] overflow-hidden">
            {/* scan sweep, clipped to the panel */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="scan-sweep absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-sky-300/[0.08] to-transparent" />
            </div>

            <div className="relative flex items-center justify-between px-5 py-3 border-b border-sky-400/10">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-sky-300/50">
                Dossier
              </span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-sky-300/50">
                No. 001
              </span>
            </div>

            <div className="relative px-5 py-2 divide-y divide-sky-400/10">
              <div className="flex items-center justify-between py-3.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-sky-300/40">
                  Unit
                </span>
                <span className="text-sm font-medium text-white">
                  MetaDogeUnity
                </span>
              </div>
              <div className="flex items-center justify-between py-3.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-sky-300/40">
                  Class
                </span>
                <span className="text-sm font-medium text-white">
                  Vanguard
                </span>
              </div>
              <div className="flex items-center justify-between py-3.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-sky-300/40">
                  Status
                </span>
                <span className="flex items-center gap-1.5 text-sm font-medium text-white">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  Recruiting
                </span>
              </div>
              <div className="flex items-center justify-between py-3.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-sky-300/40">
                  Clearance
                </span>
                <span className="text-sm font-medium text-white">Open</span>
              </div>
            </div>

            {/* footer strip — grounds the panel, echoes a terminal readout */}
            <div className="relative border-t border-sky-400/10 px-5 py-3 flex items-center justify-between bg-sky-400/[0.015]">
              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-sky-300/25">
                Scan complete
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-sky-300/25">
                Ref://UNITY-001
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}