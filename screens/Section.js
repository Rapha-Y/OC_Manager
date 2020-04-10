import React, { Component } from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import Header from '../components/Header';
import Dropdown from '../components/Dropdown';
import CreationList from '../components/CreationList';

import Fire from '../Fire'

export default class Section extends Component {
    state = {
        navigation: this.props.navigation,
        uid: this.props.route.params.uid,
        sid: this.props.route.params.sid,
        //currently, the values below are arrays of objects, while they should be arrays of said object's ids
        //possible solution: map
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
                <ScrollView>
                    <Button title="TestChar" onPress={() => console.log(this.state.characters)}/>
                    <Button title="TestLore" onPress={() => console.log(this.state.lores)}/>
                    <Button title="TestSubsec" onPress={() => console.log(this.state.subsections)}/>
                    {/*<Dropdown 
                        hidden={this.isEmpty(this.state.characters)}
                        name="Characters"
                        collapsed={false}
                        content={
                            <CreationList 
                                data={this.state.characters}
                                dataType="character" 
                                navigation={this.state.navigation}
                            />
                        }
                    />
                    <Dropdown 
                        hidden={this.isEmpty(this.state.lores)}
                        name="Lores"
                        collapsed={false}
                        content={
                            <CreationList 
                                data={this.state.lores}
                                dataType="lore" 
                            />
                        }
                    />   
                    <Dropdown 
                        hidden={this.isEmpty(this.state.folders)}
                        name="Folders"
                        collapsed={false}
                        content={
                            <CreationList 
                                data={this.state.folders} 
                                dataType="folder"    
                            />
                        }
                    />    */}
                    </ScrollView>
            </View>
        );
    }
}