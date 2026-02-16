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
    setBestSellerProduct: undefined
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setTopTradings: (state, action) => {
      state.trendProducts = action.payload;
    },
    setBestSellerProduct: (state, action) => {
      state.bestSellerProduct = action.payload;
    },
    saleProducts: (state, action) => {
      state.saleProducts = action.payload;
    },
    topBrands: (state, action) => {
      state.topBrands = action.payload;
    },
    bestBoArticles: (state, action) => {
      state.bestBoArticles = action.payload;
    },
    newsBoArticles: (state, action) => {
      state.newsBoArticles = action.payload;
    },
  },
});

export const {
  setTopTradings,
  setBestSellerProduct,
  saleProducts,
  topBrands,
  bestBoArticles,
  newsBoArticles,
} = homePageSlice.actions;

const homePageReducer = homePageSlice.reducer;
export default homePageReducer;
