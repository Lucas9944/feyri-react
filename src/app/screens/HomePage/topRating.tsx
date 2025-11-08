import React from "react";
import { Container, Stack, Box, Button, TextField } from "@mui/material";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import { Rating } from "react-simple-star-rating";
import EmailIcon from "@mui/icons-material/Email";

export function TopRating() {
  return (
    <div className="top_frame">
      <Container>
        <Stack
          flexDirection={"column"}
          display="flex"
          alignItems={"center"}
          justifyContent="space-evenly"
          style={{ height: "1300px" }}
        >
          <Stack className="wrapp_card_joy_rating">
            <Typography
              component="h1"
              style={{
                fontWeight: "bold",
                fontSize: "34px",
                marginTop: "50px",
                marginLeft: "10px",
              }}
            >
              TOP RATING
            </Typography>
            <Stack className="card_joy_rating" direction="row" spacing={2}>
              <CssVarsProvider>
                <Stack
                  className="wrapp_product_rating"
                  direction="row"
                  spacing={2}
                >
                  <Card
                    sx={{
                      height: "310px",
                      width: 200,
                      borderRadius: "none",
                      border: "none",
                    }}
                  >
                    <CardCover>
                      <img src="/interior/with_food.png" alt="" />
                    </CardCover>
                    <CardCover sx={{}} />
                    <CardContent sx={{ justifyContent: "flex-end" }} />
                  </Card>
                  <Box className={"product_price_rating"}>
                    <p>Linen Beach Towel</p>
                    <Rating size={25} />
                    <Typography>30$</Typography>
                  </Box>
                </Stack>

                <Stack
                  className="wrapp_product_rating"
                  direction="row"
                  spacing={2}
                >
                  <Card
                    sx={{
                      height: "310px",
                      width: 200,
                      borderRadius: "none",
                      border: "none",
                    }}
                  >
                    <CardCover>
                      <img src="/interior/seat.png" alt="" />
                    </CardCover>
                    <CardCover sx={{}} />
                    <CardContent sx={{ justifyContent: "flex-end" }} />
                  </Card>
                  <Box className={"product_price_rating"}>
                    <p>Linen Beach Towel</p>
                    <Rating size={25} />
                    <Typography>30$</Typography>
                  </Box>
                </Stack>
                <Stack
                  className="wrapp_product_rating"
                  direction="row"
                  spacing={2}
                >
                  <Card
                    sx={{
                      height: "310px",
                      width: 200,
                      borderRadius: "none",
                      border: "none",
                    }}
                  >
                    <CardCover>
                      <img src="/interior/glass.png" alt="" />
                    </CardCover>
                    <CardCover sx={{}} />
                    <CardContent sx={{ justifyContent: "flex-end" }} />
                  </Card>
                  <Box className={"product_price_rating"}>
                    <p>Linen Beach Towel</p>
                    <Rating size={25} />
                    <Typography>30$</Typography>
                  </Box>
                </Stack>
              </CssVarsProvider>
            </Stack>
            <Stack className="card_joy_rating" direction="row" spacing={2}>
              <CssVarsProvider>
                <Stack
                  className="wrapp_product_rating"
                  direction="row"
                  spacing={2}
                >
                  <Card
                    sx={{
                      height: "310px",
                      width: 200,
                      borderRadius: "none",
                      border: "none",
                    }}
                  >
                    <CardCover>
                      <img src="/interior/with_food.png" alt="" />
                    </CardCover>
                    <CardCover sx={{}} />
                    <CardContent sx={{ justifyContent: "flex-end" }} />
                  </Card>
                  <Box className={"product_price_rating"}>
                    <p>Linen Beach Towel</p>
                    <Rating size={25} />
                    <Typography>30$</Typography>
                  </Box>
                </Stack>

                <Stack
                  className="wrapp_product_rating"
                  direction="row"
                  spacing={2}
                >
                  <Card
                    sx={{
                      height: "310px",
                      width: 200,
                      borderRadius: "none",
                      border: "none",
                    }}
                  >
                    <CardCover>
                      <img src="/interior/seat.png" alt="" />
                    </CardCover>
                    <CardCover sx={{}} />
                    <CardContent sx={{ justifyContent: "flex-end" }} />
                  </Card>
                  <Box className={"product_price_rating"}>
                    <p>Linen Beach Towel</p>
                    <Rating size={25} />
                    <Typography>30$</Typography>
                  </Box>
                </Stack>
                <Stack
                  className="wrapp_product_rating"
                  direction="row"
                  spacing={2}
                >
                  <Card
                    sx={{
                      height: "310px",
                      width: 200,
                      borderRadius: "none",
                      border: "none",
                    }}
                  >
                    <CardCover>
                      <img src="/interior/glass.png" alt="" />
                    </CardCover>
                    <CardCover sx={{}} />
                    <CardContent sx={{ justifyContent: "flex-end" }} />
                  </Card>
                  <Box className={"product_price_rating"}>
                    <p>Linen Beach Towel</p>
                    <Rating size={25} />
                    <Typography>30$</Typography>
                  </Box>
                </Stack>
              </CssVarsProvider>
            </Stack>
            <Stack className="card_joy_rating" direction="row" spacing={2}>
              <CssVarsProvider>
                <Stack
                  className="wrapp_product_rating"
                  direction="row"
                  spacing={2}
                >
                  <Card
                    sx={{
                      height: "310px",
                      width: 200,
                      borderRadius: "none",
                      border: "none",
                    }}
                  >
                    <CardCover>
                      <img src="/interior/with_food.png" alt="" />
                    </CardCover>
                    <CardCover sx={{}} />
                    <CardContent sx={{ justifyContent: "flex-end" }} />
                  </Card>
                  <Box className={"product_price_rating"}>
                    <p>Linen Beach Towel</p>
                    <Rating size={25} />
                    <Typography>30$</Typography>
                  </Box>
                </Stack>

                <Stack
                  className="wrapp_product_rating"
                  direction="row"
                  spacing={2}
                >
                  <Card
                    sx={{
                      height: "310px",
                      width: 200,
                      borderRadius: "none",
                      border: "none",
                    }}
                  >
                    <CardCover>
                      <img src="/interior/seat.png" alt="" />
                    </CardCover>
                    <CardCover sx={{}} />
                    <CardContent sx={{ justifyContent: "flex-end" }} />
                  </Card>
                  <Box className={"product_price_rating"}>
                    <p>Linen Beach Towel</p>
                    <Rating size={25} />
                    <Typography>30$</Typography>
                  </Box>
                </Stack>
                <Stack
                  className="wrapp_product_rating"
                  direction="row"
                  spacing={2}
                >
                  <Card
                    sx={{
                      height: "310px",
                      width: 200,
                      borderRadius: "none",
                      border: "none",
                    }}
                  >
                    <CardCover>
                      <img src="/interior/glass.png" alt="" />
                    </CardCover>
                    <CardCover sx={{}} />
                    <CardContent sx={{ justifyContent: "flex-end" }} />
                  </Card>
                  <Box className={"product_price_rating"}>
                    <p>Linen Beach Towel</p>
                    <Rating size={25} />
                    <Typography>30$</Typography>
                  </Box>
                </Stack>
              </CssVarsProvider>
            </Stack>
          </Stack>
          <Button
            style={{
              marginBottom: "50px",
              height: "51px",
              width: "371px",
              cursor: "pointer",
              color: "white", // Tugma rangi
              backgroundColor: "black", // Qo'shimcha: tugma fon rangi
              borderRadius: "0px",
            }}
          >
            load more products
          </Button>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={"space-between"}
          className="wrapp_input_email"
        >
          <Box width="40%">
            <Typography
              component="h2"
              style={{ fontWeight: "bold", fontSize: "28px", color: "black" }}
            >
              SIGN UP FOR THE NEWSLETTER
            </Typography>

            <Typography style={{ fontSize: "18px", color: "black" }}>
              Subscribe for the latest stories and promotions
            </Typography>
          </Box>
          <Stack
            direction="row"
            spacing={2}
            width="600px"
            justifyContent="space-between"
            alignItems="center"
          >
            <TextField
              placeholder="Enter your e-mail address"
              variant="outlined"
              InputProps={{
                style: {
                  height: "50px",
                  width: "517px",
                  color: "gray",
                  fontSize: "16px",
                  borderRadius: "0px",
                },
              }}
            />
            <Button
              style={{
                height: "50px",
                width: "85px",
                backgroundColor: "black",
                color: "white",
                cursor: "pointer",
                borderRadius: "0px",
              }}
              variant="contained"
              startIcon={
                <EmailIcon style={{ color: "white", marginLeft: "10px" }} />
              }
            ></Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}