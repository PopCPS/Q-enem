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
        title: 'Julius Sans One'
      },
      colors: {
        transDark: '#3F3F3F',
        cyan: '#32ADE6',
        cyanDisabled: '#263e4a',
      },
      borderRadius: {
        '4': '4px',
      },
      backgroundImage: {
        signin: 'url(https://images.unsplash.com/photo-1602722053020-af31042989d5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        signup: 'url()',
        rainbow: 'linear-gradient(90deg, #1479B3 10%, #F9F7F8 30%, #E9B334 50%, #C61C23 70%, #98A8AF 90%)'
      },
    },
  },
  plugins: [],
}
