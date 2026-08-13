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
      className="group relative shrink-0 w-52 sm:w-60 h-28 mx-3 hud-panel-sm bg-ink-panel/70 border border-white/10 flex flex-col items-center justify-center gap-2 hover:border-mu-green/50 hover:bg-ink-panel transition-all duration-300"
    >
      <span className="font-display font-bold uppercase tracking-wide text-sm text-mu-grey group-hover:text-paper group-hover:brightness-125 transition-colors">
        {p.name}
      </span>
      <span className="font-mono text-[9px] tracking-widest uppercase text-mu-grey/50 group-hover:text-mu-green transition-colors">
        {p.category}
      </span>
    </a>
  );
}

export default function Partners() {
  const loop = [...PARTNERS, ...PARTNERS];

  return (
    <section className="relative py-24 sm:py-28 bg-ink-soft overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-hudgrid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 text-center mb-12">
        <div className="flex justify-center">
          <Eyebrow>Our Partners</Eyebrow>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl uppercase tracking-tight mb-3">
          Building the Unity <span className="text-mu-purple">Together</span>
        </h2>
        <p className="text-mu-grey max-w-xl mx-auto">
          MetaDogeUnity is building a growing ecosystem through strategic
          partnerships across Web3, AI, gaming, blockchain infrastructure and
          technology.
        </p>
      </div>

      <div className="relative mask-fade-r" style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}>
        <div className="flex w-max animate-marquee py-2">
          {loop.map((p, i) => (
            <LogoCard p={p} key={`${p.name}-${i}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
