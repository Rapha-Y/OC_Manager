import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../resources/Colors';

import Fire from '../Fire';

export default class CreationListItem extends Component {
    state = {
        data: this.getData(this.props.dataType, this.props.itemId),
        navigation: this.props.navigation
    }

    getData(dataType, itemId) {
        if(dataType == "character") {
            return Fire.shared.getCharacter(itemId);
        } else if (dataType == "lore") {
            return Fire.shared.getLore(itemId);
        } else if (dataType == "folder") {
            console.log(Fire.shared.getFolder(itemId));
            return Fire.shared.getFolder(itemId);
        } else {
            return [];
        }
    }

    render() {
        if(this.props.dataType === "character") {
            return(
                <View style={styles.item}>
                        <TouchableOpacity onPress={
                            () => this.state.navigation.navigate("Character", { 
                                cid: this.state.data.cid
                            })
                        }>
                        <View style={styles.iconSection}>
                            <Image 
                                source={{uri: this.state.data.picture}} 
                                style={styles.image} 
                            />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.name}>{this.state.data.name}</Text>
                </View>
            );
        } else if (this.props.dataType === "folder") {
            return(
                <View style={styles.item}>
                    <TouchableOpacity onPress={() => Alert.alert("Folder")}>
                        <View style={styles.iconSection}>
                            <Icon 
                                name="md-folder" 
                                color={Colors.darkGray} 
                                size={80}
                            />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.name}>{this.state.data.name}</Text>
                </View>
            );
        } else if (this.props.dataType === "lore") {
            return(
                <View style={styles.item}>
                    <TouchableOpacity onPress={() => Alert.alert("Lore")}>
                        <View style={styles.iconSection}>
                            <Icon 
                                name="md-document" 
                                color={Colors.darkGray} 
                                size={80}
                            />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.name}>{this.state.data.name}</Text>
                </View>
            );
        } else { //is filler
            return(
                <View style={styles.item}>
                    <Text>Am filler</Text>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    item: {
        alignItems: "center",
        backgroundColor: Colors.defaultGray,
        flex: 1,
        paddingTop: 5,
        paddingHorizontal: 5
    },
    iconSection: {
        width: 84,
        height: 84,
        alignItems: "center"
    },
    image: {
        alignSelf: "center",
        height: 80,
        width: 80,
        borderWidth: 2,
        borderColor: Colors.white,
        borderRadius: 10,
    }
});