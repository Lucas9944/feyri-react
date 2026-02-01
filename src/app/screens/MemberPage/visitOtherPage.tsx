import React, { useMemo, useState } from "react";
import "../../../css/visitOtherPage.css";

import { Avatar, Button } from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonRemoveAlt1Icon from "@mui/icons-material/PersonRemoveAlt1";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AddCommentIcon from "@mui/icons-material/AddComment";

import MemberFollow from "./memberFollowers";
import MemberFollowings from "../MemberPage/memberFollowings";
import { TargetArticles } from "../CommunityPage/targetArticles";

// REDUX
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveChosenMember } from "./selector";

const ChosenMemberRetriever = createSelector(retrieveChosenMember, (chosenMember) => ({
  chosenMember,
}));

type Section = "followers" | "followings" | "articles";

const VisitOtherPage = () => {
  const { chosenMember } = useSelector(ChosenMemberRetriever);

  const member = useMemo(() => {
    return Array.isArray(chosenMember) && chosenMember.length > 0 ? chosenMember[0] : null;
  }, [chosenMember]);

  const nickname = member?.mb_nick ?? "Leo";
  const phone = (member as any)?.mb_phone ?? "+000000000";
  const role = "User";
  const avatarSrc = (member as any)?.mb_image || "/auth/default_user.svg";

  // real follow state sizda qaysi field’da ekanini bilmayman — hozir UI uchun local state
  const [isFollowing, setIsFollowing] = useState<boolean>(
    Boolean((member as any)?.me_following ?? (member as any)?.following ?? false)
  );

  const [section, setSection] = useState<Section>("articles");

  const onToggleFollow = () => {
    setIsFollowing((p) => !p);
    // keyin real API ulaymiz
  };

  const title =
    section === "followers" ? "Followers" : section === "followings" ? "Followings" : "Articles";

  return (
    <div className="feyri-visit">
      <div className="feyri-visit__wrap">
        {/* LEFT */}
        <aside className="feyri-visit__left">
          <div className="feyri-visit__profileCard">
            <div className="feyri-visit__profileTop">
              <Avatar className="feyri-visit__avatar" src={avatarSrc} alt={nickname} />
              <div className="feyri-visit__meta">
                <div className="feyri-visit__name">{nickname}</div>
                <div className="feyri-visit__phone">{phone}</div>
                <div className="feyri-visit__role">{role}</div>
              </div>
            </div>

            <Button
              onClick={onToggleFollow}
              disableElevation
              variant={isFollowing ? "outlined" : "contained"}
              startIcon={isFollowing ? <PersonRemoveAlt1Icon /> : <PersonAddAlt1Icon />}
              className={
                isFollowing
                  ? "feyri-visit__followBtn feyri-visit__followBtn--ghost"
                  : "feyri-visit__followBtn feyri-visit__followBtn--primary"
              }
            >
              {isFollowing ? "Bekor qilish" : "Follow qilish"}
            </Button>
          </div>

          <div className="feyri-visit__navCard">
            <div className="feyri-visit__navTitle">Details</div>

            <button
              type="button"
              onClick={() => setSection("followers")}
              className={`feyri-visit__navItem ${section === "followers" ? "is-active" : ""}`}
            >
              <GroupOutlinedIcon className="feyri-visit__navIcon" />
              <span>Followers</span>
            </button>

            <button
              type="button"
              onClick={() => setSection("followings")}
              className={`feyri-visit__navItem ${section === "followings" ? "is-active" : ""}`}
            >
              <GroupsOutlinedIcon className="feyri-visit__navIcon" />
              <span>Followings</span>
            </button>

            <div className="feyri-visit__navTitle feyri-visit__navTitle--mt">Community</div>

            <button
              type="button"
              onClick={() => setSection("articles")}
              className={`feyri-visit__navItem ${section === "articles" ? "is-active" : ""}`}
            >
              <AddCommentIcon className="feyri-visit__navIcon" />
              <span>Articles</span>
            </button>
          </div>
        </aside>

        {/* RIGHT */}
        <main className="feyri-visit__right">
          <div className="feyri-visit__rightHeader">
            <div className="feyri-visit__rightTitle">{title}</div>
          </div>

          <div className="feyri-visit__rightBody">
            {section === "followers" && <MemberFollow actions_enabled={false} />}
            {section === "followings" && <MemberFollowings actions_enabled={false} />}
            {section === "articles" && <TargetArticles />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default VisitOtherPage;
