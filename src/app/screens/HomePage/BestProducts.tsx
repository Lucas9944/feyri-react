// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { Container, Box, Stack, Button } from "@mui/material";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import Rating from "@mui/material/Rating";
// import Checkbox from "@mui/material/Checkbox";
// import { Favorite, FavoriteBorder } from "@mui/icons-material";
// import ChatIcon from "@mui/icons-material/Chat";
// import Badge from "@mui/material/Badge";

// import { useDispatch, useSelector } from "react-redux";
// import { Dispatch } from "@reduxjs/toolkit";
// import { createSelector } from "reselect";

// import { setBestProducts } from "./slice";
// import { retrieveBestProducts } from "./selector";
// import { Product } from "../../types/product";
// import ProductApiService from "../../apiServices/productApiService";
// import { serverApi } from "../../../lib/config";

// import { useNavigate } from "react-router-dom";

// import { verifiedMemberData } from "../../apiServices/verify";
// import { Definer } from "../../../lib/Definer";
// import MemberApiService from "../../apiServices/memberApiServices";
// import {
//   sweetErrorHandling,
//   sweetTopSmallSuccessAlert,
// } from "../../../lib/sweetAlert";
// import useDeviceDetect from "../../../lib/responsive/useDeviceDetect";

// /** REDUX SLICE */
// const actionDispatch = (dispatch: Dispatch) => ({
//   setBestProducts: (data: Product[]) => dispatch(setBestProducts(data)),
// });

// /** REDUX SELECTOR */
// const bestProductsRetriever = createSelector(
//   retrieveBestProducts,
//   (bestProducts) => ({
//     bestProducts,
//   })
// );

// type BestProductsProps = {
//   onAdd: (product: Product) => void;
// };

// export function BestProducts({ onAdd }: BestProductsProps) {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { setBestProducts } = actionDispatch(dispatch);
//   const { bestProducts } = useSelector(bestProductsRetriever);

//   const [productRebuild, setProductRebuild] = useState<Date>(new Date());
//   const [timeRemainingArray, setTimeRemainingArray] = useState<string[]>([]);

//   // ✅ StrictMode double-fetch guard
//   const fetchedOnceRef = useRef(false);

//   // ✅ request body stable bo‘lsin
//   const requestBody = useMemo(
//     () => ({
//       page: 1,
//       limit: 15,
//       order: "product_likes",
//       product_name: "all",
//       product_collection: "all",
//       brand_mb_id: "all",
//       product_size: "all",
//       product_color: "all",
//       product_volume: "all",
//     }),
//     []
//   );

//   /** Fetch best products (NO infinite loop) */
//   useEffect(() => {
//     // ✅ dev StrictMode’da ham 1 martadan oshmasin
//     if (fetchedOnceRef.current && !productRebuild) return;
//     fetchedOnceRef.current = true;

//     const productService = new ProductApiService();

//     productService
//       .getTargetProducts(requestBody)
//       .then((data) => setBestProducts(data))
//       .catch((err) => console.log(err));
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [productRebuild, requestBody]);

//   /** Timer */
//   const formatTimeRemaining = (endTime?: string | Date): string => {
//     if (!endTime) return "00:00:00";

//     const now = new Date();
//     const endDate = new Date(endTime);
//     const diff = endDate.getTime() - now.getTime();
//     if (Number.isNaN(endDate.getTime()) || diff <= 0) return "00:00:00";

//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((diff % (1000 * 60)) / 1000);

//     return `${days > 0 ? `${days}d ` : ""}${hours
//       .toString()
//       .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
//       .toString()
//       .padStart(2, "0")}`;
//   };

//   // ✅ Timer faqat discount endDate bor productlar uchun ishlasin (yengil)
//   const hasAnyTimer = useMemo(
//     () => bestProducts.some((p) => p?.discount?.endDate),
//     [bestProducts]
//   );

//   useEffect(() => {
//     if (!hasAnyTimer) return;

//     const interval = setInterval(() => {
//       setTimeRemainingArray(
//         bestProducts.map((p: Product) =>
//           formatTimeRemaining(p.discount?.endDate as any)
//         )
//       );
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [bestProducts, hasAnyTimer]);

//   /** Handlers */
//   const chosenProductHandler = (id: string) => {
//     navigate(`/brand/products/${id}`);
//   };

//   const targetLikeProduct = async (e: any) => {
//     try {
//       if (!verifiedMemberData) throw new Error(Definer.auth_err1);

//       const memberService = new MemberApiService();
//       const like_result: any = await memberService.memberLikeTarget({
//         like_ref_id: e.target.id,
//         group_type: "product",
//       });

//       if (!like_result) throw new Error(Definer.general_err1);

//       await sweetTopSmallSuccessAlert("Success", 700, false);
//       setProductRebuild(new Date()); // ✅ only here refresh
//     } catch (error: any) {
//       console.log("targetLikeProduct, ERROR:", error);
//       sweetErrorHandling(error).then();
//     }
//   };

//   const { isMobile } = useDeviceDetect();
//   const swiperModules = useMemo(() => [Autoplay, Navigation, Pagination], []);

//   const renderSlide = (
//     product: Product,
//     index: number,
//     isMobileMode: boolean
//   ) => {
//     const img = product.product_images?.[0];
//     const image_path = img
//       ? `${serverApi}/${img}`
//       : "/icons/product_placeholder.png";
//     const discountedPrice = Math.floor(product.discountedPrice ?? 0);

//     const showDiscountBadge =
//       (product.discount?.value ?? 0) > 0 && (product.discountedPrice ?? 0) > 0;

//     return (
//       <SwiperSlide key={product._id} className="product_info_frame">
//         <Stack
//           className="product-box"
//           onClick={() =>
//             isMobileMode
//               ? navigate("/mobile")
//               : chosenProductHandler(product._id)
//           }
//         >
//           <Box className="img" sx={{ backgroundImage: `url(${image_path})` }}>
//             {showDiscountBadge && (
//               <Box className="dish_sale">
//                 <span className="dish_sale-txt">
//                   {product.discount?.type === "amount"
//                     ? `-${product.discount?.value}$`
//                     : `-${product.discount?.value}%`}
//                 </span>
//                 <span className="endDate">
//                   {product.discount?.endDate ? timeRemainingArray[index] : null}
//                 </span>
//               </Box>
//             )}

//             {!isMobileMode && (
//               <>
//                 <Button
//                   className="like_view_btn"
//                   style={{ right: "12px" }}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     navigate(`/brand/products/${product._id}/reviews`);
//                   }}
//                 >
//                   <Badge
//                     badgeContent={product.product_reviews}
//                     color="secondary"
//                   >
//                     <ChatIcon style={{ color: "white" }} />
//                   </Badge>
//                 </Button>

//                 <Button
//                   className="like_view_btn"
//                   style={{ right: "12px" }}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     navigate(`/brand/products/${product._id}/reviews`);
//                   }}
//                 >
//                   <Badge
//                     badgeContent={product.product_reviews}
//                     color="secondary"
//                   >
//                     <ChatIcon style={{ color: "white" }} />
//                   </Badge>
//                 </Button>
//               </>
//             )}
//           </Box>
//         </Stack>

//         <Stack className="product_name">{product.product_name}</Stack>

//         <Stack className="rating_box">
//           <Rating
//             className="half-rating"
//             precision={0.5}
//             value={product.product_rating ?? 0}
//             readOnly
//           />
//         </Stack>

//         <Stack className="price">
//           <span
//             style={{
//               fontFamily: "Nunito",
//               fontWeight: 900,
//               fontSize: "18px",
//               color: "#1f1a17",
//             }}
//           >
//             $
//             {product.discountedPrice ? (
//               <>
//                 <span
//                   style={{
//                     opacity: 0.55,
//                     textDecoration: "line-through",
//                     marginLeft: 6,
//                   }}
//                 >
//                   {product.product_price}
//                 </span>
//                 <span style={{ marginLeft: 10, color: "#d84f86" }}>
//                   {discountedPrice}
//                 </span>
//               </>
//             ) : (
//               <span style={{ marginLeft: 6 }}>{product.product_price}</span>
//             )}
//           </span>
//         </Stack>

//         <Stack alignItems="center" marginTop="14px" marginBottom="18px">
//           <Button
//             variant="contained"
//             className="add_to_cart_btn"
//             onClick={(e) => {
//               onAdd(product);
//               e.stopPropagation();
//             }}
//           >
//             ADD TO CART
//           </Button>
//         </Stack>
//       </SwiperSlide>
//     );
//   };

//   // Mobile
//   if (isMobile()) {
//     return (
//       <div className="p_products_frame">
//         <Container sx={{ overflow: "hidden" }}>
//           <Stack className="p_products_main">
//             <Box className="p_products_text">
//               <span className="title">Popular Sellers this Week</span>
//             </Box>

//             <Stack className="swiper">
//               <Swiper
//                 className="swiper_wrapper"
//                 modules={swiperModules}
//                 slidesPerView={1}
//                 centeredSlides={false}
//                 spaceBetween={12}
//                 navigation
//                 pagination={{ clickable: true }}
//                 autoplay={{ delay: 2400, disableOnInteraction: true }}
//               >
//                 {bestProducts.map((p, idx) => renderSlide(p, idx, true))}
//               </Swiper>
//             </Stack>
//           </Stack>
//         </Container>
//       </div>
//     );
//   }

//   // Desktop
//   return (
//     <div className="p_products_frame">
//       <Container sx={{ overflow: "visible" }}>
//         <Stack className="p_products_main">
//           <Box className="p_products_text">
//             <span className="title">Popular Sellers this Week</span>
//           </Box>

//           <Stack className="swiper">
//             <Swiper
//               className="swiper_wrapper"
//               modules={swiperModules}
//               slidesPerView={5}
//               centeredSlides={false}
//               spaceBetween={18}
//               navigation
//               pagination={{ clickable: true }}
//               autoplay={{ delay: 2400, disableOnInteraction: true }}
//             >
//               {bestProducts.map((p, idx) => renderSlide(p, idx, false))}
//             </Swiper>
//           </Stack>
//         </Stack>
//       </Container>
//     </div>
//   );
// }


import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { Container, Box, Stack, Button, IconButton, Badge } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Rating from "@mui/material/Rating";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

import { setBestProducts } from "./slice";
import { retrieveBestProducts } from "./selector";
import { Product } from "../../types/product";
import ProductApiService from "../../apiServices/productApiService";
import { serverApi } from "../../../lib/config";

import { useNavigate } from "react-router-dom";

import { verifiedMemberData } from "../../apiServices/verify";
import { Definer } from "../../../lib/Definer";
import MemberApiService from "../../apiServices/memberApiServices";
import { sweetErrorHandling, sweetTopSmallSuccessAlert } from "../../../lib/sweetAlert";
import useDeviceDetect from "../../../lib/responsive/useDeviceDetect";

/** REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setBestProducts: (data: Product[]) => dispatch(setBestProducts(data)),
});

/** REDUX SELECTOR */
const bestProductsRetriever = createSelector(retrieveBestProducts, (bestProducts) => ({
  bestProducts,
}));

type BestProductsProps = {
  onAdd: (product: Product) => void;
};

export function BestProducts({ onAdd }: BestProductsProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setBestProducts } = actionDispatch(dispatch);
  const { bestProducts } = useSelector(bestProductsRetriever);

  const { isMobile } = useDeviceDetect();

  // refresh trigger (like qilinganda qayta olib kelish)
  const [productRebuild, setProductRebuild] = useState<number>(() => Date.now());

  // ✅ StrictMode double-fetch guard (devda 2 marta chaqirmaslik)
  const lastFetchKeyRef = useRef<string>("");

  // Timer map: productId -> "hh:mm:ss"
  const [timeRemainingById, setTimeRemainingById] = useState<Record<string, string>>({});

  const requestBody = useMemo(
    () => ({
      page: 1,
      limit: 15,
      order: "product_likes",
      product_name: "all",
      product_collection: "all",
      brand_mb_id: "all",
      product_size: "all",
      product_color: "all",
      product_volume: "all",
    }),
    []
  );

  const formatTimeRemaining = useCallback((endTime?: string | Date): string => {
    if (!endTime) return "00:00:00";
    const now = new Date();
    const endDate = new Date(endTime);
    const diff = endDate.getTime() - now.getTime();
    if (Number.isNaN(endDate.getTime()) || diff <= 0) return "00:00:00";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `${days > 0 ? `${days}d ` : ""}${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }, []);

  const fetchBestProducts = useCallback(async () => {
    const key = `${productRebuild}`; // rebuild o'zgarsa fetch bo'ladi

    // ✅ StrictMode’da 2 marta ketmasin
    if (process.env.NODE_ENV === "development" && lastFetchKeyRef.current === key) return;
    lastFetchKeyRef.current = key;

    try {
      const productService = new ProductApiService();
      const data = await productService.getTargetProducts(requestBody);
      setBestProducts(data);
    } catch (err) {
      console.log(err);
    }
  }, [productRebuild, requestBody, setBestProducts]);

  useEffect(() => {
    fetchBestProducts();
  }, [fetchBestProducts]);

  // ✅ Timer: id bo‘yicha hisoblash (index bug yo‘q)
  useEffect(() => {
    if (!bestProducts?.length) return;

    const hasAnyTimer = bestProducts.some((p) => p?.discount?.endDate);
    const tick = () => {
      const next: Record<string, string> = {};
      for (const p of bestProducts) {
        next[p._id] = formatTimeRemaining(p.discount?.endDate as any);
      }
      setTimeRemainingById(next);
    };

    tick(); // ✅ darhol hisoblasin (1 sec kutmasin)

    if (!hasAnyTimer) return;

    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [bestProducts, formatTimeRemaining]);

  const chosenProductHandler = (id: string) => {
    navigate(`/brand/products/${id}`);
  };

  const handleLikeProduct = async (productId: string) => {
    try {
      if (!verifiedMemberData) throw new Error(Definer.auth_err1);

      const memberService = new MemberApiService();
      const like_result: any = await memberService.memberLikeTarget({
        like_ref_id: productId, // ✅ e.target.id emas
        group_type: "product",
      });

      if (!like_result) throw new Error(Definer.general_err1);

      await sweetTopSmallSuccessAlert("Success", 700, false);
      setProductRebuild(Date.now()); // ✅ refresh
    } catch (error: any) {
      console.log("handleLikeProduct ERROR:", error);
      sweetErrorHandling(error).then();
    }
  };

  const swiperModules = useMemo(() => [Autoplay, Navigation, Pagination], []);

  const renderSlide = (product: Product, isMobileMode: boolean) => {
    const img = product.product_images?.[0];
    const image_path = img ? `${serverApi}/${img}` : "/icons/product_placeholder.png";
    const discountedPrice = Math.floor(product.discountedPrice ?? 0);

    const showDiscountBadge =
      (product.discount?.value ?? 0) > 0 && (product.discountedPrice ?? 0) > 0;

    const timerText = timeRemainingById[product._id];

    return (
      <SwiperSlide key={product._id} className="product_info_frame">
        <Stack className="product-box" onClick={() => chosenProductHandler(product._id)}>
          <Box className="img" sx={{ backgroundImage: `url(${image_path})` }}>
            {showDiscountBadge && (
              <Box className="dish_sale">
                <span className="dish_sale-txt">
                  {product.discount?.type === "amount"
                    ? `-${product.discount?.value}$`
                    : `-${product.discount?.value}%`}
                </span>
                <span className="endDate">
                  {product.discount?.endDate ? timerText : null}
                </span>
              </Box>
            )}

            {/* Desktop actions */}
            {!isMobileMode && (
              <>
                {/* Reviews */}
                <IconButton
                  className="like_view_btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/brand/products/${product._id}/reviews`);
                  }}
                  sx={{ position: "absolute", top: 10, right: 10 }}
                >
                  <Badge badgeContent={product.product_reviews} color="secondary">
                    <ChatIcon sx={{ color: "white" }} />
                  </Badge>
                </IconButton>

                {/* Like */}
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLikeProduct(product._id);
                  }}
                  sx={{ position: "absolute", top: 10, right: 52 }}
                >
                  {/* product.me_liked bo‘lsa shuni ishlatasiz; bo‘lmasa doim border */}
                  {product.me_liked ? (
                    <FavoriteIcon sx={{ color: "#f48fb1" }} />
                  ) : (
                    <FavoriteBorderIcon sx={{ color: "white" }} />
                  )}
                </IconButton>
              </>
            )}
          </Box>

          <Stack className="product_name">{product.product_name}</Stack>

          <Stack className="rating_box">
            <Rating precision={0.5} value={product.product_rating ?? 0} readOnly />
          </Stack>

          <Stack className="price">
            <span style={{ fontFamily: "Nunito", fontWeight: 900, fontSize: 18, color: "#1f1a17" }}>
              $
              {product.discountedPrice ? (
                <>
                  <span style={{ opacity: 0.55, textDecoration: "line-through", marginLeft: 6 }}>
                    {product.product_price}
                  </span>
                  <span style={{ marginLeft: 10, color: "#d84f86" }}>{discountedPrice}</span>
                </>
              ) : (
                <span style={{ marginLeft: 6 }}>{product.product_price}</span>
              )}
            </span>
          </Stack>

          <Stack alignItems="center" marginTop="14px" marginBottom="18px">
            <Button
              variant="contained"
              className="add_to_cart_btn"
              onClick={(e) => {
                e.stopPropagation();
                onAdd(product);
              }}
            >
              ADD TO CART
            </Button>
          </Stack>
        </Stack>
      </SwiperSlide>
    );
  };

  // Mobile
  if (isMobile()) {
    return (
      <div className="p_products_frame">
        <Container sx={{ overflow: "hidden" }}>
          <Stack className="p_products_main">
            <Box className="p_products_text">
              <span className="title">Popular Sellers this Week</span>
            </Box>

            <Stack className="swiper">
              <Swiper
                className="swiper_wrapper"
                modules={swiperModules}
                slidesPerView={1}
                spaceBetween={12}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2400, disableOnInteraction: true }}
              >
                {bestProducts.map((p) => renderSlide(p, true))}
              </Swiper>
            </Stack>
          </Stack>
        </Container>
      </div>
    );
  }

  // Desktop
  return (
    <div className="p_products_frame">
      <Container sx={{ overflow: "visible" }}>
        <Stack className="p_products_main">
          <Box className="p_products_text">
            <span className="title">Popular Sellers this Week</span>
          </Box>

          <Stack className="swiper">
            <Swiper
              className="swiper_wrapper"
              modules={swiperModules}
              slidesPerView={5}
              spaceBetween={18}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 2400, disableOnInteraction: true }}
            >
              {bestProducts.map((p) => renderSlide(p, false))}
            </Swiper>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
