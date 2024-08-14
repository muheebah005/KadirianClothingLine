import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcomescreen from '../Screens/Welcomescreen';
import Loginscreen from '../Screens/Loginscreen';
import Signupscreen from '../Screens/Signupscreen';
import Productlistingscreen from '../Screens/Productlistingscreen';
import BottomTabNavigator from './BottomTabNavigator';
import ProductDetailOne from '../ProductDetails/ProductDetailOne';
import ProductDetailstwo from '../ProductDetails/ProductDetailstwo';
import ProductDetailsthree from '../ProductDetails/ProductDetailsthree';
import ProductDetailsfour from '../ProductDetails/ProductDetailsfour';
import ProductDetailsfive from '../ProductDetails/ProductDetailsfive';
import ProductDetailssix from '../ProductDetails/ProductDetailssix';
import Checkout from '../Screens/Checkout';
import ChangePassword from '../profile components/ChangePassword';
import EditProfile from '../profile components/EditProfile';
import Logout from '../profile components/Logout';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            headerShown: false,
         }}>
         <Stack.Screen name="Welcome" component={Welcomescreen}></Stack.Screen>
         <Stack.Screen name="Log in" component={Loginscreen}></Stack.Screen>
         <Stack.Screen name="Sign up" component={Signupscreen}></Stack.Screen>
         <Stack.Screen name="Bottom" component={BottomTabNavigator} />
         <Stack.Screen name="ProductDetailsOne" component={ProductDetailOne} />
         <Stack.Screen name="ProductDetailsTwo" component={ProductDetailstwo} />
         <Stack.Screen name="ProductDetailsThree" component={ProductDetailsthree} />
         <Stack.Screen name="ProductDetailsFour" component={ProductDetailsfour} />
         <Stack.Screen name="ProductDetailsFive" component={ProductDetailsfive} />
         <Stack.Screen name="ProductDetailSix" component={ProductDetailssix} />
         <Stack.Screen name="checkout" component={Checkout} />
         <Stack.Screen name="changePassword" component={ChangePassword} />
         <Stack.Screen name="editProfile" component={EditProfile} />
         <Stack.Screen name="logOut" component={Logout} />
      </Stack.Navigator>
   );
};

export default StackNavigator;
