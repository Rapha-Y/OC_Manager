import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Colors from "../resources/Colors.js";

const UserSubmit = props => {
    return(
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    {props.text}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.tertiaryColor,
        height: 50,
        width: "100%",
        marginBottom: 15,
        borderRadius: 50/2,

        alignItems: "center",
        justifyContent: "center",
    },

    buttonText: {
        color: Colors.quaternaryColor,
    },
});

export default UserSubmit;