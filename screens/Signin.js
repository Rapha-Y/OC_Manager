import React, { Component } from 'react';
import { View, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import Icon from 'react-native-vector-icons/Ionicons';
import AltIcon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import UserInput from '../components/UserInput';
import UserSubmit from '../components/UserSubmit';
import Colors from '../resources/Colors';

import Fire from '../Fire';

function errorDisplay(isError, message) {
    if(isError) {
        return(
            <View style={styles.errorContainer}>
                <View style={styles.errorIcon}>
                    <AltIcon name="error-outline" size={20} color={Colors.darkGray} />
                </View>
                <Text style={styles.errorMessage}>
                    {message}
                </Text>
            </View>
        );
    } else {
        return(
            <View style={styles.errorContainer}>
                <View style={styles.errorIcon}>
                    <Icon name="md-checkmark-circle-outline" size={20} color={Colors.darkGray} />
                </View>
                <Text style={styles.errorMessage}>
                    {message}
                </Text>
            </View>
        );
    }
}

export default class Signin extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
        
        usernameError: {
            exists: true, 
            message: "This field is mandatory"
        },
        emailError: {
            exists: true, 
            message: "This field is mandatory"
        },
        passwordError: {
            exists: true, 
            message: "This field is mandatory"
        },
        passwordConfirmError: {
            exists: true, 
            message: "This field is mandatory"
        },

        errorMessage: null
    }

    usernameErrorHandler(username) {
        if(username.length == 0) {
            this.setState({ 
                usernameError: { exists: true, message: "This field is mandatory" } 
            });
        } else if(!(/^\w+$/.test(username))) {
            this.setState({ 
                usernameError: { exists: true, message: "Only letters, numbers and underscore are allowed" } 
            });
        } else if(username.length < 6) {
            this.setState({ 
                usernameError: { exists: true, message: "Must have a minimum of 6 characters" } 
            });
        } else {
            this.setState({ 
                usernameError: { exists: false, message: "Your username is ok!" } 
            });
        }
    }

    emailErrorHandler(email) {
        if(email.length == 0) {
            this.setState({ 
                emailError: { exists: true, message: "This field is mandatory" } 
            });
        } else if(Fire.shared.emailExists(email)) {
            this.setState({
                emailError: { exists: true, message: "This e-mail is already in use" }
            });
        } else {
            this.setState({ 
                emailError: { exists: false, message: "Your e-mail is available!" } 
            });
        }
    }

    passwordErrorHandler(password) {
        if(password.length == 0) {
            this.setState({ 
                passwordError: { exists: true, message: "This field is mandatory" } 
            });
        } else if(/^\s+$/.test(password)) {
            this.setState({ 
                passwordError: { exists: true, message: "Spaces are not allowed" } 
            });
        } else if(!(/^[\x00-\x7F]*$/.test(password))) {
            this.setState({ 
                passwordError: { exists: true, message: "Only ASCII characters" } 
            });
        } else if(password.length < 8) {
            this.setState({ 
                passwordError: { exists: true, message: "Must have a minimum of 8 characters" } 
            });
        } else {
            this.setState({ 
                passwordError: { exists: false, message: "Your password is ok!" } 
            });
        }

        if(this.state.passwordConfirm.length != 0) {
            if(password != this.state.passwordConfirm) {
                this.setState({
                    passwordConfirmError: { exists: true, message: "Passwords don't match" }
                });
            } else {
                this.setState({
                    passwordConfirmError: { exists: false, message: "Passwords match!" }
                });
            }
        }
    }

    passwordConfirmErrorHandler(passwordConfirm) {
        if(passwordConfirm.length == 0) {
            this.setState({ 
                passwordConfirmError: { exists: true, message: "This field is mandatory" } 
            });
        } else if(passwordConfirm != this.state.password) {
            this.setState({
                passwordConfirmError: { exists: true, message: "Passwords don't match" }
            });
        } else {
            this.setState({
                passwordConfirmError: { exists: false, message: "Passwords match!" }
            });
        }
    }

    placeholderSignIn() {
        if(
            this.state.usernameError.exists || 
            this.state.emailError.exists || 
            this.state.passwordError.exists || 
            this.state.passwordConfirmError.exists
        ) {
            return "You gotta fix your info";
        } else {
            return "You'd have an account now";
        }
    }

    render() {
        return(
            <View style={styles.wrapper}>
                <Header name="Sign Up"/>
                <KeyboardAwareScrollView
                    style={styles.body}
                    contentContainerStyle={{alignItems: "center"}}
                >
                    <View style={styles.avatarArea}>
                        <TouchableOpacity onPress={() => Alert.alert("I don't work yet")}>
                            <View style={styles.avatarContainer}>
                                <Icon
                                    name="md-add"
                                    color={Colors.white}
                                    size={50}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputContainer}>
                        <UserInput 
                            autoCapitalize="none"

                            getValue={(username) => {this.setState({ username })}}
                            getError={(username) => {this.usernameErrorHandler(username)}}
                            
                            keyboardType="default"
                            placeholder="Username"
                            secureTextEntry={false}
                            icon="md-person"

                            reference={(input) => { this.usernameField = input }}
                            onSubmitEditing={() => { this.emailField.focus(); }}
                            blurOnSubmit={false}
                        />
                        {errorDisplay(
                            this.state.usernameError.exists, 
                            this.state.usernameError.message
                        )}
                        <UserInput 
                            autoCapitalize="none"
                            
                            getValue={(email) => {this.setState({ email })}}
                            getError={(email) => {this.emailErrorHandler(email)}}
                            
                            keyboardType="email-address"
                            placeholder="E-mail"
                            secureTextEntry={false}
                            icon="md-mail"

                            reference={(input) => { this.emailField = input }}
                            onSubmitEditing={() => { this.passwordField.focus(); }}
                            blurOnSubmit={false}
                        />
                        {errorDisplay(
                            this.state.emailError.exists, 
                            this.state.emailError.message
                        )}
                        <UserInput 
                            autoCapitalize="none"
                            
                            getValue={(password) => this.setState({ password })}
                            getError={(password) => this.passwordErrorHandler(password)}
                            
                            keyboardType="default"
                            placeholder="Password"
                            secureTextEntry={true}
                            icon="md-lock"

                            reference={(input) => { this.passwordField = input }}
                            onSubmitEditing={() => { this.passwordConfirmField.focus(); }}
                            blurOnSubmit={false}
                        />
                        {errorDisplay(
                            this.state.passwordError.exists, 
                            this.state.passwordError.message
                        )}
                        <UserInput 
                            autoCapitalize="none"
                            
                            getValue={(passwordConfirm) => this.setState({ passwordConfirm })}
                            getError={(passwordConfirm) => this.passwordConfirmErrorHandler(passwordConfirm)}
                            
                            keyboardType="default"
                            placeholder="Password Confirmation"
                            secureTextEntry={true}
                            icon="md-lock"

                            reference={(input) => { this.passwordConfirmField = input }}
                            onSubmitEditing={() => {}}
                            blurOnSubmit={true}
                        />
                        {errorDisplay(
                            this.state.passwordConfirmError.exists, 
                            this.state.passwordConfirmError.message
                        )}
                        <View style={styles.submit}>
                            <UserSubmit 
                                submit={() => Alert.alert(this.placeholderSignIn())}
                                text="Sign In"
                                style={styles.loginButton}
                            />
                        </View>
                    </View>
                    {/*
                        Code below makes the screen not "shake" every time the next input field gets 
                        automatically selected, but if no components are added in it, it'd be good to have 
                        at least some illustration, to make it not feel pointless to scroll to the bottom
                    */}
                    <View style={{height: 160}}/> 
                </KeyboardAwareScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: "center",
        backgroundColor: Colors.white
    },
    body: {
        backgroundColor: Colors.white, 
        width: "100%"
    },
    avatarArea: {
        marginTop: "10%",
        marginBottom: "5%",
    },
    avatarContainer: {
        alignItems: "center",
        justifyContent: "center",
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: Colors.darkGray,
    },
    inputContainer: {
        width: "80%",
    },
    errorContainer: {
        flexDirection: "row",
        paddingBottom: 10
    },
    errorIcon: {
        width: 20,
        alignItems: "center"
    },
    errorMessage: {
        paddingLeft: 10,
        color: Colors.darkGray
    },
    submit: {
        marginTop: 20
    }
});