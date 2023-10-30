// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCTuMR_NVFERdRnyz6wRZsRL70KrUDBHD8',
  authDomain: 'easystay-2709b.firebaseapp.com',
  projectId: 'easystay-2709b',
  storageBucket: 'easystay-2709b.appspot.com',
  messagingSenderId: '311834497870',
  appId: '1:311834497870:web:fcec4d7534d7006631841f',
  measurementId: 'G-P89F6K5EDF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inititalize DB
export const db = getFirestore(app);
