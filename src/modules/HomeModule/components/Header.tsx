import { Box } from "@mui/material";
import FadeSlider from "./FadeSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  return (
    <Box sx={{ my: -10, zIndex: -999, position: "relative", width: "100%" }}>
      <Box
        component={"img"}
        src="assets/images/project.jpg"
        sx={{
          objectFit: "cover",
          width: "100%",
          height: 700,
          filter: "brightness(20%)",
          position: "relative",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
          m: "auto",
        }}
      >
        <FadeSlider />
      </Box>
    </Box>
  );
};

export default Header;
