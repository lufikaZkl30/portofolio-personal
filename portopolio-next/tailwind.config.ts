import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030514",
        card: "rgba(10, 15, 30, 0.7)",
        primary: "#b026ff",
        secondary: "#00d4ff",
        accent: "#ff4d8c",
        gold: "#ffd700",
        muted: "#9898cc",
        cream: "#FDFBF7",
        "cream-main": "#2C3E50",
        "cream-green": "#A3C9A8",
        "cream-blue": "#A2D2FF",
        "cream-warm": "#FDE2E4",
        "cream-earth": "#D4A373",
      },
      zIndex: {
        "-40": "-40",
        "-50": "-50",
      },
      fontFamily: {
        pixel: ["var(--font-press-start)"],
        sans: ["var(--font-space-grotesk)"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 2s infinite",
        "drift": "drift 30s linear infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "spin-slow": "spin-slow 3s linear infinite",
        "blink": "blink 1s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(2deg)" },
        },
        drift: {
          "0%": { transform: "translateX(-5vw)", opacity: "0" },
          "20%": { opacity: "0.8" },
          "80%": { opacity: "0.8" },
          "100%": { transform: "translateX(105vw)", opacity: "0" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        "fade-in-up": {
          "from": { opacity: "0", transform: "translateY(30px)" },
          "to": { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          "to": { transform: "rotate(360deg)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        }
      }
    },
  },
  plugins: [],
};
export default config;
