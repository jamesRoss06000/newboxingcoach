import React from "react";
import { View, Text, StyleSheet } from "react-native";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faBell } from "@fortawesome/free-solid-svg-icons";
import Colors from "./Colors";

function LogoTitle() {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Boxing Coach</Text>
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
});

export default LogoTitle;
