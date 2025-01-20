import { COLORS } from "@muc/constants";
import { Box, Typography } from "@mui/material";

type PackageTypes = {
  title: string;
  shadowTitle: string;
  description?: string;
};
const PackageTitle = (props: PackageTypes) => {
  const { title, shadowTitle, description } = props || {};
  return (
    <Box
      position={"relative"}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        m: "auto",
      }}
    >
      <h1
        style={{
          fontWeight: 1000,
          fontSize: "80px",
          color: COLORS.dark.darkLight,
          position: "relative",
        }}
      >
        {shadowTitle}
      </h1>
      <Typography
        variant="h1"
        sx={{
          letterSpacing: 1,
          position: "absolute",
          top: 0,
          textAlign: "center",
          width: "100%",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        sx={{ width: "90%", color: COLORS.dark.lightDark }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default PackageTitle;
