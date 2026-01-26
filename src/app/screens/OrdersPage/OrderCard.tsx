import React from "react";
import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";

export type OrderStatus = "PAYMENT_PENDING" | "IN_PROGRESS" | "DELIVERED";

export type OrderItem = {
  id: string;
  name: string;
  variant?: string; // masalan: "50ml"
  qty: number;
  unitPrice: number;
  imageUrl: string; // public ichida bo‘lsa: "/products/x.png"
};

export type Order = {
  id: string; // UI ko‘rsatish uchun
  createdAt: string; // ISO
  status: OrderStatus;
  addressLabel?: string; // "Seoul"
  addressLine?: string; // "Gangnam..."
  paymentMethod?: string; // "Visa •••• 7495"
  items: OrderItem[];
  deliveryFee: number;
};

function formatMoney(n: number) {
  return `$${n.toFixed(0)}`;
}

function statusUi(status: OrderStatus) {
  if (status === "PAYMENT_PENDING")
    return { label: "To‘lov kutilmoqda", tone: "warning" as const };
  if (status === "IN_PROGRESS")
    return { label: "Yetkazilmoqda", tone: "info" as const };
  return { label: "Yetkazildi", tone: "success" as const };
}

type Props = {
  order: Order;
  onPay?: (orderId: string) => void;
  onCancel?: (orderId: string) => void;
  onTrack?: (orderId: string) => void;
  onReview?: (orderId: string) => void;
  onReorder?: (orderId: string) => void;
};

export default function OrderCard({
  order,
  onPay,
  onCancel,
  onTrack,
  onReview,
  onReorder,
}: Props) {
  const ui = statusUi(order.status);

  const itemsTotal = order.items.reduce(
    (sum, it) => sum + it.unitPrice * it.qty,
    0
  );
  const total = itemsTotal + order.deliveryFee;

  const date = new Date(order.createdAt);
  const dateText = `${String(date.getFullYear()).slice(2)}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

  return (
    <Box className="feyriOrderCard">
      {/* Header */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        className="feyriOrderCard__header"
      >
        <Stack direction="row" alignItems="center" gap={1}>
          <ReceiptLongOutlinedIcon className="feyriIconMuted" />
          <Typography className="feyriOrderCard__title">
            Order #{order.id}
          </Typography>
          <Typography className="feyriOrderCard__date">{dateText}</Typography>
        </Stack>

        <Chip
          label={ui.label}
          color={ui.tone}
          variant="outlined"
          className="feyriStatusChip"
        />
      </Stack>

      <Divider className="feyriDivider" />

      {/* Items preview */}
      <Stack gap={1.25} className="feyriOrderCard__items">
        {order.items.slice(0, 3).map((it) => (
          <Stack
            key={it.id}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            className="feyriOrderItem"
          >
            <Stack direction="row" alignItems="center" gap={1.25}>
              <img
                src={it.imageUrl}
                alt={it.name}
                className="feyriOrderItem__thumb"
                loading="lazy"
              />
              <Box>
                <Typography className="feyriOrderItem__name">
                  {it.name}
                </Typography>
                <Typography className="feyriOrderItem__meta">
                  {it.variant ? `${it.variant} • ` : ""}
                  Qty: {it.qty}
                </Typography>
              </Box>
            </Stack>

            <Typography className="feyriOrderItem__price">
              {formatMoney(it.unitPrice * it.qty)}
            </Typography>
          </Stack>
        ))}

        {order.items.length > 3 && (
          <Typography className="feyriMoreItems">
            +{order.items.length - 3} ta mahsulot
          </Typography>
        )}
      </Stack>

      <Divider className="feyriDivider" />

      {/* Meta row */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        gap={1}
        justifyContent="space-between"
        className="feyriOrderMeta"
      >
        <Stack direction="row" alignItems="center" gap={1}>
          <LocationOnOutlinedIcon className="feyriIconMuted" />
          <Typography className="feyriMetaText">
            {order.addressLabel || "Manzil"}{" "}
            {order.addressLine ? `• ${order.addressLine}` : ""}
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" gap={1}>
          <CreditCardOutlinedIcon className="feyriIconMuted" />
          <Typography className="feyriMetaText">
            {order.paymentMethod || "To‘lov usuli tanlanmagan"}
          </Typography>
        </Stack>
      </Stack>

      {/* Totals */}
      <Stack className="feyriTotals" gap={0.5}>
        <Stack direction="row" justifyContent="space-between">
          <Typography className="feyriTotals__label">Mahsulot</Typography>
          <Typography className="feyriTotals__value">
            {formatMoney(itemsTotal)}
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography className="feyriTotals__label">Yetkazish</Typography>
          <Typography className="feyriTotals__value">
            {formatMoney(order.deliveryFee)}
          </Typography>
        </Stack>

        <Divider className="feyriDivider" />

        <Stack direction="row" justifyContent="space-between">
          <Typography className="feyriTotals__totalLabel">Jami</Typography>
          <Typography className="feyriTotals__totalValue">
            {formatMoney(total)}
          </Typography>
        </Stack>
      </Stack>

      {/* Actions */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        gap={1}
        justifyContent="flex-end"
        className="feyriActions"
      >
        {order.status === "PAYMENT_PENDING" && (
          <>
            <Button
              variant="outlined"
              className="feyriBtnOutline"
              onClick={() => onCancel?.(order.id)}
            >
              Bekor qilish
            </Button>
            <Button
              variant="contained"
              className="feyriBtnPrimary"
              onClick={() => onPay?.(order.id)}
            >
              To‘lash
            </Button>
          </>
        )}

        {order.status === "IN_PROGRESS" && (
          <>
            <Button
              variant="outlined"
              className="feyriBtnOutline"
              startIcon={<LocalShippingOutlinedIcon />}
              onClick={() => onTrack?.(order.id)}
            >
              Kuzatish
            </Button>
            <Button
              variant="contained"
              className="feyriBtnPrimary"
              onClick={() => onPay?.(order.id)}
            >
              Yakunlash
            </Button>
          </>
        )}

        {order.status === "DELIVERED" && (
          <>
            <Button
              variant="outlined"
              className="feyriBtnOutline"
              startIcon={<StarOutlineOutlinedIcon />}
              onClick={() => onReview?.(order.id)}
            >
              Sharh qoldirish
            </Button>
            <Button
              variant="contained"
              className="feyriBtnPrimary"
              onClick={() => onReorder?.(order.id)}
            >
              Qayta buyurtma
            </Button>
          </>
        )}
      </Stack>
    </Box>
  );
}
