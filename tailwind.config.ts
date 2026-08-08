import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#12141C",
        paper: "#FAF8F2",
        navy: {
          DEFAULT: "#0F1A3C",
          50: "#EEF0F6",
          100: "#D4D9E8",
          400: "#3A4A82",
          600: "#1B2A5E",
          700: "#141F49",
          900: "#0A1330",
        },
        gold: {
          DEFAULT: "#C79A46",
          light: "#E6C784",
          dark: "#9C7728",
        },
        teal: {
          DEFAULT: "#0E6E5A",
          light: "#E4F1EC",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        ledger:
          "repeating-linear-gradient(to bottom, transparent, transparent 39px, rgba(199,154,70,0.15) 40px)",
      },
      boxShadow: {
        seal: "0 0 0 1px rgba(199,154,70,0.35), 0 20px 40px -20px rgba(15,26,60,0.4)",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;