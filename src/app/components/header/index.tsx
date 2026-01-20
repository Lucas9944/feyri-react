import React, { useMemo, useState } from "react";
import { Badge, Box, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

type NavbarHomeProps = {
  setPath: React.Dispatch<React.SetStateAction<string>>;
};

type HeroSlide = {
  img: string;
  kicker: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaTo: string;
};

export function NavbarHome({ setPath }: NavbarHomeProps) {
  const [isCatalogOpen, setCatalogOpen] = useState(false);

  const openCatalog = () => setCatalogOpen(true);
  const closeCatalog = () => setCatalogOpen(false);

  const go = (path: string) => () => {
    setPath(path);
    setCatalogOpen(false);
  };

  const slides: HeroSlide[] = useMemo(
    () => [
      {
        img: "/products/qwe.jpg",
        kicker: "99.5% NATURAL. 100% YOU.",
        title: "Beauty You Collection",
        subtitle: "Yuz terisi uchun yumshoq parvarish: namlantirish, tiklash va himoya.",
        cta: "SHOP NOW",
        ctaTo: "/brand",
      },
      {
        img: "/products/pink-model-career-kit-arrangement.jpg",
        kicker: "SKINCARE ROUTINE",
        title: "Glow Starts Here",
        subtitle: "Kunlik skincare rutini: cleanser → toner → serum → cream.",
        cta: "SHOP NOW",
        ctaTo: "/brand",
      },
      {
        img: "/products/close-up-woman-doing-korean-skincare.jpg",
        kicker: "SENSITIVE CARE",
        title: "Gentle & Effective",
        subtitle: "Sezgir teri uchun: minimal ingredient, maksimal natija.",
        cta: "SHOP NOW",
        ctaTo: "/brand",
      },
      {
        img: "/products/123.jpg",
        kicker: "MAKEUP + CARE",
        title: "Beauty With Care",
        subtitle: "Makeup ostida ham teri nafas olsin — yengil va sof formulalar.",
        cta: "SHOP NOW",
        ctaTo: "/brand",
      },
    ],
    []
  );

  return (
    <section className="hero">
      {/* NAVBAR + CATALOG */}
      <div className="glowess-nav-shell" onMouseLeave={closeCatalog}>
        <header className="glowess-header">
          <div className="glowess-header-inner">
            <div className="glowess-left">
              <button
                type="button"
                className="glowess-burger"
                onClick={openCatalog}
                onMouseEnter={openCatalog}
                aria-label="Open catalog"
              >
                <span />
                <span />
                <span />
              </button>

              <nav className="glowess-main-menu">
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
                    Shop
                  </NavLink>
                </Box>

                <Box className="hover-line" onClick={go("/orders")}>
                  <NavLink to="/orders" className="underline">
                    Order
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

            <Stack className="wrapp_logo">
              <Box className="logo_brand logo_brand--home">FEYRI BEAUTY</Box>
              <Box className="logo_tagline">GO&apos;ZALLIK – BU SENING SEHRING</Box>
            </Stack>

            <div className="glowess-right">
              <Stack
                flexDirection="row"
                justifyContent="space-evenly"
                alignItems="center"
                className="icon_links"
              >
                <Box className="icon_btn" onClick={go("/")}>
                  <NavLink to="/">
                    <img src="/icons/rasm4.jpeg" alt="Search" className="nav_icon_img" />
                  </NavLink>
                </Box>

                <Box className="icon_btn" onClick={go("/brand")}>
                  <NavLink to="/brand">
                    <img src="/icons/rasm2.jpeg" alt="User" className="nav_icon_img" />
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
                    <img src="/icons/rasm3.jpeg" alt="Heart" className="nav_icon_img" />
                  </NavLink>
                </Box>
              </Stack>
            </div>
          </div>
        </header>

        {isCatalogOpen && (
          <div
            className="glowess-catalog-panel"
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

      {/* SWIPER */}
      <Swiper
        className="hero-swiper"
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
      >
        {slides.map((s, idx) => (
          <SwiperSlide key={idx}>
            <div className="hero-slide" style={{ backgroundImage: `url(${s.img})` }}>
              <div className="hero-slide-overlay" />
              <div className="hero-content">
                <div className="hero-kicker">{s.kicker}</div>
                <h1 className="hero-title">{s.title}</h1>
                <p className="hero-subtitle">{s.subtitle}</p>

                <button className="hero-cta" type="button" onClick={go(s.ctaTo)}>
                  {s.cta} <span className="hero-cta-arrow">↗</span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
