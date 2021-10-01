import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

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
          onPress={props.pressFunctionMinus}
          disabled={props.disabled}
        >
          <Text style={styles.button}>
           {/*
           <FontAwesomeIcon
              style={styles.buttonText}
              icon={faMinus}
              color={Colors.black}
            />
           */}
          </Text>
        </TouchableOpacity>

        <View id={props.timeName} style={[styles.button, styles.display]}>
          <Text style={styles.displayText}>{props.timeShown}</Text>
        </View>

        <TouchableOpacity
          onPress={props.pressFunctionPlus}
          disabled={props.disabled}
        >
          <Text style={styles.button}>
           {/*
           <FontAwesomeIcon
              style={styles.buttonText}
              icon={faPlus}
              color={Colors.black}
            />
           */}
          </Text>
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
    height: 56,
  },
  buttonText: {
    color: Colors.black,
    fontWeight: "bold",
  },
  display: {
    flex: 1,
    color: Colors.black,
    marginHorizontal: 3,
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
    justifyContent: "center",
    marginBottom: 12,
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
