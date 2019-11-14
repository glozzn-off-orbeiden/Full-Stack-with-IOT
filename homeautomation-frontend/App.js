import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Dashboard from "./components/Dashboard";
window.navigator.userAgent = "react-native";
import io from "socket.io-client/dist/socket.io";

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
  constructor(props) {
    super(props);
    this.socket = io("localhost:4000", { jsonp: false });
    this.socket.on("update_content", () =>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

//AppRegistry.registerComponent("App", () => App);
