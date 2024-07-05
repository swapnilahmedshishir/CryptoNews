/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'headline': ['DM Serif Display', 'serif'],
      },
    },
  },
  plugins: [],
}
