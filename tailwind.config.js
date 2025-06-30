/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#DCFCE7',
          100: '#BBF7D0',
          400: '#22C55E',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
        }
      },
      fontFamily: {
        'sans': ['Quicksand', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}