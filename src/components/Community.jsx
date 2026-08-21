import { LINKS } from "../data/site";
import { Eyebrow } from "./ui";

const SOCIALS = [
  {
    label: "X (Twitter)",
    handle: "@yourgame",
    href: LINKS.x,
    live: true,
    accent: "from-slate-600 to-sky-700",
    icon: (
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.6l8.1-9.3L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 4h-2l12.3 16Z" />
    ),
  },
  {
    label: "Google Play",
    handle: "Download the app",
    href: LINKS.googlePlay,
    live: true,
    accent: "from-emerald-500 to-emerald-800",
    icon: (
      <path d="M3 2.5v19a1 1 0 0 0 1.5.87l16-9.5a1 1 0 0 0 0-1.74l-16-9.5A1 1 0 0 0 3 2.5Zm12.5 9.5-3.6-3.6L15 4.9l4.9 3.4-4.4 3.7Zm-3.6 1.6 3.6-3.6 4.4 3.7L15 17.1l-3.1-3.5Z" />
    ),
  },
  {
    label: "YouTube",
    handle: "Watch gameplay",
    href: LINKS.youtube,
    live: true,
    accent: "from-sky-500 to-slate-800",
    icon: (
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    ),
  },
  {
    label: "Telegram",
    handle: "Coming soon",
    href: LINKS.telegram,
    live: false,
    accent: "from-sky-500 to-sky-800",
    icon: (
      <path d="m21.9 4.3-3.2 15.4c-.2 1.1-.9 1.3-1.8.8l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.3-4.9L18 6.5c.5-.4-.1-.7-.7-.3L6.5 13.1 1.7 11.6c-1-.3-1-1 .2-1.5L20.6 3c.9-.3 1.6.2 1.3 1.3Z" />
    ),
  },
  {
    label: "Discord",
    handle: "Coming soon",
    href: LINKS.discord,
    live: false,
    accent: "from-indigo-500 to-indigo-800",
    icon: (
      <path d="M20.3 4.4A19.7 19.7 0 0 0 15.4 3c-.2.4-.5 1-.7 1.4a18 18 0 0 0-5.4 0c-.2-.4-.5-1-.7-1.4a19.7 19.7 0 0 0-4.9 1.4C.9 8.5.2 12.5.5 16.5a19.8 19.8 0 0 0 5.5 2.6c.4-.5.8-1.1 1.1-1.8-.6-.2-1.2-.5-1.8-.9l.4-.3c3.5 1.6 7.3 1.6 10.8 0l.4.3c-.6.4-1.2.7-1.8.9.3.7.7 1.3 1.1 1.8a19.8 19.8 0 0 0 5.5-2.6c.4-4.6-.8-8.6-3.4-12.1ZM8.5 14c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2c1 0 1.9 1 1.9 2.2S9.6 14 8.5 14Zm7 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2c1 0 1.9 1 1.9 2.2s-.9 2.2-1.9 2.2Z" />
    ),
  },
];

export default function Community() {
  return (
    <section id="community" className="relative overflow-hidden bg-black py-24 sm:py-32">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute top-1/3 left-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-600/20 blur-[180px] pointer-events-none" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/60 to-transparent" />

      {/* Angled top edge, echoing the Titanfall banner slices */}
      <div className="absolute -top-1 left-0 right-0 h-16 -skew-y-1 bg-gradient-to-r from-slate-800/25 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <div className="flex justify-center">
            <Eyebrow>Community</Eyebrow>
          </div>

          <h2 className="mb-4 font-display text-5xl font-black uppercase italic tracking-tight leading-[0.95] text-white sm:text-6xl md:text-7xl">
            Join the <span className="text-sky-400">Unity</span>
          </h2>

          <p className="mx-auto mb-16 max-w-xl text-lg text-gray-400">
            Follow the development, compete with the community and help shape
            the next generation of Web3 gaming.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {SOCIALS.map((s, i) => (
            <a
              key={s.label}
              href={s.href}
              target={s.live ? "_blank" : undefined}
              rel={s.live ? "noopener noreferrer" : undefined}
              aria-disabled={!s.live}
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 92% 100%, 0 100%)" }}
              className={`group relative flex flex-col items-center gap-4 overflow-hidden border px-6 py-8 text-center transition-all duration-300 ${
                s.live
                  ? "border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] hover:-translate-y-1.5 hover:border-sky-500/60 hover:shadow-[0_0_35px_-10px_rgba(56,169,225,0.6)]"
                  : "cursor-not-allowed border-white/5 bg-white/[0.015] opacity-50"
              }`}
            >
              {/* Corner index tag */}
              <span className="absolute left-0 top-0 bg-white/5 px-2 py-1 font-mono text-[10px] tracking-widest text-gray-500">
                0{i + 1}
              </span>

              {/* Glow sweep on hover */}
              {s.live && (
                <span
                  className={`pointer-events-none absolute -inset-1 -z-10 bg-gradient-to-br ${s.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20`}
                />
              )}

              <span
                className={`relative flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  s.live
                    ? "border-sky-500/50 bg-sky-500/10 text-sky-400 group-hover:scale-110 group-hover:border-sky-400 group-hover:bg-sky-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(56,169,225,0.7)]"
                    : "border-white/10 bg-white/5 text-gray-500"
                }`}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  {s.icon}
                </svg>
              </span>

              <div>
                <p className="font-display text-lg font-black uppercase tracking-tight text-white">
                  {s.label}
                </p>
                <p
                  className={`mt-1 font-mono text-[10px] uppercase tracking-widest ${
                    s.live ? "text-gray-500 group-hover:text-sky-400" : "text-gray-600"
                  }`}
                >
                  {s.handle}
                </p>
              </div>

              <span
                className={`mt-1 flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest transition-all duration-300 ${
                  s.live
                    ? "text-sky-400 group-hover:gap-2"
                    : "text-gray-600"
                }`}
              >
                {s.live ? "Connect" : "Locked"}
                {s.live ? (
                  <span aria-hidden="true">→</span>
                ) : (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
                    <path d="M6 10V8a6 6 0 1 1 12 0v2h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h1Zm2 0h8V8a4 4 0 1 0-8 0v2Z" />
                  </svg>
                )}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}