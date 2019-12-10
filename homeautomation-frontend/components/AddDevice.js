import React, { useState } from 'react'
import { Text, ScrollView, View, ImageBackground, Dimensions, TextInput, Picker } from 'react-native';
import { Button } from 'react-native-elements';
import EStyleSheet from "react-native-extended-stylesheet";
import {createLight} from './api'

let entireScreenWidth = Dimensions.get('window').width;

EStyleSheet.build({ $rem: entireScreenWidth / 360 });


export default function Temp() {


    const [Device, setDevice] = useState("Select Device")
    const [value, onChangeText] = useState("")
    const [value2, onChangeText2] = useState("")
    const submitHandler= () => {
        let newDevice = {Token: `${Device}/${value}/${value2}`,
    Name:`${value}/${value2}`}

        switch (Device) {
            case "Light": createLight(newDevice);
                        console.log(newDevice);
                        
    
                break;
            case "Temp": /* createTemp(newDevice) */
    
                break;
            case "Door": /* createDoor(newDevice) */
    
                break;
            case "Doorbell": /* createDoorbell(newDevice) */ console.log(newDevice );
            
    
                break;
            case "Window": /* createWindow(newDevice) */ 
    
                break;
    
            default: setDevice("Select a Device!");
            
                break;
        }
    
     } 

    return (
        <ImageBackground source={require("../assets/raindrop.jpg")} style={styles.container}>
            <ScrollView style={styles.mainPart}>
                <View style={{ marginTop: 22 }}>
                    <View>

                        <View style={styles.topPart}>
                            <Picker
                                selectedValue={Device}
                                onValueChange={(itemValue, itemIndex) =>
                                    setDevice(itemValue)
                                }>
                                <Picker.Item label="Light" value="Light" />
                                <Picker.Item label="Door Sensor" value="Door" />
                                <Picker.Item label="Doorbell" value="Doorbell" />
                                <Picker.Item label="Window Sensor" value="Window" />
                                <Picker.Item label="Temperature Sensor" value="Temp" />
                            </Picker>
                        </View>
                        <View>

                            <TextInput
                                placeholder="Room"
                                style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: "lightgray" }}
                                value={value}
                                onChangeText={text => onChangeText(text)}
                            />

                        </View>
                        <View >

                            <TextInput
                            placeholder="Function"
                                style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: "lightgray" }}
                                value={value2}
                                onChangeText={text => onChangeText2(text)}
                            />

                        </View>
                        <Button
                            style={styles.plusButton}
                            title="Submit"
                            color="rgb(0,0,0)"
                            onPress={() => {
                                submitHandler(Device)
                            }} />
                        <Button
                            style={styles.plusButton}
                            title="Reset"
                            color="rgb(0,0,0)"
                            onPress={() => {
                                setDevice(null);
                                onChangeText(null)
                            }} />
                    </View>
                </View>


            </ScrollView>
        </ImageBackground>
    )
}

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