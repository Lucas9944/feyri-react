// src/app/screens/BrandPage/index.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import AllBrands from "./allBrands";
import { OneBrand } from "./oneBrand";
import ChosenProduct from "./chosenProduct";
// AGAR HOZIRCHA ShopProducts alohida kerak bo‘lmasa, umuman import qilma
// import { ShopProducts } from "./ShopProducts";

const BrandPage: React.FC = () => {
  return (
    <div className="brand-page">
      <Routes>
        {/* asosiy shop sahifa – chap filter + o‘ng products */}
        <Route path="/" element={<ChosenProduct />} />

        {/* brand bo‘yicha alohida sahifa */}
        <Route path="/:brand_id" element={<OneBrand />} />

        {/* agar furniture route kerak bo‘lsa, xohlasang yana qo‘shib qo‘y:
        <Route path="/furniture/:furniture_id" element={<ChosenProduct />} />
        */}
      </Routes>
    </div>
  );
};

export default BrandPage;
