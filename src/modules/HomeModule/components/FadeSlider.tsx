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
    arrows: false,
  };
  return (
    <Box
      sx={{
        width: { md: 1600, sm: 800, xs: 320 },
        height: "100vh",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="slider-container"
    >
      <Slider {...settings}>
        {SLIDER_DATA?.map((e, key) => (
          <Box my={{ md: 35, sm: 20, xs: 20 }} key={key}>
            <Typography
              variant="h4"
              fontSize={{ md: "20px", sm: "18px", xs: "16px" }}
              color={COLORS.primary.main}
              letterSpacing={1}
            >
              Hello World!
            </Typography>
            <Typography
              variant="h1"
              fontSize={{ md: "60px", sm: "40px", xs: "25px" }}
              lineHeight={{ md: "100px", sm: "60px", xs: "30px" }}
              letterSpacing={1}
            >
              {key === 1 ? "A" : key === 2 ? "And" : ` I a'm`}
              <span
                style={{
                  color: COLORS.primary.main,
                  fontWeight: "900",
                  textShadow: `2px 4px 1px ${COLORS.dark.darkLight}`,
                }}
              >
                {" "}
                {e.title}.
              </span>
            </Typography>
            <Typography
              variant="h3"
              fontSize={{ md: "25px", sm: "20px", xs: "14px" }}
            >
              {e.library}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default FadeSlider;
