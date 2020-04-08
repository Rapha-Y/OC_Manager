import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ProfileTabs from '../components/ProfileTabs';
import Colors from '../resources/Colors';
import NumShortener from '../resources/NumShortener';
import Fire from '../Fire';

const userInfo = {
    cover: "https://www.vainglorygame.com/wp-content/uploads/2016/12/Joule_Lore_Heistp3.jpg",
    avatar: "https://brokenmyth.net/wp-content/uploads/image-140.png",
    username: "Joule",
    tag: "#ComingThrough",
    description: "What? You’ve never seen a street kid riding a top secret military grade walking death machine before? You must live in a hole.",
    characters: 5,
    followers: 12,
    likes: 150000
}

export default class Profile extends Component {
    state = {
        uid: this.props.route.params.uid,

        username: Fire.shared.getUsername(this.props.route.params.uid),
        usertag: Fire.shared.getUsertag(this.props.route.params.uid),
        avatar: Fire.shared.getAvatar(this.props.route.params.uid),
        cover: Fire.shared.getCover(this.props.route.params.uid),
        description: Fire.shared.getDescription(this.props.route.params.uid),

        characterNumber: Fire.shared.countCharacters(this.props.route.params.uid),
        followerNumber: Fire.shared.countFollowers(this.props.route.params.uid)
    }

    render() {
        return(
            <View style={styles.wrapper}>
                <View style={styles.body}>
                    <Image 
                        source={{uri: this.state.cover}}
                        style={styles.cover}
                    />
                    <Image
                        source={{uri: this.state.avatar}}
                        style={styles.avatar}
                    />
                </View>
                <View style={styles.summary}>
                    <Text style={styles.username}>
                        {this.state.username}
                    </Text>
                    <Text style={styles.tag}>
                        @{this.state.usertag}
                    </Text>
                    <Text style={styles.description}>
                        {this.state.description}
                    </Text>
                    <View style={styles.stats}>
                        <Text style={styles.firstStat}>{NumShortener(this.state.characterNumber)}</Text>
                        <Text> Characters</Text>
                        <Text style={styles.stat}>{NumShortener(this.state.followerNumber)}</Text>
                        <Text> Followers</Text>
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
        color: Colors.darkGray
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