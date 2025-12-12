// src/app/screens/BrandPage/allBrands.tsx
import React, { useState } from "react";
import { Box, Checkbox, FormControlLabel, Slider } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const AllBrands: React.FC = () => {
  const [open, setOpen] = useState({
    product: true,
    availability: true,
    price: true,
    color: true,
    size: true,
  });

  const [price, setPrice] = useState<number[]>([95, 250]);

  const toggleSection = (key: keyof typeof open) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePriceChange = (_: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) setPrice(newValue);
  };

  const handleReset = () => {
    // hozircha faqat price va checkboxlarni keyinchalik qo‘shib olasan
    setPrice([95, 250]);
  };

  return (
    <div className="filter-container">
      {/* PRODUCT TYPE */}
      <section className="filter-section">
        <button
          type="button"
          className="section-header"
          onClick={() => toggleSection("product")}
        >
          <h2 className="section-title">Product Type</h2>
          <KeyboardArrowDownIcon
            className={
              open.product
                ? "section-arrow section-arrow-open"
                : "section-arrow"
            }
          />
        </button>

        {open.product && (
          <Box className="section-body">
            {[
              "Cleansers",
              "Exfoliants",
              "Face Masks",
              "Face Oils",
              "Serums",
              "Soaps",
              "Sunscreens",
            ].map((label) => (
              <FormControlLabel
                key={label}
                control={<Checkbox />}
                label={label}
                className="filter-checkbox"
              />
            ))}

            <button
              type="button"
              className="reset-link"
              onClick={handleReset}
            >
              Reset
            </button>
          </Box>
        )}
      </section>

      {/* AVAILABILITY */}
      <section className="filter-section">
        <button
          type="button"
          className="section-header"
          onClick={() => toggleSection("availability")}
        >
          <h2 className="section-title">Availability</h2>
          <KeyboardArrowDownIcon
            className={
              open.availability
                ? "section-arrow section-arrow-open"
                : "section-arrow"
            }
          />
        </button>

        {open.availability && (
          <Box className="section-body">
            <FormControlLabel
              control={<Checkbox />}
              label="In stock (6)"
              className="filter-checkbox"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Out of stock (1)"
              className="filter-checkbox"
            />
          </Box>
        )}
      </section>

      {/* PRICE */}
      <section className="filter-section">
        <button
          type="button"
          className="section-header"
          onClick={() => toggleSection("price")}
        >
          <h2 className="section-title">Price</h2>
          <KeyboardArrowDownIcon
            className={
              open.price ? "section-arrow section-arrow-open" : "section-arrow"
            }
          />
        </button>

        {open.price && (
          <Box className="section-body">
            <div className="price-slider">
              <Slider
                min={95}
                max={250}
                value={price}
                onChange={handlePriceChange}
              />
            </div>

            <div className="price-footer">
              <span className="price-range">
                ${price[0]} &mdash; ${price[1]}
              </span>
              <button type="button" className="apply-link">
                Apply
              </button>
            </div>
          </Box>
        )}
      </section>

      {/* COLOR */}
      <section className="filter-section">
        <button
          type="button"
          className="section-header"
          onClick={() => toggleSection("color")}
        >
          <h2 className="section-title">Color</h2>
          <KeyboardArrowDownIcon
            className={
              open.color ? "section-arrow section-arrow-open" : "section-arrow"
            }
          />
        </button>

        {open.color && (
          <Box className="section-body color-body">
            <span className="color-chip">Charm</span>
            <span className="color-chip">Natural</span>
            <span className="color-chip">Tinted</span>
          </Box>
        )}
      </section>

      {/* SIZE */}
      <section className="filter-section">
        <button
          type="button"
          className="section-header"
          onClick={() => toggleSection("size")}
        >
          <h2 className="section-title">Size</h2>
          <KeyboardArrowDownIcon
            className={
              open.size ? "section-arrow section-arrow-open" : "section-arrow"
            }
          />
        </button>

        {open.size && (
          <Box className="section-body">
            {["125ml", "30ml", "40ml", "50ml", "75ml"].map((label) => (
              <FormControlLabel
                key={label}
                control={<Checkbox />}
                label={label}
                className="filter-checkbox"
              />
            ))}
          </Box>
        )}
      </section>
    </div>
  );
};

export default AllBrands;
