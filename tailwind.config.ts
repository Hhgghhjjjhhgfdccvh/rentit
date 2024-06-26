import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {colors: {
      customBlue: '#005D76',
      customGold:'#606060',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
      container:{
        center:true,
        padding:"15px"
      }
    },
  },
  plugins: [],
};
export default config;
