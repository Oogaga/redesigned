// Import the functions you need from the SDKs you need
import { firebaseApp } from "firebase/app";
import firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfUSf4rFpZkIvtExKMzwsdJzMTSvr1wDc",
  authDomain: "redesigned-a937a.firebaseapp.com",
  projectId: "redesigned-a937a",
  storageBucket: "redesigned-a937a.appspot.com",
  messagingSenderId: "244856289772",
  appId: "1:244856289772:web:1e0c8df87a2755cfef28c9"
};

// Initialize Firebase
const app = firebaseApp(firebaseConfig);


export default firebase;

const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true,
};
firestore.settings(settings);


export {
  firestore,
};
