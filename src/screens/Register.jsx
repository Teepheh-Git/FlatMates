import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import CustomButton from "../components/CustomButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import { BASE_URL } from "../constants/constants";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerLoading, setRegisterLoading] = useState(false);
  const [callingCode, setCallingCode] = useState("234");
  const [country, setCountry] = useState("NG");
  const [focused, setFocused] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);

  const REGISTER_USER = async () => {
    setRegisterLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/auth/local/register`, {
        username,
        email: email,
        password,
        // fullName: "Chima Promise B",
        // phoneNumber: "08108293720",
        // officeAddress:
        //   "12 adekoya strt   udhssj sbfsfjsjsd sjfsfjsfjs  fjjffnd",
        // NIN: "85247563894",
        // userType: "janitor",
      });

      if (res.data.jwt) {
        setUsername("");
        setEmail("");
        setPassword("");
        Alert.alert(
          "Registration Successful",
          "Dear user, you have successfully registered, please proceed to login",
          [
            {
              text: "Continue",
              onPress: () => {
                navigation.navigate("Login");
              },
            },
          ]
        );
      }
      // console.log(res.data, "Response from server");
    } catch (error) {
      console.log(JSON.stringify(error), "error from server");
      Alert.alert(JSON.stringify(error.message));
    } finally {
      setRegisterLoading(false);
    }
  };

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
          Username
        </Text>

        <View style={styles.inputBox}>
          <TextInput
            value={username}
            onChangeText={(value) => setUsername(value)}
            style={[
              styles.inputField,
              { borderColor: focused ? "blue" : "grey" },
            ]}
            placeholder="example@gmail.com"
            placeholderTextColor="#848484"
            keyboardType="email-address"
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
            keyboardType="email-address"
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
            isLoading={registerLoading}
            buttonText={"Register"}
            onPress={REGISTER_USER}
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
