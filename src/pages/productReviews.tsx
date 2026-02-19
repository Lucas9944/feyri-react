// src/pages/productReviews.tsx
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Button, TextField } from "@mui/material";
import Rating from "@mui/material/Rating";

import ProductApiService, {
  Review,
  CreateReviewBody,
} from "../app/apiServices/productApiService";

import "../css/product-pages.css";

export default function ProductReviews() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const api = useMemo(() => new ProductApiService(), []);

  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [errMsg, setErrMsg] = useState<string>("");

  // form state
  const [rating, setRating] = useState<number>(5);
  const [text, setText] = useState<string>("");

  const loadReviews = async (productId: string) => {
    setErrMsg("");
    setLoading(true);
    try {
      const list = await api.getProductReviews(productId);
      setReviews(list);
    } catch (e: any) {
      setErrMsg(e?.message || "Reviews yuklashda xatolik.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!id) return;
    loadReviews(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleSubmit = async () => {
    if (!id) return;

    const body: CreateReviewBody = {
      review_rating: rating,
      review_text: text?.trim() ? text.trim() : undefined,
    };

    setErrMsg("");
    setLoading(true);
    try {
      await api.createProductReview(id, body);
      setText("");
      setRating(5);
      await loadReviews(id); // refresh
    } catch (e: any) {
      setErrMsg(e?.message || "Review yuborishda xatolik.");
    } finally {
      setLoading(false);
    }
  };

  if (!id) {
    return (
      <div className="pr_wrap">
        <Container className="pr_container">
          <div className="pr_formCard">
            <div className="pr_brand">FEYRI BEAUTY</div>
            <div className="pr_title">Invalid product id</div>
            <div className="pr_sub">URL’da product id topilmadi.</div>

            <div className="pr_actions">
              <button className="pr_btn pr_btnPrimary" onClick={() => navigate("/")}>
                Bosh sahifaga
              </button>
              <button className="pr_btn pr_btnGhost" onClick={() => navigate(-1)}>
                Orqaga
              </button>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="pr_wrap">
      <Container className="pr_container">
        <div className="pr_headerRow">
          <div>
            <div className="pr_brand">FEYRI BEAUTY</div>
            <div className="pr_title">Reviews</div>
            <div className="pr_sub">Product ID: <b>{id}</b></div>
          </div>

          <div className="pr_headerActions">
            <Button
              className="pr_btnMui pr_btnGhost"
              variant="outlined"
              onClick={() => navigate(`/brand/products/${id}`)}
            >
              Productga qaytish
            </Button>
            <Button
              className="pr_btnMui pr_btnGhost"
              variant="outlined"
              onClick={() => navigate(-1)}
            >
              Orqaga
            </Button>
          </div>
        </div>

        {/* Create review */}
        <div className="pr_formCard">
          <div className="pr_formTitle">Review yozish</div>

          <div className="pr_formRow">
            <div className="pr_formLabel">Rating</div>
            <Rating
              value={rating}
              onChange={(_, v) => setRating(v ?? 5)}
              precision={0.5}
            />
          </div>

          <div className="pr_formRow" style={{ alignItems: "flex-start" }}>
            <div className="pr_formLabel">Text</div>
            <TextField
              fullWidth
              multiline
              minRows={3}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Review matnini yozing..."
            />
          </div>

          {errMsg ? <div className="pr_sub" style={{ color: "#d84f86" }}>{errMsg}</div> : null}

          <div className="pr_actions">
            <button
              className="pr_btn pr_btnPrimary"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Yuborilmoqda..." : "Submit"}
            </button>
            <button
              className="pr_btn pr_btnGhost"
              onClick={() => {
                setRating(5);
                setText("");
              }}
              disabled={loading}
            >
              Clear
            </button>
          </div>
        </div>

        {/* Reviews list */}
        <div className="pr_listHead">
          <div className="pr_listTitle">Reviewlar</div>
          <div className="pr_listMeta">{reviews.length} ta</div>
        </div>

        {loading ? (
          <div className="pr_empty">Loading...</div>
        ) : reviews.length === 0 ? (
          <div className="pr_empty">Hali review yo‘q.</div>
        ) : (
          <div className="pr_list">
            {reviews.map((r) => (
              <div className="pr_item" key={r._id}>
                <div className="pr_itemTop">
                  <Rating value={r.review_rating} readOnly precision={0.5} />
                  <div className="pr_time">
                    {new Date(r.createdAt).toLocaleString()}
                  </div>
                </div>

                {r.review_text ? <div className="pr_text">{r.review_text}</div> : null}
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
