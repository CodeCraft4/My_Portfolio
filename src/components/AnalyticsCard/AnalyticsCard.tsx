import { COLORS } from "@muc/constants";
import { AnalyticCardStyle } from "@muc/utils";
import { Box, Typography } from "@mui/material";

type AnalyticTypes = {
  value: number;
  title: string;
};

const AnalyticsCard = (props: AnalyticTypes) => {
  const { title, value } = props || {};
  return (
    <Box sx={AnalyticCardStyle}>
      <Typography variant="h2" color={COLORS.primary.main}>
        {value}
      </Typography>
      <Typography variant="h5" fontSize={{md:'18px',sm:'15px',xs:'auto'}} my={2}>
        {title}
      </Typography>
    </Box>
  );
};

export default AnalyticsCard;
