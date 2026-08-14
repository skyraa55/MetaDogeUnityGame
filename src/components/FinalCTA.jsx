import { LINKS } from "../data/site";

export default function FinalCTA() {
  return (
    <section className="relative bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-2 bg-red-600"></div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 py-24 sm:py-32">
        <div className="grid lg:grid-cols-[1.3fr_auto] gap-16 items-center">

          <div className="relative">
            <span
              aria-hidden="true"
              className="pointer-events-none select-none absolute -top-10 -left-2 font-display font-black uppercase text-[5.5rem] sm:text-[8rem] lg:text-[10rem] leading-none tracking-tighter text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.08)" }}
            >
              UNITY
            </span>

            <div className="relative">
              <span className="inline-block mb-6 text-xs font-bold uppercase tracking-[0.25em] text-red-500">
                Recruitment - Now Open
              </span>

              <h2 className="font-display font-black uppercase text-white text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight mb-6">
                Ready to
                <br />
                Enter the <span className="text-red-600">Unity?</span>
              </h2>

              <p className="text-white/50 text-lg max-w-md mb-10 leading-relaxed">
                No sidelines here. Pick a class, take your position, and hold the line.
              </p>

              <div className="flex flex-wrap items-center gap-5">
                <a href={LINKS.googlePlay} className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-200">
                  <span>Play Now</span>
                  <span>-&gt;</span>
                </a>
                <a href="#ambassador" className="inline-flex items-center gap-2 text-white text-sm font-bold uppercase tracking-wider border-b-2 border-white/30 pb-1 hover:border-red-600 hover:text-red-500 transition-colors duration-200">
                  Become an Ambassador
                </a>
              </div>
            </div>
          </div>

          <div className="w-full max-w-xs mx-auto lg:mx-0 border border-white/15 bg-white/[0.03]">
            <div className="flex items-center justify-between px-5 py-3 bg-red-600">
              <span className="text-xs font-bold uppercase tracking-widest text-white">Dossier</span>
              <span className="text-xs font-bold uppercase tracking-widest text-white">No. 001</span>
            </div>

            <div className="px-5 py-6 divide-y divide-white/10">
              <div className="flex items-center justify-between py-3">
                <span className="text-xs uppercase tracking-widest text-white/40">Unit</span>
                <span className="text-sm font-bold text-white">MetaDogeUnity</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-xs uppercase tracking-widest text-white/40">Class</span>
                <span className="text-sm font-bold text-white">Vanguard</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-xs uppercase tracking-widest text-white/40">Status</span>
                <span className="text-sm font-bold text-red-500">Recruiting</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-xs uppercase tracking-widest text-white/40">Clearance</span>
                <span className="text-sm font-bold text-white">Open</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}