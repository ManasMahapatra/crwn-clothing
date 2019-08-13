import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let config = {
  apiKey: "AIzaSyBVeHxXivfIFGlHEi63B4FWBD-FBNZ9-q0",
  authDomain: "crwn-db-3011f.firebaseapp.com",
  databaseURL: "https://crwn-db-3011f.firebaseio.com",
  projectId: "crwn-db-3011f",
  storageBucket: "",
  messagingSenderId: "906189662827",
  appId: "1:906189662827:web:9269fbb6d61c549a"
}
export const createUserProfileDocument = async(userAuth,additionalData) => {
  if (!userAuth) return;
  let userRef = await firestore.doc(`users/${userAuth.uid}`);
  let snapShot = await userRef.get();
  if(!snapShot.exists){
    const { displayName,email } = userAuth;
    const createdAt = new Date();
    try {

      await userRef.set({
        //In ES6 if you pass attribute name, it will documented with params with same names.
        displayName,email,createdAt,...additionalData
      })
    } catch (error) {
      console.log('error creating user ',error.message);
    }
  }
  return userRef;
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// firebase.auth.GoogleAuthProvider is a class that allows Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
//Google account prompt
provider.setCustomParameters({ prompt:'select_account' });
//signInWithPopup takes an authentication object, as it could be anything, from google...linkedin etc
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
