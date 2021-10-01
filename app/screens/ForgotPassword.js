import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
// import Firebase from "../config/firebaseKeys";
import firebase from "firebase";
import "firebase/auth";
import * as Linking from "expo-linking";
// import * as WebBrowser from "expo-web-browser";

import HeaderStyles from "../config/HeaderStyles";
import Colors from "../config/Colors";

function ForgotPassword(props) {
  const [email, setEmail] = useState("");

  let actionCodeSettings = {
    url: "boxing-coach-4719c.firebaseapp.com",
    iOS: {
      bundleId: "boxing-coach-4719c.firebaseapp.com",
    },
    android: {
      packageName: "boxing-coach-4719c.firebaseapp.com",
      installApp: true,
      minimumVersion: "12",
    },
    handleCodeInApp: true,
  };

  const emailSent = () => {
    Alert.alert(
      "If the email you supplied is registered, an email has been sent to this address."
    );
    console.log(
      "If the email you supplied is registered, an email has been sent to this address."
    );
  };

  const resetPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function () {
        emailSent();
        window.localStorage.setItem("emailForSignIn", email);
        Linking.openURL("boxing-coach-4719c.firebaseapp.com");
      })
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <ImageBackground
      style={styles.bgImage}
      source={require("../assets/pexels-ivan-samkov-bw.jpg")}
    >
      <View style={styles.container}>
        <View style={HeaderStyles.header}>
          <Text style={HeaderStyles.smallTitle}>PASSWORD RESET</Text>
        </View>

        <View style={styles.button}>
          <View style={styles.inputView}>
            <TextInput
              style={[styles.buttonText, styles.inputText]}
              placeholder="Email address"
              placeholderTextColor={Colors.black}
              onChangeText={(email) => setEmail(email)}
            />
          </View>

          <TouchableOpacity onPress={resetPassword}>
            <View>
              <Text style={styles.buttonText}>RESET PASSWORD</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  button: {
    width: "90%",
    marginHorizontal: "5%",
    marginBottom: 15,
    padding: 20,
    backgroundColor: Colors.fadedWhite,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: Colors.black,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    height: "100%",
    paddingTop: 50,
  },
  inputText: {
    fontSize: 16,
    padding: 5,
  },
  inputView: {
    marginBottom: 15,
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
    width: "100%",
  },
});

export default ForgotPassword;
