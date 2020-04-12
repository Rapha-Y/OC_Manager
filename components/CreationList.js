import React, { Component } from 'react';
import { FlatList } from 'react-native-gesture-handler';

import CreationListItem from '../components/CreationListItem';

export default class CreationList extends Component {
    state = {
        data: this.props.data,
    }

    render() {
        return(
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => 
                    <CreationListItem navigation={this.props.navigation} id={item.id} type={item.type} />
                }
                keyExtractor={ item => item.key }
                numColumns={3}
            />
        )
    }
}