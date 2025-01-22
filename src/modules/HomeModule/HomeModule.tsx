import Header from "./components/Header";
import { Box } from "@mui/material";
import { CustomButton } from "@muc/components";

const HomeModule = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: {md:"flex",sm:'flex',xs:'none'},
          m: "auto",
          gap: "20px",
          justifyContent: "center",
          position: "absolute",
          bottom: {md:150,sm:200,xs:'auto'},
          width: "100%",
          zIndex: 999,
        }}
      >
        <CustomButton title="Hire Me" variant="contained" />
        <CustomButton title="My works" variant="outlined" />
      </Box>
    </>
  );
};

export default HomeModule;
