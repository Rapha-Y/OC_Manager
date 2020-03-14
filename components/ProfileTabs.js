import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

class Creations extends Component {
    render () {
        return (
            <View>
            </View>
        );
    }
}

export default class ProfileTabs extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Creations" component={Creations} />
                    <Tab.Screen name="Comments" component={Creations} />
                    <Tab.Screen name="Details" component={Creations} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}