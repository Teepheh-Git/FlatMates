import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";

const CustomButton = ({ buttonText, onPress, isLoading, containerStyles }) => {
  return (
    <TouchableOpacity
      style={[styles.root, { ...containerStyles }]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      {isLoading ? (
        <ActivityIndicator color={"white"} size={"large"} />
      ) : (
        <Text style={styles.text}>{buttonText}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#9D69FC",
    height: 50,
    width: "100%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFF",
    fontWeight: "500",
    fontSize: 18,
  },
});
