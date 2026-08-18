import { useState } from "react";
import { TOKEN } from "../data/site";
import { Eyebrow } from "./ui";

// Sleek metallic / premium treatment — matches Characters.jsx, Ambassador.jsx, FinalCTA.jsx.
// Dark charcoal canvas, steel-blue chrome ambient glow, hairline dividers, mono labels.
// No torn paper, no case-file kitsch — reads like a clean spec panel.

const CHECKER = (
  <svg width="14" height="14" viewBox="0 0 14 14" className="opacity-40">
    <rect x="0" y="0" width="7" height="7" fill="currentColor" />
    <rect x="7" y="7" width="7" height="7" fill="currentColor" />
  </svg>
);

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
  const fileNo = TOKEN.contract ? TOKEN.contract.slice(-6).toUpperCase() : "000000";

  return (
    <section id="token" className="relative py-24 sm:py-32 bg-[#05070a] overflow-hidden">
      {/* metallic steel-blue ambient glow, echoes the logo's chrome ring */}
      <div
        className="pointer-events-none absolute -top-52 left-1/2 -translate-x-1/2 h-[560px] w-[560px] rounded-full blur-[140px] opacity-[0.2]"
        style={{
          background:
            "conic-gradient(from 180deg, #6fc3f0, #2c4a6e, #0f1620, #6fc3f0)",
        }}
      />
      <div className="absolute inset-0 bg-hudgrid opacity-[0.05]" />

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        {/* top meta row, mirrors the MEASURE / ANALYZE / IMPLEMENT / MORE strip */}
        <div className="flex items-center justify-between border-b border-sky-400/10 pb-4 mb-14">
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-sky-300/50">
              Tokenomics
            </span>
            <span className="hidden sm:inline font-mono text-[10px] tracking-[0.2em] uppercase text-white/25">
              {TOKEN.chain}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sky-300/40">
            {CHECKER}
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
              File {fileNo}
            </span>
          </div>
        </div>

        <div className="text-center mb-16">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-sky-300/50 mb-4">
            Powering the Unity
          </p>
          <h2 className="font-sans font-medium uppercase leading-none tracking-tight text-6xl sm:text-7xl md:text-8xl text-white">
            {TOKEN.symbol}
          </h2>
        </div>

        {/* the card itself — clean hairline panel, no paper texture */}
        <div className="relative border border-sky-400/10 bg-sky-400/[0.02]">
          {/* verified mark, quiet corner tag instead of a tilted rubber stamp */}
          <div className="absolute -top-px -right-px flex items-center gap-1.5 border-b border-l border-sky-400/10 bg-[#05070a] px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/50">
              Verified
            </span>
          </div>

          <div className="px-6 sm:px-10 pt-10 pb-8 border-b border-sky-400/10">
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-sky-300/40 mb-3">
              Contract Address
            </p>
            <p className="font-mono text-[13px] sm:text-sm text-white/80 break-all leading-relaxed">
              {TOKEN.contract}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px bg-sky-400/10">
            <div className="bg-[#05070a] px-6 sm:px-10 py-6">
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-sky-300/40 mb-2">
                Total Supply
              </p>
              <p className="font-sans font-medium text-lg text-white">{TOKEN.supply}</p>
            </div>
            <div className="bg-[#05070a] px-6 sm:px-10 py-6">
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-sky-300/40 mb-2">
                Network
              </p>
              <p className="font-sans font-medium text-lg text-white">{TOKEN.chain}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-px bg-sky-400/10 border-t border-sky-400/10">
            <button
              onClick={copyAddress}
              className="flex-1 relative bg-[#05070a] hover:bg-sky-400/[0.05] text-white font-mono text-[11px] tracking-[0.2em] uppercase py-4 px-5 transition-colors"
            >
              {copied ? "Copied to clipboard" : "Copy contract"}
            </button>
            <a
              href={explorerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-[#05070a] hover:bg-sky-400/[0.05] font-mono text-[11px] tracking-[0.2em] uppercase py-4 px-5 text-sky-300/60 hover:text-sky-300 transition-colors"
            >
              Open on explorer &rarr;
            </a>
          </div>
        </div>

        <p className="text-center font-mono text-[10px] tracking-[0.2em] uppercase text-sky-300/25 mt-6">
          Cross-check the address before you trust it. Always verify on-chain.
        </p>
      </div>
    </section>
  );
}