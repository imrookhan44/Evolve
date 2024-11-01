/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        activeItemBg: ['rgba(255, 255, 255, 0.06)'],
        activeMenuItemBorderBottom: ["linear-gradient(90deg, #8952E0 0%, #642EFF 100%)"]
      },
      fontFamily: {
        inter: ['Inter'],
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
}