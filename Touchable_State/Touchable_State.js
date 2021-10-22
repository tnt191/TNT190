import React, {Component} from 'react';
import { 
    View, Text, TouchableOpacity
} from 'react-native';


class Touchable_State extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            randomnumber: 999
        }
    }
    clickMe(){
        this.setState({
            randomnumber: this.state.randomnumber +1,
        });
    }

    resetMe(){
        this.setState({
            randomnumber: this.state.randomnumber = '999'
        });
    }


    render(){
        return(
            <View>
                <View style = {{backgroundColor: 'lightgrey'}}>
                    <Text style = {{marginTop: 100, marginLeft: 20, color: "red", fontSize: 25}}>Touchable Opacity</Text>
                    <TouchableOpacity onPress = {()=>(this.clickMe)}>
                        <View style = {{justifyContent: 'center', alignItems: 'center',backgroundColor: 'green', height: 50, width: 200, marginTop: 50, marginBottom: 50, marginLeft: 20}}>
                        <Text style = {{fontSize: 20, color: 'white'}}> Click on me babe</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {{backgroundColor: 'grey'}}>
                    <Text style = {{marginTop: 20, marginLeft: 20, color: "red", fontSize: 25}}>State</Text>
                    <Text style = {{marginTop: 20, marginLeft: 20, color: "gold", fontSize: 25}}>Auto number - {this.state.randomnumber}</Text>
                    <TouchableOpacity onPress = {()=>(this.clickMe())}>
                        <View style = {{alignItems: 'center',justifyContent: 'center',backgroundColor: 'blue', height: 50, width: 200, marginBottom: 20, marginTop: 20, marginLeft: 20}}>
                            <Text style = {{fontSize: 20, color: 'white'}}>Change Number</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>(this.resetMe())}>
                        <View style = {{alignItems: 'center',justifyContent: 'center',backgroundColor: 'lightblue', height: 50, width: 200, marginBottom: 20, marginTop: 20, marginLeft: 20}}>
                            <Text style = {{fontSize: 20, color: 'white'}}>Reset Number</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}




export default Touchable_State;