import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Colors from "../resources/Colors";

export default class UserSubmit extends Component {
    render() {
        return(
            <View>
                <TouchableOpacity onPress={() => this.props.submit()} style={styles.button}>
                    <Text style={styles.buttonText}>
                        {this.props.text}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.purple,
        height: 50,
        width: "100%",
        marginBottom: 15,
        borderRadius: 10,

        alignItems: "center",
        justifyContent: "center",
    },

    buttonText: {
        color: Colors.white,
    },
});