import React, { Component } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Colors from '../resources/Colors';

import DropdownContentItem from '../components/DropdownContentItem';
import Loader from '../components/Loader';

import Fire from '../Fire';

export default class CharDropdownContent extends Component {
    state = {
        uid: this.props.uid,
        ssid: this.props.ssid,

        display: this.props.display,
        itemList: null //id, name
    }

    async componentDidMount() {
        const itemList = await Fire.shared.getCharDropdownItems(this.state.ssid);
        this.setState({ itemList });
    }
    
    render() {
        if(this.state.itemList == null) {
            return(
                <Loader/>
            );
        } else {
            return(
                <View style={styles.wrapper}>
                    <FlatList
                        data={this.state.itemList}
                        renderItem={({ item }) => 
                            <DropdownContentItem 
                                navigation={this.props.navigation}
                                uid={this.state.uid}
                                iid={item.id}
                                name={item.name}
                                display={this.state.display}
                            />
                        }
                        keyExtractor={item => item.id}
                    />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 12,
        paddingBottom: 6,
        backgroundColor: Colors.defaultGray,
        borderColor: Colors.defaultGray,
        borderBottomWidth: 2,
    }
});