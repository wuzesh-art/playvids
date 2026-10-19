import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#050509",
        surface: {
          DEFAULT: "#14141F",
          "2": "#1B1B29",
          "3": "#222232",
        },
        line: {
          DEFAULT: "rgba(255,255,255,.08)",
          strong: "rgba(255,255,255,.14)",
        },
        ink: {
          DEFAULT: "#F4F4F8",
          secondary: "#A7A7BC",
          muted: "#6C6C85",
        },
        accent: {
          lime: "#A3E635",
          amber: "#FBBF24",
          pink: "#F472B6",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        card: "10px",
        panel: "14px",
        box: "20px",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(120deg,#7C3AED,#A855F7 40%,#22D3EE)",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-8px)" },
          "40%": { transform: "translateX(8px)" },
          "60%": { transform: "translateX(-6px)" },
          "80%": { transform: "translateX(6px)" },
        },
      },
      animation: {
        shake: "shake .4s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
