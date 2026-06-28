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
          deep: "#C20066", // ciemniejszy do tekstu — WCAG AA (~5.9:1 na białym)
        },
        purple: {
          DEFAULT: "#8B3FE8",
        },
        red: {
          DEFAULT: "#FB3B2F",
        },
        orange: {
          DEFAULT: "#FF6B2B",
          light: "#FFAB82",
        },
        brand: {
          bg: "#FFFFFF",
          "bg-subtle": "#F7F7F8",
          card: "#FFFFFF",
          border: "#ECECEE",
          text: "#0E0E10",
          body: "#3F3F46",
          muted: "#71717A",
          dark: "#0E0E10",
        },
      },
      fontFamily: {
        sans: ["Outfit Variable", "Outfit", "sans-serif"],
      },
      backgroundImage: {
        "gradient-magenta": "linear-gradient(160deg, #F7087F 0%, #8B3FE8 100%)",
        "gradient-orange": "linear-gradient(160deg, #FB3B2F 0%, #FF8A3D 100%)",
        "gradient-brand": "linear-gradient(135deg, #F7087F 0%, #FF6B2B 100%)",
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
