/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: { max: "820px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "821px", max: "1900px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: `1901px` },

      notsm: { min: "821px" },
    },

    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        ubuntu: ["Ubuntu Mono", "monospace"],
      },
      backdropBlur: {
        xs: "1px",
      },
      colors: {
        "lat-bg": "#1c222c",
        "lat-prim": "#ACB3BF",
      },
    },
  },
  plugins: [],
};