import {
   StyleSheet,
   Text,
   View,
   TextInput,
   TouchableWithoutFeedback,
   Keyboard,
   ScrollView,
   TouchableOpacity,
   FlatList,
} from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import CardComponent from './CardComponent';
import ProductCard from '../ItemCard/ProductCard';
import ProductCardtwo from '../ItemCard/ProductCardtwo';
import ProductCardthree from '../ItemCard/ProductCardthree';
import ProductCardfour from '../ItemCard/ProductCardfour';
import ProductCardfive from '../ItemCard/ProductCardfive';
import ProductCardSix from '../ItemCard/ProductCardSix';
import { useNavigation } from '@react-navigation/native';

const Productlistingscreen = () => {
   const navigation = useNavigation();

   const handleCart = () => {
      navigation.navigate('my cart');
   };

   return (
      <TouchableWithoutFeedback
         onPress={() => {
            Keyboard.dismiss();
         }}>
         <ScrollView>
            <View style={styles.container}>
               <View style={styles.secondContainer}>
                  {/* <View>
                     <Ionicons name="menu" size={26} color={'purple'} />
                  </View> */}

                  <TouchableOpacity onPress={handleCart}>
                     <Ionicons name="bag" size={26} color={'purple'} />
                  </TouchableOpacity>
               </View>
               <View>
                  <Text style={styles.headerText}>"Find Your Style Match!"</Text>
               </View>
               <CardComponent />
               <View style={styles.productCard}>
                  <ProductCard />
                  <ProductCardtwo />
               </View>
               <View style={styles.productCard}>
                  <ProductCardthree />
                  <ProductCardfour />
               </View>
               <View style={styles.productCard}>
                  <ProductCardfive />
                  <ProductCardSix />
               </View>
            </View>
         </ScrollView>
      </TouchableWithoutFeedback>
   );
};

export default Productlistingscreen;

const styles = StyleSheet.create({
   container: {
      // flex: 1,
      backgroundColor: 'white',
   },
   secondContainer: {
      // flexDirection: 'row',
      marginTop: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
      paddingLeft: 345,
   },

   headerText: {
      fontSize: 35,
      paddingTop: 20,
      marginLeft: 10,
      fontFamily: 'Avenir-Light',
      fontWeight: 'bold',
      color: 'purple',
   },

   productCard: {
      flexDirection: 'row',
   },
});
