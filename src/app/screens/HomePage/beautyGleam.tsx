import { Box, Button, Container, Stack } from "@mui/material";
import React from "react";

export function beautyGleam() {
  return (
    <div className="bedsheet_sets">
      <Container>
        <Stack
          flexDirection={"column"}
          display="flex"
          alignItems={"center"}
          justifyContent="space-evenly"
          className={"sheets_sail"}
          style={{ height: "510px", width: "100%" }}
        >
          <Stack className="rectangle_sail">
            <Box className="wrapp_sail_content">
              <h3>BEDSHEET SETS</h3>
              <p>$50.00 $220.00</p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi aliquam atque. <br /> <br />
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