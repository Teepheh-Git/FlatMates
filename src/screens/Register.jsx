import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import CountryPicker, {
  CountryCode,
  Country,
} from "react-native-country-picker-modal";
import { Entypo } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import CustomButton from "../components/CustomButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [callingCode, setCallingCode] = useState("234");
  const [country, setCountry] = useState("NG");
  const [focused, setFocused] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.root}>
        <SafeAreaView />
        <Pressable
          style={{
            width: "20%",
            height: "7%",
          }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={35} color="black" />
        </Pressable>
        <Text style={styles.headText}>Register with</Text>
        <Text style={styles.headText}>Email & password</Text>
        <Text style={styles.desc}>Please enter your Email and password.</Text>

        <Text
          style={{
            fontSize: 14,
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          Email
        </Text>

        <View style={styles.inputBox}>
          <TextInput
            value={email}
            onChangeText={(value) => setEmail(value)}
            style={[
              styles.inputField,
              { borderColor: focused ? "blue" : "grey" },
            ]}
            placeholder="example@gmail.com"
            placeholderTextColor="#848484"
            keyboardType="email"
            onFocus={() => {
              setFocused(true);
            }}
            onBlur={() => {
              setFocused(false);
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 14,
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          Password
        </Text>

        <TextInput
          value={password}
          onChangeText={(value) => setPassword(value)}
          style={[
            styles.passwordField,
            { borderColor: focusedPassword ? "blue" : "grey" },
          ]}
          placeholder="Enter your password"
          placeholderTextColor="#848484"
          onFocus={() => {
            setFocusedPassword(true);
          }}
          onBlur={() => {
            setFocusedPassword(false);
          }}
          secureTextEntry={true}
        />

        <View
          style={{
            position: "absolute",
            width: "100%",
            alignSelf: "center",
            bottom: "20%",
          }}
        >
          <CustomButton
            buttonText={"Register"}
            onPress={() => {
              console.log(`+${callingCode}${email}`);
              console.log(`${password}`);
            }}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: "10%",
  },
  headText: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 3,
  },
  desc: {
    fontSize: 16,
    color: "#837B7B",
    marginTop: 5,
  },
  inputBox: {
    width: "100%",
    // backgroundColor: "grey",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  selectBox: {
    backgroundColor: "#9D69FC33",
    width: "28%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  inputField: {
    borderWidth: 1,
    width: "100%",
    height: "100%",
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: "#EBE1FE",
  },
  passwordField: {
    borderWidth: 1,
    width: "100%",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: "#EBE1FE",
  },
});
