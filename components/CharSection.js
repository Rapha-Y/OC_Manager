import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../resources/Colors';

export default class CharSection extends Component {
    render() {
        return(
            <View style={styles.wrapper}>
                {this.props.data.map((item, key) => (
                    <View key={key} style={styles.section}>
                        <View style={styles.titleSection}>
                            <Text style={styles.title}>{item.title + ":"}</Text>
                        </View>
                        <View style={styles.contentSection}>
                            {item.content.map((subItem, subKey) => (
                                <Text key={subKey} style={styles.content}>{subItem}</Text>
                            ))}
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
        paddingBottom: 6,
        backgroundColor: Colors.gray,
        borderColor: Colors.gray,
        borderBottomWidth: 2,
    },
    section: {
        paddingBottom: 6,
        flexDirection: "row"
    },
    titleSection: {
        flex: 1
    },
    title: {
        fontWeight: "bold",
        fontSize: 15
    },
    contentSection: {
        flex: 2
    },
    content: {
        fontSize: 15
    }
});