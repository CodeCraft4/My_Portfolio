import { COLORS } from "@muc/constants";
import { Close } from "@mui/icons-material";
import { Box, Dialog, IconButton, Link, Typography } from "@mui/material";

type ProjectModalType = {
  data: any;
  open: boolean;
  onClose: () => void;
};

const ProjectDetailsModal = (props: ProjectModalType) => {
  const { open, onClose, data } = props || {};
  console.log(data, "---");

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          height: "70vh",
          width: 1000,
          bgcolor: COLORS.dark.darkLight,
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: COLORS.secondary.main,
            borderRadius: "50px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
        },
      }}
      maxWidth="lg"
    >
      <Box position={"relative"}>
        <Box
          component={"img"}
          src={data.poster}
          sx={{
            width: "100%",
            height: 450,
            objectFit: "cover",
            filter: "brightness(60%)",
          }}
        />
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 10,
            right: 20,
            bgcolor: COLORS.dark.main,
            "&:hover": { bgcolor: COLORS.primary.main },
          }}
        >
          <Close fontSize="large" sx={{ color: COLORS.white.main }} />
        </IconButton>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            m: "auto",
            width: "100%",
            height: 450,
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h2"
            sx={{ color: COLORS.primary.main, textShadow: "1px 3px black" }}
          >
            {data?.title}
          </Typography>
          <Typography variant="h4" color={COLORS.white.main} my={{ md: 4 }}>
            {data?.category}
          </Typography>
        </Box>
        <Box p={{ md: "16px" }}>
          <Typography variant="h4" color={COLORS.white.main} fontWeight={300} fontStyle={'italic'}>
            {data.description}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              color: COLORS.primary.main,
              p: 2,
            }}
          >
            Link:
            <Link href={data.link} target="blank">{data.link}</Link>
          </Typography>
        </Box>
      </Box>
    </Dialog>
  );
};

export default ProjectDetailsModal;
