import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import CreationListItem from '../components/CreationListItem';
import { FlatList } from 'react-native-gesture-handler';

export default class CreationList extends Component {
    state = {
        navigation: this.props.navigation,
        data: this.props.data,
        dataType: this.props.dataType
        //data: this.breakData(this.props.data, 3)
    }

    /*
    //separates the data into rows, limited by the number of columns
    breakData(data, colNum) {
        var brokenData = [];

        var j = 0;
        var innerList = [];
        
        //for every element of the array, push an element into a line
        //at the limit, push a row into the array
        for(var i=0;i<data.length;i++) {
            if(j == 0) {
                innerList = [];
                innerList.push(data[i]);
                j++;
            } else if(j < colNum-1) {
                innerList.push(data[i]);
                j++;
            } else {
                innerList.push(data[i]);
                brokenData.push(innerList);
                j = 0;
            }
        }
        //if the last row hasn't been pushed yet, fill the blank spaces and push it
        if(data.length%colNum != 0) {
            /*while(j < colNum) {
                innerList.push({
                    type: "filler",
                    content: {}
                });
                j++;
            }*//*
            brokenData.push(innerList);
        }

        return brokenData;
    }*/

    render() {
        return(
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => 
                    <View>
                        <Text>
                            { item }
                        </Text>
                    </View>
                }
                keyExtractor={ item => item.id }
            />
        )
    }

    /*render() {
        return(
            <View style={styles.wrapper}>
                {this.state.data.map((item, key) => (
                    <View key={key} style={styles.row}>
                        {item.map((subItem, subKey) => (
                            <CreationListItem
                                navigation={this.state.navigation}
                                key={subKey}
                                dataType={this.props.dataType}
                                itemId={subItem}
                            />
                        ))}
                    </View>
                ))}
            </View>
        );
    }*/
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 5
    },
    row: {
        flexDirection: "row"
    }
});