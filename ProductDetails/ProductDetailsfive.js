import {
   StyleSheet,
   Text,
   View,
   Image,
   ScrollView,
   TouchableOpacity,
   Button,
   Card,
} from 'react-native';
import React, { useState, useContext } from 'react';
import Ionicon from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../ItemCard/CartContext';

const ProductDetailsfive = () => {
   const navigation = useNavigation();
   const handleGoBack = () => {
      navigation.goBack();
   };

   const { addToCart } = useContext(CartContext);

   const handleAddToCart = () => {
      addToCart(product);
   };

   const [selectedColor, setSelectedColor] = useState('White');
   const [selectedSize, setSelectedSize] = useState('S');

   const colors = ['White', 'Black', 'Blue'];
   const sizes = ['S', 'M', 'L'];

   const product = {
      id: 5,
      name: 'Plain Hoodie',
      description: 'lorem ipsum dolor...',
      price: 37.23,
      image: require('../assets/images/hoodie_3-removebg-preview.png'),
      selectedColor,
      selectedSize,
   };

   return (
      <ScrollView style={styles.container}>
         <View style={styles.header}>
            <TouchableOpacity onPress={handleGoBack}>
               <AntDesign name="left" size={25} color={'purple'} style={styles.backArrow} />
            </TouchableOpacity>
         </View>
         <Image source={product.image} style={styles.detailImage} />
         <View style={styles.detailContainer}>
            <Text style={styles.brand}>Shein</Text>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>${product.price.toFixed(2)}</Text>
            <Text style={styles.details}>{product.description}</Text>
            <Text style={styles.colorText}>Color</Text>
            <ScrollView horizontal>
               {colors.map((color, index) => (
                  <TouchableOpacity
                     key={index}
                     style={[
                        styles.optionButton,
                        selectedColor === color && styles.selectedOptionButton,
                     ]}
                     onPress={() => setSelectedColor(color)}>
                     <Text style={styles.colorButtonText}>{color}</Text>
                  </TouchableOpacity>
               ))}
            </ScrollView>

            <Text style={styles.colorText}>Size</Text>
            <ScrollView horizontal>
               {sizes.map((size, index) => (
                  <TouchableOpacity
                     key={index}
                     style={[
                        styles.optionButton,
                        selectedSize === size && styles.selectedOptionButton,
                     ]}
                     onPress={() => setSelectedSize(size)}>
                     <Text style={styles.colorButtonText}>{size}</Text>
                  </TouchableOpacity>
               ))}
            </ScrollView>
            <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
               <Text style={styles.addToCartText}>+ Add To Cart</Text>
            </TouchableOpacity>
         </View>
      </ScrollView>
   );
};

export default ProductDetailsfive;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'lavender',
   },
   header: {
      padding: 20,
   },
   backArrow: {
      paddingTop: 20,
   },
   detailImage: {
      width: '90%',
      height: 280,
      resizeMode: 'contain',
   },
   detailContainer: {
      padding: 20,
      backgroundColor: '#b19cd9',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      marginTop: -30,
   },
   brand: {
      fontSize: 16,
      color: 'purple',
      marginBottom: 10,
   },
   name: {
      fontSize: 25,
      fontWeight: 'bold',
      fontFamily: 'Avenir light',
   },
   price: {
      fontSize: 22,
      // fontWeight: 'bold',
      marginVertical: 10,
   },
   details: {
      fontSize: 16,
      color: 'black',
      marginVertical: 10,
   },
   colorText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 10,
   },
   optionButton: {
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 5,
      padding: 10,
      marginRight: 30,
   },
   selectedOptionButton: {
      borderColor: 'black',
      backgroundColor: '#d8bfd8',
   },
   colorButtonText: {
      fontWeight: '500',
      fontSize: '16',
   },
   addToCartButton: {
      backgroundColor: 'black',
      borderRadius: 10,
      marginTop: 20,
      padding: 20,
   },
   addToCartText: {
      color: 'white',
      marginLeft: 120,
   },
});
