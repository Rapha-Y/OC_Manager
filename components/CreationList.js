import React, { Component } from 'react';
import { FlatList } from 'react-native-gesture-handler';

import CreationListItem from '../components/CreationListItem';

export default class CreationList extends Component {
    state = {
        uid: this.props.uid,
        data: this.props.data,
    }

    render() {
        return(
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => 
                    <CreationListItem 
                        navigation={this.props.navigation} 
                        uid={this.state.uid}
                        id={item.id} 
                        avatar={item.avatar}
                        name={item.name}
                        type={item.type} 
                    />
                }
                keyExtractor={ item => item.key }
                numColumns={3}
            />
        )
    }
}