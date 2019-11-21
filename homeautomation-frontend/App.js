import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Dashboard from "./components/Dashboard";
//window.navigator.userAgent = "react-native";
//import io from "socket.io-client/dist/socket.io";
import io from "socket.io-client"; //new one

//const io = socket(server);//newly added

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(34, 74, 75, 0.8)",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "blue",
      data: []
    };
    this.socket = io("");
    this.socket.emit("message", "AshuWednesday");
    this.socket.on("messageToAll", data => {
      console.log("message to Naqvi", data);
    });
  }
  /* componentDidMount() {
    console.log(this.socket);
  } */
  //let socket = require('socket.io-client');//newly added
  givenFunction = data => {
    //console.log("test1", data);
    alert("test1", data.message); //alert msg on the phone
    this.socket.emit("test-1", "testing the emit command from frontend");
  };
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.givenFunction}>{this.state.name}</Text>
        <Dashboard />
      </View>
    );
  }
}

//AppRegistry.registerComponent("App", () => App);
