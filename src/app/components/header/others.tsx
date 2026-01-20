import { Badge, Box, Stack } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

type NavbarBrandProps = {
  setPath: React.Dispatch<React.SetStateAction<string>>;
};

export function NavbarOthers({ setPath }: NavbarBrandProps) {
  const [isCatalogOpen, setCatalogOpen] = useState(false);

  const openCatalog = () => setCatalogOpen(true);
  const closeCatalog = () => setCatalogOpen(false);

  const go = (path: string) => () => {
    setPath(path);
    setCatalogOpen(false);
  };

  return (
    <>
      {/* TOP STRIP */}
      <div className="glowess-topbar">Free worldwide shipping for orders over $50</div>

      {/* HEADER + CATALOG PANEL WRAPPER */}
      <div className="glowess-nav-shell" onMouseLeave={closeCatalog}>
        {/* MAIN NAVBAR */}
        <header className="glowess-header">
          <div className="glowess-header-inner">
            {/* LEFT */}
            <div className="glowess-left">
              {/* Burger */}
              <button
                type="button"
                className="glowess-burger"
                onClick={openCatalog}
                onMouseEnter={openCatalog}
              >
                <span />
                <span />
                <span />
              </button>

              <nav className="glowess-main-menu">
                {/* CATALOG */}
                <NavLink
                  to="/catalog"
                  onClick={go("/catalog")}
                  className="glowess-menu-item glowess-menu-item--strong"
                  onMouseEnter={openCatalog}
                >
                  CATALOG
                </NavLink>

                <span className="glowess-menu-divider" />

                <Box className="hover-line" onClick={go("/")}>
                  <NavLink to="/" className="underline">
                    Home
                  </NavLink>
                </Box>

                <Box className="hover-line" onClick={go("/brand")}>
                  <NavLink to="/brand" className="underline">
                    SHOP
                  </NavLink>
                </Box>

                <Box className="hover-line" onClick={go("/orders")}>
                  <NavLink to="/orders" className="underline">
                    ORDER
                  </NavLink>
                </Box>

                <Box className="hover-line" onClick={go("/community")}>
                  <NavLink to="/community" className="underline">
                    Community
                  </NavLink>
                </Box>

                <Box className="hover-line" onClick={go("/help")}>
                  <NavLink to="/help" className="underline">
                    Help
                  </NavLink>
                </Box>
              </nav>
            </div>

            {/* CENTER LOGO */}
            <Stack className="wrapp_logo">

            <Box className="logo_brand logo_brand--home">FEYRI BEAUTY</Box>
             <Box className="logo_tagline">GO'ZALLIK – BU SENING SEHRING</Box>
            </Stack>

            {/* RIGHT – ikonlar */}
            <div className="glowess-right">
              <div className="glowess-icons">
                <Stack
                  flexDirection="row"
                  justifyContent="space-evenly"
                  alignItems="center"
                  className="icon_links"
                >
                  <Box className="icon_btn" onClick={go("/")}>
                    <NavLink to="/">
                      <img
                        src="/icons/rasm4.jpeg"
                        alt="Search"
                        className="nav_icon_img"
                      />
                    </NavLink>
                  </Box>

                  <Box className="icon_btn" onClick={go("/brand")}>
                    <NavLink to="/brand">
                      <img
                        src="/icons/rasm2.jpeg"
                        alt="User"
                        className="nav_icon_img"
                      />
                    </NavLink>
                  </Box>

                  <Box className="icon_btn" onClick={go("/orders")}>
                    <NavLink to="/orders">
                      <Badge
                        badgeContent={17}
                        color="primary"
                        overlap="circular"
                        anchorOrigin={{ vertical: "top", horizontal: "right" }}
                        className="nav_badge"
                      >
                        <img
                          src="/icons/feyri_icon_cart.png"
                          alt="Cart"
                          className="nav_icon_img"
                        />
                      </Badge>
                    </NavLink>
                  </Box>

                  <Box className="icon_btn" onClick={go("/community")}>
                    <NavLink to="/community">
                      <img
                        src="/icons/rasm3.jpeg"
                        alt="Heart"
                        className="nav_icon_img"
                      />
                    </NavLink>
                  </Box>
                </Stack>
              </div>
            </div>
          </div>
        </header>

        {/* CATALOG MEGA MENU */}
        {isCatalogOpen && (
          <div
            className="glowess-catalog-panel"
            onMouseEnter={openCatalog}
            onMouseLeave={closeCatalog}
          >
            <div className="glowess-catalog-inner">
              {/* Chap taraf – ro‘yxatlar */}
              <div className="glowess-catalog-list">
                <p className="glowess-catalog-title">Shop All</p>

                <div className="glowess-catalog-columns">
                  <div className="glowess-catalog-column">
                    <p className="glowess-catalog-col-title">Skincare</p>
                    <button className="glowess-catalog-link">Cleansers</button>
                    <button className="glowess-catalog-link">Toners</button>
                    <button className="glowess-catalog-link">Moisturisers</button>
                    <button className="glowess-catalog-link">Masks</button>
                  </div>

                  <div className="glowess-catalog-column">
                    <p className="glowess-catalog-col-title">Makeup</p>
                    <button className="glowess-catalog-link">Face</button>
                    <button className="glowess-catalog-link">Eyes</button>
                    <button className="glowess-catalog-link">Lips</button>
                    <button className="glowess-catalog-link">Tools</button>
                  </div>

                  <div className="glowess-catalog-column">
                    <p className="glowess-catalog-col-title">Body &amp; Hair</p>
                    <button className="glowess-catalog-link">Body Care</button>
                    <button className="glowess-catalog-link">Haircare</button>
                    <button className="glowess-catalog-link">Bath &amp; Wellbeing</button>
                  </div>

                  <div className="glowess-catalog-column">
                    <p className="glowess-catalog-col-title">Featured</p>
                    <button className="glowess-catalog-link">Bestsellers</button>
                    <button className="glowess-catalog-link">New Arrivals</button>
                    <button className="glowess-catalog-link">Sale</button>
                  </div>
                </div>
              </div>

              {/* O‘ng taraf – kartalar */}
              <div className="glowess-catalog-featured">
                <article className="glowess-catalog-card">
                  <div className="glowess-catalog-card-img-wrap">
                    <img
                      src="/images/image.png"
                      alt="All products"
                      className="glowess-catalog-card-img"
                    />
                  </div>
                  <div className="glowess-catalog-card-caption">All Products</div>
                </article>

                <article className="glowess-catalog-card">
                  <div className="glowess-catalog-card-img-wrap">
                    <img
                      src="/images/image copy 2.png"
                      alt="Sale"
                      className="glowess-catalog-card-img"
                    />
                  </div>
                  <div className="glowess-catalog-card-caption">Sale</div>
                </article>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* SHOP HERO */}
      <section className="glowess-shop-hero">
        <div className="glowess-shop-hero-inner">
          <h1 className="glowess-shop-title">Others</h1>
          <p className="glowess-shop-subtitle">
            Beneficial on their own, but always best when paired together.
            Skincare and makeup products should work in unison.
          </p>
        </div>
      </section>
    </>
  );
}
