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
      [`@media (max-width:960px)`]: {
        fontSize: "50px",
      },
      [`@media (max-width:600px)`]: {
        fontSize: "35px",
      },
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
          padding: "12px 35px ",
          textTransform: "none",
          height: "56px",
          whiteSpace: "nowrap",
          letterSpacing: 1,
          marginBottom:2,
          [theme.breakpoints.down("sm")]: {
            fontSize: "14px",
            height: "45px",
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

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 1,
          height: 44,
          color: COLORS.white.main,
          border: `transparent`,
          borderBottom: `1px solid ${COLORS.dark.lightDark}`,
          backgroundColor: COLORS.dark.darkLight,
          borderBottomLeftRadius: 6,
          borderBottomRightRadius: 6,
          background: "transparent",
          "& fieldset": {
            padding: "12px 16px",
            border: `transparent`,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: `transparent`,
          },
          "&.Mui-focused fieldset": {
            border: `transparent`,
          },
          "& input::placeholder": {
            color: COLORS.white.main,
            opacity: 0.4,
          },
          "& input:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px transparent inset",
            transition: "background-color 5000s ease-in-out 0s",
          },
          "& input:-webkit-autofill:focus": {
            WebkitBoxShadow: "0 0 0 100px transparent inset",
            borderColor: COLORS.primary.main,
          },
          "& input:hover": {
            border: `transparent`,
          },
          "& input:focus": {
            border: `transparent`,
          },
        },
      },
    },
  },
};
