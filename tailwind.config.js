const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../asset/Images/mobilebg.png')",
        aboutBg: "url('../components/About/Images/background.jpg')",
        aboutBg1: "url('../components/About/Images/background1.png')",
        bgEdu: "url('../components/Podcast/Images/bgEdu.png')"
      },
      backgroundSize: {
        "100%":"100%"
      },
      fontFamily: {
        sans: ["Clear Sans", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        b1: "500px",
        b2: "500px",
        b3: "860px"
      },
      height: {
        small: "640px"
      },
      colors: {
        darkBlack: "#171717"
      }
    },
  },
  plugins: [],

  "tailwindCSS.includeLanguages": {
    plaintext: "html",
  },
};
