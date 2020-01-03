import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import moment from "moment";
import keepAwake from "react-native-keep-awake";
import EStyleSheet from "react-native-extended-stylesheet";

let entireScreenWidth = Dimensions.get('window').width;

EStyleSheet.build({ $rem: entireScreenWidth / 360 });

export default class Time extends Component {
  state = {
    time: moment().format("HH:mm:ss"),
    date: moment().format("LL")
  };
  setDate = () => {
    this.setState({
      time: moment().format("HH:mm:ss"),
      date: moment().format("LL")
    });
  }


  componentDidMount() {
    this.timerID = setInterval(
      () =>
        this.setDate(), 1000
    )
  }
  componentWillUnmount() {
clearInterval(this.timerID)
  }

  render() {

    return (
      <View style={styles.time}>
        <Text style={styles.timeText}>{this.state.time}</Text>
        <Text style={styles.dateText}>{this.state.date}</Text>
      </View>
    );
  }
}


const styles = EStyleSheet.create({
  time: {
    justifyContent: "space-around"
  },
  timeText: {
    fontSize: "25rem",
    color: "rgb(255,255,255)"
  },
  dateText: {
    color: "rgb(255,255,255)"
  }
});