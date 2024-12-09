/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["jost", "san-serif"],
      },
      backgroundImage: {
        vitaminC: "url('./src/assets/ingredients/vitaminC.png')",
        vitaminB3: "url('./src/assets/ingredients/vitaminB3.png')",
        Magnesium: "url('./src/assets/ingredients/Magnesium.png')",
        hyaluronic: "url('./src/assets/ingredients/hyarulonicacid.png')",
        lactobacillus: "url('./src/assets/ingredients/lactobaciellus.png')",
        jellybee: "url('./src/assets/jellybee.jpg')",
        capsule: "url('./src/assets/capsule.jpg')",
      },
    },
  },
  plugins: [],
};
