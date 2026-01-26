import React from "react";
import { Box, Stack, Typography } from "@mui/material";

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
};

const finishedOrders: Order[] = [
  {
    id: 301,
    items: [
      { id: 1, title: "Steak", img: "/home/a.png", unitPrice: 12, qty: 7 },
      { id: 2, title: "Steak", img: "/home/a.png", unitPrice: 12, qty: 7 },
      { id: 3, title: "Steak", img: "/home/a.png", unitPrice: 12, qty: 7 },
    ],
    itemsTotal: 22,
    deliveryFee: 2,
  },
  {
    id: 302,
    items: [
      { id: 1, title: "Steak", img: "/home/a.png", unitPrice: 12, qty: 7 },
      { id: 2, title: "Steak", img: "/home/a.png", unitPrice: 12, qty: 7 },
      { id: 3, title: "Steak", img: "/home/a.png", unitPrice: 12, qty: 7 },
    ],
    itemsTotal: 22,
    deliveryFee: 2,
  },
  {
    id: 303,
    items: [
      { id: 1, title: "Steak", img: "/home/a.png", unitPrice: 12, qty: 7 },
      { id: 2, title: "Steak", img: "/home/a.png", unitPrice: 12, qty: 7 },
      { id: 3, title: "Steak", img: "/home/a.png", unitPrice: 12, qty: 7 },
    ],
    itemsTotal: 22,
    deliveryFee: 2,
  },
];

const FinishedOrders = () => {
  return (
    <Stack className="order_list" sx={{ gap: 2 }}>
      {finishedOrders.map((order) => {
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

            {/* FOOTER SUMMARY (FINISHED) */}
            <Stack
              className="total_price_box red_solid"
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ gap: 2, flexWrap: "wrap" }}
            >
              <Box className="boxTotal finish_box" sx={{ width: "100%" }}>
                <Box className="boxTotal_flex" style={{ width: "100%" }}>
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
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default FinishedOrders;
