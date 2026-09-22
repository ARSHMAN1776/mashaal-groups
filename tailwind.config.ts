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
        oxblood: {
          deep: "#190308",
          primary: "#24060C",
          secondary: "#2C0910",
          elevated: "#370C15",
          card: "#2E0A12",
        },
        cream: {
          light: "#FAF8F5",
          primary: "#F3EFE7",
          stone: "#ECE5DA",
          dark: "#E2D9CB",
        },
        accent: {
          gold: "#C5A059",
          goldLight: "#DEBF7D",
          terracotta: "#C95D4A",
          wine: "#6B1C28",
        },
        brandText: {
          ivory: "#F7F3EE",
          creamMuted: "#C5B5AE",
          burgundyMuted: "#9C857E",
          darkPrimary: "#1C1514",
          darkSecondary: "#4A403C",
          darkMuted: "#736762",
        },
      },
      fontFamily: {
        brand: ["var(--font-brand)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        editorial: ["var(--font-editorial)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Outfit", "Plus Jakarta Sans", "sans-serif"],
        serif: ["var(--font-brand)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      maxWidth: {
        corporate: "1380px",
      },
    },
  },
  plugins: [],
};

export default config;
