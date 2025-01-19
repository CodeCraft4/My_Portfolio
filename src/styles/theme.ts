import { COLORS } from "@muc/constants";
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          fontWeight: 600,
          borderRadius: 50,
          padding: "12px 28px ",
          textTransform: "none",
          height: "56px",
          whiteSpace: "nowrap",
          letterSpacing: 1,
          [theme.breakpoints.down("sm")]: {
            fontSize: "14px",
            height: "35px",
            width: "auto",
          },
        },
        contained: {
          backgroundColor: COLORS.primary.main,
          boxShadow: "none",
          height: "50px",
          color: COLORS.dark.main,
          "&:hover": {
            backgroundColor: COLORS.primary.main,
            boxShadow: "none",
          },
          "&.Mui-disabled": {
            backgroundColor: COLORS.dark.lightDark,
            color: "white",
            opacity: 0.6,
          },
        },
        outlined: {
          border: `1px solid ${COLORS.white.main}`,
          color: COLORS.white.main,
          backgroundColor: "transparent",
          boxShadow: "none",
          height: "50px",
          "&:hover": {
            border: `1px solid ${COLORS.white.main}`,
            backgroundColor: `transparent`,
            boxShadow: "none",
          },
          "&.Mui-disabled": {
            borderColor: COLORS.dark.lightDark,
            color: "black",
            opacity: 0.6,
            backgroundColor: "transparent",
          },
        },
      },
      defaultProps: {
        disableRipple: false,
      },
    },
  },
};
