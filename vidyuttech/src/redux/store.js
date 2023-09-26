import { configureStore } from "@reduxjs/toolkit";
import userNameSlice from "./slice/userName";

export default configureStore({
  reducer: {
    userNameReducer: userNameSlice,
  },
});
