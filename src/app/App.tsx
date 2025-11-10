<<<<<<< HEAD
import React, { useState } from "react";
import { Box, Stack, Container, Typography } from "@mui/material";
import "../css/App.css";
import "../css/navbar.css";
import "../css/footer.css";
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { NavbarHome } from "./components/header";
import { NavbarBrand } from "./components/header/brand";
import { NavbarOthers } from "./components/header/others";
import { Footer } from "./components/footer";
>>>>>>> 40cc647 (feat: Alternative error fix?)


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrandPage } from "./screens/BrandPage";
import { CommunityPage } from "./screens/CommunityPage";
import { OrdersPage } from "./screens/OrdersPage";
import { MemberPage } from "./screens/MemberPage";
import { HelpPage } from "./screens/HelpPage";
import { LoginPage } from "./screens/LoginPage";
import { HomePage } from "./screens/HomePage";
<<<<<<< HEAD
import { NavbarHome } from "./components/header";
import { NavbarBrand } from "./components/header/brand";
import { NavbarOthers } from "./components/header/others";
import { Footer } from "./components/footer";

function App() {
  const [path, setPath] = useState();
=======

import "../css/App.css";
import "../css/navbar.css";
import "../css/footer.css";

function App() {
  const [path, setPath] = useState("");
>>>>>>> 40cc647 (feat: Alternative error fix?)
  const main_path = window.location.pathname;


  return (
    <Router>
      {main_path == "/" ? (
        <NavbarHome setPath={setPath} />
      ) : main_path.includes("/brand") ? (
        <NavbarBrand setPath={setPath} />
      ) : (
        <NavbarOthers setPath={setPath} />
      )}

      {/* ✅ React Router v6 sintaksisi */}
      <Routes>
        <Route path="/brand">
          <BrandPage />
        </Route>
        <Route path="/community">
          <CommunityPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <MemberPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
function useStyles() {
  throw new Error("Function not implemented.");
}
