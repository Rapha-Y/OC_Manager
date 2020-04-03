import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from "../resources/Colors";

export default class UserInput extends Component {
    state = {
        value: "",
    };

    render() {
        if(this.props.icon != "none") {
            return(
                <View style={styles.wrapper}>
                    <Icon name={this.props.icon} size={20} color={Colors.darkGray} style={styles.icon}/>
                    <TextInput 
                        autoCapitalize={this.props.autoCapitalize}
                        keyboardType={this.props.keyboardType}
                        onChangeText={
                            value => {
                                this.setState({ value });
                                this.props.getValue(value);
                                this.props.getError(value);
                            }
                        }
                        placeholder={this.props.placeholder}
                        secureTextEntry={this.props.secureTextEntry}
                        style={styles.inputField}
                        value={this.state.value}

                        ref={this.props.reference}
                        onSubmitEditing={this.props.onSubmitEditing}
                        blurOnSubmit={this.blurOnSubmit}
                    />
                </View>
            );
        } else {
            return(
                <View style={styles.wrapper}>
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

                        ref={this.props.reference}
                        onSubmitEditing={this.props.onSubmitEditing}
                        blurOnSubmit={this.blurOnSubmit}
                    />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.purple
    },
    icon: {
        padding: 5
    },
    inputField: {
        width: "100%"
    },
});