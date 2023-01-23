/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      btnclr: "#0782F4",
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light"
  }

};
