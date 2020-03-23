import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../resources/Colors';

export default class CreationListItem extends Component {
    state = {
        type: this.props.type,
        content: this.props.content,
        navigation: this.props.navigation
    }

    render() {
        if(this.state.type === "character") {
            return(
                <View style={styles.item}>
                        <TouchableOpacity onPress={
                            () => this.state.navigation.navigate("Character", { 
                                data: this.state.content
                            })
                        }>
                        <View style={styles.iconSection}>
                            <Image 
                                source={{uri: this.state.content.summary.icon}} 
                                style={styles.image} 
                            />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.name}>{this.state.content.summary.name}</Text>
                </View>
            );
        } else if (this.state.type === "folder") {
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
                    <Text style={styles.name}>{this.state.content.name}</Text>
                </View>
            );
        } else if (this.state.type === "document") {
            return(
                <View style={styles.item}>
                    <TouchableOpacity onPress={() => Alert.alert("Doc")}>
                        <View style={styles.iconSection}>
                            <Icon 
                                name="md-document" 
                                color={Colors.darkGray} 
                                size={80}
                            />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.name}>{this.state.content.name}</Text>
                </View>
            );
        } else { //is filler
            return(
                <View style={styles.item}/>
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