import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

import Fire from '../Fire';

import Content from '../components/Content';
import Loader from '../components/Loader';


export default class DropdownContentItem extends Component {
    state = {
        uid: this.props.uid,
        iid: this.props.iid,
        display: this.props.display,
        name: this.props.name,
        
        content: null //name, link, id
    }

    async componentDidMount() {
        const content = await Fire.shared.getListItemContent(this.props.iid);
        this.setState({ content });
    }

    render() {
        if(this.state.content == null) {
            return (
                <Loader/>
            );
        } else {
            if(this.state.display == 'row') {
                return (
                    <View style={styles.horiSection}>
                        <View style={styles.horiTitleSection}>
                            <Text style={styles.title}>
                                {this.state.name}:
                            </Text>
                        </View>
                        <View style={styles.horiContentSection}>
                            <FlatList
                                data={this.state.content}
                                renderItem={({ item }) =>
                                    <Content
                                        uid={this.state.uid}
                                        navigation={this.props.navigation} 
                                        text={item.name}
                                        link={item.link}
                                        id={item.id}
                                    />
                                }
                                keyExtractor={item => item.id}
                            />
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
                        <FlatList
                            data={this.state.content}
                            renderItem={({ item }) =>
                                <Content
                                    uid={this.state.uid}
                                    navigation={this.props.navigation} 
                                    text={item.name}
                                    link={item.link}
                                    id={item.id}
                                />
                            }
                            keyExtractor={item => item.id}
                        />
                    </View>
                );
            }
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
});