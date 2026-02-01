import React from "react";
import "../../../css/followers.css";
import { Avatar, Box, Button, Stack } from "@mui/material";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

// redux (hozircha qoldiramiz, keyin real data ulaymiz)
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveMemberFollowers } from "../MemberPage/selector";

// selector
const memberFollowersRetriever = createSelector(
  retrieveMemberFollowers,
  (memberFollowers) => ({ memberFollowers })
);

// vaqtincha test data (redux bo‘sh bo‘lsa)
const fallbackFollowers = [
  { mb_nick: "leo", following: true },
  { mb_nick: "jonibek", following: false },
  { mb_nick: "sofia", following: true },
];

type Props = {
  actions_enabled?: boolean;
};

const MemberFollow = ({ actions_enabled = true }: Props) => {
  const { memberFollowers } = useSelector(memberFollowersRetriever);

  // ⚠️ Eslatma: retrieveMemberFollowers qaytaradigan shape sizda qanday bo‘lsa shunga moslang.
  // Hozircha redux bo‘sh bo‘lsa fallback ishlaydi:
  const list = (Array.isArray(memberFollowers) && memberFollowers.length > 0)
    ? memberFollowers
    : fallbackFollowers;

    return (
      <div className="feyri-follow">
        <div className="feyri-follow__list">
          {list.map((item: any, idx: number) => {
            const image_url = item?.mb_image || "/auth/default_user.svg";
    
            return (
              <Box key={idx} className="feyri-follow__row">
                <div className="feyri-follow__left">
                  <Avatar
                    alt={item?.mb_nick ?? "user"}
                    src={image_url}
                    className="feyri-follow__avatar"
                  />
    
                  <div className="feyri-follow__meta">
                    <div className="feyri-follow__badge">User</div>
                    <div className="feyri-follow__name">{item?.mb_nick}</div>
                  </div>
                </div>
    
                {actions_enabled && (
                  <div className="feyri-follow__actions">
                    {item?.following ? (
                      <Button
                        variant="outlined"
                        className="feyri-follow__btn feyri-follow__btn--ghost"
                        disableElevation
                      >
                        Following
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        className="feyri-follow__btn feyri-follow__btn--primary"
                        startIcon={<PersonAddAltOutlinedIcon />}
                        disableElevation
                      >
                        Follow back
                      </Button>
                    )}
                  </div>
                )}
              </Box>
            );
          })}
        </div>
      </div>
    );
    
};

export default MemberFollow;
