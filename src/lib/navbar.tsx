// src/lib/navbar.tsx
import React from "react";

import BrandPage from "../app/screens/BrandPage";
import { CommunityPage } from "../app/screens/CommunityPage";
import { OrdersPage } from "../app/screens/OrdersPage";
import { MemberPage } from "../app/screens/MemberPage";
import { HelpPage } from "../app/screens/HelpPage";
import LoginPage from "../app/screens/LoginPage";
import { HomePage } from "../app/screens/HomePage";

export type NavbarRoute = {
  path: string;
  element: React.ReactElement;
  title?: string;
  hidden?: boolean;
  private?: boolean;
};

export const navbar: NavbarRoute[] = [
  { 
  path: "/",
  element: <HomePage />,
  title: "Home", 
  private: false,
   hidden: false },
  { 
    path: "/brand", 
    element: <BrandPage />, 
    title: "Brand", 
    private: false, 
    hidden: false 
  },
  { 
    path: "/community", 
    element: <CommunityPage />, 
    title: "Community", 
    private: false, 
    hidden: false 
  },
  { 
    path: "/orders", 
    element: <OrdersPage />, 
    title: "Orders", 
    private: false, 
    hidden: false 
  },
  { 
    path: "/member-page", 
    element: <MemberPage />, 
    title: "Member", 
    private: false, 
    hidden: false 
  },
  { 
    path: "/help", 
    element: <HelpPage />, 
    title: "Help", 
    private: false, 
    hidden: false 
  },
  { 
    path: "/login", 
    element: <LoginPage />, 
    title: "Login",
    private: false, 
    hidden: true 
    },

];
