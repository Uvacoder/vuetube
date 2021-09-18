module.exports = {
  mode: "jit",
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        one: "#002500",
        two: "#003D00",
        three: "#41594E",
        four: "#82899B",
        five: "#8AA6B3",
        six: "#91C2CA",
        seven: "#8BBCD0",
        eight: "#B4D2E7",
        nine: "#D3E2ED",
        ten: "#F2F2F2"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
};
