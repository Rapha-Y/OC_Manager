import React, { Component } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Colors from '../resources/Colors';

import DropdownContentItem from '../components/DropdownContentItem';

import Fire from '../Fire';

export default class CharDropdownContent extends Component {
    state = {
        uid: this.props.uid,
        ssid: this.props.ssid,
        //itemList: Fire.shared.getCharDropdownItems(this.props.ssid),
        //display: Fire.shared.getCharDropdownDisplay(this.props.ssid)
    }
    
    render() {
        return(
            <View/>
            /*<View style={styles.wrapper}>
                <FlatList
                    data={this.state.itemList}
                    renderItem={({ item }) => 
                        <DropdownContentItem 
                            navigation={this.props.navigation}
                            uid={this.state.uid}
                            iid={item}
                            display={this.state.display}
                        />
                    }
                    keyExtractor={item => item}
                />
            </View>*/
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