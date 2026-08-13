import { useState } from "react";
import { TOKEN } from "../data/site";
import { Eyebrow } from "./ui";

export default function Token() {
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(TOKEN.contract);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const explorerUrl = `https://bscscan.com/address/${TOKEN.contract}`;

  return (
    <section id="token" className="relative py-24 sm:py-32 bg-ink-soft overflow-hidden">
      <div className="absolute inset-0 bg-hudgrid opacity-25" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-mu-green/10 blur-[160px] rounded-full" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <Eyebrow dot>
          <span className="mx-auto">Tokenomics</span>
        </Eyebrow>
        <div className="flex justify-center mb-4">
          <span className="eyebrow">Powering the Unity</span>
        </div>

        <h2 className="font-display font-black uppercase leading-none tracking-tight text-6xl sm:text-7xl md:text-8xl text-mu-green drop-shadow-[0_0_40px_rgba(46,213,115,0.3)]">
          {TOKEN.symbol}
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6">
          <div className="hud-panel-sm px-6 py-4 bg-ink-panel border border-white/10 min-w-[180px]">
            <p className="font-mono text-[10px] tracking-widest uppercase text-mu-grey mb-1">
              Total Supply
            </p>
            <p className="font-display font-bold text-lg text-paper">{TOKEN.supply}</p>
          </div>
          <div className="hud-panel-sm px-6 py-4 bg-ink-panel border border-white/10 min-w-[180px]">
            <p className="font-mono text-[10px] tracking-widest uppercase text-mu-grey mb-1">
              Network
            </p>
            <p className="font-display font-bold text-lg text-mu-yellow">{TOKEN.chain}</p>
          </div>
        </div>

        <div className="mt-8 mx-auto max-w-xl hud-panel bg-ink-panel/80 border border-white/10 p-5 sm:p-6">
          <span className="hud-corner corner-tl text-mu-purple/60" />
          <span className="hud-corner corner-br text-mu-purple/60" />
          <p className="font-mono text-[10px] tracking-widest uppercase text-mu-grey mb-3">
            Contract Address
          </p>
          <p className="font-mono text-xs sm:text-sm text-paper break-all mb-5">
            {TOKEN.contract}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={copyAddress}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-display font-bold text-[11px] tracking-widest uppercase text-ink gradient-cta shadow-[0_8px_24px_-6px_rgba(45,212,191,0.5)] hover:-translate-y-0.5 transition-transform"
            >
              {copied ? "Copied ✓" : "Copy Contract"}
            </button>
            <a
              href={explorerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-display font-bold text-[11px] tracking-widest uppercase text-paper border border-mu-grey/40 glass-chip hover:border-mu-purple hover:text-mu-purple transition-colors"
            >
              View Contract
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
