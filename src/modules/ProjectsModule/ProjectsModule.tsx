import {
  AnalyticsCard,
  CustomButton,
  PackageTitle,
  ProjectCards,
  ProjectDetailsModal,
} from "@muc/components";
import { Box, Container } from "@mui/material";
import AvailableInfo from "./components/AvailableInfo";
import { MY_ANALYTIC, MY_PROJECTS } from "@muc/constants";
import { UseModal } from "@muc/hooks";
import { useState } from "react";

const ProjectsModule = () => {
  const {
    open: openModal,
    openModal: onOpenModal,
    onCloseModal: onCloseModal,
  } = UseModal();

  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project: any) => {
    setSelectedProject(project);
    onOpenModal();
  };

  return (
    <Box>
      <Container maxWidth="lg">
        <PackageTitle
          title="My Projects"
          shadowTitle="Projects"
          id="projects"
          description={`Embarking on exciting adventures into the world of innovation, where curiosity has no limits.`}
        />
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            flexWrap: "wrap",
            my: 6,
            justifyContent:'center',
          }}
        >
          {MY_PROJECTS.map((e) => (
            <ProjectCards
              key={e.id}
              poster={e.poster}
              title={e.title}
              category={e.category}
              width={e.width}
              onOpenModal={() => handleOpenModal(e)}
            />
          ))}
          <Box
            sx={{ display: "flex", m: "auto", my: 2,textDecoration:'none' }}
            component={"a"}
            href="https://github.com/CodeCraft4"
            target="_blank"
          >
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
            display: {md:"flex",sm:'flex',xs:'none'},
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
      {openModal && selectedProject && (
        <ProjectDetailsModal
          open={openModal}
          onClose={onCloseModal}
          data={selectedProject}
        />
      )}
    </Box>
  );
};

export default ProjectsModule;
