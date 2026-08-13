# MetaDogeUnity — Landing Page

A single-page, cinematic FPS/esports-styled landing page for **MetaDogeUnity ($MU)**, built with **React + Vite + Tailwind CSS**.

## Stack
- React 19 (Vite)
- Tailwind CSS 3
- No external UI kit — all components are custom-built HUD-style primitives

## Getting Started

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
npm run build     # production build -> /dist
npm run preview   # preview the production build locally
```

## Project Structure

```
metadogeunity/
├── public/
│   └── assets/
│       ├── characters/     # 5 character PNGs used in the roster section
│       └── hero/           # character renders used in Hero / Final CTA
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Gameplay.jsx
│   │   ├── Trailer.jsx
│   │   ├── CoreGameplay.jsx
│   │   ├── Characters.jsx
│   │   ├── Token.jsx
│   │   ├── KillToEarn.jsx
│   │   ├── Partners.jsx
│   │   ├── Ambassador.jsx
│   │   ├── Community.jsx
│   │   ├── FinalCTA.jsx
│   │   ├── Footer.jsx
│   │   └── ui.jsx          # shared HUD button / panel / heading primitives
│   ├── data/
│   │   └── site.js         # all copy, links, token info, character + reward data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
└── package.json
```

## Editing content

Almost everything (links, token info, character roster, ambassador rewards,
ambassador steps, feature cards, nav links) lives in **`src/data/site.js`**.
Edit that file to update copy without touching component markup.

### Swapping in real assets later

- **Trailer video** — open `src/components/Trailer.jsx` and set
  `TRAILER_EMBED_URL` to a YouTube embed URL
  (e.g. `https://www.youtube.com/embed/VIDEO_ID`). Until then it links out to
  the channel.
- **Gameplay screenshots** — `src/components/Gameplay.jsx` renders 3
  HUD-framed placeholder slots. Replace the placeholder content with `<img>`
  tags pointing at real screenshots dropped into `public/assets/gameplay/`.
- **Partner logos** — `src/components/Partners.jsx` has a `PARTNERS` array at
  the top. Add `{ name, category, url, logo }` entries; swap the placeholder
  text card for an `<img>` once logo files are available.
- **Telegram / Discord** — update the `telegram` / `discord` URLs in
  `src/data/site.js` (`LINKS` object) once those communities exist; the
  Community section will automatically switch those cards from "Coming Soon"
  to live links.

## Design notes

- Palette: black/charcoal base with yellow (energy/rewards), green ($MU /
  on-chain), and purple (gaming/futuristic) accents, per brand brief.
- Typography: Orbitron (display/headlines), Rajdhani (body/UI), Share Tech
  Mono (HUD readouts, labels, contract address).
- Signature elements: clipped-corner "HUD panel" cards used site-wide, a
  scanning light sweep in the hero, and a looping live kill-feed ticker in
  the Kill-to-Earn section.
- Fully responsive (mobile nav, stacking grids), respects
  prefers-reduced-motion, and has visible keyboard focus states.

## Company

Zenith Studio LLC — Abu Dhabi, UAE
