import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PathState {
  path: string;
}

const initialState: PathState = {
  path: "/",
};

const pathSlice = createSlice({
  name: "path",
  initialState,
  reducers: {
    setPath(state, action: PayloadAction<string>) {
      state.path = action.payload;
    },
  },
});

export const { setPath } = pathSlice.actions;
export default pathSlice.reducer;
