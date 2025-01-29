import { PackageTitle, ServiceCard } from "@muc/components";
import { MY_SERVICES } from "@muc/constants";
import { Box, Container } from "@mui/material";

const ServicesModule = () => {
  return (
    <Container maxWidth="lg">
      <PackageTitle
        title="Services"
        shadowTitle="Services"
        id="services"
        description={`Discover my services that take you on a journey far beyond the ordinary, transcending borders and linguistic barriers, like an adventure in
             the distant realms beyond Vokalia and Consonantia.`}
      />
      <Box
        sx={{
          display: {
            xl: "flex",
            lg: "flex",
            md: "flex",
            sm: "flex",
            xs: "block",
          },
          justifyContent: "space-between",
          flexWrap: 'wrap'
        }}
      >
        {MY_SERVICES.map((data) => (
          <ServiceCard key={data.id} title={data.title} icons={data.poster} />
        ))}
      </Box>
    </Container>
  );
};

export default ServicesModule;
