import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: "#f1f5fd",
          100: "#e3ebfa",
          400: "#3b82f6",
          500: "#1d4ed8",
          600: "#1e3a8a",
          700: "#243b73",
          800: "#1a2c57",
          900: "#0f1d42",
          950: "#081226",
        },
        gold: {
          50: "#eff6ff",
          100: "#dbeafe",
          400: "#60a5fa",
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#1e40af",
        },
        cream: {
          DEFAULT: "#f3f7fe",
          soft: "#fbfdff",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        rounded: ["var(--font-baloo)", "sans-serif"],
        geist: ["var(--font-geist)", "sans-serif"],
      },
      backgroundImage: {
        "diamond-pattern":
          "repeating-linear-gradient(45deg, transparent, transparent 8px)",
      },
    },
  },
  plugins: [],
};

export default config;
