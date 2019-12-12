import React, { Component } from "react";
import { View, Text } from "react-native";
import PureChart from "react-native-pure-chart";
import { fetchTemperature } from "./api";
import { element } from "prop-types";

export default class Temp extends Component {
  state = {
    Temp: "0"
  };
  fetchData = async () => {
    try {
      const data = await fetchTemperature();
      console.log(
        "from here",
        data[0].indoor.map(element => element[0].temp)
      );

      this.setState({
        Temp: data.Object.temp
      });
    } catch (err) {
      () => {
        console.log(err);
      };
    }
  };

  componentDidMount() {
    this.fetchData();
  }
  render() {
    // console.log(this.state, "fetchData");
    let sampleData = [
      {
        seriesName: "series1",
        data: [
          { x: "2018-01-01", y: 30 },
          { x: "2018-01-02", y: 20 },
          { x: "2018-01-03", y: 17 },
          { x: "2018-01-04", y: 25 },
          { x: "2018-01-05", y: 10 }
        ],
        color: "#297AB1"
      },
      {
        seriesName: "series2",
        data: [
          { x: "2018-01-01", y: 20 },
          { x: "2018-01-02", y: 30 },
          { x: "2018-01-03", y: 17 },
          { x: "2018-01-04", y: 55 },
          { x: "2018-01-05", y: 10 }
        ],
        color: "red"
      }
    ];
    return (
      <View>
        <View>
          <View>
            <Text>Indoor: 15 &#8451;</Text>
          </View>
          <View>
            <Text>Outdoor: 30 &#8451; </Text>
          </View>
        </View>
        <View>
          <Text>hello chart</Text>
          <PureChart data={sampleData} background={"yellow"} type="line" />
        </View>
      </View>
    );
  }
}
