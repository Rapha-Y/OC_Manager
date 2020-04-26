import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ProfileTabs from '../components/ProfileTabs';
import Colors from '../resources/Colors';
import NumShortener from '../resources/NumShortener';
import Fire from '../Fire';

export default class Profile extends Component {
    state = {
        uid: this.props.route.params.uid,
        userData: null, 
        /*username: Fire.shared.getUsername(this.props.route.params.uid),
        usertag: Fire.shared.getUsertag(this.props.route.params.uid),
        avatar: Fire.shared.getAvatar(this.props.route.params.uid),
        cover: Fire.shared.getCover(this.props.route.params.uid),
        description: Fire.shared.getDescription(this.props.route.params.uid),*/

        characterNumber: 0, //Fire.shared.countCharacters(this.props.route.params.uid),
        followerNumber: 0 //Fire.shared.countFollowers(this.props.route.params.uid)
    }

    async componentDidMount() {
        const userData = await Fire.shared.getUserData(this.props.route.params.uid);
        this.setState({ userData });
    }

    render() {
        if(this.state.userData == null) {
            return(
                <View>
                    <Text>Loading... (Please pretty me up)</Text>
                </View>
            );
        } else {
            return(
                /*<View>
                    <Text>{this.state.username}</Text>
                </View>*/
                <View style={styles.wrapper}>
                    <View style={styles.body}>
                        <Image 
                            source={{uri: this.state.userData.cover}}
                            style={styles.cover}
                        />
                        <Image
                            source={{uri: this.state.userData.avatar}}
                            style={styles.avatar}
                        />
                    </View>
                    <View style={styles.summary}>
                        <Text style={styles.username}>
                            {this.state.userData.username}
                        </Text>
                        <Text style={styles.tag}>
                            @{this.state.userData.usertag}
                        </Text>
                        <Text style={styles.description}>
                            {this.state.userData.description}
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