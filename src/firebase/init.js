import firebase from "firebase";
import firestore from "firebase/firestore";

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyApbmRz93WHBOASVUPa4ikiHs0DTGeIbZg",
  authDomain: "ninja-smoothies-84532.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-84532.firebaseio.com",
  projectId: "ninja-smoothies-84532",
  storageBucket: "ninja-smoothies-84532.appspot.com",
  messagingSenderId: "823835315575",
  appId: "1:823835315575:web:57d0b4eb34207785"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);
//firebaseApp.firestore().settings({ timestampsInSnapshots: true });

// export firestore database
export default firebaseApp.firestore();
