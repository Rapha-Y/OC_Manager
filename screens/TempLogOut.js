import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import * as firebase from 'firebase';

export default class TempLogOut extends Component {
    render() {
        return(
            <View>
                <Text>Hello, {this.props.route.params.uid}</Text>
                <Button title="LOG OUT" onPress={() => { 
                    firebase.auth().signOut().then(
                        this.props.route.params.uidHandler(null)
                    );  
                }}/>
            </View>
        );
    }
}