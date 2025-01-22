import { ThemeProvider } from "@emotion/react";
import { Social } from "@muc/components";
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
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppLayout>
        <section id="home">
          <HomeModule />
        </section>
        <Box display={{ md: "flex", sm: "flex", xs: "none" }}>
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
    </ThemeProvider>
  );
};

export default App;
