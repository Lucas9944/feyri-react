import { Container, Stack, Box, Typography, Button, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

export function LoadProducts() {
  return (
    <section className="products_frame">
      <Container maxWidth="lg">
        {/* LOAD MORE */}
        <Stack alignItems="center">
          <Button className="load_more_btn">
            LOAD MORE PRODUCTS
          </Button>
        </Stack>

        {/* NEWSLETTER */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          className="wrapp_input_email"
        >
          <Box className="newsletter_text">
            <Typography component="h2" className="newsletter_title">
              SIGN UP FOR THE NEWSLETTER
            </Typography>

            <Typography className="newsletter_subtitle">
              Subscribe for the latest stories and promotions
            </Typography>
          </Box>

          <Stack
            direction="row"
            spacing={2}
            className="newsletter_form"
          >
            <TextField
              placeholder="Enter your e-mail address"
              variant="outlined"
              fullWidth
              InputProps={{
                style: {
                  height: "50px",
                  fontSize: "16px",
                  borderRadius: "0px",
                },
              }}
            />
           <Button className="email_btn">
  <EmailIcon className="email_icon" />
</Button>

          </Stack>
        </Stack>
      </Container>
    </section>
  );
}
