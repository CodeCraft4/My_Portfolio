import { CustomButton } from "@muc/components";
import { COLORS } from "@muc/constants";
import { Box, Typography } from "@mui/material";

const AvailableInfo = () => {
  return (
    <Box
      sx={{
        padding: { md: "45px", sm: "40px", xs: "20px" },
        width:'100%',
        bgcolor: COLORS.secondary.main,
        height: { md: 450, sm: 400, xs: "auto" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        my: 14,
      }}
    >
      <Box
        component={"h1"}
        sx={{
          fontSize: { md: "60px", sm: "50px", xs: "30px" },
          fontWeight: 1000,
        }}
      >
        I a'm <span style={{ color: COLORS.dark.main }}>Available</span> For
        Freelancing
      </Box>
      <Typography
        variant="h6"
        width={{ md: "60%", sm: "80%", xs: "100%" }}
        mb={2}
        color={COLORS.dark.darkLight}
        fontWeight={600}
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
