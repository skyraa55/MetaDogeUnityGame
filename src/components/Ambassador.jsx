import { REWARDS, AMBASSADOR_STEPS } from "../data/site";
import { PrimaryButton } from "./ui";


const CHECKER = (
  <svg width="14" height="14" viewBox="0 0 14 14" className="opacity-40">
    <rect x="0" y="0" width="7" height="7" fill="currentColor" />
    <rect x="7" y="7" width="7" height="7" fill="currentColor" />
  </svg>
);

// Simple inline icon set — no external icon library required.
// Cycled by position across REWARDS, so it works regardless of data content.
const RewardIcon = ({ index }) => {
  const icons = [
    // Trophy
    <path key="trophy" d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4ZM7 5H4v2a3 3 0 0 0 3 3M17 5h3v2a3 3 0 0 1-3 3" />,
    // Users / community
    <path key="users" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />,
    // Video / content
    <path key="video" d="m22 8-6 4 6 4V8ZM14 6H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z" />,
    // Target
    <path key="target" d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />,
    // Coin / earn
    <path key="coin" d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM12 6v12M15 9.5c0-1.38-1.34-2.5-3-2.5s-3 1.12-3 2.5S10.34 12 12 12s3 1.12 3 2.5-1.34 2.5-3 2.5-3-1.12-3-2.5" />,
    // Star
    <path key="star" d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />,
  ];
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      {icons[index % icons.length]}
    </svg>
  );
};

export default function Ambassador() {
  return (
    <section id="ambassador" className="relative bg-[#05070a] py-24 sm:py-32 overflow-hidden">
      {/* metallic steel-blue ambient glow, echoes the logo's chrome ring */}
      <div
        className="pointer-events-none absolute -top-52 left-1/2 -translate-x-1/2 h-[560px] w-[560px] rounded-full blur-[140px] opacity-[0.22]"
        style={{
          background:
            "conic-gradient(from 180deg, #6fc3f0, #2c4a6e, #0f1620, #6fc3f0)",
        }}
      />
      <div className="absolute inset-0 bg-hudgrid opacity-[0.05]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* top meta row, mirrors the MEASURE / ANALYZE / IMPLEMENT / MORE strip */}
        <div className="flex items-center justify-between border-b border-sky-400/10 pb-4 mb-16">
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-sky-300/50">
              Ambassador Program
            </span>
          </div>
          <div className="flex items-center gap-2 text-sky-300/40">
            {CHECKER}
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
              {REWARDS.length} reward tiers
            </span>
          </div>
        </div>

        {/* header */}
        <div className="max-w-2xl mx-auto mb-24 text-center">
          <h2 className="font-sans font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.05] text-white">
            $MU Ambassador Program
          </h2>

          <p className="mt-6 text-white/45 leading-relaxed text-sm sm:text-base">
            A community driven program built to reward our most active
            players, creators and community contributors. Play the game,
            create content, bring in new players, compete in tournaments and
            help grow the MetaDogeUnity ecosystem.
          </p>

          <div className="mt-10 flex justify-center">
            <PrimaryButton href="#">Become an Ambassador</PrimaryButton>
          </div>
        </div>

        {/* reward dashboard */}
        <div className="mb-28">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="font-mono font-medium uppercase text-[11px] tracking-[0.2em] text-sky-300/60 whitespace-nowrap">
              Reward Dashboard
            </h3>
            <span className="h-px flex-1 bg-sky-400/10" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-sky-400/10 border border-sky-400/10">
            {REWARDS.map((r, i) => (
              <div
                key={r.title}
                className="group relative bg-[#05070a] hover:bg-sky-400/[0.04] p-6 transition-colors duration-300"
              >
                <div className="absolute top-4 right-5 font-mono text-[10px] tracking-widest text-sky-300/25">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="flex items-center justify-center w-10 h-10 border border-slate-300/20 text-slate-300/70 mb-5 group-hover:border-sky-400/60 group-hover:text-sky-300 transition-colors duration-300">
                  <RewardIcon index={i} />
                </div>

                <h4 className="font-sans font-medium text-sm text-white mb-1.5">
                  {r.title}
                </h4>
                <p className="font-sans font-medium text-white text-xl mb-3 tracking-tight">
                  {r.amount}
                </p>
                <p className="text-white/40 text-xs leading-relaxed">{r.desc}</p>

                <p className="mt-5 pt-3 border-t border-sky-400/10 font-mono text-[9px] tracking-[0.15em] uppercase text-sky-300/25">
                  {r.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* steps timeline */}
        <div>
          <div className="flex items-center gap-4 mb-14">
            <h3 className="font-mono font-medium uppercase text-[11px] tracking-[0.2em] text-sky-300/60 whitespace-nowrap">
              How to Become an Ambassador
            </h3>
            <span className="h-px flex-1 bg-sky-400/10" />
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-5 left-0 right-0 h-px bg-sky-400/10" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-y-12 gap-x-4">
              {AMBASSADOR_STEPS.map((s) => (
                <div key={s.n} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#05070a] border border-sky-400/30 font-mono font-medium text-sky-300/80 text-xs mb-5">
                    {String(s.n).padStart(2, "0")}
                  </div>
                  <h4 className="font-sans font-medium text-sm text-white mb-1.5">
                    {s.title}
                  </h4>
                  <p className="text-white/40 text-xs leading-relaxed max-w-[160px]">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <PrimaryButton href="#">Join the Ambassador Program</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}