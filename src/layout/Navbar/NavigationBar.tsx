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
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Close, DragHandle } from "@mui/icons-material";
import { COLORS } from "@muc/constants";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isTabletScreen = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Skills", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <Box sx={navStyle}>
      <Link href="/" sx={{ color: COLORS.white.main, textDecoration: "none" }}>
        <Typography variant="h2" fontSize={"35px"}>
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
            <List sx={{ p: 2, bgcolor: COLORS.dark.lightDark }}>
              {navLinks.map((link) => (
                <ListItem component="a" href={link.href}>
                  <StyledWrapper key={link.label}>
                    <Link variant="h6" href={link.href} className="menu__link">
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
              <Link variant="h6" href={link.href} className="menu__link">
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
  m: "auto",
  alignItems: "center",
  justifyContent: {
    md: "space-around",
    sm: "space-between",
    xs: "space-between",
  },
  p: 2,
};

const navLink = {
  display: "flex",
  justifyContent: "space-between",
  width: "40%",
};
