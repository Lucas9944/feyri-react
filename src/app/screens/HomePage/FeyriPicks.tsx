import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function FeyriPicks() {
  return (
    <Box className="home_feyri_picks_section">
      <Container maxWidth="xl">
        <Box className="help_card help_picks home_feyri_picks_card">
          <Box className="help_section_head">
            <Typography className="help_section_title">
              Feyri <span className="accent">Picks</span>
            </Typography>

            <Typography className="help_section_desc">
              Skincare va makeup birga yaxshiroq ishlaydi — yengil glow uchun tanlab oling.
              Community tavsiyalari va top-rated picklar.
            </Typography>
          </Box>

          <Box className="help_pills">
            <Link to="/brand" className="pill">Skincare</Link>
            <Link to="/brand" className="pill">Makeup</Link>
            <Link to="/brand" className="pill">Body &amp; Hair</Link>
            <Link to="/brand" className="pill">Best sellers</Link>
            <Link to="/brand" className="pill">New arrivals</Link>
          </Box>

          <Box className="help_icons">
            <Link to="/brand" className="help_icon_card">
              <img src="/latest/cut2.png" alt="Skincare" />
            </Link>

            <Link to="/brand" className="help_icon_card">
              <img src="/latest/cut1.png" alt="Body & Hair" />
            </Link>

            <Link to="/brand" className="help_icon_card">
              <img src="/latest/cut3.png" alt="Best sellers" />
            </Link>

            <Link to="/brand" className="help_icon_card">
              <img src="/latest/cut4.png" alt="New arrivals" />
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}