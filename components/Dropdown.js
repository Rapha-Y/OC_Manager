import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../resources/Colors';

export default class Dropdown extends Component {
    renderIcon() {
        if(this.props.collapsed === false) {
            return(
                <Icon name="md-arrow-dropup" size={18} />
            );
        } else {
            return(
                <Icon name="md-arrow-dropdown" size={18} />
            );
        }
    }

    render() {
        return(
            <View>
                <TouchableOpacity>
                    <View style={styles.dropdown}>
                        <View style={styles.nameSection}>
                            <Text style={styles.title}>{this.props.name}</Text>
                        </View>
                        <View style={styles.iconSection}>
                            {this.renderIcon()}
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    dropdown: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        backgroundColor: Colors.quaternaryColor,
        borderColor: Colors.gray,
        borderBottomWidth: 1
    },
    nameSection: {
        flex: 1, 
        alignItems: "flex-start"
    },
    title: {
        fontSize: 16,
    },
    iconSection: {
        flex: 1, 
        alignItems: "flex-end"
    },
    dropdownIcon: {
        flex: 1,
        alignItems: "flex-end",
    }
});