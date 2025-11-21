import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Rating } from "react-simple-star-rating";

const TOP_PRODUCTS = [
  {
    id: 1,
    tag: "Bestseller • Lip",
    name: "Velvet Kiss Lip Tint",
    desc: "Weightless, soft-matte tint for an everyday glow.",
    price: "24$",
    rating: 4.8,
    img: "/products/device-depilation-is-laid-out-shape-clock.jpg",
  },
  {
    id: 2,
    tag: "Glow • Cheeks",
    name: "Petal Glow Compact",
    desc: "Silky blush that blends seamlessly for a rosy finish.",
    price: "28$",
    rating: 4.7,
    img: "/products/velvet_kiss_tint.jpg",
  },
  {
    id: 3,
    tag: "Skin • Base",
    name: "Cloud Veil Cushion",
    desc: "Lightweight cushion foundation for natural coverage.",
    price: "32$",
    rating: 4.6,
    img: "/products/pink-model-career-kit-arrangement.jpg",
  },
  {
    id: 4,
    tag: "Fragrance",
    name: "Soft Bloom Eau de Parfum",
    desc: "A gentle floral scent for everyday moments.",
    price: "45$",
    rating: 4.9,
    img: "/products/flat-lay-bath-concept-accessories.jpg",
  },
];

export function TopInterior() {
  return (
    <div className="toprated_frame">
      <Container>
        {/* Section header */}
        <Stack className="toprated_header">
          <Typography className="toprated_kicker">
            TOP RATED
          </Typography>
          <Typography className="toprated_title">
            Feyri beauty picks
          </Typography>
          <Typography className="toprated_subtitle">
            Community-sevimli mahsulotlar. Eng ko‘p baholangan yumshoq
            teksturalar va kundalik glow uchun tavsiyalar.
          </Typography>
        </Stack>

        {/* Product grid */}
        <Box className="toprated_grid">
          {TOP_PRODUCTS.map((item) => (
            <Box key={item.id} className="toprated_card">
              <Box className="toprated_img_box">
                <img src={item.img} alt={item.name} />
              </Box>

              <Typography className="toprated_tag">
                {item.tag}
              </Typography>

              <Typography className="toprated_name">
                {item.name}
              </Typography>

              <Typography className="toprated_desc">
                {item.desc}
              </Typography>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                className="toprated_meta"
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Rating
                    size={18}
                    initialValue={item.rating}
                    readonly
                    allowFraction
                  />
                  <Typography className="toprated_rating_value">
                    {item.rating.toFixed(1)}
                  </Typography>
                </Stack>
                <Typography className="toprated_price">
                  {item.price}
                </Typography>
              </Stack>

              <Button className="toprated_btn" variant="outlined">
                View details
              </Button>
            </Box>
          ))}
        </Box>
      </Container>
    </div>
  );
}
