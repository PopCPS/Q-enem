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
      },
      backgroundImage: {
        signin: 'url(https://images.unsplash.com/photo-1602722053020-af31042989d5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        signup: 'url()',
      }
    },
  },
  plugins: [],
}
