/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0EA5E9', // Sky blue accent
          dark: '#0284C7',
        },
        background: {
          DEFAULT: '#0A0A0A', // Near-black background
          light: '#1A1A1A',
        },
        text: {
          DEFAULT: '#F8FAFC', // Slate-50
          muted: '#94A3B8', // Slate-400
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
} 