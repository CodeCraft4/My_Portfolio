import Header from "./components/Header";
import { Box } from "@mui/material";
import { CustomButton } from "@muc/components";

const HomeModule = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          m: "auto",
          gap: "20px",
          justifyContent: "center",
          position: "absolute",
          bottom: 150,
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
