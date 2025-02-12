import Header from "./components/Header";
import { Box, Link } from "@mui/material";
import { CustomButton } from "@muc/components";

const HomeModule = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: { md: "flex", sm: "flex", xs: "flex" },
          m: "auto",
          gap: "20px",
          justifyContent: "center",
          position: "absolute",
          width: "100%",
          zIndex: 999,
          alignItems: "center",
        }}
      >
        <Link
          href="https://wa.me/+923412764104"
          target={"_blank"}
          sx={{
            textDecoration: "none",
            display: { md: "flex", sm: "flex", xs: "none" },
          }}
        >
          <CustomButton title="Whatsapp" variant="contained" />
        </Link>
        <Link
          href={"#projects"}
          sx={{
            textDecoration: "none",
            display: { md: "flex", sm: "flex", xs: "none" },
          }}
        >
          <CustomButton title="My works" variant="outlined" />
        </Link>
      </Box>
    </>
  );
};

export default HomeModule;
