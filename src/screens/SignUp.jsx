import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { LogoSvg } from "../assets/svg/svg";
import { h, w } from "../constants/constants";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const options = [
  {
    img: require("../assets/images/img1.png"),
    text: "Real Estate Agent",
  },
  {
    img: require("../assets/images/img2.png"),
    text: "Looking for Rommate",
  },
  {
    img: require("../assets/images/img3.png"),
    text: "Landlord",
  },
];

const SignUp = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(null);
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
        <Text
          style={{
            marginTop: 30,
            fontSize: 20,
            width: "80%",
            textAlign: "center",
            fontWeight: "500",
            alignSelf: "center",
          }}
        >
          How would you like to sign up on the app?
        </Text>

        {/* ----------------------SIGN UP OPTIONS----------------------- */}

        <View style={{ marginTop: 20 }}>
          {options.map((e, i) => (
            <Pressable
              key={i.toString()}
              style={[
                styles.optionBox,
                { backgroundColor: currentIndex === i ? "#9D69FB" : "white" },
              ]}
              onPress={() => {
                setCurrentIndex(i);
              }}
            >
              <Image
                source={e.img}
                style={{
                  width: 60,
                  height: 60,
                  marginRight: 20,
                }}
              />
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 18,
                  color: currentIndex === i ? "white" : "black",
                }}
              >
                {e.text}
              </Text>
            </Pressable>
          ))}
        </View>

        <Pressable
          style={{
            flexDirection: "row",
            position: "absolute",
            bottom: 40,
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text>Already a member?</Text>
          <Text
            style={{
              color: "#1877F2",
              marginLeft: 5,
            }}
          >
            Login
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default SignUp;

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
    height: h * 0.55,
    position: "absolute",
    bottom: 0,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    // alignItems: "center",
    paddingHorizontal: "10%",
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
  optionBox: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#BCDAF780",
    borderRadius: 15,
  },
});
