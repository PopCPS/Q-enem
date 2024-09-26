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
        cyan: '#32ADE6',
      },
      borderRadius: {
        '4': '4px',
      }
    },
  },
  plugins: [],
}
