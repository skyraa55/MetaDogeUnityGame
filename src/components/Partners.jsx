import { Eyebrow } from "./ui";

// Add or replace partner entries here. Each maps to a placeholder card
// until a real logo image is provided.
const PARTNERS = [
  { name: "Partner One", category: "Web3", url: "#" },
  { name: "Partner Two", category: "Gaming", url: "#" },
  { name: "Partner Three", category: "Blockchain Infra", url: "#" },
  { name: "Partner Four", category: "AI", url: "#" },
  { name: "Partner Five", category: "Technology", url: "#" },
  { name: "Partner Six", category: "Web3", url: "#" },
];

function LogoCard({ p }) {
  return (
    <a
      href={p.url}
      title={`${p.name} — ${p.category}`}
      className="group relative mx-3 flex h-28 w-52 shrink-0 flex-col items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-sky-500/50 hover:bg-white/[0.05] sm:w-60"
    >
      <span className="font-display text-sm font-bold uppercase tracking-wide text-gray-300 transition-colors group-hover:text-white">
        {p.name}
      </span>
      <span className="font-mono text-[9px] uppercase tracking-widest text-gray-600 transition-colors group-hover:text-sky-400">
        {p.category}
      </span>
      <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-sky-500 transition-all duration-300 group-hover:w-2/3" />
    </a>
  );
}

export default function Partners() {
  const loop = [...PARTNERS, ...PARTNERS];

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-black py-24 sm:py-28">
      <div className="relative mx-auto mb-14 max-w-7xl px-5 text-center sm:px-8">
        <div className="flex justify-center">
          <Eyebrow>Our Partners</Eyebrow>
        </div>
        <h2 className="mb-3 font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
          Building the Unity <span className="text-sky-400">Together</span>
        </h2>
        <p className="mx-auto max-w-xl text-gray-400">
          MetaDogeUnity is building a growing ecosystem through strategic
          partnerships across Web3, AI, gaming, blockchain infrastructure and
          technology.
        </p>
      </div>

      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee py-2">
          {loop.map((p, i) => (
            <LogoCard p={p} key={`${p.name}-${i}`} />
          ))}
        </div>
      </div>
    </section>
  );
}