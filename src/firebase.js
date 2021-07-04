// import * as firebase from 'firebase'
import * as firebase from "../node_modules/firebase/firebase"
var firebaseConfig = {
  apiKey: "AIzaSyCM8DIo4jlXFQq2lGUGKjh6iv4_WHaGFx0",
  authDomain: "fir-curd-e0fbb.firebaseapp.com",
  databaseURL: "https://fir-curd-e0fbb-default-rtdb.firebaseio.com",
  projectId: "fir-curd-e0fbb",
  storageBucket: "fir-curd-e0fbb.appspot.com",
  messagingSenderId: "838669997338",
  appId: "1:838669997338:web:9cf824abd41abf37af08a3",
  measurementId: "G-5Y2YPV5W86"
};
// Initialize Firebase
var firedb = firebase.initializeApp(firebaseConfig);
// const firebase.analytics();
export default firedb.database().ref();