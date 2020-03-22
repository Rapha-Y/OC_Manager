import React, { Component } from 'react';
import { View } from 'react-native';
import Folder from '../components/Folder';

var info = [
    {
        type: "character",
        content: {
            summary: {
                name: "Blitzcrank",
                description: "An enormous, near-indestructible steam golem originally built to dispose of hazardous waste in Zaun. Evolved beyond his primary purpose, Blitzcrank selflessly uses his strength and durability to protect others.",
                icon: "https://vignette.wikia.nocookie.net/leagueoflegends/images/a/ac/Blitzcrank_OriginalSquare.png/revision/latest/scale-to-width-down/340?cb=20150402215457"
            },
            traits: [
                {
                    title: "Aliases",
                    content: ["Hooker", "Heart Attack"]
                },
                {
                    title: "Personality",
                    content: ["Virtuous and protective, secretly murderous"]
                },
                {
                    title: "Goals",
                    content: ["Clean Zaun", "Clean botlane"]
                },
                {
                    title: "Occupations",
                    content: ["Support", "Disruptor"]
                },
                {
                    title: "Hobbies",
                    content: ["Warding"]
                },
                {
                    title: "Likes",
                    content: ["Hitting the target"]
                },
                {
                    title: "Dislikes",
                    content: ["Not hitting the target"]
                }
            ],
            skills: [
                {
                    title: "Strengths",
                    content: ["Tilting players"]
                },
                {
                    title: "Weaknesses",
                    content: ["Full reliance on Q"]
                }
            ],
            appearance: [
                {
                    title: "Body type",
                    content: ["Round and sturdy"]
                },
                {
                    title: "Skin",
                    content: ["Metallic"]
                },
                {
                    title: "Hair",
                    content: ["None"]
                },
                {
                    title: "Eyes",
                    content: ["Glowing"]
                },
                {
                    title: "Voice",
                    content: ["Robotic"]
                },
                {
                    title: "Style",
                    content: ["Does not compute"]
                },
                {
                    title: "Vests",
                    content: ["Air (Torso)", "Air (Legs)"]
                },
                {
                    title: "Accessories",
                    content: ["Literally nothing"]
                }
            ],
            story: [
                {
                    title: "Past",
                    content: "My name is Yoshikage Kira. I'm 33 years old. My house is in the northeast section of Morioh, where all the villas are, and I am not married. I work as an employee for the Kame Yu department stores, and I get home every day by 8 PM at the latest. I don't smoke, but I occasionally drink.\n\nI'm in bed by 11 PM, and make sure I get eight hours of sleep, no matter what. After having a glass of warm milk and doing about twenty minutes of stretches before going to bed, I usually have no problems sleeping until morning. Just like a baby, I wake up without any fatigue or stress in the morning. I was told there were no issues at my last check-up.\n\nI'm trying to explain that I'm a person who wishes to live a very quiet life. I take care not to trouble myself with any enemies, like winning and losing, that would cause me to lose sleep at night. That is how I deal with society, and I know that is what brings me happiness. Although, if I were to fight I wouldn't lose to anyone."
                },
                {
                    title: "Present",
                    content: "What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet?\n\nThink again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands.\n\nNot only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it.\n\nYou’re fucking dead, kiddo."
                }
            ],
            relationships: [
                {
                    title: "Friends",
                    content: ["Thresh (Work Colleague)", "Nautilus (Work Colleague)", "Pyke (Work Colleague)"]
                },
                {
                    title: "Family",
                    content: ["Viktor (Father-ish)"]
                },
                {
                    title: "Foes",
                    content: ["Adcs having fun"]
                }
            ]
        }
    },
    {
        type: "folder",
        content: {
            name: "Subfolder"
        }
    },
    {
        type: "character",
        content: {
            summary: {
                name: "Sonichu",
                description: "sample",
                icon: "https://pbs.twimg.com/profile_images/639842251082825728/N-ZQHwzY_400x400.png"
            },
            traits: [],
            skills: [],
            appearance: [],
            story: [],
            relationships: []
        }
    },
    {
        type: "character",
        content: {
            summary: {
                name: "Dolan",
                description: "sample",
                icon: "https://pbs.twimg.com/profile_images/2803808885/8313551029d68061c490069f3d07cf38.png"
            },
            traits: [],
            skills: [],
            appearance: [],
            story: [],
            relationships: []
        }
    },
    {
        type: "folder",
        content: {
            name: "Folderina"
        }
    },
    {
        type: "folder",
        content: {
            name: "Folderino"
        }
    },
    {
        type: "folder",
        content: {
            name: "Folderine"
        }
    },
    {
        type: "folder",
        content: {
            name: "Bob"
        }
    },
    {
        type: "folder",
        content: {
            name: "Foldasse"
        }
    },
    {
        type: "document",
        content: {
            name: "Jugemu",
            text: "Jugemu jugemu,\ngoko no surikire,\nkaijari suigyo no suigyomatsu,\nunraimatsu, furaimatsu,\nku neru tokoro ni sumu tokoro,\nyabura koji no bura koji,\npaipo paipo, paipo no shuringan,\nshuringan no gurindai, gurindai no\nponpokopi no ponpokona no, chokyumei no\nchosuke."
        }
    }
]

export default class Creations extends Component {
    state = {
        navigation: this.props.navigation
    }

    render() {
        return(
            <View>
                <Folder 
                    navigation={this.state.navigation}
                    name="My Creations"
                    data={info}
                />
            </View>
        );
    }
}