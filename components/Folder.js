import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Header from '../components/Header';
import Dropdown from '../components/Dropdown';
import CreationList from './CreationList';

export default class Folder extends Component {
    state = {
        folders: this.props.data.filter(function (elem) {
            return elem.type == "folder"
        }),
        characters: this.props.data.filter(function (elem) {
            return elem.type == "character"
        }),
        documents: this.props.data.filter(function (elem) {
            return elem.type == "document"
        })
    }
    
    render() {
        return(
            <ScrollView>
                <Header name={this.props.name}/>
                <Dropdown 
                    name="Characters"
                    collapsed={false}
                    content={
                        <CreationList data={this.state.characters} />
                    }
                />
                <Dropdown 
                    name="Documents"
                    collapsed={true}
                    content={
                        <CreationList data={this.state.documents} />
                    }
                />   
                <Dropdown 
                    name="Folders"
                    collapsed={true}
                    content={
                        <CreationList data={this.state.folders} />
                    }
                />     
            </ScrollView>
        );
    }
}