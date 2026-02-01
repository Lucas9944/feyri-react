import React, { useMemo } from "react";
import "./../../../css/followings.css"; 
import { Avatar, Box, Button } from "@mui/material";
import PersonAddDisabledOutlinedIcon from "@mui/icons-material/PersonAddDisabledOutlined";

// redux (keyin real data ulaymiz)
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveMemberFollowings } from "./selector";

const memberFollowingsRetriever = createSelector(
  retrieveMemberFollowings,
  (memberFollowings) => ({ memberFollowings })
);

// fallback (redux bo‘sh bo‘lsa)
const fallbackFollowings = [
  { mb_nick: "ravshan" },
  { mb_nick: "ulugbek" },
  { mb_nick: "larisa" },
];

type Props = {
  actions_enabled?: boolean;
};

export default function MemberFollowings({ actions_enabled = true }: Props) {
  const { memberFollowings } = useSelector(memberFollowingsRetriever);

  const list = useMemo(() => {
    return (Array.isArray(memberFollowings) && memberFollowings.length > 0)
      ? memberFollowings
      : fallbackFollowings;
  }, [memberFollowings]);

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
                  <Button
                    variant="outlined"
                    className="feyri-follow__btn feyri-follow__btn--danger"
                    startIcon={<PersonAddDisabledOutlinedIcon />}
                    disableElevation
                  >
                    Unfollow
                  </Button>
                </div>
              )}
            </Box>
          );
        })}
      </div>
    </div>
  );
}
