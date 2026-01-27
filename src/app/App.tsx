// App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import BrandPage from "../app/screens/BrandPage";
import { CommunityPage } from "./screens/CommunityPage";
import { OrdersPage } from "./screens/OrdersPage";
import { MemberPage } from "./screens/MemberPage";
import { HelpPage } from "./screens/HelpPage";
import LoginPage from "./screens/LoginPage";
import { HomePage } from "./screens/HomePage";

import { NavbarHome } from "./components/header/index";
import { NavbarBrand } from "./components/header/brand";
import { NavbarOthers } from "./components/header/others";
import { Footer } from "./components/footer";

import "../css/navbar.css";
import "../css/footer.css";
import "../css/shop.css";

/**
 * ✅ Router ichida useLocation ishlashi uchun alohida komponent
 * (Bu sizning logikangizni buzmaydi, faqat pathname’ni to‘g‘ri oladi)
 */
function AppShell() {
  const [path, setPath] = useState("");
  const location = useLocation();
  const pathname = location.pathname;

  // ✅ faqat login sahifada header/footer yashirin bo‘ladi
  const isAuthPage = pathname === "/login";

  // ✅ sizdagi navbar tanlash logikasi saqlanadi
  const navbar =
    pathname === "/" ? (
      <NavbarHome setPath={setPath} />
    ) : pathname.includes("/brand") ? (
      <NavbarBrand setPath={setPath} />
    ) : (
      <NavbarOthers setPath={setPath} />
    );

  return (
    <>
      {!isAuthPage && navbar}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/brand" element={<BrandPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/member-page" element={<MemberPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      {!isAuthPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App;
