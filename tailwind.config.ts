import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" }, screens: { "2xl": "1240px" } },
    extend: {
      colors: {
        navy: { DEFAULT: "#101F36", 900: "#0B1628", 800: "#101F36", 700: "#173F72", 600: "#1E4E8C" },
        gold: { DEFAULT: "#C7A45B", 700: "#8C6E2E", 600: "#A8873F", 300: "#E2CC98", 100: "#F3EAD3" },
        ivory: "#F7F6F2",
        charcoal: "#252B35",
        rule: "#E4E0D5",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { prose: "68ch" },
      letterSpacing: { eyebrow: "0.16em" },
      boxShadow: {
        card: "0 1px 2px rgba(16,31,54,.05), 0 1px 0 rgba(16,31,54,.03)",
        raised: "0 18px 40px -22px rgba(16,31,54,.38)",
      },
      keyframes: {
        // Slide only: content is never transparent, so it is visible even if the animation never runs.
        rise: { from: { transform: "translateY(10px)" }, to: { transform: "none" } },
      },
      animation: { rise: "rise .7s cubic-bezier(.2,.7,.2,1) both" },
    },
  },
  plugins: [],
} satisfies Config;
