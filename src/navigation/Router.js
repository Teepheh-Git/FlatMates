import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainStack from "./MainStack";
import AuthStack from "./AuthStack";

const Router = () => {
  const loggedIn = true;

  return loggedIn ? <MainStack /> : <AuthStack />;
};

export default Router;

const styles = StyleSheet.create({});
