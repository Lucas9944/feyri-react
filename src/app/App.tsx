import { Container } from "@mui/material";
import "../css/App.css";
import "../css/navbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";


import { BrandPage } from "../app/screens/BrandPage";
import { CommunityPage } from "../app/screens/CommunityPage";
import { OrdersPage } from "../app/screens/OrdersPage";
import { MemberPage } from "../app/screens/MemberPage";
import { HelpPage } from "../app/screens/HelpPage";
import { LoginPage } from "../app/screens/LoginPage";
import { HomePage } from "../app/screens/HomePage";
import { NavbarHome } from "../app/components/header";
import { NavbarBrand } from "../app/components/header/brand";
import { NavbarOthers } from "../app/components/header/others";

function App() {
  const [path, setPath] = useState();
  const main_path = window.location.pathname;
  return (
    <Container>
      <Router>
      {main_path == "/" ? (
          <NavbarHome setPath={setPath} />
        ) : main_path.includes("/brand") ? (
          <NavbarBrand setPath={setPath} />
        ) : (
          <NavbarOthers setPath={setPath} />
        )}
        <div>
          <nav>
            <ul>
              {/* <li><Link to="/brand">BrandPage</Link></li>
              <li><Link to="/">HomePage</Link></li> */}
              {/* <li><Link to="/community">CommunityPage</Link></li>
              <li><Link to="/orders">OrdersPage</Link></li>
              <li><Link to="/member-page">MembersPage</Link></li>
              <li><Link to="/help">HelpPage</Link></li>
              <li><Link to="/login">LoginPage</Link></li> */}
            </ul>
          </nav>

          <Routes>
            <Route path="/brand" element={<BrandPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/member-page" element={<MemberPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </Container>
  );
}

export default App;
