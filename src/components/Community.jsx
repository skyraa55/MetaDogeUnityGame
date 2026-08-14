import { LINKS } from "../data/site";
import { Eyebrow } from "./ui";

const SOCIALS = [
  {
    label: "X (Twitter)",
    href: LINKS.x,
    live: true,
    icon: (
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.6l8.1-9.3L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 4h-2l12.3 16Z" />
    ),
  },
  {
    label: "Google Play",
    href: LINKS.googlePlay,
    live: true,
    icon: (
      <path d="M3 2.5v19a1 1 0 0 0 1.5.87l16-9.5a1 1 0 0 0 0-1.74l-16-9.5A1 1 0 0 0 3 2.5Zm12.5 9.5-3.6-3.6L15 4.9l4.9 3.4-4.4 3.7Zm-3.6 1.6 3.6-3.6 4.4 3.7L15 17.1l-3.1-3.5Z" />
    ),
  },
  {
    label: "YouTube",
    href: LINKS.youtube,
    live: true,
    icon: (
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    ),
  },
  {
    label: "Telegram",
    href: LINKS.telegram,
    live: false,
    icon: (
      <path d="m21.9 4.3-3.2 15.4c-.2 1.1-.9 1.3-1.8.8l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.3-4.9L18 6.5c.5-.4-.1-.7-.7-.3L6.5 13.1 1.7 11.6c-1-.3-1-1 .2-1.5L20.6 3c.9-.3 1.6.2 1.3 1.3Z" />
    ),
  },
  {
    label: "Discord",
    href: LINKS.discord,
    live: false,
    icon: (
      <path d="M20.3 4.4A19.7 19.7 0 0 0 15.4 3c-.2.4-.5 1-.7 1.4a18 18 0 0 0-5.4 0c-.2-.4-.5-1-.7-1.4a19.7 19.7 0 0 0-4.9 1.4C.9 8.5.2 12.5.5 16.5a19.8 19.8 0 0 0 5.5 2.6c.4-.5.8-1.1 1.1-1.8-.6-.2-1.2-.5-1.8-.9l.4-.3c3.5 1.6 7.3 1.6 10.8 0l.4.3c-.6.4-1.2.7-1.8.9.3.7.7 1.3 1.1 1.8a19.8 19.8 0 0 0 5.5-2.6c.4-4.6-.8-8.6-3.4-12.1ZM8.5 14c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2c1 0 1.9 1 1.9 2.2S9.6 14 8.5 14Zm7 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2c1 0 1.9 1 1.9 2.2s-.9 2.2-1.9 2.2Z" />
    ),
  },
];

export default function Community() {
  return (
    <section id="community" className="relative overflow-hidden bg-black py-24 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700/10 blur-[160px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <div className="flex justify-center">
          <Eyebrow>Community</Eyebrow>
        </div>

        <h2 className="mb-4 font-display text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
          Join the <span className="text-red-500">Unity</span>
        </h2>

        <p className="mx-auto mb-14 max-w-xl text-lg text-gray-400">
          Follow the development, compete with the community and help shape
          the next generation of Web3 gaming.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.live ? "_blank" : undefined}
              rel={s.live ? "noopener noreferrer" : undefined}
              aria-disabled={!s.live}
              className={`group relative flex min-w-[160px] flex-col items-center gap-3 rounded-lg border px-6 py-6 transition-all duration-300 ${
                s.live
                  ? "border-white/10 bg-white/[0.02] hover:-translate-y-1 hover:border-red-600/50 hover:bg-white/[0.05]"
                  : "cursor-not-allowed border-white/5 bg-white/[0.01] opacity-40"
              }`}
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 ${
                  s.live
                    ? "border-red-600/40 bg-red-600/10 text-red-500 group-hover:bg-red-600 group-hover:text-white"
                    : "border-white/10 bg-white/5 text-gray-500"
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  {s.icon}
                </svg>
              </span>

              <div>
                <p className="font-display text-sm font-bold uppercase tracking-wide text-white">
                  {s.label}
                </p>
                <p
                  className={`mt-1 font-mono text-[10px] uppercase tracking-widest ${
                    s.live ? "text-gray-500 group-hover:text-red-500" : "text-gray-600"
                  }`}
                >
                  {s.live ? "Connect →" : "Coming Soon"}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}