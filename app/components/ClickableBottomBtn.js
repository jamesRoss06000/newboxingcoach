import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

// import firebase from "firebase/app";
import "firebase/auth";

import Colors from "../config/Colors";

function ClickableBottomBtn(props) {
  return (
    <TouchableOpacity onPress={props.pressFunction}>
      <View style={styles.aboutButton}>
        <Text style={styles.aboutButtonText}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  aboutButton: {
    width: "50%",
    padding: 10,
    backgroundColor: Colors.fadedWhite,
    textAlign: "center",
  },
  aboutButtonText: {
    color: Colors.white,
    textTransform: "uppercase",
  },
});

export default ClickableBottomBtn;
