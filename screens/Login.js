import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Fire from '../Fire';
import * as firebase from 'firebase';

import Colors from "../resources/Colors";
import UserInput from "../components/UserInput";
import UserSubmit from "../components/UserSubmit";

function errorDisplay(isError, message) {
    if(isError) {
        return(
            <View style={styles.errorContainer}>
                <View style={styles.errorIcon}>
                    <Icon name="error-outline" size={20} color={Colors.red} />
                </View>
                <Text style={styles.errorMessage}>
                    {message}
                </Text>
            </View>
        );
    } else {
        return(
            <View style={styles.errorContainer} />
        );
    }
}

export default class Login extends Component {
    state = {
        email: "",
        password: "",

        error: {
            exists: false,
            message: ""
        },
    };

    logIn() {
        var handlerFunc = this.props.route.params.uidHandler;

        firebase
                .auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .catch(err => {
                    this.setState({ error: { exists: true, message: err.message } })
                })
                .then(function() {
                    var uid = Fire.shared.uid;
                    if(uid) {
                        handlerFunc(uid);           
                    }
                });
    }

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
                        getError={() => {}}
                        
                        keyboardType="email-address"
                        placeholder="E-mail"
                        secureTextEntry={false}
                        icon="md-mail"

                        reference={(input) => { this.emailField = input }}
                        onSubmitEditing={() => { this.passwordField.focus(); }}
                        blurOnSubmit={false}
                    />
                    <UserInput 
                        autoCapitalize="none"
                        
                        getValue={(password) => this.setState({ password })}
                        getError={() => {}}
                        
                        keyboardType="default"
                        placeholder="Password"
                        secureTextEntry={true}
                        icon="md-lock"

                        reference={(input) => { this.passwordField = input }}
                        onSubmitEditing={() => {}}
                        blurOnSubmit={true}
                    />
                    {errorDisplay(this.state.error.exists, this.state.error.message)}
                    <View style={styles.submit}>
                        <UserSubmit 
                            submit={() => this.logIn()}
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
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("Signin"),
                                this.setState({
                                    error: { exists: false, message: "" }
                                })
                            }}>
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
        flex: 1,
        backgroundColor: Colors.white,
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
    errorContainer: {
        flexDirection: "row",
    },
    errorIcon: {
        width: 20,
        alignItems: "center"
    },
    errorMessage: {
        paddingLeft: 10,
        color: Colors.red
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