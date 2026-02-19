import { createSelector } from "reselect";
import { AppRootState } from "../../types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrieveTradingProducts = createSelector(
  selectHomePage,
  (HomePage) => HomePage.trendProducts
);

export const retrieveBestProducts = createSelector(
  selectHomePage,
  (HomePage) => HomePage.bestProducts
);

export const retriesaleProducts = createSelector(
    selectHomePage,
    (HomePage) => HomePage.saleProducts
  );
  export const retrievetopBrands= createSelector(
    selectHomePage,
    (HomePage) => HomePage.topBrands
  );
  export const retrievebestBoArticles = createSelector(
    selectHomePage,
    (HomePage) => HomePage.bestBoArticles
  );