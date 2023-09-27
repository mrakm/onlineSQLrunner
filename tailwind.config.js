const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      primary: "#0047D1",
      secondary: "#202124",
      background: "#FFFFFF",
      white: "#ffffff",
      text: "#202124",
      subText: "#5F6368",
      border: "#d3dce6",
      codebg: "#F5F5F5",
      outputbg: "#F9FAFC",
      tableHeader:"#F7FAFF",
      black:"#000",
      dark: {
        primary: "#8AB4F8",
        secondary: "#E8EAED",
        background: "#202124",
        text: "#E8EAED",
        subText: "#BDC1C6",
        border: "#5F6368",
      },
    },
    extend: {},
  },
  plugins: [],
};
export default config;
