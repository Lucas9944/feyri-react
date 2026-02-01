import React, { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../../../css/memberOverview.css";
import { useSelector } from "react-redux";

// agar sizda Member type/selector bo‘lsa keyin ulaymiz.
// hozircha localStorage’dan ham ishlayveradi.

export default function MemberOverview() {
  const location = useLocation();

  // localStorage’dan basic member info (siz App.tsx’da ham shunday qilgansiz)
  const member = useMemo(() => {
    try {
      const raw = localStorage.getItem("member_data");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }, [location.pathname]);

  const nickname = member?.mb_nick || member?.mb_name || "Guest";
  const avatarUrl = member?.mb_image || "/auth/default_user.png";

  return (
    <div className="feyri-overview">
      <div className="feyri-overview__header">
        <div className="feyri-overview__profile">
          <img className="feyri-overview__avatar" src={avatarUrl} alt="avatar" />
          <div className="feyri-overview__profileMeta">
            <div className="feyri-overview__kicker">Welcome</div>
            <div className="feyri-overview__name">{nickname}</div>
          </div>
        </div>

        <NavLink to="../settings" className="feyri-overview__cta">
          Edit profile
        </NavLink>
      </div>

      <div className="feyri-overview__grid">
        <NavLink to="../followers" className="feyri-overview__card">
          <div className="feyri-overview__cardTitle">Followers</div>
          <div className="feyri-overview__cardDesc">See who follows you</div>
          <div className="feyri-overview__cardGo">Open</div>
        </NavLink>

        <NavLink to="../favorites" className="feyri-overview__card">
          <div className="feyri-overview__cardTitle">Favorites</div>
          <div className="feyri-overview__cardDesc">Saved items & posts</div>
          <div className="feyri-overview__cardGo">Open</div>
        </NavLink>

        <NavLink to="../settings" className="feyri-overview__card">
          <div className="feyri-overview__cardTitle">Settings</div>
          <div className="feyri-overview__cardDesc">Profile & preferences</div>
          <div className="feyri-overview__cardGo">Open</div>
        </NavLink>
      </div>
    </div>
  );
}
