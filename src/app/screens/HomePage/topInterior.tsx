import {  Container, Stack } from "@mui/material";





import React from "react";

export function TopInterior() {
    return (
      <div className="interior_frame">
        <Container>
          <Stack
            flexDirection={"column"}
            display="flex"
            alignItems={"center"}
            justifyContent="space-between"
            style={{ height: "1200px" }}
          >
          
          </Stack>
        </Container>
      </div>
    );
}