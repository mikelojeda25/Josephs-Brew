export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    keyframes: {
      move: {
        "50%": {transform: "translateY(-1rem)"}
      },
      rotate: {
        "0%": {transform: "rotate(0deg)"},
        "100%": {transform: "rotate(360deg)"},
      },
      scaleUp: {
        "0%": {transform: "scale(0.8)"},
        "50%": {transform: "scale(1.2)"},
        "100%": {transform: "scale(0.8)"},
      }
    },
    animation: {
      movingY:"move 3s linear infinite",
      rotating: "rotate 15s linear infinite",
      scalingUp: "scaleUp 3s linear infinite",
    }
  },
  plugins: [],
}
