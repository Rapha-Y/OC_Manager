import React, { Component } from 'react';
import { View } from 'react-native';
import Dropdown from '../components/Dropdown';
import CreationList from '../components/CreationList';

import Fire from '../Fire'

export default class Section extends Component {
    state = {
        navigation: this.props.navigation,
        uid: this.props.route.params.uid,
        sid: this.props.route.params.sid,
        characters: Fire.shared.getSectionCharacters(this.props.route.params.sid),
        lores: Fire.shared.getSectionLores(this.props.route.params.sid),
        subsections: Fire.shared.getSubsections(this.props.route.params.sid)
    }

    isEmpty(section) {
        if(section.length == 0) {
            return true;
        }
        return false;
    }
    
    render() {
        return(
            <View style={{marginBottom: 100}}>
                <Dropdown
                    hidden={this.isEmpty(this.state.characters)}
                    name="Characters"
                    collapsed={false}
                    content={
                        <CreationList 
                            navigation={this.props.navigation}
                            data={this.state.characters}
                            dataType="character"
                        />
                    }
                />
                <Dropdown
                    hidden={this.isEmpty(this.state.lores)}
                    name="Lores"
                    collapsed={false}
                    content={
                        <CreationList 
                            navigation={this.props.navigation}
                            data={this.state.lores}
                            dataType="lore"
                        />
                    }
                />
                <Dropdown
                    hidden={this.isEmpty(this.state.subsections)}
                    name="Sections"
                    collapsed={false}
                    content={
                        <CreationList 
                            navigation={this.props.navigation}
                            data={this.state.subsections}
                            dataType="section"
                        />
                    }
                />
            </View>
        );
    }
}