/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './component/home';
import Login from './component/login';
import Main from './component/main';
import Cart from './component/cart';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Thriller from './component/thriller';
import Psychology from './component/psychology';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './component/reducers/index';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
let store = createStore(allReducers);

const DrawerRoutes = () => {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={Main}/>
      <Drawer.Screen name="Thriller" component={Thriller}/>
      <Drawer.Screen name="Psychology" component={Psychology}/>
      <Drawer.Screen name="Cart" component={Cart}/>
    </Drawer.Navigator>  
  )
}

class App extends Component {
  static navigationOptions = {
    headerShown : false, 
  }
  render(){
    return(
      <>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Cart" component={Cart}/>
            <Stack.Screen name="Main" component={DrawerRoutes}/>
          </Stack.Navigator>  
        </NavigationContainer>
        
      </>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E2A9F3',
  }
});



export default App;
