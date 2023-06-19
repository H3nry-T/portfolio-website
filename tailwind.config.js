/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        slideUpAndFade: "slideUpAndFade 0.4s ease-in-out",
        slideFromRight: "slideFromRight 0.3s ease-in-out",
        bounceSide: "bounceSide 0.9s ease-in-out infinite",
        spinSlow: "spin 2.5s ease-in infinite",
        wiggle: "wiggle 0.5s ease-in-out infinite",
      },
      keyframes: {
        slideUpAndFade: {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideFromRight: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        bounceSide: {
          "0%, 100%": {
            transform: "translateX(25%)",
          },
          "50%": {
            transform: "translateX(0)",
          },
        },
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-1deg)",
          },
          "50%": {
            transform: "rotate(1deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
