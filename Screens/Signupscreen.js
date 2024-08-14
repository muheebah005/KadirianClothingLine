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
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signupscreen = () => {
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [loading, setLoading] = useState(false);
   const auth = FIREBASE_AUTH;

   const navigation = useNavigation();
   const handleBackArrow = () => {
      navigation.goBack();
   };
   const handleLogIn = () => {
      navigation.navigate('Log in');
   };

   const signUp = async () => {
      setLoading(true);
      try {
         const response = await createUserWithEmailAndPassword(auth, email, password);
         console.log(response);
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
         navigation.navigate('Log in');
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
               <Text style={styles.textHeading}>
                  "Unlock Your Wardrobe - Sign Up for Exclusive Styles!"
               </Text>
            </View>
            <View style={styles.formContainer}>
               <View style={styles.userContainer}>
                  <EvilIcons name="user" size={30} color={'grey'} />
                  <TextInput
                     style={styles.textStyle}
                     value={username}
                     placeholder="Enter Your Username"
                     onChangeText={(text) => setUsername(text)}
                  />
               </View>
               <View style={styles.emailContainer}>
                  <Ionicons name="mail-outline" size={30} color={'grey'} />
                  <TextInput
                     style={styles.textStyle}
                     placeholder="Enter your email"
                     value={email}
                     onChangeText={(text) => setEmail(text)}
                     autoCapitalize="none"
                  />
               </View>
               <View style={styles.emailContainer}>
                  <Ionicons name="key-outline" size={25} color={'grey'} />
                  <TextInput
                     style={styles.passwordText}
                     placeholder="Enter your Password"
                     secureTextEntry={true}
                     value={password}
                     onChangeText={(text) => setPassword(text)}
                     autoCapitalize="none"
                  />
               </View>

               <TouchableOpacity style={styles.signupButton} onPress={signUp}>
                  {loading ? (
                     <ActivityIndicator size={'large'} color={'lavender'} />
                  ) : (
                     <>
                        <Text style={styles.signupButtonText}>Sign Up</Text>
                     </>
                  )}
               </TouchableOpacity>
               <View style={styles.lineContainer}>
                  <View style={styles.line} />
                  <Text style={styles.loginWith}>or sign up with</Text>
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
                  <Text style={styles.accountText}>Already have an account?</Text>
                  <TouchableOpacity onPress={handleLogIn}>
                     <Text style={styles.loginText}>Log in</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View>
      </TouchableWithoutFeedback>
   );
};

export default Signupscreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white',
   },
   icon: {
      paddingTop: 30,
   },
   textContainer: {
      padding: 20,
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
   emailContainer: {
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
   signupButton: {
      borderWidth: 1,
      borderColor: 'grey',
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
   signupButtonText: {
      color: 'white',
      fontFamily: 'Avenir-Light',
      fontSize: 25,
      fontWeight: 'bold',
   },
   signupWith: {
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
      marginRight: 10,
      marginLeft: 20,
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
   loginText: {
      fontWeight: 'bold',
      fontSize: 20,
   },
});
