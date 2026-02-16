// // src/app/screens/HomePage/TopRating.tsx
// import { Container, Stack, Box, Typography, Button } from "@mui/material";

// // REDUX
// import { useDispatch, useSelector } from "react-redux";
// import { Dispatch } from "@reduxjs/toolkit";
// import { createSelector } from "reselect";
// import { setTopTradings } from "../../screens/HomePage/slice";
// import { retrieveTradingProducts } from "../../screens/HomePage/selector";
// import { Brand } from "../../types/user";
// import BrandApiServices from "../../apiServices/brandApiServices";
// import { serverApi } from "../../../lib/config";

// // ** REDUX SELECTOR **
// const setTopTradingsRetriever = createSelector(
//   [retrieveTradingProducts],
//   (topTradings) => ({
//     topTradings,
//   })
// );

// export function TopRating() {
//   const { topTradings } = useSelector(setTopTradingsRetriever);

//   console.log("topTradings:", topTradings);

//   return (
//     <section className="latest_section">
//       <Container maxWidth="lg">
//         <Stack className="latest_header" spacing={1}>
//           <Typography className="latest_title">Latest Collection</Typography>
//           <Typography className="latest_subtitle">
//             Our universally agreed, most-loved products.
//           </Typography>
//         </Stack>

//         <Box className="latest_grid">
//           {topTradings.map((ele: Brand) => {
//             const image_path = `${serverApi}/${ele.mb_image}`;

//             return (
//               <article key={image_path} className="latest_card">
//                 <div className="latest_media">
//                   <div className="latest_image_box">
//                     <img src={image_path} alt={"asd"} />
//                   </div>

//                   <Button className="latest_button">ADD TO CART ↗</Button>
//                 </div>

//                 <Typography className="latest_name">{}</Typography>
//                 <Typography className="latest_price">{}</Typography>
//               </article>
//             );
//           })}
//         </Box>
//       </Container>
//     </section>
//   );
// }

// src/app/screens/HomePage/TopRating.tsx

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Chip, Tooltip } from "@mui/material";

import { Container, Stack, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveTradingProducts } from "../../screens/HomePage/selector";
import { serverApi } from "../../../lib/config";
import type { Brand } from "../../types/user";
import { Link } from "react-router-dom";

const sel = createSelector([retrieveTradingProducts], (topTradings) => ({
  topTradings,
}));

export function TopRating() {
  const { topTradings } = useSelector(sel);
  const items = (topTradings ?? []) as Brand[];

  return (
    <section className="feyri_latest">
      <Container maxWidth="lg">
        <Stack className="feyri_latest__header" spacing={1}>
          <Typography className="feyri_latest__title">
            Latest Collection
          </Typography>
          <Typography className="feyri_latest__subtitle">
            Our universally agreed, most-loved products.
          </Typography>
        </Stack>

        <Box className="feyri_grid">
          {items.map((ele) => {
            const title = ele?.mb_nick ?? "Brand";
            const views = (ele as any)?.mb_views ?? 0;
            const likes = (ele as any)?.mb_likes ?? 0;

            const rawImg = ele?.mb_image ?? "";
            const imagePath = rawImg
              ? `${serverApi}/${rawImg}`
              : "/images/placeholder.png";

            return (
              <Link
                key={ele._id}
                to={`/shops/${ele._id}`}
                className="feyri_card"
              >
                <div className="feyri_card__media">
                  <img
                    src={imagePath}
                    alt={title}
                    className="feyri_card__img"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "/images/placeholder.png";
                    }}
                  />
                </div>

                <div className="feyri_card__info">
                  <div className="feyri_card__name" title={ele.mb_nick}>
                    {title}
                  </div>

                  <div className="feyri_card__stats">
                    <Tooltip title="Views" arrow>
                      <Chip
                        size="small"
                        variant="outlined"
                        icon={<VisibilityOutlinedIcon />}
                        label={ele.mb_views}
                        className="feyri_chip"
                      />
                    </Tooltip>

                    <Tooltip title="Likes" arrow>
                      <Chip
                        size="small"
                        variant="outlined"
                        icon={
                          <FavoriteBorderOutlinedIcon
                            style={{
                              fill:
                                ele?.me_liked && ele?.me_liked[0].my_favorite
                                  ? "❤️"
                                  : "🤍",
                            }}
                          />
                        }
                        label={ele.mb_likes}
                        className="feyri_chip feyri_chip--pink"
                      />
                    </Tooltip>
                  </div>
                </div>
              </Link>
            );
          })}
        </Box>
      </Container>
    </section>
  );
}
