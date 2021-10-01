import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import Colors from "../config/Colors";

function DisplayComponent(props) {
  return (
    <View style={styles.displayComponent}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{props.displayTitle}</Text>
      </View>

      <View style={styles.setDisplayInner}>
        <View id={props.displayName} style={[styles.button, styles.display]}>
          <Text style={styles.displayText}>{props.dataDisplay}</Text>
        </View>
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
    minHeight: 56,
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
  displayComponent: {
    width: "90%",
    marginHorizontal: "5%",
    flexDirection: "column",
    justifyContent: "center",
  },
  setDisplayInner: {
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

export default DisplayComponent;
