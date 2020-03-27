import React from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import * as firebase from 'firebase';

import Fire from '../Fire';

export default class Feed extends React.Component {
    state = {
        username: "",
        email: ""
    }

    componentDidMount() {
        //comment lines below after temporarily putting firebase aside
        const { email } = firebase.auth().currentUser;
        this.setState({ email });

        const user = Fire.shared.getUser("55b800d1-a2ed-4747-95bf-d40892f27e1c"); //replace with props.uid later
        const username = user.username;
        this.setState({ username });
    }

    signOutUser = () => {
        firebase.auth().signOut();
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text>Hello, {this.state.username}!</Text>
                <TouchableOpacity onPress={() => Alert.alert("Not working", "I'm preventing accidental logouts during coding - put back signout func later.")}>
                    <Text style={{borderWidth: 1, padding: 5, margin: 5}}>
                        Press me to log out
                    </Text>
                </TouchableOpacity>
            </View>
        );
    } 
}