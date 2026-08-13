import { REWARDS, AMBASSADOR_STEPS } from "../data/site";
import { PrimaryButton } from "./ui";

export default function Ambassador() {
  return (
    <section id="ambassador" className="relative py-24 sm:py-32 bg-ink overflow-hidden">
      <div className="absolute inset-0 bg-hudgrid opacity-25" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-r from-mu-yellow/10 via-mu-green/10 to-mu-purple/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="w-2 h-2 bg-mu-yellow" />
            <span className="w-2 h-2 bg-mu-green" />
            <span className="w-2 h-2 bg-mu-purple" />
          </div>
          <h2 className="font-display font-black uppercase text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
            <span className="text-mu-yellow">$MU</span> Ambassador Program
          </h2>
          <p className="mt-4 font-display font-bold tracking-[0.2em] uppercase text-sm sm:text-base text-mu-grey">
            Play <span className="text-mu-yellow">·</span> Create{" "}
            <span className="text-mu-green">·</span> Refer{" "}
            <span className="text-mu-purple">·</span> Compete{" "}
            <span className="text-mu-yellow">·</span> Earn
          </p>
          <p className="mt-5 text-mu-grey leading-relaxed">
            A community-driven program designed to reward our most active
            players, creators and community contributors. Play the game,
            create content, bring new players, compete in tournaments and
            help grow the MetaDogeUnity ecosystem.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryButton href="#">Become an Ambassador</PrimaryButton>
          </div>
        </div>

        {/* reward dashboard */}
        <div className="mb-24">
          <p className="eyebrow text-center mb-8">Ambassador Reward Dashboard</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {REWARDS.map((r) => (
              <div
                key={r.title}
                className="hud-panel-sm relative bg-ink-panel/70 border border-white/10 p-5 hover:border-mu-green/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-2xl mb-3">{r.icon}</div>
                <h3 className="font-display font-bold uppercase text-sm tracking-wide text-paper mb-1">
                  {r.title}
                </h3>
                <p className="font-display font-black text-mu-green text-lg mb-2">
                  {r.amount}
                </p>
                <p className="text-mu-grey text-xs leading-relaxed">{r.desc}</p>
                <p className="mt-3 pt-3 border-t border-white/10 font-mono text-[10px] text-mu-grey/60 tracking-wide">
                  {r.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* steps timeline */}
        <div>
          <p className="eyebrow text-center mb-10">How to Become an Ambassador</p>
          <div className="relative">
            <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-white/10" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
              {AMBASSADOR_STEPS.map((s) => (
                <div key={s.n} className="relative flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-ink-panel border border-mu-purple/50 flex items-center justify-center font-display font-bold text-mu-purple text-sm relative z-10 mb-4">
                    {s.n}
                  </div>
                  <h4 className="font-display font-bold uppercase text-sm tracking-wide text-paper mb-1.5">
                    {s.title}
                  </h4>
                  <p className="text-mu-grey text-xs leading-relaxed max-w-[160px]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-14 flex justify-center">
            <PrimaryButton href="#">Join the Ambassador Program</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
