import { Box, Typography } from "@mui/material";
import { AppLayout } from "@muc/layout";
import {
  AnalyticsCard,
  ContactCard,
  CustomButton,
  ProgressBar,
  ProjectCards,
  ServiceCard,
} from "@muc/components";
import { NearMe, Phone } from "@mui/icons-material";

const HomeModule = () => {
  return (
    <AppLayout>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint est
        eligendi eius reiciendis consectetur laboriosam optio debitis
        aspernatur, ab laudantium repellendus earum laborum sed quisquam libero
        at facere aliquam. Laudantium.
      </Typography>
      <CustomButton title="My works" variant="contained" />
      <Box sx={{ display: "flex", gap: "20px" }}>
        <ServiceCard
          title="Web Development"
          icons="assets/images/service-1.svg"
        />
        <ServiceCard
          title="App Development"
          icons="assets/images/service-2.svg"
        />
        <ServiceCard
          title="App Development"
          icons="assets/images/service-3.svg"
        />
      </Box>
      <Box width={"50%"}>
        <ProgressBar title="React(JS)" percentage={100} />
        <ProgressBar title="React Native" percentage={70} />
        <ProgressBar title="Javascript (ES6)" percentage={80} />
        <ProgressBar title="HTML" percentage={100} />
        <ProgressBar title="CSS" percentage={100} />
      </Box>
      <Box display={"flex"} gap={"30px"} flexWrap={"wrap"}>
        <ProjectCards
          title="Branding & landing UI"
          category="Web Development"
          width="410px"
        />
        <ProjectCards
          title="Make Portfolio For Yourself"
          category="Web Development"
          width="820px"
        />
        <ProjectCards
          title="Custom App for your Bussiness"
          category="App Development"
          width="820px"
        />
        <ProjectCards
          title="App Portfolio .."
          category="Web Development"
          width="410px"
        />
      </Box>
      <AnalyticsCard title="Awards" value={20} />
      <AnalyticsCard title="Completed Project" value={10} />
      <br />
      <br />
      <br />
      <ContactCard
        poster={<NearMe />}
        title="Address"
        details="Swat, Pakistan"
      />
      <ContactCard
        poster={<Phone />}
        title="Contact Number"
        details="+(92) 341-2764104"
      />
    </AppLayout>
  );
};

export default HomeModule;
