

import React, { useEffect, useRef, useState } from 'react';

import one from './images/one.jpeg';     // squad lineup — hero
import two from './images/two.jpeg';     // bridge kill — "kill to earn"
import three from './images/three.jpeg'; // mobile HUD, $MU +2
import four from './images/four.jpeg';   // KILL -> EARN -> REPEAT diagram
import five from './images/five.jpeg';   // survival streak
import six from './images/six.jpeg';     // target spotted, scoped
import seven from './images/seven.jpeg'; // multiple targets, scoped
import eight from './images/eight.jpeg'; // squad walking to outpost

/* ---------- reveal-on-scroll ---------- */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ children, className = '' }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
      }`}
    >
      {children}
    </div>
  );
}

/* ---------- tactical image frame ---------- */
function Frame({ src, alt, live = false }) {
  return (
    <div className="relative border border-[#2C4A6E]/40 bg-[#05070A] overflow-hidden aspect-[16/10]">
      <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#38A9E1]/80" />
      <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#38A9E1]/80" />
      <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#38A9E1]/80" />
      <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#38A9E1]/80" />
      {live && (
        <span className="absolute top-2.5 left-8 flex items-center gap-1.5 font-['JetBrains_Mono'] text-[10px] tracking-wider text-emerald-500">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          LIVE
        </span>
      )}
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}

/* ---------- labeled divider ---------- */
function Divider({ label }) {
  return (
    <div className="flex items-center gap-4 px-[6vw] max-w-[1400px] mx-auto text-[#8B98A8] font-['JetBrains_Mono'] text-[11px] tracking-[3px]">
      <span className="flex-1 h-px bg-[#2C4A6E]/40" />
      {label}
      <span className="flex-1 h-px bg-[#2C4A6E]/40" />
    </div>
  );
}

/* ---------- copy + screenshot row ---------- */
function Row({ index, title, titleEm, paragraph, img, alt, reverse = false, live = false, list = null, tag = null }) {
  return (
    <Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center px-[6vw] py-[7vh] md:py-[9vh] max-w-[1400px] mx-auto">
        <div className={reverse ? 'md:order-2' : ''}>
          <div className="font-['JetBrains_Mono'] text-[13px] tracking-[2px] text-[#4A6484] mb-3.5">
            {index}
          </div>
          <h2 className="font-['Rajdhani'] font-bold text-[clamp(1.9rem,3.4vw,2.9rem)] leading-tight mb-4 text-[#F2F5F9]">
            {title}
            <span className="text-[#38A9E1]">{titleEm}</span>
          </h2>
          <p className="text-[#8B98A8] text-base leading-relaxed max-w-[480px]">{paragraph}</p>

          {list && (
            <ul className="mt-5 flex flex-col gap-2.5">
              {list.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 font-['JetBrains_Mono'] text-[13px] text-[#F2F5F9] px-3 py-2.5 bg-[#0F1620] border-l-2 border-[#2C4A6E]"
                >
                  <b className="text-[#38A9E1] font-medium">{item.label}</b> — {item.text}
                </li>
              ))}
            </ul>
          )}

          {tag && (
            <span className="inline-flex items-center gap-2 mt-5 font-['JetBrains_Mono'] text-xs tracking-[2px] text-[#38A9E1] border border-[#2C4A6E] px-3 py-1.5 bg-[#38A9E1]/5">
              <span className="w-1.5 h-1.5 bg-[#38A9E1] shadow-[0_0_8px_#38A9E1]" />
              {tag}
            </span>
          )}
        </div>

        <div className={reverse ? 'md:order-1' : ''}>
          <Frame src={img} alt={alt} live={live} />
        </div>
      </div>
    </Reveal>
  );
}

/* ---------- hero image block ---------- */
function HeroImage() {
  return (
    <section className="px-[6vw] pt-[6vh] pb-[4vh]">
      <Reveal>
        <div className="font-['JetBrains_Mono'] text-xs tracking-[4px] text-[#8B98A8] mb-4">
          SQUAD // 01 DEPLOYED
        </div>
      </Reveal>

      <Reveal>
        <h1 className="font-['Rajdhani'] font-bold uppercase leading-[0.94] text-[clamp(2.6rem,7.5vw,6.2rem)] tracking-wide bg-gradient-to-b from-[#EAF0F6] via-[#C7D1DE] to-[#38A9E1] bg-clip-text text-transparent">
          THE FIGHTERS
          <br />
          HAVE ARRIVED
        </h1>
      </Reveal>

      <Reveal>
        <p className="max-w-[560px] mt-5 text-lg leading-relaxed text-[#8B98A8]">
          Meet the first squad of MetaDogeUnity. Different styles. Different strengths. One
          battlefield. Choose your fighter, master your weapon, compete and earn{' '}
          <span className="text-[#38A9E1]">$MU</span>.
        </p>
      </Reveal>

      <Reveal className="mt-10">
        <div className="border border-[#2C4A6E]/40 bg-[#0F1620]">
          <div className="flex justify-between items-center px-4 py-2.5 border-b border-[#2C4A6E]/40 font-['JetBrains_Mono'] text-[11px] tracking-wider text-[#8B98A8]">
            <span>FIVE OPERATORS · ONE LOADOUT EACH</span>
            <span className="text-emerald-500">EARN RATE: ACTIVE</span>
          </div>
          <img
            src={one}
            alt="MetaDogeUnity squad — five fighters ready for battle"
            className="w-full max-h-[62vh] object-contain object-bottom"
          />
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- kill/earn/repeat loop diagram ---------- */
function Loop() {
  return (
    <section className="px-[6vw] py-[10vh] text-center">
      <Reveal className="max-w-[640px] mx-auto mb-12">
        <div className="font-['JetBrains_Mono'] text-[13px] tracking-[2px] text-[#4A6484] mb-3.5">
          HOW IT WORKS
        </div>
        <h2 className="font-['Rajdhani'] font-bold text-[clamp(2rem,4vw,3.2rem)] mb-3.5 text-[#F2F5F9]">
          The core loop
        </h2>
        <p className="text-[#8B98A8] leading-relaxed">
          One mechanic drives everything in MetaDogeUnity spot the enemy, take the kill, collect
          $MU. Then do it again.
        </p>
      </Reveal>

      <Reveal>
        <div className="max-w-[1100px] mx-auto border border-[#2C4A6E]/40 bg-[#0F1620]">
          <img src={four} alt="Kill, earn, repeat sequence diagram" className="w-full block" />
        </div>
      </Reveal>

      <Reveal>
        <div className="flex justify-center items-center gap-0 mt-8 font-['Rajdhani'] font-bold tracking-[2px] text-base">
          <span className="text-[#38A9E1] px-4">KILL</span>
          <span className="text-[#4A6484] px-2">→</span>
          <span className="text-[#38A9E1] px-4">EARN</span>
          <span className="text-[#4A6484] px-2">→</span>
          <span className="text-[#38A9E1] px-4">REPEAT</span>
        </div>
      </Reveal>
    </section>
  );
}

/* ----------------------------------------------------------------
   Images — default export. All 8 images + all the content, in order.
---------------------------------------------------------------- */
export default function Images() {
  return (
    <div className="bg-[#05070A] text-[#F2F5F9]">
      <HeroImage />

      <Divider label="TRANSMISSION LOG" />

      <Row
        index="01 / DEPLOYMENT"
        title={
          <>
            Five players.
            <br />
            One battlefield.
            <br />
          </>
        }
        titleEm="One objective."
        paragraph="The squad is moving in. Built for competitive gameplay, powered by on chain rewards for every kill. Play together, fight smarter, and earn $MU as a unit."
        img={eight}
        alt="Squad of five walking toward the outpost"
        live
      />

      <Row
        index="02 / THE BATTLEFIELD"
        title={
          <>
            No two battles
            <br />
            are{' '}
          </>
        }
        titleEm="ever the same."
        paragraph="Every spawn opens a new opportunity. Every decision changes the outcome. Every elimination brings you one step closer to earning $MU."
        img={three}
        alt="First-person elimination with $MU +2 reward popup"
        reverse
        list={[
          { label: 'ADAPT', text: 'read the field, reposition' },
          { label: 'OUTPLAY', text: 'outthink every opponent' },
          { label: 'EARN', text: 'the battlefield rewards skill, not luck' },
        ]}
      />

      <Row
        index="03 / NO SAFE CORNERS"
        title={
          <>
            You escaped
            <br />
            one fight.
            <br />
          </>
        }
        titleEm="The next is waiting."
        paragraph="Every corner can become a firefight. Every opponent is an opportunity. Every confirmed elimination pushes your $MU earnings higher. No passive rewards you fight for them."
        img={two}
        alt="Second kill of the match on a bridge crossing"
        tag="HUNT · KILL · EARN · REPEAT"
      />

      <Divider label="FIELD REPORT" />

      <Row
        index="04 / SURVIVAL STREAK"
        title={
          <>
            Getting the kill
            <br />
            is only{' '}
          </>
        }
        titleEm="half the battle."
        paragraph="The longer you survive, the more opportunities you have to hunt, eliminate, and earn. No passive farming, no sitting on the sidelines. Move. Hunt. Survive. Earn $MU."
        img={five}
        alt="Survival streak of 03:42 with 3 kills"
        reverse
        live
      />

      <Row
        index="05 / TARGET LOCK"
        title={
          <>
            One shot can
            <br />
          </>
        }
        titleEm="change the match."
        paragraph="Eliminations aren't just numbers on a scoreboard. Hunt your opponent. Secure the elimination. Earn $MU. Survive, and hunt again. Your aim, your kill, your reward."
        img={six}
        alt="Scoped target spotted, 6 kills, $MU +4"
      />

      <Row
        index="06 / MULTIPLE TARGETS"
        title={
          <>
            You get the kill.
            <br />
          </>
        }
        titleEm="You get the reward."
        paragraph="Turn your FPS performance into an earning mechanic. Enter the battle, eliminate opponents, and earn $MU — every confirmed kill, every time."
        img={seven}
        alt="Multiple targets in scope, 6 kills, $MU +6"
        reverse
      />

      <Loop />
    </div>
  );
}