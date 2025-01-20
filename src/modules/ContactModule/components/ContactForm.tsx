import { CustomButton, CustomTextField } from "@muc/components";
import { COLORS } from "@muc/constants";
import { Box, Container, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

const ContactForm = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Container
        maxWidth="md"
        sx={{
          p: "32px",
          border: `1px solid ${COLORS.primary.main}`,
          borderRadius: 2,
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          m: "auto",
          display: "flex",
          flexDirection: "column",
          bgcolor: COLORS.dark.darkLight,
        }}
      >
        <Typography variant="h2" color={COLORS.primary.main}>
          Leave a message
        </Typography>
        <Typography variant="h5" pt={3} color={COLORS.dark.lightDark}>
          Ready to take your business to the next level?
        </Typography>
        <Typography variant="h5" color={COLORS.dark.lightDark}>
          Let’s collaborate and unlock new growth opportunities together!
        </Typography>
        <Box component={"form"} my={3}>
          <CustomTextField
            name="fullName"
            placeHolder="Name"
            type="text"
            width="700px"
          />
          <CustomTextField
            name="email"
            placeHolder="Email"
            type="email"
            width="700px"
          />
          <CustomTextField
            name="subject"
            placeHolder="Subject"
            type="text"
            width="700px"
          />
          <Box my={8}>
            <CustomTextField
              name="message"
              placeHolder="Message"
              type="text"
              width="700px"
              multiline={true}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <CustomButton
              title="send message"
              variant="contained"
              width="250px"
            />
          </Box>
        </Box>
      </Container>
    </FormProvider>
  );
};

export default ContactForm;
