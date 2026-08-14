import { LINKS } from "../data/site";
import { Eyebrow, GhostButton } from "./ui";

const SHOTS = [
  {
    id: "SQ-01",
    label: "Squad Deployment",
    image: "/Squard deployment.jpeg",
    coords: "34.02°N / 118.45°W",
    stat: { label: "Squad Size", value: "6" },
    featured: true,
  },
  {
    id: "OB-04",
    label: "Objective Control",
    image: "/objective control.jpg",
    coords: "SECTOR 04",
    stat: { label: "Capture Time", value: "01:42" },
  },
  {
    id: "FF-12",
    label: "Firefight — Sector 7",
    image: "Freefight section-1.jpeg",
    coords: "SECTOR 07",
    stat: { label: "Engagements", value: "23" },
  },
];

export default function Gameplay() {
  return (
    <section id="gameplay" className="relative py-24 sm:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-hudgrid opacity-30" />
      <div className="pointer-events-none absolute -top-40 right-0 w-[36rem] h-[36rem] bg-red-600/10 blur-[140px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header row w/ mission readout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
          <div className="max-w-xl">
            <Eyebrow>Live Combat · Feed 03</Eyebrow>
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

        {/* Mission status strip — tactical readout, echoes the MEASURE/ANALYZE nav bar */}
        <div className="flex items-center gap-6 sm:gap-10 py-3 mb-8 border-y border-white/10 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white/40 overflow-x-auto">
          <span className="flex items-center gap-2 text-red-600 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            Feed Live
          </span>
          <span className="shrink-0">Theatre / Frontier Belt</span>
          <span className="shrink-0">Squads Active / 12</span>
          <span className="shrink-0 hidden sm:inline">Uplink Stable</span>
        </div>

        {/* Asymmetric bento grid — one hero panel, two supporting */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-5 md:h-[640px]">
          {SHOTS.map((s) => (
            <div
              key={s.id}
              className={`gp-panel group relative overflow-hidden bg-neutral-950 rounded-lg border border-white/10
                ${s.featured
                  ? "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto"
                  : "aspect-[4/3] md:aspect-auto"}
              `}
            >
              {/* Chrome corner brackets */}
              <svg className="absolute top-3 left-3 w-7 h-7 z-10 opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 28 28" fill="none">
                <path d="M1 10V1H10" stroke="url(#gp-chrome)" strokeWidth="1.5" />
              </svg>
              <svg className="absolute bottom-3 right-3 w-7 h-7 z-10 opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 28 28" fill="none">
                <path d="M27 18V27H18" stroke="url(#gp-chrome)" strokeWidth="1.5" />
              </svg>

              <img
                src={s.image}
                alt={s.label}
                className="absolute inset-0 w-full h-full object-cover scale-105 grayscale-[15%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
              />

              {/* Diagonal scan sweep on hover */}
              <div className="gp-scan absolute inset-0 z-10 opacity-0 group-hover:opacity-100" />

              <div className="absolute inset-0 bg-hudgrid opacity-15 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/5" />
              <div className="absolute inset-0 border border-red-600/0 group-hover:border-red-600/40 transition-colors duration-300" />

              {/* Top-right rec + coords */}
              <div className="absolute top-4 right-4 text-right z-10">
                <div className="flex items-center justify-end gap-1.5 font-mono text-[10px] tracking-widest text-red-600 uppercase">
                  REC ● {s.id}
                </div>
                <div className="mt-1 font-mono text-[9px] tracking-widest text-white/35 uppercase">
                  {s.coords}
                </div>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10">
                <p className="font-display text-[10px] tracking-[0.25em] uppercase text-white/40 mb-2">
                  Gameplay Preview
                </p>
                <div className="flex items-end justify-between gap-4">
                  <p className={`font-display font-bold uppercase text-white leading-tight ${s.featured ? "text-2xl sm:text-3xl" : "text-lg"}`}>
                    {s.label}
                  </p>
                  <div className="shrink-0 text-right">
                    <p className="font-mono text-[9px] tracking-widest text-white/35 uppercase">
                      {s.stat.label}
                    </p>
                    <p className="font-display font-bold text-red-600 text-lg tabular-nums">
                      {s.stat.value}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shared chrome gradient def for corner brackets */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="gp-chrome" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="45%" stopColor="#8a8a8a" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>
      </svg>

      <style>{`
        .gp-panel { isolation: isolate; }
        .gp-scan {
          background: linear-gradient(115deg, transparent 40%, rgba(220,38,38,0.18) 48%, rgba(255,255,255,0.25) 50%, rgba(220,38,38,0.18) 52%, transparent 60%);
          background-size: 250% 250%;
          background-position: 100% 0%;
          transition: background-position 900ms ease, opacity 300ms ease;
        }
        .group:hover .gp-scan { background-position: 0% 100%; }
      `}</style>
    </section>
  );
}