import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../resources/Colors';

export default class Story extends Component {
    render() {
        return(
            <View style={styles.wrapper}>
                {this.props.data.map((item, key) => (
                    <View key={key} style={styles.section}>
                        <View style={styles.titleSection}>
                            <Text style={styles.title}>{item.title + ":"}</Text>
                        </View>
                        <View style={styles.contentSection}>
                            <Text style={styles.content}>{item.content}</Text>
                        </View>
                    </View>
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 12,
        paddingBottom: 0,
        backgroundColor: Colors.defaultGray,
        borderColor: Colors.defaultGray,
        borderBottomWidth: 2
    },
    section: {
        paddingBottom: 12
    },
    titleSection: {
        paddingBottom: 12
    },
    title: {
        fontWeight: "bold",
        fontSize: 15
    },
    content: {
        fontSize: 15
    }
});