import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/constants";
import { useEffect } from "react";
import QRCode from "react-native-qrcode-svg";
import { useDispatch, useSelector } from "react-redux";
import { GET_USER_INFO } from "../redux/UserSlice";

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();

  const [userLoading, setUserLoading] = useState(false);
  // const [userInfo, setUserInfo] = useState({});
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState("");

  const { userInfo } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(GET_USER_INFO());

    // console.log(userInfo);
  }, []);

  const LOGOUT_FN = async () => {
    await AsyncStorage.removeItem("token", () => {
      navigation.navigate("AuthStack");
    });
  };

  // const GET_USER_FN = async () => {
  //   setUserLoading(true);
  //   try {
  //     const { token, id } = await AsyncStorage.getItem("token").then((res) => {
  //       return JSON.parse(res);
  //     });

  //     const { data, status } = await axios.get(`${BASE_URL}/users/${id}`, {
  //       headers: {
  //         Accept: "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setUserInfo(data);
  //   } catch (error) {
  //     console.log(error, "Failed to get user");
  //   } finally {
  //     setUserLoading(false);
  //   }
  // };
  const UPDATE_USER = async () => {
    setUserLoading(true);

    try {
      const { token, id } = await AsyncStorage.getItem("token").then((res) => {
        return JSON.parse(res);
      });

      const { status } = await axios.put(
        `${BASE_URL}/users/${id}`,
        {
          username: username,
          gender: "male",
          PhoneNumber: 9089765367,
        },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (status === 200) {
        // GET_USER_FN();
        dispatch(GET_USER_INFO());
      }
    } catch (error) {
      console.log(error, "Failed to update user");
    } finally {
      setUserLoading(false);
    }
  };

  const GET_PRODUCTS_FN = async () => {
    setUserLoading(true);
    try {
      const { token, id } = await AsyncStorage.getItem("token").then((kemi) => {
        return JSON.parse(kemi);
      });

      const { data } = await axios.get(`${BASE_URL}/products`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(data);
      setProducts(data.data);
    } catch (error) {
      console.log(error, "Failed to get products");
    } finally {
      setUserLoading(false);
    }
  };

  const DELETE_PRODUCTS_FN = async (productID) => {
    setUserLoading(true);
    try {
      const { token } = await AsyncStorage.getItem("token").then((res) => {
        return JSON.parse(res);
      });

      const { status } = await axios.delete(
        `${BASE_URL}/products/${productID}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (status === 200) {
        GET_PRODUCTS_FN();
      }
    } catch (error) {
      console.log(error, "Failed to delete product");
    } finally {
      setUserLoading(false);
    }
  };

  return (
    <View style={styles.root}>
      <SafeAreaView />
      <View>
        <Text style={{ fontSize: 30, marginVertical: 10 }}>
          {userInfo.email}
        </Text>
        <Text style={{ fontSize: 20, marginVertical: 10 }}>
          {userInfo.username}
        </Text>
        <Text style={{ fontSize: 20, marginVertical: 10 }}>
          {userInfo.PhoneNumber}
        </Text>
        <Text style={{ fontSize: 20, marginVertical: 10 }}>
          {userInfo.gender}
        </Text>
        <View style={styles.inputBox}>
          <TextInput
            value={username}
            onChangeText={(value) => setUsername(value)}
            style={[styles.inputField]}
            placeholder="example@gmail.com"
            placeholderTextColor="#848484"
          />
        </View>
      </View>

      <View style={{ marginTop: 20 }}>
        {products.map((e, i) => (
          <View
            key={i.toString()}
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "blue", fontSize: 20 }}>
              {e.attributes.Adidas}
            </Text>
            <Pressable
              onPress={() => {
                DELETE_PRODUCTS_FN(e.id);
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                }}
              >
                X
              </Text>
            </Pressable>
          </View>
        ))}
      </View>
      {/* <View style={{}}>
        <QRCode value="http://w3schools.com" />
      </View> */}

      <CustomButton
        buttonText={"Update user"}
        isLoading={userLoading}
        onPress={UPDATE_USER}
      />
      {/* <CustomButton buttonText={"Logout"} onPress={LOGOUT_FN} /> */}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  root: {
    padding: "10%",
  },
  inputField: {
    borderWidth: 1,
    width: "100%",
    height: "100%",
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: "#EBE1FE",
  },
  inputBox: {
    width: "100%",
    // backgroundColor: "grey",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
