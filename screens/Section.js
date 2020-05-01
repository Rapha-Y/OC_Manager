import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CreationList from '../components/CreationList';

import Fire from '../Fire'

export default class Section extends Component {    
    state = {
        uid: this.props.route.params.uid,
        sid: this.props.route.params.sid,

        characters: null, //{cid, avatar, name}
        lores: null, //{lid, name}
        subsections: null //{sid, name}
    }

    async componentDidMount() {
        if(this.state.sid != null) {
            const characters = await Fire.shared.getSectionCharacters(this.state.sid);
            const lores = await Fire.shared.getSectionLores(this.state.sid);
            const subsections = await Fire.shared.getSubsections(this.state.sid);
            this.setState({ characters });
            this.setState({ lores });
            this.setState({ subsections });
        }
    }

    //could make use of a filter to order content by type, date, name, etc
    getContentArray() {
        var i = 0;
        var charArray = this.state.characters.map(function(char) {
            i++;
            return {
                key: i.toString(),
                id: char.cid,
                avatar: char.avatar,
                name: char.name,
                type: "character"
            };
        });
        var loreArray = this.state.lores.map(function (lore) {
            i++;
            return {
                key: i.toString(),
                id: lore.lid,
                avatar: null,
                name: lore.name,
                type: "lore"
            };
        });
        var subsecArray = this.state.subsections.map(function (sec) {
            i++;
            return {
                key: i.toString(),
                id: sec.sid,
                avatar: null,
                name: sec.name,
                type: "section"
            };
        });
        var contentArray = subsecArray.concat(charArray,loreArray);
        var fillerNumber = 3-contentArray.length%3;
        while(fillerNumber != 0) {
            i++;
            contentArray = contentArray.concat({
                key: i.toString(),
                id: null,
                avatar: null,
                name: null,
                type: "filler"
            });
            fillerNumber--;
        }
        return contentArray;
    }
    
    render() {
        if(this.state.sid == null 
        || this.state.characters == null 
        || this.state.lores == null
        || this.state.subsections == null) {
            return(
                <View>
                    <Text>Loading... (Please pretty me up)</Text>
                </View>
            );
        } else {
            return(
                <CreationList 
                    navigation={this.props.navigation} 
                    uid={this.state.uid} 
                    data={this.getContentArray()} 
                />
            );
        }
    }
}