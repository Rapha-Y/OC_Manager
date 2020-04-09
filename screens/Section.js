import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Header from '../components/Header';
import Dropdown from '../components/Dropdown';
import CreationList from '../components/CreationList';

export default class Section extends Component {
    state = {
        navigation: this.props.navigation,
        characters: this.props.characters,
        lores: this.props.lores,
        folders: this.props.folders
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
                {/*<ScrollView>
                    <Dropdown 
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
                    />    
                    </ScrollView>*/}
            </View>
        );
    }
}