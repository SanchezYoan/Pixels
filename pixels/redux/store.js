import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import appReducer from "./reducers/appReducer";

const rootReducer = combineReducers({
  users: appReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
