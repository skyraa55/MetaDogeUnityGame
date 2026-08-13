import { LINKS } from "../data/site";
import { PrimaryButton, GhostButton } from "./ui";

export default function FinalCTA() {
  return (
    <section className="relative py-28 sm:py-36 bg-ink overflow-hidden">
      <div className="absolute inset-0 bg-hudgrid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[700px] h-[700px] bg-mu-purple/15 blur-[160px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 items-center gap-10">
        <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
          <div className="relative w-56 sm:w-72">
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-mu-green/25 blur-[60px] rounded-full" />
            <img
              src="/assets/hero/hero-red-trooper.png"
              alt="MetaDogeUnity — Crimson, Vanguard class"
              className="relative z-10 w-full h-auto object-contain animate-floatY"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2 text-center lg:text-left">
          <h2 className="font-display font-black uppercase text-4xl sm:text-5xl md:text-6xl leading-[0.98] tracking-tight mb-5">
            Ready to Enter
            <br />
            the <span className="text-mu-yellow">Unity?</span>
          </h2>
          <p className="text-mu-grey text-lg mb-9 max-w-md mx-auto lg:mx-0">
            The battlefield is waiting.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <PrimaryButton href={LINKS.googlePlay}>▶ Play Now</PrimaryButton>
            <GhostButton href="#ambassador">Become an Ambassador</GhostButton>
          </div>
        </div>
      </div>
    </section>
  );
}
