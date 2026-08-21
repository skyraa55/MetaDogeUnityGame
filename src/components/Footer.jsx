"use client";

import { LINKS, TOKEN, NAV_LINKS } from "../data/site";

const SOCIALS = [
  {
    label: "Telegram",
    href: LINKS.telegram,
    icon: (
      <path d="M22.5 3.5 2.7 11.2c-1.2.5-1.2 1.2-.2 1.5l5 1.6 1.9 6c.2.6.5.8 1 .8.5 0 .7-.2 1-.5l2.4-2.3 5 3.7c.9.5 1.5.2 1.8-.8l3.2-15.2c.4-1.4-.4-2-1.3-1.5ZM8.4 14l9.6-6.1c.5-.3.9-.1.5.2l-8 7.4-.3 3-1.5-4.5Z" />
    ),
  },
  {
    label: "X",
    href: LINKS.x,
    icon: (
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.6l8.1-9.3L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 4h-2l12.3 16Z" />
    ),
  },
  {
    label: "Instagram",
    href: LINKS.instagram,
    icon: (
      <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.3.06 2.2.27 2.9.55.8.32 1.4.73 2 1.36.63.63 1.04 1.2 1.36 2 .28.7.49 1.6.55 2.9.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.3-.27 2.2-.55 2.9a5.9 5.9 0 0 1-1.36 2 5.9 5.9 0 0 1-2 1.36c-.7.28-1.6.49-2.9.55-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.3-.06-2.2-.27-2.9-.55a5.9 5.9 0 0 1-2-1.36 5.9 5.9 0 0 1-1.36-2c-.28-.7-.49-1.6-.55-2.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.3.27-2.2.55-2.9.32-.8.73-1.37 1.36-2C4.81 1.58 5.38 1.17 6.18.85c.7-.28 1.6-.49 2.9-.55C10.4.23 10.8.23 12 2.2Zm0 1.8c-3.16 0-3.53 0-4.77.07-1.06.05-1.63.23-2.02.38-.5.2-.87.43-1.25.81a3.4 3.4 0 0 0-.81 1.25c-.15.4-.33.96-.38 2.02C2.7 9.47 2.7 9.84 2.7 13s0 3.53.07 4.77c.05 1.06.23 1.63.38 2.02.2.5.43.87.81 1.25.38.38.75.61 1.25.81.4.15.96.33 2.02.38 1.24.06 1.6.07 4.77.07s3.53 0 4.77-.07c1.06-.05 1.63-.23 2.02-.38.5-.2.87-.43 1.25-.81.38-.38.61-.75.81-1.25.15-.4.33-.96.38-2.02.06-1.24.07-1.6.07-4.77s0-3.53-.07-4.77c-.05-1.06-.23-1.63-.38-2.02a3.36 3.36 0 0 0-.81-1.25 3.4 3.4 0 0 0-1.25-.81c-.4-.15-.96-.33-2.02-.38C15.53 4 15.16 4 12 4Zm0 3.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm0 1.8a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm4.8-2.9a1.08 1.08 0 1 1 0 2.15 1.08 1.08 0 0 1 0-2.15Z" />
    ),
  },
  {
    label: "TikTok",
    href: LINKS.tiktok,
    icon: (
      <path d="M16.6 1.3c.3 2.3 1.8 4 4 4.3v3a7.3 7.3 0 0 1-4-1.2v6.9a6.6 6.6 0 1 1-6.6-6.6c.3 0 .6 0 .9.05v3.1a3.5 3.5 0 1 0 2.5 3.35V1.3h3.2Z" />
    ),
  },
  {
    label: "Discord",
    href: LINKS.discord,
    icon: (
      <path d="M20.3 4.9A18.3 18.3 0 0 0 15.9 3.5c-.19.34-.4.8-.55 1.16a17 17 0 0 0-6.7 0c-.15-.36-.37-.82-.56-1.16a18.2 18.2 0 0 0-4.4 1.4C.9 8.9.2 12.8.5 16.6a18.3 18.3 0 0 0 5.6 2.8c.45-.62.85-1.28 1.2-1.98a11.9 11.9 0 0 1-1.9-.9c.16-.12.32-.24.47-.37 3.65 1.68 7.6 1.68 11.2 0 .16.13.31.25.47.37-.6.36-1.24.66-1.9.9.35.7.75 1.36 1.2 1.98a18.2 18.2 0 0 0 5.6-2.8c.35-4.4-.75-8.26-3.1-11.7ZM8.68 14.3c-1.1 0-2-1-2-2.25s.88-2.26 2-2.26 2.02 1.02 2 2.26c0 1.24-.89 2.25-2 2.25Zm6.65 0c-1.1 0-2-1-2-2.25s.88-2.26 2-2.26 2.02 1.02 2 2.26c0 1.24-.88 2.25-2 2.25Z" />
    ),
  },
];

const QUICK_LINKS = [
  { label: "Privacy Policy", href: LINKS.privacyPolicy ?? "#" },
  { label: "Disclaimer", href: LINKS.disclaimer ?? "#" },
  { label: "Terms of services", href: LINKS.terms ?? "#" },
];

// Shared background for the footer + ZENITH panel.
const PANEL_BG = "#323950";

// Height of the ZENITH reveal panel. This also controls how much scroll
// distance the reveal animation takes — taller = slower, smoother reveal.
const ZENITH_HEIGHT = 200;

export default function Footer() {
  return (
    <div style={{ backgroundColor: PANEL_BG }}>
      {/*
        FOOTER CONTENT — position: relative + z-10 + solid background.
        This sits ON TOP of the sticky ZENITH panel behind it.
        As the user scrolls down, this footer naturally scrolls up,
        gradually uncovering the ZENITH text pinned at the viewport bottom.
        Scrolling back up reverses the effect — the footer slides back
        down and covers ZENITH again.
      */}
      <footer className="relative z-10" style={{ backgroundColor: PANEL_BG }}>
        <div className="mx-auto max-w-7xl px-6 pb-6 pt-6 sm:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-3 flex items-center gap-2">
                <img
                  src="/assets/log.png"
                  alt="MetaDogeUnity logo"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="font-display text-base font-bold leading-tight text-white">
                  META<span className="text-sky-400">DOGE</span>
                  <br />
                  UNITY
                </span>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-white/50">
                Zenith Gaming Studio LLC established in Dubai, UAE, presents
                MetaDogeUnity-AAA Third person shooting Open World game.
              </p>
              <div className="mt-4 flex gap-2.5">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-sky-400/60 hover:text-sky-400"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                      {s.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
                Quick Links
              </p>
              <ul className="space-y-2.5">
                {QUICK_LINKS.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-white/50 transition-colors hover:text-sky-400"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigations */}
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
                Navigations
              </p>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-white/50 transition-colors hover:text-sky-400"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
                Contact Us
              </p>
              <a
                href={`mailto:${LINKS.contactEmail ?? "contact@metadogeunity.in"}`}
                className="text-sm text-white/50 transition-colors hover:text-sky-400"
              >
                {LINKS.contactEmail ?? "contact@metadogeunity.in"}
              </a>

              {TOKEN?.contract && (
                <div className="mt-6">
                  <p className="mb-1 text-xs uppercase tracking-wide text-white/40">
                    {TOKEN.symbol} · {TOKEN.chain}
                  </p>
                  <p className="break-all rounded border border-white/10 bg-black/20 px-2.5 py-2 font-mono text-[11px] leading-relaxed text-white/50">
                    {TOKEN.contract}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-3 text-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} MetaDogeUnity. All rights reserved.
          </p>
        </div>
      </footer>

      {/*
        ZENITH — position: sticky; bottom: 0; z-index: 0.
        Stays pinned at the viewport bottom BEHIND the footer content.
        As the footer scrolls up, this is gradually revealed — the
        classic "curtain reveal" effect. The reveal naturally reverses
        when scrolling back up.
      */}
      <div
        className="sticky bottom-0 z-0 flex items-center justify-center overflow-hidden"
        style={{ height: ZENITH_HEIGHT, backgroundColor: PANEL_BG }}
        aria-hidden="true"
      >
        <h2 className="select-none whitespace-nowrap font-display text-[13vw] font-extrabold uppercase leading-none tracking-tight text-white/90 sm:text-[9vw]">
          ZENITH
        </h2>
      </div>
    </div>
  );
}