import React from 'react';
import { Image, View } from 'react-native';

const Logo = props => {
    return(
        <View>
            <Image 
                style={{
                    height: props.size, 
                    width: props.size, 
                    borderRadius: props.size/2
                }} 
                source={{uri: "https://i.imgur.com/KAYzQw1.png"}}
            />
        </View>
    );
}

export default Logo;