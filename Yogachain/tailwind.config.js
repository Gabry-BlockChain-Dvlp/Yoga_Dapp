/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yoga: {
          dark: '#097969',
          light: '#ECFFDC',
          accent: '#8A9A5B',
          bg: '#0f172a',
          surface: '#1e293b',
          border: '#334155',
        },
      },
      backgroundColor: {
        dark: '#0f172a',
      },
    },
  },
  plugins: [],
}
