/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        PT: ["'PT Serif'", "serif"],
      },
      listStyleType: {
        circle: "circle",
      },
      screens: {
        md_lg: "980px",
      },
    },
  },
  plugins: [],
};
