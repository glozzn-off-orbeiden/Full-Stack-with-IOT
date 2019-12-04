import React, { Component } from "react";
 
import { 
    Alert,
    AppRegistry, 
    StyleSheet, 
    View, 
    Button, 
    Text,
    ImageBackground,
    ScrollView
  } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import FoundationIcon from "react-native-vector-icons/Foundation";
import DoorIcon from "react-native-vector-icons/FontAwesome5";
import KeyIcon from "react-native-vector-icons/FontAwesome5";
import WindowIcon from "react-native-vector-icons/AntDesign";
import SortableGrid from "react-native-sortable-grid";
import { Card } from "react-native-elements";
import Time from "./Time";
import fetchStatus from "./api";
import alertHandler from "./alerthandler";

const INITIAL_VALUE = 0;
export default class Dashboard extends Component {
  state = {
    Lights: "on",
    currentTemp: 34,
    Doors: "open",
    Windows: "closed",
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
    alertHandler()
  }


  onSliderValueChange = value => {
    this.setState({ sliderValue: value });
  };

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

              <View style={[styles.item, styles.itemActionBox, {width: 140}]}>
                <View
                    style={[styles.icon, {backgroundColor: this.state.Lights === "on" ? "rgb(0,122,255)":"rgba(255,255,255,0.5)"}]}>

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
                  <Icon
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
}
/* AppRegistry.registerComponent("Dashboard", () => Dashboard); */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 4,
    borderWidth: 2,
    // borderColor: "red"
  },
  mainPart: {
      backgroundColor: "rgba(0,0,0,0.2)",
      borderRadius: 2,
      borderWidth: 2,
      // height: "100%",
      paddingTop: 20,
      paddingLeft: 10,
      paddingRight: 10,
      borderColor: "black",
  },
  topPart: {
    height: "40%",
    marginBottom: 20,
    borderColor: "red",
  },
  flexTop: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
  },
  item: {
    backgroundColor: "rgba(0,0,0,0.6)",
    height: "90%",
    borderRadius: 10,
    marginBottom: 20
  },
  temp: {
    width: "25%",
  },
  tempText: {
    fontSize: 30,
    color: "rgb(255,255,255)"
  },
  statusBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "40%",
    marginBottom: 10

  },
  itemStatusBox: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    height: 140,
    width: 140
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
    height: "40%",
    marginBottom: 20
  },
  actionSort: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: 10,
    marginTop: 0,
    height: 140,
    width: 140,
  },
  itemActionBox: {
    justifyContent: "center",
    alignItems: "center",
    height: 65,
    width: 65
  },
  // buffer: {
  //     height: 500
  // }
});
