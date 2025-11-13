/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        midnight: '#0b1220',
        lagoon: '#1f3d6d',
        aurora: '#37b7c3',
        lilac: '#a855f7',
      },
      boxShadow: {
        glow: '0 20px 80px rgba(56, 189, 248, 0.25)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(0deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}