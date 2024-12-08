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
            'border2' : '#1f1f1f',
            'subDark' : '#1A1A1A',
            'body' : '#141414',
            'second' : '#999999',
            'btn' : '#E50000',
            'button':{
                'dark':'#0F0F0F',
                'hover':'#262626',
                'delete':'#E50000',
                'view':'#054950',
                'edit':'#513893',
            }

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

