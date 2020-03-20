import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import Colors from '../resources/Colors';

export default class Folder extends Component {
    state = {
        folders: this.props.data.filter(function (elem) {
            return elem.type == "folder"
        }),
        characters: this.props.data.filter(function (elem) {
            return elem.type == "character"
        }),
        documents: this.props.data.filter(function (elem) {
            return elem.type == "document"
        })
    }

    renderItem(item) {
        if(item.type === "character") {
            return(
                <View style={styles.item}>
                    <TouchableOpacity onPress={() => Alert.alert("Char")}>
                        <View style={styles.iconSection}>
                            <Image 
                                source={{uri: item.content.summary.icon}} 
                                style={styles.image} 
                            />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.name}>{item.content.summary.name}</Text>
                </View>
            );
        } else if (item.type === "folder") {
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
                    <Text style={styles.name}>{item.content.name}</Text>
                </View>
            );
        } else if(item.type === "document") {
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
                    <Text style={styles.name}>{item.content.name}</Text>
                </View>
            );
        } else {
            return(
                <View>
                    <Text>Add something like an error here.</Text>
                </View>
            );
        }
    }
    
    render() {
        return(
            <View>
                <Header name={this.props.name}/>
                <FlatList
                    horizontal={true}
                    data={this.state.folders}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => this.renderItem(item)}
                />
                <FlatList
                    horizontal={true}
                    data={this.state.characters}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => this.renderItem(item)}
                />
                <FlatList
                    horizontal={true}
                    data={this.state.documents}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => this.renderItem(item)}
                />
            </View>
        );
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
        borderWidth: 2,
        borderColor: "blue",
        width: 84,
        height: 84,
        alignItems: "center"
    },
    image: {
        alignSelf: "center",
        height: 80,
        width: 80,
        borderRadius: 10,
    }
});