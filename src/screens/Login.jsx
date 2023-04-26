import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import CountryPicker, {
  CountryCode,
  Country,
} from "react-native-country-picker-modal";
import { Entypo } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import CustomButton from "../components/CustomButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import Router from "../navigation/Router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../constants/constants";

const Login = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [callingCode, setCallingCode] = useState("234");
  const [country, setCountry] = useState("NG");
  const [focused, setFocused] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);

  const [loginLoading, setLoginLoading] = useState(false);

  const LOGIN_FN = async () => {
    setLoginLoading(true);

    const data = {
      identifier: email,
      password,
    };
    // console.log(data);
    try {
      const res = await axios.post(`${BASE_URL}/auth/local`, data);
      if (res.data.jwt) {
        const store = {
          token: res.data.jwt,
          id: res.data.user.id,
        };
        //--------------------------SAVE TOKEN IN DB-------------------------
        AsyncStorage.setItem("token", JSON.stringify(store), () => {
          navigation.navigate("MainStack");
        });
      }
    } catch (error) {
      console.log(JSON.stringify(error), "This is an error frm login");
    } finally {
      setLoginLoading(false);
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
        <Text style={styles.headText}>Login with</Text>
        <Text style={styles.headText}>Phone Number</Text>
        <Text style={styles.desc}>
          Please enter your phone number correctly.
        </Text>
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

        {/* <Text
          style={{
            fontSize: 14,
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          Phone
        </Text> */}

        {/* <View style={styles.inputBox}>
          <View style={styles.selectBox}>
            <CountryPicker
              withFlagButton={false}
              withCallingCodeButton
              countryCode={country}
              onSelect={(val) => {
                console.log(val);
                setCallingCode(val.callingCode);
                setCountry(val.cca2);
              }}
            />
            <Entypo name="chevron-down" size={24} color="#9BC6F2" />
          </View>
          <TextInput
            value={phone}
            onChangeText={(value) => setPhone(value)}
            style={[
              styles.inputField,
              { borderColor: focused ? "blue" : "grey" },
            ]}
            placeholder="993 4567 221"
            placeholderTextColor="#848484"
            keyboardType="numeric"
            maxLength={10}
            onFocus={() => {
              setFocused(true);
            }}
            onBlur={() => {
              setFocused(false);
            }}
          />
        </View> */}

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
            buttonText={"Login"}
            isLoading={loginLoading}
            onPress={LOGIN_FN}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;

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
