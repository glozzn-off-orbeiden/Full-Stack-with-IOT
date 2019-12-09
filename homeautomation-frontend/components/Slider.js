import React, { Component } from "react";
import { 
    Alert,
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
import Swiper from "react-native-swiper";
import Dashboard from "./Dashboard";
import Lights from "./Lights";

let entireScreenWidth = Dimensions.get('window').width;

EStyleSheet.build({$rem: entireScreenWidth / 360});

export default class Slider extends Component {
    render(){
        return (
            <Swiper 
              style={StyleSheet.wrapper} 
              loop={false}
              // showsButtons={true}

                >
                <View style={styles.slide1}>
                    <Dashboard />
                </View>
                <View style={styles.slide2}>
                  <Text>Temp</Text>
                </View>
                <View style={styles.slide3}>
                    <Lights />
                </View>

            </Swiper>
        );
    }
}

const styles = EStyleSheet.create({
    wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "rgb(0,122,255)",
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  })
