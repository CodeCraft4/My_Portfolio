import { PackageTitle } from "@muc/components";
import { Box, Container } from "@mui/material";
import AboutMe from "./components/AboutMe";

const AboutModule = () => {
  return (
    <Container maxWidth="lg">
      <Box my={10}>
        <PackageTitle title="About Me" shadowTitle="About Me" id="about"/>
        <AboutMe />
      </Box>
    </Container>
  );
};

export default AboutModule;
