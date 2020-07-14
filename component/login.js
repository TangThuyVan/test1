import React, { Component } from 'react';
import {Text,  View, StyleSheet} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import Ionicon from 'react-native-vector-icons/Ionicons';

const loginInfo = {username: 'customer', password: '123'}

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    render(){
        const { navigation } = this.props;
        
        return(
            <View style={style.container}>
                <View style={style.header}>
                    <Text style={style.title}>Let's join with us</Text>
                </View>
                <View style={style.contents}>
                   <View style={style.textbox}>
                        <TextInput 
                            style={style.textinput}
                            placeholder='Username'
                            value={this.state.username}
                            onChangeText={(username) => this.setState({username})}/>                       
                   </View>
                   <View style={style.textbox}>
                   <TextInput 
                            style={style.textinput}
                            placeholder='Password'
                            textContentType='password'
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={(password) => this.setState({password})}/>
                   </View>
                   <TouchableOpacity style={style.button}
                                    onPress={this.presslogin}>
                        <Text style={style.buttontext}>LOGIN</Text>
                   </TouchableOpacity>
                   <FontAwesome.Button
                        name='facebook'
                        backgroundColor='#0B0B61'
                        style={style.btnface}>
                        <Text style={style.fbtext}>Login with Facebook</Text>
                    </FontAwesome.Button>
                    <View style={{marginBottom: 20}}/>
                    <FontAwesome.Button
                        name='envelope'
                        backgroundColor='#CB2103'
                        style={style.btngmail}>
                        <Text style={style.gmtext}>Login with Google</Text>
                    </FontAwesome.Button>
                </View>
            </View>
        )
    }
}

presslogin = async() => {
    if(loginInfo.username === this.state.username && loginInfo.password === this.state.password)
    {
        this.props.navigation.navigate('Main');
    }
    else
    {
        alert("Username or Password isn't correct");
    }
}

const style = StyleSheet.create({
    container:{
        flex: 1, 
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header:{
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    contents:{
        flex: 7,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textbox:{
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 20,
    },
    textinput:{
        width: 280,
        height: 45,
    },
    button:{
        width: 300,
        height:45,
        borderRadius: 8,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9A2EFE',
    },
    buttontext:{
        fontSize: 20,
        color: 'white',
    },
    btnface:{
        width: 300,
        height: 45,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fbtext:{
        fontSize: 18,
        color: 'white',
    },
    btngmail:{
        width: 300,
        height: 45,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gmtext:{
        fontSize: 18,
        color: 'white',
    },
})

export default Login;