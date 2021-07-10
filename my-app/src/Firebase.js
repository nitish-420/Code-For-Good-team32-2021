import firebase from "firebase/app";
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyCU2gsVqCYVJgux_kjoev7TwSKrgwhJpf4",
    authDomain: "code-for-good-49956.firebaseapp.com",
    projectId: "code-for-good-49956",
    storageBucket: "code-for-good-49956.appspot.com",
    messagingSenderId: "304101923992",
    appId: "1:304101923992:web:6dbe89ea8f70db3c5e84ed"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app