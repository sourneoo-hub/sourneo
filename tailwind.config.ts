import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        accent: {
          DEFAULT: "#059669",
          hover: "#047857",
          muted: "#ECFDF5",
          soft: "#D1FAE5",
        },
        ink: {
          DEFAULT: "#0A0A0A",
          secondary: "#525252",
          tertiary: "#737373",
          muted: "#A3A3A3",
        },
        line: "#E5E5E5",
        surface: "#F8FAF9",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-sm": [
          "1.875rem",
          { lineHeight: "1.15", letterSpacing: "-0.03em", fontWeight: "600" },
        ],
        "display-md": [
          "2.75rem",
          { lineHeight: "1.1", letterSpacing: "-0.035em", fontWeight: "600" },
        ],
        "display-lg": [
          "3.5rem",
          { lineHeight: "1.05", letterSpacing: "-0.04em", fontWeight: "600" },
        ],
      },
      maxWidth: {
        content: "72rem",
      },
      spacing: {
        section: "4.5rem",
        "section-md": "6rem",
        "section-lg": "7.5rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)",
        "card-hover":
          "0 2px 4px rgba(0,0,0,0.04), 0 12px 28px rgba(5,150,105,0.12)",
        nav: "0 1px 0 rgba(0,0,0,0.06)",
      },
      borderRadius: {
        card: "1.25rem",
        btn: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
