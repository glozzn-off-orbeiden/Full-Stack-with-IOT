import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import Dashboard from "./components/Dashboard";
import Lights from "./components/Lights";
import alertHandler from "./components/alerthandler"

export default function App() {
  useEffect(() => {
    alertHandler()
  }, [])

  return (
    <View style={styles.container}>

      <Dashboard />
      <Lights />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center"
  }
});
