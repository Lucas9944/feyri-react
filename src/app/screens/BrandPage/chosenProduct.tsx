import React from "react";
import AllBrands from "./allBrands";            // chapdagi filter
import { ShopProducts } from "./ShopProducts";  // ← FIGURALI QAVS bilan!

const ChosenProduct: React.FC = () => {
  return (
    <div className="shop-page">
      <div className="shop-layout">
        {/* Chap – filter */}
        <aside className="shop-filter">
          <AllBrands />
        </aside>

        {/* O‘ng – products */}
        <main className="shop-products">
          <ShopProducts />
        </main>
      </div>
    </div>
  );
};

export default ChosenProduct;
