/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        fondoHeaderMobile:
          'url("./src/assets/images/mobile/image-hero.jpg")',
        fondoHeaderDesktop:
          'url("./src/assets/images/desktop/image-hero.jpg")',
      },
      colors: {
        // Primary
        White: "hsl(0, 0%, 100%)",
        Black: "hsl(0, 0%, 0%)",
        DarkGray: "hsl(0, 0%, 55%)",
        VeryDarkGray: "hsl(0, 0%, 41%)",
      },
      fontFamily: {
        Alata: "'Alata', sans-serif",
        JosefinSans: "'Josefin Sans', sans-serif",
      },
    },
  },
  plugins: [],
};

