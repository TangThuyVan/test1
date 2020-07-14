import React, { Component } from 'react';
import {Text, ImageBackground, View, Button, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


class Home extends Component{
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
                <Text style={style.title}>Welcome to</Text>
                <Text style={style.name}>BOOKSTORE</Text>
                <FontAwesome name="arrow-right" size={30}
                    onPress={() => {navigation.navigate('Main');}}
                />
            </View>
        )
    }
}
const style = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 30,
    },
    name:{
        fontSize: 40,
        fontWeight: 'bold',
    }, 
    btn:{
        width: 100,
        height:45,
        borderRadius: 8,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9A2EFE',
    },
})
export default Home;