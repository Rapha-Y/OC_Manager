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

    renderContent() {
        if(this.props.collapsed === false) {
            return(
                <View></View>
            );
        } else {
            return(
                <View/>
            );
        }
    }

    render() {
        return(
            <View>
                <TouchableOpacity>
                    <View style={styles.dropdown}>
                        <View style={{flex: 1, alignItems: "flex-start"}}>
                            <Text style={{fontSize: 16}}>{this.props.name}</Text>
                        </View>
                        <View style={{flex: 1, alignItems: "flex-end"}}>
                            {this.renderIcon()}
                        </View>
                    </View>
                </TouchableOpacity>
                {this.renderContent()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    dropdown: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: Colors.quaternaryColor
    },
    dropdownName: {
        
    },
    dropdownIcon: {
        flex: 1,
        alignItems: "flex-end",
    }
});