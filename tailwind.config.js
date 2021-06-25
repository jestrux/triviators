module.exports = {
  // mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1b2637"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
