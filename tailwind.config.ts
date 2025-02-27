import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "var(--secondary)",
        background: "(var(--background))",
        foreground: "(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        montserrat: "var(--font-montserrat)",
      },
      fontSize: {
        "hero-heading": "var(--hero-heading)",
        "about-heading": "var(--about-heading)",
        "scroll-heading": "var(--scroll-heading)",
        "course-heading": "var(--course-heading)",
        "review-subtitle": "var(--review-subtitle)",
        "blog-heading": "var(--blog-heading)",
        "footer-subheading": "var(--footer-subheading)",
        "footer-scrolltext": "var(--footer-scrolltext)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        marquee: "marquee 60s linear infinite",
        "marquee-reverse": "marqueeReverse 60s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
