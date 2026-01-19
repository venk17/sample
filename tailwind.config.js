/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },

      colors: {
        "slate-indigo": {
          50: "#ebecf9",
          100: "#d8d9f3",
          200: "#b0b3e8",
          300: "#898ddc",
          400: "#6267d0",
          500: "#3b42c4",
          600: "#2f349d",
          700: "#232776",
          800: "#171a4f",
          900: "#0c0d27",
          950: "#08091b",
        },
      },
    },
  },
  plugins: [],
};
