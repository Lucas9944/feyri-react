import React, { useMemo, useState } from "react";
import { Box, Button, Container, Menu, MenuItem, Typography } from "@mui/material";

type ActionType = "add" | "select" | "buy";

interface Product {
  id: number;
  name: string;
  price: string; // "$250.00 – $230.00" yoki "$230.00"
  image: string;
  onSale?: boolean;
  action: ActionType;
}

// 11 ta product (pagination bo‘lishi uchun)
const PRODUCTS: Product[] = [
  { id: 1, name: "Generation Glow Daily", price: "$230.00", image: "/latest/5.png", action: "add" },
  { id: 2, name: "Gold Exfoliating Treatment", price: "$230.00", image: "/latest/4.png", action: "add" },
  { id: 3, name: "Liquid Gold Midnight Reboot Serum", price: "$250.00 – $230.00", image: "/latest/2.png", action: "select" },
  { id: 4, name: "Liquid Gold Midnight Reboot Serum", price: "$230.00", image: "/latest/1.png", action: "add" },
  { id: 5, name: "Liquid Gold Midnight Reboot Serum", price: "$230.00", image: "/latest/6.png", action: "add" },
  { id: 6, name: "Vitamin A Serum with 0.5% Retinol", price: "$230.00", image: "/latest/3.png", action: "buy" },
  { id: 7, name: "Liquid Gold Midnight Reboot Serum", price: "$230.00", image: "/latest/7.png", action: "buy" },
  { id: 8, name: "Liquid Gold Midnight Reboot Serum", price: "$200.00  $230.00", image: "/latest/8.png", onSale: true, action: "add" },
  { id: 9, name: "Liquid Gold Midnight Reboot Serum", price: "$230.00", image: "/latest/1.png", action: "add" },
  { id: 10, name: "Liquid Gold Midnight Reboot Serum", price: "$199.00", image: "/latest/6.png", action: "add" },
  { id: 11, name: "Gold Exfoliating Treatment", price: "$260.00", image: "/latest/4.png", action: "add" },
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

function parseMinPrice(price: string): number {
  // "$250.00 – $230.00" => 230
  // "$200.00  $230.00" => 200
  // "$230.00" => 230
  const nums = price
    .replace(/,/g, "")
    .match(/\d+(\.\d+)?/g)
    ?.map((v) => Number(v)) ?? [0];
  return Math.min(...nums);
}

const SORT_OPTIONS = [
  "Sort By Popularity",
  "Sort By Average Rating",
  "Sort By Latest",
  "Sort By Price: Low To High",
  "Sort By Price: High To Low",
] as const;

type SortOption = (typeof SORT_OPTIONS)[number];

function sortProducts(list: Product[], sort: SortOption) {
  const arr = [...list];
  switch (sort) {
    case "Sort By Latest":
      // id katta bo‘lsa yangi deb qabul qilamiz
      return arr.sort((a, b) => b.id - a.id);
    case "Sort By Price: Low To High":
      return arr.sort((a, b) => parseMinPrice(a.price) - parseMinPrice(b.price));
    case "Sort By Price: High To Low":
      return arr.sort((a, b) => parseMinPrice(b.price) - parseMinPrice(a.price));
    case "Sort By Popularity":
      // hozircha hardcode: o‘zgartirmaymiz
      return arr;
    case "Sort By Average Rating":
      // hozircha hardcode: o‘zgartirmaymiz
      return arr;
    default:
      return arr;
  }
}

function PaginationBox({
  page,
  totalPages,
  onPage,
}: {
  page: number;
  totalPages: number;
  onPage: (p: number) => void;
}) {
  return (
    <div className="shop-pagination">
      <button
        className={`shop-pagebtn ${page === 1 ? "active" : ""}`}
        onClick={() => onPage(1)}
        type="button"
      >
        1
      </button>

      {totalPages >= 2 && (
        <button
          className={`shop-pagebtn ${page === 2 ? "active" : ""}`}
          onClick={() => onPage(2)}
          type="button"
        >
          2
        </button>
      )}

      <button
        className="shop-nextbtn"
        onClick={() => onPage(Math.min(totalPages, page + 1))}
        disabled={page >= totalPages}
        type="button"
        aria-label="Next"
      >
        →
      </button>
    </div>
  );
}

function ShopProductsImpl() {
  const [sort, setSort] = useState<SortOption>("Sort By Latest");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  const [page, setPage] = useState(1);
  const perPage = 9;

  const sorted = useMemo(() => sortProducts(PRODUCTS, sort), [sort]);
  const totalResults = 11; // screenshotdagi kabi
  const totalPages = Math.ceil(sorted.length / perPage);

  const visible = useMemo(() => {
    const start = (page - 1) * perPage;
    return sorted.slice(start, start + perPage);
  }, [sorted, page]);

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleSelectSort = (v: SortOption) => {
    setSort(v);
    setPage(1);
    handleClose();
  };

  return (
    <section className="shop_products_section">
  
        <div className="shop_topbar">
          <Typography className="shop_results_text">Showing all {totalResults} results</Typography>

          <button className="shop_sort_btn" type="button" onClick={handleOpen}>
            {sort}
            <span className="shop_sort_chev">▾</span>
          </button>

          <Menu
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={handleClose}
            PaperProps={{
              className: "shop_sort_menu",
            }}
            MenuListProps={{ className: "shop_sort_menu_list" }}
          >
            {SORT_OPTIONS.map((opt) => (
              <MenuItem
                key={opt}
                onClick={() => handleSelectSort(opt)}
                className={`shop_sort_item ${opt === sort ? "active" : ""}`}
              >
                <span className="shop_sort_check">{opt === sort ? "✓" : ""}</span>
                {opt}
              </MenuItem>
            ))}
          </Menu>
        </div>

        {/* Grid 3x3 */}
        <Box className="latest_grid">
          {visible.map((item) => (
            <article key={item.id} className="latest_card">
              <div className="latest_media">
                <div className="latest_image_box">
                  <img src={item.image} alt={item.name} />
                </div>

                <Button className="latest_button">{getButtonLabel(item.action)}</Button>
              </div>

              <Typography className="latest_name">{item.name}</Typography>
              <Typography className="latest_price">{item.price}</Typography>
            </article>
          ))}
        </Box>

        {/* Pagination */}
        <PaginationBox page={page} totalPages={totalPages} onPage={setPage} />
    </section>
  );
}

/**
 * MUHIM:
 * Sizda ba’zi joylarda default import, ba’zi joylarda named import ishlayapti.
 * Shuning uchun ikkisini ham berib qo‘yyapman — xato to‘xtaydi.
 */
export const ShopProducts = ShopProductsImpl;
export default ShopProductsImpl;
