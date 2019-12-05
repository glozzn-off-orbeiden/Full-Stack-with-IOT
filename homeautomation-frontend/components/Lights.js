import React, { Component } from "react";
import { 
    AppRegistry, 
    StyleSheet, 
    View, 
    Button, 
    Text,
    ImageBackground,
    ScrollView, 
    Dimensions 
        } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import FoundationIcon from "react-native-vector-icons/Foundation";
import SortableGrid from "react-native-sortable-grid";
import {fetchLights} from "./api";
import alertHandler from './alerthandler';

let entireScreenWidth = Dimensions.get('window').width;

EStyleSheet.build({$rem: entireScreenWidth / 360});


const INITIAL_VALUE = 0;
export default class Lights extends Component {
    state = {
        lights: [
           {
               Name:"Empty",
               Status:"on"
           },
           {
            Name:"Empty",
            Status:"disconnect"
        },
        ]
    };
    fetchData = async () => {
        try {
          const data = await fetchLights();
          console.log("promise?", data);
    
          this.setState({
            lights: data.Lights
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
                            this.state.lights.filter(light => (light.Status === "off") || (light.Status === "on")).map( (letter, index) =>

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
                                    <Text style={[styles.lightText, ]}>{letter.Name}</Text>
                                </View>
                            )
                        }
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
                            this.state.lights&&this.state.lights.filter(light => light.Status === "disconnect").map( (letter, index) =>

                                <View key={index} style={styles.item} onTap={() => console.log("Item number:", index, "was tapped!") }>
                                    <View style={styles.lightBulb}>
                                        <FoundationIcon
                                            style={{ fontSize: 40 }}
                                            name="lightbulb"
                                            color={"rgb(0,0,0)"}
                                            onPress={() => console.log("hello")}
                                        />
                                    </View>
                                    <Text style={ styles.lightText }>{letter.Name}</Text>
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
const styles = EStyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        // backgroundColor: "rgba(0,0,0,0.2)",
        // borderRadius: 4,
        // borderWidth: 2,
        // borderColor: "red"
    },
    mainPart: {
        // margin: 2,
        // backgroundColor: "rgba(0,0,0,0.2)",
        // borderRadius: 2,
        // borderWidth: 2,
        // borderColor: "black",
        paddingTop: "40rem",
        paddingLeft: "20rem",
        paddingRight: "20rem",
    },
    item: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.6)",
        height: "90%",
        borderRadius: 10,
        margin: "10rem",
        marginBottom: "20rem",
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
