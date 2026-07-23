/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0284C7", // bright blue — was dark navy
          gold: "#FFC93C", // bright yellow-orange — was muted gold
          red: "#FF4757", // vivid coral-red — CTA buttons
        },
      },
      fontFamily: {
        serif: ["Georgia", "ui-serif", "serif"],
      },
    },
  },
  plugins: [],
}
