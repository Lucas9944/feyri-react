/* eslint-disable jsx-a11y/alt-text */
import { Box, Container, Stack } from "@mui/material";

export function Footer() {
  return (
    <div className="footer_config">
      <Container>
        <Stack className="main_footer_container">
          <Stack flexDirection={"row"} style={{ height: "242px" }}>
            <Stack className="info" flexDirection={"column"}>
              <Box className="logo_brand_footer">FEYRI BEAUTY</Box>
              <Box className="main_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor Sed ut perspiciatis unde omnis iste
              </Box>

              <Box className="main_text_bold">
                121 king street, Melbourne 3000 <br />
                +61 3 8376 6284 <br /> <br />
                xolmirzayevotabek779@gmail.com
              </Box>
              <Stack className="contact_links">
                <Box>
                  <img src={"/icons/facebook.svg"} />
                </Box>
                <Box>
                  <img src={"/icons/twitter.svg"} />
                </Box>
                <Box>
                  <img src={"/icons/instagram.svg"}  alt="https://www.instagram.com/feyri_beauty?igsh=MXBzaHRvbHhqNDh6ag%3D%3D&utm_source=qr"/>
                </Box>
                <Box>
                  <img src={"/icons/youtube.svg"} />
                </Box>
              </Stack>
            </Stack>
            <Stack className="parts">
              <Box className="part_subject">SHOPPING</Box>
              <Box className="divider"></Box>
              <Box className="targets">
                Your Cart <br /> Your orders Compared items Shipping detail
              </Box>
            </Stack>
            <Stack className="parts">
              <Box className="part_subject">MORE LINK</Box>
              <Box className="divider"></Box>
              <Box className="targets">
                Blog <br /> Gift Center Buying Guides Clearance
              </Box>
            </Stack>
            <Stack className="wrap_find_us">
              <Stack className="find_us">
                <Box className="find">FROM THE BLOG</Box>
                <Stack className="details" sx={{ mt: "19.36px" }}>
                  <Box className="detail_first">26 May</Box>
                  <Box className="detail_second">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit{" "}
                  </Box>
                </Stack>
              </Stack>
                <Stack className="line_border"></Stack>
              <Stack className="find_us">
                <Stack className="details" sx={{ mt: "19.36px" }}>
                  <Box className="detail_first">27 May</Box>
                  <Box className="detail_second">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit{" "}
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Stack className="copyrights">
        Copyright FEYRIBEAUTY 2025, All right reserved
      </Stack>
    </div>
  );
}