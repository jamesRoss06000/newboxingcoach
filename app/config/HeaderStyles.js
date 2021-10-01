import { StyleSheet } from "react-native";
import Colors from "./Colors";

const HeaderStyles = StyleSheet.create({
  header: {
    width: "100%",
    position: "absolute",
    top: 0,
    backgroundColor: Colors.fadedBlack,
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 30,
    color: "white",
    paddingVertical: 10,
  },
  smallTitle: {
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    color: Colors.black,
    backgroundColor: Colors.fadedWhite,
    paddingVertical: 5,
    fontWeight: "bold",
  },
});

export default HeaderStyles;
