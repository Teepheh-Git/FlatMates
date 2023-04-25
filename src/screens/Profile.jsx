import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }) => {
  const LOGOUT_FN = async () => {
    await AsyncStorage.removeItem("token", () => {
      navigation.navigate("AuthStack");
    });
  };
  return (
    <View style={styles.root}>
      <SafeAreaView />
      <Text>Logout</Text>

      <CustomButton buttonText={"Logout"} onPress={LOGOUT_FN} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  root: {
    padding: "10%",
  },
});
