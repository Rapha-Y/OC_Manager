import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Header extends Component {
    render() {
        return(
            <View style={{
                flexDirection: "row", 
                alignItems: "center", 
                height: 50, 
                backgroundColor: "rgb(89, 47, 147)"
            }}>
                <View style={{flex: 1, alignItems: 'flex-start'}}>
                    <Icon name="md-arrow-back" size={30} color="white" style={{paddingLeft: 15}}></Icon>
                </View>
                <View style={{flex: 5, alignItems: 'center'}}>
                    <Text style={{color: "white", fontWeight: "bold", fontSize: 18}}>
                        {this.props.name}
                    </Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Icon name="md-share-alt" size={30} color="white" style={{paddingRight: 15}}></Icon>
                </View>
            </View>
        );
    }
}