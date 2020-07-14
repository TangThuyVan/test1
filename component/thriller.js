import React, { Component } from 'react';
import {Text,  View, StyleSheet} from 'react-native';
import { TextInput, TouchableOpacity,FlatList } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Search from './searchbar';
import Item from './item';

const listitem = [
    {key:"01", name: "Sherlock Holmes trọn bộ", author: "Sir Arthur Conan Doyle", price: "240000", image: "https://salt.tikicdn.com/cache/w390/ts/product/61/5e/d5/a63715be6bb3447e3ee6221f59f9d858.jpg"},
    {key:"02", name: "Phía sau nghi can X", author: "Higashino Keigo", price: "98000", image: "https://salt.tikicdn.com/cache/w390/ts/product/f2/dd/dd/4f9471b0d8263f277fb532c72b633697.jpg"},
    {key:"03", name: "Kẻ dọn rác", author: "Nhiều tác giả", price: "145000", image: "https://salt.tikicdn.com/cache/w390/ts/product/69/51/1f/3e741928bba3afb49d9cc30c5089f439.jpg"},
    {key:"04", name: "Án Mạng Trên Chuyến Tàu Tốc Hành Phương Đông", author: "Agatha Christie", price: "110000", image: "https://salt.tikicdn.com/cache/w390/ts/product/f5/38/3f/6ce388fc1314314a69d4b87d6fb4bffa.jpg"},
    {key:"05", name: "Cô Gái Trong Sương Mù", author: "Donato Carrisi", price: "128000", image: "https://salt.tikicdn.com/cache/w390/ts/product/58/68/ce/865107115108b42a46ff545c12d1aca1.jpg"},
];

class Thriller extends Component{
    constructor(props){
        super(props)
    }
    FlatListItemSeparator = () => {
        return (
          <View style={{height: 1, width: '100%', backgroundColor: 'black'}}/>
        );
    };
    render(){
        const { navigation } = this.props;
        return(
            <View style={style.container}>
                <View style={style.header}>
                   <Search navigation={navigation}/>
                </View>
                <View style={style.content}>
                    <FlatList style={style.list}
                        data={listitem} 
                        ItemSeparatorComponent={this.FlatListItemSeparator}
                        renderItem={({item,index}) => {
                            return(<Item item={item}
                                         index={index} 
                                         navigation={navigation}
                                    />)
                        }}
                    />
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

export default Thriller;