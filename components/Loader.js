import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default class Loader extends Component {
    render() {
        return(
            <View style={styles.wrapper}>
                <ActivityIndicator size="large"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});