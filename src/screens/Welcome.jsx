import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { LogoSvg } from "../assets/svg/svg";
import { h, w } from "../constants/constants";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Welcome = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/images/auth_bg.png")}
      style={{ ...StyleSheet.absoluteFillObject }}
    >
      <SafeAreaView />
      <View style={styles.logoBox}>
        <LogoSvg />
        <Text style={styles.headText}>
          The best place to find roomates, home apartment and rental listings.
        </Text>
      </View>

      <View style={styles.bottomBox}>
        <TouchableOpacity
          style={styles.button1}
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Login")}
        >
          <Feather name="smartphone" size={20} color="white" />
          <Text
            style={{
              color: "white",
              fontWeight: "500",
              fontSize: 16,
              marginLeft: 10,
            }}
          >
            Continue with Phone Number
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} activeOpacity={0.7}>
          <FontAwesome5 name="facebook" size={24} color="#1877F2" />

          <Text
            style={{
              color: "black",
              fontWeight: "500",
              fontSize: 16,
              marginLeft: 10,
            }}
          >
            Welcome with Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} activeOpacity={0.7}>
          <Image
            source={require("../assets/icons/google_icon.png")}
            style={{
              width: 24,
              height: 24,
            }}
          />
          <Text
            style={{
              color: "black",
              fontWeight: "500",
              fontSize: 16,
              marginLeft: 10,
            }}
          >
            Welcome with Google
          </Text>
        </TouchableOpacity>

        <Pressable
          style={{ flexDirection: "row", position: "absolute", bottom: 40 }}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text>Don’t have an account?</Text>
          <Text
            style={{
              color: "#1877F2",
              marginLeft: 5,
            }}
          >
            Sign Up
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  logoBox: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 30,
  },
  headText: {
    fontSize: 14,
    textAlign: "center",
    width: w * 0.8,
    color: "#FFF",
    fontWeight: "600",
    marginTop: 20,
  },
  bottomBox: {
    width: w,
    backgroundColor: "#FFF",
    height: h * 0.4,
    position: "absolute",
    bottom: 0,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    alignItems: "center",
  },
  button1: {
    backgroundColor: "#000",
    width: w * 0.8,
    height: 50,
    borderRadius: 30,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  button2: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: w * 0.8,
    height: 50,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 30,
    // borderColor: "#C4C4C4",
    borderColor: "#000",
  },
});
