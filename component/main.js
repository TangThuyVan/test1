import React, { Component } from 'react';
import {Text,  View, StyleSheet} from 'react-native';
import { TextInput, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Search from './searchbar';
import Item from './item';

const listitem = [
    {key:"01", name: "Sherlock Holmes trọn bộ", author: "Sir Arthur Conan Doyle", price: "240000", image: "https://salt.tikicdn.com/cache/w390/ts/product/61/5e/d5/a63715be6bb3447e3ee6221f59f9d858.jpg"},
    {key:"02", name: "Chuyện con mèo dạy hải âu bay", author: "Luis Sepulveda", price: "36000", image: "https://salt.tikicdn.com/cache/w390/ts/product/a9/e4/f9/9a0900b2352c6d7a608e003146ccda7e.jpg"},
    {key:"03", name: "Nhà giả kim", author: "Paulo Coelho", price: "52000", image: "https://salt.tikicdn.com/cache/w390/ts/product/66/5f/5a/312bac222584d52fea5e9d644369b254.jpg"},
    {key:"04", name: "Tuổi trẻ đáng giá bao nhiêu?", author: "Rosie Nguyễn", price: "60000", image: "https://salt.tikicdn.com/cache/w390/ts/product/f8/34/c8/5fbf2a6f9d07b76d98e2fff2b29b0d3c.jpg"},
    {key:"05", name: "Mắt biếc", author: "Nguyễn Nhật Ánh", price: "53000", image: "https://salt.tikicdn.com/cache/w390/ts/product/2b/b1/b7/60031f112d30ed96bde76d40b5b263dc.jpg"},
    {key:"06", name: "Ông trăm tuổi trèo qua cửa sổ và biến mất", author: "Jonas Jonasson", price: "98000", image: "https://salt.tikicdn.com/cache/w390/ts/product/5f/62/71/26b6f3e1029bad38317073706098398c.jpg"},
    {key:"07", name: "Điều kỳ diệu của tiệm tạp hóa NAMIYA", author: "Higashino Keigo", price: "63000", image: "https://salt.tikicdn.com/cache/w390/ts/product/dd/49/7f/ab94b8b2e35c49fc38b063fae4e8266a.jpg"},
    {key:"08", name: "Án mạng mười một chữ", author: "Higashino Keigo", price: "88000", image: "https://salt.tikicdn.com/cache/w390/ts/product/32/2e/b7/fcd82c276d5e2a662ccadc1fb7e26cb4.jpg"},
    {key:"09", name: "Bố già", author: "Mario Puzo", price: "50000", image: "https://salt.tikicdn.com/cache/w80/ts/product/a6/39/ca/7eca66c10e5f99f14325733bf53aa425.jpg"},
    {key:"10", name: "Sự im lặng của bầy cừu", author: "Thomas Harris", price: "69000", image: "https://salt.tikicdn.com/cache/w390/ts/product/cd/2a/5b/926ca6c7b295c6e7cea39390efe08968.jpg"},
];

class Main extends Component{
    static navigationOptions = {
        headerShown : false, 
    }
    constructor(props){
        super(props)
        this.state = {
            loading: false,
            listitems: [],
            error: null            
        }
        
    }
    FlatListItemSeparator = () => {
        return (
          <View style={{height: 1, width: '100%', backgroundColor: 'black'}}/>
        );
    };
    render(){
        const { navigation } = this.props;
        const { item } = this.props;
        const { list } = this.state;
        const { updateSearch } = this.props;
        return(
            <View style={style.container}>
                <View style={style.header}>
                   <Search updateSearch={updateSearch} navigation={navigation}/>
                </View>
                <View style={style.content}>
                    <View style={style.titlecontent}>
                        <Text style={style.best}>Best Seller</Text>
                    </View>
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
    },
    list:{
        flexDirection:'column',
    },
    titlecontent:{
        padding: 20,
    },
    best:{
        fontSize: 25,
        fontWeight: 'bold',
        color: "#9A2EFE",
    }
})

export default Main;