/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {
        colors:{
            'bg' : '#1A1A1A',
            'border' : '#262626',
            'subBg' : '#1D5B61',
            'main' : '#054950',
            'dark' : '#0F0F0F',
            'subDark' : '#1A1A1A',
            'body' : '#141414',
            'second' : '#999999',
            'btn' : '#E50000',
        },
        fontFamily:{
            'interTight': ['Inter Tight', 'sans-serif'],
            'poppins': ['Poppins', 'sans-serif'],
            'manrope': ['Manrope', 'sans-serif'],
        }
    },
  },
  plugins: [],
}

