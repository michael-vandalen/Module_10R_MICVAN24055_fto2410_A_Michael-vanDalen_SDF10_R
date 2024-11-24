/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "380px",
      },
      boxShadow: {
        customShadow: "0px 1px 4px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
