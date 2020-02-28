import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from "../resources/Colors.js";
import Logo from "../components/Logo.js";
import UserInput from "../components/UserInput.js";
import UserSubmit from "../components/UserSubmit.js";
import users from "../data/users.json";

const Login = props => {
    const [currentUserID, setCurrentUserID] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");

    const getUserIdentifier = (userIdentifier) => {
        setCurrentUserID(userIdentifier);
    }

    const getPassword = (password) => {
        setCurrentPassword(password);
    }

    const showDummies = (dummyMail, dummyPass) => {
        alert(currentUserID + " " + currentPassword);
    }

    return(
        <View style={styles.page}>
            <View style={styles.logoContainer}>
                <Logo size={120}/>
            </View>
            <View style={styles.inputContainer}>
                <UserInput fieldValue={(userIDValue) => {getUserIdentifier(userIDValue);}} placeholder="Username or E-mail"/>
                <UserInput fieldValue={(passwordValue) => {getPassword(passwordValue);}} placeholder="Password"/>
                <UserSubmit validateSubmit={() => {showDummies("Hello","World");}} text="Log In"/>
            </View>
        </View>
    );
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

export default Login;