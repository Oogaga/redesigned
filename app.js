import { Injectable } from '@angular/core';
import firebase from "firebase/app";
import {getAuth, signOut, signInWithPopup, GoogleAuthProvider} from "firebase/firebase-auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDfUSf4rFpZkIvtExKMzwsdJzMTSvr1wDc",
  authDomain: "redesigned-a937a.firebaseapp.com",
  projectId: "redesigned-a937a",
  storageBucket: "redesigned-a937a.appspot.com",
  messagingSenderId: "244856289772",
  appId: "1:244856289772:web:1e0c8df87a2755cfef28c9"
})
const provider = new GoogleAuthProvider();

const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});


signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.

    // @ts-ignore
    const token = GoogleAuthProvider.credentialFromResult(result).accessToken;

    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });


