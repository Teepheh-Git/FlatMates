import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const Favorites = () => {
  const { userInfo, userLoading, userError } = useSelector(
    (state) => state.userReducer
  );
  return (
    <View>
      <SafeAreaView />
      <Text style={{ fontSize: 20 }}>{userInfo.username}</Text>
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({});
