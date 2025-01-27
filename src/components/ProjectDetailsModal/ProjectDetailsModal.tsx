import { CustomButton } from "@muc/components";
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

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          height: "70vh",
          width:{md:1000,sm:1000,xs:'auto'},
          bgcolor: COLORS.dark.main,
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
            height: {md:450,sm:400,xs:300},
            objectFit: "cover",
            filter: "brightness(60%)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            m: "auto",
            width: "100%",
            height: {md:450,sm:400,xs:200},
            flexDirection: "column",
          }}
        >
           <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 10,
            right: 20,
            "&:hover": { bgcolor: COLORS.secondary.main },
          }}
        >
          <Close fontSize="large" sx={{ color: COLORS.white.main }} />
        </IconButton>
          <Typography
            variant="h2"
            sx={{ color: COLORS.primary.main, textShadow: "1px 3px black",fontSize:{md:'50px',sm:'40px',xs:'25px'} }}
          >
            {data?.title}
          </Typography>
          <Typography variant="h4" color={COLORS.white.main} my={{ md: 4,sm:4,xs:2 }}>
            {data?.category}
          </Typography>
        </Box>
        <Box
          sx={{
            p: { md: "15px" },
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            position: "relative",
            alignItems: "center",
            my:{md:0,sm:0,xs:5}
          }}
        >
          {data.Gallery.map((e:any,i:any) => (
            <Box>
              <Box
                component={"img"}
                src={e?.gallery1 || e?.gallery2 || e?.gallery3}
                sx={{
                  width: {md:e.width,sm:e.width,xs:'100%'},
                  height: 300,
                  objectFit: "cover",
                  filter: "brightness(30%)",
                  borderRadius: 2,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: i === 2 ? "45%" : 0,
                  color: COLORS.primary.main,
                  display: {md:"flex",sm:'flex',xs:'none'},
                  justifyContent: "center",
                  alignItems: "center",
                  height: 300,
                  textAlign: "center",
                  m: "auto",
                  width: e.width,
                  flexDirection:'column'
                }}
              >
                <Typography variant="h3">{e.title}</Typography>
                <Typography variant="h5" my={1} color={COLORS.white.main} width={'80%'}>{e.description}</Typography>
              </Box>
            </Box>
          ))}

          <Link href={data.link} target={'_blank'} sx={{textDecoration:'none'}}>
           <CustomButton variant="contained" title="Visit" width="200px"/>
          </Link>
        </Box>
      </Box>
    </Dialog>
  );
};

export default ProjectDetailsModal;
