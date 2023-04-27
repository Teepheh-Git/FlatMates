import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/navigation/Router";
import { Provider } from "react-redux";
import { reduxStore } from "./src/redux/store";

//--------------------------REDUCERS--------------------------------------
//--------------------------STORE--------------------------------------

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
