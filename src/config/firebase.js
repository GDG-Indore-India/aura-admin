import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/functions';

const firebaseConfig = {
    apiKey: "AIzaSyDTiDYPJoN3vIsSMt05Tb0u0fLsKup6T9s",
    authDomain: "gdg-indore-aura.firebaseapp.com",
    databaseURL: "https://gdg-indore-aura.firebaseio.com",
    projectId: "gdg-indore-aura",
    storageBucket: "gdg-indore-aura.appspot.com",
    messagingSenderId: "869364317165",
    appId: "1:869364317165:web:65e868c57e78ed137cc5e4"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({ synchronizeTabs: !0 }).catch(() => { console.warn("DB offline support not available") })
export default {
    notificationSupported: firebase.messaging.isSupported(),
    messaging: (firebase.messaging.isSupported()) ? firebase.messaging() : null,
    firestore: firebase.firestore(),
    auth: firebase.auth(),
    authw: firebase.auth,
    storage: firebase.storage(),
    functions: firebase.functions()
};