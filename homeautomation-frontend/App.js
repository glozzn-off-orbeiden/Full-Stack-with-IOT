import React, { useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground, AppRegistry, Dimensions } from "react-native";
import Dashboard from "./components/Dashboard";
import Lights from "./components/Lights";
import alertHandler from "./components/alerthandler";
import Slider from "./components/Slider";
import EStyleSheet from "react-native-extended-stylesheet";

export default function App() {
const entireScreen = Dimensions.get('window');
// console.log(entireScreen);
EStyleSheet.build({ $rem: entireScreen.width / 360 });
  useEffect(() => {
    alertHandler();
  }, []);

  return <Slider props={entireScreen} styles={styles.container}/>;
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    width: 100,
    height:"360rem",
    borderColor:"red",
    borderStyle:"solid",
    borderWidth:0.5,
  }
});
AppRegistry.registerComponent("PocketHome", () => App);