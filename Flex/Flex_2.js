import React, {Component} from 'react';
import { 
    View, StyleSheet, Text, Image
} from 'react-native';

class Flex_2 extends Component {
    render(){
        return (
            <View style = {frame.container}>
                <View style = {frame.row}>
                    <View style = {frame.column}>
                        <Text style = {frame.number}>1</Text>
                    </View>
                    <View style = {frame.column}>
                        <Text style = {frame.number}>2</Text>
                        <Text style = {frame.text}>ABC</Text>
                        </View>
                    <View style = {frame.column}>
                        <Text style = {frame.number}>3</Text>
                        <Text style = {frame.text}>DEF</Text>
                    </View>
                </View>
                
                <View style = {frame.row}>
                    <View style = {frame.column}>
                        <Text style = {frame.number}>4</Text>
                        <Text style = {frame.text}>GHI</Text>
                    </View>
                    <View style = {frame.column}>
                        <Text style = {frame.number}>5</Text>
                        <Text style = {frame.text}>JKL</Text>
                        </View>
                    <View style = {frame.column}>
                        <Text style = {frame.number}>6</Text>
                        <Text style = {frame.text}>MNO</Text>
                    </View>
                </View>
                <View style = {frame.row}>
                    <View style = {frame.column}>
                        <Text style = {frame.number}>7</Text>
                        <Text style = {frame.text}>PQRS</Text>
                    </View>
                    <View style = {frame.column}>
                        <Text style = {frame.number}>8</Text>
                        <Text style = {frame.text}>TUV</Text>
                    </View>
                    <View style = {frame.column}>
                        <Text style = {frame.number}>9</Text>
                        <Text style = {frame.text}>XYZ</Text>
                    </View>
                </View>
                <View style = {frame.row}>
                    <View style = {{backgroundColor: 'lightgrey', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style = {frame.number}></Text>
                    </View>
                    <View style = {frame.column}>
                        <Text style = {frame.number}>0</Text>
                    </View>
                    <View style = {{backgroundColor: 'lightgrey', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Image style = {frame.image} source = {require('/Users/tientrannhut/Desktop/RN3/TNT190/images/del-icon.jpg')}>
                        </Image>
                    </View>
                </View>
            </View>
        );
    }
}

var frame = StyleSheet.create ({
    container: {
        backgroundColor: 'grey',
        flex: 1
    },
    row: {
        backgroundColor: 'lightgrey',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 0,
        borderColor: 'grey'
    },
    column: {
        backgroundColor: 'white',
        flex: 1,
        borderWidth: 1,
        borderColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center'
    },
    number: {
        fontSize: 50,
    },
    text: {
        fontSize: 30,
    }, 
    image: {
        height: 30,
        width: 40
    } 
});


export default Flex_2;