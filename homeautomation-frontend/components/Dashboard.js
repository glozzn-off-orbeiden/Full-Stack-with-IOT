import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  ImageBackground,
  ScrollView,
  Dimensions,
  Alert
} from "react-native";

import MoonIcon from "react-native-vector-icons/Ionicons";
import FoundationIcon from "react-native-vector-icons/Foundation";
import DoorIcon from "react-native-vector-icons/FontAwesome5";
import KeyIcon from "react-native-vector-icons/FontAwesome5";
import WindowIcon from "react-native-vector-icons/AntDesign";
import Time from "./Time";
import { fetchStatus } from "./api";
import alertHandler from "./alerthandler";
import EStyleSheet from "react-native-extended-stylesheet";

// let entireScreenWidth = Dimensions.get('window').width;




const INITIAL_VALUE = 0;
export default function Dashboard(props) {
  EStyleSheet.build({ $rem: props.props / 360 });


  const [state, setState] = useState({
    Lights: "",
    currentTemp: "~",
    Doors: "",
    Windows: "",
    MainDoor: ""
  });

  fetchData = async () => {
    try {
      const data = await fetchStatus();

      setState({
        Lights: data.Lights,
        currentTemp: data.currentTemp,
        Doors: data.Doors,
        Windows: data.Windows
      });
    } catch (err) {
      () => {
        console.log(err)
      }
    }
  }

  useEffect(() => {
    fetchData()

  }, [])

  return (
    <ImageBackground source={require("../assets/painting-light-blue.jpg")} style={styles.container}>

      <ScrollView style={styles.mainPart}>

        <View style={styles.topPart}>

          <View key="topPart" style={styles.item}>
            <View style={styles.flexTop}>
              <View style={{ width: "50%" }}>
                <Time />
              </View>
              <View style={styles.temp}>
                <Text style={styles.tempText}>{state.currentTemp}&#8451;</Text>
              </View>
            </View>
          </View>

        </View>

        <View style={styles.statusBox}>

          <View style={[styles.item, styles.itemStatusBox]}>
            <View
              style={[styles.icon, { backgroundColor: state.Doors === "open" ? "rgb(0,122,255)" : "rgba(255,255,255,0.5)" }]}>
              <DoorIcon
                style={{ fontSize: 30 }}
                onPress={() => console.log("Door")}
                name={state.Doors == "open" ? "door-open" : "door-closed"}
                color="rgb(255,255,255)"
              />
            </View>
          </View>


          <View style={[styles.item, styles.itemStatusBox]}>
            <View
              style={[styles.icon, { backgroundColor: state.Windows === "on" ? "rgb(0,122,255)" : "rgba(255,255,255,0.5)" }]}>
              <WindowIcon
                style={{ fontSize: 40 }}
                onPress={() => console.log("Window")}
                name={state.Windows == "open" ? "windowso" : "windows"}
                color="rgb(255,255,255)"
              />
            </View>
          </View>
        </View>
        <View style={styles.actionBox}>
          <View style={styles.actionSort}>

            <View style={[styles.item, styles.itemActionBox, styles.lightAction]}>
              <View
                style={[styles.icon, { backgroundColor: state.Lights === "on" ? "rgba(91, 194, 54, 0.9)" : "rgba(255,255,255,0.5)" }]}>

                <FoundationIcon
                  style={{ fontSize: 30 }}
                  onPress={() => console.log("lights")}
                  name="lightbulb"
                  color="rgb(255,255,255)"
                />

              </View>
            </View>

            <View style={[styles.item, styles.itemActionBox]}>
              <View
                style={[styles.icon, { backgroundColor: state.MainDoor === "unlocked" ? "rgb(0,122,255)" : "rgba(255,255,255,0.5)" }]}>
                <KeyIcon
                  style={{ fontSize: 25 }}
                  name="key"
                  color="rgb(255,255,255)"
                  onPress={() => {
                    Alert.alert(
                      "Door",
                      "Open?",
                      [
                        { text: 'Ok', onPress: () => console.log('Ok') },
                        {
                          text: 'Cancel', onPress: () => console.log('Cancel Pressed'),
                          style: 'cancel',
                        },
                      ],
                      { cancelable: false });
                  }}
                />
              </View>
            </View>

            <View style={[styles.item, styles.itemActionBox]}>
              <View
                style={[styles.icon, { backgroundColor: state.Lights === "on" ? "rgb(0,122,255)" : "rgba(255,255,255,0.5)" }]}>
                <MoonIcon
                  style={{ fontSize: 35 }}
                  name="ios-moon"
                  color="rgb(255,255,255)"
                  onPress={() => {
                    alert("You tapped the button!");
                  }}
                />
              </View>
            </View>

          </View>


          <View style={styles.actionSort}>
          </View>

        </View>

        <View style={styles.buffer}></View>

      </ScrollView>
    </ImageBackground>
  );
}

/* AppRegistry.registerComponent("Dashboard", () => Dashboard); */
const styles = EStyleSheet.create({
  container: {
    flex: 1,
    width: "360rem",
    height: "100%",
  },
  mainPart: {
    paddingTop: "30rem",
    paddingLeft: "20rem",
    paddingRight: "20rem",
    height: "100%",
  },
  topPart: {
    height: "150rem",
    marginBottom: "20rem",
  },
  flexTop: {
    height: "110rem",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "20rem",
    borderColor: "rgba(255,255,255,0.5)",
    borderWidth: 1,
    borderRadius: 10,
  },
  item: {
    backgroundColor: "rgba(0,0,0,0.6)",
    height: "100%",
    borderRadius: 10,
  },
  temp: {
    width: "90rem",
  },
  tempText: {
    fontSize: "30rem",
    color: "rgb(255,255,255)"
  },
  statusBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "150rem",
    marginBottom: "20rem"

  },
  itemStatusBox: {
    justifyContent: "center",
    alignItems: "center",
    height: "150rem",
    width: "150rem"
  },
  icon: {
    height: "70%",
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  actionBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "150rem",
    marginBottom: "30rem"
  },
  actionSort: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 0,
    height: "150rem",
    width: "150rem",
  },
  lightAction: {
    width: "150rem",
    marginBottom: "10rem",
  },
  itemActionBox: {
    justifyContent: "center",
    alignItems: "center",
    height: "70rem",
    width: "70rem"
  },
  buffer: {
    height: 50,
  }
});
