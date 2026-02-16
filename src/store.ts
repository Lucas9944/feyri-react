import { configureStore } from "@reduxjs/toolkit";
import pathReducer from "./pathSlice";
import memberPageReducer from "./app/screens/MemberPage/slice";
import homePageReducer from "./app/screens/HomePage/slice";

export const store = configureStore({
  reducer: {
    path: pathReducer,
    memberPage: memberPageReducer,
    homePage: homePageReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
