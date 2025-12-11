import { configureStore } from "@reduxjs/toolkit";
import pathReducer from "./pathSlice"; // pathSlice'ni import qilish

export const store = configureStore({
  reducer: {
    path: pathReducer, // pathReducer'ni qo'shish
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
