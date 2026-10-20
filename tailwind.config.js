/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAF7F1",
        "paper-2": "#F2EADC",
        "paper-3": "#EADFCB",
        ink: "#0B0A08",
        "ink-soft": "#4C453B",
        "ink-mute": "#7A7265",
        maroon: "#5C1220",
        "maroon-deep": "#3A0A13",
        gold: "#9A7B3F",
        "gold-light": "#C9A96A",
        line: "#E2D7C3",
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "-apple-system", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "Menlo", "monospace"],
      },
      letterSpacing: {
        mega: "0.34em",
        wide2: "0.18em",
      },
      transitionTimingFunction: {
        silk: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%) skewX(-18deg)" },
          "100%": { transform: "translateX(220%) skewX(-18deg)" },
        },
      },
      animation: {
        marquee: "marquee 42s linear infinite",
        "spin-slow": "spinSlow 26s linear infinite",
        shimmer: "shimmer 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
