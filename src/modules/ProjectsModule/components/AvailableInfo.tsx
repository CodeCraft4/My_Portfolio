import { CustomButton } from "@muc/components";
import { COLORS } from "@muc/constants";
import { Box, Typography } from "@mui/material";

const AvailableInfo = () => {
  return (
    <Box
      sx={{
        padding: "45px",
        bgcolor: COLORS.secondary.main,
        height: 450,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        my: 14,
      }}
    >
      <h1 style={{ fontSize: "60px", fontWeight: 1000 }}>
        I a'm <span style={{ color: COLORS.dark.main }}>Available</span>{" "}
        For Freelancing
      </h1>
      <Typography
        variant="h5"
        width={"60%"}
        mb={2}
        color={COLORS.dark.darkLight}
      >
        Embracing the spirit of Duden's tranquil river, I bring a constant flow
        of creativity, infusing projects with the vital essence of innovation
        and design.
      </Typography>
      <CustomButton title="Hire me" variant="contained" />
    </Box>
  );
};

export default AvailableInfo;
