import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../resources/Colors';

export default class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.name,
            content: this.props.content,
            collapsed: this.props.collapsed
        }
    }

    switchCollapsedState() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    renderContent() {
        if(this.props.collapsed === false) {
            return(
                <View>
                    {this.props.content}
                </View>
            );
        } else {
            return(
                <View></View>
            )
        }
    }

    render() {
        if(this.state.collapsed) {
            return (
                <View>
                    <TouchableOpacity onPress={() => {this.switchCollapsedState()}}>
                        <View style={styles.dropdown}>
                            <View style={styles.nameSection}>
                                <Text style={styles.title}>{this.state.title}</Text>
                            </View>
                            <View style={styles.iconSection}>
                                <Icon name="md-arrow-dropdown" size={18} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <View>
                    <TouchableOpacity onPress={() => {this.switchCollapsedState()}}>
                        <View style={styles.dropdown}>
                            <View style={styles.nameSection}>
                                <Text style={styles.title}>{this.state.title}</Text>
                            </View>
                            <View style={styles.iconSection}>
                                <Icon name="md-arrow-dropup" size={18} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    {this.state.content}
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    dropdown: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        backgroundColor: Colors.white,
        borderColor: Colors.defaultGray,
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