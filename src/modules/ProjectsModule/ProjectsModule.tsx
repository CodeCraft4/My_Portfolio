import {
  AnalyticsCard,
  CustomButton,
  PackageTitle,
  ProjectCards,
} from "@muc/components";
import { Box, Container } from "@mui/material";
import AvailableInfo from "./components/AvailableInfo";
import { MY_ANALYTIC } from "@muc/constants";

const ProjectsModule = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <PackageTitle
          title="My Projects"
          shadowTitle="Projects"
          description={`Embarking on exciting adventures into the world of innovation, where curiosity has no limits.`}
        />
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            flexWrap: "wrap",
            my: 6,
          }}
        >
          <ProjectCards
            title="E-Commerce Store"
            category="E-WEBSITE"
            width="400px"
          />
          <ProjectCards
            title="Chatting Application"
            category="SOCIAL APP"
            width="800px"
          />
          <ProjectCards
            title="Pizza Delivery"
            category="DELIVERY APP"
            width="800px"
          />
          <ProjectCards
            title="GYM WORKOUT"
            category="TRAINING WEBSITE"
            width="400px"
          />
          <ProjectCards
            title="Course Academy"
            category="LEARNING WEB"
            width="400px"
          />
          <ProjectCards
            title="Workout Tips"
            category="WORKOUT APP"
            width="800px"
          />
          <Box sx={{ display: "flex", m: "auto", my: 2 }}>
            <CustomButton
              title="Check All Projects"
              variant="contained"
              width="350px"
            />
          </Box>
        </Box>
      </Container>
      <Box position={"relative"}>
        <AvailableInfo />
        <Box
          sx={{
            position: "absolute",
            top: -70,
            width: "100%",
            display: "flex",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {MY_ANALYTIC.map((data) => (
            <AnalyticsCard
              key={data.id}
              title={data.title}
              value={data.value}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectsModule;
