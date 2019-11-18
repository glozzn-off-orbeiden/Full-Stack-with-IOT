import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Dashboard from "./components/Dashboard";
window.navigator.userAgent = "react-native";
import io from "socket.io-client/dist/socket.io";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
export default class App extends React.Component {
  /* constructor(props) {
    super(props);
    this.state = {
      color: "color before update: blue"
    };
  } */
  state = {
    name: "blue"
  };
  constructor() {
    super();
    this.socket = io("localhost:4000", { jsonp: false });
    this.socket.on("x-computer is connected", () =>
      this.setState({
        name: "green"
      })
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.name}</Text>
        <Dashboard />
      </View>
    );
  }
}

//AppRegistry.registerComponent("App", () => App);
