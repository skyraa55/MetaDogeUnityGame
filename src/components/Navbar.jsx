// import { useEffect, useState } from "react";
// import { LINKS, NAV_LINKS } from "../data/site";


// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 24);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
//         scrolled ? "glass-surface border-b border-slate-400/15" : "bg-transparent"
//       }`}
//     >
//       <div className="mx-auto max-w-7xl px-5 sm:px-8 h-[72px] flex items-center justify-between">
//         <a href="#top" className="flex items-center gap-2.5 shrink-0">
//           <span className="relative flex items-center justify-center w-12 h-12 rounded-full bg-slate-800/40 border border-slate-300/40 glow-ring overflow-hidden">
//             <img
//               src="/assets/log.png"
//               alt="MetaDogeUnity logo"
//               className="w-full h-full object-cover relative z-10"
//             />
//           </span>
//           <span className="font-display font-bold tracking-wider text-sm sm:text-base text-slate-100">
//             META<span className="text-sky-400">DOGE</span>UNITY
//           </span>
//         </a>

//         <nav className="hidden lg:flex items-center gap-9">
//           {NAV_LINKS.map((l) => (
//             <a
//               key={l.href}
//               href={l.href}
//               className="font-body font-semibold text-sm tracking-wide uppercase text-slate-200 hover:text-sky-400 transition-colors"
//             >
//               {l.label}
//             </a>
//           ))}
//         </nav>

//         <div className="hidden lg:flex items-center gap-3">
//           <a
//             href={LINKS.x}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-9 h-9 rounded-full flex items-center justify-center border border-slate-300/25 text-slate-200 hover:text-white hover:border-slate-100 transition-colors"
//             aria-label="MetaDogeUnity on X"
//           >
//             <XIcon />
//           </a>
//           <a
//             href={LINKS.googlePlay}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="font-display font-bold text-xs tracking-widest px-5 py-2.5 rounded-full bg-gradient-to-r from-slate-600 via-sky-600 to-sky-400 text-white shadow-[0_8px_24px_-6px_rgba(56,110,158,0.55)] hover:-translate-y-0.5 transition-transform"
//           >
//             Play Now
//           </a>
//         </div>

//         <button
//           className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
//           onClick={() => setOpen((v) => !v)}
//           aria-label="Toggle menu"
//           aria-expanded={open}
//         >
//           <span className={`block w-6 h-0.5 bg-slate-100 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
//           <span className={`block w-6 h-0.5 bg-slate-100 transition-opacity ${open ? "opacity-0" : ""}`} />
//           <span className={`block w-6 h-0.5 bg-slate-100 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
//         </button>
//       </div>

//       {open && (
//         <div className="lg:hidden glass-surface border-t border-slate-400/15 px-5 py-6 flex flex-col gap-5">
//           {NAV_LINKS.map((l) => (
//             <a
//               key={l.href}
//               href={l.href}
//               onClick={() => setOpen(false)}
//               className="font-body font-semibold text-base uppercase tracking-wide text-slate-100"
//             >
//               {l.label}
//             </a>
//           ))}
//           <a
//             href={LINKS.googlePlay}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="font-display font-bold text-xs tracking-widest uppercase px-5 py-3 rounded-full bg-gradient-to-r from-slate-600 via-sky-600 to-sky-400 text-white text-center"
//           >
//             Play Now
//           </a>
//         </div>
//       )}
//     </header>
//   );
// }

// function XIcon() {
//   return (
//     <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//     </svg>
//   );
// }










import { useEffect, useState } from "react";
import { LINKS, NAV_LINKS } from "../data/site";
import {
  Home,
  Gamepad2,
  Users2,
  Users,
  Swords,
  Map,
  Trophy,
  Info,
  Award,
  Coins,
  FileText,
  ShoppingBag,
  Download,
  Menu,
  X as CloseIcon,
} from "lucide-react";

/* Map each NAV_LINKS label to the icon that best fits its meaning.
   Add more keywords here as your nav grows. */
const ICON_KEYWORDS = {
  home: Home,
  gameplay: Gamepad2,
  play: Gamepad2,
  character: Users2,
  squad: Users2,
  weapon: Swords,
  arsenal: Swords,
  roadmap: Map,
  map: Map,
  leaderboard: Trophy,
  rank: Trophy,
  about: Info,
  info: Info,
  community: Users,
  ambassador: Award,
  mu: Coins,
};

function iconFor(label) {
  const key = (label || "").toLowerCase();
  const match = Object.keys(ICON_KEYWORDS).find((k) => key.includes(k));
  return ICON_KEYWORDS[match] || Gamepad2;
}

function XIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/* Vertical dock icon button (used on both left and right docks) */
function DockIcon({ href, label, Icon, side, onClick, external, bordered }) {
  const tooltipPositionClass =
    side === "right"
      ? "right-full mr-3 translate-x-1 group-hover:translate-x-0"
      : "left-full ml-3 -translate-x-1 group-hover:translate-x-0";

  return (
    <a
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      className={
        "group relative flex items-center justify-center w-11 h-11 rounded-md text-slate-300 transition-all duration-200 hover:text-sky-400 hover:bg-sky-500/10 hover:border-sky-400/60 " +
        (bordered ? "border border-slate-400/40" : "border border-transparent")
      }
    >
      <Icon size={20} strokeWidth={2.1} />
      <span
        className={
          "pointer-events-none absolute top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-slate-900/95 border border-sky-500/30 px-2.5 py-1 font-['Rajdhani'] text-xs font-semibold uppercase tracking-wider text-sky-300 opacity-0 transition-all duration-200 group-hover:opacity-100 " +
          tooltipPositionClass
        }
      >
        {label}
      </span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = Array.isArray(NAV_LINKS) ? NAV_LINKS : [];

  return (
    <>
      {/* ===== LOGO — floats top-left, separate from the dock ===== */}
      <a
        href="#top"
        aria-label="MetaDogeUnity home"
        className="hidden lg:flex fixed top-4 left-6 z-50"
      >
        <img
          src="/assets/log.png"
          alt="MetaDogeUnity logo"
          className="w-12 h-12 object-contain drop-shadow-[0_0_18px_rgba(56,169,225,0.55)]"
        />
      </a>

      {/* ===== LEFT DOCK — taller floating island: primary nav + play ===== */}
      <aside className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 z-50 flex-col items-center justify-between h-[70vh] min-h-[480px] py-8 px-2 rounded-2xl glass-surface border border-slate-400/15">
        <nav className="flex flex-col items-center gap-5">
          {links.map((l) => {
            const Icon = iconFor(l.label);
            return (
              <DockIcon key={l.href} href={l.href} label={l.label} Icon={Icon} side="left" />
            );
          })}
        </nav>

        <a
          href={LINKS.googlePlay}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Play Now"
          className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-slate-600 via-sky-600 to-sky-400 text-white shadow-[0_8px_24px_-6px_rgba(56,110,158,0.55)] hover:-translate-y-0.5 transition-transform"
        >
          <Gamepad2 size={20} strokeWidth={2.1} />
        </a>
      </aside>

      {/* ===== RIGHT DOCK — transparent, vertically centered, whitepaper/marketplace/socials ===== */}
      <aside className="hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-3">
        <DockIcon href={LINKS.whitepaper || "#"} label="Whitepaper" Icon={FileText} side="right" bordered />
        <DockIcon href={LINKS.marketplace || "#"} label="NFT Marketplace" Icon={ShoppingBag} side="right" bordered />
        <DockIcon href={LINKS.x} label="Follow on X" Icon={XIcon} side="right" external bordered />
        <DockIcon href={LINKS.googlePlay} label="Download" Icon={Download} side="right" external bordered />
      </aside>

      {/* ===== MOBILE — logo, floating toggle + full-screen menu ===== */}
      <a
        href="#top"
        className="lg:hidden fixed top-4 left-4 z-50"
        aria-label="MetaDogeUnity home"
      >
        <img src="/assets/log.png" alt="MetaDogeUnity logo" className="w-10 h-10 object-contain" />
      </a>

      <button
        className="lg:hidden fixed top-4 right-4 z-50 w-11 h-11 rounded-full glass-surface border border-slate-400/20 flex items-center justify-center text-slate-100"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? <CloseIcon size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div className="lg:hidden fixed inset-0 z-40 glass-surface flex flex-col items-center justify-center gap-6 px-8">
          <img src="/assets/log.png" alt="MetaDogeUnity logo" className="w-14 h-14 object-contain mb-2" />
          {links.map((l) => {
            const Icon = iconFor(l.label);
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 font-['Rajdhani'] font-semibold text-lg uppercase tracking-wide text-slate-100"
              >
                <Icon size={22} /> {l.label}
              </a>
            );
          })}

          <div className="flex items-center gap-4 mt-2">
            {LINKS.whitepaper && (
              <a
                href={LINKS.whitepaper}
                className="flex items-center gap-2 font-['Rajdhani'] font-semibold text-sm uppercase tracking-wide text-sky-300"
              >
                <FileText size={18} /> Whitepaper
              </a>
            )}
            {LINKS.marketplace && (
              <a
                href={LINKS.marketplace}
                className="flex items-center gap-2 font-['Rajdhani'] font-semibold text-sm uppercase tracking-wide text-sky-300"
              >
                <ShoppingBag size={18} /> Marketplace
              </a>
            )}
          </div>

          <a
            href={LINKS.googlePlay}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 font-['Rajdhani'] font-bold text-sm tracking-widest uppercase px-6 py-3 rounded-full bg-gradient-to-r from-slate-600 via-sky-600 to-sky-400 text-white text-center"
          >
            Play Now
          </a>
        </div>
      )}
    </>
  );
}