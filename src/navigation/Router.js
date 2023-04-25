import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import MainStack from "./MainStack";
import AuthStack from "./AuthStack";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MyStack = createStackNavigator();

const Router = () => {
  const [tokenAvailable, setTokenAvailable] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    SAVE_TOKEN();
  }, []);

  const SAVE_TOKEN = async () => {
    try {
      setLoading(true);
      await AsyncStorage.getItem("token").then((token) => {
        if (token) {
          setTokenAvailable(true);
        }
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator color={"blue"} size="large" />
      </View>
    );
  }
  return (
    <MyStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={tokenAvailable ? "MainStack" : "AuthStack"}
    >
      <MyStack.Screen component={AuthStack} name="AuthStack" />
      <MyStack.Screen component={MainStack} name="MainStack" />
    </MyStack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
