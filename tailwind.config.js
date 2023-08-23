/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          50: '#F9F9F9',
          100: '#F3F3F3',
          200: '#FFEDDB',
          300: '#EDCDBB',
          400: '#E3B7A0',
          500: '#BF9270',
          600: '#8F6C4A',
          700: '#5F4624',
          800: '#2F2100',
        },
        accent: {
          600: '#556b1f',
          700: '#3f4b14',
          800: '#2a340e',
          900: '#151a07',
        },
      },
    },
  },
  plugins: [],
}
