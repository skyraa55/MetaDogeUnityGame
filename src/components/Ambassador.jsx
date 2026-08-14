import { REWARDS, AMBASSADOR_STEPS } from "../data/site";
import { PrimaryButton } from "./ui";

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
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      {icons[index % icons.length]}
    </svg>
  );
};

export default function Ambassador() {
  return (
    <section id="ambassador" className="relative bg-black py-24 sm:py-32 overflow-hidden">
      {/* background accents */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-red-700/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* header */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <span className="inline-block font-mono text-xs tracking-[0.3em] uppercase text-red-500 border border-red-600/40 rounded-full px-4 py-1.5 mb-6">
            Ambassador Program
          </span>

          <h2 className="font-display font-black uppercase text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-white">
            $MU <span className="text-red-500">Ambassador</span> Program
          </h2>

          <p className="mt-5 font-display font-bold tracking-[0.2em] uppercase text-xs sm:text-sm text-gray-500">
            Play <span className="text-red-500">/</span> Create{" "}
            <span className="text-red-500">/</span> Refer{" "}
            <span className="text-red-500">/</span> Compete{" "}
            <span className="text-red-500">/</span> Earn
          </p>

          <p className="mt-6 text-gray-400 leading-relaxed">
            A community-driven program built to reward our most active
            players, creators and community contributors. Play the game,
            create content, bring in new players, compete in tournaments and
            help grow the MetaDogeUnity ecosystem.
          </p>

          <div className="mt-9 flex justify-center">
            <PrimaryButton href="#">Become an Ambassador</PrimaryButton>
          </div>
        </div>

        {/* reward dashboard */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="font-display font-bold uppercase text-sm tracking-[0.2em] text-white whitespace-nowrap">
              Reward Dashboard
            </h3>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {REWARDS.map((r, i) => (
              <div
                key={r.title}
                className="group relative bg-white/[0.02] border border-white/10 rounded-lg p-5 hover:border-red-600/50 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-md bg-red-600/10 border border-red-600/30 text-red-500 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <RewardIcon index={i} />
                </div>

                <h4 className="font-display font-bold uppercase text-sm tracking-wide text-white mb-1">
                  {r.title}
                </h4>
                <p className="font-display font-black text-red-500 text-xl mb-2">
                  {r.amount}
                </p>
                <p className="text-gray-400 text-xs leading-relaxed">{r.desc}</p>

                <p className="mt-4 pt-3 border-t border-white/10 font-mono text-[10px] text-gray-600 tracking-wide">
                  {r.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* steps timeline */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <h3 className="font-display font-bold uppercase text-sm tracking-[0.2em] text-white whitespace-nowrap">
              How to Become an Ambassador
            </h3>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-white/10" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-y-10 gap-x-4">
              {AMBASSADOR_STEPS.map((s) => (
                <div key={s.n} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-black border-2 border-red-600 font-display font-bold text-white text-sm mb-4">
                    {s.n}
                  </div>
                  <h4 className="font-display font-bold uppercase text-sm tracking-wide text-white mb-1.5">
                    {s.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed max-w-[160px]">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <PrimaryButton href="#">Join the Ambassador Program</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}