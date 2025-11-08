import React from "react";


import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import { Rating } from "react-simple-star-rating";

export function TopCosmetic() {
  return (
    <div className="interior_frame">
      <Container>
        <Stack
          flexDirection={"column"}
          display="flex"
          alignItems={"center"}
          justifyContent="space-evenly"
          style={{ height: "1200px" }}
        >
          <Stack className="card_joy">
            <CssVarsProvider>
              <Card
                sx={{
                  minHeight: "566px",
                  width: 306,
                  borderRadius: "none",
                  border: "none",
                  borderTop: "100px",
                }}
              >
                <CardCover>
                  <img src="/home/green_interior.jpeg" loading="lazy" alt="" />
                </CardCover>
              </Card>
              <Stack className="wrapp_product">
                {" "}
                <Card
                  sx={{
                    minHeight: "422px",
                    width: 306,
                    borderRadius: "none",
                    border: "none",
                    // border: "2px solid red",
                  }}
                >
                  <CardCover>
                    <img src="/interior/sochiq.png" alt="" />
                  </CardCover>
                  <CardCover sx={{}} />
                  <CardContent
                    sx={{ justifyContent: "flex-end" }}
                  ></CardContent>
                </Card>
                <Box className={"product_price"}>
                  <p>Linen Beach Towel</p>
                  <Rating size={25} />
                  <Typography>30$</Typography>
                </Box>
              </Stack>
              <Stack className="wrapp_product">
                {" "}
                <Card
                  sx={{
                    minHeight: "422px",
                    width: 306,
                    borderRadius: "none",
                    border: "none",
                  }}
                >
                  <CardCover>
                    <img src="/interior/tarelka.png" alt="" />
                  </CardCover>
                  <CardCover sx={{}} />
                  <CardContent
                    sx={{ justifyContent: "flex-end" }}
                  ></CardContent>
                </Card>
                <Box className={"product_price"}>
                  <p>Linen Beach Towel</p>
                  <Rating size={25} />
                  <Typography>30$</Typography>
                </Box>
              </Stack>

              <Stack className="wrapp_product">
                {" "}
                <Card
                  sx={{
                    minHeight: "422px",
                    width: 306,
                    borderRadius: "none",
                    border: "none",
                  }}
                >
                  <CardCover>
                    <img src="/interior/savat.png" alt="" />
                  </CardCover>
                  <CardCover sx={{}} />
                  <CardContent
                    sx={{ justifyContent: "flex-end" }}
                  ></CardContent>
                </Card>
                <Box className={"product_price"}>
                  <p>Linen Beach Towel</p>
                  <Rating size={25} />
                  <Typography>30$</Typography>
                </Box>
              </Stack>
            </CssVarsProvider>
          </Stack>

          <Stack className="card_joy_2">
            <CssVarsProvider>
              <Stack className="wrapp_product">
                {" "}
                <Card
                  sx={{
                    minHeight: "422px",
                    width: 306,
                    borderRadius: "none",
                    border: "none",
                  }}
                >
                  <CardCover>
                    <img src="/interior/sochiq.png" alt="" />
                  </CardCover>
                  <CardCover sx={{}} />
                  <CardContent
                    sx={{ justifyContent: "flex-end" }}
                  ></CardContent>
                </Card>
                <Box className={"product_price"}>
                  <p>Linen Beach Towel</p>
                  <Rating size={25} />
                  <Typography>30$</Typography>
                </Box>
              </Stack>
              <Stack className="wrapp_product">
                {" "}
                <Card
                  sx={{
                    minHeight: "422px",
                    width: 306,
                    borderRadius: "none",
                    border: "none",
                  }}
                >
                  <CardCover>
                    <img src="/interior/tarelka.png" alt="" />
                  </CardCover>
                  <CardCover sx={{}} />
                  <CardContent
                    sx={{ justifyContent: "flex-end" }}
                  ></CardContent>
                </Card>
                <Box className={"product_price"}>
                  <p>Linen Beach Towel</p>
                  <Rating size={25} />
                  <Typography>30$</Typography>
                </Box>
              </Stack>

              <Stack className="wrapp_product">
                {" "}
                <Card
                  sx={{
                    minHeight: "422px",
                    width: 306,
                    borderRadius: "none",
                    border: "none",
                  }}
                >
                  <CardCover>
                    <img src="/interior/savat.png" alt="" />
                  </CardCover>
                  <CardCover sx={{}} />
                  <CardContent
                    sx={{ justifyContent: "flex-end" }}
                  ></CardContent>
                </Card>
                <Box className={"product_price"}>
                  <p>Linen Beach Towel</p>
                  <Rating size={25} />
                  <Typography>30$</Typography>
                </Box>
              </Stack>
              <Card
                sx={{
                  minHeight: "566px",
                  width: 306,
                  borderRadius: "none",
                  borderTop: "100px",
                  border: "none",
                }}
              >
                <CardCover>
                  <img src="/home/sweet_dream.jpeg" loading="lazy" alt="" />
                </CardCover>
              </Card>
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}