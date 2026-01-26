import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import moment from "moment";

type LineItem = {
  id: number;
  title: string;
  img: string;
  unitPrice: number;
  qty: number;
};

type Order = {
  id: number;
  items: LineItem[];
  itemsTotal: number;
  deliveryFee: number;
  pausedAt: string; // ISO yoki string
};

const pausedOrders: Order[] = [
  {
    id: 201,
    items: [
      { id: 1, title: "Serum", img: "/home/a.png", unitPrice: 12, qty: 7 },
      { id: 2, title: "heart", img: "/home/a.png", unitPrice: 12, qty: 7 },
      { id: 3, title: "Toner", img: "/home/a.png", unitPrice: 12, qty: 7 },
    ],
    itemsTotal: 22,
    deliveryFee: 2,
    pausedAt: new Date().toISOString(),
  },
  {
    id: 202,
    items: [
      { id: 1, title: "Medicube", img: "/home/a.png", unitPrice: 12, qty: 7 },
      { id: 2, title: "Oliveyoung", img: "/home/a.png", unitPrice: 12, qty: 7 },
      { id: 3, title: "Atomy", img: "/home/a.png", unitPrice: 12, qty: 7 },
    ],
    itemsTotal: 22,
    deliveryFee: 2,
    pausedAt: new Date().toISOString(),
  },
  {
    id: 203,
    items: [
      { id: 1, title: "Lips", img: "/home/a.png", unitPrice: 12, qty: 7 },
      { id: 2, title: "eyes", img: "/home/a.png", unitPrice: 12, qty: 7 },
      { id: 3, title: "nose", img: "/home/a.png", unitPrice: 12, qty: 7 },
    ],
    itemsTotal: 22,
    deliveryFee: 2,
    pausedAt: new Date().toISOString(),
  },
];

const PausedOrders = () => {
  return (
    <Stack className="order_list" sx={{ gap: 2 }}>
      {pausedOrders.map((order) => {
        const grandTotal = order.itemsTotal + order.deliveryFee;

        return (
          <Stack key={order.id} className="order_main_box">
            {/* ITEMS */}
            <Box className="order_box_scroll">
              {order.items.map((item) => {
                const itemTotal = item.unitPrice * item.qty;

                return (
                  <Box key={item.id} className="orders_name_price">
                    <img
                      className="orderDish_img"
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                    />

                    <Typography className="title" component="p">
                      {item.title}
                    </Typography>

                    <Box className="price_box" aria-label="price summary">
                      <Typography component="p">${item.unitPrice}</Typography>
                      <img src="/icons/Close.png" alt="Multiply" />
                      <Typography component="p">{item.qty}</Typography>
                      <img src="/icons/Pause.png" alt="Equals" />
                      <Typography component="p" sx={{ ml: 1.5 }}>
                        ${itemTotal}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>

            {/* FOOTER */}
            <Stack
              className="total_price_box green_solid"
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ gap: 2, flexWrap: "wrap" }}
            >
              <Box className="boxTotal">
                <Box className="boxTotal_flex">
                  <Typography component="span">Mahsulot</Typography>
                  <Typography component="span">${order.itemsTotal}</Typography>
                  <img src="/icons/Plus.png" alt="Plus" />
                  <Typography component="span">Yetkazish</Typography>
                  <Typography component="span">${order.deliveryFee}</Typography>
                  <img src="/icons/total.png" alt="Total" />
                  <Typography component="span">Jami</Typography>
                  <Typography component="span">${grandTotal}</Typography>
                </Box>
              </Box>

              <Typography
                component="span"
                sx={{
                  color: "#6b6b6b",
                  fontWeight: 700,
                  fontSize: 13,
                  whiteSpace: "nowrap",
                }}
              >
                {moment(order.pausedAt).format("YY-MM-DD")}
              </Typography>

              <Button className="total_price_btn">Yakunlash</Button>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default PausedOrders;
