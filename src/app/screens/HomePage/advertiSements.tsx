import { Box, Container, Stack } from "@mui/material";
import useDeviceDetect from "../../../lib/responsive/useDeviceDetect";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

export function Advertisements() {
  const { isMobile } = useDeviceDetect();

  const Title = () => (
    <Box className="home_section_head">
      <div className="home_section_title">Our Partners</div>
      <div className="home_section_sub">
        Our trusted partners & collaborations.
      </div>
    </Box>
  );

  if (isMobile()) {
    return (
      <section className="home_section">
        <div className="ads_frame">
          <Container>
            <Title />

            <Stack className="ad_video_frame ad_video_frame--mobile">
              <Stack direction="row" className="ads_mobile_row" spacing={2}>
                <Box className="ads_card ads_card--m">
                  <video autoPlay loop muted playsInline>
                    <source src="/icons/video2.mp4" type="video/mp4" />
                  </video>
                </Box>

                <Box className="ads_card ads_card--m">
                  <video autoPlay loop muted playsInline>
                    <source src="/icons/video1.mp4" type="video/mp4" />
                  </video>
                </Box>
              </Stack>
            </Stack>
          </Container>
        </div>
      </section>
    );
  }

  return (
    <section className="home_section">
      <div className="ads_frame">
        <Container>
          <Zoom delay={200}>
            <div>
              <Title />
            </div>
          </Zoom>

          <Stack className="ad_video_frame">
            <Zoom delay={300}>
              <Stack>
                <Box className="ads_card ads_card--v1">
                  <video autoPlay loop muted playsInline>
                    <source src="/icons/video3.mp4" type="video/mp4" />
                  </video>
                </Box>
              </Stack>
            </Zoom>

            <Stack className="ads_video_frame2">
              <Fade left duration={900}>
                <Stack className="ads_video_frame2-1" direction="row">
                  <Box className="ads_card ads_card--v2">
                    <video autoPlay loop muted playsInline>
                      <source src="/icons/video5.mp4" type="video/mp4" />
                    </video>
                  </Box>

                  <Box className="ads_card ads_card--v3">
                    <video autoPlay loop muted playsInline>
                      <source src="/icons/video2.mp4" type="video/mp4" />
                    </video>
                  </Box>
                </Stack>
              </Fade>

              <Fade right duration={1000}>
                <Stack
                  className="ads_video_frame2-1"
                  direction="row"
                  style={{ marginTop: 15 }}
                >
                  <Box className="ads_card ads_card--v3">
                    <video autoPlay loop muted playsInline>
                      <source src="/icons/video1.mp4" type="video/mp4" />
                    </video>
                  </Box>

                  <Box className="ads_card ads_card--v2">
                    <video autoPlay loop muted playsInline>
                      <source src="/icons/video4.mp4" type="video/mp4" />
                    </video>
                  </Box>
                </Stack>
              </Fade>
            </Stack>
          </Stack>
        </Container>
      </div>
    </section>
  );
}
