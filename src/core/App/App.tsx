import { ThemeProvider } from "@emotion/react";
import { Loader, Social } from "@muc/components";
import { COLORS } from "@muc/constants";
import { AppLayout } from "@muc/layout";
import {
  AboutModule,
  ContactModule,
  HomeModule,
  ProjectsModule,
  ServicesModule,
  SkillsModule,
} from "@muc/modules";
import { theme } from "@muc/styles";
import { buttonVariants, sectionVariants } from "@muc/utils";
import { ArrowUpwardOutlined } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Loader />
        </Box>
      ) : (
        <AppLayout>
          <section id="home">
            <HomeModule />
          </section>
          <Box display={{lg:'flex', md: "flex", sm: "flex", xs: "none", }}>
            <Social />
          </Box>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={sectionVariants}
          >
            <AboutModule />
          </motion.div>
          {showScrollTop && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={buttonVariants}
              style={{
                position: "fixed",
                right: 5,
                bottom: 30,
                zIndex: 999,
              }}
            >
              <Box component={"a"} href="#home">
                <IconButton
                  sx={{
                    bgcolor: {
                      md: "transparent",
                      sm: "transparent",
                      xs: COLORS.secondary.main,
                    },
                    width: "50px",
                    border:`1px solid ${COLORS.secondary.main}`,
                    height: "50px",
                    "&:hover": {
                      bgcolor: COLORS.secondary.main,
                      border: `none`,
                    },
                  }}
                >
                  <ArrowUpwardOutlined
                    sx={{ color: COLORS.white.main }}
                  />
                </IconButton>
              </Box>
            </motion.div>
          )}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={sectionVariants}
          >
            <ServicesModule />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={sectionVariants}
          >
            <SkillsModule />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={sectionVariants}
          >
            <ProjectsModule />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={sectionVariants}
          >
            <ContactModule />
          </motion.div>
        </AppLayout>
      )}
    </ThemeProvider>
  );
};

export default App;
