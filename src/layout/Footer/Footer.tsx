import { COLORS } from "@muc/constants";
import {
  ArrowRightAlt,
  Email,
  FacebookOutlined,
  Instagram,
  LinkedIn,
  LocationOn,
  Phone,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";

const Footer = () => (
  <Container maxWidth="lg">
    <Grid
      container
      spacing={{ md: 2, sm: 2, xs: 0 }}
      sx={{
        justifyContent: "center",
        width: '100%',
        m: "auto",
        my: 10,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid item md={5} sm={6} xs={12}>
        <Typography variant="h3">About</Typography>
        <Box sx={{ my: 5, width: { md: "80%", sm: "70%", xs: "100%" } }}>
          <Typography variant="h5">
            Passionate web developer with a flair for design and crafting
            exceptional digital experiences.
          </Typography>
        </Box>
        <Box
          sx={{
            my: 2,
            display: { md: "flex", sm: "flex", xs: "none" },
            gap: "4px",
          }}
        >
          <IconButton sx={leftIconStyle}>
            <FacebookOutlined
              sx={{
                color: COLORS.white.main,
              }}
            />
          </IconButton>
          <IconButton sx={leftIconStyle}>
            <Twitter
              sx={{
                color: COLORS.white.main,
              }}
            />
          </IconButton>
          <IconButton sx={leftIconStyle}>
            <Instagram
              sx={{
                color: COLORS.white.main,
              }}
            />
          </IconButton>
          <IconButton sx={leftIconStyle}>
            <LinkedIn
              sx={{
                color: COLORS.white.main,
              }}
            />
          </IconButton>
          <IconButton sx={leftIconStyle}>
            <WhatsApp
              sx={{
                color: COLORS.white.main,
              }}
            />
          </IconButton>
        </Box>
      </Grid>

      {["Links", "Services"].map((title) => (
        <Grid key={title} item md={2} sm={3}>
          <Typography variant="h3">{title}</Typography>
          <List sx={{ my: 2 }}>
            {["Home", "About", "Services", "Projects", "Contact"].map(
              (link) => (
                <ListItem key={link} sx={linkStyle}>
                  <ArrowRightAlt /> {link}
                </ListItem>
              )
            )}
          </List>
        </Grid>
      ))}

      <Grid item md={3} sm={3} xs={12}>
        <Typography variant="h3">Have a Questions?</Typography>
        <Box sx={{ my: 5 }}>
          {[
            { Icon: LocationOn, text: "Swat, Pakistan" },
            { Icon: Phone, text: "+(92) 341-2764104" },
            { Icon: Email, text: "shahimad499@gmail.com" },
          ].map(({ Icon, text }, idx) => (
            <Typography
              key={idx}
              sx={{ ...locationAddress, ...(idx === 2 && { my: 4 }) }}
            >
              <Icon sx={iconStyle} /> {text}
            </Typography>
          ))}
        </Box>
      </Grid>
    </Grid>
  </Container>
);

export default Footer;

const locationAddress = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  mb: 1,
  letterSpacing: "1px",
};

const iconStyle = { color: COLORS.secondary.main };
const leftIconStyle = {
  borderRadius: 50,
  bgcolor: COLORS.dark.darkLight,
  height: "50px",
  width: "50px",
  "&:hover": {
    bgcolor: COLORS.secondary.main,
  },
};

const linkStyle = {
  ml: -2,
  display: "flex",
  gap: "5px",
  "&:hover": {
    fontWeight: 800,
    color: COLORS.secondary.main,
    cursor: "pointer",
  },
};
