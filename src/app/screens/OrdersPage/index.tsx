import React, { useMemo, useState } from "react";
import { Box, Container, Stack, Tab, Tabs, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import OrderCard, { Order, OrderStatus } from "../OrdersPage/OrderCard";
import "../../../css/orders-feyri.css";

export function OrdersPage() {
  const [tab, setTab] = useState<OrderStatus>("PAYMENT_PENDING");

  // MOCK: keyin backend ulanganingizda shu joyga API’dan keladi
  const orders: Order[] = [
    {
      id: "A1029",
      createdAt: new Date().toISOString(),
      status: "PAYMENT_PENDING",
      addressLabel: "Seoul",
      addressLine: "Gangnam-gu",
      paymentMethod: "Visa •••• 7495",
      deliveryFee: 2,
      items: [
        { id: "1", name: "Serum", variant: "50ml", qty: 2, unitPrice: 12, imageUrl: "/icons/rasm1.jpeg" },
        { id: "2", name: "Heart", variant: "30ml", qty: 1, unitPrice: 12, imageUrl: "/icons/rasm2.jpeg" },
        { id: "3", name: "Toner", variant: "150ml", qty: 1, unitPrice: 12, imageUrl: "/icons/rasm3.jpeg" },
      ],
    },
    {
      id: "A1031",
      createdAt: new Date().toISOString(),
      status: "IN_PROGRESS",
      addressLabel: "Seoul",
      addressLine: "Mapo-gu",
      paymentMethod: "Master •••• 2002",
      deliveryFee: 2,
      items: [
        { id: "1", name: "Lips", qty: 1, unitPrice: 12, imageUrl: "/icons/rasm4.jpeg" },
        { id: "2", name: "Face", qty: 1, unitPrice: 12, imageUrl: "/icons/rasm1.jpeg" },
        { id: "3", name: "Uxod", qty: 1, unitPrice: 12, imageUrl: "/icons/rasm2.jpeg" },
      ],
    },
    {
      id: "A1012",
      createdAt: new Date().toISOString(),
      status: "DELIVERED",
      addressLabel: "Seoul",
      addressLine: "Jongno-gu",
      paymentMethod: "PayPal",
      deliveryFee: 2,
      items: [
        { id: "1", name: "Steak", qty: 1, unitPrice: 12, imageUrl: "/icons/rasm3.jpeg" },
        { id: "2", name: "Steak", qty: 1, unitPrice: 12, imageUrl: "/icons/rasm3.jpeg" },
        { id: "3", name: "Steak", qty: 1, unitPrice: 12, imageUrl: "/icons/rasm3.jpeg" },
      ],
    },
  ];

  const filtered = useMemo(
    () => orders.filter((o) => o.status === tab),
    [orders, tab]
  );

  return (
    <Box className="feyriOrdersPage">
      <Container maxWidth="lg" className="feyriOrdersLayout">
        {/* Left */}
        <Box className="feyriOrdersMain">
          <Box className="feyriOrdersHeader">
            <Typography className="feyriH1">Buyurtmalar</Typography>
            <Typography className="feyriSub">
              Feyri premium buyurtmalar paneli — status bo‘yicha boshqaruv.
            </Typography>
          </Box>

          <Tabs
            value={tab}
            onChange={(_, v) => setTab(v)}
            className="feyriTabs"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#f48fb1",
                height: 3,
                borderRadius: 3,
              },
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: 800,
                color: "#111",
                minHeight: 44,
              },
              "& .MuiTab-root.Mui-selected": { color: "#f48fb1" },
              "& .MuiTab-root:hover": { color: "#f48fb1" },
            }}
          >
            <Tab disableRipple value="PAYMENT_PENDING" label="Buyurtmalarim" />
            <Tab disableRipple value="IN_PROGRESS" label="Jarayon" />
            <Tab disableRipple value="DELIVERED" label="Yakunlangan" />
          </Tabs>

          <Stack gap={2} sx={{ mt: 2 }}>
            {filtered.map((o) => (
              <OrderCard
                key={o.id}
                order={o}
                onPay={(id) => console.log("PAY", id)}
                onCancel={(id) => console.log("CANCEL", id)}
                onTrack={(id) => console.log("TRACK", id)}
                onReview={(id) => console.log("REVIEW", id)}
                onReorder={(id) => console.log("REORDER", id)}
              />
            ))}

            {filtered.length === 0 && (
              <Box className="feyriEmpty">
                Hozircha bu statusda buyurtma yo‘q.
              </Box>
            )}
          </Stack>
        </Box>

        {/* Right */}
        <Box className="feyriOrdersSide">
          <Box className="feyriSideCard">
            <Box className="feyriAvatar" aria-hidden="true" />
            <Typography className="feyriSideName">Oliver Queen</Typography>
            <Typography className="feyriSideRole">Foydalanuvchi</Typography>

            <Box className="feyriSideDivider" />

            <Box className="feyriSideRow">
              <LocationOnIcon className="feyriIconMuted" />
              <Typography className="feyriMetaText">Seoul</Typography>
            </Box>
          </Box>

          <Box className="feyriSideCard">
            <Typography className="feyriSideTitle">To‘lov usullari</Typography>
            <Typography className="feyriSideDesc">
              Checkout emas — faqat saved payment summary.
            </Typography>

            <Box className="feyriPayIcons">
              <img src="/others/Western-union.png" alt="Western Union" />
              <img src="/others/master.png" alt="Mastercard" />
              <img src="/others/Paypal.png" alt="PayPal" />
              <img src="/others/visa.png" alt="Visa" />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default OrdersPage;
