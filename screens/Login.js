import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from "../resources/Colors.js";
import Logo from "../components/Logo.js";
import UserInput from "../components/UserInput.js";
import UserSubmit from "../components/UserSubmit.js";

const Login = props => {
    var tempData = [
        { id: 1, username: "Panko", email: "pinkiepie@gmail.com", password: "anniisstubborn" },
        { id: 2, username: "Kokojo", email: "kokokokojo@gmail.com", password: "anniisperfect" },
        { id: 3, username: "Akaichi", email: "idrawsmut@gmail.com", password: "anniislewd" }
    ]

    const [currentUserID, setCurrentUserID] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");

    const getUserIdentifier = (userIdentifier) => {
        setCurrentUserID(userIdentifier);
    }

    const getPassword = (password) => {
        setCurrentPassword(password);
    }

    const validateLogin = (navigationFunction) => {
        var userMatch = tempData.find(
            tempData => tempData.username === currentUserID || 
            tempData.email === currentUserID /*&& 
            tempData.password === currentPassword*/
        );
        
        if(userMatch === undefined) {
            alert("This account doesn't exist!");
        } else {
            if(userMatch.password !== currentPassword) {
                alert("Wrong password!");
            } else {
                navigationFunction("Blank");
            }
        }
    }

    return(
        <View style={styles.page}>
            <View style={styles.logoContainer}>
                <Logo size={120}/>
            </View>
            <View style={styles.inputContainer}>
                <UserInput fieldValue={(userIDValue) => {getUserIdentifier(userIDValue);}} placeholder="Username or E-mail"/>
                <UserInput fieldValue={(passwordValue) => {getPassword(passwordValue);}} placeholder="Password"/>
                <UserSubmit validateSubmit={() => {
                    validateLogin((pageName) => {props.navigation.navigate(pageName)});
                }} 
                text="Log In"/>
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