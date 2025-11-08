import { Box, Button, Container, Stack } from "@mui/material";
import React from "react";

export function Statistics() {
  return (
    <div className="static_frame">
      <Container>
        <Stack
          //   className="wrap_two_static"
          flexDirection={"row"}
          display="flex"
          alignItems={"center"}
          justifyContent="space-between"
          style={{ height: "400px" }}
        >
          <Stack className={"wrap_static_first"}>
            <Box className="photo_box">
              <img src="/interior/image_stul.png" alt="" />
            </Box>
            <Box className="text_box">
              <h3>TINY VINTAGE CHAIR</h3> <br /> <br />
              <Button variant="outlined" color="primary">
                VIEW DETAILS
              </Button>
            </Box>
          </Stack>
          <Stack className={"wrap_static_second"}>
            <Box className="photo_box">
              <img src="/interior/image_koza.png" alt="" />
            </Box>
            <Box className="text_box">
              <h3>LARGE TERRACOTA VASE</h3> <br /> <br />
              <Button variant="outlined" color="primary">
                VIEW DETAILS
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}