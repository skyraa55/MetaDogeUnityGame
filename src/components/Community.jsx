import { LINKS } from "../data/site";
import { Eyebrow } from "./ui";

const SOCIALS = [
  { label: "X (Twitter)", href: LINKS.x, live: true },
  { label: "Google Play", href: LINKS.googlePlay, live: true },
  { label: "YouTube", href: LINKS.youtube, live: true },
  { label: "Telegram", href: LINKS.telegram, live: false },
  { label: "Discord", href: LINKS.discord, live: false },
];

export default function Community() {
  return (
    <section id="community" className="relative py-24 sm:py-32 bg-ink-soft overflow-hidden">
      <div className="absolute inset-0 bg-hudgrid opacity-25" />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <div className="flex justify-center">
          <Eyebrow>Community</Eyebrow>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight mb-4">
          Join the <span className="text-mu-green">Unity</span>
        </h2>
        <p className="text-mu-grey text-lg max-w-xl mx-auto mb-12">
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
              className={`hud-panel-sm relative px-6 py-4 min-w-[150px] border transition-all duration-300 ${
                s.live
                  ? "border-white/10 bg-ink-panel/70 hover:border-mu-green/50 hover:-translate-y-1"
                  : "border-white/5 bg-ink-panel/30 opacity-50 cursor-not-allowed"
              }`}
            >
              <p className="font-display font-bold uppercase text-sm tracking-wide text-paper">
                {s.label}
              </p>
              <p className="mt-1 font-mono text-[10px] tracking-widest uppercase text-mu-grey/60">
                {s.live ? "Connect →" : "Coming Soon"}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
