import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { UserSlice } from "./UserSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
};
const rootReducer = combineReducers({
  userReducer: UserSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const reduxStore = configureStore({
  reducer: persistedReducer,
});
