/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "!./src/**/*.test.{js,ts,jsx,tsx}",
    "!./src/**/*.spec.{js,ts,jsx,tsx}",
    "!./src/**/*.stories.{js,ts,jsx,tsx}",
    "!./src/**/*.d.ts",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} 