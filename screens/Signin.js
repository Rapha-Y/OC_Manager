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

//change to switch-case later, also these errors only show messages - they must block login later
function usernameError(username) {
    if(username.length == 0) {
        return(
            <View style={styles.errorContainer}>
                <View style={styles.errorIcon}>
                    <AltIcon name="error-outline" size={20} color={Colors.darkGray} />
                </View>
                <Text style={styles.errorMessage}>
                    This field is mandatory
                </Text>
            </View>
        );
    } else if(!(/^\w+$/.test(username))) {
        return(
            <View style={styles.errorContainer}>
                <View style={styles.errorIcon}>
                    <AltIcon name="error-outline" size={20} color={Colors.darkGray} />
                </View>
                <Text style={styles.errorMessage}>
                    Only letters, numbers and underscore are allowed
                </Text>
            </View>
        );
    } else if(username.length < 6) {
        return(
            <View style={styles.errorContainer}>
                <View style={styles.errorIcon}>
                    <AltIcon name="error-outline" size={20} color={Colors.darkGray} />
                </View>
                <Text style={styles.errorMessage}>
                    Must have a minimum of 6 characters
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
                    Your username is ok!
                </Text>
            </View>
        );
    }
}

function emailError(email) {
    if(email.length == 0) {
        return(
            <View style={styles.errorContainer}>
                <View style={styles.errorIcon}>
                    <AltIcon name="error-outline" size={20} color={Colors.darkGray} />
                </View>
                <Text style={styles.errorMessage}>
                    This field is mandatory
                </Text>
            </View>
        );
    } if(Fire.shared.emailExists(email)) {
        return(
            <View style={styles.errorContainer}>
                <View style={styles.errorIcon}>
                    <AltIcon name="error-outline" size={20} color={Colors.darkGray} />
                </View>
                <Text style={styles.errorMessage}>
                    This e-mail is already in use
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
                    Your e-mail is available!
                </Text>
            </View>
        );
    }
}

function passwordError(password) {
    if(password.length == 0) {
        return(
            <View style={styles.errorContainer}>
                <View style={styles.errorIcon}>
                    <AltIcon name="error-outline" size={20} color={Colors.darkGray} />
                </View>
                <Text style={styles.errorMessage}>
                    This field is mandatory
                </Text>
            </View>
        );
    } else if(/^\s+$/.test(password)) {
        return(
            <View style={styles.errorContainer}>
                <View style={styles.errorIcon}>
                    <AltIcon name="error-outline" size={20} color={Colors.darkGray} />
                </View>
                <Text style={styles.errorMessage}>
                    Spaces are not allowed
                </Text>
            </View>
        );
    } else if(!(/^[\x00-\x7F]*$/.test(password))) {
        return(
            <View style={styles.errorContainer}>
                <View style={styles.errorIcon}>
                    <AltIcon name="error-outline" size={20} color={Colors.darkGray} />
                </View>
                <Text style={styles.errorMessage}>
                    Only ASCII characters
                </Text>
            </View>
        );
    } else if(password.length < 8) {
        return(
            <View style={styles.errorContainer}>
                <View style={styles.errorIcon}>
                    <AltIcon name="error-outline" size={20} color={Colors.darkGray} />
                </View>
                <Text style={styles.errorMessage}>
                    Must have a minimum of 8 characters
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
                    Your password is ok!
                </Text>
            </View>
        );
    }
}

function passwordConfirmError(password, passwordConfirm) {
    if(password.length == 0) {
        return(
            <View style={styles.errorContainer}>
                <View style={styles.errorIcon}>
                    <AltIcon name="error-outline" size={20} color={Colors.darkGray} />
                </View>
                <Text style={styles.errorMessage}>
                    This field is mandatory
                </Text>
            </View>
        );
    } else if(password != passwordConfirm) {
        return(
            <View style={styles.errorContainer}>
                <View style={styles.errorIcon}>
                    <AltIcon name="error-outline" size={20} color={Colors.darkGray} />
                </View>
                <Text style={styles.errorMessage}>
                    Passwords don't match
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
                    Passwords match!
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
        errorMessage: null
    }

    signin = () => {
        var error = null;
        if(this.state.username == "") {
            error = "You must have a username";
        } else if(this.state.email == "") {
            error = "You must have an e-mail"
        } else if(this.state.password == "") {
            error = "You must have a password"
        } else if(this.state.password != this.state.passwordConfirm) {
            error = "Your passwords don't match"
        } else {
            Fire.shared.createUser({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            });
        }
        this.setState({errorMessage: error});
    };

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
                            keyboardType="default"
                            placeholder="Username"
                            secureTextEntry={false}
                            icon="md-person"

                            reference={(input) => { this.usernameField = input }}
                            onSubmitEditing={() => { this.emailField.focus(); }}
                            blurOnSubmit={false}
                        />
                        {usernameError(this.state.username)}
                        <UserInput 
                            autoCapitalize="none"
                            getValue={(email) => {this.setState({ email })}}
                            keyboardType="email-address"
                            placeholder="E-mail"
                            secureTextEntry={false}
                            icon="md-mail"

                            reference={(input) => { this.emailField = input }}
                            onSubmitEditing={() => { this.passwordField.focus(); }}
                            blurOnSubmit={false}
                        />
                        {emailError(this.state.email)}
                        <UserInput 
                            autoCapitalize="none"
                            getValue={(password) => this.setState({ password })}
                            keyboardType="default"
                            placeholder="Password"
                            secureTextEntry={true}
                            icon="md-lock"

                            reference={(input) => { this.passwordField = input }}
                            onSubmitEditing={() => { this.passwordConfirmField.focus(); }}
                            blurOnSubmit={false}
                        />
                        {passwordError(this.state.password)}
                        <UserInput 
                            autoCapitalize="none"
                            getValue={(passwordConfirm) => this.setState({ passwordConfirm })}
                            keyboardType="default"
                            placeholder="Password Confirmation"
                            secureTextEntry={true}
                            icon="md-lock"

                            reference={(input) => { this.passwordConfirmField = input }}
                            onSubmitEditing={() => {}}
                            blurOnSubmit={true}
                        />
                        {passwordConfirmError(this.state.password, this.state.passwordConfirm)}
                        <View style={styles.submit}>
                            <UserSubmit 
                                submit={() => Alert.alert("I don't work atm")}
                                text="Log In"
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