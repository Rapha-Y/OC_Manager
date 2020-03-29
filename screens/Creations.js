import React, { Component } from 'react';
import { View, Button } from 'react-native';

import Fire from '../Fire';

import Folder from '../components/Folder';

export default class Creations extends Component {
    state = {
        navigation: this.props.navigation,
        root: this.getRoot("55b800d1-a2ed-4747-95bf-d40892f27e1c")
    }

    getRoot(rootId) {
        const root = Fire.shared.getRootFolder(rootId);
        return root;
    }

    render() {
        return(
            <View>
                <Folder 
                    navigation={this.state.navigation}
                    name={this.state.root.name}
                    characters={this.state.root.characters}
                    lores={this.state.root.lores}
                    folders={this.state.root.folders}
                    data={[]}
                />
            </View>
        );
    }
}