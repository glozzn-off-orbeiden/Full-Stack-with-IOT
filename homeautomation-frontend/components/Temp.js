import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import PureChart from "react-native-pure-chart";
import { fetchTemperature } from "./api";
import { element } from "prop-types";

export default class Temp extends Component {
  state = {
    isLoading: true,
    newTempData: null,
    humidityData2: null
  };

  fetchData = async () => {
    try {
      const data = await fetchTemperature();
      let newData = data[0].indoor;
      console.log("here", newData);
      temp = [];
      timeStamp = [];
      humidity = [];
      let len = newData.length - 1;
      for (let i = len; i >= 0; i--) {
        temp.push(newData[i].temp);
        humidity.push(newData[i].humidity);
        timeStamp.push(newData[i].timeStamp);
      }

      console.log(temp);
      console.log(humidity);
      console.log(timeStamp);
      let tempData = [];
      let tempDataLen = 0;
      if (timeStamp.length >= 5) {
        tempDataLen = 5;
      } else tempDataLen = timeStamp.length - 1;

      for (let i = tempDataLen; i >= 0; i--) {
        let obj = {};
        obj["x"] = timeStamp[i].slice(11, 19);
        obj["y"] = Number(temp[i]);
        tempData.push(obj);
      }

      let humidityData = [];
      for (let i = tempDataLen; i >= 0; i--) {
        let obj = {};
        obj["x"] = timeStamp[i].slice(11, 19);
        obj["y"] = Number(humidity[i]);
        humidityData.push(obj);
      }

      console.log("ggggggg", tempData);
      console.log("ggggggggg", humidityData);

      this.setState({
        isLoading: false,
        humidityData2: humidityData,
        newTempData: tempData
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
    console.log("fetchData", this.state);
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    } else {
      let sampleData = [
        {
          seriesName: "series1",
          data: this.state.newTempData,
          color: "#297AB1"
        },
        {
          seriesName: "series2",
          data: this.state.humidityData2,
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
            <PureChart
              data={sampleData}
              backgroundColor={"yellow"}
              height={200}
              borderColor={"red"}
              marginTop={150}
              type="line"
            />
          </View>
          <Text>{this.state.name}</Text>
        </View>
      );
    }
  }
}
