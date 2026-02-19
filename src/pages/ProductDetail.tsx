import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Container, Box, Stack, Button } from "@mui/material";
import Rating from "@mui/material/Rating";

import ProductApiService from "../app/apiServices/productApiService";
import { Product } from "../app/types/product";

import "../css/product-pages.css";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!id) return;
    setLoading(true);

    const service = new ProductApiService();
    service
      .getChosenProduct(id)
      .then((data) => setProduct(data))
      .catch(console.log)
      .finally(() => setLoading(false));
  }, [id]);

  if (!id) {
    return (
      <div className="pd_wrap">
        <div className="pd_card">
          <div className="pd_brand">FEYRI BEAUTY</div>
          <div className="pd_title">Invalid product id</div>
          <div className="pd_sub">URL’da product id yo‘q yoki noto‘g‘ri.</div>
          <div className="pd_actions">
            <button className="pd_btn pd_btnPrimary" onClick={() => navigate("/")}>
              Bosh sahifaga
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (loading || !product) {
    return (
      <div className="pd_wrap">
        <div className="pd_card">
          <div className="pd_brand">FEYRI BEAUTY</div>
          <div className="pd_title">Loading...</div>
          <div className="pd_sub">Mahsulot ma’lumotlari yuklanmoqda.</div>
        </div>
      </div>
    );
  }

  const img = product.product_images?.[0];
  const imageUrl = img ? `/${img}` : "/icons/product_placeholder.png"; // siz serverApi ishlatsangiz ayting, moslab beraman

  const hasDiscount = Number(product.discountedPrice ?? 0) > 0;
  const oldPrice = product.product_price ?? 0;
  const newPrice = Math.floor(product.discountedPrice ?? 0);

  return (
    <div className="pd_wrap">
      <Container className="pd_container">
        <div className="pd_headerRow">
          <div>
            <div className="pd_brand">FEYRI BEAUTY</div>
            <div className="pd_title">{product.product_name}</div>
            <div className="pd_sub">
              Collection: <b>{product.product_collection}</b>
            </div>
          </div>

          <div className="pd_headerActions">
            <Button
              className="pd_btnMui pd_btnGhost"
              variant="outlined"
              onClick={() => navigate(-1)}
            >
              Orqaga
            </Button>

            <Button
              className="pd_btnMui pd_btnPrimary"
              variant="contained"
              onClick={() => navigate(`/brand/products/${id}/reviews`)}
            >
              Reviews ({product.product_reviews ?? 0})
            </Button>
          </div>
        </div>

        <div className="pd_grid">
          {/* Left: image */}
          <div className="pd_mediaCard">
            <div
              className="pd_image"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
            {hasDiscount ? (
              <div className="pd_badge">
                -{product.discount?.value ?? 0}
                {product.discount?.type === "amount" ? "$" : "%"}
              </div>
            ) : null}
          </div>

          {/* Right: info */}
          <div className="pd_infoCard">
            <div className="pd_row">
              <div className="pd_label">Rating</div>
              <div className="pd_value">
                <Rating value={product.product_rating ?? 0} precision={0.5} readOnly />
                <span className="pd_muted">({product.product_reviews ?? 0} reviews)</span>
              </div>
            </div>

            <div className="pd_row">
              <div className="pd_label">Price</div>
              <div className="pd_value">
                {hasDiscount ? (
                  <>
                    <span className="pd_oldPrice">${oldPrice}</span>
                    <span className="pd_newPrice">${newPrice}</span>
                  </>
                ) : (
                  <span className="pd_newPrice">${oldPrice}</span>
                )}
              </div>
            </div>

            <div className="pd_row">
              <div className="pd_label">Stock</div>
              <div className="pd_value">{product.product_left_cnt ?? 0} pcs</div>
            </div>

            <div className="pd_divider" />

            <div className="pd_descTitle">Description</div>
            <div className="pd_desc">{product.product_description}</div>

            <div className="pd_actions">
              <button className="pd_btn pd_btnPrimary" onClick={() => navigate(`/brand/products/${id}/reviews`)}>
                Review yozish / ko‘rish
              </button>

              <Link className="pd_btn pd_btnGhost" to="/">
                Bosh sahifaga
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
