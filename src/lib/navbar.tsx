// src/lib/navbar.tsx
import React from "react";

import {HomePage }from "../app/screens/HomePage";
import { HelpPage } from "../app/screens/HelpPage";
import {CommunityPage }from "../app/screens/CommunityPage";

// import SignUp from "../screens/SignUpPage";
import LoginPage from "../app/screens/LoginPage";
// import VisitMyPage from "../screens/MemberPage/visitMyPage";
// import VisitOtherPage from "../screens/MemberPage/visitOtherPage";
import OrdersPage from "../app/screens/OrdersPage";


import { NavbarObj } from "../app/types/others";

export const navbar: NavbarObj[] = [
  {
    element: <HomePage />,
    title: "Home",
    path: "/",
    private: false,
    hidden: false,
  },
//   {
//     element: <ShopPage />,
//     title: "Shop",
//     path: "/shop",
//     private: false,
//     hidden: false,
//   },
//   {
//     element: <StorePage />,
//     title: "Store",
//     path: "/store",
//     private: false,
//     hidden: false,
//   },
  {
    element: <CommunityPage />,
    title: "community",
    path: "/community",
    private: false,
    hidden: false,
  },
  {
    element: <HelpPage />,
    title: "CS",
    path: "/help",
    private: false,
    hidden: false,
  },

  // hidden routes
//   {
//     element: <ChoosenProduct />,
//     title: "OneJewellry",
//     path: "/shop/:product_id",
//     private: false,
//     hidden: true,
//   },
//   {
//     element: <SignUp />,
//     title: "sign-up",
//     path: "/sign-up",
//     private: false,
//     hidden: true,
//   },
  {
    element: <LoginPage />,
    title: "log-in",
    path: "/login",
    private: false,
    hidden: true,
  },
//   {
//     element: <VisitMyPage />,
//     title: "my-account",
//     path: "/member",
//     private: false,
//     hidden: true,
//   },
//   {
//     element: <VisitOtherPage />,
//     title: "other-account",
//     path: "/member/:other",
//     private: false,
//     hidden: true,
//   },
//   {
//     element: <Basket />,
//     title: "basket",
//     path: "/cart",
//     private: false,
//     hidden: true,
//   },
  {
    element: <OrdersPage />,
    title: "checkout",
    path: "/checkout/:order_id",
    private: false,
    hidden: true,
  },
];

/**
 * (ixtiyoriy) NavbarHome ichida NavLink chizish uchun tayyor list:
 * faqat hidden:false bo'lganlari chiqadi.
 */
export const navLinks = navbar
  .filter((r) => !r.hidden)
  .map((r) => ({ title: r.title, path: r.path }));
