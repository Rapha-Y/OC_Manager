import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import * as firebase from 'firebase';

import Colors from "../resources/Colors";
import UserInput from "../components/UserInput";
import UserSubmit from "../components/UserSubmit";

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
                    <Image 
                        style={styles.logo} 
                        source={require('../resources/Placeholder.png')}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <UserInput 
                        autoCapitalize="none"
                        getValue={(email) => {this.setState({ email })}}
                        keyboardType="email-address"
                        placeholder="E-mail"
                        secureTextEntry={false}
                        icon="md-mail"
                    />
                    <UserInput 
                        autoCapitalize="none"
                        getValue={(password) => this.setState({ password })}
                        keyboardType="default"
                        placeholder="Password"
                        secureTextEntry={true}
                        icon="md-lock"
                    />
                    <View style={styles.submit}>
                        <UserSubmit 
                            submit={() => this.login()}
                            text="Log In"
                            style={styles.loginButton}
                        />
                    </View>
                    <View style={styles.textButton}>
                        <TouchableOpacity onPress={() => Alert.alert("Not yet functional")}>
                            <Text style={styles.textLink}>
                                Forgot password?
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        {this.state.errorMessage && <Text>{this.state.errorMessage}</Text>}
                    </View>
                </View>
                <View style={styles.bottomSection}>
                    <View style={{flexDirection: "row"}}>
                        <Text>Don't have an account? </Text>
                        <View style={styles.textButton}>
                            <TouchableOpacity onPress={() => Alert.alert("Not yet functional")}>
                                <Text style={styles.textLink}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: Colors.white,
        height: "100%",
        alignItems: "center"
    },
    logoContainer: {
        marginVertical: "15%",
    },
    logo: {
        width: 250
    },
    inputContainer: {
        width: "80%",
    },
    submit: {
        marginTop: 20
    },
    textButton: {
        alignItems: "center",
    },
    textLink: {
        color: Colors.purple,
    },
    bottomSection: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 20
    }
});