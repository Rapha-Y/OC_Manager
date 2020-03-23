import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import * as firebase from 'firebase';

import Character from './screens/Character';
import Chat from './screens/Chat';
import Creations from './screens/Creations';
import Feed from './screens/Feed';
import Loading from './screens/Loading';
import Login from './screens/Login';
import Messages from './screens/Messages';
import Notifications from './screens/Notifications';
import Profile from './screens/Profile';
import Signin from './screens/Signin';
import Colors from './resources/Colors';

import firebaseConfig from "./important-info/apiKey";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const BotTab = createBottomTabNavigator();

class BottomTabs extends Component {
  render() {
    return(
      <BotTab.Navigator
        tabBarOptions={{
          activeTintColor: Colors.purple,
          inactiveTintColor: Colors.darkGray,
        }}
      >
        <BotTab.Screen 
          name="Feed"
          component={Feed}
          options={{
            tabBarLabel: "Feed",
            tabBarIcon: ({color, size}) => (
              <Icon name="md-home" color={color} size={size}/>
            )
          }}
        />
        <BotTab.Screen 
          name="Creations"
          component={Creations}
          options={{
            tabBarLabel: "Creations",
            tabBarIcon: ({color, size}) => (
              <Icon name="md-folder" color={color} size={size}/>
            )
          }}
        />
        <BotTab.Screen 
          name="Messages"
          component={Messages}
          options={{
            tabBarLabel: "Messages",
            tabBarIcon: ({color, size}) => (
              <Icon name="md-chatboxes" color={color} size={size}/>
            )
          }}
        />
        <BotTab.Screen 
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: "Notifications",
            tabBarIcon: ({color, size}) => (
              <Icon name="md-notifications" color={color} size={size}/>
            )
          }}
        />
      </BotTab.Navigator>
    );
  }
}

const Stack = createStackNavigator();

class AppContainer extends Component {
  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator headerMode={"none"}>
          <Stack.Screen name="default" component={BottomTabs} />
          <Stack.Screen name="Character" component={Character} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

class AuthStack extends Component {
  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator headerMode={"none"}>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: Loading,
      App: AppContainer,
      Auth: AuthStack,

      CurrentTest: Loading //delete later
    },
    {
      initialRouteName: "CurrentTest"
    }
  )
);