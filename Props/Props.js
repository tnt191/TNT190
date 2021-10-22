import React, {Component} from 'react';
import { 
    View, StyleSheet, Text
} from 'react-native';


class Props_1 extends Component {
    render(){
        return(
            <View style = {{padding: 15, backgroundColor: 'red'}}>
                <Text> Props - Tran Nhut Tien - Red</Text>
                <KhachHang fullname = "Tran Nhut Tien"/>
                <KhachHang fullname = "Tran Nhut Tien"/>
            </View>
        );
    }
}



class KhachHang extends Component {
    render(){
        return(
            <View style = {{backgroundColor: 'yellow', padding: 20}}>
                <Text style = {{fontSize: 50}}>{this.props.fullname}</Text>
            </View>
        )
    }
}


export default Props_1;