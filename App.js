import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import * as firebase from 'firebase';

import Character from './screens/Character';
import Creations from './screens/Creations';
import Feed from './screens/Feed';
import Section from './screens/Section';
import Login from './screens/Login';
import Lore from './screens/Lore';
import Profile from './screens/Profile';
import Signin from './screens/Signin';
import Colors from './resources/Colors';

import firebaseConfig from "./important-info/apiKey";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const BotTab = createBottomTabNavigator();
const Stack = createStackNavigator();

class FeedTab extends Component {
  render() {
    return(
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Character" component={Character} />
        <Stack.Screen name="Lore" component={Lore} />
        <Stack.Screen name="Section" component={Section} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    );
  }
}

class CreationsTab extends Component {
  render() {
    return(
      <Stack.Navigator initialRouteName="Lore">
        <Stack.Screen name="Character" component={Character} />
        <Stack.Screen name="Lore" component={Lore} />
        <Stack.Screen name="Section" component={Section} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    );
  }
}

class ProfileTab extends Component {
  render() {
    return(
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen name="Character" component={Character} />
        <Stack.Screen name="Lore" component={Lore} />
        <Stack.Screen name="Section" component={Section} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    );
  }
}

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
          component={FeedTab}
          options={{
            tabBarLabel: "Feed",
            tabBarIcon: ({color, size}) => (
              <Icon name="md-home" color={color} size={size}/>
            )
          }}
        />
        <BotTab.Screen 
          name="Creations"
          component={CreationsTab}
          options={{
            tabBarLabel: "Creations",
            tabBarIcon: ({color, size}) => (
              <Icon name="md-folder" color={color} size={size}/>
            )
          }}
        />
        <BotTab.Screen 
          name="Profile"
          component={ProfileTab}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({color, size}) => (
              <Icon name="md-person" color={color} size={size}/>
            )
          }}
        />
      </BotTab.Navigator>
    );
  }
}

class AppContainer extends Component {
  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator headerMode={"none"}>
          <Stack.Screen name="default" component={BottomTabs} />
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
          <Stack.Screen name="Signin" component={Signin} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppContainer,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Auth"
    }
  )
);