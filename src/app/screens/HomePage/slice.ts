import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../types/screen";

const initialState: HomePageState = {
  trendProducts: [],
  bestSellerProduct: [],
  saleProducts: undefined,
  topBrands: [],
  latestBrands: [],
  bestProducts: [],
  bestBoArticles: [],
  newsBoArticles: [],
  setBestSellerProduct: undefined,
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setTopTradings: (state, action) => {
      state.trendProducts = action.payload;
    },

    setBestProducts: (state, action) => {
      state.bestProducts = action.payload;
    },

    // ✅ OLD: saleProducts -> NEW: setSaleProducts
    setSaleProducts: (state, action) => {
      state.saleProducts = action.payload;
    },

    // (ixtiyoriy) topBrands ham setTopBrands bo‘lsin
    setTopBrands: (state, action) => {
      state.topBrands = action.payload;
    },

    setBestBoArticles: (state, action) => {
      state.bestBoArticles = action.payload;
    },

    // (ixtiyoriy) news ham setNewsBoArticles bo‘lsin
    setNewsBoArticles: (state, action) => {
      state.newsBoArticles = action.payload;
    },
  },
});

export const {
  setTopTradings,
  setBestProducts,
  setSaleProducts,
  setTopBrands,
  setBestBoArticles,
  setNewsBoArticles,
} = homePageSlice.actions;

// ✅ Backward-compatible alias (agar eski joylarda ishlatilgan bo‘lsa)
export const saleProducts = setSaleProducts;
export const topBrands = setTopBrands;
export const newsBoArticles = setNewsBoArticles;

export default homePageSlice.reducer;
