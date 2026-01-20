// App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  BrandPage  from "../app/screens/BrandPage";
import { CommunityPage } from "./screens/CommunityPage";
import { OrdersPage } from "./screens/OrdersPage";
import { MemberPage } from "./screens/MemberPage";
import { HelpPage } from "./screens/HelpPage";
import { LoginPage } from "./screens/LoginPage";
import { HomePage } from "./screens/HomePage";

import { NavbarHome } from "./components/header/index";
import { NavbarBrand } from "./components/header/brand";
import { NavbarOthers } from "./components/header/others";
import { Footer } from "./components/footer";
import  '../css/navbar.css';
import '../css/footer.css';
import '../css/shop.css';

function App() {
  const [path, setPath] = useState("");
  const main_path = window.location.pathname;

  return (
    <Router>
      {main_path === "/" ? (
        <NavbarHome setPath={setPath} />
      ) : main_path.includes("/brand") ? (
        <NavbarBrand setPath={setPath} />
      ) : (
        <NavbarOthers setPath={setPath} />
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/brand" element={<BrandPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/member-page" element={<MemberPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

// Default export qo'shish
export default App;
