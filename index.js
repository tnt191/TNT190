/**
 * @format
 */

import React, { Component } from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
//import Flex from './Flex/Flex.js';
//import Flex_2 from './Flex/Flex_2.js';
import Component_1 from './Component/Component_1.js';
import Props_1 from './Props/Props.js';
import Touchable_State from './Touchable_State/Touchable_State.js';
import HomeWork from './Touchable_State/HomeWork.js'




class IvanTran_3446 extends Component {
    render(){
        return(
            <View style = {ao.bao}>
                <View style = {{padding:15}}>
                    <Text style = {ao.text}>Tran Nhut Tien - index.js</Text>
                    <Component_1 customername = 'Tien - PropType from Component_1 - Green' bod = '1984'/>
                    <Props_1/>
                </View>
            </View>
        );
    }
}

var ao = StyleSheet.create({
    bao: {
        backgroundColor: 'lightgrey',
        flex: 1,
        flexDirection: 'row',
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'red',
        fontSize: 20,
    }
})

AppRegistry.registerComponent(appName, () => HomeWork);