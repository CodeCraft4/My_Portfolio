import { PackageTitle, ProgressBar } from "@muc/components";
import { Box, Container } from "@mui/material";

const SkillsModule = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 3 }}>
      <PackageTitle
        title="My Skills"
        shadowTitle="Skills"
        id="skills"
        description={`Unlocking the treasure chest of my skills, a voyage that stretches far and wide,
         beyond the boundaries of the known world.`}
      />
      <Box
        sx={{
          display: { md: "flex", sm: "flex", xs: "block" },
          gap: "30px",
          width: "100%",
          my: 8,
        }}
      >
        <Box width={{ md: "50%", sm: "50%", xs: "100%" }}>
          <ProgressBar title="React.js" percentage={80} />
          <ProgressBar title="Next.js" percentage={75} />
          <ProgressBar title="Javascript (ES6)" percentage={80} />
          <ProgressBar title="Node" percentage={65} />
          <ProgressBar title="Firebase / Mongo db" percentage={80} />
          <ProgressBar title="Bootstrap / Tailwind (css)" percentage={90} />
        </Box>
        <Box width={{ md: "50%", sm: "50%", xs: "100%" }}>
          <ProgressBar title="React Native" percentage={80} />
          <ProgressBar title="Vue.js" percentage={65} />
          <ProgressBar title="Typescript" percentage={80} />
          <ProgressBar title="Git + Github" percentage={75} />
          <ProgressBar title="HTML / CSS" percentage={90} />
          <ProgressBar title="Material / Mantine UI" percentage={90} />
        </Box>
      </Box>
    </Container>
  );
};

export default SkillsModule;
