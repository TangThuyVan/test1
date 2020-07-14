import React, { Component } from 'react';
import {Text,  View, StyleSheet} from 'react-native';
import { TextInput, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Search from './searchbar';

class Cart extends Component{
    static navigationOptions = {
        headerShown : false, 
    }
    constructor(props){
        super(props)
    }
    render(){
        const { navigation } = this.props;
        return(
            <View style={style.container}>
                <View style={style.header}>
                   <Search navigation={navigation}/>
                </View>
                <View style={style.content}>
                <FlatList style={style.list}/>
                </View>
                
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex: 1, 
        padding: 15,
        
    },
    header:{
        flexDirection: 'row',
    }
})

export default Cart;