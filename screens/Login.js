import React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from "../resources/Colors.js";
import Logo from "../components/Logo.js";
import UserInput from "../components/UserInput.js";
import UserSubmit from "../components/UserSubmit.js";

const Login = props => {
    return(
        <View style={styles.page}>
            <View style={styles.logoContainer}>
                <Logo size={120}/>
            </View>
            <View style={styles.inputContainer}>
                <UserInput placeholder="Username or E-mail"/>
                <UserInput placeholder="Password"/>
                <UserSubmit onSubmit={props.navigation} text="Log In"/>
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