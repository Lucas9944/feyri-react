import React from "react";
import { Advertisements } from "./advertiSements";
import { InfoBeauty} from "./infoBeauty";
import { LoadProducts } from "./loadProducts";
import { Statistics } from "./statistics";
import { TopCosmetic } from "./topCosmetic";
import { TopRating } from "./topRating";
import "../../../css/home.css";

export function HomePage() {
  return (
    <div className="homepage">
      <Statistics />
      <TopCosmetic/>
      <Advertisements />
      <InfoBeauty/>
      <TopRating />
      <LoadProducts />
    </div>
  );
}