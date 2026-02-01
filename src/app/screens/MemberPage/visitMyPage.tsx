// import React, { useEffect, useMemo, useState } from "react";
// import "../../../css/visitMyPage.css";

// import { Avatar } from "@mui/material";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import ZoomOutIcon from "@mui/icons-material/ZoomOut";
// import RedeemIcon from "@mui/icons-material/Redeem";
// import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
// import AddCommentIcon from "@mui/icons-material/AddComment";
// import ModeIcon from "@mui/icons-material/Mode";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// import MyFavorites from "./myFavorites";
// import MySettings from "./mySettings";
// import MemberFollow from "./memberFollowers";
// import MemberFollowings from "./memberFollowings";
// import TuiEditor from "../../components/tuiEditor/tuiEditor";
// import MemberPost from "./memberPost";

// import { BoArticle, SearchMemberArticlesObj } from "../../types/boArticle";
// import CommunityApiService from "../../apiServices/communityApiServices";
// import MemberApiServices from "../../apiServices/memberApiServices";
// import { Member } from "../../types/user";

// import { useDispatch, useSelector } from "react-redux";
// import { Dispatch } from "@reduxjs/toolkit";
// import { createSelector } from "reselect";
// import {
//   setChosenMember,
//   setChosenMemberArticles,
//   setChosenSingleArticles,
// } from "./slice";
// import {
//   retrieveChosenMember,
//   retrieveChosenMemberArticles,
//   retrieveChosenSingleArticles,
// } from "./selector";
// import { sweetFailureProvider } from "../../../lib/sweetAlert";

// // redux helpers
// const actionDispatch = (dispach: Dispatch) => ({
//   setChosenMember: (data: Member[]) => dispach(setChosenMember(data)),
//   setChosenMemberArticles: (data: BoArticle[]) => dispach(setChosenMemberArticles(data)),
//   setChosenSingleArticles: (data: BoArticle) => dispach(setChosenSingleArticles(data)),
// });

// const ChosenMemberRetriever = createSelector(retrieveChosenMember, (chosenMember) => ({ chosenMember }));
// const ChosenMemberArticlesRetriever = createSelector(retrieveChosenMemberArticles, (chosenMemberArticles) => ({ chosenMemberArticles }));
// const ChosenSingleArticlesRetriever = createSelector(retrieveChosenSingleArticles, (chosenSingleArticles) => ({ chosenSingleArticles }));

// type Section =
//   | "favorites"
//   | "orders"
//   | "recent"
//   | "followers"
//   | "followings"
//   | "articles"
//   | "write"
//   | "profile";

// const VisitMyPage = (props: any) => {
//   const { verifyMemberData } = props;

//   const { setChosenMember, setChosenMemberArticles, setChosenSingleArticles } =
//     actionDispatch(useDispatch());

//   const { chosenMember } = useSelector(ChosenMemberRetriever);
//   const { chosenMemberArticles } = useSelector(ChosenMemberArticlesRetriever);
//   const { chosenSingleArticles } = useSelector(ChosenSingleArticlesRetriever);

//   const [articleRebuild, setArticleRebuild] = useState<Date>(new Date());

//   const memberId = useMemo(() => {
//     // 1) props bo‘lsa shu
//     if (verifyMemberData?._id) return verifyMemberData._id;

//     // 2) localStorage fallback
//     const raw = localStorage.getItem("member_data");
//     if (!raw) return "none";
//     try {
//       return JSON.parse(raw)?._id ?? "none";
//     } catch {
//       return "none";
//     }
//   }, [verifyMemberData?._id]);

//   const [memberArticleSearchObj, setMemberArticleSearchObj] =
//   useState<SearchMemberArticlesObj>({
//     mb_id: verifyMemberData?._id ?? "none",
//     page: 1,
//     limit: 3,
//   });

//   useEffect(() => {
//     if (verifyMemberData?._id) {
//       setMemberArticleSearchObj((prev) => ({
//         ...prev,
//         mb_id: verifyMemberData._id,
//       }));
//     }
//   }, [verifyMemberData?._id]);
  

//   useEffect(() => {
//     setMemberArticleSearchObj((prev) => ({ ...prev, mb_id: memberId }));
//   }, [memberId]);

//   const [section, setSection] = useState<Section>("favorites");

//   useEffect(() => {
//     if (!localStorage.getItem("member_data")) {
//       sweetFailureProvider("Please login first!", true, true);
//       return;
//     }

//     if (!memberId || memberId === "none") return;

//     const communityService = new CommunityApiService();
//     const memberService = new MemberApiServices();

//     console.log("memberArticleSearchObj", memberArticleSearchObj);

//     communityService
//       .getMemberCommunityArticle(memberArticleSearchObj)
//       .then((data) => setChosenMemberArticles(data))
//       .catch((err) => console.log(err));

//     memberService
//       .getChosenMember(memberId)
//       .then((data) => setChosenMember([data]))
//       .catch((err) => console.log(err));
//   }, [memberArticleSearchObj, articleRebuild, memberId]);

//   const member = useMemo(() => {
//     return Array.isArray(chosenMember) && chosenMember.length > 0 ? chosenMember[0] : null;
//   }, [chosenMember]);

//   const nickname = member?.mb_nick ?? "Leo";
//   const phone = (member as any)?.mb_phone ?? "+000000000";
//   const role = "User";
//   const avatarSrc = (member as any)?.mb_image || "/auth/default_user.svg";

//   const titleMap: Record<Section, string> = {
//     favorites: "My Favorite",
//     orders: "My Orders",
//     recent: "Recently Visited",
//     followers: "My Followers",
//     followings: "My Followings",
//     articles: "Articles",
//     write: "Write Article",
//     profile: "My Profile",
//   };

//   const renderChosenArticleHandler = async (art_id: string) => {
//     try {
//       const communityService = new CommunityApiService();
//       communityService
//         .getChosenArticle(art_id)
//         .then((data) => {
//           setChosenSingleArticles(data);
//           // hozircha o‘sha joyning o‘zida ko‘rsatish (keyin detail page qilamiz)
//           setSection("articles");
//         })
//         .catch((err) => console.log(err));
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return (
//     <div className="feyri-my">
//       <div className="feyri-my__wrap">
//         {/* LEFT */}
//         <aside className="feyri-my__left">
//           <div className="feyri-my__profileCard">
//             <div className="feyri-my__profileTop">
//               <Avatar className="feyri-my__avatar" src={avatarSrc} alt={nickname} />
//               <div className="feyri-my__meta">
//                 <div className="feyri-my__name">{nickname}</div>
//                 <div className="feyri-my__phone">{phone}</div>
//                 <div className="feyri-my__role">{role}</div>
//               </div>
//             </div>
//           </div>

//           <div className="feyri-my__navCard">
//             <div className="feyri-my__navTitle">My Activity</div>

//             <button
//               type="button"
//               className={`feyri-my__navItem ${section === "favorites" ? "is-active" : ""}`}
//               onClick={() => setSection("favorites")}
//             >
//               <FavoriteBorderIcon className="feyri-my__navIcon" />
//               <span>My Favorite</span>
//             </button>

//             <button
//               type="button"
//               className={`feyri-my__navItem ${section === "orders" ? "is-active" : ""}`}
//               onClick={() => setSection("orders")}
//             >
//               <RedeemIcon className="feyri-my__navIcon" />
//               <span>My Orders</span>
//             </button>

//             <button
//               type="button"
//               className={`feyri-my__navItem ${section === "recent" ? "is-active" : ""}`}
//               onClick={() => setSection("recent")}
//             >
//               <ZoomOutIcon className="feyri-my__navIcon" />
//               <span>Recently Visited</span>
//             </button>

//             <div className="feyri-my__navTitle feyri-my__navTitle--mt">Connections</div>

//             <button
//               type="button"
//               className={`feyri-my__navItem ${section === "followers" ? "is-active" : ""}`}
//               onClick={() => setSection("followers")}
//             >
//               <PersonAddAlt1Icon className="feyri-my__navIcon" />
//               <span>My Followers</span>
//             </button>

//             <button
//               type="button"
//               className={`feyri-my__navItem ${section === "followings" ? "is-active" : ""}`}
//               onClick={() => setSection("followings")}
//             >
//               <PersonAddAlt1Icon className="feyri-my__navIcon" />
//               <span>My Followings</span>
//             </button>

//             <div className="feyri-my__navTitle feyri-my__navTitle--mt">Community</div>

//             <button
//               type="button"
//               className={`feyri-my__navItem ${section === "articles" ? "is-active" : ""}`}
//               onClick={() => setSection("articles")}
//             >
//               <AddCommentIcon className="feyri-my__navIcon" />
//               <span>Articles</span>
//             </button>

//             <button
//               type="button"
//               className={`feyri-my__navItem ${section === "write" ? "is-active" : ""}`}
//               onClick={() => setSection("write")}
//             >
//               <ModeIcon className="feyri-my__navIcon" />
//               <span>Write Article</span>
//             </button>

//             <div className="feyri-my__navTitle feyri-my__navTitle--mt">Manage account</div>

//             <button
//               type="button"
//               className={`feyri-my__navItem ${section === "profile" ? "is-active" : ""}`}
//               onClick={() => setSection("profile")}
//             >
//               <AccountCircleIcon className="feyri-my__navIcon" />
//               <span>My Profile</span>
//             </button>
//           </div>
//         </aside>

//         {/* RIGHT */}
//         <main className="feyri-my__right">
//           <div className="feyri-my__rightHeader">
//             <div className="feyri-my__rightTitle">{titleMap[section]}</div>
//           </div>

//           <div className="feyri-my__rightBody">
//             {section === "favorites" && <MyFavorites />}

//             {section === "orders" && (
//               <div className="feyri-my__placeholder">
//                 Orders component hali ulanmagan.
//               </div>
//             )}

//             {section === "recent" && (
//               <div className="feyri-my__placeholder">
//                 Recently visited component hali ulanmagan.
//               </div>
//             )}

//             {section === "followers" && <MemberFollow actions_enabled={true} />}

//             {section === "followings" && <MemberFollowings actions_enabled={true} />}

//             {section === "articles" && (
//               <MemberPost
//                 setArticleRebuild={setArticleRebuild}
//                 chosenMemberArticles={chosenMemberArticles}
//                 renderChosenArticleHandler={renderChosenArticleHandler}
//               />
//             )}

//             {section === "write" && <TuiEditor />}

//             {section === "profile" && <MySettings />}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default VisitMyPage;


import React, { useEffect, useMemo, useState } from "react";
import "../../../css/visitMyPage.css";

import { Avatar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import RedeemIcon from "@mui/icons-material/Redeem";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AddCommentIcon from "@mui/icons-material/AddComment";
import ModeIcon from "@mui/icons-material/Mode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import MyFavorites from "./myFavorites";
import MySettings from "./mySettings";
import MemberFollow from "./memberFollowers";
import MemberFollowings from "./memberFollowings";
import TuiEditor from "../../components/tuiEditor/tuiEditor";
import MemberPost from "./memberPost";

import { BoArticle, SearchMemberArticlesObj } from "../../types/boArticle";
import CommunityApiService from "../../apiServices/communityApiServices";
import MemberApiServices from "../../apiServices/memberApiServices";
import { Member } from "../../types/user";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {
  setChosenMember,
  setChosenMemberArticles,
  setChosenSingleArticles,
} from "./slice";
import {
  retrieveChosenMember,
  retrieveChosenMemberArticles,
  retrieveChosenSingleArticles,
} from "./selector";
import { sweetFailureProvider } from "../../../lib/sweetAlert";

/**
 * ✅ DEV TEST MODE:
 * - true bo‘lsa: MyPage login bo‘lmasa ham ochiladi (alert chiqmaydi)
 * - false bo‘lsa: eski holatga qaytadi (Please login first!)
 *
 * TEST tugagach: shu yerda true -> false qiling.
 */
const DEV_OPEN_MYPAGE = true;

// redux helpers
const actionDispatch = (dispach: Dispatch) => ({
  setChosenMember: (data: Member[]) => dispach(setChosenMember(data)),
  setChosenMemberArticles: (data: BoArticle[]) =>
    dispach(setChosenMemberArticles(data)),
  setChosenSingleArticles: (data: BoArticle) =>
    dispach(setChosenSingleArticles(data)),
});

const ChosenMemberRetriever = createSelector(retrieveChosenMember, (chosenMember) => ({ chosenMember }));
const ChosenMemberArticlesRetriever = createSelector(retrieveChosenMemberArticles, (chosenMemberArticles) => ({ chosenMemberArticles }));
const ChosenSingleArticlesRetriever = createSelector(retrieveChosenSingleArticles, (chosenSingleArticles) => ({ chosenSingleArticles }));

type Section =
  | "favorites"
  | "orders"
  | "recent"
  | "followers"
  | "followings"
  | "articles"
  | "write"
  | "profile";

const VisitMyPage = (props: any) => {
  const { verifyMemberData } = props;

  const { setChosenMember, setChosenMemberArticles, setChosenSingleArticles } =
    actionDispatch(useDispatch());

  const { chosenMember } = useSelector(ChosenMemberRetriever);
  const { chosenMemberArticles } = useSelector(ChosenMemberArticlesRetriever);
  const { chosenSingleArticles } = useSelector(ChosenSingleArticlesRetriever);

  const [articleRebuild, setArticleRebuild] = useState<Date>(new Date());

  const memberId = useMemo(() => {
    // 1) props bo‘lsa shu
    if (verifyMemberData?._id) return verifyMemberData._id;

    // 2) localStorage fallback
    const raw = localStorage.getItem("member_data");
    if (!raw) return "none";
    try {
      return JSON.parse(raw)?._id ?? "none";
    } catch {
      return "none";
    }
  }, [verifyMemberData?._id]);

  const [memberArticleSearchObj, setMemberArticleSearchObj] =
    useState<SearchMemberArticlesObj>({
      mb_id: verifyMemberData?._id ?? "none",
      page: 1,
      limit: 3,
    });

  useEffect(() => {
    if (verifyMemberData?._id) {
      setMemberArticleSearchObj((prev) => ({
        ...prev,
        mb_id: verifyMemberData._id,
      }));
    }
  }, [verifyMemberData?._id]);

  useEffect(() => {
    setMemberArticleSearchObj((prev) => ({ ...prev, mb_id: memberId }));
  }, [memberId]);

  const [section, setSection] = useState<Section>("favorites");

  useEffect(() => {
    const hasLogin = Boolean(localStorage.getItem("member_data"));

    /**
     * ✅ PROD/REAL MODE:
     * - DEV_OPEN_MYPAGE = false bo‘lsa, login bo‘lmasa alert beradi va return
     */
    if (!DEV_OPEN_MYPAGE && !hasLogin) {
      sweetFailureProvider("Please login first!", true, true);
      return;
    }

    /**
     * ✅ DEV TEST MODE:
     * - login bo‘lmasa ham UI ochilsin
     * - faqat backend chaqiruvlarini qilmaymiz
     */
    if (!hasLogin) return;

    if (!memberId || memberId === "none") return;

    const communityService = new CommunityApiService();
    const memberService = new MemberApiServices();

    console.log("memberArticleSearchObj", memberArticleSearchObj);

    communityService
      .getMemberCommunityArticle(memberArticleSearchObj)
      .then((data) => setChosenMemberArticles(data))
      .catch((err) => console.log(err));

    memberService
      .getChosenMember(memberId)
      .then((data) => setChosenMember([data]))
      .catch((err) => console.log(err));
  }, [memberArticleSearchObj, articleRebuild, memberId, setChosenMember, setChosenMemberArticles]);

  const member = useMemo(() => {
    return Array.isArray(chosenMember) && chosenMember.length > 0 ? chosenMember[0] : null;
  }, [chosenMember]);

  const nickname = member?.mb_nick ?? "Leo";
  const phone = (member as any)?.mb_phone ?? "+000000000";
  const role = "User";
  const avatarSrc = (member as any)?.mb_image || "/auth/default_user.svg";

  const titleMap: Record<Section, string> = {
    favorites: "My Favorite",
    orders: "My Orders",
    recent: "Recently Visited",
    followers: "My Followers",
    followings: "My Followings",
    articles: "Articles",
    write: "Write Article",
    profile: "My Profile",
  };

  const renderChosenArticleHandler = async (art_id: string) => {
    try {
      const communityService = new CommunityApiService();
      communityService
        .getChosenArticle(art_id)
        .then((data) => {
          setChosenSingleArticles(data);
          setSection("articles");
        })
        .catch((err) => console.log(err));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="feyri-my">
      <div className="feyri-my__wrap">
        {/* LEFT */}
        <aside className="feyri-my__left">
          <div className="feyri-my__profileCard">
            <div className="feyri-my__profileTop">
              <Avatar className="feyri-my__avatar" src={avatarSrc} alt={nickname} />
              <div className="feyri-my__meta">
                <div className="feyri-my__name">{nickname}</div>
                <div className="feyri-my__phone">{phone}</div>
                <div className="feyri-my__role">{role}</div>
              </div>
            </div>
          </div>

          <div className="feyri-my__navCard">
            <div className="feyri-my__navTitle">My Activity</div>

            <button
              type="button"
              className={`feyri-my__navItem ${section === "favorites" ? "is-active" : ""}`}
              onClick={() => setSection("favorites")}
            >
              <FavoriteBorderIcon className="feyri-my__navIcon" />
              <span>My Favorite</span>
            </button>

            <button
              type="button"
              className={`feyri-my__navItem ${section === "orders" ? "is-active" : ""}`}
              onClick={() => setSection("orders")}
            >
              <RedeemIcon className="feyri-my__navIcon" />
              <span>My Orders</span>
            </button>

            <button
              type="button"
              className={`feyri-my__navItem ${section === "recent" ? "is-active" : ""}`}
              onClick={() => setSection("recent")}
            >
              <ZoomOutIcon className="feyri-my__navIcon" />
              <span>Recently Visited</span>
            </button>

            <div className="feyri-my__navTitle feyri-my__navTitle--mt">Connections</div>

            <button
              type="button"
              className={`feyri-my__navItem ${section === "followers" ? "is-active" : ""}`}
              onClick={() => setSection("followers")}
            >
              <PersonAddAlt1Icon className="feyri-my__navIcon" />
              <span>My Followers</span>
            </button>

            <button
              type="button"
              className={`feyri-my__navItem ${section === "followings" ? "is-active" : ""}`}
              onClick={() => setSection("followings")}
            >
              <PersonAddAlt1Icon className="feyri-my__navIcon" />
              <span>My Followings</span>
            </button>

            <div className="feyri-my__navTitle feyri-my__navTitle--mt">Community</div>

            <button
              type="button"
              className={`feyri-my__navItem ${section === "articles" ? "is-active" : ""}`}
              onClick={() => setSection("articles")}
            >
              <AddCommentIcon className="feyri-my__navIcon" />
              <span>Articles</span>
            </button>

            <button
              type="button"
              className={`feyri-my__navItem ${section === "write" ? "is-active" : ""}`}
              onClick={() => setSection("write")}
            >
              <ModeIcon className="feyri-my__navIcon" />
              <span>Write Article</span>
            </button>

            <div className="feyri-my__navTitle feyri-my__navTitle--mt">Manage account</div>

            <button
              type="button"
              className={`feyri-my__navItem ${section === "profile" ? "is-active" : ""}`}
              onClick={() => setSection("profile")}
            >
              <AccountCircleIcon className="feyri-my__navIcon" />
              <span>My Profile</span>
            </button>
          </div>
        </aside>

        {/* RIGHT */}
        <main className="feyri-my__right">
          <div className="feyri-my__rightHeader">
            <div className="feyri-my__rightTitle">{titleMap[section]}</div>
          </div>

          <div className="feyri-my__rightBody">
            {section === "favorites" && <MyFavorites />}

            {section === "orders" && (
              <div className="feyri-my__placeholder">
                Orders component hali ulanmagan.
              </div>
            )}

            {section === "recent" && (
              <div className="feyri-my__placeholder">
                Recently visited component hali ulanmagan.
              </div>
            )}

            {section === "followers" && <MemberFollow actions_enabled={true} />}

            {section === "followings" && <MemberFollowings actions_enabled={true} />}

            {section === "articles" && (
              <MemberPost
                setArticleRebuild={setArticleRebuild}
                chosenMemberArticles={chosenMemberArticles}
                renderChosenArticleHandler={renderChosenArticleHandler}
              />
            )}

            {section === "write" && <TuiEditor />}

            {section === "profile" && <MySettings />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default VisitMyPage;
