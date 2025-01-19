import { createTheme } from "@mui/material";

export let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ["poppins", "sans-serif"].join(","),
    h1: {
      fontWeight: 900,
      fontSize: "60px",
      lineHeight: "42px",
      marginBottom: "5px",
    },
    h2: {
      fontWeight: 800,
      fontSize: "50px",
      lineHeight: "30px",
      letterSpacing: "0.0015em",
      textAlign: "left",
    },
    h3: {
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "28px",
      letterSpacing: "0.0015em",
    },
    h4: {
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "21px",
    },
    h5: {
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "29px",
    },
    h6: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "23px",
    },
    body1: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
});

theme = {
  ...theme,
  components: {},
};
