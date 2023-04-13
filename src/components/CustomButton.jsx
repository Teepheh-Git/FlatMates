import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ buttonText, onPress, containerStyles }) => {
  return (
    <TouchableOpacity
      style={[styles.root, { ...containerStyles }]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={styles.text}>{buttonText}</Text>
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
