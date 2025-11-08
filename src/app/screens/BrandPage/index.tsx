import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { AllBrands } from "./allBrands";
import { ChosenFurniture } from "./chosenFurniture";
import { OneBrand } from "./oneBrand";
import { ChosenCosmetic } from "./chosenCosmetic";

export function BrandPage() {
  let brand = useRouteMatch();
  console.log(brand);

  return (
    <div className="brand_page">
      <Switch>
        <Route path={`${brand.path}/furniture/:furniture_id`}>
          <ChosenCosmetic/> 
        </Route>
        <Route path={`${brand.path}/:brand_id`}>
          <OneBrand />
        </Route>
        <Route path={`${brand.path}`}>
          <AllBrands />
        </Route>
      </Switch>
    </div>
  );
}