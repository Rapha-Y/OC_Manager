import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../resources/Colors';

export default class Summary extends Component {
    render() {
        return(
            <View style={styles.content}>
                <View style={styles.textSection}>
                    <Text style={styles.name}>{this.props.data.name}</Text>
                    <Text style={styles.description}>{this.props.data.description}</Text>
                </View>
                <View style={styles.imageSection}>
                    <Image source={{uri: this.props.data.icon}} style={styles.avatar} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flexDirection: "row",
        padding: 12,
        backgroundColor: Colors.defaultGray,
        borderColor: Colors.defaultGray,
        borderBottomWidth: 2
    },
    textSection: {
        flex: 3,
        paddingRight: 12
    },
    name: {
        fontWeight: "bold",
        fontSize: 16
    },
    description: {
        paddingTop: 12,
        textAlign: "justify"
    },
    imageSection: {
        flex: 1,
        alignItems: "flex-end"
    }, 
    avatar: {
        width: 80, 
        height: 80,
        borderRadius: 10
    }
});