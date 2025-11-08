import React from "react";
import { Advertisements } from "./advertiSements";
import { InfoBeauty} from "./infoBeauty";
import { LoadProducts } from "./loadProducts";
import { Statistics } from "./statistics";
import { TopInterior } from "./topCosmetic";
import { TopRating } from "./topRating";
import "../../../css/home.css";

export function HomePage() {
  return (
    <div className="homepage">
      <Statistics />
      <TopInterior />
      <Advertisements />
      <InfoBeauty/>
      <TopRating />
      <LoadProducts />
    </div>
  );
}