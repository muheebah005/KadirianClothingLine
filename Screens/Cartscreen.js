import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useContext } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../ItemCard/CartContext';
import Ionicons from '@expo/vector-icons/Ionicons';

const Cartscreen = () => {
   const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

   const navigation = useNavigation();
   const handleBackArrow = () => {
      navigation.goBack();
   };

   const handleCheckOut = () => {
      navigation.navigate('checkout', { total });
   };

   const renderCartItem = ({ item }) => (
      <View style={styles.container}>
         <View style={styles.cartItem}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.itemDetails}>
               <Text style={styles.itemName}>{item.name}</Text>
               <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
               <View style={styles.quantityContainer}>
                  <TouchableOpacity
                     onPress={() =>
                        decreaseQuantity(item.id, item.selectedColor, item.selectedSize)
                     }
                     style={styles.quantityButton}>
                     <Text style={styles.quantityText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{item.quantity}</Text>
                  <TouchableOpacity
                     onPress={() =>
                        increaseQuantity(item.id, item.selectedColor, item.selectedSize)
                     }
                     style={styles.quantityButton}>
                     <Text style={styles.quantityText}>+</Text>
                  </TouchableOpacity>
               </View>
            </View>
            <TouchableOpacity
               onPress={() => removeFromCart(item.id, item.selectedColor, item.selectedSize)}
               style={styles.removeButton}>
               <Ionicons
                  name="trash-outline"
                  size={20}
                  color={'purple'}
                  style={styles.removeText}
               />
            </TouchableOpacity>
         </View>
      </View>
   );
   const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
   const shipping = 5.0;
   const total = subtotal + shipping;

   return (
      <View style={styles.container}>
         <View style={styles.headerContainer}>
            <TouchableOpacity onPress={handleBackArrow}>
               <AntDesign name="left" size={22} color={'purple'} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.cartText}>My Cart</Text>
         </View>

         <FlatList
            data={cart}
            renderItem={renderCartItem}
            keyExtractor={(item) => `${item.id}-${item.selectedColor}-${item.selectedSize}`}
         />
         <View style={styles.totalContainer}>
            <View style={styles.totalRow}>
               <Text style={styles.totalLabel}>Sub Total:</Text>
               <Text style={styles.totalAmount}>${subtotal.toFixed(2)}</Text>
            </View>
            <View style={styles.totalRow}>
               <Text style={styles.totalLabel}>Shipping: </Text>
               <Text style={styles.totalAmount}>${shipping.toFixed(2)}</Text>
            </View>
            <View style={styles.totalRow}>
               <Text style={styles.totalLabel}>Cart Total: </Text>
               <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
            </View>
         </View>
         <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckOut}>
            <Text style={styles.checkoutText}>Checkout</Text>
         </TouchableOpacity>
      </View>
   );
};

export default Cartscreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 10,
      backgroundColor: 'white',
      paddingTop: 10,
   },

   icon: {
      marginRight: 8,
   },
   headerContainer: {
      paddingTop: 10,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 12,
   },
   cartText: {
      fontSize: 25,
      fontWeight: 'bold',
      fontFamily: 'Avenir Light',
      paddingLeft: 100,
      color: 'purple',
   },

   cartItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
      marginTop: 5,
   },
   image: {
      width: 70,
      height: 70,
      borderRadius: 5,
   },
   itemDetails: {
      flex: 1,
      marginLeft: 10,
   },
   itemName: {
      fontSize: 16,
      marginBottom: 5,
      fontWeight: 'bold',
   },
   itemPrice: {
      fontSize: 16,
      marginBottom: 5,
      color: '#555',
   },
   quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   quantityButton: {
      width: 30,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginHorizontal: 5,
   },
   quantityText: {
      fontSize: 20,
      color: '#333',
   },
   quantity: {
      fontSize: 16,
   },
   removeButton: {
      padding: 10,
   },
   removeText: {
      fontSize: 20,
   },
   totalContainer: {
      marginTop: 20,
      paddingHorizontal: 10,
   },
   totalRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 5,
   },
   totalLabel: {
      fontSize: 16,
      fontWeight: 'bold',
   },
   totalAmount: {
      fontSize: 16,
   },
   checkoutButton: {
      marginTop: 20,
      backgroundColor: 'purple',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
   },
   checkoutText: {
      fontSize: 18,
      color: '#fff',
   },
});
