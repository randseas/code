import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: "#09090b",
          foreground: "#141416",
          text: "#ffffff",
        },
        light: {
          background: "#ffffff",
          foreground: "#DEDEDEFF",
          text: "#09090b",
        },
      },
    },
  },
  plugins: [],
};
export default config;
