import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDhFkgDt9H3JobIyGbsCYm7Ycgdd9lJDKs",
    authDomain: "crwn-db-cf00b.firebaseapp.com",
    projectId: "crwn-db-cf00b",
    storageBucket: "crwn-db-cf00b.appspot.com",
    messagingSenderId: "215469269599",
    appId: "1:215469269599:web:7b1e4c23307780e3def1ea",
    measurementId: "G-PE4NG0Z8JZ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

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
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user.', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;