import React, {Component} from 'react';
import { View, StyleSheet} from 'react-native';

class Flex extends Component {
    render(){
        return (
            <View style = {ao.bao}>
                <View style = {ao.teo}></View>
                <View style = {ao.ti}></View>
                <View style = {ao.tun}></View>
            </View>
        );
    }
}

var ao = StyleSheet.create({
    bao: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'row'
    },
    teo: {
        backgroundColor: 'red',
        flex:5/3
    },
    ti: {
        backgroundColor: 'yellow',
        flex:1
    },
    tun: {
        backgroundColor: 'green',
        flex:1
    }
});


export default Flex;