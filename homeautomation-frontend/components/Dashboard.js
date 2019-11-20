import React, { Component } from "react";
import { AppRegistry, StyleSheet, Button } from "react-native";
import { View, Card, Text, Slider } from "react-native-ui-lib";
import Icon from "react-native-vector-icons/Ionicons";
import FoundationIcon from "react-native-vector-icons/Foundation";
import DoorIcon from "react-native-vector-icons/FontAwesome5";
import WindowIcon from "react-native-vector-icons/AntDesign";
import Time from "./Time";
import { fetchStatus } from "./api";

const INITIAL_VALUE = 0;
export default class Dashboard extends Component {
  state = {
    Light: "",
    CurrentTemp: "",
    Door: "",
    Window: "",
    sliderValue: INITIAL_VALUE
  };
  componentDidMount() {
    const data = fetchStatus();
    this.setState({
      ...data
    });
  }

  onSliderValueChange = value => {
    this.setState({ sliderValue: value });
  };

  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.topPart}>
          <View style={{ width: "50%" }}>
            <Time />
          </View>
          <View>
            <Text>Temperature</Text>
            <Text>{this.state.CurrentTemp}</Text>
          </View>
        </Card>
        <View style={styles.mainPart}>
          <View style={{ width: "50%", height: "50%" }}>
            <Card style={styles.window}>
              <WindowIcon
                style={{ fontSize: 40 }}
                name={this.state.Window == "open" ? "windowso" : "windows"}
              />
            </Card>
          </View>
          <View style={{ width: "50%", height: "50%" }}>
            <Card style={styles.door}>
              <DoorIcon
                style={{ fontSize: 40 }}
                name={this.state.Door == "open" ? "door-open" : "door-closed"}
              />
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
          <View style={styles.moon}>
            <Card
              style={{
                width: 70,
                height: 70,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Icon
                style={{ fontSize: 35 }}
                name="ios-moon"
                backgroundColor="black"
                onPress={() => {
                  alert("You tapped the button!");
                }}
              />
            </Card>
          </View>
        </View>
        {/* <Slider
          style={{ width: 10 }}
          onValueChange={this.onSliderValueChange}
          value={INITIAL_VALUE}
          minimumValue={0}
          maximumValue={100}
          step={1}
          containerStyle={styles.sliderContainer}
        />*/}
      </View>
    );
  }
}
AppRegistry.registerComponent("Dashboard", () => Dashboard);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    height: "90%",
    backgroundColor: "#eee",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "red"
  },
  topPart: {
    flexDirection: "row",
    marginTop: 50,
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
  },
  door: {
    width: "90%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center"
  },
  window: {
    width: "90%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center"
  }
  /* moon: {
    width: "70%",
    justifyContent: "center",
    alignItems: "center"
  } */
});
