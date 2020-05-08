import React, { Component } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Colors from '../resources/Colors';

import DropdownContentItem from '../components/DropdownContentItem';

export default class CharDropdownContent extends Component {
    state = {
        uid: this.props.uid,
        ssid: this.props.ssid,

        display: this.props.display,
        itemList: this.props.itemList //attributes: id, name, charItemList
    }
    
    render() {
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
                            content={item.charItemList}
                        />
                    }
                    keyExtractor={item => item.id}
                />
            </View>
        );
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