import React from "react";
import "../../../css/memberPost.css";

import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  IconButton,
  TextField,
  Avatar,
  Badge,
  Checkbox,
  Stack,
} from "@mui/material";
import { Visibility, FavoriteBorder, Favorite, Face } from "@mui/icons-material";
import moment from "moment";
import assert from "assert";

import { BoArticle } from "../../types/boArticle";
import { serverApi } from "../../../lib/config";
import MemberApiServices from "../../apiServices/memberApiServices";
import { Definer } from "../../../lib/Definer";
import { sweetErrorHandling, sweetTopSmallSuccessAlert } from "../../../lib/sweetAlert";

type Props = {
  chosenMemberArticles?: BoArticle[];
  renderChosenArticleHandler?: (id: string) => void;
  setArticleRebuild?: (d: Date) => void;
};

const MemberPost = ({
  chosenMemberArticles = [],
  renderChosenArticleHandler,
  setArticleRebuild,
}: Props) => {
  const likeArticle = async (articleId: string) => {
    try {
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);

      const memberService = new MemberApiServices();
      const like_result: any = await memberService.memberLikeTarget({
        like_ref_id: articleId,
        group_type: "community",
      });

      assert.ok(like_result, Definer.general_err1);
      await sweetTopSmallSuccessAlert("success", 700, false);
      setArticleRebuild?.(new Date());
    } catch (err: any) {
      console.log(`ERROR ::: likeArticle`, err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div className="feyri-posts">
      {chosenMemberArticles && chosenMemberArticles.length > 0 ? (
        <div className="feyri-posts__grid">
          {chosenMemberArticles.map((article: BoArticle) => {
            const art_image_url = article?.art_image
              ? `${serverApi}/${article?.art_image}`
              : "/home/new_r.jpeg";

            const avatar_url = article?.member_data?.mb_image
              ? `${serverApi}/${article.member_data.mb_image}`
              : "/auth/default_user.svg";

            const nick = article?.member_data?.mb_nick || "Anonymous";
            const isLiked =
              !!(article?.me_liked && article?.me_liked[0]?.my_favorite);

            return (
              <Box key={article._id} className="feyri-posts__cell">
                <Card
                  className="feyri-post-card"
                  onClick={() => renderChosenArticleHandler?.(article._id)}
                >
                  {/* Header */}
                  <CardContent className="feyri-post-card__header">
                    <Avatar
                      src={avatar_url}
                      alt={nick}
                      className="feyri-post-card__avatar"
                    />
                    <div className="feyri-post-card__headText">
                      <div className="feyri-post-card__badge">User</div>
                      <div className="feyri-post-card__nick">{nick}</div>
                    </div>
                  </CardContent>

                  {/* Image */}
                  <CardMedia
                    component="img"
                    image={art_image_url}
                    alt={article?.art_subject || "Article"}
                    className="feyri-post-card__media"
                  />

                  {/* Actions */}
                  <CardContent className="feyri-post-card__actions">
                    <Badge
                      badgeContent={article?.art_likes || 0}
                      className="feyri-post-card__badgeLikes"
                    >
                      <Checkbox
                        checked={isLiked}
                        onClick={(e) => {
                          e.stopPropagation();
                          likeArticle(article._id);
                        }}
                        className="feyri-post-card__like"
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                      />
                    </Badge>

                    <Badge
                      badgeContent={article?.art_views || 0}
                      className="feyri-post-card__badgeViews"
                    >
                      <IconButton
                        className="feyri-post-card__viewsBtn"
                        onClick={(e) => e.stopPropagation()}
                        size="small"
                      >
                        <Visibility />
                      </IconButton>
                    </Badge>
                  </CardContent>

                  {/* Content */}
                  <CardContent className="feyri-post-card__body">
                    <Typography
                      component="div"
                      className="feyri-post-card__content"
                    >
                      <span className="feyri-post-card__boid">
                        {article?.bo_id}
                      </span>
                      <span className="feyri-post-card__text">
                        {article?.art_content}
                      </span>
                    </Typography>

                    <div className="feyri-post-card__time">
                      {moment(article?.createdAt).format("YY-MM-DD HH:mm")}
                    </div>
                  </CardContent>

                  {/* Comment (UI only) */}
                  <CardContent className="feyri-post-card__comment">
                    <IconButton
                      className="feyri-post-card__commentIcon"
                      onClick={(e) => e.stopPropagation()}
                      size="small"
                    >
                      <Face />
                    </IconButton>

                    <TextField
                      variant="standard"
                      placeholder="Add a comment…"
                      fullWidth
                      onClick={(e) => e.stopPropagation()}
                      InputProps={{ disableUnderline: true }}
                      className="feyri-post-card__input"
                    />

                    <button
                      type="button"
                      className="feyri-post-card__postBtn"
                      onClick={(e) => {
                        e.stopPropagation();
                        // keyin comment API ulaymiz
                      }}
                    >
                      Post
                    </button>
                  </CardContent>
                </Card>
              </Box>
            );
          })}
        </div>
      ) : (
        <div className="feyri-posts__empty">No articles found</div>
      )}
    </div>
  );
};

export default MemberPost;
