import React, { useState } from "react";
import { Box, Stack, Badge } from "@mui/material";
import { NavLink } from "react-router-dom";

type NavbarHomeProps = {
  setPath: React.Dispatch<React.SetStateAction<string>>;
};

export function NavbarHome({ setPath }: NavbarHomeProps) {
  const [isCatalogOpen, setCatalogOpen] = useState(false);

  const openCatalog = () => setCatalogOpen(true);
  const closeCatalog = () => setCatalogOpen(false);

  const go = (path: string) => () => {
    setPath(path);
    setCatalogOpen(false);
  };

  return (
    <section className="home-hero">
      {/* Top strip */}
      <div className="home-topbar">
        Free worldwide shipping for orders over $50
      </div>

      {/* Header + Catalog wrapper */}
      <div className="home-nav-shell" onMouseLeave={closeCatalog}>
        <header className="home-header">
          <div className="home-header-inner">
            {/* LEFT */}
            <div className="home-left">
              <button
                type="button"
                className="home-burger"
                onClick={openCatalog}
                onMouseEnter={openCatalog}
                aria-label="Open catalog"
              >
                <span />
                <span />
                <span />
              </button>

              <nav className="home-menu">
                <NavLink
                  to="/catalog"
                  onClick={go("/catalog")}
                  className="home-link home-link--strong"
                  onMouseEnter={openCatalog}
                >
                  CATALOG
                </NavLink>

                <div className="home-divider" />

                <NavLink to="/" onClick={go("/")} className="home-link">
                  HOME
                </NavLink>

                <NavLink to="/brand" onClick={go("/brand")} className="home-link">
                  SHOP
                </NavLink>

                <NavLink to="/community" onClick={go("/community")} className="home-link">
                  BLOG
                </NavLink>

                <NavLink to="/help" onClick={go("/help")} className="home-link">
                  PAGES
                </NavLink>

                <NavLink to="/contact" onClick={go("/contact")} className="home-link">
                  CONTACT
                </NavLink>
              </nav>
            </div>

            {/* CENTER LOGO */}
            <div className="home-brand">GLOWESS</div>

            {/* RIGHT */}
            <div className="home-right">
              <button className="home-country" type="button">
                UNITED STATES (USD $) <span className="home-caret">▾</span>
              </button>

              <div className="home-icons">
                <Box className="home-icon-btn" onClick={go("/")}>
                  <NavLink to="/">
                    <img src="/icons/rasm4.jpeg" alt="Search" className="home-icon-img" />
                  </NavLink>
                </Box>

                <Box className="home-icon-btn" onClick={go("/brand")}>
                  <NavLink to="/brand">
                    <img src="/icons/rasm2.jpeg" alt="User" className="home-icon-img" />
                  </NavLink>
                </Box>

                <Box className="home-icon-btn" onClick={go("/orders")}>
                  <NavLink to="/orders">
                    <Badge
                      badgeContent={23}
                      color="primary"
                      overlap="circular"
                      anchorOrigin={{ vertical: "top", horizontal: "right" }}
                      className="home-badge"
                    >
                      <img
                        src="/icons/feyri_icon_cart.png"
                        alt="Cart"
                        className="home-icon-img"
                      />
                    </Badge>
                  </NavLink>
                </Box>
              </div>
            </div>
          </div>

          <div className="home-header-line" />
        </header>

        {/* Catalog mega menu (sizdagi eski glowess-catalog-panel ni ishlatadi) */}
        {isCatalogOpen && (
          <div
            className="glowess-catalog-panel home-catalog-panel"
            onMouseEnter={openCatalog}
            onMouseLeave={closeCatalog}
          >
            <div className="glowess-catalog-inner">
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

              <div className="glowess-catalog-featured">
                <article className="glowess-catalog-card">
                  <div className="glowess-catalog-card-img-wrap">
                    <img src="/images/image.png" alt="All products" className="glowess-catalog-card-img" />
                  </div>
                  <div className="glowess-catalog-card-caption">All Products</div>
                </article>

                <article className="glowess-catalog-card">
                  <div className="glowess-catalog-card-img-wrap">
                    <img src="/images/image copy 2.png" alt="Sale" className="glowess-catalog-card-img" />
                  </div>
                  <div className="glowess-catalog-card-caption">Sale</div>
                </article>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* HERO TEXT */}
      <div className="home-hero-content">
        <div className="home-hero-kicker">99.5% NATURAL. 100% YOU.</div>
        <h1 className="home-hero-title">Beauty You Collection</h1>

        <button className="home-hero-btn" type="button" onClick={go("/brand")}>
          SHOP NOW <span className="home-hero-arrow">↗</span>
        </button>
      </div>
    </section>
  );
}
