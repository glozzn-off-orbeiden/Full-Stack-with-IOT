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
import Dashboard from "./Dashboard";
import Lights from "./Lights";
import Temp from "./Temp";
import AddDevice from './AddDevice'

import { NativeRouter as Router, Route, Link, Switch } from "react-router-native";
import SwipeableRoutes from "react-swipeable-routes";


let entireScreenWidth = Dimensions.get("window").width;

EStyleSheet.build({ $rem: entireScreenWidth / 360 });

export default function Slider(props) {
  console.log(props);

  return (
    <Router>
     <View style={styles.container}>
        <Switch>
          <Route exact path="/">
            <Dashboard props={props} />
          </Route>
          <Route path="/Temp">
            <Temp props={props} />
          </Route>

          <Route exact path="/Lights">
            <Lights props={props} />
          </Route>
          <Route exact path="/AddDevice">
            <AddDevice props={props} />
          </Route>
        </Switch>
        
        <View style={styles.nav}>
          <Link
            to="/"
            underlayColor="#f0f4f7"
            style={styles.navItem}
          >
            <Text>Dashboard</Text>
          </Link>
          <Link
            to="/Temp"
            underlayColor="#f0f4f7"
            style={styles.navItem}
          >
            <Text>Temp</Text>
          </Link>
          <Link
            to="/Lights"
            underlayColor="#f0f4f7"
            style={styles.navItem}
          >
            <Text>Lights</Text>
          </Link>
          <Link
            to="/AddDevice"
            underlayColor="#f0f4f7"
            style={styles.navItem}
          >
            <Text>AddDevice</Text>
          </Link>
        </View>
      </View>
    </Router>
  );
}


const styles = EStyleSheet.create({
  container: {
    flex:1,
    marginTop: 25,
    //height: "570rem"
    // padding: 10
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    alignItems: "center"
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",

  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  slide4: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
