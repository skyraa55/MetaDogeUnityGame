/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#060B14",
          soft: "#0A1120",
          panel: "#0E1728",
          panel2: "#121F33",
          line: "#1E2C42",
        },
        mu: {
          yellow: "#22D3EE",
          yellowDim: "#0E5A6B",
          green: "#2DD4BF",
          greenDim: "#0F5C52",
          purple: "#3B82F6",
          purpleDim: "#1E3A70",
          grey: "#8B9AB3",
        },
        paper: "#EAF2FF",
      },
      fontFamily: {
        display: ["Orbitron", "sans-serif"],
        body: ["Rajdhani", "sans-serif"],
        mono: ["Share Tech Mono", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(244,245,247,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(244,245,247,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "42px 42px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        flicker: {
          "0%, 100%": { opacity: 1 },
          "45%": { opacity: 1 },
          "46%": { opacity: 0.4 },
          "47%": { opacity: 1 },
          "72%": { opacity: 1 },
          "73%": { opacity: 0.5 },
          "74%": { opacity: 1 },
        },
        killfeed: {
          "0%": { transform: "translateX(30px)", opacity: 0 },
          "8%": { transform: "translateX(0)", opacity: 1 },
          "85%": { transform: "translateX(0)", opacity: 1 },
          "100%": { transform: "translateX(0)", opacity: 0 },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.5 },
          "50%": { opacity: 1 },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        rise: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        scan: "scan 3.2s linear infinite",
        flicker: "flicker 5s linear infinite",
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite",
        floatY: "floatY 6s ease-in-out infinite",
        rise: "rise 0.7s cubic-bezier(.16,.84,.44,1) both",
      },
    },
  },
  plugins: [],
};
