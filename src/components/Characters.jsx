import { useState } from "react";
import { CHARACTERS } from "../data/site";
import { Eyebrow } from "./ui";

// Sleek metallic / premium treatment — dark charcoal canvas, chrome accents,
// thin hairline dividers, restrained mono labels. No red, no clipped "gamer" corners.
// Every card reads like a minimal spec sheet, not a badge.

const CHECKER = (
  <svg width="14" height="14" viewBox="0 0 14 14" className="opacity-40">
    <rect x="0" y="0" width="7" height="7" fill="currentColor" />
    <rect x="7" y="7" width="7" height="7" fill="currentColor" />
  </svg>
);

function StatBar({ label, value }) {
  return (
    <div>
      <div className="flex justify-between font-mono text-[9px] tracking-[0.15em] uppercase text-white/35 mb-1.5">
        <span>{label}</span>
        <span className="text-white/60">{String(value).padStart(2, "0")}</span>
      </div>
      <div className="h-[2px] w-full bg-white/[0.06] overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-white/40 via-white/90 to-white/40"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default function Characters() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="characters"
      className="relative py-24 sm:py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* faint metallic ambient glow, echoes the liquid-chrome hero mark */}
      <div
        className="pointer-events-none absolute -top-52 left-1/2 -translate-x-1/2 h-[560px] w-[560px] rounded-full blur-[140px] opacity-[0.18]"
        style={{
          background:
            "conic-gradient(from 180deg, #ffffff, #6b6b6b, #101010, #ffffff)",
        }}
      />
      <div className="absolute inset-0 bg-hudgrid opacity-[0.05]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* top meta row, mirrors the MEASURE / ANALYZE / IMPLEMENT / MORE strip */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-10">
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40">
              Roster
            </span>
            <span className="hidden sm:inline font-mono text-[10px] tracking-[0.2em] uppercase text-white/25">
              Select
            </span>
            <span className="hidden sm:inline font-mono text-[10px] tracking-[0.2em] uppercase text-white/25">
              Compare
            </span>
          </div>
          <div className="flex items-center gap-2 text-white/30">
            {CHECKER}
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
              {CHARACTERS.length} available
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <h2 className="font-sans font-medium text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight text-white max-w-xl">
            Choose your fighter
          </h2>
          <p className="max-w-xs text-sm text-white/40 leading-relaxed">
            Every operative comes fully specced. Hover to open the file, tap to lock your pick.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 border border-white/10">
          {CHARACTERS.map((c, i) => {
            const isActive = active === c.id;
            return (
              <div
                key={c.id}
                onMouseEnter={() => setActive(c.id)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(isActive ? null : c.id)}
                className={`relative group cursor-pointer bg-[#0a0a0a] transition-colors duration-300 ${
                  isActive ? "bg-white/[0.04]" : ""
                }`}
              >
                {/* index label, top-left — quiet, mono, no badge chrome */}
                <div className="absolute top-3 left-3 z-20 font-mono text-[10px] tracking-widest text-white/30">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* image */}
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent transition-opacity duration-500 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <img
                    src={c.image}
                    alt={`${c.name} — ${c.codename}`}
                    className={`absolute inset-0 h-full w-full object-contain object-bottom transition-all duration-500 ease-out ${
                      isActive
                        ? "scale-[1.05] grayscale-0"
                        : "scale-100 grayscale-[0.6] opacity-90"
                    }`}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />

                  {/* thin metallic underline that draws in on active */}
                  <div
                    className={`absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white to-transparent origin-center transition-transform duration-500 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </div>

                <div className="p-4 sm:p-5 border-t border-white/10">
                  <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-white/35 mb-1">
                    {c.class}
                  </p>
                  <h3 className="font-sans font-medium text-base sm:text-lg leading-tight text-white">
                    {c.name}
                  </h3>
                  <p className="text-white/35 text-xs mt-0.5 font-mono">
                    {c.codename}
                  </p>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100 mt-4"
                        : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-xs text-white/45 leading-relaxed mb-4">
                        {c.bio}
                      </p>
                      <div className="flex items-center gap-2 mb-4 font-mono text-[10px] tracking-widest uppercase text-white/45 pb-3 border-b border-white/10">
                        <span className="text-white/60">＋</span> {c.weapon}
                      </div>
                      <div className="space-y-3">
                        <StatBar label="Armor" value={c.stats.armor} />
                        <StatBar label="Speed" value={c.stats.speed} />
                        <StatBar label="Firepower" value={c.stats.firepower} />
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