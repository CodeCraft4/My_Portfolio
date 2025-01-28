import { CustomButton } from "@muc/components";
import { COLORS } from "@muc/constants";
import { Box, Grid, List, ListItem, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <Box>
      <Grid container spacing={{ md: 5, sm: 3, xs: 0 }}>
        <Grid item md={5} sm={5} xs={12}>
          <Box
            component={"img"}
            src="assets/images/mine.JPG"
            sx={{
              objectFit: "cover",
              width: "100%",
              height: { md: 550, sm: 650, xs: 300 },
              borderRadius: 1,
              filter: "saturate(70%)",
            }}
          />
        </Grid>
        <Grid item md={7} sm={7} xs={12}>
          <Typography
            variant="h2"
            mb={{ md: 1, sm: 1, xs: 3 }}
            my={{ md: 1, sm: 0, xs: 2 }}
          >
            Hi:
          </Typography>
          <Typography
            variant="h5"
            fontSize={{ md: "16px", sm: "14px", xs: "12px" }}
            letterSpacing={"0.4px"}
          >
            I am a{" "}
            <span style={{color: COLORS.primary.main }}>
              Front-End Developer
            </span>{" "}
            with over 2+ years of experience in{" "}
            <span style={{color: COLORS.primary.main }}>
              React & React Native
            </span>{" "}
            , focused on building responsive, user-friendly websites and mobile
            apps. I enjoy turning creative ideas into functional designs that
            work smoothly on any device.
          </Typography>
          <Typography
            variant="h5"
            fontSize={{ md: "16px", sm: "14px", xs: "12px" }}
            letterSpacing={"0.4px"}
          >
            I am currently studying for a Bachelor of Science (BSc) at the
            <span style={{color: COLORS.primary.main }}>
              {" "}
              Virtual University of Pakistan
            </span>{" "}
            while continuously improving my skills in modern development tools
            and technologies. My strengths include creating interactive
            websites, landing pages, and mobile apps with clean code, intuitive
            design, and smooth animations.
          </Typography>

          <Typography
            variant="h5"
            fontSize={{ md: "18px", sm: "14px", xs: "12px" }}
            letterSpacing={"0.4px"}
            my={1}
          >
            I enjoy solving real-world problems through coding and staying
            updated with the latest trends in design and development. Whether
            it's a simple website or a complex app, I focus on making every
            project engaging, efficient, and user-focused.
          </Typography>
          <List>
            <ListItem sx={listItemStyle}>
              <Typography variant="h5">LinkedIn:</Typography>
              <Typography
                variant="h6"
                color={COLORS.primary.main}
                fontWeight={600}
              >
                Imad Shah4
              </Typography>
            </ListItem>
            <ListItem sx={listItemStyle}>
              <Typography variant="h5">Email:</Typography>
              <Typography
                variant="h6"
                color={COLORS.primary.main}
                fontWeight={600}
              >
                shahimad499@gmail.com
              </Typography>
            </ListItem>
            <ListItem sx={listItemStyle}>
              <Typography variant="h5">Phone:</Typography>
              <Typography
                variant="h6"
                color={COLORS.primary.main}
                fontWeight={600}
              >
                +(92) 341-2764104
              </Typography>
            </ListItem>
          </List>
          <Box my={2}>
            <a
              href="/assets/cv/myCV.pdf"
              download
              style={{ textDecoration: "none" }}
            >
              <CustomButton variant="contained" title="Download CV" />
            </a>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;

const listItemStyle = {
  display: "flex",
  gap: "40px",
  alignItems: "center",
  p: "2px",
};
