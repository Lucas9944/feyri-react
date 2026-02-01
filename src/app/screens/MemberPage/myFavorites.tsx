import React, { useState } from "react";
import "../../../css/myfavorite.css";
import { Checkbox, Rating, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

const ACCENT = "#f48fb1";

export default function MyFavorites() {
  const [hoverOk, setHoverOk] = useState(true);
  const [liked, setLiked] = useState(false);
  const [watched, setWatched] = useState(false);

  const mainImg = "/images/image123.png";
  const hoverImg = "/home/chain.jpeg"; // public/home/chain.jpeg bo‘lishi shart

  return (
    <div className="feyri-fav-card">
      <div className={`feyri-fav-card__media ${hoverOk ? "has-hover" : ""}`}>
        <img className="feyri-fav-card__img is-main" src={mainImg} alt="product" />

        {hoverOk && (
          <img
            className="feyri-fav-card__img is-hover"
            src={hoverImg}
            alt="product alt"
            onError={() => setHoverOk(false)} // <-- hover rasm yo‘q bo‘lsa: disable
          />
        )}

        <div className="feyri-fav-card__actions">
          <Checkbox
            checked={watched}
            onChange={(e) => setWatched(e.target.checked)}
            icon={<RemoveRedEyeOutlinedIcon />}
            checkedIcon={<RemoveRedEyeOutlinedIcon />}
            className="feyri-fav-card__toggle"
            sx={{
              padding: "6px",
              color: "rgba(0,0,0,0.65)",
              "&.Mui-checked": { color: ACCENT }, // <-- ko‘k yo‘q
            }}
          />

          <Checkbox
            checked={liked}
            onChange={(e) => setLiked(e.target.checked)}
            icon={<FavoriteBorderIcon />}
            checkedIcon={<FavoriteIcon />}
            className="feyri-fav-card__toggle"
            sx={{
              padding: "6px",
              color: "rgba(0,0,0,0.65)",
              "&.Mui-checked": { color: ACCENT }, // <-- ko‘k yo‘q
            }}
          />
        </div>

        <button className="feyri-fav-card__cta" type="button">
          Add to cart
        </button>
      </div>

      <div className="feyri-fav-card__body">
        <Typography className="feyri-fav-card__title">
          Elegant Gold Necklace
        </Typography>

        <Typography className="feyri-fav-card__price">$2,900</Typography>

        <Rating className="feyri-fav-card__rating" defaultValue={4.5} precision={0.5} />
      </div>
    </div>
  );
}
