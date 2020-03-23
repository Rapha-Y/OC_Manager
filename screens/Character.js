import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Header from '../components/Header';
import Dropdown from '../components/Dropdown';
import Summary from '../components/Summary';
import CharSection from '../components/CharSection';
import Story from '../components/Story';

export default class Character extends Component {
    state = {
        data: this.props.route.params.data
    }

    render() {
        return(
            <ScrollView style={{flex: 1}}>
                <Header name={this.state.data.summary.name} />
                <Dropdown 
                    name="Summary" 
                    collapsed={false}
                    content={
                        <Summary data={this.state.data.summary} />
                    }
                />
                <Dropdown 
                    name="Traits" 
                    collapsed={true}
                    content={
                        <CharSection data={this.state.data.traits} />
                    }
                />
                <Dropdown 
                    name="Skills" 
                    collapsed={true}
                    content={
                        <CharSection data={this.state.data.skills} />
                    }
                />
                <Dropdown 
                    name="Appearance" 
                    collapsed={true}
                    content={
                        <CharSection data={this.state.data.appearance} />
                    }
                />
                <Dropdown 
                    name="Story" 
                    collapsed={true}
                    content={
                        <Story data={this.state.data.story} />
                    }
                />
                <Dropdown 
                    name="Relationships" 
                    collapsed={true}
                    content={
                        <CharSection data={this.state.data.relationships} />
                    }
                />
            </ScrollView>
        );
    }
}