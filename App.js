import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import Login from "./src/screens/Welcome";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/navigation/Router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
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
