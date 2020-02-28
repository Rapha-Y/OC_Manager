import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import Colors from "../resources/Colors.js";

const UserInput = props => {
    return(
        <View>
            <TextInput style={styles.inputField} placeholder={props.placeholder}></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    inputField: {
        backgroundColor: Colors.quaternaryColor,
        height: 50,
        width: "100%",
        marginBottom: 15,
        borderRadius: 50/2,
    },
});

export default UserInput;