import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        clinical: {
          ink: "#16202A",
          slate: "#2F3B46",
          blue: "#1D6FBA",
          cyan: "#22A6B8",
          sky: "#E8F4FC",
          mint: "#DFF6F2",
          amber: "#F5B84B",
          rose: "#D8526A"
        }
      },
      boxShadow: {
        soft: "0 16px 45px rgba(22, 32, 42, 0.08)"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};

export default config;
