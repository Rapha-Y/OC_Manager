import React, { Component } from 'react';
import { Image, View } from 'react-native';

export default class Logo extends Component {
    render() {
        return(
            <View>
                <Image 
                    style={{
                        height: this.props.size, 
                        width: this.props.size, 
                        borderRadius: this.props.size/2
                    }} 
                    source={{uri: "https://i.imgur.com/KAYzQw1.png"}}
                />
            </View>
        );
    }
}