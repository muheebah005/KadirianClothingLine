import { initializeApp } from 'firebase/app';
// import { initializeAuth } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
// import { ReactNativeAsyncStorage } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: 'AIzaSyCZF6PYf9qafq4qiS4__YPnlBAOXUyBN9E',
   authDomain: 'kadirianclothingline.firebaseapp.com',
   projectId: 'kadirianclothingline',
   storageBucket: 'kadirianclothingline.appspot.com',
   messagingSenderId: '852368494623',
   appId: '1:852368494623:web:d8d3544b63f7a6ad92452a',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
