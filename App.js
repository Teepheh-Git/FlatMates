import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/navigation/Router";
import { Provider } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { UserSlice } from "./src/redux/UserSlice";
import { ProductSlice } from "./src/redux/ProductSlice";

//--------------------------REDUCERS--------------------------------------
//--------------------------STORE--------------------------------------

const reduxStore = configureStore({
  reducer: persistReducer(
    { key: "root", version: 1, storage: AsyncStorage },
    combineReducers({
      userReducer: UserSlice.reducer,
      productReducer: ProductSlice.reducer,
    })
  ),
});

export default function App() {
  return (
    <Provider store={reduxStore}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
