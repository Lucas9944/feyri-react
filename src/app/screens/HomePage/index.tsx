import { BedSheetsSail } from "./bedsheetsSail";
import { SwiperEvents } from "./SwiperEvents";
import { Statistics } from "./statistics";
import { TopInterior } from "./topInterior";
import { TopRating } from "./topRating";
import { Advertisements } from "./advertiSements";
import "../../../css/home.css";
import { LoadProducts } from "./loadProducts";
import { useEffect } from "react";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setTopTradings } from "../../screens/HomePage/slice";
import { retrieveTradingProducts } from "../../screens/HomePage/selector";
import { Brand } from "../../types/user";
import BrandApiServices from "../../apiServices/brandApiServices";

// ** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setTopTradings: (data: Brand[]) => dispach(setTopTradings(data)),
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
  }, []);
  return (
    <div className="homepage">
      <Statistics />
      <TopInterior />
      <Advertisements />
      <BedSheetsSail />
      <TopRating />
      <LoadProducts />
      <SwiperEvents />
    </div>
  );
}
