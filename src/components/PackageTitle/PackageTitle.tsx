import { COLORS } from "@muc/constants";
import { Box, Typography } from "@mui/material";

type PackageTypes = {
  id?: string;
  title: string;
  shadowTitle: string;
  description?: string;
};
const PackageTitle = (props: PackageTypes) => {
  const { title, shadowTitle, description, id } = props || {};
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
      <Box
      component={'span'}
        id={id}
        sx={{
          fontWeight: 1000,
          fontSize: {md:"80px",sm:'60px',xs:'40px'},
          color: COLORS.dark.darkLight,
          position: "relative",
        }}
      >
        {shadowTitle}
      </Box>
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
