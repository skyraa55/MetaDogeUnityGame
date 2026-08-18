import { LINKS } from "../data/site";
import { Eyebrow } from "./ui";

// To embed a specific trailer later, replace TRAILER_EMBED_URL below
// with e.g. "https://www.youtube.com/embed/VIDEO_ID"
const TRAILER_EMBED_URL = null;

export default function Trailer() {
  return (
    <section className="relative py-24 sm:py-32 bg-ink overflow-hidden">
      <div className="absolute inset-0 bg-hudgrid opacity-20" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Eyebrow>Cinematic</Eyebrow>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase leading-[1.05] tracking-tight mb-10 max-w-xl">
          Watch <span className="text-sky-400">Meta Doge Unity</span>
        </h2>

        <div className="hud-panel relative aspect-video overflow-hidden bg-black">
          <span className="hud-corner corner-tl text-sky-300/70" />
          <span className="hud-corner corner-br text-sky-300/70" />

          {TRAILER_EMBED_URL ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={TRAILER_EMBED_URL}
              title="MetaDogeUnity Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <a
              href={LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex flex-col items-center justify-center gap-6 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-ink to-slate-600/10" />
              <div className="absolute inset-0 bg-hudgrid opacity-30" />
              <span className="relative z-10 flex items-center justify-center w-24 h-24 rounded-full border-2 border-sky-400/60 bg-ink/60 backdrop-blur-sm group-hover:scale-110 group-hover:border-sky-300 transition-transform duration-300">
                <span className="w-0 h-0 border-y-[14px] border-y-transparent border-l-[22px] border-l-sky-300 ml-1.5" />
              </span>
              <span className="relative z-10 font-display font-bold tracking-widest uppercase text-sm text-slate-400 group-hover:text-white transition-colors">
                Watch on YouTube — @MetaDogeUnity
              </span>
              <span className="absolute top-5 left-5 font-mono text-[10px] tracking-widest text-sky-300/40 uppercase">
                Trailer Feed // Standby
              </span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}