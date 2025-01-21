import { COLORS } from "@muc/constants";
import { Box, Typography } from "@mui/material";

type ContactCardType = {
  title: string;
  details: string;
  poster: any;
};
const ContactCard = (props: ContactCardType) => {
  const { title, details, poster } = props || {};
  return (
    <Box
      sx={{
        width: 200,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: 80,
          height: 80,
          borderRadius: 50,
          bgcolor: COLORS.dark.darkLight,
          color: COLORS.secondary.main,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          m: "auto",
          mb: 2,
          fontSize: "30px",
          "&:hover": {
            bgcolor: COLORS.secondary.main,
            color: COLORS.white.main,
          },
        }}
      >
        {poster}
      </Box>
      <Typography variant="h4">{title.toUpperCase()}</Typography>
      <Typography variant="h5" my={1} color={COLORS.dark.lightDark}>
        {details}
      </Typography>
    </Box>
  );
};

export default ContactCard;
