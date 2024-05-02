/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#014177",
      },
      keyframes: {
        "shake-and-pause": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "rotate(-3deg)" },
          "20%, 40%, 60%, 80%": { transform: "rotate(3deg)" },
          "95%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        "shake-and-pause": "shake-and-pause 1.4s ease-in-out 2",
      },
      fontFamily: {
        inherit: "inherit",
        headings: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
    },
  },
};
