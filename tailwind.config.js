/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter',
      },
      colors: {
        transDark: '#3F3F3F',
      },
      borderRadius: {
        '4': '4px',
      }
    },
  },
  plugins: [],
}
