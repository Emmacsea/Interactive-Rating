/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: "hsl(25, 97%, 53%)",
        },

        neutral: {
          white: "hsl(0, 0%, 100%)",
          lightgrey: "hsl(217, 12%, 63%)",
          mediumgrey: "hsl(216, 12%, 54%)",
          darkblue: "hsl(213, 19%, 18%)",
          vdarkblue: "hsl(216, 12%, 8%)",
        }
      },

      fontFamily: {
        body: ["Overpass"],
      }
    },
  },
  plugins: [],
}