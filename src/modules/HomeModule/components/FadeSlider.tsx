import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import { COLORS, SLIDER_DATA } from "@muc/constants";

const FadeSlider = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <Box
      sx={{
        width: 1600,
        height: "100vh",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="slider-container"
    >
      <Slider {...settings}>
        {SLIDER_DATA?.map((e, key) => (
          <Box my={25} key={key}>
            <Typography variant="h1" lineHeight={"100px"} letterSpacing={1}>
              I a'm
              <span style={{ color: COLORS.primary.main, fontWeight: "900" }}>
                {" "}
                {e.title}
              </span>
            </Typography>
            <Typography variant="h3">{e.library}</Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default FadeSlider;
