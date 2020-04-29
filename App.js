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

class ReadyCreationsTab extends Component {
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

class PlaceholderCreationsTab extends Component {
  state = {
    uid: this.props.route.params.uid,
    sid: this.props.route.params.sid
  }

  render() {
    return(
      <Stack.Navigator initialRouteName="Section">
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
      </Stack.Navigator>
    );
  }
}

//the "switch navigator used in this section might not be a good way to await for componentDidMount"
//but if it's kept, at least the transition animation should be removed
class CreationsTab extends Component {
  state = {
    uid: this.props.route.params.uid,
    sid: null
  }

  async componentDidMount() {
    const sid = await Fire.shared.getRootSection(this.state.uid);
    this.setState({ sid });
  }
  
  render() {
    return(
      <Stack.Navigator headerMode={"none"}>
        {this.state.sid ? (
          <Stack.Screen 
            name="Ready" 
            component={ReadyCreationsTab} 
            initialParams={{ uid: this.state.uid, sid: this.state.sid }}
          />
        ) : (
          <Stack.Screen
            name="Placeholder"
            component={PlaceholderCreationsTab}
            initialParams={{ uid: this.state.uid, sid: this.state.sid }}
          />
        )}
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
    uid: this.props.route.params.uid
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
          initialParams={{ uid: this.state.uid,  }}
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
      </BotTab.Navigator>
    );
  }
}

class AppContainer extends Component {
  state = {
    uid: this.props.route.params.uid
  }

  render() {
    return(
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen 
          name="default" 
          component={BottomTabs}
          initialParams={{ uid: this.state.uid }} 
        />
      </Stack.Navigator>
    );
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

export default class FullApp extends Component {
  state = {
    uid: Fire.shared.uid
  }
  
  uidHandler(id) {
    this.setState({ uid: id });
  }

  //delete this later
  componentDidMount() {
    console.log("id: ", this.uid);
  }

  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator headerMode={"none"}>
          {this.state.uid ? (
            <Stack.Screen 
              name="App" 
              component={AppContainer} 
              initialParams={{ uid: this.state.uid }}
            />
          ) : (
            <Stack.Screen 
              name="Auth" 
              component={AuthStack} 
              initialParams={{ uidHandler: this.uidHandler.bind(this) }} 
            />
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