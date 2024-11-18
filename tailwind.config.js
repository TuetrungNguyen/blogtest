/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'figtree': ['Figtree', 'sans-serif'],
      },

    },

    colors:{
      'cyellow': '#f4d04e',
      'white': '#ffffff',
      'black': '#000000',
      'gray500': '#6B6B6B',
      'gray950': '#111111',
    },

    backgroundImage:{
      'avatar': "url(/images/image-avatar.webp)",
    }
  },
  plugins: [
    require('daisyui'),
  ],
}