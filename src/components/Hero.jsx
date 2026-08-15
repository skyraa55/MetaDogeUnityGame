import { useEffect, useRef, useState } from "react";
import { LINKS } from "../data/site";
import { PrimaryButton, GhostButton } from "./ui";
import Typewriter from "typewriter-effect";

export default function Hero() {
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.playbackRate = 1;
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex flex-col overflow-hidden bg-black pt-24">
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

      {/* ===== BLACK / RED MOOD ACCENTS ===== */}
      <div className="absolute inset-y-0 left-0 w-2/3 sm:w-1/2 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/85 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-red-600/20 blur-3xl opacity-50" />

      {/* diagonal red accent slash */}
      <div className="absolute top-0 right-0 w-[45%] h-full hidden lg:block pointer-events-none">
        <div className="absolute inset-0 border-l border-red-600/30 [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)] bg-gradient-to-b from-red-600/10 via-transparent to-red-900/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-5 sm:px-8 flex-1 flex items-center py-14 lg:py-0">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-600/40 bg-black/40 backdrop-blur-sm mb-7 animate-rise">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulseGlow" />
            <span className="font-['Rajdhani'] font-semibold tracking-widest uppercase text-xs text-red-500">
              Built on BNB Chain
            </span>
          </div>

          <h1
  className="font-sans font-extrabold leading-[1.05] tracking-tight text-[11vw] sm:text-5xl md:text-6xl lg:text-7xl animate-rise"
  style={{ animationDelay: "80ms" }}
>
  <span className="block text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.85)]">One Arena.</span>
  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-red-800 drop-shadow-[0_0_40px_rgba(220,38,38,0.5)]">
    Endless{" "}
    <span className="inline-block w-[12ch] italic">
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
            className="mt-6 font-['Rajdhani'] font-bold tracking-[0.3em] uppercase text-sm sm:text-base text-gray-300 animate-rise drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
            style={{ animationDelay: "140ms" }}
          >
            Play. <span className="text-red-500">Fight.</span>{" "}
            <span className="text-red-600">Earn.</span>
          </p>

          <p
            className="mt-6 max-w-lg font-['Rajdhani'] font-medium text-gray-300 text-base sm:text-lg leading-relaxed animate-rise drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
            style={{ animationDelay: "200ms" }}
          >
            MetaDogeUnity is a competitive multiplayer battle royale where
            aim, strategy and squad play earn you real onchain rewards.
            Drop in, eliminate the competition, and climb the leaderboard.
          </p>

         <div className="mt-10 flex flex-wrap items-center gap-4 animate-rise" style={{ animationDelay: "260ms" }}>
  <PrimaryButton
    href={LINKS.googlePlay}
    className="!bg-gradient-to-r !from-red-600 !to-red-800 !text-white !border-red-500 hover:!from-red-500 hover:!to-red-700 shadow-[0_0_25px_rgba(220,38,38,0.5)] !lowercase"
  >
    ▶ play for free
  </PrimaryButton>

  <GhostButton
    href={LINKS.x}
    className="!border-red-500/60 !text-red-500 hover:!bg-red-600/10 hover:!border-red-400 hover:!text-red-400 !lowercase"
  >
    join the unity
  </GhostButton>
</div>
        </div>
      </div>
    </section>
  );
}





















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

//       {/* ===== WATERMARK COVER (desktop only) =====
//           Covers the stray "A" letter that appears in the video.
//           Adjust the inline style values below (top/left/width/height)
//           in small % increments until it lines up pixel-perfect on your screen. */}
//       <div
//         className="hidden lg:block absolute pointer-events-none z-[5]"
//         style={{
//           top: "80%",
//           left: "20%",
//           width: "13%",
//           height: "16%",
//         }}
//       >
//         <img
//           src="/public/assets/characters/red-trooper.png"
//           alt=""
//           className="left-4 w-full h-full object-cover"
//         />
//       </div>

//       {/* ===== BLACK / RED MOOD ACCENTS ===== */}
//       <div className="absolute inset-y-0 left-0 w-2/3 sm:w-1/2 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
//       <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/85 to-transparent" />
//       <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-red-600/20 blur-3xl opacity-50" />

//       {/* diagonal red accent slash */}
//       <div className="absolute top-0 right-0 w-[45%] h-full hidden lg:block pointer-events-none">
//         <div className="absolute inset-0 border-l border-red-600/30 [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)] bg-gradient-to-b from-red-600/10 via-transparent to-red-900/20" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl w-full px-5 sm:px-8 flex-1 flex items-center py-14 lg:py-0">
//         <div className="max-w-2xl">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-600/40 bg-black/40 backdrop-blur-sm mb-7 animate-rise">
//             <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulseGlow" />
//             <span className="font-['Rajdhani'] font-semibold tracking-widest uppercase text-xs text-red-500">
//               Built on BNB Chain
//             </span>
//           </div>

//           <h1
//             className="font-sans font-extrabold leading-[1.05] tracking-tight text-[11vw] sm:text-5xl md:text-6xl lg:text-7xl animate-rise"
//             style={{ animationDelay: "80ms" }}
//           >
//             <span className="block text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.85)]">One Arena.</span>
//             <span className="block bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-red-800 drop-shadow-[0_0_40px_rgba(220,38,38,0.5)]">
//               Endless{" "}
//               <span className="inline-block w-[12ch] italic">
//                 <Typewriter
//                   options={{
//                     strings: ["Rewards"],
//                     autoStart: true,
//                     loop: true,
//                   }}
//                 />
//               </span>
//             </span>
//           </h1>

//           <p
//             className="mt-6 font-['Rajdhani'] font-bold tracking-[0.3em] uppercase text-sm sm:text-base text-gray-300 animate-rise drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
//             style={{ animationDelay: "140ms" }}
//           >
//             Play. <span className="text-red-500">Fight.</span>{" "}
//             <span className="text-red-600">Earn.</span>
//           </p>

//           <p
//             className="mt-6 max-w-lg font-['Rajdhani'] font-medium text-gray-300 text-base sm:text-lg leading-relaxed animate-rise drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
//             style={{ animationDelay: "200ms" }}
//           >
//             MetaDogeUnity is a competitive multiplayer battle royale where
//             aim, strategy and squad play earn you real onchain rewards.
//             Drop in, eliminate the competition, and climb the leaderboard.
//           </p>

//           <div className="mt-10 flex flex-wrap items-center gap-4 animate-rise" style={{ animationDelay: "260ms" }}>
//             <PrimaryButton
//               href={LINKS.googlePlay}
//               className="!bg-gradient-to-r !from-red-600 !to-red-800 !text-white !border-red-500 hover:!from-red-500 hover:!to-red-700 shadow-[0_0_25px_rgba(220,38,38,0.5)] !lowercase"
//             >
//               ▶ play for free
//             </PrimaryButton>

//             <GhostButton
//               href={LINKS.x}
//               className="!border-red-500/60 !text-red-500 hover:!bg-red-600/10 hover:!border-red-400 hover:!text-red-400 !lowercase"
//             >
//               join the unity
//             </GhostButton>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }