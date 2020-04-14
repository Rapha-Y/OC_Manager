import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../resources/Colors';

import Fire from '../Fire';

export default class CreationListItem extends Component {
    state = {
        uid: this.props.uid,
        id: this.props.id,
        type: this.props.type
    }

    render() {
        switch(this.state.type) {
            case "character":
                return(
                    <View style={styles.item}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Character', {
                                title: Fire.shared.getCharacterName(this.state.id),
                                uid: this.state.uid,
                                cid: this.state.id
                            })}>
                            <View style={styles.iconSection}>
                                <Image 
                                    style={styles.image} 
                                    source={{uri: Fire.shared.getChararacterPic(this.state.id)}} 
                                />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.name}>{Fire.shared.getCharacterName(this.state.id)}</Text>
                    </View>
                );
            case "lore":
                return(
                    <View style={styles.item}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Lore')}>
                            <View style={styles.iconSection}>
                                <Icon 
                                    name="md-document" 
                                    color={Colors.darkGray} 
                                    size={80}
                                />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.name}>{Fire.shared.getLoreName(this.state.id)}</Text>
                    </View>
                );
            case "section":
                return(
                    <View style={styles.item}>
                        <TouchableOpacity 
                            onPress={() => this.props.navigation.push('Section', {
                                title: Fire.shared.getSectionName(this.state.id),
                                uid: this.state.uid,
                                sid: this.state.id
                            })}
                        >
                            <View style={styles.iconSection}>
                                <Icon 
                                    name="md-folder" 
                                    color={Colors.darkGray} 
                                    size={80}
                                />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.name}>{Fire.shared.getSectionName(this.state.id)}</Text>
                    </View>
                );
            default: 
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