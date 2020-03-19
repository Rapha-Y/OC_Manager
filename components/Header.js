import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../resources/Colors';

export default class Header extends Component {
    render() {
        return(
            <View style={styles.wrapper}>
                <View style={styles.backSection}>
                    <TouchableOpacity 
                        onPress={
                            () => {Alert.alert("Back", "I'm supposed to take you back")}
                        }
                    >
                        <Icon name="md-arrow-back" size={30} color="white" style={styles.backIcon}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.titleSection}>
                    <Text style={styles.title}>
                        {this.props.name}
                    </Text>
                </View>
                <View style={styles.moreSection}>
                    <TouchableOpacity
                        onPress={
                            () => {Alert.alert("More", "I'm supposed to have important options")}
                        }
                    >
                        <Icon name="md-more" size={30} color="white" style={styles.moreIcon}></Icon>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row", 
        alignItems: "center", 
        height: 50, 
        backgroundColor: Colors.purple
    },
    backSection: {
        flex: 1, 
        alignItems: 'flex-start',
        height: "100%",
        justifyContent: "center",
    },
    backIcon: {
        padding: 10,
        paddingHorizontal: 15
    },
    titleSection: {
        flex: 5, 
        alignItems: 'center',
        height: "100%",
        justifyContent: "center"
    },
    title: {
        color: "white", 
        fontWeight: "bold", 
        fontSize: 18
    },
    moreSection: {
        flex: 1, 
        alignItems: 'flex-end',
        height: "100%",
        justifyContent: "center"
    },
    moreIcon: {
        padding: 10,
        paddingHorizontal: 20
    }
});