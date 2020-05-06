import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import * as firebase from 'firebase';

export default class TempLogOut extends Component {
    updatedUid(){
        var uidHandler = this.props.route.params.uidHandler;
        uidHandler("");
    }

    render() {
        return(
            <View>
                <Button title="LOG OUT" onPress={() => { 
                    firebase.auth().signOut();
                    this.updatedUid();
                }}/>
            </View>
        );
    }
}