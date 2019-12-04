import React, { Component } from "react";
import { 
    AppRegistry, 
    StyleSheet, 
    View, 
    Button, 
    Text,
    ImageBackground,
    ScrollView
        } from "react-native";
// import { Card, Switch } from "react-native-ui-lib";
import Icon from "react-native-vector-icons/Ionicons";
import FoundationIcon from "react-native-vector-icons/Foundation";
import { Card } from "react-native-elements";
import SortableGrid from "react-native-sortable-grid";
import fetchStatus from "./api";

const INITIAL_VALUE = 0;
export default class Lights extends Component {
    state = {
        lights: [
            {
                light_name: "numberOne",
                status: "on",
                id: 12641
            },
            {
                light_name: "numberTwo",
                status: "off",
                id: 12362
            },
            {
                light_name: "numberThree",
                status: "disconnect",
                id: 16433
            },
            {
                light_name: "numberFour",
                status: "disconnect",
                id: 8634
            },{
                light_name: "numberFive",
                status: "on",
                id: 835675
            },
            {
                light_name: "numberSix",
                status: "on",
                id: 6368900
            },
            {
                light_name: "numberSeven",
                status: "disconnect",
                id: 846537
            },{
                light_name: "numberEight",
                status: "off",
                id: 36898
            },
            {
                light_name: "numberNine",
                status: "off",
                id: 62792
            },
            {
                light_name: "numberTen",
                status: "disconnect",
                id: 24573
            }
        ]
    };


  /* componentDidMount() {
    this.socket.on("alert", function(data) {
      Alert.alert("Alert Title", "My Alert Msg");
    });
  } */
//   async componentDidMount() {
//     const data = await fetchStatus();
//     console.log("promise?", data);

//     this.setState({
//       Lights: data.Lights,
//       currentTemp: data.currentTemp,
//       Doors: data.Doors,
//       Windows: data.Windows
//     });
//   }

//   onSliderValueChange = value => {
//     this.setState({ sliderValue: value });
//   };

    render() {
        console.log("lights rendering");
        return (
            <ImageBackground source={require("../assets/raindrop.jpg")} style={styles.container}>
                <ScrollView style={styles.mainPart}>
                    
                    <SortableGrid
                        blockTransitionDuration      = { 400 }
                        activeBlockCenteringDuration = { 200 }
                        dragActivationTreshold       = { 150 }
                        itemsPerRow                  = { 2 }
                        onDragRelease                = { (itemOrder) => console.log("Drag was released, the blocks are in the following order: ", itemOrder) }
                        onDragStart                  = { ()          => console.log("Some block is being dragged now!") } >

                        {
                            this.state.lights.filter(light => (light.status === "off") || (light.status === "on")).map( (letter, index) =>

                                <View key={index} style={styles.item}>
                                    <View
                                        style={[styles.lightBulb, {backgroundColor: letter.status === "on" ? "rgb(0,122,255)":"rgba(255,255,255,0.5)"}]}>

                                        <FoundationIcon
                                            style={{fontSize: 40}} 
                                            onPress={() => console.log("hello")}
                                            name="lightbulb"
                                            color="rgb(255,255,255)"
                                        />
                                    </View>
                                    <Text style={[styles.lightText, ]}>{letter.light_name}</Text>
                                </View>
                            )
                        }
                    </SortableGrid>
                                       
                    <SortableGrid
                        blockTransitionDuration      = { 400 }
                        activeBlockCenteringDuration = { 200 }
                        dragActivationTreshold       = { 150 }
                        itemsPerRow                  = { 2 }
                        onDragRelease                = { (itemOrder) => console.log("Drag was released, the blocks are in the following order: ", itemOrder) }
                        onDragStart                  = { ()          => console.log("Some block is being dragged now!") } >

                        {
                            this.state.lights.filter(light => light.status === "disconnect").map( (letter, index) =>

                                <View key={index} style={styles.item} onTap={() => console.log("Item number:", index, "was tapped!") }>
                                    <View style={styles.lightBulb}>
                                        <FoundationIcon
                                            style={{ fontSize: 40 }}
                                            name="lightbulb"
                                            color={"rgb(0,0,0)"}
                                            onPress={() => console.log("hello")}
                                        />
                                    </View>
                                    <Text style={ styles.lightText }>{letter.light_name}</Text>
                                </View>
                            )
                        }
                    </SortableGrid>

                    <Button
                        style={styles.plusButton}
                        onPress={() => console.log("trying to add a light")}
                        title="Add Light"
                        color="rgb(0,0,0)"
                    />

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
        margin: 2,
        backgroundColor: "rgba(0,0,0,0.2)",
        borderRadius: 2,
        borderWidth: 2,
        // borderColor: "black",
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    item: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.6)",
        height: "90%",
        borderRadius: 10,
        margin: 10,
        marginBottom: 20
    },
    lightBulb: {
        height: "50%",
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5,
        borderRadius: 50,
    },
    lightText: {
        color: "rgb(255,255,255)", 
        textAlign: "center",
        position: "absolute",
        bottom: 10
    },
    plusButton: {
        // backgroundColor: "rgb(0,122,255)",
        height: 20,
        width: 150,
        marginTop: 20
    },
    buffer: {
        height: 50
    }

});
