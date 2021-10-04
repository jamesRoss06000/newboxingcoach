import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

// import firebase from "firebase/app";
// import "firebase/auth";

import Colors from "../config/Colors";

function SetTimerComponent(props) {
  return (
    <View style={styles.setTimer}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{props.timerTitle}</Text>
      </View>

      <View style={styles.setTimerInner}>
        <TouchableOpacity
          style={[styles.button, {paddingVertical:8}]}
          onPress={props.pressFunctionMinus}
          disabled={props.disabled}
        >
        <Image
        style={styles.tinyImage}
        source={require("../assets/minus-solid.png")}/>
        </TouchableOpacity>

        <View id={props.timeName} style={[styles.button, styles.display]}>
          <Text style={styles.displayText}>{props.timeShown}</Text>
        </View>

        <TouchableOpacity
          style={[styles.button, {paddingVertical:8}]}
          onPress={props.pressFunctionPlus}
          disabled={props.disabled}
        >
        <Image
        style={styles.tinyImage}
        source={require("../assets/plus-solid.png")}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 3,
    padding: 20,
    backgroundColor: Colors.fadedWhite,
    borderRadius: 5,
    alignItems: "center",
    alignContent: "center",
    height: 56,
  },
  buttonText: {
    color: Colors.black,
    fontWeight: "bold",
  },
  display: {
    flex: 1,
    // width: 200,
    color: Colors.black,
    marginHorizontal: 15,
    justifyContent: "center",
    paddingVertical: 0,
  },
  displayText: {
    fontSize: 23,
    fontWeight: "bold",
  },
  setTimer: {
    width: "90%",
    marginHorizontal: "5%",
    flexDirection: "column",
    justifyContent: "center",
  },
  setTimerInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  tinyImage: {
    width: 40,
    height: 40,
  },
  titleView: {
    textAlign: "left",
  },
  titleText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default SetTimerComponent;
