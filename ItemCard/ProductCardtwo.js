import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CartContext } from './CartContext';

const ProductCardtwo = ({ existingOnPress }) => {
   const navigation = useNavigation();
   const [isLiked, setIsLiked] = useState(false);
   const { addToCart } = useContext(CartContext);

   const product = {
      id: 2,
      name: 'Selena',
      price: 50.32,
      image: require('../assets/images/gown_2-removebg-preview.png'),
   };

   const handlePress = () => {
      if (existingOnPress) {
         existingOnPress();
      }

      addToCart(product);
      setIsLiked(!isLiked);
   };

   return (
      <View style={styles.container}>
         <TouchableOpacity onPress={() => navigation.navigate('ProductDetailsTwo')}>
            <Image source={product.image} style={styles.image1} />
         </TouchableOpacity>
         <Text style={styles.gownName}>{product.name}</Text>
         <Text style={styles.price}>${product.price}</Text>
         <TouchableOpacity onPress={handlePress} style={styles.iconContainer}>
            {isLiked ? (
               <Ionicons name="bag" size={20} color={'purple'} />
            ) : (
               <Ionicons name="bag-outline" size={20} color={'purple'} />
            )}
         </TouchableOpacity>
      </View>
   );
};

export default ProductCardtwo;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white',
   },
   image1: {
      height: 256,
      borderRadius: 20,
      width: 170,
      marginVertical: 10,
      marginLeft: 20,
      backgroundColor: 'lavender',
   },
   gownName: {
      fontWeight: 'bold',
      marginLeft: 12,
      fontSize: 20,
      fontFamily: 'Avenir-Light',
   },
   price: {
      marginLeft: 14,
      fontSize: 17,
   },
   iconContainer: {
      height: 34,
      width: 34,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 17,
      position: 'absolute',
      top: 15,
      right: 25,
   },
});
