import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import ProfileTabs from '../components/ProfileTabs';

export default class Profile extends Component {
    render() {
        return(
            <View style={{backgroundColor: "cyan", height: "100%"}}>
                <View style={{backgroundColor: "white"}}>
                    <Image 
                        source={{uri: "https://www.vainglorygame.com/wp-content/uploads/2016/12/Joule_Lore_Heistp3.jpg"}}
                        style={{width: "100%", height: 150}}
                    />
                    <Image
                        source={{uri: "https://brokenmyth.net/wp-content/uploads/image-140.png"}}
                        style={{
                            width: 80, 
                            height: 80, 
                            borderWidth: 2,
                            borderBottomWidth: 5,
                            borderColor: "white",
                            borderRadius: 10,
                            left: "3%",
                            top: -70,
                            marginBottom: -70,
                        }}
                    />
                </View>
                <View style={{backgroundColor: "white", padding: 12}}>
                    <Text style={{fontSize: 18, fontWeight: "bold"}}>
                        Joule
                    </Text>
                    <Text style={{fontWeight: "bold", color: "gray"}}>
                        #ComingThrough
                    </Text>
                    <Text style={{paddingTop: 12}}>
                        What? You’ve never seen a street kid riding a top secret military grade walking death machine before? You must live in a hole.
                    </Text>
                    <View style={{flexDirection: "row", paddingTop: 12, paddingBottom: 2}}>
                        <Text style={{fontWeight: "bold"}}>5</Text>
                        <Text> OCs</Text>
                        <Text style={{paddingLeft: 12, fontWeight: "bold"}}>12</Text>
                        <Text> Pages</Text>
                        <Text style={{paddingLeft: 12, fontWeight: "bold"}}>150K</Text>
                        <Text> Followers</Text>
                    </View>
                </View>
                <ProfileTabs></ProfileTabs>
            </View>
        );
    }
}