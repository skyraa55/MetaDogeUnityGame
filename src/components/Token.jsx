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
  const fileNo = TOKEN.contract ? TOKEN.contract.slice(-6).toUpperCase() : "000000";

  // hand-tuned torn-paper edge for the bottom of the case file
  const tornEdge = {
    clipPath:
      "polygon(0% 0%, 100% 0%, 100% 96%, 96% 100%, 92% 95%, 88% 100%, 84% 96%, 80% 100%, 76% 95%, 72% 100%, 68% 96%, 64% 100%, 60% 95%, 56% 100%, 52% 96%, 48% 100%, 44% 95%, 40% 100%, 36% 96%, 32% 100%, 28% 95%, 24% 100%, 20% 96%, 16% 100%, 12% 95%, 8% 100%, 4% 96%, 0% 100%)",
  };

  return (
    <section id="token" className="relative py-24 sm:py-32 bg-black overflow-hidden">
      {/* subdued war-room texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 3px)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(193,31,31,0.14),transparent_60%)]" />

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        {/* header strip */}
        <div className="flex items-center justify-between mb-10 border-b border-white/15 pb-3">
          <Eyebrow dot>
            <span>Tokenomics</span>
          </Eyebrow>
          <span className="font-mono text-[11px] tracking-[0.2em] text-white/40 uppercase">
            File No. {fileNo}
          </span>
        </div>

        <div className="text-center mb-10">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-red-500 mb-3">
            Powering the Unity
          </p>
          <h2 className="font-serif font-black uppercase leading-none tracking-tight text-6xl sm:text-7xl md:text-8xl text-white">
            {TOKEN.symbol}
          </h2>
        </div>

        {/* the case file itself */}
        <div
          className="relative mx-auto max-w-xl rotate-[-0.6deg] bg-[#EFE8D6] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]"
          style={tornEdge}
        >
          {/* punch holes revealing the black backdrop */}
          <div className="absolute left-0 top-0 bottom-6 w-10 flex flex-col justify-around items-center py-8">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-3 w-3 rounded-full bg-black" />
            ))}
          </div>

          {/* stamp, tilted */}
          <div className="absolute -top-5 right-4 sm:right-8 rotate-[9deg] pointer-events-none">
            <div className="border-[3px] border-red-700 text-red-700 px-3 py-1 [mix-blend-mode:multiply]">
              <span className="font-mono font-bold text-[13px] sm:text-sm tracking-[0.15em] uppercase">
                Verified
              </span>
            </div>
          </div>

          <div className="pl-12 pr-6 sm:pl-14 sm:pr-10 pt-9 pb-14">
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/50 mb-4">
              Contract Address — {TOKEN.chain}
            </p>
            <p className="font-mono text-[13px] sm:text-sm text-black break-all leading-relaxed border-b border-dashed border-black/30 pb-4 mb-6">
              {TOKEN.contract}
            </p>

            <div className="grid grid-cols-2 gap-px bg-black/15 mb-8 border border-black/15">
              <div className="bg-[#EFE8D6] px-4 py-3">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/45 mb-1">
                  Total Supply
                </p>
                <p className="font-serif font-bold text-base text-black">{TOKEN.supply}</p>
              </div>
              <div className="bg-[#EFE8D6] px-4 py-3">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/45 mb-1">
                  Network
                </p>
                <p className="font-serif font-bold text-base text-red-700">{TOKEN.chain}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={copyAddress}
                className="flex-1 group relative bg-black text-[#EFE8D6] font-mono text-xs tracking-[0.15em] uppercase py-3 px-5 border-b-[4px] border-red-700 active:translate-y-1 active:border-b-0 transition-transform"
              >
                {copied ? "Copied to clipboard" : "Copy contract"}
              </button>
              <a
                href={explorerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center font-mono text-xs tracking-[0.15em] uppercase py-3 px-5 border-2 border-dashed border-black/50 text-black hover:border-red-700 hover:text-red-700 transition-colors"
              >
                Open on explorer &rarr;
              </a>
            </div>
          </div>
        </div>

        <p className="text-center font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 mt-6">
          Cross-check the address before you trust it. Always verify on-chain.
        </p>
      </div>
    </section>
  );
}