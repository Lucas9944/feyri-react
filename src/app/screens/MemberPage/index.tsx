import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import "../../../css/memberPage.css";

export function MemberPage() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `feyri-member__link ${isActive ? "is-active" : ""}`;

  return (
    <Container className="feyri-member">
      <div className="feyri-member__grid">
        <aside className="feyri-member__sidebar">
          <div className="feyri-member__title">Member</div>

          <nav className="feyri-member__nav" aria-label="Member navigation">
            <NavLink end to="" className={linkClass}>
              Overview
            </NavLink>

            <NavLink to="followers" className={linkClass}>
              Followers
            </NavLink>
            <NavLink to="followings" className={linkClass}>
              Followings
            </NavLink>
            <NavLink to="posts" className={linkClass}>
              Posts
            </NavLink>
            <NavLink to="favorites" className={linkClass}>
              Favorites
            </NavLink>
            <NavLink to="settings" className={linkClass}>
              Settings
            </NavLink>

            <div className="feyri-member__divider" />

            <NavLink to="visit-my" className={linkClass}>
              Visit My
            </NavLink>
            <NavLink to="visit-other" className={linkClass}>
              Visit Other
            </NavLink>
          </nav>
        </aside>

        <main className="feyri-member__content">
          <Outlet />
        </main>
      </div>
    </Container>
  );
}
