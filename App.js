import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import * as firebase from 'firebase';

import Loading from "./screens/Loading.js";
import Login from "./screens/Login.js";
import Blank from "./screens/Blank.js";

import firebaseConfig from "./important-info/apiKey.js";

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Blank: Blank
});

const AuthStack = createStackNavigator({
  Login: Login
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: Loading,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);