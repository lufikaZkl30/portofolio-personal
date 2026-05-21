import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}", // Include layouts directory
  ],
  theme: {
    extend: {
      colors: {
        background: "#030514", // Deep navy blue
        card: "rgba(10, 15, 30, 0.7)",
        primary: "#b026ff", // Neon purple
        secondary: "#00d4ff", // Neon cyan
        accent: "#ff4d8c", // Soft pink
        gold: "#ffd700", // Pixel gold
        muted: "#9898cc",
      },
      zIndex: {
        "-40": "-40",
        "-50": "-50",
      },
      fontFamily: {
        pixel: ["var(--font-press-start)"],
        sans: ["var(--font-inter)"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "blink": "blink 1s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
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
