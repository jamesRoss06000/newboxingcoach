import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Alert,
  Button,
} from "react-native";
// import * as Linking from "expo-linking";

import HeaderStyles from "../config/HeaderStyles";
import Colors from "../config/Colors";
import DisplayComponent from "../components/DisplayComponent";
import ClickableTextBtn from "../components/ClickableTextBtn";

class TrainingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countdownSecs: 30,
      breakLength: this.props.navigation.getParam("breakLength"),
      roundLength: this.props.navigation.getParam("roundLength"),
      currentSession: "countdown",
      sessionPaused: false,
      currentBreak: this.props.navigation.getParam("rounds") - 1,
      currentRound: 1,
      coachLevel: this.props.navigation.getParam("coachLevel"),
      paid: this.props.navigation.getParam("paid"),
      rounds: this.props.navigation.getParam("rounds"),
    };
    this.pressBegin = this.pressBegin.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.timer = this.timer.bind(this);
  }

  pressBegin() {
    this.setState((state) => {
      return {
        intervalID: setInterval(this.timer, 1000),
      };
    });
  }

  timer() {
    if (this.state.countdownSecs != 0) {
      this.setState((state) => {
        return {
          sessionPaused: false,
          currentSession: "countdown",
          countdownSecs: state.countdownSecs - 1,
        };
      });
    } else if (this.state.countdownSecs == 0 && this.state.roundLength != 0) {
      this.setState((state) => {
        return {
          currentSession: "round",
          roundLength: state.roundLength - 1,
        };
      });
    } else if (
      this.state.countdownSecs == 0 &&
      this.state.roundLength == 0 &&
      this.state.breakLength != 0 &&
      this.state.currentBreak != 0
    ) {
      this.setState((state) => {
        return {
          currentSession: "break",
          breakLength: state.breakLength - 1,
        };
      });
    } else if (
      this.state.countdownSecs == 0 &&
      this.state.roundLength == 0 &&
      this.state.breakLength == 0
    ) {
      if (this.state.currentRound < this.state.rounds) {
        this.setState((state) => {
          return {
            currentBreak: state.currentBreak - 1,
            currentRound: state.currentRound + 1,
            breakLength: this.props.navigation.getParam("breakLength"),
            roundLength: this.props.navigation.getParam("roundLength"),
          };
        });
      }
    } else if (
      this.state.countdownSecs == 0 &&
      this.state.roundLength == 0 &&
      this.state.breakLength == this.props.navigation.getParam("breakLength")
    ) {
      clearInterval(this.state.intervalID);
      this.finishedWorkout();
      this.setState((state) => {
        return {
          countdownSecs: 30,
          breakLength: this.props.navigation.getParam("breakLength"),
          roundLength: this.props.navigation.getParam("roundLength"),
          currentSession: "countdown",
          sessionPaused: false,
          currentBreak: this.props.navigation.getParam("rounds") - 1,
          currentRound: 1,
          coachLevel: this.props.navigation.getParam("coachLevel"),
          paid: this.props.navigation.getParam("paid"),
          rounds: this.props.navigation.getParam("rounds"),
        };
      });
    }
  }

  pauseTimer() {
    this.setState((state) => {
      return { sessionPaused: true };
    });
    clearInterval(this.state.intervalID);
    console.log(this.state);
  }

  finishedWorkout = () => {
    Alert.alert("Workout complete!, Good work!");
    console.log("Workout complete!, Good work!");
  };

  render() {
    let countdown =
      "00:" + this.state.countdownSecs.toString().padStart(2, "0");

    let roundMinutes = Math.floor(this.state.roundLength / 60);
    let roundSeconds = this.state.roundLength - roundMinutes * 60;
    let showMins = roundMinutes.toString().padStart(2, "0");
    let showSecs = roundSeconds.toString().padStart(2, "0");
    let roundTimeShown = showMins + ":" + showSecs;

    let breakMinutes = Math.floor(this.state.breakLength / 60);
    let breakSeconds = this.state.breakLength - breakMinutes * 60;
    let breakMins = breakMinutes.toString().padStart(2, "0");
    let breakSecs = breakSeconds.toString().padStart(2, "0");
    let breakTimeShown = breakMins + ":" + breakSecs;

    return (
      <ImageBackground
        style={styles.bgImage}
        source={require("../assets/pexels-ivan-samkov-bw.jpg")}
      >
        <View style={styles.container}>
          <View style={HeaderStyles.header}>
            <Text style={HeaderStyles.smallTitle}>TRAINING SESSION!</Text>
          </View>
          <View style={styles.bodyView}>
            <DisplayComponent
              displayTitle="COACHING LEVEL"
              displayName="Coaching-level"
              dataDisplay={this.state.coachLevel}
            />

            <DisplayComponent
              displayTitle="SESSION"
              displayName="Session"
              dataDisplay={
                this.state.currentSession == "countdown"
                  ? "COUNTDOWN"
                  : this.state.currentSession == "break"
                  ? "BREAK"
                  : "ROUND " +
                    this.state.currentRound +
                    " OF " +
                    this.state.rounds
              }
            />

            <DisplayComponent
              displayTitle="TIMER"
              displayName="Timer"
              dataDisplay={
                this.state.currentSession == "countdown"
                  ? countdown
                  : this.state.currentSession == "round"
                  ? roundTimeShown
                  : this.state.currentSession == "break"
                  ? breakTimeShown
                  : "PAUSED"
              }
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
                  this.state.sessionPaused == true
                    ? "RESTART WORKOUT"
                    : this.state.currentSession == "countdown" &&
                      this.state.countdownSecs == 30
                    ? "BEGIN 30 SECOND COUNTDOWN!\n(Get your gloves on!)"
                    : "PAUSE WORKOUT"
                }
                pressFunction={
                  this.state.sessionPaused == true ||
                  (this.state.sessionPaused == false &&
                    this.state.countdownSecs == 30)
                    ? this.pressBegin
                    : this.pauseTimer
                }
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
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

export default TrainingPage;
