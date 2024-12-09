import type { Config } from "tailwindcss";

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './public/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'great-vibes': ['Great Vibes', 'cursive'],
      },
      colors: {
        "custom-yellow": "#FF9F0D",
        "custom-brown": "#AF872F",
        "custom-tan": "#BC9A6C",
        "custom-light-gray": "#EDEAE3",
        "custom-dark-green": "#27AE60",
        "custom-blue": "#2F80ED",
        "custom-gold": "#E2B93B",
        "custom-red": "#EB5757",
        "custom-dark-gray": "#1E1E1E",
        "custom-gray-1": "#1D1D1D",
        "custom-light-gray-2": "#333333",
        "custom-gray-2": "#4F4F4F",
        "custom-gray-3": "#828282",
        "custom-gray-4": "#BDBDBD",
        "custom-gray-5": "#E0E0E0",
      }
    },
  },
  plugins: [],
} satisfies Config;
