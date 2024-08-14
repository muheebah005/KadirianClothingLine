import {
   StyleSheet,
   Text,
   TextInput,
   TouchableOpacity,
   View,
   Image,
   TouchableWithoutFeedback,
   Keyboard,
   ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Loginscreen = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [loading, setLoading] = useState(false);
   const auth = FIREBASE_AUTH;

   const navigation = useNavigation();
   const handleBackArrow = () => {
      navigation.goBack();
   };
   const handleSignUp = () => {
      navigation.navigate('Sign up');
   };
   // const handleProductListing = () => {
   //    navigation.navigate('Bottom');
   // };

   const logIn = async () => {
      setLoading(true);
      try {
         const response = await signInWithEmailAndPassword(auth, email, password);
         console.log(response);
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
         navigation.navigate('Bottom');
      }
   };

   return (
      <TouchableWithoutFeedback
         onPress={() => {
            Keyboard.dismiss();
         }}>
         <View style={styles.container}>
            <TouchableOpacity onPress={handleBackArrow}>
               <AntDesign name="left" size={26} color={'purple'} style={styles.icon} />
            </TouchableOpacity>
            <View style={styles.textContainer}>
               <Text style={styles.textHeading}>"Your Cart is Waiting - Login to Continue!"</Text>
            </View>
            <View style={styles.formContainer}>
               <View style={styles.userContainer}>
                  <Ionicons name="mail-outline" size={30} color={'grey'} />
                  <TextInput
                     style={styles.textStyle}
                     value={email}
                     placeholder="Enter your Email"
                     autoCapitalize="none"
                     onChangeText={(text) => setEmail(text)}
                  />
               </View>
               <View style={styles.passwordContainer}>
                  <Ionicons name="key-outline" size={30} color={'grey'} />
                  <TextInput
                     style={styles.passwordText}
                     placeholder="Enter your Password"
                     secureTextEntry={true}
                     value={password}
                     autoCapitalize="none"
                     onChangeText={(text) => setPassword(text)}
                  />
               </View>
               <TouchableOpacity>
                  <Text style={styles.password}>Forgot Password?</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.loginButton} onPress={logIn}>
                  {loading ? (
                     <ActivityIndicator size={'large'} color={'lavender'} />
                  ) : (
                     <>
                        <Text style={styles.loginButtonText}>Login</Text>
                     </>
                  )}
               </TouchableOpacity>
               <View style={styles.lineContainer}>
                  <View style={styles.line} />
                  <Text style={styles.loginWith}>or login with</Text>
                  <View style={styles.line} />
               </View>

               <TouchableOpacity style={styles.imageContainer}>
                  <View style={styles.googleBorder}>
                     <Image
                        source={require('../assets/images/google-removebg-preview.png')}
                        style={styles.googleImage}
                     />
                     <Text>Google</Text>
                  </View>
               </TouchableOpacity>
               <View style={styles.footerContainer}>
                  <Text style={styles.accountText}>Don't have an account?</Text>
                  <TouchableOpacity onPress={handleSignUp}>
                     <Text style={styles.signupText}>Sign Up</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View>
      </TouchableWithoutFeedback>
   );
};

export default Loginscreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white',
   },
   icon: {
      paddingTop: 30,
   },
   textContainer: {
      padding: 40,
   },
   textHeading: {
      fontSize: 40,
      paddingRight: 20,
      fontWeight: 'bold',
      color: 'purple',
      fontFamily: 'Cochin-BoldItalic',
   },
   formContainer: {
      margin: 20,
      padding: 10,
   },
   userContainer: {
      borderWidth: 1,
      flexDirection: 'row',
      borderColor: 'grey',
      width: '100%',
      height: 50,
      borderRadius: 100,
      alignItems: 'center',
      padding: 5,
   },
   textStyle: {
      flex: 1,
      fontFamily: 'Avenir-Light',
      fontSize: 20,
      padding: 10,
   },
   passwordContainer: {
      borderWidth: 1,
      flexDirection: 'row',
      borderColor: 'grey',
      width: '100%',
      height: 50,
      borderRadius: 100,
      alignItems: 'center',
      marginTop: 20,
      padding: 5,
   },
   passwordText: {
      flex: 1,
      fontFamily: 'Avenir-Light',
      fontSize: 20,
      padding: 10,
   },
   password: {
      textAlign: 'right',
      margin: 10,
   },
   loginButton: {
      borderWidth: 1,
      borderColor: 'purple',
      width: '70%',
      height: 50,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      marginLeft: 50,
      marginTop: 30,
      backgroundColor: 'purple',
      padding: 10,
   },
   loginButtonText: {
      color: 'white',
      fontFamily: 'Avenir-Light',
      fontSize: 25,
      fontWeight: 'bold',
   },
   loginWith: {
      textAlign: 'center',
      marginBottom: 30,
   },
   lineContainer: {
      flexDirection: 'row',
      alignItem: 'center',
      justifyContent: 'center',
      marginVertical: 30,
   },
   line: {
      flex: 1,
      height: 1,
      backgroundColor: 'grey',
      marginVertical: 10,
   },
   imageContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
   },
   googleImage: {
      height: 18,
      width: 17,
      marginRight: 7,
   },

   googleBorder: {
      borderWidth: 1,
      width: '40%',
      height: 50,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 50,
      marginLeft: 10,
      padding: 10,
      flexDirection: 'row',
   },
   footerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
   },
   accountText: {
      fontWeight: 'light',
      marginRight: 2,
      fontSize: 20,
   },
   signupText: {
      fontWeight: 'bold',
      fontSize: 20,
   },
});
