import { Box, Button, Container } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import { CardOverflow, IconButton } from "@mui/joy";
import { Favorite, Visibility } from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router-dom";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveTopBrands } from "./selector";
import { setTopBrands } from "./slice";
import type { AppDispatch } from "../../../store";

import { Brand } from "../../types/user";
import { serverApi } from "../../../lib/config";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import MemberApiService from "../../apiServices/memberApiServices";
import BrandApiServices from "../../apiServices/brandApiServices";
import useDeviceDetect from "../../../lib/responsive/useDeviceDetect";
import Zoom from "react-reveal/Zoom";
import "../../../css/topBrand.css";

/** REDUX SELECTOR */
const topBrandsRetriever = createSelector(retrieveTopBrands, (topBrands) => ({
  topBrands,
}));

export function TopBrands() {
  /** INITIALIZATIONS */
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { topBrands } = useSelector(topBrandsRetriever);
  const { isMobile } = useDeviceDetect();

  const refs = useRef<Record<string, HTMLDivElement | null>>({});
  const [loading, setLoading] = useState<boolean>(false);

  /** FETCH TOP BRANDS */
  useEffect(() => {
    const brandService = new BrandApiServices();

    const fetchTopBrands = async () => {
      try {
        setLoading(true);
        const data = await brandService.getTopBrands();
        console.log("TOP BRANDS FROM API:", data);
        dispatch(setTopBrands(data));
      } catch (err) {
        console.log("getTopBrands ERROR:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTopBrands();
  }, [dispatch]);

  /** HANDLERS */
  const chooseBrandHandler = (id: string) => {
    navigate(`/brand/${id}`);
  };

  const goBrandsHandler = () => {
    navigate("/brand");
  };

  const targetLikeTop = async (
    e: React.MouseEvent<SVGSVGElement>,
    id: string
  ) => {
    try {
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);

      const memberService = new MemberApiService();
      const like_result: any = await memberService.memberLikeTarget({
        like_ref_id: id,
        group_type: "member",
      });

      assert.ok(like_result, Definer.general_err1);

      const refEl = refs.current[like_result.like_ref_id];

      if (like_result.like_status > 0) {
        (e.currentTarget as SVGElement).style.fill = "red";
        if (refEl) {
          refEl.innerHTML = String(Number(refEl.innerHTML) + 1);
        }
      } else {
        (e.currentTarget as SVGElement).style.fill = "white";
        if (refEl) {
          refEl.innerHTML = String(Number(refEl.innerHTML) - 1);
        }
      }

      await sweetTopSmallSuccessAlert("Success", 700, false);
    } catch (err: any) {
      console.log("targetLikeTop ERROR:", err);
      sweetErrorHandling(err).then();
    }
  };

  if (isMobile()) return null;

  return (
    <div className="top_brands_frame">
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Zoom duration={1000}>
          <Box className="title-row">
            <div className="title-side-icon-wrap">
              <img
                src="/icons/crownHeart.png"
                alt="left icon"
                className="title-side-icon"
              />
            </div>

            <span className="category_title">Featured Brands</span>

            <div className="title-side-icon-wrap">
              <img
                src="/icons/bagStars.png"
                alt="right icon"
                className="title-side-icon"
              />
            </div>
          </Box>
        </Zoom>

        {loading && (
          <Box sx={{ textAlign: "center", mt: 3 }}>Loading brands...</Box>
        )}

        {!loading && topBrands.length === 0 && (
          <Box sx={{ textAlign: "center", mt: 3 }}>
            No featured brands found.
          </Box>
        )}

        <Stack
          className="top-brands"
          style={{
            minHeight: "480px",
            width: "100%",
            marginTop: "40px",
          }}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          {topBrands.map((ele: Brand) => {
            const image_path = `${serverApi}/${ele.mb_image}`;

            return (
              <Stack
                className="top-brands_box"
                key={ele._id}
                onClick={() => chooseBrandHandler(ele._id)}
              >
                <Stack className="brand-img">
                  <img src={image_path} className="img" alt={ele.mb_nick} />
                </Stack>

                <Stack className="brand-info">
                  <CssVarsProvider>
                    <Stack className="info-top">
                      <Box className="info-top_nick">{ele.mb_nick}</Box>

                      <Box className="info-top_address">
                        <img
                          src="/icons/location.svg"
                          alt="location"
                          style={{ marginRight: "8px" }}
                        />
                        서울 강남구 가로수길 18
                      </Box>

                      <Box className="info-top_address">
                        <img
                          src="/icons/call.svg"
                          alt="phone"
                          style={{ marginRight: "8px" }}
                        />
                        {ele.mb_phone}
                      </Box>
                    </Stack>

                    <CardOverflow
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        py: 0.4,
                      }}
                    >
                      <IconButton
                        aria-label="Like"
                        size="md"
                        variant="solid"
                        color="neutral"
                        sx={{
                          position: "absolute",
                          zIndex: 2,
                          borderRadius: "50%",
                          right: "1rem",
                          bottom: 35,
                          transform: "translateY(50%)",
                          color: "rgba(0, 0, 0, .4)",
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Favorite
                          onClick={(e) => {
                            e.stopPropagation();
                            targetLikeTop(e, ele._id);
                          }}
                          style={{
                            fill:
                              ele?.me_liked && ele?.me_liked[0]?.my_favorite
                                ? "red"
                                : "white",
                          }}
                        />
                      </IconButton>

                      <Typography
                        sx={{
                          fontWeight: "md",
                          color: "#423126",
                          alignItems: "center",
                          display: "flex",
                          fontSize: "15px",
                        }}
                      >
                        <Visibility
                          sx={{
                            fontSize: 20,
                            marginLeft: "5px",
                            marginRight: "5px",
                          }}
                        />
                        {ele.mb_views}
                      </Typography>

                      <Box sx={{ width: 2, bgcolor: "divider" }} />

                      <Typography
                        sx={{
                          fontWeight: "md",
                          color: "#423126",
                          alignItems: "center",
                          display: "flex",
                          fontSize: "15px",
                        }}
                      >
                        <Favorite
                          sx={{
                            fontSize: 20,
                            marginLeft: "5px",
                            marginRight: "5px",
                          }}
                        />
                        <div ref={(el) => (refs.current[ele._id] = el)}>
                          {ele.mb_likes}
                        </div>
                      </Typography>
                    </CardOverflow>
                  </CssVarsProvider>
                </Stack>
              </Stack>
            );
          })}
        </Stack>

        <Stack
          style={{
            height: "60px",
            width: "100%",
            marginTop: "0px",
            marginBottom: "12px",
          }}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
        >
          <Button
            component={NavLink}
            to="/brand"
            className="see-btn success"
            onClick={goBrandsHandler}
          >
            See All Brands
          </Button>
        </Stack>
      </Container>
    </div>
  );
}

export default TopBrands;