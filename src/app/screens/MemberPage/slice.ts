import { createSlice } from "@reduxjs/toolkit";
import { MemberPageState } from "../../types/screen";

const initialState: MemberPageState = {
    chosenMember: null,
    chosenMemberBoArticles: [],
    chosenSingleBoArticle: null,
    memberFollowers: [],
    memberFollowings: [],
    myFavorite: [],
    targetComments: [],
    targetProducts: []
};

const memberPageSlice = createSlice({
  name: "memberPage",
  initialState,
  reducers: {
    setChosenMember: (state, action) => {
      state.chosenMember = action.payload;
    },
    setChosenMemberArticles: (state, action) => {
      state.chosenMemberBoArticles = action.payload;
    },
    setChosenSingleArticles: (state, action) => {
      state.chosenSingleBoArticle = action.payload;
    },
    setMemberFollowers: (state, action) => {
      state.memberFollowers = action.payload;
    },
    setMemberFollowings: (state, action) => {
      state.memberFollowings = action.payload;
    },
    setMemberMyFavorite: (state, action) => {
      state.myFavorite = action.payload;
    },
  },
});

export const {
  setChosenMember,
  setChosenMemberArticles,
  setChosenSingleArticles,
  setMemberFollowers,
  setMemberFollowings,
  setMemberMyFavorite,
} = memberPageSlice.actions;

const MemberPageReducer = memberPageSlice.reducer;
export default MemberPageReducer;
