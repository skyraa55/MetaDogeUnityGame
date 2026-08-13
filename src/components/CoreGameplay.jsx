import { CORE_FEATURES } from "../data/site";
import { Eyebrow } from "./ui";

// Red / White / Black theme, normal-case typography for a cleaner, more premium feel
const ACCENTS = [
  { text: "text-red-500", ring: "ring-red-500/30", bg: "bg-red-500/10" },
  { text: "text-white", ring: "ring-white/25", bg: "bg-white/10" },
  { text: "text-red-500", ring: "ring-red-500/30", bg: "bg-red-500/10" },
  { text: "text-white", ring: "ring-white/25", bg: "bg-white/10" },
];
const ICONS = ["◈", "◎", "▲", "$"];

export default function CoreGameplay() {
  return (
    <section className="relative py-24 sm:py-32 bg-black overflow-hidden">
      {/* ambient backdrop */}
      <div className="absolute inset-0 bg-hudgrid opacity-[0.12]" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-red-600/20 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Eyebrow>The Loop</Eyebrow>

        <div className="max-w-2xl mb-16">
          <h2 className="font-sans font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-white mb-4">
            Built for competition,{" "}
            <span className="text-red-500">not just for play</span>
          </h2>
          <p className="text-white/50 text-base sm:text-lg leading-relaxed">
            Every system in the loop is designed around one thing: giving players a fair,
            fast, and rewarding reason to come back.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CORE_FEATURES.map((f, i) => {
            const a = ACCENTS[i];
            return (
              <div
                key={f.title}
                className="group relative p-7 flex flex-col gap-5 rounded-2xl bg-white/[0.04] border border-white/10
                  transition-all duration-300 ease-out hover:bg-white/[0.07] hover:border-white/20
                  hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-red-500/10"
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-xl ring-1 ${a.ring} ${a.bg} ${a.text}
                    font-semibold text-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  {ICONS[i]}
                </div>

                <div>
                  <h3 className="font-sans font-semibold text-lg text-white mb-2">
                    {f.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                </div>

                {/* growing underline on hover */}
                <span
                  className={`absolute bottom-0 left-7 right-7 h-px scale-x-0 group-hover:scale-x-100 origin-left
                    transition-transform duration-300 ${a.text === "text-red-500" ? "bg-red-500/60" : "bg-white/40"}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}