import { COLORS } from "@muc/constants";
import {
  ArrowRightAlt,
  Email,
  FacebookOutlined,
  Instagram,
  LinkedIn,
  LocationOn,
  Phone,
  WhatsApp,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";

const myLink = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <Container maxWidth="lg" sx={{ my: 15 }}>
    <Grid
      container
      spacing={{ md: 2, sm: 2, xs: 0 }}
      sx={{
        justifyContent: "center",
        width: "100%",
        m: "auto",
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
          <Link href="https://www.facebook.com/profile.php?id=100061047846758" target="_blank">
            <IconButton sx={leftIconStyle}>
              <FacebookOutlined
                sx={{
                  color: COLORS.white.main,
                }}
              />
            </IconButton>
          </Link>
          <Link href="https://www.instagram.com/imadsshah/" target="_blank">
            <IconButton sx={leftIconStyle}>
              <Instagram
                sx={{
                  color: COLORS.white.main,
                }}
              />
            </IconButton>
          </Link>
          <Link href="https://www.linkedin.com/in/imad-sh%C3%A4h-039aa32b6/" target="_blank">
            <IconButton sx={leftIconStyle}>
              <LinkedIn
                sx={{
                  color: COLORS.white.main,
                }}
              />
            </IconButton>
          </Link>
          <Link
            href="https://wa.me/+923412764104"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton sx={leftIconStyle}>
              <WhatsApp
                sx={{
                  color: COLORS.white.main,
                }}
              />
            </IconButton>
          </Link>
        </Box>
      </Grid>

      <Grid item md={2} sm={3} xs={6}>
        <Typography variant="h3">Links</Typography>
        <List sx={{ my: 2 }}>
          {myLink.map((link) => (
            <Link
              href={link.href}
              sx={{ textDecoration: "none", color: COLORS.white.main }}
            >
              <ListItem sx={linkStyle}>
                <ArrowRightAlt /> {link.label}
              </ListItem>
            </Link>
          ))}
        </List>
      </Grid>
      <Grid item md={2} sm={3} xs={6}>
        <Typography variant="h3">Services</Typography>
        <List sx={{ my: 2 }}>
          {[
            "Web Designing",
            "Web Dev",
            "App Dev",
            "Database",
            "Custom Web",
          ].map((link) => (
            <ListItem key={link} sx={linkStyle}>
              <ArrowRightAlt /> {link}
            </ListItem>
          ))}
        </List>
      </Grid>

      <Grid item md={3} sm={3} xs={12}>
        <Typography variant="h3">Have a Questions?</Typography>
        <Box sx={{ my: 5 }}>
          {[
            { Icon: LocationOn, text: "Swat, Pakistan" },
            { Icon: Phone, text: "+(92) 341-2764104",href:'https://wa.me/+923412764104' },
            { Icon: Email, text: "shahimad499@gmail.com",href:'https://mail.google.com/mail/u/0/?ogbl#inbox' },
          ].map(({ Icon, text,href }, idx) => (
            <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{textDecoration:'none'}}
          >
            <Typography
              key={idx}
              sx={{ ...locationAddress, ...(idx === 2 && { my: 4 }) }}
            >
              <Icon sx={iconStyle} /> {text}
            </Typography>
            </Link>
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
  color:COLORS.primary.main,
  textDecoration:'none'
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
  ml: -3,
  display: "flex",
  gap: "5px",
  "&:hover": {
    color: COLORS.secondary.main,
    cursor: "pointer",
  },
};
