import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

// import firebase from "firebase/app";
import "firebase/auth";

import Colors from "../config/Colors";

function ClickableBottomBtn(props) {
  return (
    <TouchableOpacity onPress={props.pressFunction} style={styles.buttonContainer}>
      <View style={styles.aboutButton}>
        <Text style={styles.aboutButtonText}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  aboutButton: {
    width: "100%",
    padding: 10,
    backgroundColor: Colors.fadedWhite,
    textAlign: "center",
  },
  aboutButtonText: {
    color: Colors.white,
    textTransform: "uppercase",
    textAlign: "center",
  },
  buttonContainer: {
    width: '50%',
  }
});

export default ClickableBottomBtn;
