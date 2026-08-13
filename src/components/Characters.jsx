import { useState } from "react";
import { CHARACTERS } from "../data/site";
import { Eyebrow } from "./ui";

// Red / White / Black — dossier / target-lock treatment.
// Every card reads like a tactical ID card, not a generic rounded panel.
const ACCENT_MAP = {
  yellow: { text: "text-red-500", bar: "bg-red-500", tag: "bg-red-500", border: "border-red-500" },
  green: { text: "text-white", bar: "bg-white", tag: "bg-white text-black", border: "border-white" },
  purple: { text: "text-red-400", bar: "bg-red-400", tag: "bg-red-400", border: "border-red-400" },
};

// Card corner is physically cut, not rounded — reads like a punched ID badge.
const CLIP = {
  clipPath:
    "polygon(0 0, 100% 0, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0 100%)",
};

function SegmentedBar({ label, value, colorClass }) {
  const segments = 12;
  const filled = Math.round((value / 100) * segments);
  return (
    <div>
      <div className="flex justify-between font-mono text-[9px] tracking-widest uppercase text-white/40 mb-1">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="flex gap-[2px]">
        {Array.from({ length: segments }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 ${i < filled ? colorClass : "bg-white/10"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Characters() {
  const [active, setActive] = useState(null);

  return (
    <section id="characters" className="relative py-24 sm:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-hudgrid opacity-[0.1]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-3">
          <Eyebrow>Roster</Eyebrow>
          <span className="font-mono text-[10px] tracking-widest uppercase text-white/30">
            {CHARACTERS.length} operatives available
          </span>
        </div>

        <h2 className="font-sans font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-white mb-6 max-w-xl">
          Choose your <span className="text-red-500">fighter</span>
        </h2>

        {/* hazard stripe divider — a real reference to combat/danger, not decoration */}
        <div
          className="h-[3px] w-full mb-14"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #ef4444 0px, #ef4444 10px, transparent 10px, transparent 20px)",
            opacity: 0.5,
          }}
        />

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {CHARACTERS.map((c) => {
            const a = ACCENT_MAP[c.accent];
            const isActive = active === c.id;
            return (
              <div
                key={c.id}
                onMouseEnter={() => setActive(c.id)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(isActive ? null : c.id)}
                style={CLIP}
                className={`relative group cursor-pointer bg-white/[0.03] border transition-colors duration-200 ${
                  isActive ? a.border : "border-white/10"
                }`}
              >
                {/* dossier tag, top-left */}
                <div className="absolute top-0 left-0 z-20 bg-black/80 border-b border-r border-white/10 px-2 py-1">
                  <span className="font-mono text-[9px] tracking-widest text-white/50">{c.id}</span>
                </div>

                {/* target-lock flag, snaps in when active */}
                <div
                  className={`absolute top-0 right-0 z-20 ${a.tag} px-2 py-1 font-mono text-[9px] tracking-widest uppercase transition-transform duration-200 origin-top-right ${
                    isActive ? "scale-100" : "scale-0"
                  }`}
                >
                  Live
                </div>

                {/* image */}
                <div className="relative h-72 sm:h-80 bg-gradient-to-b from-white/[0.03] to-black/60 overflow-hidden">
                  <img
                    src={c.image}
                    alt={`${c.name} — ${c.codename}`}
                    className="absolute inset-0 h-full w-full object-contain object-bottom"
                  />
                  {/* scanline sweep on hover — the one motion moment on this card */}
                  <div
                    className={`absolute inset-x-0 h-8 bg-gradient-to-b from-white/0 via-white/10 to-white/0 pointer-events-none transition-transform duration-700 ease-out ${
                      isActive ? "translate-y-[320px]" : "-translate-y-8"
                    }`}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                  <div
                    className={`absolute bottom-0 inset-x-0 h-[3px] ${a.bar} origin-left transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </div>

                <div className="p-4 sm:p-5">
                  <p className={`font-mono text-[10px] tracking-widest uppercase ${a.text} mb-1`}>
                    {c.class}
                  </p>
                  <h3 className="font-sans font-semibold text-base sm:text-lg leading-tight text-white">
                    {c.name}
                  </h3>
                  <p className="text-white/40 text-xs mt-0.5 font-mono">{c.codename}</p>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isActive ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-xs text-white/50 leading-relaxed mb-3">{c.bio}</p>
                      <div className="flex items-center gap-2 mb-3 font-mono text-[10px] tracking-widest uppercase text-white/50">
                        <span className={a.text}>◈</span> {c.weapon}
                      </div>
                      <div className="space-y-2">
                        <SegmentedBar label="Armor" value={c.stats.armor} colorClass={a.bar} />
                        <SegmentedBar label="Speed" value={c.stats.speed} colorClass={a.bar} />
                        <SegmentedBar label="Firepower" value={c.stats.firepower} colorClass={a.bar} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}