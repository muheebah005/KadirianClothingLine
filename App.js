import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigator from './Navigation/StackNavigator';
import BottomTabNavigator from './Navigation/BottomTabNavigator';
import { CartProvider } from './ItemCard/CartContext';
import { CartContext } from './ItemCard/CartContext';
import Cartscreen from './Screens/Cartscreen';

const App = () => {
   return (
      <CartProvider>
         <NavigationContainer>
            <StackNavigator />
         </NavigationContainer>
      </CartProvider>
   );
};

export default App;
