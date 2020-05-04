import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Content extends Component {
    state = {
        uid: this.props.uid,
        id: this.props.id,
        text: this.props.text,
        link: this.props.link
    }
    
    render() {
        return (
            <View>
                <Text style={styles.content}>{this.state.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        fontSize: 15
    }
});