import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

export default class Blank extends React.Component {
    state = {
        email: ""
    }

    componentDidMount() {
        const { email } = firebase.auth().currentUser;
        this.setState({ email });
    }

    signOutUser = () => {
        firebase.auth().signOut();
    }

    render() {
        return (
            <View>
                <Text>{this.state.email}</Text>
                <TouchableOpacity onPress={this.signOutUser}>
                    <Text>
                        Press me to bye
                    </Text>
                </TouchableOpacity>
            </View>
        );
    } 
}