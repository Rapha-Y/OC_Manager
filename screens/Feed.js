import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

import CharSummary from '../components/CharSummary';
import Colors from '../resources/Colors';

import Fire from '../Fire';

export default class Feed extends Component {
    state = {
        uid: this.props.route.params.uid,
        charList: []
    }

    async componentDidMount() {
        const charList = await Fire.shared.getAllCharacters(this.props.route.params.uid);
        this.setState({ charList });
    }

    renderSeparator = () => {
        return(
            <View
                style={styles.itemSeparator}
            />  
        );
    }

    render() {
        return(
            <FlatList
                data={this.state.charList}
                renderItem={({ item }) =>
                    <View>
                        <Text>{item}</Text>
                    </View> 
                    /*
                    <CharSummary 
                        navigation={this.props.navigation}
                        uid={this.state.uid}
                        cid={item}        
                    />
                    */
                }
                keyExtractor={item => item}
                ItemSeparatorComponent={ this.renderSeparator }
            />
        );
    } 
}

const styles = StyleSheet.create({
    itemSeparator: {
        height: 8,
        width: "100%",
        backgroundColor: Colors.defaultGray
    }
});