// import React, { useEffect, useState } from "react";
// import { Container, Box, Stack, Button } from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import Rating from "@mui/material/Rating";
// import Checkbox from "@mui/material/Checkbox";
// import { Favorite, FavoriteBorder } from "@mui/icons-material";
// import ChatIcon from "@mui/icons-material/Chat";
// import Badge from "@mui/material/Badge";

// // REDUX
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

// export function BestProducts(props: BestProductsProps) {
//   /** INITIALIZATIONS */
//   const navigate = useNavigate();
//   const { setBestProducts } = actionDispatch(useDispatch());
//   const { bestProducts } = useSelector(bestProductsRetriever);

//   const [productRebuild, setProductRebuild] = useState<Date>(new Date());
//   const [timeRemainingArray, setTimeRemainingArray] = useState<string[]>([]);

//   useEffect(() => {
//     const productService = new ProductApiService();
//     productService
//       .getTargetProducts({
//         page: 1,
//         limit: 15,
//         order: "product_likes",
//         product_name: "all",
//         product_collection: "all",
//         brand_mb_id: "all",
//         product_size: "all",
//         product_color: "all",
//         product_volume: "all",
//       })
//       .then((data) => setBestProducts(data))
//       .catch((err) => console.log(err));
//   }, [productRebuild, setBestProducts]);

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

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeRemainingArray(
//         bestProducts.map((product: Product) =>
//           formatTimeRemaining(product.discount?.endDate as any)
//         )
//       );
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [bestProducts]);

//   /** HANDLERS */
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
//       setProductRebuild(new Date());
//     } catch (error: any) {
//       console.log("targetLikeProduct, ERROR:", error);
//       sweetErrorHandling(error).then();
//     }
//   };

//   const { isMobile } = useDeviceDetect();

//   if (isMobile()) {
//     return (
//       <div
//         className="p_products_frame"
//         style={{ height: "700px", width: "430px" }}
//       >
//         <Container sx={{ overflow: "hidden" }}>
//           <Stack className={"p_products_main"}>
//             <Box className={"p_products_text"}>
//               <span
//                 className={"title"}
//                 style={{ marginTop: "20px", fontSize: "36px" }}
//               >
//                 Popular Sellers this Week
//               </span>
//             </Box>

//             <Stack className="swiper">
//               <Swiper
//                 className={"swiper_wrapper"}
//                 slidesPerView={1}
//                 centeredSlides={false}
//                 spaceBetween={0}
//                 navigation={{
//                   nextEl: ".swiper-button-next",
//                   prevEl: ".swiper-button-prev",
//                 }}
//                 pagination={{ el: ".swiper-pagination", clickable: true }}
//                 autoplay={{ delay: 1800, disableOnInteraction: true }}
//               >
//                 {bestProducts.map((product: Product, index: number) => {
//                   const image_path = `${serverApi}/${product.product_images?.[0]}`;
//                   const discountedPrice = Math.floor(product.discountedPrice);

//                   return (
//                     <SwiperSlide
//                       key={product._id}
//                       className={"product_info_frame"}
//                     >
//                       <Stack
//                         className="product-box"
//                         onClick={() => {
//                           // siz hozir shuni ishlatyapsiz — qoldirdim
//                           window.location.href = "/mobile";
//                         }}
//                       >
//                         <Box
//                           className={"img"}
//                           sx={{
//                             backgroundImage: `url(${image_path})`,
//                             marginLeft: "170px",
//                           }}
//                         >
//                           {product.discountedPrice !== 0 && (
//                             <Box className={"dish_sale"}>
//                               <span className={"dish_sale-txt"}>
//                                 {product.discount?.type === "amount" ? (
//                                   <Box className="discount_fon">
//                                     -{product.discount?.value}$
//                                   </Box>
//                                 ) : (
//                                   <Box className="discount_fon">
//                                     -{product.discount?.value}%
//                                   </Box>
//                                 )}
//                               </span>

//                               <span className="endDate">
//                                 {product.discountedPrice ? (
//                                   <span className={"discount_timer"}>
//                                     {timeRemainingArray[index]}
//                                   </span>
//                                 ) : null}
//                               </span>
//                             </Box>
//                           )}
//                         </Box>
//                       </Stack>

//                       <Stack
//                         className={"product_name"}
//                         style={{ marginLeft: "90px" }}
//                       >
//                         {product.product_name}
//                       </Stack>

//                       <Stack
//                         className={"rating_box"}
//                         style={{ marginLeft: "20px" }}
//                       >
//                         <Rating
//                           className="half-rating"
//                           defaultValue={0}
//                           precision={0.5}
//                           value={product.product_rating}
//                         />
//                       </Stack>

//                       <Stack
//                         className={"price"}
//                         style={{ marginLeft: "170px" }}
//                       >
//                         <span
//                           style={{
//                             fontFamily: "Nunito",
//                             fontWeight: "900",
//                             color: "orange",
//                             fontSize: "20px",
//                             width: "100%",
//                             marginLeft: product.discountedPrice
//                               ? "0px"
//                               : "20px",
//                           }}
//                         >
//                           $
//                           {product.discountedPrice ? (
//                             <>
//                               <span
//                                 style={{
//                                   color: "orange",
//                                   position: "relative",
//                                 }}
//                               >
//                                 {product.product_price}
//                                 <span
//                                   style={{
//                                     position: "absolute",
//                                     bottom: "50%",
//                                     left: 0,
//                                     right: 0,
//                                     height: "3px",
//                                     backgroundColor: "orange",
//                                   }}
//                                 />
//                               </span>
//                               <span
//                                 style={{
//                                   fontFamily: "Nunito",
//                                   fontWeight: "900",
//                                   color: "#423127",
//                                   fontSize: "20px",
//                                   marginLeft: "6px",
//                                 }}
//                               >
//                                 ${discountedPrice}
//                               </span>
//                             </>
//                           ) : (
//                             <span>{product.product_price}</span>
//                           )}
//                         </span>
//                       </Stack>

//                       <Stack marginTop={"15px"} style={{ marginLeft: "130px" }}>
//                         <Button
//                           variant="contained"
//                           style={{
//                             borderRadius: "30px",
//                             color: "#ffffff",
//                             background: "#ffa600",
//                             fontFamily: "Nunito",
//                             height: "45px",
//                             width: "160px",
//                             fontWeight: "900",
//                             fontSize: "16px",
//                             marginBottom: "35px",
//                           }}
//                           onClick={(e) => {
//                             props.onAdd(product);
//                             e.stopPropagation();
//                           }}
//                         >
//                           ADD TO CART
//                         </Button>
//                       </Stack>
//                     </SwiperSlide>
//                   );
//                 })}
//               </Swiper>
//             </Stack>
//           </Stack>
//         </Container>
//       </div>
//     );
//   }

//   return (
//     <div className="p_products_frame">
//       <Container sx={{ overflow: "hidden" }}>
//         <Stack className={"p_products_main"}>
//           <Box className={"p_products_text"}>
//             <span className={"title"}>Popular Sellers this Week</span>
//           </Box>

//           <Stack className="swiper">
//             <Swiper
//               className={"swiper_wrapper"}
//               slidesPerView={5}
//               centeredSlides={false}
//               spaceBetween={0}
//               navigation={{
//                 nextEl: ".swiper-button-next",
//                 prevEl: ".swiper-button-prev",
//               }}
//               pagination={{ el: ".swiper-pagination", clickable: true }}
//               autoplay={{ delay: 1800, disableOnInteraction: true }}
//             >
//               {bestProducts.map((product: Product, index: number) => {
//                 const image_path = `${serverApi}/${product.product_images?.[0]}`;
//                 const discountedPrice = Math.floor(product.discountedPrice);

//                 return (
//                   <SwiperSlide
//                     key={product._id}
//                     className={"product_info_frame"}
//                   >
//                     <Stack
//                       className={"product-box"}
//                       onClick={() => chosenProductHandler(product._id)}
//                     >
//                       <Box
//                         className={"img"}
//                         sx={{ backgroundImage: `url(${image_path})` }}
//                       >
//                         {product.discountedPrice !== 0 && (
//                           <Box className={"dish_sale"}>
//                             <span className={"dish_sale-txt"}>
//                               {product.discount?.type === "amount" ? (
//                                 <Box className="discount_fon">
//                                   -{product.discount?.value}$
//                                 </Box>
//                               ) : (
//                                 <Box className="discount_fon">
//                                   -{product.discount?.value}%
//                                 </Box>
//                               )}
//                             </span>

//                             <span className="endDate">
//                               {product.discountedPrice ? (
//                                 <span className={"discount_timer"}>
//                                   {timeRemainingArray[index]}
//                                 </span>
//                               ) : null}
//                             </span>
//                           </Box>
//                         )}

//                         <Button
//                           className={"like_view_btn"}
//                           style={{ left: "36px" }}
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           <Badge
//                             badgeContent={product.product_likes}
//                             onClick={(e: React.MouseEvent) =>
//                               e.stopPropagation()
//                             }
//                             color="secondary"
//                           >
//                             <Checkbox
//                               icon={
//                                 <FavoriteBorder style={{ color: "white" }} />
//                               }
//                               id={product._id}
//                               checkedIcon={
//                                 <Favorite style={{ color: "red" }} />
//                               }
//                               onClick={targetLikeProduct}
//                               checked={
//                                 product?.me_liked &&
//                                 product?.me_liked[0]?.my_favorite
//                                   ? true
//                                   : false
//                               }
//                             />
//                           </Badge>
//                         </Button>

//                         <Button
//                           className={"like_view_btn"}
//                           style={{ right: "36px" }}
//                         >
//                           <Badge
//                             badgeContent={product.product_reviews}
//                             color="secondary"
//                           >
//                             <ChatIcon style={{ color: "white" }} />
//                           </Badge>
//                         </Button>
//                       </Box>
//                     </Stack>

//                     <Stack className={"product_name"}>
//                       {product.product_name}
//                     </Stack>

//                     <Stack className={"rating_box"}>
//                       <Rating
//                         className="half-rating"
//                         defaultValue={0}
//                         precision={0.5}
//                         value={product.product_rating}
//                       />
//                     </Stack>

//                     <Stack className={"price"}>
//                       <span
//                         style={{
//                           fontFamily: "Nunito",
//                           fontWeight: "900",
//                           color: "orange",
//                           fontSize: "20px",
//                           marginLeft: product.discountedPrice ? "0px" : "20px",
//                         }}
//                       >
//                         $
//                         {product.discountedPrice ? (
//                           <>
//                             <span
//                               style={{ color: "orange", position: "relative" }}
//                             >
//                               {product.product_price}
//                               <span
//                                 style={{
//                                   position: "absolute",
//                                   bottom: "50%",
//                                   left: 0,
//                                   right: 0,
//                                   height: "3px",
//                                   backgroundColor: "orange",
//                                 }}
//                               />
//                             </span>
//                             <span
//                               style={{
//                                 fontFamily: "Nunito",
//                                 fontWeight: "900",
//                                 color: "#423127",
//                                 fontSize: "20px",
//                                 marginLeft: "6px",
//                               }}
//                             >
//                               ${discountedPrice}
//                             </span>
//                           </>
//                         ) : (
//                           <span>{product.product_price}</span>
//                         )}
//                       </span>
//                     </Stack>

//                     <Stack marginLeft={"45px"} marginTop={"15px"}>
//                       <Button
//                         variant="contained"
//                         style={{
//                           borderRadius: "30px",
//                           color: "#ffffff",
//                           background: "#ffa600",
//                           fontFamily: "Nunito",
//                           height: "45px",
//                           width: "160px",
//                           fontWeight: "900",
//                           fontSize: "16px",
//                           marginBottom: "35px",
//                         }}
//                         onClick={(e) => {
//                           props.onAdd(product);
//                           e.stopPropagation();
//                         }}
//                       >
//                         ADD TO CART
//                       </Button>
//                     </Stack>
//                   </SwiperSlide>
//                 );
//               })}
//             </Swiper>
//           </Stack>
//         </Stack>
//       </Container>
//     </div>
//   );
// }

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Container, Box, Stack, Button } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Rating from "@mui/material/Rating";
import Checkbox from "@mui/material/Checkbox";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import ChatIcon from "@mui/icons-material/Chat";
import Badge from "@mui/material/Badge";

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
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import useDeviceDetect from "../../../lib/responsive/useDeviceDetect";

/** REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setBestProducts: (data: Product[]) => dispatch(setBestProducts(data)),
});

/** REDUX SELECTOR */
const bestProductsRetriever = createSelector(
  retrieveBestProducts,
  (bestProducts) => ({
    bestProducts,
  })
);

type BestProductsProps = {
  onAdd: (product: Product) => void;
};

export function BestProducts({ onAdd }: BestProductsProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setBestProducts } = actionDispatch(dispatch);
  const { bestProducts } = useSelector(bestProductsRetriever);

  const [productRebuild, setProductRebuild] = useState<Date>(new Date());
  const [timeRemainingArray, setTimeRemainingArray] = useState<string[]>([]);

  // ✅ StrictMode double-fetch guard
  const fetchedOnceRef = useRef(false);

  // ✅ request body stable bo‘lsin
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

  /** Fetch best products (NO infinite loop) */
  useEffect(() => {
    // ✅ dev StrictMode’da ham 1 martadan oshmasin
    if (fetchedOnceRef.current && !productRebuild) return;
    fetchedOnceRef.current = true;

    const productService = new ProductApiService();

    productService
      .getTargetProducts(requestBody)
      .then((data) => setBestProducts(data))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productRebuild, requestBody]);

  /** Timer */
  const formatTimeRemaining = (endTime?: string | Date): string => {
    if (!endTime) return "00:00:00";

    const now = new Date();
    const endDate = new Date(endTime);
    const diff = endDate.getTime() - now.getTime();
    if (Number.isNaN(endDate.getTime()) || diff <= 0) return "00:00:00";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `${days > 0 ? `${days}d ` : ""}${hours
      .toString()
      .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // ✅ Timer faqat discount endDate bor productlar uchun ishlasin (yengil)
  const hasAnyTimer = useMemo(
    () => bestProducts.some((p) => p?.discount?.endDate),
    [bestProducts]
  );

  useEffect(() => {
    if (!hasAnyTimer) return;

    const interval = setInterval(() => {
      setTimeRemainingArray(
        bestProducts.map((p: Product) =>
          formatTimeRemaining(p.discount?.endDate as any)
        )
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [bestProducts, hasAnyTimer]);

  /** Handlers */
  const chosenProductHandler = (id: string) => {
    navigate(`/brand/products/${id}`);
  };

  const targetLikeProduct = async (e: any) => {
    try {
      if (!verifiedMemberData) throw new Error(Definer.auth_err1);

      const memberService = new MemberApiService();
      const like_result: any = await memberService.memberLikeTarget({
        like_ref_id: e.target.id,
        group_type: "product",
      });

      if (!like_result) throw new Error(Definer.general_err1);

      await sweetTopSmallSuccessAlert("Success", 700, false);
      setProductRebuild(new Date()); // ✅ only here refresh
    } catch (error: any) {
      console.log("targetLikeProduct, ERROR:", error);
      sweetErrorHandling(error).then();
    }
  };

  const { isMobile } = useDeviceDetect();
  const swiperModules = useMemo(() => [Autoplay, Navigation, Pagination], []);

  const renderSlide = (
    product: Product,
    index: number,
    isMobileMode: boolean
  ) => {
    const img = product.product_images?.[0];
    const image_path = img
      ? `${serverApi}/${img}`
      : "/icons/product_placeholder.png";
    const discountedPrice = Math.floor(product.discountedPrice ?? 0);

    const showDiscountBadge =
      (product.discount?.value ?? 0) > 0 && (product.discountedPrice ?? 0) > 0;

    return (
      <SwiperSlide key={product._id} className="product_info_frame">
        <Stack
          className="product-box"
          onClick={() =>
            isMobileMode
              ? navigate("/mobile")
              : chosenProductHandler(product._id)
          }
        >
          <Box className="img" sx={{ backgroundImage: `url(${image_path})` }}>
            {showDiscountBadge && (
              <Box className="dish_sale">
                <span className="dish_sale-txt">
                  {product.discount?.type === "amount"
                    ? `-${product.discount?.value}$`
                    : `-${product.discount?.value}%`}
                </span>
                <span className="endDate">
                  {product.discount?.endDate ? timeRemainingArray[index] : null}
                </span>
              </Box>
            )}

            {!isMobileMode && (
              <>
                <Button
                  className="like_view_btn"
                  style={{ right: "12px" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/brand/products/${product._id}/reviews`);
                  }}
                >
                  <Badge
                    badgeContent={product.product_reviews}
                    color="secondary"
                  >
                    <ChatIcon style={{ color: "white" }} />
                  </Badge>
                </Button>

                <Button
                  className="like_view_btn"
                  style={{ right: "12px" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/brand/products/${product._id}/reviews`);
                  }}
                >
                  <Badge
                    badgeContent={product.product_reviews}
                    color="secondary"
                  >
                    <ChatIcon style={{ color: "white" }} />
                  </Badge>
                </Button>
              </>
            )}
          </Box>
        </Stack>

        <Stack className="product_name">{product.product_name}</Stack>

        <Stack className="rating_box">
          <Rating
            className="half-rating"
            precision={0.5}
            value={product.product_rating ?? 0}
            readOnly
          />
        </Stack>

        <Stack className="price">
          <span
            style={{
              fontFamily: "Nunito",
              fontWeight: 900,
              fontSize: "18px",
              color: "#1f1a17",
            }}
          >
            $
            {product.discountedPrice ? (
              <>
                <span
                  style={{
                    opacity: 0.55,
                    textDecoration: "line-through",
                    marginLeft: 6,
                  }}
                >
                  {product.product_price}
                </span>
                <span style={{ marginLeft: 10, color: "#d84f86" }}>
                  {discountedPrice}
                </span>
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
              onAdd(product);
              e.stopPropagation();
            }}
          >
            ADD TO CART
          </Button>
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
                centeredSlides={false}
                spaceBetween={12}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2400, disableOnInteraction: true }}
              >
                {bestProducts.map((p, idx) => renderSlide(p, idx, true))}
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
              centeredSlides={false}
              spaceBetween={18}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 2400, disableOnInteraction: true }}
            >
              {bestProducts.map((p, idx) => renderSlide(p, idx, false))}
            </Swiper>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
