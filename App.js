import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

import firebaseConfig from "./important-info/apiKey";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const AppContainer = createStackNavigator(
  {
    default: createBottomTabNavigator(
      {
        Feed: {
          screen: Feed,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="home" size={24} color={tintColor}/>
          }
        },
        Creations: {
          screen: Creations,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="folder" size={24} color={tintColor}/>
          }
        },
        Messages: {
          screen: Messages,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="message" size={24} color={tintColor}/>
          }
        },
        Notifications: {
          screen: Notifications,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="notifications" size={24} color={tintColor}/>
          }
        }
      },
      {
        tabBarOptions: {
          activeTintColor: "cyan",
          inactiveTintColor: "black",
        }
      }
    )
  },
  {
    headerMode: "none",
  }
);

const AuthStack = createStackNavigator({
  Login: Login
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: Loading,
      App: AppContainer,
      Auth: AuthStack,

      CurrentTest: Profile //delete later
    },
    {
      initialRouteName: "CurrentTest"
    }
  )
);