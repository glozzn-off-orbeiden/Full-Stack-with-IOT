import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";
import keepAwake from "react-native-keep-awake";

const styles = StyleSheet.create({
  time: {
    justifyContent: "space-around"
  },
  timeText: {
    fontSize: 30,
    color: "rgb(255,255,255)"
  },
  dateText: {
    color: "rgb(255,255,255)"
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
      <View style={styles.time}>
        <Text style={styles.timeText}>{this.state.time}</Text>
        <Text style={styles.dateText}>{this.state.date}</Text>
      </View>
    );
  }
}
