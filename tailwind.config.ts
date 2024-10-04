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
          background: "#151415",
          border: "#1E1E1E",
          foreground: "#131213",
          text: "#ffffff",
        },
        light: {
          background: "#ffffff",
          border: "",
          foreground: "#DEDEDEFF",
          text: "#09090b",
        },
      },
    },
  },
  plugins: [],
};
export default config;
