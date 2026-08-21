import { CORE_FEATURES } from "../data/site";
import { Eyebrow } from "./ui";

const ACCENTS = [
  { text: "text-sky-400", ring: "ring-sky-400/40", glow: "shadow-sky-400/30" },
  { text: "text-zinc-200", ring: "ring-white/30", glow: "shadow-white/10" },
  { text: "text-sky-400", ring: "ring-sky-400/40", glow: "shadow-sky-400/30" },
  { text: "text-zinc-200", ring: "ring-white/30", glow: "shadow-white/10" },
];
const ICONS = ["◈", "◎", "▲", "$"];

export default function CoreGameplay() {
  const renderCopy = (f, i) => (
    <div className="max-w-[210px] text-center">
      <h3 className="font-sans font-semibold text-base text-white mb-1.5">{f.title}</h3>
      <p className="text-white/45 text-sm leading-relaxed">{f.desc}</p>
    </div>
  );

  const renderCasing = (i) => {
    const a = ACCENTS[i];
    return (
      <div
        className={`relative w-14 h-14 rounded-full flex items-center justify-center ring-2 ${a.ring} ${a.text}
          bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.15),rgba(0,0,0,0.6))]
          font-semibold text-lg shadow-lg ${a.glow} transition-transform duration-300 group-hover:scale-110`}
      >
        {ICONS[i]}
      </div>
    );
  };

  return (
    <section className="relative py-28 sm:py-36 bg-black overflow-hidden">
      {/* single diagonal light beam — echoes a muzzle flash / spotlight, not a generic glow blob */}
      <div className="absolute -top-1/3 -left-1/4 w-[140%] h-[70%] rotate-[-8deg] bg-gradient-to-r from-transparent via-sky-500/10 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-20 sm:mb-28">
          <Eyebrow>The Loop</Eyebrow>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight uppercase text-white mb-4">
            Built for competition,{" "}
            <span className="text-sky-400">not just for play</span>
          </h2>
          <p className="text-white/50 text-base sm:text-lg leading-relaxed">
            Every system in the loop is designed around one thing: giving players a fair,
            fast, and rewarding reason to come back.
          </p>
        </div>

        {/* Desktop: ammo-belt track, nodes staggered above/below */}
        <div className="hidden lg:block relative">
          <div className="belt-track absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px]" />
          <div className="grid grid-cols-4 relative">
            {CORE_FEATURES.map((f, i) => {
              const up = i % 2 === 0;
              return (
                <div key={f.title} className="group flex flex-col items-center">
                  <div className={`flex flex-col items-center ${up ? "mb-6" : "opacity-0 pointer-events-none mb-6 h-0 overflow-hidden"}`}>
                    {up && renderCopy(f, i)}
                  </div>
                  <div className="w-px h-8 bg-white/15" />
                  {renderCasing(i)}
                  <div className="w-px h-8 bg-white/15" />
                  <div className={`flex flex-col items-center ${!up ? "mt-6" : "opacity-0 pointer-events-none mt-6 h-0 overflow-hidden"}`}>
                    {!up && renderCopy(f, i)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / tablet: vertical belt down the left edge */}
        <div className="lg:hidden relative pl-10">
          <div className="belt-track-vertical absolute left-[18px] top-2 bottom-2 w-[2px]" />
          <div className="space-y-12">
            {CORE_FEATURES.map((f, i) => (
              <div key={f.title} className="group relative flex items-start gap-5">
                <div className="shrink-0 -ml-10">{renderCasing(i)}</div>
                <div className="text-left pt-1.5">
                  <h3 className="font-sans font-semibold text-base text-white mb-1.5">{f.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed max-w-xs">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .belt-track {
          background-image: repeating-linear-gradient(90deg, rgba(111,195,240,0.35) 0 2px, transparent 2px 18px);
          animation: belt-feed 5s linear infinite;
        }
        .belt-track-vertical {
          background-image: repeating-linear-gradient(180deg, rgba(111,195,240,0.35) 0 2px, transparent 2px 18px);
        }
        @keyframes belt-feed {
          from { background-position: 0 0; }
          to { background-position: 180px 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .belt-track { animation: none; }
        }
      `}</style>
    </section>
  );
}