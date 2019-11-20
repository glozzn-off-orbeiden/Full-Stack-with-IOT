import React, { Component } from "react";
import { AppRegistry, StyleSheet, Button } from "react-native";
import { View, Card, Text } from "react-native-ui-lib";
import Icon from "react-native-vector-icons/Ionicons";
import FoundationIcon from "react-native-vector-icons/Foundation";
import Time from "./Time";
import { fetchStatus } from "./api";

export default class Dashboard extends Component {
  state = {
    Light: "",
    currentTemp: "",
    Door: "",
    Window: ""
  };
  componentDidMount() {
    const data = fetchStatus();
    this.setState({
      ...data
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.topPart}>
          <View style={{ width: "50%" }}>
            <Time />
          </View>
          <View>
            <Text>Temperature</Text>
            <Text>{this.state.currentTemp}</Text>
          </View>
        </Card>
        <View style={styles.mainPart}>
          <View style={{ width: "50%", height: "50%" }}>
            <Card style={{ width: "90%", height: "90%" }}>
              <Text>Windows</Text>
            </Card>
          </View>
          <View style={{ width: "50%", height: "50%" }}>
            <Card style={{ width: "90%", height: "90%" }}>
              <Text>Doors</Text>
            </Card>
          </View>
          <View style={{ width: "50%", height: "100%" }}>
            <Card style={styles.light}>
              <FoundationIcon
                style={{ fontSize: 50 }}
                name="lightbulb"
                color={this.state.Light == "on" ? "#1DA664" : "#DE5347"}
                onPress={() => console.log("hello")}
              />
            </Card>
          </View>
        </View>
        <View style={styles.downPart}>
          <View style={{ width: "50%" }}>
            <Card style={{ width: "90%", height: "90%" }}>
              <Text>Door on/off</Text>
            </Card>
          </View>
          <View
            style={{
              width: "50%",
              alignItems: "center"
            }}
          >
            <Icon.Button
              name="ios-moon"
              backgroundColor="black"
              onPress={() => {
                alert("You tapped the button!");
              }}
            ></Icon.Button>
          </View>
        </View>
      </View>
    );
  }
}
AppRegistry.registerComponent("Dashboard", () => Dashboard);
const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "90%",
    backgroundColor: "#eee",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "red"
  },
  topPart: {
    flexDirection: "row",
    margin: "2%",
    height: "20%"
  },
  mainPart: {
    margin: "2%",
    padding: "2%",
    height: "25%",
    borderRadius: 2,
    borderWidth: 2,
    borderColor: "black",
    flexWrap: "wrap"
  },
  downPart: {
    flexDirection: "row",
    margin: "2%",
    padding: "2%",
    height: "25%",
    borderRadius: 2,
    borderWidth: 2,
    borderColor: "black"
  },
  light: {
    width: "90%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center"
  }
});
