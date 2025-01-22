import { ServiceCardStyle } from "@muc/utils";
import { Box, Typography } from "@mui/material";

type cardTypes = {
  icons: string;
  title: string;
};
const ServiceCard = (props: cardTypes) => {
  const { title, icons } = props || {};
  return (
    <Box sx={ServiceCardStyle}>
      <Box
        sx={{
          p: "42px",
          "&:hover": {
            filter: "invert(1)",
            transition:'0.5s'
          },
        }}
      >
        <Box component={"img"} src={icons} width={80} height={80} />
        <Typography variant="h5" sx={{ my: 1, letterSpacing: 1.5 }}>
          {title}
        </Typography>
        <span style={{ width: "10%" }}>____</span>
      </Box>
    </Box>
  );
};

export default ServiceCard;
