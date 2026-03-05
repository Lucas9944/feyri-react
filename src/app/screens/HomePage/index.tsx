import { BedSheetsSail } from "./bedsheetsSail";
import { SwiperEvents } from "./SwiperEvents";
import { FeyriPicks } from "./FeyriPicks";
import { BestProducts } from "./BestProducts";
import { Advertisements } from "./advertiSements";
import "../../../css/home.css";
import "../../../css/homeArticles.css";
import "../../../css/sale_product.css";
import { LoadProducts } from "./loadProducts";
import { Articles } from "../HomePage/articles";
import { useEffect } from "react";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setBestProducts, setTopTradings } from "../../screens/HomePage/slice";
import {
  retrieveBestProducts,
  retrieveTradingProducts,
} from "../../screens/HomePage/selector";
import { Brand } from "../../types/user";
import BrandApiServices from "../../apiServices/brandApiServices";
import { Product } from "../../types/product";
import { Article } from "@mui/icons-material";
import { SaleProducts } from "./saleProducts";
import { TopBrands } from "./topBrands";

// ** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setTopTradings: (data: Brand[]) => dispach(setTopTradings(data)),
  setBestProducts: (data: Brand[]) => dispach(setBestProducts(data)),
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
        setBestProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);
  function onAdd(product: Product): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="homepage">
      <FeyriPicks />
      <TopBrands />
      <BestProducts onAdd={onAdd} />
      <SaleProducts onAdd={onAdd}/>
      <Advertisements />
      <BedSheetsSail />
      <LoadProducts />
      <Articles/>
      <SwiperEvents />
    </div>
  );
}
