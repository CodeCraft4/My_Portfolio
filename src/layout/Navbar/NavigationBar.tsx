import { StyledWrapper } from "@muc/utils";
import {
  Box,
  Link,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Close, DragHandle } from "@mui/icons-material";
import { COLORS } from "@muc/constants";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isTabletScreen = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Set sticky navbar
      setSticky(scrollTop > 100);

      // Update active link
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;

        if (
          scrollTop >= offsetTop - 50 &&
          scrollTop < offsetTop + offsetHeight - 50
        ) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        ...navStyle,
        position: sticky ? "fixed" : "static",
        top: 0,
        bgcolor: sticky ? "rgba(0,0,0,0.9)" : "transparent",
        borderBottom: sticky
          ? `0.2px solid ${COLORS.dark.darkLight}`
          : "transparent",
        boxShadow: sticky ? "0 4px 6px rgba(0,0,0,0.1)" : "none",
        transition: "all 0.3s ease",
        zIndex: 9999,
        width:'100%'
      }}
    >
      <Link
        href="#home"
        sx={{ color: COLORS.white.main, textDecoration: "none" }}
      >
        <Typography
          variant="h2"
          fontSize={{ md: "35px", sm: "30px", xs: "20px" }}
        >
          Imad Shah
        </Typography>
      </Link>

      {isMobileScreen || isTabletScreen ? (
        <>
          <IconButton onClick={toggleDrawer(true)}>
            <DragHandle sx={{ color: COLORS.white.main }} fontSize="large" />
          </IconButton>

          {/* Drawer for mobile/tablet Screens */}
          <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
            <List
              sx={{
                p: 2,
                bgcolor: COLORS.dark.darkLight,
                my: sticky ? 10 : 0,
                mb: sticky ? 0 : 0,
              }}
            >
              {navLinks.map((link) => (
                <ListItem component="a" href={link.href} key={link.label}>
                  <StyledWrapper>
                    <Link
                      variant="h6"
                      href={link.href}
                      className="menu__link"
                      onClick={toggleDrawer(false)}
                      sx={{
                        color:
                          activeLink === link.label.toLowerCase()
                            ? COLORS.primary.main
                            : COLORS.white.main,
                      }}
                    >
                      {link.label}
                    </Link>
                  </StyledWrapper>
                </ListItem>
              ))}
              <IconButton
                sx={{ position: "absolute", top: 5, right: 10 }}
                onClick={toggleDrawer(false)}
              >
                <Close sx={{ color: COLORS.primary.main }} />
              </IconButton>
            </List>
          </Drawer>
        </>
      ) : (
        // pc or large screen
        <Box sx={navLink}>
          {navLinks.map((link) => (
            <StyledWrapper key={link.label}>
              <Link
                variant="h6"
                href={link.href}
                className="menu__link"
                sx={{
                  color:
                    activeLink === link.label.toLowerCase()
                      ? COLORS.primary.main
                      : COLORS.white.main,
                }}
              >
                {link.label}
              </Link>
            </StyledWrapper>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default NavigationBar;

const navStyle = {
  display: "flex",
  zIndex: 999,
  alignItems: "center",
  justifyContent: {
    md: "space-around",
    sm: "space-between",
    xs: "space-between",
  },
  p: 2,
  width: "100%",
};

const navLink = {
  display: "flex",
  justifyContent: "space-between",
  width: "40%",
};
