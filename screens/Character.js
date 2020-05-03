import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import Loader from '../components/Loader';
import CharDropdownContent from '../components/CharDropdownContent';
import Dropdown from '../components/Dropdown';
import Fire from '../Fire';

export default class Character extends Component {
    state = {
        uid: this.props.route.params.uid,
        cid: this.props.route.params.cid,
        dropdownList: null //Fire.shared.getCharDropdowns(this.props.route.params.cid)
    }

    async componentDidMount() {
        const dropdownList = await Fire.shared.getCharDropdowns(this.state.cid);
        this.setState({ dropdownList });
    }

    render() {
        if(this.state.dropdownList == null) {
            return(
                <Loader/>
            );
        } else {
            return(
                <View>
                    <FlatList
                        data={this.state.dropdownList}
                        renderItem={({ item }) => 
                            <Dropdown
                                name={item.name}
                                collapsed={false}
                                content={
                                    <CharDropdownContent
                                        navigation={this.props.navigation}
                                        uid={this.state.uid}
                                        ssid={item.id}
                                        display={item.display}
                                    />
                                }
                            />
                        }
                        keyExtractor={item => item.id}
                    />
                </View>
            );
        }
    }
}