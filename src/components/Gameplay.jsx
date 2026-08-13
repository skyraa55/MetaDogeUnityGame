import { LINKS } from "../data/site";
import { Eyebrow, GhostButton } from "./ui";

const SHOTS = [
  { id: "SQ-01", label: "Squad Deployment", image: "/Squard deployment.jpeg" },
  { id: "OB-04", label: "Objective Control", image: "/objective control.jpg" },
  { id: "FF-12", label: "Firefight — Sector 7", image: "Freefight section-1.jpeg" },
];

export default function Gameplay() {
  return (
    <section id="gameplay" className="relative py-24 sm:py-32 bg-black">
      <div className="absolute inset-0 bg-hudgrid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <Eyebrow>Live Combat</Eyebrow>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-normal text-white">
  Enter the <span className="text-red-600">Battlefield</span>
</h2>
            <p className="mt-4 text-white/60 text-lg leading-relaxed">
              Step into fast-paced multiplayer combat where skill, strategy
              and precision define the outcome.
            </p>
          </div>
          <GhostButton href={LINKS.googlePlay} className="shrink-0">
            Play on Android
          </GhostButton>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {SHOTS.map((s, i) => (
            <div
              key={s.id}
              className="hud-panel group relative aspect-[4/3] overflow-hidden bg-neutral-900 rounded-lg"
            >
              <span className="hud-corner corner-tl text-red-600/60" />
              <span className="hud-corner corner-br text-red-600/60" />

              <img
                src={s.image}
                alt={s.label}
                className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500 ease-out"
              />

              <div className="absolute inset-0 bg-hudgrid opacity-20 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />

              <div className="absolute top-4 left-4 flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-red-600 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                REC ● {s.id}
              </div>

              <div className="absolute bottom-0 inset-x-0 p-5">
                <p className="font-display text-xs tracking-widest uppercase text-white/50 mb-1">
                  Gameplay Preview
                </p>
                <p className="font-display font-bold text-lg uppercase text-white">
                  {s.label}
                </p>
              </div>

              <div className="absolute inset-0 border border-white/0 group-hover:border-red-600/50 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}