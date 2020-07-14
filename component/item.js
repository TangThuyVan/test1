import React, { Component } from 'react';
import {Text,  View, StyleSheet,Image} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


class Item extends Component{
    constructor(props){
        super(props)
    }
    render(){
      //  const { item } = this.props;
      const { navigation } = this.props;
        return(
            <View style={style.containeritem}>
                <View style={style.container}>
                    <Image style={style.image}
                        source={{uri:this.props.item.image}}
                    />
                    <View style={style.body}>
                        <Text style={style.name}>{this.props.item.name}</Text>
                        <Text style={style.author}>{this.props.item.author}</Text>
                        <Text style={style.price}>{this.props.item.price}</Text>
                    </View>
                    <TouchableOpacity onPress={() => {navigation.navigate('Cart');}}>
                        <FontAwesome name="shopping-cart" 
                                    size={30} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex: 1, 
        flexDirection: 'row',
        shadowOffset: {width:0, height:0},
        shadowColor: '#fff',
        shadowRadius: 0.3,
    },
    image:{
        width: 70,
        height: 80,
    },
    body:{
        flex: 1,
        paddingHorizontal: 10,
    },
    containeritem:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    name:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    author:{
        fontSize: 17,
        fontWeight: 'normal',
    },
    price:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    
})

export default Item;