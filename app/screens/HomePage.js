import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import firebase from "firebase/app";
import "firebase/auth";
import * as Linking from "expo-linking";

import Colors from "../config/Colors";
import HeaderStyles from "../config/HeaderStyles";
import ClickableTextBtn from "../components/ClickableTextBtn";
import ClickableBottomBtn from "../components/ClickableBottomBtn";

function HomePage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      console.log(user);
      if (user != null) {
        setEmail(user.email);
        setLoggedIn(true);
      }
    });
    
  }, []);

  const wrongPassword = () => {
    Alert.alert("Password not recognized!", "Please try again...");
    console.log("Password not recognized!");
  };

  const unknownEmail = () => {
    Alert.alert("Unknown email!", "Please check your spelling...");
    console.log("Unknown email!");
  };

  const authError = (e) => {
    Alert.alert(e);
    console.log(e);
  };

  const alreadyLoggedIn = (e) => {
    Alert.alert("You're already logged in");
    console.log("You're already logged in, fool!");
  };

  const loginUser = () => {
    if (loggedIn) {
      navigation.navigate("Options", { loggedIn: true });
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function (error) {
          let errorCode = error.code;
          let errorMessage = error.message;
          if (errorCode === "auth/wrong-password") {
            wrongPassword();
          } else if (errorCode === "auth/user-not-found") {
            unknownEmail();
          } else {
            authError(errorMessage);
          }
          console.log(error);
        });
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          navigation.navigate("Options", { loggedIn: true });
        }
      });
    }
  };

  const pressLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setEmail("");
        setPassword("");
        Linking.openURL("boxing-coach-4719c.firebaseapp.com");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const pressHandler = () => {
    navigation.navigate("About");
  };

  const pressPassword = () => {
    navigation.navigate("Password");
  };

  const pressPurchase = () => {
    navigation.navigate("Purchase");
  };

  const pressFreeVersion = () => {
    navigation.navigate("Options", { loggedIn: false });
  };

  return (
    <ImageBackground
      style={styles.bgImage}
      source={require("../assets/pexels-ivan-samkov-bw.jpg")}
    >
      <View style={styles.container}>
        <View style={HeaderStyles.header}>
          <Text style={HeaderStyles.smallTitle}>HOME</Text>
        </View>

        <View style={styles.button}>
          <View style={styles.inputView}>
            <TextInput
              style={[styles.buttonText, styles.inputText]}
              placeholder="Email address"
              placeholderTextColor={Colors.black}
              onChangeText={(email) => setEmail(email)}
              value={email}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={[styles.buttonText, styles.inputText]}
              placeholder={loggedIn ? "Already logged in" : "Password"}
              placeholderTextColor={Colors.black}
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>

          <TouchableOpacity onPress={loginUser}>
            <View>
              <Text style={styles.buttonText}>
                {loggedIn == true ? "GO TRAINING!" : "LOGIN AND TRAIN!"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={loggedIn == true ? styles.hidden : ""}>
          <ClickableTextBtn
            text="PAY €1.99 FOR FULL ACCESS"
            pressFunction={pressPurchase}
          />
        </View>

        <View style={loggedIn == true ? styles.hidden : ""}>
          <ClickableTextBtn
            text="USE FREE VERSION"
            pressFunction={pressFreeVersion}
          />
        </View>

        <View style={loggedIn == true ? "" : styles.hidden}>
          <ClickableTextBtn text="SIGN OUT" pressFunction={pressLogout} />
        </View>

        <View style={styles.bottom}>
          <ClickableBottomBtn
            pressFunction={pressHandler}
            text={"Use &\nAbout App"}
          />
          <ClickableBottomBtn
            pressFunction={
              loggedIn == true ? () => alreadyLoggedIn() : pressPassword
            }
            text={"Forgotten\nPassword"}
          />
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
  bottom: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
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
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    height: "100%",
    paddingTop: 50,
  },
  inputText: {
    fontSize: 18,
    padding: 5,
  },
  hidden: {
    display: "none",
  },
  inputView: {
    marginBottom: 15,
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
    width: "100%",
  },
});

export default HomePage;
