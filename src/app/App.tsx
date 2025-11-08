import React, { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "../css/App.css";
import "../css/navbar.css";
import "../css/footer.css";

import { BrandPage } from "./screens/BrandPage";
import { CommunityPage } from "./screens/CommunityPage";
import { OrdersPage } from "./screens/OrdersPage";
import { MemberPage } from "./screens/MemberPage";
import { HelpPage } from "./screens/HelpPage";
import { LoginPage } from "./screens/LoginPage";
import { HomePage } from "./screens/HomePage";
import { NavbarHome } from "./components/header";
import { NavbarBrand } from "./components/header/brand";
import { NavbarOthers } from "./components/header/others";
import { Footer } from "../app/components/footer";

function App() {
  const [path, setPath] = useState<string>();
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
        <Route path="/brand" element={<BrandPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/member-page" element={<MemberPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
