import React, {Component} from 'react';
import { 
    View, Text, TouchableOpacity, Image
} from 'react-native';


class HomeWork extends Component {
    
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
            <View style = {{flex: 1, backgroundColor: 'grey'}}>
               <View style = {{flex: 1, backgroundColor: 'lightgrey', justifyContent: 'center', alignItems:'center'}}>
                   <Text>Bạn Cảm Thấy Như Thế Nào?</Text>
               </View>
               <View style = {{flex: 1, backgroundColor: 'lightgrey', justifyContent: 'center', alignItems:'center'}}>
                    <Text>{this.state.randomnumber}</Text>
               </View>
               <View style = {{flex: 1, backgroundColor: 'lightgrey', justifyContent: 'center', alignItems:'center', flexDirection: 'row'}}>
                    <TouchableOpacity onPress = {()=>(this.clickMe())}>
                        <Image style = {{marginHorizontal: 5}} source = {{uri: '/Users/tientrannhut/Desktop/RN3/TNT190/images/imoji/angry.png', width: 50, height: 50}}/>
                    </TouchableOpacity>
                        <Image style = {{marginHorizontal: 5}} source = {{uri: '/Users/tientrannhut/Desktop/RN3/TNT190/images/imoji/care.png', width: 50, height: 50}}/>
                        <Image style = {{marginHorizontal: 5}} source = {{uri: '/Users/tientrannhut/Desktop/RN3/TNT190/images/imoji/haha.png', width: 50, height: 50}}/>
                        <Image style = {{marginHorizontal: 5}} source = {{uri: '/Users/tientrannhut/Desktop/RN3/TNT190/images/imoji/like.png', width: 50, height: 50}}/> 
                        <Image style = {{marginHorizontal: 5}} source = {{uri: '/Users/tientrannhut/Desktop/RN3/TNT190/images/imoji/sad.png', width: 50, height: 50}}/>
                        <Image style = {{marginHorizontal: 5}} source = {{uri: '/Users/tientrannhut/Desktop/RN3/TNT190/images/imoji/like.png', width: 50, height: 50}}/>   
               </View>
            </View>
        );
    }
}




export default HomeWork;