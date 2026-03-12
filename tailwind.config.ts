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
        brand: {
          saffron: "#D97706", // Main Orange
          earth: "#14532D",   // Dark Green
          peach: "#F9Dcc4",   // Light Peach background from mockup
          beige: "#f5ebe0",   // Alternative soft background
          cream: "#FDF2F2",
        }
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-primary)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
