import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ImageBackground, Linking } from "react-native";
import { CardField } from "@stripe/stripe-react-native";


import HeaderStyles from "../config/HeaderStyles";
import Colors from "../config/Colors";

function PurchasePage(props) {

  const [publishableKey, setPublishableKey] = useState('');
  
  useEffect(() => {
    async function init() {
      const publishableKey = await fetechPublishableKey();
      if (publishableKey){
        setPublishableKey(publishableKey);
      }
    }
  })

  const createUser = (email, password) => {
    try {
      // AFTER PAYMENT CONFIRMED
      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      paymentError();
      console.log(error);
    }
  };

  const paymentError = (error) => {
    Alert.alert(error);
    console.log(error);
  };

  return (
      <ImageBackground
        style={styles.bgImage}
        source={require("../assets/pexels-ivan-samkov-bw.jpg")}
      >
        <View style={styles.container}>
          <View style={HeaderStyles.header}>
            <Text style={HeaderStyles.smallTitle}>PURCHASE FULL ACCESS</Text>
          </View>

          <View style={styles.bodyView}>
          <CardField style={styles} />
          <Text style={HeaderStyles.smallTitle}>TEST</Text>
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
  cardField: {
    width: '100%',
    height: 50,
    marginBottom: 20,
  },
  container: {
    flex: 1,
  },
  bodyView: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  bodyText: {
    color: Colors.white,
    fontSize: 18,
  },
});

export default PurchasePage;
