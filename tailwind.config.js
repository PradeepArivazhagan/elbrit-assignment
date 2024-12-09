/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["jost", "san-serif"],
      },
      backgroundImage: {
        vitaminC: "url('https://i.ibb.co/9sV5LmX/vitaminC.png')",
        vitaminB3: "url('https://i.ibb.co/4WBpPMS/vitamin-B3.png')",
        Magnesium: "url('https://i.ibb.co/tPp3Nhw/Magnesium.png')",
        hyaluronic: "url('https://i.ibb.co/4gbtsDy/hyarulonicacid.png')",
        lactobacillus: "url('https://i.ibb.co/hFytzjZ/lactobaciellus.png')",
        jellybee: "url('https://i.ibb.co/BnBk3s9/jellybee.jpg')",
        capsule: "url('https://i.ibb.co/Fmd62g8/capsule.jpg')",
      },
    },
  },
  plugins: [],
};
