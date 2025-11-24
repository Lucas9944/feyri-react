// src/app/screens/HomePage/TopRating.tsx
import { Container, Stack, Box, Typography, Button } from "@mui/material";

type ActionType = "add" | "select" | "buy";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  onSale?: boolean;
  action: ActionType;
}

const LATEST_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Liquid Gold Midnight Reboot Serum",
    price: "$230.00",
    image: "/latest/1.png",
    action: "add",
  },
  {
    id: 2,
    name: "Liquid Gold Midnight Reboot Serum",
    price: "$250.00 – $230.00",
    image: "/latest/2.png",
    action: "select",
  },
  {
    id: 3,
    name: "Vitamin A Serum with 0.5% Retinol",
    price: "$230.00",
    image: "/latest/3.png",
    action: "buy",
  },
  {
    id: 4,
    name: "Gold Exfoliating Treatment",
    price: "$230.00",
    image: "/latest/4.png",
    action: "add",
  },
  {
    id: 5,
    name: "Generation Glow Daily",
    price: "$230.00",
    image: "/latest/5.png",
    action: "add",
  },
  {
    id: 6,
    name: "Liquid Gold Midnight Reboot Serum",
    price: "$230.00",
    image: "/latest/6.png",
    action: "add",
  },
  {
    id: 7,
    name: "Liquid Gold Midnight Reboot Serum",
    price: "$230.00",
    image: "/latest/7.png",
    action: "buy",
  },
  {
    id: 8,
    name: "Liquid Gold Midnight Reboot Serum",
    price: "$200.00  $230.00",
    image: "/latest/8.png",
    onSale: true,
    action: "add",
  },
];

function getButtonLabel(action: ActionType) {
  switch (action) {
    case "add":
      return "ADD TO CART ↗";
    case "select":
      return "SELECT OPTIONS ↗";
    case "buy":
      return "BUY PRODUCT ↗";
  }
}

export function TopRating() {
  return (
    <section className="latest_section">
      <Container maxWidth="lg">
        <Stack className="latest_header" spacing={1}>
          <Typography className="latest_title">Latest Collection</Typography>
          <Typography className="latest_subtitle">
            Our universally agreed, most-loved products.
          </Typography>
        </Stack>

        <Box className="latest_grid">
          {LATEST_PRODUCTS.map((item) => (
            <article key={item.id} className="latest_card">
              {/* IVORY PANEL – rasm + button shu yerda */}
              <div className="latest_media">
                <div className="latest_image_box">
                  <img src={item.image} alt={item.name} />
                </div>

                <Button className="latest_button">
                  {getButtonLabel(item.action)}
                </Button>
              </div>

              {/* text pastda */}
              <Typography className="latest_name">{item.name}</Typography>
              <Typography className="latest_price">{item.price}</Typography>
            </article>
          ))}
        </Box>
      </Container>
    </section>
  );
}
