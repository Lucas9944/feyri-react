import React from "react";
import { Advertisements } from "./advertiSements";
import { SwiperEvents} from "./SwiperEvents";
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
      <SwiperEvents/>
      <TopRating />
      <LoadProducts />
    </div>
  );
}