import React, { Component } from "react";
import { AppRegistry, StyleSheet, Button } from "react-native";
import { View, Card, Text } from "react-native-ui-lib";
import Icon from "react-native-vector-icons/Ionicons";
type Props = {};
export default class Dashboard extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.topPart}>
          <View style={{ width: "50%" }}>
            <Text>Time</Text>
          </View>
          <View>
            <Text>Temperature</Text>
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
            <Card style={{ width: "90%", height: "90%" }}>
              <Text>Lights</Text>
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
              alignItems: "center",
              textAlign: "center"
            }}
          >
            <Icon.Button
              name="ios-moon"
              backgroundColor="black"
              marginLeft="1%"
              onPress={() => {
                alert("You tapped the button!");
                console.log("test");
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
    height: "25%",
    borderRadius: 2,
    borderWidth: 2,
    borderColor: "green"
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
  }
});