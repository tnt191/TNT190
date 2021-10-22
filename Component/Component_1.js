import React, {Component} from 'react';
import { 
    View, StyleSheet, Text
} from 'react-native';


class Component_1 extends Component {
    render(){
        return(
            <View style = {{padding: 15, backgroundColor: 'green'}}>
                <Text style = {{fontSize: 20}}>Component - Tran Nhut Tien - Green</Text>
                <Square/>
                <Text style = {{fontSize: 30}}>{this.props.customername} Birth of Date {this.props.bod}</Text>
            </View>
        );
    }
}

Component_1.propType = {
    customername: React.propTypes = 'string',
    bod: React.propTypes = 'string'
}


class Square extends Component {
    render(){
        return(
            <View style = {container.frame}></View>
        );
    }
}

var container = StyleSheet.create({
    frame: {
        backgroundColor: 'yellow',
        width: 100,
        height: 100,
        borderWidth: 1
    }
});
export default Component_1;