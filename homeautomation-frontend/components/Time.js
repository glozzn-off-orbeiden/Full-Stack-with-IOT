import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";
import keepAwake from "react-native-keep-awake";

const styles = StyleSheet.create({
  timeText: {
    fontSize: 35,
    margin: 5,
    marginTop: 30
  },
  dateText: {
    marginTop: 10,
    marginLeft: 10
  }
});

export default class Time extends Component {
  state = {
    time: moment().format("HH:mm:ss"),
    date: moment().format("LL")
  };
  render() {
    setTimeout(() => {
      this.setState({
        time: moment().format("HH:mm:ss"),
        date: moment().format("LL")
      });
    }, 1000);
    return (
      <View>
        <Text style={styles.timeText}>{this.state.time}</Text>
        <Text style={styles.dateText}>{this.state.date}</Text>
      </View>
    );
  }
}
