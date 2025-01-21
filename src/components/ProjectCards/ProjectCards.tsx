import { CustomButton } from "@muc/components";
import { ProjectCardStyle } from "@muc/utils";
import { Box, Typography } from "@mui/material";

type ProjectTypes = {
  title?: string;
  category?: string;
  width?: number;
  poster?: string;
  onOpenModal?: () => void;
};
const ProjectCards = (props: ProjectTypes) => {
  const { title, category, width, poster, onOpenModal } = props || {};
  return (
    <ProjectCardStyle>
      <Box className="card" sx={{ width: width }}>
        <Box
          component={"img"}
          src={poster}
          sx={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            filter: "brightness(50%)",
          }}
        />
        <Box
          className="card__content"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h3" className="card__title">
            {title}
          </Typography>
          <Typography
            variant="h6"
            fontWeight={900}
            className="card__description"
          >
            {category}
          </Typography>
          <Box my={{ md: 2 }}>
            <CustomButton
              title="View Project"
              variant="outlined"
              onClick={onOpenModal}
            />
          </Box>
        </Box>
      </Box>
    </ProjectCardStyle>
  );
};

export default ProjectCards;
