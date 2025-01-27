import { Box } from "@mui/material";
import FadeSlider from "./FadeSlider";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  const videos = [
    "https://media.istockphoto.com/id/1200745393/video/abstract-display-with-endless-rows-of-cells-with-numbers-that-changing-constantly-on-black.mp4?s=mp4-640x640-is&k=20&c=mSfVdBEAWrorXibUBLHYTdATEum_zFBz5Dm_twPCmIo=",
    "https://media.istockphoto.com/id/91833708/video/numbers-and-data.mp4?s=mp4-640x640-is&k=20&c=yRjzFXYUUyJv4ZTI-qo1YVBdIQkfVHCTgUEFiYYHpjI=",
    "https://media.istockphoto.com/id/1394876713/video/technology-digital-big-data-connection-digital-cyberspace-digital-data-network-and-blockchain.mp4?s=mp4-640x640-is&k=20&c=RDTFtgW6hgC-d7EjrXXWX2VEnFFmVE-7LP9QgIUZzKw=",
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <Box sx={{ my: -10, zIndex: -999, position: "relative", width: "100%" }}>
      {videos.map((videoUrl, index) => (
        <Box
          key={index}
          component="video"
          src={videoUrl}
          autoPlay
          loop
          muted
          sx={{
            objectFit: "cover",
            width: "100%",
            height: {md:750,sm:500,xs:400},
            filter: "brightness(20%)",
            position: "relative",
            display: currentVideo === index ? "block" : "none",
          }}
        />
      ))}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: {xl:0,lg:-100,md:-100,sm:0,xs:30},
          display:{md:"flex",sm:'flex',xs:'block'},
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
