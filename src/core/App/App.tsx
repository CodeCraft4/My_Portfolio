import { ThemeProvider } from "@emotion/react";
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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppLayout>
        <Box id="home">
          <HomeModule />
        </Box>
        <Box id="about">
          <AboutModule />
        </Box>
        <Box id="services">
          <ServicesModule />
        </Box>
        <Box id="skills">
          <SkillsModule />
        </Box>
        <Box id="projects">
          <ProjectsModule />
        </Box>
        <Box id="contact">
          <ContactModule />
        </Box>
      </AppLayout>
    </ThemeProvider>
  );
};

export default App;
