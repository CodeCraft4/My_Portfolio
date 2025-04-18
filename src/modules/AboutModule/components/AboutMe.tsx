import { CustomButton } from "@muc/components";
import { COLORS } from "@muc/constants";
import { Box, Grid, List, ListItem, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <Box>
      <Grid container spacing={{md:5,sm:3,xs:0}}>
        <Grid item md={5} sm={5} xs={12}>
          <Box
            component={"img"}
            src="assets/images/mine.jpg"
            sx={{
              objectFit: "cover",
              width: "100%",
              height: { md: 700, sm: 800, xs: 300 },
              borderRadius: 1,
              filter: "saturate(0%)",
            }}
          />
        </Grid>
        <Grid item md={7} sm={7} xs={12}>
          <Typography variant="h2" mb={{ md: 1, sm: 1, xs: 3 }}>
            Hi:
          </Typography>
          <Typography variant="h5" fontSize={{md:'18px',sm:'14px',xs:'auto'}} letterSpacing={"0.4px"}>
            I a'm a{" "}
            <span style={{ color: COLORS.primary.main, fontWeight: 600 }}>
              Front-End Developer
            </span>{" "}
            passionate about crafting responsive & animated &{" "}
            <span style={{ color: COLORS.primary.main, fontWeight: 600 }}>
              user-friendly
            </span>{" "}
            interfaces for{" "}
            <span style={{ color: COLORS.primary.main, fontWeight: 600 }}>
              web
            </span>{" "}
            and{" "}
            <span style={{ color: COLORS.primary.main, fontWeight: 600 }}>
              mobile platforms
            </span>
            . I thrive on turning creative ideas into functional and visually
            engaging digital solutions. With a deep interest in design and
            technology, I focus on creating clean, intuitive, and accessible
            user experiences. Currently learning a Bachelor of Science (BSc) at
            the{" "}
            <span style={{ color: COLORS.primary.main, fontWeight: 600 }}>
              Virtual University of Pakistan
            </span>
            , I combine academic learning with a hands-on approach to mastering
            modern development tools and technologies. I have a keen interest in{" "}
            {""}
            <span style={{ color: COLORS.primary.main, fontWeight: 600 }}>
              Web & Mobile App
            </span>{" "}
            development, particularly in building interactive websites, landing
            pages, and functional applications that solve real-world problems.
            My technical skills encompass{" "}
            <span style={{ color: COLORS.primary.main, fontWeight: 600 }}>
              front-end frameworks
            </span>
            , state management libraries, and{" "}
            <span style={{ color: COLORS.primary.main, fontWeight: 600 }}>
              UI/UX design
            </span>{" "}
            principles, enabling me to create seamless and efficient digital
            products. Whether it’s a simple landing page or a complex
            application, I aim to ensure an engaging and smooth experience for
            every user. Beyond coding, I am passionate about continuous learning
            and enjoy exploring{" "}
            <span style={{ color: COLORS.primary.main, fontWeight: 600 }}>
              new tools & technologies
            </span>
            , and design trends to stay updated in the fast-paced world of
            front-end development. I believe that attention to detail and a
            user-centered approach are essential to building impactful solutions
            that leave a lasting impression.
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
            <CustomButton variant="contained" title="Download CV" />
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
