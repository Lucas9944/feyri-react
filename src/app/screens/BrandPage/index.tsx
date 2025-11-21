import { Routes, Route, useMatch } from "react-router-dom";
import { AllBrands } from "./allBrands";
import { OneBrand } from "./oneBrand";
import { ChosenCosmetic } from "./chosenCosmetic";

export function BrandPage() {
  const match = useMatch("/brand/*");

  return (
    <div className="brand_page">
      <Routes>
        <Route path="furniture/:furniture_id" element={<ChosenCosmetic />} />
        <Route path=":brand_id" element={<OneBrand />} />
        <Route path="" element={<AllBrands />} />
      </Routes>
    </div>
  );
}
