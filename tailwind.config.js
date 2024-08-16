/** @type {import('tailwindcss').Config} */

const colorClasses = ["black", "white"];

module.exports = {
  content: ["./src/**/*.{html,js}"],
  safelist: [...colorClasses.map((color) => `bg-${color}`)],
  theme: {
    extend: {},
  },
  plugins: [],
};
