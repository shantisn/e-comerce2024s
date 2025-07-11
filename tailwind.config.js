/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container':'1124px',
    },
    fontFamily: {
        'dm': ["DM Sans"],
  },

  colors: {
    'primary': "262626",
    'secondary':"767676",
  },
},
  plugins: [],
  },
}

