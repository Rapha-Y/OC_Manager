import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ProfileTabs from '../components/ProfileTabs';
import Header from '../components/Header';
import Colors from '../resources/Colors';
import NumShortener from '../resources/NumShortener';

const userInfo = {
    cover: "https://www.vainglorygame.com/wp-content/uploads/2016/12/Joule_Lore_Heistp3.jpg",
    avatar: "https://brokenmyth.net/wp-content/uploads/image-140.png",
    username: "Joule",
    tag: "#ComingThrough",
    description: "What? You’ve never seen a street kid riding a top secret military grade walking death machine before? You must live in a hole.",
    characters: 5,
    followers: 12,
    likes: 1000
}

export default class Profile extends Component {
    render() {
        return(
            <View style={styles.wrapper}>
                <Header name="Profile"></Header>
                <View style={styles.body}>
                    <Image 
                        source={{uri: userInfo.cover}}
                        style={styles.cover}
                    />
                    <Image
                        source={{uri: userInfo.avatar}}
                        style={styles.avatar}
                    />
                </View>
                <View style={styles.summary}>
                    <Text style={styles.username}>
                        {userInfo.username}
                    </Text>
                    <Text style={styles.tag}>
                        {userInfo.tag}
                    </Text>
                    <Text style={styles.description}>
                        {userInfo.description}
                    </Text>
                    <View style={styles.stats}>
                        <Text style={styles.firstStat}>{NumShortener(userInfo.characters)}</Text>
                        <Text> OCs</Text>
                        <Text style={styles.stat}>{NumShortener(userInfo.followers)}</Text>
                        <Text> Followers</Text>
                        <Text style={styles.stat}>{NumShortener(userInfo.likes)}</Text>
                        <Text> Likes</Text>
                    </View>
                </View>
                <ProfileTabs/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: "100%"
    },
    body: {
        backgroundColor: Colors.white
    },
    cover: {
        width: "100%", 
        height: 150
    },
    avatar: {     
        width: 80, 
        height: 80, 
        borderWidth: 2,
        borderBottomWidth: 5,
        borderColor: Colors.white,
        borderRadius: 10,
        left: "3%",
        top: -70,
        marginBottom: -70,
    },
    summary: {
        backgroundColor: Colors.white, 
        padding: 12
    },
    username: {
        fontSize: 18, 
        fontWeight: "bold"
    },
    tag: {
        fontWeight: "bold",
        color: "rgb(141, 141, 142)"
    },
    description: {
        paddingTop: 12
    },
    stats: {
        flexDirection: "row", 
        paddingTop: 12, 
        paddingBottom: 2
    },
    firstStat: {
        fontWeight: "bold"
    },
    stat: {
        fontWeight: "bold",
        paddingLeft: 12
    }
});