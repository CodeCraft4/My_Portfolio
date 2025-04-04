import { ContactCard, PackageTitle } from "@muc/components";
import { NearMe, Phone, Public, Telegram } from "@mui/icons-material";
import { Box, Container } from "@mui/material";
import ContactForm from "./components/ContactForm";

const ContactModule = () => {
  return (
    <Container maxWidth="lg">
      <PackageTitle
        title="Contact Me!"
        shadowTitle="Contact"
        id="contact"
        description={`Let's Collaborate and Make Magic Happen.`}
      />
      <Box
        sx={{
          display: {md:"flex",sm:'none',xs:'block'},
          justifyContent: {md:"space-around",sm:'center',xs:'center'},
          gap: "20px",
          alignItems: "center",
          my: 8,
        }}
      >
        {MY_CONTACT_INFO.map((e) => (
          <ContactCard poster={e.poster} title={e.title} details={e.details} />
        ))}
      </Box>
      <Box my={4}>
        <ContactForm />
      </Box>
    </Container>
  );
};

export default ContactModule;

const MY_CONTACT_INFO = [
  {
    title: "Address",
    details: "Swat, Pakistan",
    poster: <NearMe />,
  },
  {
    title: "Contact",
    details: "+(92) 341-2764104",
    poster: <Phone />,
  },
  {
    title: "Email",
    details: "shahimad499@gmail.com",
    poster: <Telegram />,
  },
  {
    title: "Website",
    details: "https://ecomevibe.com/",
    poster: <Public />,
  },
];
