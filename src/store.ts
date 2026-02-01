import { configureStore } from "@reduxjs/toolkit";
import pathReducer from "./pathSlice"; // pathSlice'ni import qilish
import memberPageReducer from "./app/screens/MemberPage/slice";

export const store = configureStore({
  reducer: {
    path: pathReducer, // pathReducer'ni qo'shish
    memberPage: memberPageReducer, // ✅ selector shu nomni kutyapti
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
