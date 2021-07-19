import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC9FudO53Y7QqAEM1jYRxSh0a4YyHmijYk",
  authDomain: "cw-clothing-5662b.firebaseapp.com",
  projectId: "cw-clothing-5662b",
  storageBucket: "cw-clothing-5662b.appspot.com",
  messagingSenderId: "13275192960",
  appId: "1:13275192960:web:b1fb46a4c44de92a63d065",
  measurementId: "G-EPLYTMYNVR",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user");
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
