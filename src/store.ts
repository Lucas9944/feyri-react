import { configureStore } from "@reduxjs/toolkit";

// agar hali slice yo‘q bo‘lsa, shunchaki bo‘sh qilib qo‘y:
export const store = configureStore({
  reducer: {},
});

// RootState va AppDispatch turlari:
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;