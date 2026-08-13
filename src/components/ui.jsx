export function Panel({ children, className = "", corners = true }) {
  return (
    <div className={`hud-panel ${className}`}>
      {corners && (
        <>
          <span className="hud-corner corner-tl text-mu-green/70" />
          <span className="hud-corner corner-br text-mu-green/70" />
        </>
      )}
      {children}
    </div>
  );
}

export function Eyebrow({ children, dot = true }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      {dot && <span className="w-2 h-2 bg-red-500 shadow-[0_0_8px_2px_rgba(46,213,115,0.7)]" />}
      <span className="eyebrow">{children}</span>
    </div>
  );
}

export function PrimaryButton({ href, children, className = "", onClick, as = "a" }) {
  const Comp = as;
  return (
    <Comp
      href={href}
      onClick={onClick}
      target={href && href.startsWith("http") ? "_blank" : undefined}
      rel={href && href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-display font-bold text-[13px] tracking-widest uppercase text-ink gradient-cta shadow-[0_10px_30px_-8px_rgba(34,211,238,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-6px_rgba(34,211,238,0.7)] active:translate-y-0 cursor-pointer ${className}`}
    >
      <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-colors" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Comp>
  );
}

export function GhostButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target={href && href.startsWith("http") ? "_blank" : undefined}
      rel={href && href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-display font-bold text-[13px] tracking-widest uppercase text-paper border border-mu-grey/30 glass-chip hover:border-mu-green hover:text-red-500 transition-colors duration-200 ${className}`}
    >
      {children}
    </a>
  );
}

export function SectionHeading({ eyebrow, title, sub, align = "left" }) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} mb-14`}>
      {eyebrow && (
        <div className={`flex items-center gap-2 mb-4 ${align === "center" ? "justify-center" : ""}`}>
          <span className="w-2 h-2 bg-mu-green shadow-[0_0_8px_2px_rgba(46,213,115,0.7)]" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      )}
      <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase leading-[1.08] tracking-tight text-paper">
        {title}
      </h2>
      {sub && <p className="mt-4 text-mu-grey text-lg leading-relaxed">{sub}</p>}
    </div>
  );
}
