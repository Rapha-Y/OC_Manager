import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';

export default class Feed extends Component {
    state = {
        username: "Username",
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text>Hello, {this.state.username}!</Text>
                <TouchableOpacity onPress={() => Alert.alert("Not working", "Make me functional")}>
                    <Text style={{borderWidth: 1, padding: 5, margin: 5}}>
                        Press me to log out
                    </Text>
                </TouchableOpacity>
            </View>
        );
    } 
}