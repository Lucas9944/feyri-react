// src/App.tsx
import "./css/App.css";
import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route, useLocation, Outlet } from "react-router-dom";

import { NavbarHome } from "./app/components/header";
import NotFound from "./app/screens/notFound";
import { navbar } from "./lib/navbar";

import { Member } from "./app/types/user";
import { serverApi } from "./lib/config";
import "./app/apiServices/verify";

function AppLayout() {
  const location = useLocation();

  // query params
  const query = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );
  const chosen_mb_id: string | null = query.get("mb_id") ?? null;
  const chosen_art_id: string | null = query.get("art_id") ?? null;

  // verified member
  const [virifiedMemberData, setVirifiedMemberData] = useState<Member | null>(null);

  // ✅ setPath endi REAL state (stub emas)
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

  // auth sahifalarda layoutni yashirish
  const hideLayoutPaths = ["/login", "/sign-up"];
  const isLayoutHidden = hideLayoutPaths.includes(location.pathname);

  return (
    <>
      {!isLayoutHidden && (
        <NavbarHome
          chosen_art_id={chosen_art_id}
          chosen_mb_id={chosen_mb_id}
          virifiedMemberData={virifiedMemberData}
          setPath={setPath}
        />
      )}

      {/* ✅ child route lar shu yerda chiqadi */}
      <Outlet />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {navbar.map(({ path, element }, id) => (
          <Route key={id} path={path} element={element} />
        ))}

        {/* xohlasangiz 404 ham layout ichida bo'lsin */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
