import React from "react";
import { 
    StyleSheet, 
    ImageBackground,
      } from "react-native";
// import Dashboard from "./components/Dashboard";
// import Lights from "./components/Lights";
import Slider from "./components/Slider"

export default function App() {
  return (
      <Slider />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  }
});
