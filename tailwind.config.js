/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eefbfb',
          100: '#d4f2f2',
          200: '#ade5e5',
          300: '#7bd2d2',
          400: '#4fbdbd',
          500: '#39aaaa',
          600: '#2c8a8a',
          700: '#276f6f',
          800: '#245959',
          900: '#204b4b',
        },
        ink: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          500: '#64748b',
          400: '#94a3b8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px 0 rgb(15 23 42 / 0.04), 0 1px 6px -1px rgb(15 23 42 / 0.06)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'fade-in-down': 'fadeInDown 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
