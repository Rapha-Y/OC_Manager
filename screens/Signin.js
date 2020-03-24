import React, { Component } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
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
                    />
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
                    <UserInput 
                        autoCapitalize="none"
                        getValue={(passwordConfirm) => this.setState({ passwordConfirm })}
                        keyboardType="default"
                        placeholder="Password Confirmation"
                        secureTextEntry={true}
                        icon="md-lock"
                    />
                    <View style={styles.submit}>
                        <UserSubmit 
                            submit={this.signin}
                            text="Log In"
                            style={styles.loginButton}
                        />
                    </View>
                </View>
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