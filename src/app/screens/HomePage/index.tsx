import React from "react";
import { Advertisements } from "./advertiSements";
<<<<<<< HEAD
import { SwiperEvents} from "./SwiperEvents";
import { LoadProducts } from "./loadProducts";
import { Statistics } from "./statistics";
import { TopCosmetic } from "./topCosmetic";
import { TopRating } from "./topRating";
=======
import { InfoFurniture } from "./infoFurniture";
import { LoadProducts } from "./loadProducts";
import { Statistics } from "./statistics";
import { TopInterior } from "./topInterior";
import { TopRating } from "../HomePage/topRating";
>>>>>>> 40cc647 (feat: Alternative error fix?)
import "../../../css/home.css";

export function HomePage() {
  return (
    <div className="homepage">
      <Statistics />
<<<<<<< HEAD
      <TopCosmetic/>
      <Advertisements />
      <SwiperEvents/>
=======
      <TopInterior />
      <Advertisements />
      <InfoFurniture />
>>>>>>> 40cc647 (feat: Alternative error fix?)
      <TopRating />
      <LoadProducts />
    </div>
  );
}