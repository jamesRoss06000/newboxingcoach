import React, { useState } from "react";
import { View, StyleSheet, Text, ImageBackground, Alert } from "react-native";
// import * as Linking from "expo-linking";

import HeaderStyles from "../config/HeaderStyles";
import Colors from "../config/Colors";
import SetTimerComponent from "../components/SetTimerComponent";
import ClickableTextBtn from "../components/ClickableTextBtn";

function OptionsPage({ navigation, props }) {
  let paid = false;
  if (navigation.getParam("loggedIn") == true) {
    paid = true;
  }

  const [rounds, setRounds] = useState(3);

  const pressMinusRounds = () => {
    if (paid == true) {
      if (rounds >= 4) {
        setRounds(rounds - 1);
      }
    } else {
      freeVersionMessage();
    }
  };

  const pressPlusRounds = () => {
    if (paid == true) {
      if (rounds <= 11) {
        setRounds(rounds + 1);
      }
    } else {
      freeVersionMessage();
    }
  };

  const [roundLength, setRoundLength] = useState(120);
  const roundMinutes = Math.floor(roundLength / 60);
  const roundSeconds = roundLength - roundMinutes * 60;
  const showMins = roundMinutes.toString().padStart(2, "0");
  const showSecs = roundSeconds.toString().padStart(2, "0");
  const roundTimeShown = showMins + ":" + showSecs;

  const pressMinusRoundTime = () => {
    if (paid == true) {
      if (roundLength >= 70) {
        setRoundLength(roundLength - 10);
      }
    } else {
      freeVersionMessage();
    }
  };

  const pressPlusRoundTime = () => {
    if (paid == true) {
      if (roundLength <= 170) {
        setRoundLength(roundLength + 10);
      }
    } else {
      if (roundLength <= 110) {
        setRoundLength(roundLength + 10);
      } else if (roundLength <= 120) {
        freeVersionMessage();
      }
    }
  };

  const [breakLength, setBreakLength] = useState(60);
  const breakMinutes = Math.floor(breakLength / 60);
  const breakSeconds = breakLength - breakMinutes * 60;
  const breakMins = breakMinutes.toString().padStart(2, "0");
  const breakSecs = breakSeconds.toString().padStart(2, "0");
  const breakTimeShown = breakMins + ":" + breakSecs;

  const pressMinusBreakTime = () => {
    if (paid == true) {
      if (breakLength >= 40) {
        setBreakLength(breakLength - 10);
      }
    } else {
      freeVersionMessage();
    }
  };

  const pressPlusBreakTime = () => {
    if (paid == true) {
      if (breakLength <= 110) {
        setBreakLength(breakLength + 10);
      }
    } else {
      freeVersionMessage();
    }
  };

  const [coachLevel, setCoachLevel] = useState("BEGINNER");

  const pressCoachLevelUp = () => {
    if (paid == true) {
      switch (coachLevel) {
        case "NO COACH":
          setCoachLevel("BEGINNER");
          break;
        case "BEGINNER":
          setCoachLevel("INTERMEDIATE");
          break;
        case "INTERMEDIATE":
          setCoachLevel("ADVANCED");
          break;
        case "ADVANCED":
          setCoachLevel("ELITE");
          break;
        case "ELITE":
          // alert("Elite is maximum coach level!");
          break;
        default:
          break;
      }
    } else {
      freeVersionMessage();
    }
  };

  const pressCoachLevelDown = () => {
    if (paid == true) {
      switch (coachLevel) {
        case "NO COACH":
          // alert("No coach is minimum coach level!");
          break;
        case "BEGINNER":
          setCoachLevel("NO COACH");
          break;
        case "INTERMEDIATE":
          setCoachLevel("BEGINNER");
          break;
        case "ADVANCED":
          setCoachLevel("INTERMEDIATE");
          break;
        case "ELITE":
          setCoachLevel("ADVANCED");
          break;
        default:
          break;
      }
    } else {
      freeVersionMessage();
    }
  };

  const optionsData = {
    rounds: rounds,
    roundLength: roundLength,
    breakLength: breakLength,
    coachLevel: coachLevel,
    paid: paid,
  };

  const pressBegin = () => {
    navigation.navigate("Training", optionsData);
  };

  const freeVersionMessage = () => {
    Alert.alert(
      "Pay €1.99 for full functionality!",
      "Free Version settings\nRounds : 3\nRound time : 2 minutes\nBreak time : 1 minute\nCoach intensity : Beginner"
    );
    console.log(
      "Pay €1.99 for full functionality!\nFree Version settings\nRounds : 3\nRound time : 2 minutes\nBreak time : 1 minute\nCoach intensity : Beginner"
    );
  };

  return (
    <ImageBackground
      style={styles.bgImage}
      source={require("../assets/pexels-ivan-samkov-bw.jpg")}
    >
      <View style={styles.container}>
        <View style={HeaderStyles.header}>
          <Text style={HeaderStyles.smallTitle}>OPTIONS</Text>
        </View>

        <View style={styles.bodyView}>
          {/* ROUND LENGTH */}
          <SetTimerComponent
            timerTitle="NUMBER OF ROUNDS"
            timeName="Rounds"
            timeShown={rounds}
            pressFunctionMinus={pressMinusRounds}
            pressFunctionPlus={pressPlusRounds}
          />
          {/* ROUND LENGTH */}
          <SetTimerComponent
            timerTitle="ROUND LENGTH"
            timeName="Round-timer"
            timeShown={roundTimeShown}
            pressFunctionMinus={pressMinusRoundTime}
            pressFunctionPlus={pressPlusRoundTime}
          />
          {/* BREAK LENGTH */}
          <SetTimerComponent
            timerTitle="BREAK LENGTH"
            timeName="Break-timer"
            timeShown={breakTimeShown}
            pressFunctionMinus={pressMinusBreakTime}
            pressFunctionPlus={pressPlusBreakTime}
          />
          {/* COACH LEVEL */}
          <SetTimerComponent
            timerTitle="COACH LEVEL"
            timeName="Coach-level"
            timeShown={coachLevel}
            pressFunctionMinus={pressCoachLevelDown}
            pressFunctionPlus={pressCoachLevelUp}
          />

          <View
            style={{
              width: "100%",
              fontSize: 18,
              position: "absolute",
              bottom: 10,
            }}
          >
            <ClickableTextBtn
              text={
                paid
                  ? "PRESS TO CONTINUE TO TRAINING!"
                  : "PRESS TO CONTINUE TO FREE TRAINING!"
              }
              pressFunction={pressBegin}
            />
          </View>
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
  container: {
    flex: 1,
    height: "100%",
    paddingTop: 50,
  },
  bodyView: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
  },
  bodyText: {
    color: Colors.white,
    fontSize: 18,
  },
});

export default OptionsPage;
