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
      <Box sx={{ display: "flex", gap: "30px", width: "100%", my: 8 }}>
        <Box width={{ md: "50%" }}>
          <ProgressBar title="React" percentage={100} />
          <ProgressBar title="Next (JS)" percentage={90} />
          <ProgressBar title="Javascript (ES6)" percentage={80} />
          <ProgressBar title="Node" percentage={65} />
          <ProgressBar title="Firebase" percentage={90} />
          <ProgressBar title="Bootstrap (css)" percentage={100} />
          <ProgressBar title="Material UI" percentage={100} />
          <ProgressBar title="Chakra UI" percentage={80} />
          <ProgressBar title="HTML" percentage={100} />
        </Box>
        <Box width={{ md: "50%" }}>
          <ProgressBar title="React Native" percentage={100} />
          <ProgressBar title="Vue (JS)" percentage={80} />
          <ProgressBar title="Typescript" percentage={90} />
          <ProgressBar title="Mongo(DB)" percentage={70} />
          <ProgressBar title="Tailwind (css)" percentage={100} />
          <ProgressBar title="Mantine UI" percentage={100} />
          <ProgressBar title="Ant Design UI" percentage={80} />
          <ProgressBar title="CSS" percentage={100} />
        </Box>
      </Box>
    </Container>
  );
};

export default SkillsModule;
