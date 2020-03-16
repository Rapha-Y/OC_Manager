import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import Header from '../components/Header';
import Dropdown from '../components/Dropdown';
import Summary from '../components/Summary';
import CharSection from '../components/CharSection';

const characterInfo = {
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
            title: "Accesories",
            content: ["Literally nothing"]
        }
    ],
    story: [
        {
            title: "Past",
            content: "Frankly, at this points I don't care."
        },
        {
            title: "Present",
            content: "Lemme finish this stupid sample object, omg."
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

export default class Character extends Component {
    render() {
        return(
            <ScrollView style={{flex: 1}}>
                <Header name="Blitzcrank" />
                <Dropdown 
                    name="Summary" 
                    collapsed={false}
                    data={characterInfo.summary}
                />
                <Summary data={characterInfo.summary} />
                <Dropdown 
                    name="Traits" 
                    collapsed={false}
                    data={characterInfo.traits}
                />
                <CharSection data={characterInfo.traits} />
                <Dropdown 
                    name="Skills" 
                    collapsed={false}
                    data={characterInfo.skills}
                />
                <CharSection data={characterInfo.skills} />
                <Dropdown 
                    name="Appearance" 
                    collapsed={false}
                    data={characterInfo.appearance}
                />
                <CharSection data={characterInfo.appearance} />
                <Dropdown 
                    name="Story" 
                    collapsed={false}
                    data={characterInfo.story}
                />
                <Dropdown 
                    name="Relationships" 
                    collapsed={false}
                    data={characterInfo.relationships}
                />
                <CharSection data={characterInfo.relationships} />
            </ScrollView>
        );
    }
}