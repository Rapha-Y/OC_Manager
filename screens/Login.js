import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

import Colors from "../resources/Colors.js";
import Logo from "../components/Logo.js";
import UserInput from "../components/UserInput.js";
import UserSubmit from "../components/UserSubmit.js";
import { ThemeColors } from 'react-navigation';

export default class Login extends Component {
    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    login = () => {
        const { email, password } = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => {this.setState({ errorMessage: error.message }); console.log(error);});
    };

    render() {
        return(
            <View style={styles.page}>
                <View style={styles.logoContainer}>
                    <Logo size={120}/>
                </View>
                <View style={styles.inputContainer}>
                    <UserInput 
                        autoCapitalize="none"
                        getValue={(email) => {this.setState({ email })}}
                        keyboardType="email-address"
                        placeholder="E-mail"
                        secureTextEntry={false}
                    />
                    <UserInput 
                        autoCapitalize="none"
                        getValue={(password) => this.setState({ password })}
                        keyboardType="default"
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                    <UserSubmit 
                        submit={() => this.login()}
                        text="Log In"
                    />
                    <View>
                        {this.state.errorMessage && <Text>{this.state.errorMessage}</Text>}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: Colors.secondaryColor,

        flex: 1,
        alignItems: "center",
    },

    logoContainer: {
        marginVertical: "15%",
    },
    inputContainer: {
        width: "80%",
    },
});