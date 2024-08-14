import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
   const [cart, setCart] = useState([]);

   const addToCart = (product) => {
      setCart((prevCart) => {
         const existingProduct = prevCart.find(
            (item) =>
               item.id === product.id &&
               item.selectedColor === product.selectedColor &&
               item.selectedSize === product.selectedSize
         );

         if (existingProduct) {
            return prevCart.map((item) =>
               item.id === product.id &&
               item.selectedColor === product.selectedColor &&
               item.selectedSize === product.selectedSize
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
            );
         } else {
            return [...prevCart, { ...product, quantity: 1 }];
         }
      });
   };

   const removeFromCart = (id, selectedColor, selectedSize) => {
      setCart((prevCart) =>
         prevCart.filter(
            (item) =>
               item.id !== id ||
               item.selectedColor !== selectedColor ||
               item.selectedSize !== selectedSize
         )
      );
   };

   const increaseQuantity = (id, selectedColor, selectedSize) => {
      setCart((prevCart) =>
         prevCart.map((item) =>
            item.id === id &&
            item.selectedColor === selectedColor &&
            item.selectedSize === selectedSize
               ? { ...item, quantity: item.quantity + 1 }
               : item
         )
      );
   };

   const decreaseQuantity = (id, selectedColor, selectedSize) => {
      setCart((prevCart) =>
         prevCart.map((item) =>
            item.id === id &&
            item.selectedColor === selectedColor &&
            item.selectedSize === selectedSize
               ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
               : item
         )
      );
   };

   return (
      <CartContext.Provider
         value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
         {children}
      </CartContext.Provider>
   );
};

// export default CartProvider;

const styles = StyleSheet.create({});
