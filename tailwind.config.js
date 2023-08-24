/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--text-color)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--fill-color)",
          indicator: "var(--fill-color-indicator)",
        },
      },
      // gradientColorStops: {
      //   skin: {
      //     hue: "var(--fill-color)",
      //   },
      // },
    },
  },
  plugins: [],
};
