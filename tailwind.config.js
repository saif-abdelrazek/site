module.exports = {
  content: ["./src/**/*.{astro,html,js,ts,tsx}"],
  darkMode: "class", // Manual toggling via `saif theme dark`
  theme: {
    extend: {
      colors: {
        // Custom terminal colors (VS Code inspired)
        terminal: {
          bg: "#1E1E1E",
          text: "#10FF30",
          cursor: "#FF2E88",
          error: "#FF5555",
          header: "#333333",
        },
        // Extended palette for stats/charts
        chart: {
          blue: "#3B82F6",
          emerald: "#10B981",
          amber: "#F59E0B",
          purple: "#A855F7",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"], // Terminal font
      },
      // Animation for terminal cursor
      animation: {
        "cursor-blink": "blink 1s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // For blog prose styling
  ],
};
