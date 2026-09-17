import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: "#fdf2f2",
          100: "#fce8e8",
          400: "#881337",
          500: "#650000",
          600: "#3d0000",
          700: "#2a0808",
          800: "#160202",
          900: "#110101",
          950: "#0d0000",
        },
        gold: {
          50: "#fef9f1",
          100: "#fde8cf",
          400: "#f5a000",
          500: "#f5a000",
          600: "#c47f00",
          700: "#9a6400",
        },
        cream: {
          DEFAULT: "#f7f3ea",
          soft: "#fafafa",
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
