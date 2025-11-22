// BedSheetsSail.tsx
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

export function BedSheetsSail() {
  return (
    <section className="bedsheet_sets">
      <Container>
        <Stack className="sheets_sail">
          <Box className="ritual_card">
            <Typography className="ritual_tag">
              SKINCARE • RITUAL
            </Typography>

            <Typography className="ritual_title">
              Skincare Ritual Sets
            </Typography>

            <Typography className="ritual_price">
              $25.00 — $120.00
            </Typography>

            <Typography className="ritual_desc">
  Yuzni namlab, tinchlantiradigan serum, toner va kremdan iborat parvarish seti.
</Typography>


            <Button className="ritual_btn" variant="outlined">
              View details
            </Button>
          </Box>
        </Stack>
      </Container>
    </section>
  );
}
