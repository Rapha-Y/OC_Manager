import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import colors from "../resources/colors.js";

const Login = props => {
    return(
        <View style={styles.page}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={{uri: "https://i.imgur.com/KAYzQw1.png"}}/>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputField} placeholder="Username or E-mail"></TextInput>
                <TextInput style={styles.inputField} placeholder="Password"></TextInput>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Log in
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondaryColor,

        flex: 1,
        alignItems: "center",
    },

    logoContainer: {
        marginVertical: "15%",
    },
    inputContainer: {
        width: "90%",
    },

    logo: {
        height: 130,
        width: 130,
        borderRadius: 130/2,
    },
    inputField: {
        backgroundColor: colors.quaternaryColor,
        height: 50,
        width: "100%",
        marginBottom: 15,
        borderRadius: 50/2,
    },
    button: {
        backgroundColor: colors.tertiaryColor,
        height: 50,
        width: "100%",
        marginBottom: 15,
        borderRadius: 50/2,

        alignItems: "center",
        justifyContent: "center",
    },

    buttonText: {
        color: colors.quaternaryColor,
    },
});

export default Login;