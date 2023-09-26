import { createSlice } from "@reduxjs/toolkit";

const userNameSlice = createSlice({
  name: "userNameSlice",
  initialState: {
    name: "",
  },
  reducers: {
    setNameSlice: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default userNameSlice.reducer;

export const { setNameSlice } = userNameSlice.actions;
