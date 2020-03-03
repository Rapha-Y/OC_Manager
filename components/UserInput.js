import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import Colors from "../resources/Colors.js";

export default class UserInput extends Component {
    state = {
        value: ""
    };

    render() {
        return(
            <View>
                <TextInput 
                    autoCapitalize={this.props.autoCapitalize}
                    keyboardType={this.props.keyboardType}
                    onChangeText={
                        value => {
                            this.setState({ value });
                            this.props.getValue(value);
                        }
                    }
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    style={styles.inputField}
                    value={this.state.value} 
                />
            </View>
        );
    }
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