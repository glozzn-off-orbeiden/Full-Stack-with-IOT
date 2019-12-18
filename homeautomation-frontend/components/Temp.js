import React, { Component } from "react";

import {
  ActivityIndicator,
  StyleSheet,
  View,
  Button,
  Text,
  ImageBackground,
  ScrollView,
  Dimensions
} from "react-native";

import PureChart from "react-native-pure-chart";
import { fetchTemperature } from "./api";
import { element } from "prop-types";
import EStyleSheet from "react-native-extended-stylesheet";

let entireScreenWidth = Dimensions.get('window').width;

EStyleSheet.build({$rem: entireScreenWidth / 360});

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
      // console.log("here", newData);
      temp = [];
      timeStamp = [];
      humidity = [];
      let len = newData.length - 1;
      for (let i = len; i >= 0; i--) {
        temp.push(newData[i].temp);
        humidity.push(newData[i].humidity);
        timeStamp.push(newData[i].timeStamp);
      }

      // console.log(temp);
      // console.log(humidity);
      // console.log(timeStamp);
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

      // console.log("ggggggg", tempData);
      // console.log("ggggggggg", humidityData);

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


    // console.log("fetchData", this.state);

    let sampleData = [
      {
        seriesName: "series1",
        data: [
          { x: "2018-01-01", y: 22 },
          { x: "2018-01-02", y: 20 },
          { x: "2018-01-03", y: 24 },
          { x: "2018-01-04", y: 18 },
          { x: "2018-01-05", y: 19 },
          { x: "2018-01-06", y: 18 },
          { x: "2018-01-07", y: 21 },
          { x: "2018-01-08", y: 24 },
          { x: "2018-01-09", y: 23 },
          { x: "2018-01-10", y: 22 },
          { x: "2018-01-12", y: 18 },
          { x: "2018-01-13", y: 22 },
          { x: "2018-01-14", y: 24 },
          { x: "2018-01-15", y: 18 },
          { x: "2018-01-16", y: 20 },
          { x: "2018-01-17", y: 19 },
          { x: "2018-01-18", y: 22 },
          { x: "2018-01-19", y: 23 },
          { x: "2018-01-20", y: 24 },
          { x: "2018-01-21", y: 20 },
          { x: "2018-01-22", y: 19 },
          { x: "2018-01-23", y: 18 },
          { x: "2018-01-24", y: 22 },
        ],
        color: "rgb(200,0,0)"
      },
      {
        seriesName: "series2",
        data: [
          { x: "2018-01-01", y: 70 },
          { x: "2018-01-02", y: 40 },
          { x: "2018-01-03", y: 67 },
          { x: "2018-01-04", y: 55 },
          { x: "2018-01-05", y: 50 },
          { x: "2018-01-06", y: 60 },
          { x: "2018-01-07", y: 50 },
          { x: "2018-01-08", y: 40 },
          { x: "2018-01-09", y: 56 },
          { x: "2018-01-10", y: 46 },
          { x: "2018-01-12", y: 52 },
          { x: "2018-01-13", y: 65 },
          { x: "2018-01-14", y: 48 },
          { x: "2018-01-15", y: 51 },
          { x: "2018-01-16", y: 49 },
          { x: "2018-01-17", y: 61 },
          { x: "2018-01-18", y: 43 },
          { x: "2018-01-19", y: 61 },
          { x: "2018-01-20", y: 71 },
          { x: "2018-01-21", y: 52 },
          { x: "2018-01-22", y: 47 },
          { x: "2018-01-23", y: 50 },
          { x: "2018-01-24", y: 49 },
        ],
        color: "rgb(0,122,255)"
      }
    ];
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
      <ImageBackground source={require("../assets/painting-1831696_1920.jpg")} style={styles.container}>
        <ScrollView style={styles.mainPart}>

          <View style={styles.topPart}>
            <View style={[styles.item, styles.tempNumbers]}>
              <View style={styles.borderBox}>
                <Text style={styles.tempText}>Indoor:</Text>
                <Text style={styles.tempNumbersText}>22&#8451;</Text>
              </View>
            </View>
            <View style={[styles.item, styles.tempNumbers]}>
              <View style={styles.borderBox}>
                <Text style={styles.tempText}>Outdoor:</Text>
                <Text style={styles.tempNumbersText}>5&#8451;</Text>
              </View>
            </View>
          </View>

          <View style={styles.chartWrapper}>
            <View style={styles.item}>
              <View style={styles.chartBox}>
                <PureChart
                  data={sampleData}
                  type={"line"}
                  showEvenNumberXaxisLabel={false}
                  height={EStyleSheet.value("150rem")}
                  width={"100%"}
                  xAxisColor={'black'}
                  yAxisColor={'black'}
                  yAxisGridLineColor={"rgba(0,0,0,0.2)"}
                  xAxisGridLineColor={"rgba(0,0,0,0.0)"}
                />
              </View>

              <View style={styles.chartInfo}>
                <Text style={styles.chartInfoTemp}>Temperature</Text>
                <Text style={styles.chartInfoHum}>Humidity</Text>
              </View>
            </View>
          </View>

        </ScrollView>
      </ImageBackground>
    );
    }

  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    width: "360rem",
    height: "100%",
  },
  mainPart: {
    paddingTop: "50rem",
    paddingLeft: "20rem",
    paddingRight: "20rem",
  },
  topPart: {
    height: "150rem",
    marginBottom: "40rem",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item: {
    backgroundColor: "rgba(0,0,0,0.6)",
    height: "100%",
    borderRadius: 10,
  },
  borderBox: {
    height: "100%",
    justifyContent: "center",
    borderColor: "rgba(255,255,255,0.5)",
    borderWidth: 1,
    borderRadius: 10,
  },
  tempNumbers: {
    width: "150rem",
    padding: "20rem",
  },
  tempText: {
    color: "rgb(255,255,255)",
    textAlign: "center",
  },
  tempNumbersText: {
    color: "rgb(255,255,255)",
    fontSize: "30rem",
    textAlign: "center",
  },
  chartWrapper: {
    maxHeight: "300rem"
  },
  chartBox: {
    padding: "20rem",
  },
  chartInfo: {
    backgroundColor: "rgb(255,255,255)",
    marginLeft: "110rem",
    marginTop: 0,
    height: "50rem",
    width: "100rem",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
  },
  chartInfoTemp: {
    color: "rgb(200,0,0)",
  },
  chartInfoHum: {
    color: "rgb(0,122,255)",
  },
});
