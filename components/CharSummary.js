import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../resources/Colors';

import Fire from '../Fire';

export default class CharSummary extends Component {
    state = {
        uid: this.props.uid,
        cid: this.props.charInfo.cid,
        name: this.props.charInfo.name,
        avatar: this.props.charInfo.avatar,
        description: this.props.charInfo.description
    }

    render() {
        return (
            <TouchableOpacity onPress={() => {this.props.navigation.navigate("Character", {
                title: this.state.name,
                uid: this.state.uid,
                cid: this.state.cid
            })}}>
                <View style={styles.content}>
                    <View style={styles.imageSection}>
                        <Image source={{uri: this.state.avatar}} style={styles.avatar} />
                    </View>
                    <View style={styles.textSection}>
                        <Text style={styles.name}>{this.state.name}</Text>
                        <Text style={styles.description}>{this.state.description}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flexDirection: "row",
        padding: 12,
        backgroundColor: Colors.white,
        borderColor: Colors.defaultGray
    },
    textSection: {
        flex: 3,
        paddingLeft: 12
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
        //alignItems: "flex-end"
    }, 
    avatar: {
        width: 80, 
        height: 80,
        borderRadius: 40
    }
});