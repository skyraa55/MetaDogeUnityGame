import { Eyebrow } from "./ui";

const STAGES = [
  { label: "Match", icon: "▣", desc: "Enter a live match" },
  { label: "Elimination", icon: "✕", desc: "Take down opponents" },
  { label: "Reward", icon: "◈", desc: "Earn instantly" },
  { label: "+$MU", icon: "$", desc: "Paid on-chain" },
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
    <section className="relative bg-black py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-4 border-b border-white/10 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>On-Chain Combat</Eyebrow>
            <h2 className="mt-3 font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
              Every Kill Matters
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-gray-400">
            Eliminate opponents in live matches and earn $MU instantly, settled on-chain, no waiting.
          </p>
        </div>

        {/* Stage stepper */}
        <div className="mb-16">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-4">
            {STAGES.map((s, i) => {
              const isLast = i === STAGES.length - 1;
              return (
                <div
                  key={s.label}
                  className={`flex flex-col gap-3 p-5 sm:p-6 ${
                    isLast ? "bg-sky-600" : "bg-black"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-bold ${
                        isLast
                          ? "border-white bg-black text-white"
                          : "border-sky-500/50 text-sky-400"
                      }`}
                    >
                      {s.icon}
                    </span>
                    <span
                      className={`font-mono text-xs ${
                        isLast ? "text-white/70" : "text-gray-600"
                      }`}
                    >
                      0{i + 1}
                    </span>
                  </div>
                  <div>
                    <p
                      className={`font-display text-base font-black uppercase tracking-tight ${
                        isLast ? "text-white" : "text-white"
                      }`}
                    >
                      {s.label}
                    </p>
                    <p
                      className={`mt-1 text-xs leading-snug ${
                        isLast ? "text-white/80" : "text-gray-500"
                      }`}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live feed panel */}
        <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.02]">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
            <p className="font-mono text-xs uppercase tracking-widest text-gray-400">
              Live Match Feed
            </p>
            <span className="flex items-center gap-2 font-mono text-xs text-sky-400">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              LIVE
            </span>
          </div>

          <div className="divide-y divide-white/5">
            {FEED.map((f) => (
              <div
                key={f.text}
                className="flex items-center justify-between gap-4 px-5 py-3.5 transition-colors hover:bg-white/[0.03] sm:px-6"
              >
                <span className="truncate font-mono text-xs text-gray-200 sm:text-sm">
                  {f.text}
                </span>
                <span className="shrink-0 rounded border border-sky-500/40 bg-sky-500/10 px-2 py-1 font-display text-xs font-bold text-sky-400">
                  {f.reward}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}