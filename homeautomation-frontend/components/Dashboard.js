import React, { Component } from "react";
 
import { 
    StyleSheet, 
    View, 
    Button, 
    Text,
    ImageBackground,
    ScrollView, 
    Dimensions 
  } from "react-native";
import MoonIcon from "react-native-vector-icons/Ionicons";
import FoundationIcon from "react-native-vector-icons/Foundation";
import DoorIcon from "react-native-vector-icons/FontAwesome5";
import KeyIcon from "react-native-vector-icons/FontAwesome5";
import WindowIcon from "react-native-vector-icons/AntDesign";
import Time from "./Time";
import {fetchStatus} from "./api";
import alertHandler from "./alerthandler";
import EStyleSheet from "react-native-extended-stylesheet";

let entireScreenWidth = Dimensions.get('window').width;

EStyleSheet.build({$rem: entireScreenWidth / 360});


const INITIAL_VALUE = 0;
export default class Dashboard extends Component {
  state = {
    Lights: "on",
    currentTemp: 34,
    Doors: "open",
    Windows: "open",
    MainDoor: "locked"
  };

  fetchData = async () => {
    try {
      const data = await fetchStatus();
      // console.log("promise?", data);

      this.setState({
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

  componentDidMount() {

    this.fetchData()

  }


 render() {
    //console.log("2. fgtftdftdtfdt", this.state.Windows);
    return (
      <ImageBackground source={require("../assets/raindrop.jpg")} style={styles.container}>

        <ScrollView style={styles.mainPart}>

          {/* <Card style={styles.topPart}>
            <View style={{ width: "50%" }}>
              <Time />
            </View>
            <View>
              <Text>Temperature</Text>
              <Text>{this.state.currentTemp} &#8451;</Text>
            </View>
          </Card> */}
          <View style={styles.topPart}>

            <View key="topPart" style={[styles.item, styles.flexTop]}>
               
                <View style={{ width: "50%" }}>
                  <Time />
                </View>
                <View style={styles.temp}>
                  <Text style={styles.tempText}>{this.state.currentTemp}&#8451;</Text>
                </View>
            </View>
                  
          </View>

          <View style={styles.statusBox}>

            <View style={[styles.item, styles.itemStatusBox]}>
              <View 
                style={[styles.icon, {backgroundColor: this.state.Doors === "open" ? "rgb(0,122,255)":"rgba(255,255,255,0.5)"}]}>
                <DoorIcon
                  style={{fontSize: 30}} 
                  onPress={() => console.log("Door")}
                  name={this.state.Doors == "open" ? "door-open" : "door-closed"}
                  color="rgb(255,255,255)"
                />
              </View>
            </View>


            <View style={[styles.item, styles.itemStatusBox]}>
              <View
                style={[styles.icon, {backgroundColor: this.state.Windows === "on" ? "rgb(0,122,255)":"rgba(255,255,255,0.5)"}]}>
                <WindowIcon
                  style={{fontSize: 40}} 
                  onPress={() => console.log("Window")}
                  name={this.state.Windows == "open" ? "windowso" : "windows"}
                  color="rgb(255,255,255)"
                />
              </View>
            </View>
          </View>
          <View style={styles.actionBox}>
            <View style={styles.actionSort}>

              <View style={[styles.item, styles.itemActionBox, styles.lightAction]}>
                <View
                    style={[styles.icon, {backgroundColor: this.state.Lights === "on" ? "rgba(91, 194, 54, 0.9)":"rgba(255,255,255,0.5)"}]}>

                    <FoundationIcon
                        style={{fontSize: 30}} 
                        onPress={() => console.log("lights")}
                        name="lightbulb"
                        color="rgb(255,255,255)"
                    />

                </View>
              </View>

              <View style={[styles.item, styles.itemActionBox]}>
                <View
                  style={[styles.icon, {backgroundColor: this.state.MainDoor === "unlocked" ? "rgb(0,122,255)":"rgba(255,255,255,0.5)"}]}>
                  <KeyIcon
                      style={{ fontSize: 25 }}
                      name="key"
                      color="rgb(255,255,255)"
                      onPress={() => {
                        alert("You tapped the button!");
                      }}
                    />
                </View>
              </View>

              <View style={[styles.item, styles.itemActionBox]}>
                <View
                  style={[styles.icon, {backgroundColor: this.state.Lights === "on" ? "rgb(0,122,255)":"rgba(255,255,255,0.5)"}]}>
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

          {/* <View style={styles.buffer}></View> */}

        </ScrollView>
      </ImageBackground>
    );
  }
}
/* AppRegistry.registerComponent("Dashboard", () => Dashboard); */
const styles = EStyleSheet.create({
  container: {
    flex: 1,
    width: "360rem",
    height: "100%",
    // backgroundColor: "rgba(0,0,0,0.2)",
    // borderRadius: 4,
    // borderWidth: 2,
    // borderColor: "red"
  },
  mainPart: {
    // backgroundColor: "rgba(0,0,0,0.2)",
    // borderRadius: 2,
    // borderWidth: 2,
    // height: "100%",
    paddingTop: "50rem",
    paddingLeft: "20rem",
    paddingRight: "20rem",
  },
  topPart: {
    height: "150rem",
    marginBottom: "40rem",
  },
  flexTop: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
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
    marginBottom: "40rem"

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
  // buffer: {
  //     height: "200rem"
  // }
});
