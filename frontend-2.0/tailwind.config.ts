import type { Config } from "tailwindcss";

const config: Config = {
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
      fontFamily: {
        popins: ["'Poppins'", "sans-serif"],
        roboto: ["'Roboto'", "sans-serif"],
      },
      colors: {
        "new-primary": "#3545BE",
        "used-green": "#188A70",
      },
      boxShadow: {
        "neutral-shadow": "21px 2px 198px -17px rgba(229,229,229,1)",
        "button-shadow": "21px 2px 198px -17px rgba(24,138,112,1)",
      },
      borderRadius:{
        "semi-circle": "100% 100% 0px 0px"
      }
    },
  },
  plugins: [],
};
export default config;
