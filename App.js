import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./screens/Login.js";
import Blank from "./screens/Blank.js";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Blank" component={Blank}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1
  }
}); 