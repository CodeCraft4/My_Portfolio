import { CustomButton } from "@muc/components";
import { Box, Grid, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <Box>
      <Grid container spacing={5}>
        <Grid item md={5}>
          <Box
            component={"img"}
            src="assets/images/project.jpg"
            sx={{
              objectFit: "cover",
              width: "100%",
              height: 700,
              borderRadius: 1,
            }}
          />
        </Grid>
        <Grid item md={7}>
          <Typography variant="h3">Me:</Typography>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            sint quod ea dolor aliquid voluptates nobis illo facere natus quam!
            Neque, recusandae ipsam perspiciatis similique voluptatem sint
            quidem fugit commodi excepturi optio. Facilis necessitatibus dicta
            natus perferendis amet velit vitae iusto at ea minima explicabo
            sapiente, adipisci hic tenetur. Tenetur aliquam porro reiciendis
            iure. Blanditiis magnam ducimus corporis voluptatibus eaque
            voluptates voluptatem dicta aspernatur. Quasi ducimus fuga, magnam
            ex, eum, distinctio necessitatibus reprehenderit nostrum quidem
            veniam modi! Quo et ipsum velit. Officiis repellendus debitis sequi
            necessitatibus iure vero hic nisi! Harum perferendis libero atque
            sed, vel obcaecati explicabo facilis quod dicta debitis, dolore nam,
            ipsam ex. Minus cumque commodi tempore quo id laboriosam suscipit,
            aperiam et rem ipsum. Ipsa aut, veniam laudantium perspiciatis
            delectus quia, repudiandae velit quae ipsam nam quod adipisci alias
            recusandae, facere tempora natus quos architecto repellendus qui?
            Voluptates quod nesciunt cumque dolor neque placeat eum unde eveniet
            labore explicabo maiores consequatur ipsam mollitia blanditiis,
            magni iure perspiciatis architecto necessitatibus dicta libero ad at
            error? Beatae, esse voluptate enim labore laboriosam ducimus nemo
            quidem ratione odio magni laudantium eaque laborum, quaerat iste in
            necessitatibus illo blanditiis hic dolor porro reprehenderit
            perspiciatis distinctio! Recusandae deserunt dignissimos omnis
            aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium eaque dolorum ab ipsam nisi voluptatibus, optio incidunt
            vero voluptate eligendi officia ad. Mollitia unde adipisci ab nihil
            dignissimos aut eius ipsam aliquam aliquid blanditiis enim repellat
            molestias, ullam consequuntur iusto, veniam laborum, corporis
            voluptates excepturi tempora. Odio placeat quo voluptate aspernatur
            sunt tenetur optio aliquid culpa aliquam rem. Tempora ratione odit
            impedit totam cupiditate suscipit quam ipsa! Laudantium quibusdam
            quas neque voluptates amet, doloremque, blanditiis, earum totam
            harum libero aliquid nam voluptatibus! Aliquid,
          </Typography>
          <Box my={2}>
            <CustomButton variant="contained" title="Download CV" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
