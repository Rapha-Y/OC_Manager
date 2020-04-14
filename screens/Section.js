import React, { Component } from 'react';
import CreationList from '../components/CreationList';

import Fire from '../Fire'

export default class Section extends Component {    
    state = {
        uid: this.props.route.params.uid,
        sid: this.props.route.params.sid,
        characters: Fire.shared.getSectionCharacters(this.props.route.params.sid),
        lores: Fire.shared.getSectionLores(this.props.route.params.sid),
        subsections: Fire.shared.getSubsections(this.props.route.params.sid)
    }

    //could make use of a filter to order content by type, date, name, etc
    getContentArray() {
        var i = 0;
        var charArray = this.state.characters.map(function(cid) {
            i++;
            return {
                key: i.toString(),
                id: cid,
                type: "character"
            };
        });
        var loreArray = this.state.lores.map(function (cid) {
            i++;
            return {
                key: i.toString(),
                id: cid,
                type: "lore"
            };
        });
        var subsecArray = this.state.subsections.map(function (sid) {
            i++;
            return {
                key: i.toString(),
                id: sid,
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
                type: "filler"
            });
            fillerNumber--;
        }
        return contentArray;
    }
    
    render() {
        return(
            <CreationList 
                navigation={this.props.navigation} 
                uid={this.state.uid} 
                data={this.getContentArray()} 
            />
        );
    }
}