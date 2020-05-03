import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Fire from '../Fire';

import Loader from '../components/Loader';

/*class Content extends Component {
    state = {
        text: this.props.text
    }
    
    render() {
        return (
            <View>
                <Text style={styles.content}>{this.state.text}</Text>
            </View>
        );
    }
}*/

export default class DropdownContentItem extends Component {
    state = {
        uid: this.props.uid,
        iid: this.props.iid,
        display: this.props.display,
        name: this.props.name,
        
        /*title: Fire.shared.getListItemTitle(this.props.iid),
        content: Fire.shared.getListItemContent(this.props.iid)*/
    }

    /*getPosition(item) {
        return (item.position).toString();
    }*/

    /*getText(item) {
        return item.text;
    }*/

    render() {
        if(this.state.display == 'row') {
            return (
                <View style={styles.horiSection}>
                    <View style={styles.horiTitleSection}>
                        <Text style={styles.title}>
                            {this.state.name}:
                        </Text>
                    </View>
                    <View style={styles.horiContentSection}>
                        <Loader/>
                        {/*<FlatList
                            data={this.state.content}
                            renderItem={({ item }) =>
                                <Content
                                    navigation={this.props.navigation} 
                                    text={this.getText(item)}
                                />
                            }
                            keyExtractor={item => this.getPosition(item)}
                        />*/}
                    </View>
                </View>
            );
        } else { //then it's supposed to be 'column', maybe another if could help with error handling
            return (
                <View style={styles.vertiSection}>
                    <View style={styles.vertiTitleSection}>
                        <Text style={styles.title}>
                            {this.state.name}:
                        </Text>
                    </View>
                    <Loader/>
                    {/*<FlatList
                        data={this.state.content}
                        renderItem={({ item }) =>
                            <Content
                                navigation={this.props.navigation} 
                                text={this.getText(item)}
                            />
                        }
                        keyExtractor={item => this.getPosition(item)}
                    />*/}
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    horiSection: {
        paddingBottom: 6,
        flexDirection: "row"
    },
    vertiSection: {
        paddingBottom: 6,
        flexDirection: "column"
    },
    horiTitleSection: {
        flex: 1
    },
    vertiTitleSection: {
        paddingBottom: 12
    },
    title: {
        fontWeight: "bold",
        fontSize: 15
    },
    horiContentSection: {
        flex: 2
    },
    content: {
        fontSize: 15
    }
});