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
import Swiper from "react-native-swiper";
import Dashboard from "./Dashboard";
import Lights from "./Lights";


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
                    <Lights />
                </View>

            </Swiper>
        );
    }
}

const styles = StyleSheet.create({
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
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BB',
    }
  })
