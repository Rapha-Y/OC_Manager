import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import UserInput from '../components/UserInput';
import UserSubmit from '../components/UserSubmit';
import Colors from '../resources/Colors';

import Fire from '../Fire';

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
                        <View style={styles.avatarContainer}>
                            <Icon
                                name="md-add"
                                color={Colors.white}
                                size={50}
                            />
                        </View>
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
                        <View style={styles.submit}>
                            <UserSubmit 
                                submit={this.signin}
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
        marginBottom: "5%"
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
    submit: {
        marginTop: 20
    }
});