import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Favorites from "../screens/Favorites";
import Chats from "../screens/Chats";
import Profile from "../screens/Profile";
import { Feather, AntDesign, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 100,
          paddingHorizontal: 20,
          //   https://ethercreative.github.io/react-native-shadow-generator/
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <View
                style={{
                  backgroundColor: "#9D69FC",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  borderRadius: 10,
                }}
              >
                <Feather name="home" size={24} color="white" />
                <Text style={{ color: "white", marginLeft: 5 }}>Home</Text>
              </View>
            ) : (
              <Feather name="home" size={24} color="black" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <View
                style={{
                  backgroundColor: "#9D69FC",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  borderRadius: 10,
                }}
              >
                <AntDesign name="hearto" size={24} color="white" />
                <Text style={{ color: "white", marginLeft: 5 }}>Fav</Text>
              </View>
            ) : (
              <AntDesign name="hearto" size={24} color="black" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <View
                style={{
                  backgroundColor: "#9D69FC",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  borderRadius: 10,
                }}
              >
                <Ionicons name="chatbubble-outline" size={24} color="white" />
                <Text style={{ color: "white", marginLeft: 5 }}>Chat</Text>
              </View>
            ) : (
              <Ionicons name="chatbubble-outline" size={24} color="black" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <View
                style={{
                  backgroundColor: "#9D69FC",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  borderRadius: 10,
                }}
              >
                <Feather name="user" size={24} color="white" />
                <Text style={{ color: "white", marginLeft: 5 }}>Profile</Text>
              </View>
            ) : (
              <Feather name="user" size={24} color="black" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
