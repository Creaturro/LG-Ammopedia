/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lg-green': {
          light: '#0e7f3f',
          DEFAULT: '#0d7339',
          dark: '#086d33',
          darker: '#0c661f',
          darkest: '#163322',
        },
        'lg-yellow': '#dad321',
        'lg-mint': '#7ad9ab',
      },
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
