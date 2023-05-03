import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { UserSlice } from "./UserSlice";

export const reduxStore = configureStore({
  reducer: persistReducer(
    { key: "root", version: 1, storage: AsyncStorage },
    combineReducers({
      userReducer: UserSlice.reducer,
    })
  ),
});
