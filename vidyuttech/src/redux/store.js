import { configureStore } from "@reduxjs/toolkit";
import userNameSlice from "./slice/userName";
import loginLogoutStatus from "./slice/loginLogoutStatus";
export default configureStore({
  reducer: {
    userNameReducer: userNameSlice,
    loginStatusReducer: loginLogoutStatus,
  },
});
