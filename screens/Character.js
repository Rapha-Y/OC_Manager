import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import CharDropdownContent from '../components/CharDropdownContent';
import Dropdown from '../components/Dropdown';
import Fire from '../Fire';

export default class Character extends Component {
    state = {
        uid: this.props.route.params.uid,
        cid: this.props.route.params.cid,
        dropdownList: Fire.shared.getCharDropdowns(this.props.route.params.cid)
    }

    render() {
        return(
            <View>
                <FlatList
                    data={this.state.dropdownList}
                    renderItem={({ item }) => 
                        <Dropdown
                            name={Fire.shared.getCharDropdownName(item)}
                            collapsed={false}
                            content={
                                <CharDropdownContent
                                    navigation={this.props.navigation}
                                    uid={this.state.uid}
                                    ssid={item}
                                />
                            }
                        />
                    }
                    keyExtractor={item => item}
                />
            </View>
        );
    }
}