 
import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import Dashboard from "./components/Dashboard";
import Lights from "./components/Lights";
import alertHandler from "./components/alerthandler"
 
import { 
    StyleSheet, 
    ImageBackground,
      } from "react-native";
 
import Slider from "./components/Slider";

export default function App() {
  useEffect(() => {
    alertHandler()
  }, [])

  return (
      <Slider />
  );
}

// const styles = EStyleSheet.create({
//   container: {
//     flex: 1,
//     width: "100%",
//     height: "100%",
//   }
// });
