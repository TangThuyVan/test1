import React, { Component } from 'react';
import {Text,  View, StyleSheet} from 'react-native';
import { TextInput, TouchableOpacity,FlatList } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Search from './searchbar';
import Item from './item';

const listitem = [
    {key:"01", name: "Căn nhà tối giản", author: "Joshua Becker", price: "104000", image: "https://salt.tikicdn.com/cache/w390/ts/product/d7/c1/5f/cb5c59f2a7f88c11286a1f3c7155fc25.jpg"},
    {key:"02", name: "Tâm lý học đám đông", author: "Gustave Le Bon", price: "103000", image: "https://salt.tikicdn.com/cache/w390/ts/product/2b/ea/59/f1c7b09f3c76378f5ac67d6ab5312ef2.jpg"},
    {key:"03", name: "Tâm lý học hài hước", author: "Richard Wiseman", price: "60000", image: "https://salt.tikicdn.com/cache/w390/ts/product/3e/b2/fc/e670e57f7ec3e102048f380ddbc5093c.jpg"},
    {key:"04", name: "Tâm lý học tiến hóa", author: "Dylan Evans", price: "48000", image: "https://salt.tikicdn.com/cache/w390/ts/product/91/96/15/446a68340307ca2f583c0ab23a0e8022.jpg"},
    {key:"05", name: "Tội Phạm - Đọc Vị Và Ứng Phó (Tập 1)", author: "Đào Trung Hiếu", price: "69000", image: "https://salt.tikicdn.com/cache/w390/ts/product/54/10/6a/39cc2655c478a979a62eff984e7c94d5.jpg"},
];

class Psychology extends Component{
    static navigationOptions = {
        headerShown : false, 
    }
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

export default Psychology;