import React, { Component } from 'react';
import {Text,  View, StyleSheet, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements';

class Search extends Component{
    static navigationOptions = {
        headerShown : false, 
    }
    constructor(props){
        super(props)
        this.state = {
            search: "",
            data: [],
            dataBackup: [],
        }
    }
    
    setSearchText = (event) => {
        let searchText = event.nativeEvent.text;
        let data = this.state.dataBackup;
        searchText = searchText.trim().toLowerCase();
        data = data.filter(long => {
        return long.nama.toLowerCase().match( searchText );
       });
       this.setState({
        data : data
        });
       }
    render() {
       // console.log(this.props)
        const { navigation } = this.props;
        const { updateSearch } = this.props;
        return(
            <View style={style.container}>
                <TouchableOpacity onPress={() => {navigation.openDrawer();}}>
                    <FontAwesome name="bars" size={30} />
                </TouchableOpacity>
                <View style={style.searchbar}>
                    <FontAwesome name="search" size={20}/>
                    <TextInput placeholder="Search" style={style.input}
                        value={this.state.search}
                        onChange={this.setSearchText}
                    />
                </View>
                <View>
                    <FontAwesome name="shopping-cart" size={30}/>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    searchbar:{
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        paddingHorizontal: 10,
        marginHorizontal: 12,
        flex: 1,
    },
    input:{
        fontSize: 18,
        marginLeft: 10,
        paddingVertical: 5,
    }
})

export default Search;