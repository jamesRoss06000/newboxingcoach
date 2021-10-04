import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../config/Colors";

function LogoTitle() {
  return (
    <View style={styles.view}>
      <Image
        style={[styles.tinyImage,{marginRight:10}]}
        source={require("../assets/th.png")}
      />
      <Text style={styles.text}>Boxing Coach</Text>
      <Image
        style={styles.tinyImage}
        source={require("../assets/bell-solid.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.white,
    textTransform: "uppercase",
    marginRight: 10,
  },
  tinyImage: {
    width: 20,
    height: 20,
  },
});

export default LogoTitle;
