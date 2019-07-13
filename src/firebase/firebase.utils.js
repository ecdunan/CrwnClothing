import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAZEPCM3iyNdCOs82FrBJyC2Pq9JgIpCu8",
    authDomain: "crwn-clothing-d0197.firebaseapp.com",
    databaseURL: "https://crwn-clothing-d0197.firebaseio.com",
    projectId: "crwn-clothing-d0197",
    storageBucket: "",
    messagingSenderId: "1009354298380",
    appId: "1:1009354298380:web:e6aef970e58b96d6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;