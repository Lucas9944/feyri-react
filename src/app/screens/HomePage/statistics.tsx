import { Box, Button, Container, Stack } from "@mui/material";

export function Statistics() {
  return (
    <div className="static_frame">
      <Container>
        <Stack
          className="static_row"
          direction="row"
          alignItems="stretch"
          justifyContent="space-between"
          spacing={3}
        >
          {/* LEFT CARD – LIP TINT */}
          <Stack className="static_card static_card--light" direction="row" alignItems="center">
            <Box className="photo_box">
              {/* hero’dagi stylega o‘xshash, oq/pastel fondagi kosmetika rasm qo‘y */}
              <img src="/home/feyri_lip_tint.png" alt="Velvet Kiss Lip Tint" />
            </Box>

            <Box className="text_box">
              <p className="static_tagline">Bestseller • Lip</p>
              <h3>Velvet Kiss Lip Tint</h3>
              <p className="static_desc">
                Weightless, soft-matte tint for everyday glow and comfortable wear.
              </p>
              <Button className="static_btn" variant="outlined">
                View details
              </Button>
            </Box>
          </Stack>

          {/* RIGHT CARD – BLUSH / COMPACT */}
          <Stack className="static_card static_card--tinted" direction="row" alignItems="center">
            <Box className="photo_box">
              <img src="/home/feyri_blush_set.png" alt="Petal Glow Compact" />
            </Box>

            <Box className="text_box">
              <p className="static_tagline">Glow • Cheeks</p>
              <h3>Petal Glow Compact</h3>
              <p className="static_desc">
                Silky blush compact that blends seamlessly for a soft, rosy radiance.
              </p>
              <Button className="static_btn" variant="outlined">
                View details
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
