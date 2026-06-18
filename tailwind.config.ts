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
        magenta: {
          DEFAULT: "#F7087F",
          light: "#FF5AAD",
          dim: "#FFB3D1",
        },
        orange: {
          DEFAULT: "#FF6B2B",
          light: "#FFAB82",
        },
        brand: {
          bg: "#FAFAF8",
          "bg-alt": "#F5F0EB",
          card: "#FFFFFF",
          text: "#1A1118",
          muted: "#5C4D58",
          light: "#9B8A96",
          dark: "#1E0A14",
          "dark-card": "#2D1020",
        },
      },
      fontFamily: {
        sans: ["Outfit Variable", "Outfit", "sans-serif"],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #F7087F 0%, #FF6B2B 100%)",
        "gradient-warm": "linear-gradient(160deg, #FFE4F0 0%, #FFF8F0 50%, #FAFAF8 100%)",
        "gradient-dark": "linear-gradient(135deg, #3D0A2A 0%, #1E0A14 100%)",
      },
      animation: {
        "blob1": "blobFloat1 22s ease-in-out infinite",
        "blob2": "blobFloat2 28s ease-in-out infinite 4s",
        "blob3": "blobFloat3 18s ease-in-out infinite 8s",
        "blob-rotate": "blobRotate 20s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
