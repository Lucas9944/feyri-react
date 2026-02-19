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

// ** REDUX SELECTOR */
const topTradingsRetriever = createSelector(
  retrieveTradingProducts,
  (topTradings) => ({
    topTradings,
  })
);

export function TopRating() {
  //* INITIALIZATION */
  const { topTradings } = useSelector(topTradingsRetriever);
  console.log("topTradings:", topTradings);

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
          {topTradings.map((ele: Brand) => {
            const title = ele?.mb_nick ?? "Brand";
            const views = (ele as any)?.mb_views ?? 0;
            const likes = (ele as any)?.mb_likes ?? 0;

            const rawImg = ele?.mb_image ?? "";
            const image_path = `${serverApi}/${ele.mb_image}`;

            return (
              <Link
                key={ele._id}
                to={`/shops/${ele._id}`}
                className="feyri_card"
              >
                <div className="feyri_card__media">
                  <img
                    src={image_path}
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
