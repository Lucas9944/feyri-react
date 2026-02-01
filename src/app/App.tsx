// src/App.tsx
import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from "react-router-dom";

import { navbar } from "./../lib/navbar";
import NotFound from "./screens/notFound";

import { NavbarHome } from "./components/header/index";
import { NavbarBrand } from "./components/header/brand";
import { NavbarOthers } from "./components/header/others";
import { Footer } from "./components/footer";
import { MemberPage } from "./screens/MemberPage";
import  MemberFollowers  from "./screens/MemberPage/memberFollowers";
import  MemberFollowings  from "./screens/MemberPage/memberFollowings";
import  MemberPosts  from "./screens/MemberPage/memberPost";
import  MyFavorites  from "./screens/MemberPage/myFavorites";
import  MySettings  from "./screens/MemberPage/mySettings";
import  VisitMyPage  from "./screens/MemberPage/visitMyPage";
import  VisitOtherPage  from "./screens/MemberPage/visitOtherPage";


import { Member } from "./types/user";
import { serverApi } from "./../lib/config";
import "./apiServices/verify";

import "../css/navbar.css";
import "../css/footer.css";
import "../css/shop.css";
import MemberOverview from "./screens/MemberPage/memberOverview";

function AppLayout() {
  const location = useLocation();
  const pathname = location.pathname;

  // query params (sizning eski logikangizga mos)
  const query = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const chosen_mb_id: string | null = query.get("mb_id") ?? null;
  const chosen_art_id: string | null = query.get("art_id") ?? null;

  // verified member
  const [virifiedMemberData, setVirifiedMemberData] = useState<Member | null>(null);

  // siz ishlatayotgan setPath saqlab qoldim (Navbar’lar uchun)
  const [path, setPath] = useState<string>("");

  useEffect(() => {
    const memberDataJson = localStorage.getItem("member_data");
    const member_data = memberDataJson ? JSON.parse(memberDataJson) : null;

    if (member_data) {
      member_data.mb_image = member_data.mb_image
        ? `${serverApi}/${member_data.mb_image}`
        : "/auth/default_user.svg";
      setVirifiedMemberData(member_data);
    }
  }, []);

  // auth page’da header/footer yashirish (sizning hozirgi shart)
  const isAuthPage = pathname === "/login";

  // Navbar tanlash (sizning hozirgi mantiq)
  const selectedNavbar =
    pathname === "/" ? (
      <NavbarHome
        setPath={setPath}
        chosen_art_id={chosen_art_id}
        chosen_mb_id={chosen_mb_id}
        virifiedMemberData={virifiedMemberData}
      />
    ) : pathname.startsWith("/brand") ? (
      <NavbarBrand setPath={setPath} />
    ) : (
      <NavbarOthers setPath={setPath} />
    );

  return (
    <>
      {!isAuthPage && selectedNavbar}

      <Outlet />

      {!isAuthPage && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Layout route (avvalgidek) */}
        <Route element={<AppLayout />}>
  {/* ✅ B: member-page ni navbar.map dan chiqarib tashlash */}
  {navbar
    .filter((r) => !r.path.startsWith("/member-page"))
    .map((r, idx) => (
      <Route key={idx} path={r.path} element={r.element} />
    ))}

  {/* ✅ C: member-page nested route’lar */}
  <Route path="/member-page" element={<MemberPage />}>
    <Route index element={<MemberOverview />} />
    <Route index element={<MemberPosts />} />
    <Route path="followers" element={<MemberFollowers />} />
    <Route path="followings" element={<MemberFollowings />} />
    <Route path="posts" element={<MemberPosts />} />
    <Route path="favorites" element={<MyFavorites />} />
    <Route path="settings" element={<MySettings />} />
    <Route path="visit-my" element={<VisitMyPage />} />
    <Route path="visit-other" element={<VisitOtherPage />} />
  </Route>

  {/* ✅ NotFound ham layout ichida bo‘lsin */}
  <Route path="*" element={<NotFound />} />
</Route>

      </Routes>
    </Router>
    
  );

}
