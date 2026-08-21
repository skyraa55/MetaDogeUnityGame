// import { useEffect, useRef, useState } from "react";
// import { LINKS } from "../data/site";
// import { PrimaryButton, GhostButton } from "./ui";
// import Typewriter from "typewriter-effect";

// export default function Hero() {
//   const videoRef = useRef(null);
//   const [videoReady, setVideoReady] = useState(false);

//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;
//     v.playbackRate = 1;
//   }, []);

//   return (
//     <section id="top" className="relative min-h-screen flex flex-col overflow-hidden bg-black pt-24">
//       {/* ===== VIDEO BACKDROP ===== */}
//       <div className="absolute inset-0">
//         <video
//           ref={videoRef}
//           className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
//             videoReady ? "opacity-100" : "opacity-0"
//           }`}
//           src="/herosection.mp4"
//           poster="/assets/hero/hero-bg.svg"
//           autoPlay
//           muted
//           loop
//           playsInline
//           onCanPlay={() => setVideoReady(true)}
//         />
//         {/* static fallback shown until video is ready, avoids a flash of empty bg */}
//         <div
//           className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
//             videoReady ? "opacity-0" : "opacity-100"
//           }`}
//           style={{ backgroundImage: "url('/assets/hero/hero-bg.svg')" }}
//         />
//       </div>

//       {/* ===== BLACK / STEEL-BLUE MOOD ACCENTS ===== */}
//       <div className="absolute inset-y-0 left-0 w-2/3 sm:w-1/2 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
//       <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/85 to-transparent" />
//       <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-sky-600/20 blur-3xl opacity-50" />

//       {/* diagonal steel-blue accent slash */}
//       <div className="absolute top-0 right-0 w-[45%] h-full hidden lg:block pointer-events-none">
//         <div className="absolute inset-0 border-l border-sky-500/30 [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)] bg-gradient-to-b from-sky-500/10 via-transparent to-slate-900/20" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl w-full px-5 sm:px-8 flex-1 flex items-center py-14 lg:py-0">
//         <div className="max-w-2xl">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/40 bg-black/40 backdrop-blur-sm mb-7 animate-rise">
//             <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulseGlow" />
//             <span className="font-['Rajdhani'] font-semibold tracking-widest uppercase text-xs text-sky-400">
//               Built on BNB Chain
//             </span>
//           </div>

//           <h1
//   className="font-sans font-extrabold leading-[1.05] tracking-tight text-[11vw] sm:text-5xl md:text-6xl lg:text-7xl animate-rise"
//   style={{ animationDelay: "80ms" }}
// >
//   <span className="block text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.85)]">One Arena.</span>
//   <span className="block bg-clip-text text-transparent bg-gradient-to-r from-slate-500 via-sky-400 to-sky-600 drop-shadow-[0_0_40px_rgba(56,169,225,0.5)]">
//     Endless{" "}
//     <span className="inline-block w-[12ch] italic">
//       <Typewriter
//         options={{
//           strings: ["Rewards"],
//           autoStart: true,
//           loop: true,
//         }}
//       />
//     </span>
//   </span>
// </h1>

//           <p
//             className="mt-6 font-['Rajdhani'] font-bold tracking-[0.3em] uppercase text-sm sm:text-base text-gray-300 animate-rise drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
//             style={{ animationDelay: "140ms" }}
//           >
//             Play. <span className="text-sky-400">Fight.</span>{" "}
//             <span className="text-sky-500">Earn.</span>
//           </p>

//           <p
//             className="mt-6 max-w-lg font-['Rajdhani'] font-medium text-gray-300 text-base sm:text-lg leading-relaxed animate-rise drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
//             style={{ animationDelay: "200ms" }}
//           >
//             MetaDogeUnity is a competitive multiplayer battle royale where
//             aim, strategy and squad play earn you real onchain rewards.
//             Drop in, eliminate the competition, and climb the leaderboard.
//           </p>

//          <div className="mt-10 flex flex-wrap items-center gap-4 animate-rise" style={{ animationDelay: "260ms" }}>
//   <PrimaryButton
//     href={LINKS.googlePlay}
//     className="!bg-gradient-to-r !from-slate-600 !to-sky-600 !text-white !border-sky-400 hover:!from-slate-500 hover:!to-sky-500 shadow-[0_0_25px_rgba(56,169,225,0.5)] !lowercase"
//   >
//     ▶ play for free
//   </PrimaryButton>

//   <GhostButton
//     href={LINKS.x}
//     className="!border-sky-400/60 !text-sky-400 hover:!bg-sky-600/10 hover:!border-sky-300 hover:!text-sky-300 !lowercase"
//   >
//     join the unity
//   </GhostButton>
// </div>
//         </div>
//       </div>
//     </section>
//   );
// }










import { useEffect, useRef, useState } from "react";
import { LINKS } from "../data/site";
import { PrimaryButton, GhostButton } from "./ui";
import Typewriter from "typewriter-effect";
import { Download } from "lucide-react";

function XIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function AppleIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 384 512" fill="currentColor" {...props}>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141 0 184.5 0 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-57.7-90-57.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function GooglePlayIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 512 512" {...props}>
      <path fill="#00d9ff" d="M99.6 8.6C91 13.3 85.4 21.9 85.4 33.4v445.2c0 11.5 5.6 20.1 14.2 24.8l246.6-247.2z" />
      <path fill="#ffde00" d="M346.2 256.2l58.9-58.9-235-136.6c-8-4.8-16.8-5.4-24.5-2l200.6 197.5z" />
      <path fill="#ff3d3d" d="M87.1 478.6c3.2 3.5 7.4 6.2 12.5 8.8 7.7 3.4 16.5 2.8 24.5-2l235-136.6-58.9-58.9z" />
      <path fill="#00e676" d="M462.6 235.9L405.1 197 346.2 256l58.9 58.9 57.5-38.9c19.2-11.1 19.2-28.9 0-40.1z" />
    </svg>
  );
}

export default function Hero() {
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.playbackRate = 1;
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col overflow-hidden bg-black lg:px-24"
    >
      {/* ===== VIDEO BACKDROP ===== */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          src="/herosection.mp4"
          poster="/assets/hero/hero-bg.svg"
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoReady(true)}
        />
        {/* static fallback shown until video is ready, avoids a flash of empty bg */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            videoReady ? "opacity-0" : "opacity-100"
          }`}
          style={{ backgroundImage: "url('/assets/hero/hero-bg.svg')" }}
        />
      </div>

      {/* ===== BLACK / STEEL-BLUE MOOD ACCENTS ===== */}
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/80 via-black/30 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/90 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full bg-sky-600/20 blur-3xl opacity-60" />

      {/* ===== TOP-RIGHT — X + Whitepaper ===== */}
      <div className="hidden lg:flex absolute top-6 right-6 z-30 items-center gap-3">
        <a
          href={LINKS.x}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow on X"
          className="flex items-center justify-center w-11 h-11 rounded-lg border border-sky-400/50 text-white bg-black/60 backdrop-blur-lg shadow-[0_0_20px_-4px_rgba(56,169,225,0.5)] hover:text-sky-300 hover:border-sky-300 hover:bg-sky-500/20 hover:-translate-y-0.5 hover:shadow-[0_0_26px_-2px_rgba(56,169,225,0.75)] transition-all duration-200"
        >
          <XIcon />
        </a>
        <a
          href={LINKS.whitepaper || "#"}
          className="font-['Rajdhani'] font-extrabold tracking-widest uppercase text-sm px-6 py-2.5 rounded-lg border border-sky-400/60 text-white bg-gradient-to-r from-slate-700/80 via-slate-800/80 to-sky-900/60 backdrop-blur-lg shadow-[0_0_20px_-4px_rgba(56,169,225,0.5)] hover:border-sky-300 hover:from-sky-600/40 hover:to-sky-700/50 hover:-translate-y-0.5 hover:shadow-[0_0_26px_-2px_rgba(56,169,225,0.75)] transition-all duration-200 whitespace-nowrap"
        >
          Whitepaper
        </a>
      </div>

      {/* diagonal steel-blue accent slash */}
      <div className="absolute top-0 right-0 w-[45%] h-full hidden lg:block pointer-events-none">
        <div className="absolute inset-0 border-l border-sky-500/30 [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)] bg-gradient-to-b from-sky-500/10 via-transparent to-slate-900/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-5 sm:px-8 flex-1 flex items-center justify-center pt-24 pb-14 lg:pt-28 lg:pb-0">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/40 bg-black/40 backdrop-blur-sm mb-8 animate-rise">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulseGlow" />
            <span className="font-['Rajdhani'] font-semibold tracking-widest uppercase text-xs sm:text-sm text-sky-400">
              Built on BNB Chain
            </span>
          </div>

          <h1
            className="font-['Rajdhani'] font-extrabold uppercase leading-[1.02] tracking-tight text-[13vw] sm:text-6xl md:text-7xl lg:text-8xl animate-rise"
            style={{ animationDelay: "80ms" }}
          >
            <span className="block text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.85)]">
              One Arena.
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-slate-400 via-sky-400 to-sky-500 drop-shadow-[0_0_50px_rgba(56,169,225,0.55)]">
              Endless{" "}
              <span className="inline-block w-[9ch] sm:w-[8ch] italic">
                <Typewriter
                  options={{
                    strings: ["Rewards"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </span>
          </h1>

          <p
            className="mt-7 font-['Rajdhani'] font-bold tracking-[0.3em] uppercase text-base sm:text-lg lg:text-xl text-gray-300 animate-rise drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
            style={{ animationDelay: "140ms" }}
          >
            Play. <span className="text-sky-400">Fight.</span>{" "}
            <span className="text-sky-500">Earn.</span>
          </p>

          {/* <p
            className="mt-6 max-w-xl font-['Rajdhani'] font-medium text-gray-300 text-lg sm:text-xl leading-relaxed animate-rise drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
            style={{ animationDelay: "200ms" }}
          >
            MetaDogeUnity is a competitive multiplayer battle royale where
            aim, strategy and squad play earn you real onchain rewards.
            Drop in, eliminate the competition, and climb the leaderboard.
          </p> */}

          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-rise"
            style={{ animationDelay: "260ms" }}
          >
            <PrimaryButton
              href={LINKS.googlePlay}
              className="!bg-gradient-to-r !from-slate-600 !to-sky-600 !text-white !border-sky-400 hover:!from-slate-500 hover:!to-sky-500 shadow-[0_0_25px_rgba(56,169,225,0.5)] !lowercase !text-base !px-8 !py-4"
            >
              ▶ play for free
            </PrimaryButton>

            <GhostButton
              href={LINKS.x}
              className="!border-sky-400/60 !text-sky-400 hover:!bg-sky-600/10 hover:!border-sky-300 hover:!text-sky-300 !lowercase !text-base !px-8 !py-4"
            >
              join the unity
            </GhostButton>
          </div>

          {/* ===== DOWNLOAD NOW — angular HUD-style CTA ===== */}
          <div className="mt-12 animate-rise" style={{ animationDelay: "320ms" }}>
            <a
              href={LINKS.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 pl-2 pr-7 py-2 [clip-path:polygon(14px_0,100%_0,100%_calc(100%-14px),calc(100%-14px)_100%,0_100%,0_14px)] bg-gradient-to-r from-slate-700/80 via-slate-800/80 to-sky-900/60 border border-sky-400/40 hover:border-sky-300/80 shadow-[0_0_0_1px_rgba(56,169,225,0.15),0_10px_30px_-8px_rgba(56,169,225,0.35)] hover:shadow-[0_0_0_1px_rgba(56,169,225,0.3),0_14px_38px_-6px_rgba(56,169,225,0.55)] transition-all duration-200 hover:-translate-y-0.5"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-sm bg-gradient-to-br from-sky-400 to-sky-600 text-white shadow-[0_0_18px_rgba(56,169,225,0.6)] group-hover:scale-105 transition-transform">
                <Download size={20} strokeWidth={2.3} />
              </span>
              <span className="font-['Rajdhani'] font-extrabold uppercase tracking-[0.15em] text-base sm:text-lg text-white">
                Download Now
              </span>
            </a>

            {/* ===== APP STORE / GOOGLE PLAY ===== */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href={LINKS.appStore || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-5 py-2.5 rounded-lg border border-slate-400/25 bg-gradient-to-b from-white/[0.06] to-transparent backdrop-blur-md hover:border-sky-400/60 hover:from-sky-500/10 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-white/10 text-white group-hover:bg-sky-400/20 transition-colors">
                  <AppleIcon />
                </span>
                <span className="font-['Rajdhani'] font-bold uppercase tracking-wide text-sm text-slate-100">
                  App Store
                </span>
              </a>

              <a
                href={LINKS.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-5 py-2.5 rounded-lg border border-slate-400/25 bg-gradient-to-b from-white/[0.06] to-transparent backdrop-blur-md hover:border-sky-400/60 hover:from-sky-500/10 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-white/10 group-hover:bg-sky-400/20 transition-colors">
                  <GooglePlayIcon />
                </span>
                <span className="font-['Rajdhani'] font-bold uppercase tracking-wide text-sm text-slate-100">
                  Google Play
                </span>
              </a>
            </div>
          </div>

          {/* ===== PARTNERS — glass panel, no label ===== */}
          <div
            className="mt-12 inline-flex items-center gap-8 sm:gap-10 rounded-2xl border border-sky-500/15 bg-gradient-to-r from-white/[0.04] to-sky-500/[0.03] backdrop-blur-md px-7 py-5 shadow-[0_0_40px_-18px_rgba(56,169,225,0.5)] animate-rise"
            style={{ animationDelay: "380ms" }}
          >
            <img
              src="/bnb.png"
              alt="BNB Chain"
              className="h-8 sm:h-10 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-200"
            />
            <span className="w-px h-8 bg-slate-400/20" />
            <img
              src="/diamante.png"
              alt="Diamante"
              className="h-8 sm:h-10 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}