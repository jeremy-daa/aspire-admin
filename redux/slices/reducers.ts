import { combineReducers } from "@reduxjs/toolkit";
// import authReducer from "../auth/authSlice";
import counterReducer from "./counterSlice";
// import menuToggleReducer from "./menuToggleSlice";
import locationReducer from "./locationSlice";
import blogModalToggleReducer from "./blogModalToggleSlice";
import blogAddModalToggleReducer from "./blogAddModalToggleSlice";
import activeBlogReducer from "./activeBlogSlice";
import sortBlogsReducer from "./sortBlogsSlice";
import activeRegReducer from "./activeRegSlice";
import regModalToggleReducer from "./regModalToggleSlice";
import activeStartupReducer from "./activeStartupSlice";
import activeVendorReducer from "./activeVendorSlice";
import loginReducer from "../auth/loginSlice";
import activeActivityReducer from "./activeActivitySlice";
import activeTourReducer from "./activeTourSlice";
import activePackageReducer from "./activePackageSlice";
import activeBookingReducer from "./activeBookingSlice";

export const rootReducer = combineReducers({
  // auth: authReducer,
  counter: counterReducer,
  // menuToggle: menuToggleReducer,
  location: locationReducer,
  blogModalToggle: blogModalToggleReducer,
  blogAddModalToggle: blogAddModalToggleReducer,
  activeBlog: activeBlogReducer,
  sortBlogs: sortBlogsReducer,
  activeReg: activeRegReducer,
  regModalToggle: regModalToggleReducer,
  activeStartup: activeStartupReducer,
  activeVendor: activeVendorReducer,
  login: loginReducer,
  activeActivity: activeActivityReducer,
  activeTour: activeTourReducer,
  activePackage: activePackageReducer,
  activeBooking: activeBookingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
