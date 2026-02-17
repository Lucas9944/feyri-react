import { BedSheetsSail } from "./bedsheetsSail";
import { SwiperEvents } from "./SwiperEvents";
import { Statistics } from "./statistics";
import { BestBrands } from "./bestBrands";
import { TopRating } from "./topRating";
import { Advertisements } from "./advertiSements";
import "../../../css/home.css";
import { LoadProducts } from "./loadProducts";
import { useEffect } from "react";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {
  setBestSellerProduct,
  setTopTradings,
} from "../../screens/HomePage/slice";
import {
  retrievesetBestSellerProduct,
  retrieveTradingProducts,
} from "../../screens/HomePage/selector";
import { Brand } from "../../types/user";
import BrandApiServices from "../../apiServices/brandApiServices";

// ** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setTopTradings: (data: Brand[]) => dispach(setTopTradings(data)),
  setBestSellerProduct: (data: Brand[]) => dispach(setBestSellerProduct(data)),
});



export function HomePage() {
  /** INITIALIZATION */
  const { setTopTradings } = actionDispatch(useDispatch());

  useEffect(() => {
    // backend data request => data
    const brandService = new BrandApiServices();
    brandService
      .getTopBrands()
      .then((data) => {
        setTopTradings(data);
      })
      .catch((err) => console.log(err));
    brandService
      .getBrands({ page: 1, limit: 4, order: "mb_point" })
      .then((data) => {
        setBestSellerProduct(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="homepage">
      <Statistics />
      <BestBrands />
      <Advertisements />
      <BedSheetsSail />
      <TopRating />
      <LoadProducts />
      <SwiperEvents />
    </div>
  );
}
