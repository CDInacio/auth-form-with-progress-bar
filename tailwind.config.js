const colors = require("tailwindcss/colors");

module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#BC6C25",
      primaryDark: "#904D11",
    },

    extend: {
      backgroundImage: {
        hero: "url('/hero.jpg')",
      },
      fontFamily: {
        pinyon: ["Pinyon Script", "cursive"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        white: colors.white,
        slate: colors.slate,
        gray: colors.gray,
        zinc: colors.zinc,
        neutral: colors.neutral,
        stone: colors.stone,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yelllow: colors.yelllow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,

        zIndex: {
          100: "100",
          "-100": "-100",
        },
      },
    },
  },
  plugins: [],
};
