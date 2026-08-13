import { Eyebrow } from "./ui";

const STAGES = [
  { label: "Match", icon: "▣" },
  { label: "Elimination", icon: "✕" },
  { label: "Reward", icon: "◈" },
  { label: "+$MU", icon: "$" },
];

const FEED = [
  { text: "IRONBEARD ELIMINATED CRIMSON", reward: "+1 $MU" },
  { text: "VOLT ELIMINATED REAPER-9", reward: "+1 $MU" },
  { text: "BRAMBLE OBJECTIVE SECURED", reward: "+2 $MU" },
  { text: "CRIMSON ELIMINATED IRONBEARD", reward: "+1 $MU" },
  { text: "REAPER-9 TRIPLE ELIMINATION", reward: "+3 $MU" },
];

export default function KillToEarn() {
  return (
    <section className="relative py-24 sm:py-32 bg-ink overflow-hidden">
      <div className="absolute inset-0 bg-hudgrid opacity-25" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Eyebrow>On-Chain Combat</Eyebrow>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase leading-[1.05] tracking-tight mb-14 max-w-xl">
          Every Kill <span className="text-mu-yellow">Matters</span>
        </h2>

        <div className="grid lg:grid-cols-[1fr_1px_1fr] gap-10 lg:gap-0 items-center">
          {/* stage sequence */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-2">
            {STAGES.map((s, i) => (
              <div key={s.label} className="flex items-center gap-2 sm:gap-3">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full border border-mu-green/50 bg-ink-panel flex items-center justify-center font-display font-bold text-mu-green text-xl relative">
                    {s.icon}
                    {i === 3 && (
                      <span className="absolute inset-0 rounded-full border border-mu-green animate-pulseGlow" />
                    )}
                  </div>
                  <span className="font-display text-[11px] tracking-widest uppercase text-mu-grey">
                    {s.label}
                  </span>
                </div>
                {i < STAGES.length - 1 && (
                  <span className="hidden sm:block text-mu-grey/40 text-xl mb-6">→</span>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:block w-px h-64 bg-gradient-to-b from-transparent via-white/15 to-transparent mx-auto" />

          {/* live kill feed HUD */}
          <div className="hud-panel relative bg-ink-panel/80 border border-white/10 p-5 sm:p-6 overflow-hidden h-72">
            <span className="hud-corner corner-tl text-mu-yellow/60" />
            <span className="hud-corner corner-br text-mu-yellow/60" />
            <div className="flex items-center justify-between mb-4">
              <p className="font-mono text-[10px] tracking-widest uppercase text-mu-grey">
                Live Match Feed
              </p>
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-mu-green">
                <span className="w-1.5 h-1.5 rounded-full bg-mu-green animate-pulseGlow" /> LIVE
              </span>
            </div>
            <div className="space-y-3">
              {FEED.map((f, i) => (
                <div
                  key={f.text}
                  className="flex items-center justify-between gap-3 border-l-2 border-mu-yellow/60 bg-black/30 pl-3 pr-3 py-2 animate-killfeed"
                  style={{
                    animationDuration: "9s",
                    animationDelay: `${i * 1.8}s`,
                    animationIterationCount: "infinite",
                  }}
                >
                  <span className="font-mono text-[11px] sm:text-xs text-paper truncate">
                    {f.text}
                  </span>
                  <span className="font-display font-bold text-xs text-mu-yellow shrink-0">
                    {f.reward}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
