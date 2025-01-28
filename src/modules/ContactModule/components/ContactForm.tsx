import { CustomButton, CustomTextField } from "@muc/components";
import { COLORS } from "@muc/constants";
import { Box, Container, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const methods = useForm();
  const onSendMessage = (data: any) => {
    emailjs
      .send(
        "service_6ig75c9",
        "template_dg5i0n8",
        {
          fullName: data.fullName,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        "TNqygeT5sEUgkm8bO"
      )
      .then(
        (response: any) => {
          console.log("Message sent successfully:", response);
        },
        (error: any) => {
          console.error("Failed to send message:", error);
        }
      );
      methods.reset({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
  };

  return (
    <FormProvider {...methods}>
      <Container
        maxWidth="md"
        sx={{
          p: { md: "32px", sm: "30px", xs: "15px" },
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
        <Typography
          variant="h2"
          fontSize={{ md: "50px", sm: "40px", xs: "20px" }}
          color={COLORS.primary.main}
          textAlign={"center"}
        >
          Leave a message
        </Typography>
        <Typography
          variant="h5"
          fontSize={{ md: "18px", sm: "16px", xs: "15px" }}
          pt={3}
          color={COLORS.dark.lightDark}
        >
          Ready to take your business to the next level?
        </Typography>
        <Typography
          variant="h5"
          fontSize={{ md: "18px", sm: "16px", xs: "15px" }}
          color={COLORS.dark.lightDark}
        >
          Let’s collaborate and unlock new growth opportunities together!
        </Typography>
        <Box
          component={"form"}
          my={3}
          onSubmit={methods.handleSubmit(onSendMessage)}
        >
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
              title="Send Message"
              variant="contained"
              width="250px"
              type="submit"
            />
          </Box>
        </Box>
      </Container>
    </FormProvider>
  );
};

export default ContactForm;
