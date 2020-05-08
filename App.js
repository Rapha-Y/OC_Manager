import React, { Component } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import * as firebase from 'firebase';

import Character from './screens/Character';
import Feed from './screens/Feed';
import Section from './screens/Section';
import Login from './screens/Login';
import Lore from './screens/Lore';
import Profile from './screens/Profile';
import Signin from './screens/Signin';
import Colors from './resources/Colors';
import Loader from './components/Loader';

import firebaseConfig from "./important-info/apiKey";
import Fire from './Fire';

import TempLogOut from "./screens/TempLogOut";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const BotTab = createBottomTabNavigator();
const Stack = createStackNavigator();

class FeedTab extends Component {
  state = {
    uid: this.props.route.params.uid
  }

  render() {
    return(
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen 
          name="Feed" 
          component={Feed} 
          initialParams={{ uid: this.state.uid }}
          options={{
            title: "Home",
            headerStyle: styles.header,
            headerTintColor: Colors.white,
            headerTitleStyle: styles.headerText,
            headerTitleAlign: "center"
          }} 
        />
        <Stack.Screen 
          name="Character" 
          component={Character} 
          initialParams={{ uid: this.state.uid }}
          options={({ route }) => ({
            title: route.params.title,
            headerStyle: styles.header,
            headerTintColor: Colors.white,
            headerTitleStyle: styles.headerText,
            headerTitleAlign: "center"
          })} 
        />
        <Stack.Screen 
          name="Lore" 
          component={Lore}
          initialParams={{ uid: this.state.uid }}
          options={{
            headerStyle: styles.header,
            headerTintColor: Colors.white,
            headerTitleStyle: styles.headerText,
            headerTitleAlign: "center"
          }} 
        />
        <Stack.Screen 
          name="Section" 
          component={Section} 
          initialParams={{ uid: this.state.uid }}
          options={{
            headerStyle: styles.header,
            headerTintColor: Colors.white,
            headerTitleStyle: styles.headerText,
            headerTitleAlign: "center"
          }} 
        />
        <Stack.Screen 
          name="Profile" 
          component={Profile} 
          initialParams={{ uid: this.state.uid }}
          options={{
            headerStyle: styles.header,
            headerTintColor: Colors.white,
            headerTitleStyle: styles.headerText,
            headerTitleAlign: "center"
          }} 
        />
      </Stack.Navigator>
    );
  }
}

class CreationsTab extends Component {
  state = {
    uid: this.props.route.params.uid,
    sid: this.props.route.params.sid
  }
  
  render() {
    return(
      <Stack.Navigator initialRouteName="Section">
        <Stack.Screen 
          name="Character" 
          component={Character} 
          initialParams={{ uid: this.state.uid }}
          options={({ route }) => ({ 
            title: route.params.title,
            headerStyle: styles.header,
            headerTintColor: Colors.white,
            headerTitleStyle: styles.headerText,
            headerTitleAlign: "center"
          })}
        />
        <Stack.Screen 
          name="Lore" 
          component={Lore} 
          initialParams={{ uid: this.state.uid }}
          options={{
            headerStyle: styles.header,
            headerTintColor: Colors.white,
            headerTitleStyle: styles.headerText,
            headerTitleAlign: "center"
          }} 
        />
        <Stack.Screen 
          name="Section" 
          component={Section} 
          initialParams={{ uid: this.state.uid, sid: this.state.sid, title: "My Creations" }}
          options={({ route }) => ({ 
            title: route.params.title,
            headerStyle: styles.header,
            headerTintColor: Colors.white,
            headerTitleStyle: styles.headerText,
            headerTitleAlign: "center"
          })} 
        />
        <Stack.Screen 
          name="Profile" 
          component={Profile} 
          initialParams={{ uid: this.state.uid }}
          options={{
            title: "Profile",
            headerStyle: styles.header,
            headerTintColor: Colors.white,
            headerTitleStyle: styles.headerText,
            headerTitleAlign: "center"
          }} 
        />
      </Stack.Navigator>
    );
  }
}

class ProfileTab extends Component {
  state = {
    uid: this.props.route.params.uid
  }

  render() {
    return(
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen 
          name="Character" 
          component={Character} 
          initialParams={{ uid: this.state.uid }}
          options={{
            headerStyle: styles.header,
            headerTintColor: Colors.white,
            headerTitleStyle: styles.headerText,
            headerTitleAlign: "center"
          }} 
        />
        <Stack.Screen 
          name="Lore" 
          component={Lore} 
          initialParams={{ uid: this.state.uid }}
          options={{
            headerStyle: styles.header,
            headerTintColor: Colors.white,
            headerTitleStyle: styles.headerText,
            headerTitleAlign: "center"
          }} 
        />
        <Stack.Screen 
          name="Section" 
          component={Section} 
          initialParams={{ uid: this.state.uid }}
          options={{
            headerStyle: styles.header,
            headerTintColor: Colors.white,
            headerTitleStyle: styles.headerText,
            headerTitleAlign: "center"
          }} 
        />
        <Stack.Screen 
          name="Profile" 
          component={Profile} 
          initialParams={{ uid: this.state.uid }}
          options={{
            headerStyle: styles.header,
            headerTintColor: Colors.white,
            headerTitleStyle: styles.headerText,
            headerTitleAlign: "center"
          }} 
        />
      </Stack.Navigator>
    );
  }
}

class BottomTabs extends Component {
  state = {
    uid: this.props.route.params.uid,
    sid: this.props.route.params.sid
  }

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
          initialParams={{ uid: this.state.uid }}
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
          initialParams={{ uid: this.state.uid, sid: this.state.sid }}
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
          initialParams={{ uid: this.state.uid }}
        />
        <BotTab.Screen
          name="Temp"
          component={TempLogOut}
          initialParams={{ uidHandler: this.props.route.params.uidHandler }}
        />
      </BotTab.Navigator>
    );
  }
}

class AppContainer extends Component {
  state = {
    uid: this.props.route.params.uid,
    sid: null
  }

  async componentDidMount() {
    const sid = await Fire.shared.getRootSection(this.state.uid);
    this.setState({ sid });
  }

  render() {
    if(this.state.sid == null) {
      return(
        <Loader/>
      );
    } else {
      return(
        <Stack.Navigator headerMode={"none"}>
          <Stack.Screen 
            name="default" 
            component={BottomTabs}
            initialParams={{ 
              uid: this.state.uid, 
              sid: this.state.sid,
              uidHandler: this.props.route.params.uidHandler 
            }} 
          />
        </Stack.Navigator>
      );
    }
  }
}

class AuthStack extends Component {
  render() {
    return(
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          initialParams={{ 
            rootNavigation: this.props.navigation, 
            uidHandler: this.props.route.params.uidHandler
          }} 
        />
        <Stack.Screen name="Signin" component={Signin} />
      </Stack.Navigator>
    );
  }
}

class FullApp extends Component {
  state = {
    uid: this.uidTranslation(this.props.route.params.uid),
  }
  
  /*uidHandler(id) {
    this.setState({ uid: id });
  }*/

  uidTranslation(uid) {
    if(uid == "truthy") {
      return null;
    } else {
      return uid;
    }
  }

  render() {
    return(
      <Stack.Navigator headerMode={"none"}>
        {this.state.uid ? (
          <Stack.Screen 
            name="App" 
            component={AppContainer} 
            initialParams={{ uid: this.state.uid, uidHandler: this.props.route.params.uidHandler }}
          />
        ) : (
          <Stack.Screen 
            name="Auth" 
            component={AuthStack} 
            initialParams={{ uidHandler: this.props.route.params.uidHandler }} 
          />
        )}
      </Stack.Navigator>
    );
  }
}

export default class AppWithSplash extends Component {
  state = {
    uid: null
  }

  async componentDidMount() {
    this.getAuthStatus();
  }

  getAuthStatus() {
    firebase.auth().onAuthStateChanged((resp) => {
      var uid;
      if(resp) {
        uid = resp.uid;
      } else {
        uid = "truthy";
      }
      this.setState({ uid });
    });
  }

  uidHandler(uid) {
    this.setState({ uid: null });
    //note: if the state isn't switched to a falsy value, the switch navigator doesn't update, as even with
    //a change in the uid state value, it'd be from truthy to truthy
    this.setState({ uid });
  }

  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {this.state.uid ? (
            <Stack.Screen 
              name="FullApp" 
              component={FullApp} 
              initialParams={{ uid: this.state.uid, uidHandler: this.uidHandler.bind(this) }}
            />
          ) : (
            <Stack.Screen name="Splash" component={Loader}/>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.purple,
  },
  headerText: {
    fontWeight: "bold", 
    fontSize: 18
  }
});