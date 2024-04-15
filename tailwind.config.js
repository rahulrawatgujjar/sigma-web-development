/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      screens: {
        // Add additional breakpoints as needed
        'custom': '500px', // Custom breakpoint
        'custom2': '1200px', // Another custom breakpoint
      },
    },
  },
  plugins: [],
}

