import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

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

const processOrders: Order[] = [
  {
    id: 101,
    items: [
      { id: 1, title: "Lips", img: "/home/a.png", unitPrice: 12, qty: 7 },
      { id: 2, title: "face", img: "/home/a.png", unitPrice: 12, qty: 7 },
      { id: 3, title: "uxod", img: "/home/b.png", unitPrice: 12, qty: 7 },
    ],
    itemsTotal: 22,
    deliveryFee: 2,
  },
];

const ProcessOrders = () => {
  return (
    <Stack className="order_list" sx={{ gap: 2 }}>
      {processOrders.map((order) => {
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

            {/* FOOTER SUMMARY */}
            <Stack
              className="total_price_box white_solid"
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ gap: 2, flexWrap: "wrap" }}
            >
              <Box className="boxTotal">
                <Box className="boxTotal_flex">
                  <Typography component="span">Mahsulot narxi</Typography>
                  <Typography component="span">${order.itemsTotal}</Typography>
                  <img src="/icons/Plus.png" alt="Plus" />
                  <Typography component="span">Yetkazish</Typography>
                  <Typography component="span">${order.deliveryFee}</Typography>
                  <img src="/icons/total.png" alt="Total" />
                  <Typography component="span">Jami</Typography>
                  <Typography component="span">${grandTotal}</Typography>
                </Box>
              </Box>

              <Stack direction="row" sx={{ gap: 1.2 }}>
                <Button className="total_close_btn">Bekor qilish</Button>
                <Button className="total_price_btn">To‘lash</Button>
              </Stack>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default ProcessOrders;
