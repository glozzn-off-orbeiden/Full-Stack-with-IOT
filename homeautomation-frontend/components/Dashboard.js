import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { View, Card, Text } from "react-native-ui-lib";
export default class Dashboard extends Component {
  render() {
    return (
      <View>
        <View>
          <Card>
            <View>
              <Text>Time</Text>
            </View>
            <View>
              <Text>Temperature</Text>
            </View>
          </Card>
        </View>
        <View>
          <View>
            <Card>
              <Text>Windows</Text>
            </Card>
          </View>
          <View>
            <Card>
              <Text>Doors</Text>
            </Card>
          </View>
          <View>
            <Card>
              <Text>Lights</Text>
            </Card>
          </View>
        </View>
        <View>
          <View>
            <Text>Door on/off</Text>
          </View>
          <View>
            <Text>Do Not Disturb</Text>
          </View>
        </View>
      </View>
    );
  }
}
AppRegistry.registerComponent("Dashboard", () => Dashboard);
